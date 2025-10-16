'use strict';

Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const jsxRuntime = require('react/jsx-runtime');
const Theme = require('./Theme-BlWHC7bw.js');
const EditViewPage = require('./EditViewPage-SMBzJUVf.js');

const ProtectedCreateView = () => {
  const permissions = Theme.useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["api-tokens"].create
  );
  return /* @__PURE__ */ jsxRuntime.jsx(Theme.Page.Protect, { permissions, children: /* @__PURE__ */ jsxRuntime.jsx(EditViewPage.EditView, {}) });
};

exports.ProtectedCreateView = ProtectedCreateView;
//# sourceMappingURL=CreateView-BYr_WFOc.js.map
