import type { Core } from '@strapi/strapi';

const controller = ({ strapi }: { strapi: Core.Strapi }) => ({
  async handleWebhook(ctx) {
    const { entry, uid, previous, action, paths } = ctx.request?.body;

    if (!entry || !uid) {
      return;
    }

    const routes = await strapi
      .plugin('link')
      .service('service')
      .routes({
        request: { query: { documentId: entry.documentId } },
      });

    const previousSlug = previous
      ? previous.parent
        ? `/${previous.parent.slug}/${previous.slug}`
        : `/${previous.slug}`
      : null;
    const newSlug = entry.parent ? `/${entry.parent.slug}/${entry.slug}` : `/${entry.slug}`;

    const route: any = Object.values(routes).flat().pop();

    if (route) {
      const oldPath = route.route;
      const lastSlashIndex = oldPath.lastIndexOf('/');
      const pathWithoutLastPart = oldPath.substring(0, lastSlashIndex);

      paths.push(route.parent ? route.parent.route : pathWithoutLastPart);
    }

    // Include the previous slug and tag in the webhook payload
    ctx.send({
      previousSlug: previous && previous.route ? previous.route.route : null,
      newSlug: route ? route.route : newSlug,
      oldTag:
        previous && previousSlug !== newSlug
          ? `${uid}${previous.slug ? `-${previous.slug}` : ''}-${entry.locale}`
          : null,
      newTag: `${uid}${entry.slug ? `-${entry.slug}` : ''}-${entry.locale}`,
      entry,
      uid,
      action,
      paths: paths || [],
    });
  },
});

export default controller;
