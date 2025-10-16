// //@ts-nocheck
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
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
                var _a, _b, _c;
                // Defensive: hero can be undefined or empty
                const hero = Array.isArray(record.hero) ? record.hero[record.hero.length - 1] : undefined;
                const findRoute = routes[locale].find((route) => route.uid === uid && (route.slug === record.slug || route.id === Number(record.id)));
                const slug = findRoute ? findRoute.route : `/${locale}`;
                return {
                    ...record,
                    image: (_a = record.image) !== null && _a !== void 0 ? _a : hero === null || hero === void 0 ? void 0 : hero.image,
                    title: (_b = record.title) !== null && _b !== void 0 ? _b : hero === null || hero === void 0 ? void 0 : hero.title,
                    text: (_c = record.text) !== null && _c !== void 0 ? _c : hero === null || hero === void 0 ? void 0 : hero.text,
                    uid,
                    slug,
                };
            });
            flexContent[key].latestTeasers = teasers.filter(Boolean);
        }
    }
};
exports.default = TransformLatestTeasers;
