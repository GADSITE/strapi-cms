/**
 * contact-form controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::contact-form.contact-form', ({ strapi }) => ({
  async create(ctx) {
    try {
      const { body } = ctx.request;

      // Adicionar informações de rastreamento
      const data = {
        ...body.data,
        ipAddress: ctx.request.ip || ctx.request.connection.remoteAddress,
        userAgent: ctx.request.headers['user-agent'],
        submittedAt: new Date().toISOString(),
      };

      // Validar dados obrigatórios
      if (!data.name || !data.email || !data.phone || !data.subject) {
        return ctx.badRequest('Campos obrigatórios: name, email, phone, subject');
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        return ctx.badRequest('Email inválido');
      }

      // Criar o registro
      const contactForm = await strapi.entityService.create('api::contact-form.contact-form', {
        data,
      });

      // Log para debug
      console.log('Novo formulário de contato criado:', contactForm);

      return ctx.created(contactForm);
    } catch (error) {
      console.error('Erro ao criar formulário de contato:', error);
      return ctx.internalServerError('Erro interno do servidor');
    }
  },

  async find(ctx) {
    // Apenas administradores podem ver os formulários
    if (!ctx.state.user) {
      return ctx.unauthorized('Acesso negado');
    }

    return super.find(ctx);
  },

  async findOne(ctx) {
    // Apenas administradores podem ver os formulários
    if (!ctx.state.user) {
      return ctx.unauthorized('Acesso negado');
    }

    return super.findOne(ctx);
  },

  async update(ctx) {
    // Apenas administradores podem atualizar os formulários
    if (!ctx.state.user) {
      return ctx.unauthorized('Acesso negado');
    }

    return super.update(ctx);
  },

  async delete(ctx) {
    // Apenas administradores podem deletar os formulários
    if (!ctx.state.user) {
      return ctx.unauthorized('Acesso negado');
    }

    return super.delete(ctx);
  }
}));
