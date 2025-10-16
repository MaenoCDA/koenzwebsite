"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const strapiAdmin = require("@strapi/admin/strapi-admin");
const reactIntl = require("react-intl");
const index = require("./index-2_ZRiInG.js");
const NoPermissions = () => {
  const { formatMessage } = reactIntl.useIntl();
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      strapiAdmin.Layouts.Header,
      {
        title: formatMessage({
          id: index.getTranslation("header.name"),
          defaultMessage: "Content"
        })
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(strapiAdmin.Layouts.Content, { children: /* @__PURE__ */ jsxRuntime.jsx(strapiAdmin.Page.NoPermissions, {}) })
  ] });
};
exports.NoPermissions = NoPermissions;
//# sourceMappingURL=NoPermissionsPage-CmXLGE1f.js.map
