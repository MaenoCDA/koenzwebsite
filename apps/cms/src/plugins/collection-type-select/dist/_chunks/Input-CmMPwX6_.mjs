import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useCallback, useEffect } from "react";
import { useIntl } from "react-intl";
import { Box, Typography, Grid, SingleSelect, SingleSelectOption } from "@strapi/design-system";
import { P as PLUGIN_ID } from "./index-TvTqwpNk.mjs";
function Index({
  name,
  error,
  description,
  onChange,
  value,
  intlLabel,
  attribute
}) {
  const { formatMessage } = useIntl();
  const [collectionTypes, setCollectionTypes] = useState([]);
  const [selected, setSelected] = useState(value ? value.split("|")[0] : "");
  const [selectedNumber, setSelectedNumber] = useState(value ? value.split("|")[1] : 3);
  const { optionsSortBy } = attribute;
  const fetchContentTypes = useCallback(async () => {
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
  useEffect(() => {
    fetchContentTypes();
  }, []);
  useEffect(() => {
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
    return /* @__PURE__ */ jsx(Fragment, {});
  }
  return /* @__PURE__ */ jsxs(Box, { spacing: 1, style: { width: "100%" }, children: [
    /* @__PURE__ */ jsx(Typography, { fontWeight: "bold", children: formatMessage({
      id: `${PLUGIN_ID}.title`,
      defaultMessage: "Select latest teasers from content-type"
    }) }),
    /* @__PURE__ */ jsx(Box, { paddingBottom: 4, children: /* @__PURE__ */ jsx(Typography, { children: formatMessage({
      id: `${PLUGIN_ID}.description`,
      defaultMessage: "Select the content-type to display the latest teasers from"
    }) }) }),
    /* @__PURE__ */ jsxs(Grid.Root, { children: [
      /* @__PURE__ */ jsx(Grid.Item, { col: 8, xs: 12, s: 6, children: /* @__PURE__ */ jsxs(
        SingleSelect,
        {
          width: "100%",
          value: selected,
          name,
          label: "Content-type",
          onChange: (value2) => handleOnChange(value2),
          onClear: () => setSelected(""),
          style: { width: "100%" },
          children: [
            /* @__PURE__ */ jsx(SingleSelectOption, { value: "", children: formatMessage({
              id: `${PLUGIN_ID}.blank`,
              defaultMessage: "Select a collection type, leave blank for all"
            }) }),
            collectionTypes.map((collectionType, index) => /* @__PURE__ */ jsx(SingleSelectOption, { value: collectionType.id, children: collectionType.name }, index))
          ]
        }
      ) }),
      /* @__PURE__ */ jsx(Grid.Item, { col: 4, xs: 12, s: 6, children: /* @__PURE__ */ jsx(
        SingleSelect,
        {
          style: { width: "100%" },
          width: "100%",
          value: selectedNumber,
          defaultValue: 3,
          name,
          label: formatMessage({
            id: `${PLUGIN_ID}.quantity`,
            defaultMessage: "Number of teasers"
          }),
          onChange: (value2) => handleOnNumberChange(value2),
          onClear: () => setSelected(""),
          children: [1, 2, 3, 4, 5, 6].map((num) => /* @__PURE__ */ jsx(SingleSelectOption, { value: num, children: num }, num))
        }
      ) })
    ] })
  ] });
}
export {
  Index as default
};
