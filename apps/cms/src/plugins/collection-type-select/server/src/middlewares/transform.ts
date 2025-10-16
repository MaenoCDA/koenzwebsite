// //@ts-nocheck
'use strict';

const COMPONENT = 'teaser.latest-teaser';

const TransformLatestTeasers = async (strapi, ctx) => {
  const { body } = ctx;
  if (!body || !body.data) {
    return;
  }
  if (!Array.isArray(body.data)) {
    body.data = [body.data];
  }

  for (const entry of body.data) {
    const { flexContent, locale } = entry;
    if (!flexContent) {
      return;
    }
    const routes = await strapi.plugin('link').service('service').routes(ctx);
    for (const [key, item] of flexContent.entries()) {
      if (item.__component !== COMPONENT) {
        continue;
      }
      // Defensive: ensure latestTeasers is a valid pipe-delimited string before splitting
      if (!item.latestTeasers || typeof item.latestTeasers !== 'string' || !item.latestTeasers.includes('|')) {
        continue;
      }
      const [uid, length, sortBy] = item.latestTeasers.split('|');
      const records = await strapi.documents(uid).findMany({
        orderBy: { [sortBy]: 'desc' },
        limit: length,
        where: { locale },
        status: 'published',
        populate: {
          image: { populate: '*' },
          hero: { populate: '*' },
        },
      });
      if (!records) {
        return;
      }
      const teasers = records.map((record) => {
        // Defensive: hero can be undefined or empty
        const hero = Array.isArray(record.hero) ? record.hero[record.hero.length - 1] : undefined;
        const findRoute = routes[locale].find(
          (route) =>
            route.uid === uid && (route.slug === record.slug || route.id === Number(record.id))
        );
        const slug = findRoute ? findRoute.route : `/${locale}`;
        return {
          ...record,
          image: record.image ?? hero?.image,
          title: record.title ?? hero?.title,
          text: record.text ?? hero?.text,
          uid,
          slug,
        };
      });
      flexContent[key].latestTeasers = teasers.filter(Boolean);
    }
  }
};

export default TransformLatestTeasers;
