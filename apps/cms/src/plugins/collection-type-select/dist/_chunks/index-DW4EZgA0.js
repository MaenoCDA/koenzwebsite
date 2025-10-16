"use strict";
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const PLUGIN_ID = "collection-type-select";
const Initializer = ({ setPlugin }) => {
  const ref = react.useRef(setPlugin);
  react.useEffect(() => {
    ref.current(PLUGIN_ID);
  }, []);
  return null;
};
const PluginIcon = () => /* @__PURE__ */ jsxRuntime.jsxs("svg", { fill: "#000000", viewBox: "-6.5 0 32 32", version: "1.1", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsxRuntime.jsx("g", { id: "SVGRepo_bgCarrier", "stroke-width": "0" }),
  /* @__PURE__ */ jsxRuntime.jsx("g", { id: "SVGRepo_tracerCarrier", "stroke-linecap": "round", "stroke-linejoin": "round" }),
  /* @__PURE__ */ jsxRuntime.jsxs("g", { id: "SVGRepo_iconCarrier", children: [
    /* @__PURE__ */ jsxRuntime.jsx("title", { children: "dropdown" }),
    /* @__PURE__ */ jsxRuntime.jsx("path", { d: "M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z" }),
    " "
  ] })
] });
const index = {
  register(app) {
    app.customFields.register({
      name: "collection-type-select",
      pluginId: "collection-type-select",
      type: "string",
      intlLabel: {
        id: "collection-type-select.label",
        defaultMessage: "Teaser collection select field"
      },
      intlDescription: {
        id: "collection-type-select.description",
        defaultMessage: "Select your collection-type for latest teasers"
      },
      icon: PluginIcon,
      components: {
        Input: async () => Promise.resolve().then(() => require(
          /* webpackChunkName: "input-component" */
          "./Input-8F9GLJ7Z.js"
        ))
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: "collection-type-select.restrict.title",
              defaultMessage: "Sorting"
            },
            items: [
              {
                intlLabel: {
                  id: "collection-type-select.restrict.label",
                  defaultMessage: "Sort by"
                },
                name: "optionsSortBy",
                type: "select",
                value: "id",
                options: [
                  {
                    key: "id",
                    defaultValue: "id",
                    value: "id",
                    metadatas: {
                      intlLabel: {
                        id: "collection-type-select.restrict.id",
                        defaultMessage: "ID"
                      }
                    }
                  },
                  {
                    key: "createdAt",
                    defaultValue: "createdAt",
                    value: "createdAt",
                    metadatas: {
                      intlLabel: {
                        id: "collection-type-select.restrict.createdAt",
                        defaultMessage: "Created at date"
                      }
                    }
                  },
                  {
                    key: "publishedAt",
                    defaultValue: "publishedAt",
                    value: "publishedAt",
                    metadatas: {
                      intlLabel: {
                        id: "collection-type-select.restrict.publishedAt",
                        defaultMessage: "Published date"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ]
      }
    });
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID
    });
  },
  async registerTrads({ locales }) {
    return Promise.all(
      locales.map(async (locale) => {
        try {
          const { default: data } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => Promise.resolve().then(() => require("./en-B4KWt_jN.js")), "./translations/nl.json": () => Promise.resolve().then(() => require("./nl-DbkQjj-Z.js")) }), `./translations/${locale}.json`, 3);
          return { data, locale };
        } catch {
          return { data: {}, locale };
        }
      })
    );
  }
};
exports.PLUGIN_ID = PLUGIN_ID;
exports.index = index;
