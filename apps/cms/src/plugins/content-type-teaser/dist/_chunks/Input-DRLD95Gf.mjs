import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from "react";
import { useIntl } from "react-intl";
import { P as PLUGIN_ID } from "./index-DbFJ63Ix.mjs";
import { Box, Flex, Typography, Combobox, ComboboxOption, Badge, Button } from "@strapi/design-system";
import { useFetchClient } from "@strapi/strapi/admin";
import { useLocation } from "react-router-dom";
const getTranslation = (id) => `${PLUGIN_ID}.${id}`;
const getCurrentLocale = () => {
  const location = useLocation();
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
  const { get, post } = useFetchClient();
  const { formatMessage } = useIntl();
  const [paths, setPaths] = useState([]);
  const [selected, setSelected] = useState(value ?? null);
  const [values, setValues] = useState([]);
  const [fields, setFields] = useState([]);
  const [result, setResult] = useState("");
  const [toggle, setToggle] = useState(false);
  const { optionsRestrict } = attribute;
  const locale = getCurrentLocale();
  useEffect(() => {
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
  useEffect(() => {
    if (!selected) {
      return;
    }
    fetchFields();
  }, [selected]);
  const fetchFields = useCallback(async () => {
    if (!selected || !selected.value) {
      return;
    }
    const [uid, id] = selected.value.split("|");
    const fields2 = (await post(`/content-type-teaser/content-type-fields`, { uid, id })).data;
    setFields(fields2);
  }, [selected]);
  const fetch = useCallback(async () => {
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
  useEffect(() => {
    fetch();
  }, []);
  if (!paths) {
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsxs(Box, { spacing: 1, children: [
    /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "flex-start", children: [
      /* @__PURE__ */ jsx(Typography, { fontWeight: "bold", children: formatMessage({
        id: getTranslation(`select`)
      }) }),
      /* @__PURE__ */ jsx(Typography, { variant: "pi", children: formatMessage({ id: getTranslation(`longDescription`) }) })
    ] }),
    /* @__PURE__ */ jsxs(Box, { paddingTop: 4, paddingBottom: 4, children: [
      /* @__PURE__ */ jsx(Box, { style: { width: "85%" }, children: /* @__PURE__ */ jsx(
        Combobox,
        {
          value: selected ? selected?.value : "",
          onChange: (value2) => handleOnChange(value2),
          onClear: () => setSelected(null),
          children: paths.map((path, index) => /* @__PURE__ */ jsx(
            ComboboxOption,
            {
              value: `${path.uid}|${path.id}|${path.route} - ${path.title}`,
              textValue: path.title,
              children: /* @__PURE__ */ jsxs(Flex, { alignItems: "center", justifyContent: "space-between", children: [
                path.title,
                /* @__PURE__ */ jsxs(Badge, { padding: "0", marginRight: "2", children: [
                  locale,
                  " - ",
                  path.uid
                ] })
              ] })
            },
            `${path.uid}-${index}`
          ))
        }
      ) }),
      selected && /* @__PURE__ */ jsx(Box, { paddingTop: 4, children: /* @__PURE__ */ jsx(Button, { onClick: () => handleToggle(), children: formatMessage({
        id: `${PLUGIN_ID}.teaser.${toggle ? "default" : "custom"}`
      }) }) })
    ] }),
    toggle && /* @__PURE__ */ jsxs(Box, { spacing: 1, paddingTop: 4, children: [
      /* @__PURE__ */ jsxs(Flex, { direction: "column", alignItems: "flex-start", children: [
        /* @__PURE__ */ jsx(Typography, { fontWeight: "bold", children: formatMessage({
          id: `${PLUGIN_ID}.teaser.title`,
          defaultMessage: "Fields"
        }) }),
        /* @__PURE__ */ jsx(Typography, { variant: "pi", children: formatMessage({
          id: `${PLUGIN_ID}.teaser.description`,
          defaultMessage: "Link the teaser fields to the selected content type"
        }) })
      ] }),
      fields && Object.entries(fields).map(([category, items]) => {
        const selectedValue = selected?.fields?.hasOwnProperty(category) ? selected?.fields[category]?.path : null;
        return /* @__PURE__ */ jsxs(Box, { spacing: 2, paddingTop: 2, children: [
          /* @__PURE__ */ jsx(Typography, { fontWeight: "bold", children: formatMessage({
            id: `${PLUGIN_ID}.teaser.${category}`,
            defaultMessage: category
          }) }),
          /* @__PURE__ */ jsx(
            Combobox,
            {
              value: selectedValue,
              onChange: (value2) => handleOnFieldChange(category, items, value2),
              onClear: () => {
              },
              label: formatMessage({
                id: `${PLUGIN_ID}.teaser.${category}`,
                defaultMessage: category
              }),
              children: category === "image" ? items.map((item, index) => /* @__PURE__ */ jsx(ComboboxOption, { value: item.path, children: /* @__PURE__ */ jsxs(Flex, { children: [
                /* @__PURE__ */ jsx("img", { src: item.value.url, width: 50, height: 50 }),
                /* @__PURE__ */ jsx(Typography, { paddingLeft: 4, children: item.value.name })
              ] }) }, index)) : items.map((item, index) => /* @__PURE__ */ jsx(ComboboxOption, { value: item.path, children: item.value.value }, index))
            }
          )
        ] }, category);
      })
    ] })
  ] });
}
export {
  Index as default
};
