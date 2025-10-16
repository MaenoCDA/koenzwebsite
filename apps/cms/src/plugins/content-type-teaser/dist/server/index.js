"use strict";
const bootstrap = ({ strapi: strapi2 }) => {
};
const destroy = ({ strapi: strapi2 }) => {
};
const PLUGIN_ID = "content-type-teaser";
const register = ({ strapi: strapi2 }) => {
  strapi2.customFields.register({
    name: "content-type-teaser",
    plugin: PLUGIN_ID,
    type: "json"
  });
};
const config = {
  default: {},
  validator() {
  }
};
const contentTypes = {};
const EXCLUDED_UIDS = ["teaser.dynamic-teaser"];
const controller = {
  async getFields(ctx) {
    const { uid, id } = ctx.request.body;
    const model = strapi.getModel(uid);
    if (!model) {
      ctx.throw(400, `Model with UID '${uid}' not found.`);
    }
    const fields = await strapi.db.query(uid).findOne({
      where: { id },
      populate: {
        hero: { populate: true },
        flexContent: { populate: true }
      }
    });
    if (!fields) {
      ctx.throw(404, `Entry with ID '${id}' not found.`);
    }
    const filteredFields = filterComponents(fields);
    const filteredComponents = Object.values(strapi.contentTypes).filter((item) => {
      if (!item.uid.includes("api::") || !item.attributes || strapi.config.EXCLUDED_CONTENT_TYPES.includes(item.uid)) {
        return false;
      }
      const heroComponents2 = item.attributes.hero?.components || [];
      const flexContentComponents2 = item.attributes.flexContent?.components || [];
      const allComponentUIDs = [.../* @__PURE__ */ new Set([...heroComponents2, ...flexContentComponents2])];
      const matchingComponents = allComponentUIDs.map((componentUID) => {
        const component = strapi.components[componentUID];
        if (!component) {
          return null;
        }
        const hasMatchingAttributes = Object.values(component.attributes || {}).some(
          (attr) => attr.component === "layout.paragraph" || attr.customField && attr.customField === "plugin::ckeditor5.CKEditor" || attr.type === "media" && attr.allowedTypes && attr.allowedTypes.includes("images")
        );
        return hasMatchingAttributes ? { uid: componentUID, attributes: component.attributes } : null;
      }).filter(Boolean);
      return matchingComponents.length > 0;
    }).map((item) => {
      const heroComponents2 = item.attributes.hero?.components || [];
      const flexContentComponents2 = item.attributes.flexContent?.components || [];
      const allComponentUIDs = [.../* @__PURE__ */ new Set([...heroComponents2, ...flexContentComponents2])];
      const matchingComponents = allComponentUIDs.map((componentUID) => {
        const component = strapi.components[componentUID];
        if (!component) {
          return null;
        }
        const hasMatchingAttributes = Object.values(component.attributes || {}).some(
          (attr) => attr.component === "layout.paragraph" || attr.customField && attr.customField === "plugin::ckeditor5.CKEditor" || attr.type === "media" && attr.allowedTypes && attr.allowedTypes.includes("images")
        );
        return hasMatchingAttributes ? { uid: componentUID, attributes: component.attributes } : null;
      }).filter(Boolean);
      return {
        uid: item.uid,
        matchingComponents
      };
    });
    const heroComponents = model.attributes.hero.components;
    const flexContentComponents = model.attributes.flexContent.components;
    const finalFilteredComponents = filteredComponents.flatMap((contentType) => {
      const matchingComponents = contentType.matchingComponents.filter(
        (component) => heroComponents.includes(component.uid) || flexContentComponents.includes(component.uid)
      );
      return matchingComponents.map((component) => ({
        uid: component.uid,
        attributes: component.attributes
      }));
    });
    console.log(filteredFields, finalFilteredComponents);
    const mergedObject = mergeAttributes(filteredFields, finalFilteredComponents);
    ctx.body = categorizeAttributes(mergedObject);
  }
};
function mergeAttributes(firstObject, schemas) {
  function merge(obj, schema) {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((item) => merge(item, schema));
        } else {
          merge(value, schema);
        }
      } else {
        const attr = schema.attributes[key];
        if (attr) {
          obj[key] = {
            value,
            ...attr
          };
        }
      }
    }
  }
  const mergedObject = JSON.parse(JSON.stringify(firstObject));
  schemas.forEach((schema) => {
    merge(mergedObject, schema);
  });
  return mergedObject;
}
function categorizeAttributes(obj) {
  const categories = {
    title: [],
    text: [],
    image: []
  };
  function traverse(obj2, path) {
    for (const [key, value] of Object.entries(obj2)) {
      const currentPath = path ? `${path}.${key}` : key;
      if (typeof value === "object" && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((item, index2) => traverse(item, `${currentPath}[${index2}]`));
        } else if (value.type) {
          if (value.type === "string") {
            categories.title.push({ path: currentPath, value });
          } else if (value.type === "richtext") {
            categories.text.push({ path: currentPath, value });
          }
        } else if (key === "image") {
          categories.image.push({ path: currentPath, value });
        } else {
          traverse(value, currentPath);
        }
      }
    }
  }
  traverse(obj, "");
  return categories;
}
function filterComponents(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => filterComponents(item)).filter((item) => item !== null);
  } else if (typeof obj === "object" && obj !== null) {
    if (obj.__component && EXCLUDED_UIDS.includes(obj.__component)) {
      return null;
    }
    const filteredObj = {};
    for (const [key, value] of Object.entries(obj)) {
      filteredObj[key] = filterComponents(value);
    }
    return filteredObj;
  }
  return obj;
}
const controllers = {
  controller
};
const COMPONENT = "teaser.dynamic-teaser";
function getValueByPath(obj, path) {
  return path.split(".").reduce((acc, part) => {
    const match = part.match(/(\w+)\[(\d+)\]/);
    if (match) {
      const [, key, index2] = match;
      return acc && acc[key] ? acc[key][index2] : void 0;
    }
    return acc ? acc[part] : void 0;
  }, obj);
}
const TransformTeasers = async (strapi2, ctx) => {
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
    const routes2 = await strapi2.plugin("link").service("service").routes(ctx);
    for (const [key, item] of flexContent.entries()) {
      if (item.__component !== COMPONENT) {
        continue;
      }
      if (!item.dynamicTeasers) {
        continue;
      }
      const teasers = await Promise.all(
        item.dynamicTeasers.map(async (teaser) => {
          if (!teaser.teaser) {
            return null;
          }
          const { uid, id, fields } = teaser.teaser;
          const record = await strapi2.db.query(uid).findOne({
            where: { id },
            populate: {
              hero: { populate: true },
              flexContent: { populate: true }
            }
          });
          if (!record) {
            return null;
          }
          const findRoute = routes2[locale].find(
            (route) => route.uid === uid && (route.slug === record.slug || route.id === Number(record.id))
          );
          const hero = Array.isArray(record.hero) ? record.hero[record.hero.length - 1] : void 0;
          const slug = findRoute ? findRoute.route : `/${locale}`;
          if (fields) {
            const values = Object.entries(fields).reduce((acc, [key2, field]) => {
              const value = getValueByPath(record, field.path);
              acc[key2] = value !== void 0 ? value : hero[key2] !== void 0 ? hero[key2] : null;
              return acc;
            }, {});
            delete record.hero;
            delete record.flexContent;
            return teaser.teaser = {
              ...record,
              image: values.image,
              title: values.title,
              text: values.text,
              uid,
              slug
            };
          }
          delete record.hero;
          delete record.flexContent;
          return teaser.teaser = {
            ...record,
            uid: teaser.uid,
            image: record.image ?? hero?.image,
            title: record.title ?? hero?.title,
            text: record.text ?? hero?.text,
            slug
          };
        })
      );
      flexContent[key].dynamicTeasers = teasers.filter(Boolean);
    }
  }
};
const policies = {};
const routes = [
  {
    method: "POST",
    path: "/content-type-fields",
    handler: "controller.getFields",
    config: {
      policies: [],
      auth: false
    }
  }
];
const service = ({ strapi: strapi2 }) => ({
  getWelcomeMessage() {
    return "Welcome to Strapi 🚀";
  }
});
const services = {
  service
};
const index = {
  register,
  bootstrap,
  destroy,
  config,
  controllers,
  routes,
  services,
  contentTypes,
  policies,
  middlewares: TransformTeasers
};
module.exports = index;
