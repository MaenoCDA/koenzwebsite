"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const reactIntl = require("react-intl");
const index = require("./index-CN35XI5k.js");
const designSystem = require("@strapi/design-system");
const admin = require("@strapi/strapi/admin");
const reactRouterDom = require("react-router-dom");
const getTranslation = (id) => `${index.PLUGIN_ID}.${id}`;
const getCurrentLocale = () => {
  const location = reactRouterDom.useLocation();
  const queryParams = new URLSearchParams(location.search);
  return queryParams.get("plugins[i18n][locale]");
};
function Index({
  name,
  error,
  description,
  onChange,
  value,
  intlLabel,
  attribute
}) {
  const { get, post } = admin.useFetchClient();
  const { formatMessage } = reactIntl.useIntl();
  const [paths, setPaths] = react.useState([]);
  const [selected, setSelected] = react.useState(value ?? null);
  const [values, setValues] = react.useState([]);
  const [fields, setFields] = react.useState([]);
  const [result, setResult] = react.useState("");
  const [toggle, setToggle] = react.useState(false);
  const { optionsRestrict } = attribute;
  const locale = getCurrentLocale();
  react.useEffect(() => {
    if (!selected) {
      return;
    }
    if (selected.fields) {
      setToggle(true);
    }
  }, []);
  const handleOnChange = (value2) => {
    if (!value2 || value2.indexOf("|") === -1) {
      return;
    }
    const [uid, id, title] = value2.split("|");
    setSelected({ uid, id, value: value2 });
    onChange({ target: { name, type: "json", value: JSON.stringify({ uid, id, value: value2 }) } });
    onChange({
      target: { name: name.replace(/teaser(?!.*teaser)/, "title"), type: "string", value: title }
    });
  };
  const handleOnFieldChange = (category, items, value2) => {
    const chosenValue = items.find((item) => item.path ? item.path === value2 : false);
    const { fields: fields2 } = selected;
    const newFields = { ...fields2, [category]: chosenValue };
    setSelected({ ...selected, fields: newFields });
    onChange({
      target: { name, type: "json", value: JSON.stringify({ ...selected, fields: newFields }) }
    });
  };
  const handleToggle = () => {
    if (selected.fields && toggle) {
      setSelected({ ...selected, fields: null });
      onChange({
        target: { name, type: "json", value: JSON.stringify({ ...selected, fields: null }) }
      });
    }
    setToggle(!toggle);
  };
  react.useEffect(() => {
    if (!selected) {
      return;
    }
    fetchFields();
  }, [selected]);
  const fetchFields = react.useCallback(async () => {
    if (!selected || !selected.value) {
      return;
    }
    const [uid, id] = selected.value.split("|");
    const fields2 = (await post(`/content-type-teaser/content-type-fields`, { uid, id })).data;
    setFields(fields2);
  }, [selected]);
  const fetch = react.useCallback(async () => {
    const routes = (await get(`/link/routes`, value)).data;
    if (!routes.data.routes) {
      return;
    }
    let slugs = routes.data.routes[locale];
    if (optionsRestrict && optionsRestrict !== "all") {
      slugs = slugs.filter((slug) => slug.uid === optionsRestrict);
    }
    setPaths(slugs);
  }, [setPaths]);
  react.useEffect(() => {
    fetch();
  }, []);
  if (!paths) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { spacing: 1, children: [
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "flex-start", children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: formatMessage({
        id: getTranslation(`select`)
      }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", children: formatMessage({ id: getTranslation(`longDescription`) }) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { paddingTop: 4, paddingBottom: 4, children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { style: { width: "85%" }, children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.Combobox,
        {
          value: selected ? selected?.value : "",
          onChange: (value2) => handleOnChange(value2),
          onClear: () => setSelected(null),
          children: paths.map((path, index2) => /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.ComboboxOption,
            {
              value: `${path.uid}|${path.id}|${path.route} - ${path.title}`,
              textValue: path.title,
              children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { alignItems: "center", justifyContent: "space-between", children: [
                path.title,
                /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Badge, { padding: "0", marginRight: "2", children: [
                  locale,
                  " - ",
                  path.uid
                ] })
              ] })
            },
            `${path.uid}-${index2}`
          ))
        }
      ) }),
      selected && /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingTop: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: () => handleToggle(), children: formatMessage({
        id: `${index.PLUGIN_ID}.teaser.${toggle ? "default" : "custom"}`
      }) }) })
    ] }),
    toggle && /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { spacing: 1, paddingTop: 4, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "flex-start", children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: formatMessage({
          id: `${index.PLUGIN_ID}.teaser.title`,
          defaultMessage: "Fields"
        }) }),
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { variant: "pi", children: formatMessage({
          id: `${index.PLUGIN_ID}.teaser.description`,
          defaultMessage: "Link the teaser fields to the selected content type"
        }) })
      ] }),
      fields && Object.entries(fields).map(([category, items]) => {
        const selectedValue = selected?.fields?.hasOwnProperty(category) ? selected?.fields[category]?.path : null;
        return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { spacing: 2, paddingTop: 2, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: formatMessage({
            id: `${index.PLUGIN_ID}.teaser.${category}`,
            defaultMessage: category
          }) }),
          /* @__PURE__ */ jsxRuntime.jsx(
            designSystem.Combobox,
            {
              value: selectedValue,
              onChange: (value2) => handleOnFieldChange(category, items, value2),
              onClear: () => {
              },
              label: formatMessage({
                id: `${index.PLUGIN_ID}.teaser.${category}`,
                defaultMessage: category
              }),
              children: category === "image" ? items.map((item, index2) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.ComboboxOption, { value: item.path, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { children: [
                /* @__PURE__ */ jsxRuntime.jsx("img", { src: item.value.url, width: 50, height: 50 }),
                /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { paddingLeft: 4, children: item.value.name })
              ] }) }, index2)) : items.map((item, index2) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.ComboboxOption, { value: item.path, children: item.value.value }, index2))
            }
          )
        ] }, category);
      })
    ] })
  ] });
}
exports.default = Index;
