// @ts-nocheck
import { Context } from 'koa';

const EXCLUDED_UIDS = ['teaser.dynamic-teaser'];

export default {
  async getFields(ctx: Context) {
    const { uid, id } = ctx.request.body;

    // Retrieve the model using Strapi 5's strapi.getModel(uid)
    const model = strapi.getModel(uid);

    if (!model) {
      ctx.throw(400, `Model with UID '${uid}' not found.`);
    }

    // Fetch the fields using Strapi 5's query API
    const fields = await strapi.db.query(uid).findOne({
      where: { id },
      populate: {
        hero: { populate: true },
        flexContent: { populate: true },
      },
    });

    if (!fields) {
      ctx.throw(404, `Entry with ID '${id}' not found.`);
    }

    // Filter the components using the EXCLUDED_UIDS list
    const filteredFields = filterComponents(fields);
    const filteredComponents = Object.values(strapi.contentTypes)
      .filter((item) => {
        if (
          !item.uid.includes('api::') ||
          !item.attributes ||
          strapi.config.EXCLUDED_CONTENT_TYPES.includes(item.uid)
        ) {
          return false;
        }

        const heroComponents = item.attributes.hero?.components || [];
        const flexContentComponents = item.attributes.flexContent?.components || [];

        // Merge all unique component UIDs
        const allComponentUIDs = [...new Set([...heroComponents, ...flexContentComponents])];
        const matchingComponents = allComponentUIDs
          .map((componentUID) => {
            const component = strapi.components[componentUID];
            if (!component) {
              return null;
            }

            // Check if this component has matching attributes
            const hasMatchingAttributes = Object.values(component.attributes || {}).some(
              (attr) =>
                attr.component === 'layout.paragraph' ||
                (attr.customField && attr.customField === 'plugin::ckeditor5.CKEditor') ||
                (attr.type === 'media' && attr.allowedTypes && attr.allowedTypes.includes('images'))
            );

            return hasMatchingAttributes
              ? { uid: componentUID, attributes: component.attributes }
              : null;
          })
          .filter(Boolean); // Remove null values

        return matchingComponents.length > 0; // Keep models that have matching components
      })
      .map((item) => {
        // For each content type, return only the matching components
        const heroComponents = item.attributes.hero?.components || [];
        const flexContentComponents = item.attributes.flexContent?.components || [];

        // Merge all unique component UIDs
        const allComponentUIDs = [...new Set([...heroComponents, ...flexContentComponents])];
        const matchingComponents = allComponentUIDs
          .map((componentUID) => {
            const component = strapi.components[componentUID];
            if (!component) {
              return null;
            }

            // Check if this component has matching attributes
            const hasMatchingAttributes = Object.values(component.attributes || {}).some(
              (attr) =>
                attr.component === 'layout.paragraph' ||
                (attr.customField && attr.customField === 'plugin::ckeditor5.CKEditor') ||
                (attr.type === 'media' && attr.allowedTypes && attr.allowedTypes.includes('images'))
            );

            return hasMatchingAttributes
              ? { uid: componentUID, attributes: component.attributes }
              : null;
          })
          .filter(Boolean); // Remove null values

        return {
          uid: item.uid,
          matchingComponents,
        };
      });

    // Extract hero and flexContent components from the model attributes
    const heroComponents = model.attributes.hero.components;
    const flexContentComponents = model.attributes.flexContent.components;

    // Filter components that match hero or flexContent components
    const finalFilteredComponents = filteredComponents.flatMap((contentType) => {
      // Extract matching components for hero and flexContent
      const matchingComponents = contentType.matchingComponents.filter(
        (component) =>
          heroComponents.includes(component.uid) || flexContentComponents.includes(component.uid)
      );

      // Return components in a flat array, preserving the `uid` and `attributes`
      return matchingComponents.map((component) => ({
        uid: component.uid,
        attributes: component.attributes,
      }));
    });

    console.log(filteredFields, finalFilteredComponents);

    // Merge attributes and categorize
    const mergedObject = mergeAttributes(filteredFields, finalFilteredComponents);
    ctx.body = categorizeAttributes(mergedObject);
  },
};

function mergeAttributes(firstObject, schemas) {
  function merge(obj, schema) {
    for (const [key, value] of Object.entries(obj)) {
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((item) => merge(item, schema));
        } else {
          merge(value, schema);
        }
      } else {
        const attr = schema.attributes[key];
        if (attr) {
          obj[key] = {
            value: value,
            ...attr,
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
    image: [],
  };

  function traverse(obj, path) {
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      if (typeof value === 'object' && value !== null) {
        if (Array.isArray(value)) {
          value.forEach((item, index) => traverse(item, `${currentPath}[${index}]`));
        } else if (value.type) {
          if (value.type === 'string') {
            categories.title.push({ path: currentPath, value });
          } else if (value.type === 'richtext') {
            categories.text.push({ path: currentPath, value });
          }
        } else if (key === 'image') {
          categories.image.push({ path: currentPath, value });
        } else {
          traverse(value, currentPath);
        }
      }
    }
  }

  traverse(obj, '');

  return categories;
}

function filterComponents(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => filterComponents(item)).filter((item) => item !== null);
  } else if (typeof obj === 'object' && obj !== null) {
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
