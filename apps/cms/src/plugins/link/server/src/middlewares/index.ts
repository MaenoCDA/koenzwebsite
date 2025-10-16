'use strict';

const replaceLinks = async (obj, routes, strapi) => {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  for (const key in obj) {
    if (obj[key] && typeof obj[key] === 'object') {
      // If the object has a `link` key and `link.link` exists, process it
      if (obj[key].link && typeof obj[key].link === 'object' && obj[key].link.link) {
        const { type, target, link } = obj[key].link;
        const { id, uid, kind, slug } = obj[key].link.link;

        // Find a matching route
        const findRoute = routes.find(
          (route) =>
            route.uid === uid &&
            (route.slug === slug || route.id === Number(id)) &&
            route.kind === kind
        );

        // Set the `href` and `target` based on whether a route was found
        if (findRoute) {
          obj[key].link.href = findRoute.route;
          obj[key].link.target = obj[key].link.target === 'blank' ? '_blank' : '_self';
        } else if (type === 'external' || type === 'custom') {
          obj[key].link.href = obj[key].link.link;
          obj[key].link.target = obj[key].link.target === 'blank' ? '_blank' : '_self';
        } else {
          obj[key].link.href = '/';
          obj[key].link.target = '_self';
        }

        // Delete `link.link` after extracting its properties
        delete obj[key].link.link;
      }

      // Continue recursively processing nested objects or arrays
      await replaceLinks(obj[key], routes, strapi);
    }
  }
};

const traverseAndReplaceLinks = async (data, routes, strapi) => {
  if (Array.isArray(data)) {
    for (const item of data) {
      await replaceLinks(item, routes, strapi);
    }
  } else if (typeof data === 'object' && data !== null) {
    await replaceLinks(data, routes, strapi);
  }
};

const TransformLinks = async (strapi, ctx) => {
  const routes = await strapi.plugin('link').service('service').routes(ctx);

  const { body, request } = ctx;
  const { locale } = request.query;

  // Ensure body exists
  if (!body || !body.data) {
    return;
  }

  body.data = Array.isArray(body.data) ? body.data : [body.data];

  if (!locale || !routes[locale]) {
    return;
  }

  await traverseAndReplaceLinks(body.data, routes[locale], strapi);
};

export default TransformLinks;
