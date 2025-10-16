"use strict";
const react = require("react");
const jsxRuntime = require("react/jsx-runtime");
const icons = require("@strapi/icons");
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
const PLUGIN_ID = "link";
const Initializer = ({ setPlugin }) => {
  const ref = react.useRef(setPlugin);
  react.useEffect(() => {
    ref.current(PLUGIN_ID);
  }, []);
  return null;
};
const PluginIcon = () => /* @__PURE__ */ jsxRuntime.jsx(icons.PuzzlePiece, {});
const index = {
  register(app) {
    app.customFields.register({
      name: "link",
      type: "json",
      pluginId: PLUGIN_ID,
      icon: PluginIcon,
      intlLabel: {
        id: "link.label",
        defaultMessage: "Link"
      },
      intlDescription: {
        id: "link.description",
        defaultMessage: "Menu link slug builder"
      },
      components: {
        Input: async () => Promise.resolve().then(() => require("./LinkField-OCxnN7l3.js"))
      },
      options: {
        base: [
          {
            sectionTitle: {
              id: "link.format.heading",
              defaultMessage: "Link format"
            },
            items: [
              {
                intlLabel: {
                  id: "link.format.label",
                  defaultMessage: "Format"
                },
                name: "options.format",
                type: "select",
                value: "link",
                options: [
                  {
                    key: "link",
                    defaultValue: "link",
                    value: "link",
                    metadatas: {
                      intlLabel: {
                        id: "link.options.format.link",
                        defaultMessage: "Link"
                      }
                    }
                  },
                  {
                    key: "path",
                    value: "path",
                    metadatas: {
                      intlLabel: {
                        id: "link.options.format.path",
                        defaultMessage: "Path"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        advanced: [
          {
            sectionTitle: {
              id: "global.settings",
              defaultMessage: "Settings"
            },
            items: [
              {
                name: "required",
                type: "checkbox",
                intlLabel: {
                  id: "link.options.advanced.requiredField",
                  defaultMessage: "Required field"
                },
                description: {
                  id: "link.options.advanced.requiredField.description",
                  defaultMessage: "You won't be able to create an entry if this field is empty"
                }
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
          const { default: data } = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => Promise.resolve().then(() => require("./en-C1VMx_Bq.js")), "./translations/nl.json": () => Promise.resolve().then(() => require("./nl-DH6oDtB5.js")) }), `./translations/${locale}.json`, 3);
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
