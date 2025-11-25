/**
 * whistleblower-channel router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::whistleblower-channel.whistleblower-channel', {
  config: {
    find: {
      // Permitir acesso público para buscar dados da página
      auth: false
    },
    findOne: {
      // Permitir acesso público para buscar dados da página
      auth: false
    },
    create: {
      // Apenas administradores podem criar
      auth: {
        scope: ['api::whistleblower-channel.whistleblower-channel.create']
      }
    },
    update: {
      // Apenas administradores podem atualizar
      auth: {
        scope: ['api::whistleblower-channel.whistleblower-channel.update']
      }
    },
    delete: {
      // Apenas administradores podem deletar
      auth: {
        scope: ['api::whistleblower-channel.whistleblower-channel.delete']
      }
    }
  }
});
