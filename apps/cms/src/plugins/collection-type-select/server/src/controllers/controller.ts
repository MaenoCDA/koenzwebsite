import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  index(ctx) {
    const filteredContentTypes = strapi.config.contentTypes
      .filter((contentType: any) => {
        const uid = contentType.uid;

        return uid.includes('api::') && contentType.kind === 'collectionType';
      })
      .map((contentType: any) => ({
        id: contentType.uid,
        name: contentType.info.displayName,
      }));

    ctx.body = filteredContentTypes;
  },

  all(ctx) {
    ctx.body = strapi.config.contentTypes;
  },
});

export default controller;
