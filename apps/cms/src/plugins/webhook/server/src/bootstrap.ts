//@ts-nocheck
import type { Core } from '@strapi/strapi';

const getRelatedPaths = async (strapi, event) => {
  const paths = [];

  if (
    !event.result.tags ||
    !event.params.data.tags ||
    (event.params.data.tags && event.params.data.tags.set.length === 0)
  ) {
    return paths;
  }

  const routes = await strapi.plugin('link').service('service').routes(event);

  const tagIds = event.params.data.tags.set.map((tag) => tag.id);

  const documentIds = await strapi.documents(event.model.uid).findMany({
    filters: {
      documentId: { $ne: event.result.documentId },
      tags: { id: { $eq: tagIds } },
    },
    sort: 'publishedAt:desc',
    limit: 3,
    status: 'published',
    populate: '*',
  });

  if (!documentIds.length) {
    return paths;
  }

  const filteredDocumentIds = documentIds.map((document) => document.documentId);
  const filteredRoutes = Object.values(routes)
    .flat()
    .filter((route) => filteredDocumentIds.includes(route.documentId));

  paths.push(...filteredRoutes.map((route) => route.route));

  return paths;
};

const getLatestPaths = async (strapi, event) => {
  const paths = [];
  const routes = await strapi.plugin('link').service('service').routes(event);
  const documentIds = await strapi.documents(event.model.uid).findMany({
    filters: { documentId: { $ne: event.result.documentId } },
    sort: 'publishedAt:desc',
    limit: 3,
    status: 'published',
    populate: { hero: { populate: '*' } },
  });

  if (!documentIds.length) {
    return paths;
  }

  const filteredDocumentIds = documentIds.map((document) => document.documentId);
  const filteredRoutes = Object.values(routes)
    .flat()
    .filter((route) => filteredDocumentIds.includes(route.documentId));

  paths.push(...filteredRoutes.map((route) => route.route));
  return paths;
};

const getTeaserPaths = async (strapi, event) => {
  const paths = [];
  const routes = await strapi.plugin('link').service('service').routes(event);
  const contentTypes = strapi.config.contentTypes.map((c) => c.uid);
  const filteredDocumentIds = [];

  await Promise.all(
    contentTypes.map(async (contentType) => {
      const documentIds = await strapi.documents(contentType).findMany({
        status: 'published',
        populate: ['flexContent'],
        limit: -1,
        start: 0,
      });

      const filteredDocuments = documentIds
        .filter((document) => {
          if (!document.flexContent || !Array.isArray(document.flexContent)) {
            return false;
          }

          return document.flexContent.some(
            (content) => content.__component && content.__component.includes('teaser.')
          );
        })
        .map((document) => document.documentId);

      filteredDocumentIds.push(...filteredDocuments);
    })
  );

  const filteredRoutes = Object.values(routes)
    .flat()
    .filter((route) => filteredDocumentIds.includes(route.documentId));

  paths.push(...filteredRoutes.map((route) => route.route));

  return paths;
};

