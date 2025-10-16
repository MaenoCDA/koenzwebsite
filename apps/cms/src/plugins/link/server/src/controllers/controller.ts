import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async routes(ctx) {
    const routes = await strapi.plugin('link').service('service').routes(ctx);

    ctx.body = { data: { routes } };
  },
});

export default controller;
