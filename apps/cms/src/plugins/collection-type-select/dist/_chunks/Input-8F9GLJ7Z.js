"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const reactIntl = require("react-intl");
const designSystem = require("@strapi/design-system");
const index = require("./index-DW4EZgA0.js");
function Index({
  name,
  error,
  description,
  onChange,
  value,
  intlLabel,
  attribute
}) {
  const { formatMessage } = reactIntl.useIntl();
  const [collectionTypes, setCollectionTypes] = react.useState([]);
  const [selected, setSelected] = react.useState(value ? value.split("|")[0] : "");
  const [selectedNumber, setSelectedNumber] = react.useState(value ? value.split("|")[1] : 3);
  const { optionsSortBy } = attribute;
  const fetchContentTypes = react.useCallback(async () => {
    const response = await fetch(`/collection-type-select/collection-types`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    try {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }
      const result = await response.json();
      setCollectionTypes(result);
    } catch (error2) {
      console.error(error2);
    }
  }, []);
  react.useEffect(() => {
    fetchContentTypes();
  }, []);
  react.useEffect(() => {
    onChange({
      target: { name, type: "string", value: `${selected}|${selectedNumber}|${optionsSortBy}` }
    });
  }, [selected, selectedNumber]);
  const handleOnChange = (value2) => {
    setSelected(value2);
  };
  const handleOnNumberChange = (number) => {
    setSelectedNumber(number);
  };
  if (!collectionTypes) {
    return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, {});
  }
  return /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Box, { spacing: 1, style: { width: "100%" }, children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontWeight: "bold", children: formatMessage({
      id: `${index.PLUGIN_ID}.title`,
      defaultMessage: "Select latest teasers from content-type"
    }) }),
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Box, { paddingBottom: 4, children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: formatMessage({
      id: `${index.PLUGIN_ID}.description`,
      defaultMessage: "Select the content-type to display the latest teasers from"
    }) }) }),
    /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Grid.Root, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Item, { col: 8, xs: 12, s: 6, children: /* @__PURE__ */ jsxRuntime.jsxs(
        designSystem.SingleSelect,
        {
          width: "100%",
          value: selected,
          name,
          label: "Content-type",
          onChange: (value2) => handleOnChange(value2),
          onClear: () => setSelected(""),
          style: { width: "100%" },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: "", children: formatMessage({
              id: `${index.PLUGIN_ID}.blank`,
              defaultMessage: "Select a collection type, leave blank for all"
            }) }),
            collectionTypes.map((collectionType, index2) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: collectionType.id, children: collectionType.name }, index2))
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Item, { col: 4, xs: 12, s: 6, children: /* @__PURE__ */ jsxRuntime.jsx(
        designSystem.SingleSelect,
        {
          style: { width: "100%" },
          width: "100%",
          value: selectedNumber,
          defaultValue: 3,
          name,
          label: formatMessage({
            id: `${index.PLUGIN_ID}.quantity`,
            defaultMessage: "Number of teasers"
          }),
          onChange: (value2) => handleOnNumberChange(value2),
          onClear: () => setSelected(""),
          children: [1, 2, 3, 4, 5, 6].map((num) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.SingleSelectOption, { value: num, children: num }, num))
        }
      ) })
    ] })
  ] });
}
exports.default = Index;
