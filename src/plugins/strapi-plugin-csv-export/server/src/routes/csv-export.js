'use strict';

module.exports = [
  {
    method: 'GET',
    path: '/export/:contentType',
    handler: 'csv-export.export',
    config: {
      policies: [],
      auth: {
        scope: ['find'],
      },
    },
  },
];

