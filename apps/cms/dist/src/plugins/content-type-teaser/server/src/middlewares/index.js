//@ts-nocheck
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const COMPONENT = 'teaser.dynamic-teaser';
function getValueByPath(obj, path) {
    return path.split('.').reduce((acc, part) => {
        const match = part.match(/(\w+)\[(\d+)\]/);
        if (match) {
            const [, key, index] = match;
            return acc && acc[key] ? acc[key][index] : undefined;
        }
        return acc ? acc[part] : undefined;
    }, obj);
}
const TransformTeasers = async (strapi, ctx) => {
    const { body } = ctx;
    // ensure body exists, occurs on non existent route
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
            if (!item.dynamicTeasers) {
                continue;
            }
            const teasers = await Promise.all(item.dynamicTeasers.map(async (teaser) => {
                var _a, _b, _c;
                if (!teaser.teaser) {
                    return null;
                }
                const { uid, id, fields } = teaser.teaser;
                const record = await strapi.db.query(uid).findOne({
                    where: { id },
                    populate: {
                        hero: { populate: true },
                        flexContent: { populate: true },
                    },
                });
                if (!record) {
                    return null;
                }
                const findRoute = routes[locale].find((route) => route.uid === uid && (route.slug === record.slug || route.id === Number(record.id)));
                // Defensive: hero can be undefined or empty
                const hero = Array.isArray(record.hero) ? record.hero[record.hero.length - 1] : undefined;
                // const slug
                const slug = findRoute ? findRoute.route : `/${locale}`;
                if (fields) {
                    const values = Object.entries(fields).reduce((acc, [key, field]) => {
                        const value = getValueByPath(record, field.path);
                        acc[key] = value !== undefined ? value : hero[key] !== undefined ? hero[key] : null;
                        return acc;
                    }, {});
                    delete record.hero;
                    delete record.flexContent;
                    return (teaser.teaser = {
                        ...record,
                        image: values.image,
                        title: values.title,
                        text: values.text,
                        uid,
                        slug,
                    });
                }
                delete record.hero;
                delete record.flexContent;
                return (teaser.teaser = {
                    ...record,
                    uid: teaser.uid,
                    image: (_a = record.image) !== null && _a !== void 0 ? _a : hero === null || hero === void 0 ? void 0 : hero.image,
                    title: (_b = record.title) !== null && _b !== void 0 ? _b : hero === null || hero === void 0 ? void 0 : hero.title,
                    text: (_c = record.text) !== null && _c !== void 0 ? _c : hero === null || hero === void 0 ? void 0 : hero.text,
                    slug,
                });
            }));
            //Filter out any null values from teasers
            flexContent[key].dynamicTeasers = teasers.filter(Boolean);
        }
    }
};
exports.default = TransformTeasers;