const bootstrap = ({ strapi }: { strapi: Core.Strapi }) => {
  let models: string[] = [];
  Object.entries(strapi.contentTypes).forEach(([key, value]) => {
    if (
      key.startsWith('plugin::upload') ||
      (!key.startsWith('plugin::') && !key.startsWith('admin::'))
    ) {
      models.push(key as string);
    }
  });

  strapi.db?.lifecycles.subscribe({
    models,
    async beforeUpdate(event: any) {
      const { model, params } = event;
      const { slug } = params.data;
      const { id } = params.where;

      if (!slug) {
        return;
      }

      // // Fetch the existing entry to get the previous slug
      const existingEntry = await strapi.db
        .query(model.uid)
        .findOne({ where: { id }, populate: { parent: true } });

      const routes = await strapi
        .plugin('link')
        .service('service')
        .routes({
          request: { query: { slug: existingEntry.slug } },
        });

      params.previousRoute = routes[existingEntry.locale] ? routes[existingEntry.locale].pop() : [];
      params.previousSlug = existingEntry.slug;
      params.previousParent = existingEntry.parent;
    },
    async afterUpdate(event) {
      const { model, result, params } = event;
      const { previousSlug, previousParent, previousRoute } = params as any;
      const paths = [];
      // Check for teasers and revalidatePaths
      if (params.data && (params.data.parentUid || params.data.parent)) {
        paths.push(...(await getTeaserPaths(strapi, event)));
      }

      if (previousSlug !== result.slug) {
        paths.push('/');
        // Add redirect + revalidate path of old slug
        // await strapi.documents('api::redirect.redirect').create({
        //   data: {
        //     source: previousRoute
        //       ? previousRoute.route
        //       : `/${result.locale}${previousParent ? `/${previousParent.slug}` : ''}/${previousSlug}`,
        //     destination: `${result.locale}${result.parent ? `/${result.parent.slug}` : ''}/${result.slug}`,
        //   },
        // });
      }

      await strapi
        .plugin('webhook')
        .controller('controller')
        .handleWebhook({
          request: {
            body: {
              action: 'update',
              previous: {
                route: previousRoute,
                slug: previousSlug,
                parent: previousParent,
              },

              entry: result,
              uid: model.uid,
              paths: paths,
            },
          },
          send: async (payload) => {
            await trigger(payload);
          },
          badRequest: (message) => {
            console.error('[WEBHOOK LOG]', message);
          },
        });
    },
    async beforeCreate(event) {},
    async beforeDelete(event) {
      const { model, params } = event;

      const deletedEntry = await strapi.db.query(model.uid).findOne(params);

      const deletedRoute = await strapi
        .plugin('link')
        .service('service')
        .routes({
          request: { query: { documentId: deletedEntry.documentId } },
        });

      params.oldPath = Object.values(deletedRoute)
        .flat()
        .map((route) => route.route)
        .pop();
    },
    async afterDelete(event) {
      const { model, result, params } = event;
      const paths = [];

      // Check for teasers and revalidatePaths
      if (result.parentUid || result.parent) {
        paths.push(...(await getTeaserPaths(strapi, event)));
        paths.push(...(await getLatestPaths(strapi, event)));
        paths.push(...(await getRelatedPaths(strapi, event)));

        const oldPath = params.oldPath;
        const lastSlashIndex = oldPath.lastIndexOf('/');
        const pathWithoutLastPart = oldPath.substring(0, lastSlashIndex);

        paths.push(pathWithoutLastPart);
      }

      await strapi
        .plugin('webhook')
        .controller('controller')
        .handleWebhook({
          request: {
            body: {
              action: 'delete',
              entry: result,
              uid: model.uid,
              paths: [...paths, params.oldPath],
            },
          },
          send: async (payload) => {
            await trigger(payload);
          },
          badRequest: (message) => {
            console.error('[WEBHOOK LOG]', message);
          },
        });
    },
    async afterCreate(event) {
      const { model, result } = event;

      const paths = [];

      // Check for teasers and revalidatePaths
      if (result.parentUid || result.parent) {
        paths.push(...(await getTeaserPaths(strapi, event)));
        paths.push(...(await getLatestPaths(strapi, event)));
        paths.push(...(await getRelatedPaths(strapi, event)));
      }

      await strapi
        .plugin('webhook')
        .controller('controller')
        .handleWebhook({
          request: {
            body: {
              action: 'create',
              entry: result,
              uid: model.uid,
              paths,
            },
          },
          send: async (payload) => {
            await trigger(payload);
          },
          badRequest: (message) => {
            console.error('[WEBHOOK LOG]', message);
          },
        });
    },
  });
};

const trigger = async (payload) => {
  const endpoint: string = strapi.plugin('webhook').config('endpoint');

  if (!endpoint) {
    console.error('[WEBHOOK LOG] endpoint not set');
    return;
  }

  try {
    await fetch(endpoint, {
      body: JSON.stringify(payload),
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('[WEBHOOK LOG]', error);
  }
};

export default bootstrap;
