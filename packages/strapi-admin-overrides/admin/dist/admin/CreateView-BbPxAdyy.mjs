import { jsx } from 'react/jsx-runtime';
import { b as useTypedSelector, P as Page } from './Theme-BneL-jOW.mjs';
import { EditView } from './EditViewPage-BQGsr2hc.mjs';

const ProtectedCreateView = () => {
  const permissions = useTypedSelector(
    (state) => state.admin_app.permissions.settings?.["api-tokens"].create
  );
  return /* @__PURE__ */ jsx(Page.Protect, { permissions, children: /* @__PURE__ */ jsx(EditView, {}) });
};

export { ProtectedCreateView };
//# sourceMappingURL=CreateView-BbPxAdyy.mjs.map
