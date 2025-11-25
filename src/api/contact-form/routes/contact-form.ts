/**
 * contact-form router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::contact-form.contact-form', {
  config: {
    find: {
      auth: {
        scope: ['api::contact-form.contact-form.find']
      }
    },
    findOne: {
      auth: {
        scope: ['api::contact-form.contact-form.findOne']
      }
    },
    create: {
      // Permitir criação sem autenticação (formulário público)
      auth: false
    },
    update: {
      auth: {
        scope: ['api::contact-form.contact-form.update']
      }
    },
    delete: {
      auth: {
        scope: ['api::contact-form.contact-form.delete']
      }
    }
  }
});
