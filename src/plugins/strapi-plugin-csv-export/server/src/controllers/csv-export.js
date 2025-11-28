'use strict';

/**
 * Controller para exportação CSV
 */
module.exports = ({ strapi }) => ({
  /**
   * Exporta uma collection para CSV
   */
  async export(ctx) {
    try {
      const { contentType } = ctx.params;
      const { query } = ctx;

      if (!contentType) {
        return ctx.badRequest('Content type não especificado');
      }

      // Verificar se o content type existe
      // O contentType pode vir como slug (ex: "contact-form") ou UID completo (ex: "api::contact-form.contact-form")
      let uid = contentType;

      // Se não for um UID completo, tentar construir
      if (!uid.includes('::')) {
        uid = `api::${contentType}.${contentType}`;
      }

      if (!strapi.contentTypes[uid]) {
        // Tentar encontrar por slug
        const allContentTypes = Object.keys(strapi.contentTypes);
        const found = allContentTypes.find((ct) => {
          const parts = ct.split('.');
          return parts[parts.length - 1] === contentType;
        });

        if (found) {
          uid = found;
        } else {
          return ctx.notFound(`Content type não encontrado: ${contentType}`);
        }
      }

      // Exportar dados
      const { csv, filename } = await strapi
        .plugin('csv-export')
        .service('csv-export')
        .exportCollection(uid, query);

      // Configurar resposta
      ctx.set('Content-Type', 'text/csv; charset=utf-8');
      ctx.set('Content-Disposition', `attachment; filename="${filename}"`);
      ctx.body = csv;
    } catch (error) {
      strapi.log.error('Erro ao exportar CSV:', error);
      return ctx.internalServerError(error.message || 'Erro ao exportar dados');
    }
  },
});

