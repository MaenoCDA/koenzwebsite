"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const designSystem = require("@strapi/design-system");
const react = require("react");
const reactIntl = require("react-intl");
const index = require("./index-CsChjug6.js");
const admin = require("@strapi/strapi/admin");
const getTranslation = (id) => `${index.PLUGIN_ID}.${id}`;
const useApi = () => {
  const { get } = admin.useFetchClient();
  const fetchRoutes = async (params) => {
    try {
      const response = await get(`/${index.PLUGIN_ID}/routes?${params}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching routes:", error);
      throw error;
    }
  };
  return {
    fetchRoutes
  };
};
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};
const LinkField = ({
  value: initialValue,
  name,
  onChange,
  attribute,
  intlLabel,
  hint,
  description,
  rawError,
  ...props
}) => {
  const { formatMessage } = reactIntl.useIntl();
  const [selected, setSelected] = react.useState(null);
  const { fetchRoutes } = useApi();
  const [isRoutesLoading, setIsRoutesLoading] = react.useState(false);
  const [routes, setRoutes] = react.useState({});
  const defaultValue = {
    type: "internal",
    target: "self",
    link: {
      id: void 0,
      uid: void 0,
      kind: void 0,
      slug: void 0
    }
  };
  const [value, setValue] = react.useState(initialValue ?? defaultValue);
  react.useEffect(() => {
    const fetchAndSetSelected = async () => {
      if (!initialValue || !value || !value.type && value.type !== "internal") {
        return;
      }
      if (value?.type === "internal") {
        const { id, uid, kind, slug } = value?.link;
        try {
          const routes2 = await fetchRoutes(`slug=${slug}`);
          setRoutes(routes2.data ? routes2.data.routes : {});
          setSelected(`${uid}|${id}|${kind}|${slug}`);
        } catch (error) {
          console.log(error);
          console.error("Error fetching routes on load:", error);
        }
      }
    };
    fetchAndSetSelected();
  }, []);
  const update = react.useCallback(
    (value2) => {
      setValue(value2);
      onChange({ target: { name, type: "json", value: JSON.stringify(value2) } });
    },
    [onChange]
  );
  const handleOnTypeChange = (type) => {
    if (type === "internal") {
      update({
        target: value?.target || "self",
        type: "internal",
        link: {}
      });
    } else if (type === "external") {
      setIsRoutesLoading(false);
      setSelected(null);
      setRoutes({});
      update({
        target: value?.target || "self",
        type: "external",
        link: ""
      });
    } else {
      setIsRoutesLoading(false);
      setSelected(null);
      setRoutes({});
      update({
        target: value?.target || "self",
        type: "custom",
        link: "/"
      });
    }
  };
  const handleOnReset = () => {
    update({
      target: value?.target || "self",
      type: "internal",
      link: {}
    });
    setSelected(null);
    setRoutes({});
    setIsRoutesLoading(false);
  };
  const handleOnChange = debounce(async (value2) => {
    if (value2.length < 1) {
      setSelected(null);
      setIsRoutesLoading(false);
      setRoutes({});
      return;
    }
    setIsRoutesLoading(true);
    setSelected(value2);
    console.log("Fetching routes for:", value2);
    try {
      const routes2 = await fetchRoutes(`title=${value2}`);
      setRoutes(routes2.data ? routes2.data.routes : {});
    } catch (error) {
      console.error("Failed to fetch routes:", error);
    } finally {
      setIsRoutesLoading(false);
    }
  }, 300);
  const handleSelectOnChange = (selected2) => {
    if (!selected2) {
      return;
    }
    const [uid, id, kind, slug] = selected2.split("|");
    update({
      ...value,
      type: "internal",
      link: {
        uid,
        id: Number(id),
        kind,
        slug
      }
    });
  };
  const handleOnTargetChange = (target) => {
    update({ ...value, target });
  };
  const handleOnLinkInputChange = (e, type) => {
    const inputValue = e.target.value;
    update({ ...value, type, link: inputValue });
  };
  const fieldLabel = formatMessage({ id: getTranslation("title"), defaultMessage: "Link" });
  const noOptionsMessage = formatMessage({
    id: getTranslation("noOptions"),
    defaultMessage: "Zoek naar een pagina - (Nog) geen resultaten"
  });
  const fieldDescription = formatMessage({ id: getTranslation("hint") });
  if (attribute.options?.format === "path") {
    return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid.Root, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Item, { col: 12, paddingBottom: 2, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "flex-start", gap: 2, children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", fontWeight: "bold", children: fieldLabel }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", children: fieldDescription })
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Item, { col: 12, children: /* @__PURE__ */ jsxRuntime.jsxs(
        designSystem.Field.Root,
        {
          error: Boolean(rawError),
          name: "link",
          required: true,
          hint: formatMessage({
            id: getTranslation(`link.internal`)
          }),
          style: { width: "100%" },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Combobox,
              {
                loading: isRoutesLoading,
                placeholder: formatMessage({
                  id: getTranslation(`link.placeholder`)
                }),
                value: selected ? selected : "",
                onChange: handleSelectOnChange,
                onTextValueChange: (value2) => handleOnChange(value2),
                onClear: handleOnReset,
                style: { width: "100%" },
                children: routes && Object.entries(routes).map((localizedRoutes) => {
                  return localizedRoutes[1].map((route) => /* @__PURE__ */ jsxRuntime.jsx(
                    designSystem.ComboboxOption,
                    {
                      value: `${route.uid}|${route.id}|${route.kind}|${route.slug}`,
                      textValue: route.title,
                      children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { alignItems: "center", justifyContent: "space-between", children: [
                        route.title,
                        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Badge, { padding: "0", marginRight: "2", children: [
                          localizedRoutes[0],
                          " - ",
                          route.uid
                        ] })
                      ] })
                    },
                    route.uid
                  ));
                })
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {})
          ]
        }
      ) })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntime.jsx(designSystem.Flex, { spacing: 2, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Root, { children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Item, { col: 12, paddingBottom: 2, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "flex-start", gap: 2, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", fontWeight: "bold", children: fieldLabel }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", children: fieldDescription })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid.Root, { gap: "2", style: { alignItems: "flex-start" }, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Item, { col: 12, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { gap: 4, direction: "row", alignItems: "flex-start", style: { width: "100%" }, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          designSystem.Field.Root,
          {
            error: Boolean(rawError),
            required: false,
            name: "type",
            hint: formatMessage({
              id: getTranslation(`type`)
            }),
            style: { width: "100%" },
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                designSystem.SingleSelect,
                {
                  required: true,
                  label: "Type",
                  placeholder: "Type",
                  value: value?.type,
                  onChange: handleOnTypeChange,
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "internal", children: formatMessage({
                      id: getTranslation(`target.internal`)
                    }) }),
                    /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "custom", children: formatMessage({
                      id: getTranslation(`target.custom`)
                    }) }),
                    /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "external", children: formatMessage({
                      id: getTranslation(`target.external`)
                    }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(
          designSystem.Field.Root,
          {
            error: Boolean(rawError),
            name: "target",
            required: true,
            hint: formatMessage({
              id: getTranslation(`target`)
            }),
            style: { width: "100%" },
            children: [
              /* @__PURE__ */ jsxRuntime.jsxs(
                designSystem.SingleSelect,
                {
                  required: true,
                  label: "Target",
                  placeholder: "Type",
                  value: value?.target ?? "self",
                  onChange: handleOnTargetChange,
                  children: [
                    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.SingleSelectOption, { value: "self", children: [
                      " ",
                      formatMessage({
                        id: getTranslation(`target.self`)
                      })
                    ] }),
                    /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "blank", children: formatMessage({
                      id: getTranslation(`target.blank`)
                    }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {})
            ]
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Item, { col: 12, m: 12, s: 12, children: value?.type === "internal" ? /* @__PURE__ */ jsxRuntime.jsxs(
        designSystem.Field.Root,
        {
          error: Boolean(rawError),
          name: "link",
          required: true,
          hint: formatMessage({
            id: getTranslation(`link.internal`)
          }),
          style: { width: "100%" },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.Combobox,
              {
                loading: isRoutesLoading,
                placeholder: formatMessage({
                  id: getTranslation(`link.placeholder`)
                }),
                value: selected ? selected : "",
                onChange: handleSelectOnChange,
                onTextValueChange: (value2) => handleOnChange(value2),
                onClear: handleOnReset,
                noOptionsMessage: () => noOptionsMessage,
                children: routes && Object.entries(routes).map((localizedRoutes) => {
                  return localizedRoutes[1].map((route) => /* @__PURE__ */ jsxRuntime.jsx(
                    designSystem.ComboboxOption,
                    {
                      value: `${route.uid}|${route.id}|${route.kind}|${route.slug}`,
                      textValue: route.title,
                      children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { alignItems: "center", justifyContent: "space-between", children: [
                        route.title,
                        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Badge, { padding: "0", marginRight: "2", children: [
                          localizedRoutes[0],
                          " - ",
                          route.uid
                        ] })
                      ] })
                    },
                    route.uid
                  ));
                })
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {})
          ]
        }
      ) : value?.type === "external" ? /* @__PURE__ */ jsxRuntime.jsxs(
        designSystem.Field.Root,
        {
          error: Boolean(rawError),
          name: "link",
          required: true,
          hint: formatMessage({
            id: getTranslation(`link.external`)
          }),
          paddingBottom: 2,
          style: { width: "100%" },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.TextInput,
              {
                onChange: (e) => handleOnLinkInputChange(e, "external"),
                value: value?.link,
                label: "Link",
                placeholder: "https://"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {})
          ]
        }
      ) : /* @__PURE__ */ jsxRuntime.jsxs(
        designSystem.Field.Root,
        {
          error: Boolean(rawError),
          name: "link",
          required: true,
          hint: formatMessage({
            id: getTranslation(`link.custom`)
          }),
          paddingBottom: 2,
          style: { width: "100%" },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.TextInput,
              {
                onChange: (e) => handleOnLinkInputChange(e, "custom"),
                value: value?.link,
                label: "Link",
                placeholder: "/"
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Field.Hint, {})
          ]
        }
      ) })
    ] })
  ] }) });
};
exports.default = LinkField;
