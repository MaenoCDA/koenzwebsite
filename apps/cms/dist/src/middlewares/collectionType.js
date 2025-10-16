"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TransformCollectionTypes = async (strapi, ctx) => {
    const { body, request } = ctx;
    // Defensive: ensure body and body.data exist before destructuring
    if (!body || !body.data) {
        return;
    }
    const { data } = body;
    if (!data || !data.length || !request.query) {
        return;
    }
    const { query, url } = request;
    const { filters, status } = query;
    if (!filters || !filters.slug) {
        return;
    }
    const routes = await strapi
        .plugin('link')
        .service('service')
        .routes({
        request: { query: { slug: data[0].slug, status: status } },
    });
    const uid = Object.values(routes)
        .flat()
        .map((route) => route.uid)
        .pop();
    const relatedFilter = {
        documentId: { $ne: data[0].documentId },
    };
    const latestFilter = {
        documentId: { $ne: data[0].documentId },
    };
    let related = [];
    let latest = [];
    if (data[0].tags) {
        relatedFilter['tags'] = { slug: { $eq: data[0].tags.map((tag) => tag.slug) } };
        related = await strapi
            .documents(uid)
            .findMany({ filters: relatedFilter, sort: 'publishedAt:desc', limit: 3, status: 'published', populate: '*' });
        if (related.length < 3) {
            const limit = 3 - related.length;
            const foundDocumentIds = related.map((post) => post.documentId);
            const moreRelated = await strapi.documents('api::post.post').findMany({
                filters: { documentId: { $notIn: [data[0].documentId, ...foundDocumentIds] } },
                sort: 'publishedAt:desc',
                limit,
                status: 'published',
                populate: { hero: { populate: '*' }, tags: { populate: '*' } },
            });
            related = related.concat(moreRelated);
        }
    }
    latest = await strapi.documents(uid).findMany({
        filters: latestFilter,
        sort: 'publishedAt:desc',
        limit: 3,
        status: 'published',
        populate: { hero: { populate: '*' } },
    });
    const allRoutes = await strapi
        .plugin('link')
        .service('service')
        .routes({ request: { query: { locale: data[0].locale } } });
    const latestItems = await Promise.all(latest.map(async (record) => {
        var _a, _b, _c;
        const hero = record.hero.pop();
        const findRoute = allRoutes[data[0].locale].find((route) => route.documentId === record.documentId);
        const slug = findRoute ? findRoute.route : '/';
        return {
            image: (_a = record.image) !== null && _a !== void 0 ? _a : hero.image,
            title: record.title,
            text: (_b = record.text) !== null && _b !== void 0 ? _b : hero === null || hero === void 0 ? void 0 : hero.text,
            uid: (_c = findRoute.uid) !== null && _c !== void 0 ? _c : null,
            publishedAt: record.publishedAt,
            slug,
        };
    }));
    body.data[0].related = related
        ? await Promise.all(related.map(async (record) => {
            var _a, _b, _c;
            const hero = record.hero.pop();
            const findRoute = allRoutes[data[0].locale].find((route) => route.documentId === record.documentId);
            const slug = findRoute ? findRoute.route : '/';
            return {
                image: (_a = record.image) !== null && _a !== void 0 ? _a : hero.image,
                title: record.title,
                text: (_b = record.text) !== null && _b !== void 0 ? _b : hero === null || hero === void 0 ? void 0 : hero.text,
                uid: (_c = findRoute.uid) !== null && _c !== void 0 ? _c : null,
                publishedAt: record.publishedAt,
                slug,
            };
        }))
        : [];
    body.data[0].latest = latestItems !== null && latestItems !== void 0 ? latestItems : [];
};
exports.default = TransformCollectionTypes;
