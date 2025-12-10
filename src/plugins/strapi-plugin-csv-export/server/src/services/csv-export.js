'use strict';

/**
 * Service para exportação CSV
 */
module.exports = ({ strapi }) => ({
  /**
   * Converte um valor para formato CSV
   */
  formatValueForCSV(value) {
    if (value === null || value === undefined) {
      return '';
    }

    if (typeof value === 'boolean') {
      return value ? 'Sim' : 'Não';
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        return value.map((item) => this.formatValueForCSV(item)).join('; ');
      }
      return JSON.stringify(value);
    }

    const stringValue = String(value);
    // Escapar aspas e quebras de linha
    if (stringValue.includes('"') || stringValue.includes('\n') || stringValue.includes(',')) {
      return `"${stringValue.replace(/"/g, '""')}"`;
    }

    return stringValue;
  },

  /**
   * Converte dados para formato CSV
   */
  convertToCSV(data, headers) {
    // BOM para UTF-8 (permite Excel abrir corretamente)
    const BOM = '\uFEFF';

    // Criar linha de cabeçalho
    const headerRow = headers.map((header) => this.formatValueForCSV(header)).join(',');

    // Criar linhas de dados
    const dataRows = data.map((row) => {
      return headers.map((header) => this.formatValueForCSV(row[header] || '')).join(',');
    });

    return BOM + [headerRow, ...dataRows].join('\n');
  },

  /**
   * Exporta dados de uma collection para CSV
   */
  async exportCollection(uid, query = {}) {
    try {
      // Buscar todos os registros
      const entries = await strapi.entityService.findMany(uid, {
        ...query,
        populate: '*',
      });

      if (!entries || (Array.isArray(entries) && entries.length === 0)) {
        return {
          csv: '',
          filename: `${uid.split('.').pop()}-${new Date().toISOString().split('T')[0]}.csv`,
        };
      }

      const entriesArray = Array.isArray(entries) ? entries : [entries];

      // Obter schema da collection
      const contentType = strapi.contentTypes[uid];
      if (!contentType) {
        throw new Error(`Content type ${uid} não encontrado`);
      }

      // Gerar cabeçalhos baseados nos atributos
      const headers = ['ID'];
      const attributes = contentType.attributes;

      Object.keys(attributes).forEach((key) => {
        if (key !== 'id') {
          headers.push(key.charAt(0).toUpperCase() + key.slice(1));
        }
      });

      // Adicionar campos de data padrão
      if (!headers.includes('Criado em')) {
        headers.push('Criado em');
      }
      if (!headers.includes('Atualizado em')) {
        headers.push('Atualizado em');
      }

      // Formatar dados
      const formattedData = entriesArray.map((entry) => {
        const row = {
          ID: entry.id || '',
        };

        Object.keys(attributes).forEach((key) => {
          if (key !== 'id') {
            const value = entry[key];
            if (value === null || value === undefined) {
              row[key.charAt(0).toUpperCase() + key.slice(1)] = '';
            } else if (typeof value === 'object') {
              if (Array.isArray(value)) {
                row[key.charAt(0).toUpperCase() + key.slice(1)] = value
                  .map((item) => {
                    if (typeof item === 'object' && item !== null) {
                      return item.id || JSON.stringify(item);
                    }
                    return String(item);
                  })
                  .join('; ');
              } else if (value.id) {
                row[key.charAt(0).toUpperCase() + key.slice(1)] = value.id;
              } else {
                row[key.charAt(0).toUpperCase() + key.slice(1)] = JSON.stringify(value);
              }
            } else if (value instanceof Date) {
              row[key.charAt(0).toUpperCase() + key.slice(1)] = value.toLocaleString('pt-BR');
            } else {
              row[key.charAt(0).toUpperCase() + key.slice(1)] = value;
            }
          }
        });

        row['Criado em'] = entry.createdAt
          ? new Date(entry.createdAt).toLocaleString('pt-BR')
          : '';
        row['Atualizado em'] = entry.updatedAt
          ? new Date(entry.updatedAt).toLocaleString('pt-BR')
          : '';

        return row;
      });

      const csv = this.convertToCSV(formattedData, headers);
      const filename = `${uid.split('.').pop()}-${new Date().toISOString().split('T')[0]}.csv`;

      return {
        csv,
        filename,
      };
    } catch (error) {
      strapi.log.error('Erro ao exportar collection:', error);
      throw error;
    }
  },
});




