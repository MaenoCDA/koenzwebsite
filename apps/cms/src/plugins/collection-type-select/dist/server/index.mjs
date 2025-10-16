const bootstrap = ({ strapi }) => {
};
const destroy = ({ strapi }) => {
};
const PLUGIN_ID = "collection-type-select";
const register = ({ strapi }) => {
  strapi.customFields.register({
    name: "collection-type-select",
    plugin: PLUGIN_ID,
    type: "string"
  });
};
const controller = ({ strapi }) => ({
  index(ctx) {
    const filteredContentTypes = strapi.config.contentTypes.filter((contentType) => {
      const uid = contentType.uid;
      return uid.includes("api::") && contentType.kind === "collectionType";
    }).map((contentType) => ({
      id: contentType.uid,
      name: contentType.info.displayName
    }));
    ctx.body = filteredContentTypes;
  },
  all(ctx) {
    ctx.body = strapi.config.contentTypes;
  }
});
const controllers = {
  controller
};
const middlewares = {};
const routes = [
  {
    method: "GET",
    path: "/collection-types",
    handler: "controller.index",
    config: {
      policies: [],
      auth: false
    }
  },
  {
    method: "GET",
    path: "/collection-types/all",
    handler: "controller.all",
    config: {
      policies: [],
      auth: false
    }
  }
];
const index = {
  register,
  bootstrap,
  destroy,
  controllers,
  routes,
  middlewares
};
export {
  index as default
};
