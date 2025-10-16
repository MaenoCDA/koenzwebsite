"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullPopulateObject = void 0;
//@ts-nocheck
const lodash_1 = require("lodash");
const getModelPopulationAttributes = (model) => {
    if (model.uid === 'plugin::upload.file') {
        const { related, ...attributes } = model.attributes;
        return attributes;
    }
    return model.attributes;
};
const getFullPopulateObject = (modelUid, maxDepth = 4, ignore = []) => {
    var _a, _b;
    const skipCreatorFields = (_a = strapi.plugin('strapi-plugin-populate-deep')) === null || _a === void 0 ? void 0 : _a.config('skipCreatorFields');
    if (maxDepth <= 1) {
        return true;
    }
    if (modelUid === 'admin::user' && skipCreatorFields) {
        return undefined;
    }
    const populate = {};
    const model = strapi.getModel(modelUid);
    if (!model) {
        console.warn(`Model ${modelUid} not found`);
        return true;
    }
    if (ignore && !ignore.includes(model.collectionName))
        ignore.push(model.collectionName);
    for (const [key, value] of Object.entries(getModelPopulationAttributes(model))) {
        if (ignore.includes(key) || !value)
            continue;
        const handlers = {
            component: () => {
                populate[key] = (0, exports.getFullPopulateObject)(value.component, maxDepth - 1);
            },
            dynamiczone: () => {
                const dynamicPopulate = value.components.reduce((acc, cur) => ({
                    ...acc,
                    [cur]: (0, exports.getFullPopulateObject)(cur, maxDepth - 1),
                }), {});
                populate[key] = (0, lodash_1.isEmpty)(dynamicPopulate) ? true : { on: dynamicPopulate };
            },
            relation: () => {
                const relationDepth = key === 'localizations' && maxDepth > 2 ? 1 : maxDepth - 1;
                const relationPopulate = (0, exports.getFullPopulateObject)(value.target, relationDepth, ignore);
                if (relationPopulate) {
                    populate[key] = relationPopulate;
                }
            },
            media: () => {
                populate[key] = true;
            },
        };
        (_b = handlers[value.type]) === null || _b === void 0 ? void 0 : _b.call(handlers);
    }
    return (0, lodash_1.isEmpty)(populate) ? true : { populate };
};
exports.getFullPopulateObject = getFullPopulateObject;
