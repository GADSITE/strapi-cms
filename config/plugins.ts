export default ({ env }) => ({
  // Configuração do plugin de Internacionalização (i18n)
  i18n: {
    enabled: true,
    config: {
      // Idioma padrão
      defaultLocale: 'pt-BR',
      // Lista de idiomas disponíveis
      locales: ['pt-BR', 'en', 'es'],
    },
  },
  'import-export-entries': {
    enabled: true,
  },
});
