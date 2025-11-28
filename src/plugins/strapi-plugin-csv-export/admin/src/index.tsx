/**
 * Plugin de Exportação CSV - Admin Panel
 */

import { Button } from '@strapi/design-system';
import { useFetchClient } from '@strapi/helper-plugin';
import { Download } from '@strapi/icons';
import * as React from 'react';

const ExportButton = () => {
  const { get } = useFetchClient();
  const [isExporting, setIsExporting] = React.useState(false);

  // Obter contentType da URL
  const getContentType = React.useCallback(() => {
    if (typeof window === 'undefined') return null;

    const path = window.location.pathname;
    const match = path.match(/content-manager\/collection-types\/([^/?]+)/);
    if (match) {
      return match[1];
    }
    return null;
  }, []);

  const contentType = React.useMemo(() => getContentType(), [getContentType]);

  const handleExport = React.useCallback(async () => {
    if (!contentType) {
      alert('Content type não encontrado');
      return;
    }

    try {
      setIsExporting(true);

      const response = await get(`/csv-export/export/${contentType}`, {
        responseType: 'blob',
      });

      if (typeof window === 'undefined' || typeof document === 'undefined') {
        throw new Error('Window or document not available');
      }

      const blob = new Blob([response.data], { type: 'text/csv;charset=utf-8;' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;

      const contentDisposition = response.headers['content-disposition'];
      let filename = `export-${new Date().toISOString().split('T')[0]}.csv`;
      if (contentDisposition) {
        const filenameMatch = contentDisposition.match(/filename="?(.+)"?/i);
        if (filenameMatch) {
          filename = filenameMatch[1];
        }
      }

      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error('Erro ao exportar CSV:', error);
      alert('Erro ao exportar dados: ' + (error.message || 'Erro desconhecido'));
    } finally {
      setIsExporting(false);
    }
  }, [contentType, get]);

  if (!contentType) {
    return null;
  }

  return React.createElement(
    Button,
    {
      variant: 'secondary',
      startIcon: React.createElement(Download),
      onClick: handleExport,
      disabled: isExporting,
    },
    isExporting ? 'Exportando...' : 'Exportar CSV'
  );
};

export default {
  register(app: any) {
    // Registrar plugin
    app.registerPlugin({
      id: 'csv-export',
      name: 'CSV Export',
      isReady: true,
    });
  },

  bootstrap(app: any) {
    // Injetar botão na área de ações da lista usando bootstrap
    app.injectContentManagerComponent('listView', 'actions', {
      name: 'csv-export-button',
      Component: ExportButton,
    });
  },
};

