import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default from "react";
import { useQueryParams, useNotification, Page, Form, Blocker, useRBAC } from "@strapi/admin/strapi-admin";
import { Flex, Grid, Box, Main, Tabs } from "@strapi/design-system";
import { useIntl } from "react-intl";
import { useLocation, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { c as useDoc, f as useDocumentRBAC, h as useDocumentLayout, i as createYupSchema, j as Header, g as getTranslation, P as Panels, k as PERMISSIONS, l as DocumentRBAC, S as SINGLE_TYPES } from "./index-VGm9Nj3j.mjs";
import { M as MemoizedInputRenderer, u as useLazyComponents, c as createDefaultForm, t as transformDocument } from "./Field-BbrhLACK.mjs";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var lib = {};
var renderPropsVersion = {};
var events = {};
Object.defineProperty(events, "__esModule", { value: true });
events.unlisten = events.listen = void 0;
const elementsWithListeners = [];
const registeredListeners = [];
function createListener(el) {
  return {
    el,
    callbacks: {},
    realCallbacks: {},
    realListenersCnt: 0
  };
}
function addCallback(listener, event, cb) {
  if (listener.callbacks[event]) {
    if (listener.callbacks[event].indexOf(cb) === -1) {
      listener.callbacks[event].push(cb);
    }
    return;
  }
  listener.callbacks[event] = [cb];
  listener.realCallbacks[event] = (e) => {
    for (let i = 0, l = listener.callbacks[event].length; i < l; i += 1) {
      listener.callbacks[event][i](e);
    }
  };
  listener.el.addEventListener(event, listener.realCallbacks[event]);
  listener.realListenersCnt += 1;
}
function removeCallback(listener, event, cb) {
  if (!listener.callbacks[event]) {
    return;
  }
  const idx = listener.callbacks[event].indexOf(cb);
  if (idx === -1) {
    return;
  }
  listener.callbacks[event].splice(idx, 1);
  if (listener.callbacks[event].length > 0) {
    return;
  }
  listener.el.removeEventListener(event, listener.realCallbacks[event]);
  delete listener.callbacks[event];
  delete listener.realCallbacks[event];
  listener.realListenersCnt -= 1;
}
function addListener(el, event, cb) {
  let idx = elementsWithListeners.indexOf(el);
  if (idx === -1) {
    idx = elementsWithListeners.length;
    elementsWithListeners.push(el);
    registeredListeners.push(createListener(el));
  }
  const listener = registeredListeners[idx];
  addCallback(listener, event, cb);
}
function removeListener(el, event, cb) {
  const idx = elementsWithListeners.indexOf(el);
  if (idx === -1) {
    return;
  }
  const listener = registeredListeners[idx];
  removeCallback(listener, event, cb);
  if (listener.realListenersCnt > 0) {
    return;
  }
  elementsWithListeners.splice(idx, 1);
  registeredListeners.splice(idx, 1);
}
function listen(el, events2, cb) {
  for (let i = 0, l = events2.length; i < l; i += 1) {
    addListener(el, events2[i], cb);
  }
}
events.listen = listen;
function unlisten(el, events2, cb) {
  for (let i = 0, l = events2.length; i < l; i += 1) {
    removeListener(el, events2[i], cb);
  }
}
events.unlisten = unlisten;
var find$1 = {};
Object.defineProperty(find$1, "__esModule", { value: true });
const basicSelectors = {};
if (typeof document !== "undefined") {
  basicSelectors.body = document.body;
  basicSelectors.window = window;
  basicSelectors.document = document;
}
const matchesMethodName = (() => {
  if (typeof document !== "undefined" && document.body) {
    const body = document.body;
    return typeof body.matches === "function" ? "matches" : typeof body.webkitMatchesSelector === "function" ? "webkitMatchesSelector" : (
      //webkit
      // @ts-expect-error - ts doesn't like vendors, so do I, but we have to support such case
      typeof body.mozMatchesSelector === "function" ? "mozMatchesSelector" : (
        //mozilla
        // @ts-expect-error - ts doesn't like vendors, so do I, but we have to support such case
        typeof body.msMatchesSelector === "function" ? "msMatchesSelector" : (
          //ie
          // @ts-expect-error - ts doesn't like vendors, so do I, but we have to support such case
          typeof body.oMatchesSelector === "function" ? "oMatchesSelector" : (
            //old opera
            null
          )
        )
      )
    );
  }
  return null;
})();
function find(selector, el) {
  if (!selector) {
    return null;
  }
  if (basicSelectors.hasOwnProperty(selector)) {
    return basicSelectors[selector];
  }
  if (selector[0] === "#") {
    return document.getElementById(selector.slice(1));
  }
  if (matchesMethodName === null) {
    return null;
  }
  let temp = el;
  while (temp = temp.parentElement) {
    if (temp[matchesMethodName](selector)) {
      return temp || null;
    }
  }
  return null;
}
find$1.default = find;
var getClosestTransformedParent$1 = {};
Object.defineProperty(getClosestTransformedParent$1, "__esModule", { value: true });
function getClosestTransformedParent(el) {
  do {
    const style = window.getComputedStyle(el);
    if (style.transform !== "none" || style.webkitTransform !== "none")
      return el;
    el = el.parentElement || el.parentNode;
  } while (el !== null && el.nodeType === 1);
  return null;
}
getClosestTransformedParent$1.default = getClosestTransformedParent;
var rect = {};
Object.defineProperty(rect, "__esModule", { value: true });
rect.isIntersecting = rect.getRect = rect.infiniteRect = void 0;
rect.infiniteRect = { top: -Infinity, bottom: Infinity, height: Infinity, left: -Infinity, right: Infinity, width: Infinity };
function getRect(el) {
  if (el && "getBoundingClientRect" in el && typeof el.getBoundingClientRect === "function") {
    return el.getBoundingClientRect();
  }
  if (el === window || el === document) {
    return {
      top: 0,
      left: 0,
      bottom: window.innerHeight,
      height: window.innerHeight,
      width: window.innerWidth,
      right: window.innerWidth
    };
  }
  return { top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0 };
}
rect.getRect = getRect;
function isIntersecting(r1, r2, topOffset, bottomOffset) {
  const r1Top = r1.top + topOffset, r1Bottom = r1.bottom + bottomOffset;
  return r1Top >= r2.top && r1Top <= r2.bottom || r1Bottom >= r2.top && r1Bottom <= r2.bottom || r1Bottom >= r2.bottom && r1Top <= r2.top;
}
rect.isIntersecting = isIntersecting;
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(renderPropsVersion, "__esModule", { value: true });
const react_1 = React__default;
const events_1 = events;
const find_1 = __importDefault$1(find$1);
const getClosestTransformedParent_1 = __importDefault$1(getClosestTransformedParent$1);
const rect_1 = rect;
const buildTopStyles = (container, props) => {
  const { bottomOffset, hideOnBoundaryHit } = props;
  const { top, height, width, boundaryBottom } = container;
  if (hideOnBoundaryHit || top + height + bottomOffset < boundaryBottom) {
    return { top: `${top}px`, width: `${width}px`, position: "fixed" };
  }
  if (!hideOnBoundaryHit && boundaryBottom > 0) {
    return { top: `${boundaryBottom - height - bottomOffset}px`, width: `${width}px`, position: "fixed" };
  }
  return { width: `${width}px`, bottom: `${bottomOffset}px`, position: "absolute" };
};
const buildBottomStyles = (container, props) => {
  const { bottomOffset, hideOnBoundaryHit } = props;
  const { bottom, height, width, boundaryTop } = container;
  if (hideOnBoundaryHit || bottom - height - bottomOffset > boundaryTop) {
    return { width: `${width}px`, top: `${bottom - height}px`, position: "fixed" };
  }
  return { width: `${width}px`, top: `${bottomOffset}px`, position: "absolute" };
};
const buildStickyStyle = (mode, props, container) => (mode === "top" ? buildTopStyles : buildBottomStyles)(container, props);
const isEqual = (obj1, obj2) => {
  const styles1 = obj1.wrapperStyles;
  const styles2 = obj2.wrapperStyles;
  if (obj1.isFixed !== obj2.isFixed || obj1.height !== obj2.height || !styles1 && styles2 || styles1 && !styles2) {
    return false;
  }
  if (!styles2) {
    return true;
  }
  for (const field in styles1) {
    if (styles1.hasOwnProperty(field) && styles1[field] !== styles2[field]) {
      return false;
    }
  }
  return true;
};
class Sticky extends react_1.Component {
  constructor() {
    super(...arguments);
    this.holderEl = null;
    this.wrapperEl = null;
    this.el = null;
    this.scrollEl = null;
    this.boundaryEl = null;
    this.disabled = false;
    this.checkPositionIntervalId = null;
    this.lastMinHeight = null;
    this.state = {
      isFixed: false,
      wrapperStyles: void 0,
      holderStyles: void 0,
      height: 0
    };
    this.holderRef = (holderEl) => {
      if (holderEl === this.holderEl) {
        return;
      }
      this.holderEl = holderEl;
    };
    this.wrapperRef = (wrapperEl) => {
      if (wrapperEl === this.wrapperEl) {
        return;
      }
      this.wrapperEl = wrapperEl;
      this.updateScrollEl();
      this.updateBoundaryEl();
    };
    this.checkPosition = () => {
      const { holderEl, wrapperEl, boundaryEl, scrollEl, disabled } = this;
      if (!scrollEl || !holderEl || !wrapperEl) {
        console.error("Missing required elements:", {
          scrollEl,
          holderEl,
          wrapperEl
        });
        return;
      }
      const { mode, onFixedToggle, offsetTransforms, isIOSFixEnabled, dontUpdateHolderHeightWhenSticky } = this.props;
      if (disabled) {
        if (this.state.isFixed) {
          this.setState({ isFixed: false, wrapperStyles: {} });
        }
        return;
      }
      if (!holderEl.getBoundingClientRect || !wrapperEl.getBoundingClientRect) {
        return;
      }
      const holderRect = holderEl.getBoundingClientRect();
      const wrapperRect = wrapperEl.getBoundingClientRect();
      const boundaryRect = boundaryEl ? (0, rect_1.getRect)(boundaryEl) : rect_1.infiniteRect;
      const scrollRect = (0, rect_1.getRect)(scrollEl);
      const isFixed = this.isFixed(holderRect, wrapperRect, boundaryRect, scrollRect);
      let offsets = null;
      if (offsetTransforms && isFixed && scrollEl instanceof HTMLElement) {
        const closestTransformedParent = (0, getClosestTransformedParent_1.default)(scrollEl);
        if (closestTransformedParent) {
          offsets = (0, rect_1.getRect)(closestTransformedParent);
        }
      }
      const minHeight = this.state.isFixed && dontUpdateHolderHeightWhenSticky && this.lastMinHeight ? this.lastMinHeight : wrapperRect.height;
      this.lastMinHeight = minHeight;
      const iosRenderingFixStyles = isIOSFixEnabled ? {
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)"
      } : void 0;
      const newState = {
        isFixed,
        height: wrapperRect.height,
        holderStyles: { minHeight: `${minHeight}px` },
        wrapperStyles: isFixed ? Object.assign(Object.assign({}, iosRenderingFixStyles), buildStickyStyle(mode, this.props, {
          boundaryTop: mode === "bottom" ? boundaryRect.top : 0,
          boundaryBottom: mode === "top" ? boundaryRect.bottom : 0,
          top: mode === "top" ? scrollRect.top - (offsets ? offsets.top : 0) : 0,
          bottom: mode === "bottom" ? scrollRect.bottom - (offsets ? offsets.bottom : 0) : 0,
          width: holderRect.width,
          height: wrapperRect.height
        })) : iosRenderingFixStyles
      };
      if (isFixed !== this.state.isFixed && onFixedToggle && typeof onFixedToggle === "function") {
        onFixedToggle(isFixed);
      }
      if (!isEqual(this.state, newState)) {
        this.setState(newState);
      }
    };
  }
  isFixed(holderRect, wrapperRect, boundaryRect, scrollRect) {
    const { hideOnBoundaryHit, bottomOffset, topOffset, mode } = this.props;
    if (this.disabled) {
      return false;
    }
    if (hideOnBoundaryHit && boundaryRect && !(0, rect_1.isIntersecting)(boundaryRect, scrollRect, topOffset, bottomOffset)) {
      return false;
    }
    const hideOffset = hideOnBoundaryHit ? wrapperRect.height + bottomOffset : 0;
    if (mode === "top") {
      return holderRect.top + topOffset < scrollRect.top && scrollRect.top + hideOffset <= boundaryRect.bottom;
    }
    return holderRect.bottom - topOffset > scrollRect.bottom && scrollRect.bottom - hideOffset >= boundaryRect.top;
  }
  updateScrollEl() {
    if (!this.wrapperEl) {
      return;
    }
    if (this.scrollEl) {
      (0, events_1.unlisten)(this.scrollEl, ["scroll"], this.checkPosition);
      this.scrollEl = null;
    }
    const { scrollElement } = this.props;
    if (typeof scrollElement === "string") {
      this.scrollEl = (0, find_1.default)(scrollElement, this.wrapperEl);
    } else {
      this.scrollEl = scrollElement;
    }
    if (this.scrollEl) {
      (0, events_1.listen)(this.scrollEl, ["scroll"], this.checkPosition);
    } else {
      console.error("Cannot find scrollElement " + (typeof scrollElement === "string" ? scrollElement : "unknown"));
    }
  }
  updateBoundaryEl() {
    if (!this.wrapperEl) {
      return;
    }
    const { boundaryElement } = this.props;
    this.boundaryEl = (0, find_1.default)(boundaryElement, this.wrapperEl);
    if (this.boundaryEl === window || this.boundaryEl === document) {
      this.boundaryEl = null;
    }
  }
  initialize() {
    const { positionRecheckInterval, disabled } = this.props;
    this.disabled = disabled;
    (0, events_1.listen)(window, ["scroll", "resize", "pageshow", "load"], this.checkPosition);
    this.checkPosition();
    if (positionRecheckInterval) {
      this.checkPositionIntervalId = setInterval(this.checkPosition, positionRecheckInterval);
    }
  }
  componentDidUpdate({ scrollElement, boundaryElement, disabled }) {
    if (scrollElement !== this.props.scrollElement || this.scrollEl === null) {
      this.updateScrollEl();
    }
    if (boundaryElement !== this.props.boundaryElement || this.boundaryEl === null) {
      this.updateBoundaryEl();
    }
    if (disabled !== this.props.disabled) {
      this.disabled = this.props.disabled;
      this.checkPosition();
    }
  }
  componentDidMount() {
    this.initialize();
    if (this.wrapperEl === null) {
      console.error("Wrapper element is missing, please make sure that you have assigned refs correctly");
    }
  }
  componentWillUnmount() {
    if (this.scrollEl) {
      (0, events_1.unlisten)(this.scrollEl, ["scroll"], this.checkPosition);
    }
    (0, events_1.unlisten)(window, ["scroll", "resize", "pageshow", "load"], this.checkPosition);
    this.boundaryEl = null;
    this.scrollEl = null;
    if (this.checkPositionIntervalId) {
      clearInterval(this.checkPositionIntervalId);
    }
  }
  render() {
    const { holderRef, wrapperRef } = this;
    const { isFixed, wrapperStyles, holderStyles } = this.state;
    return this.props.children({
      holderRef,
      wrapperRef,
      isFixed,
      wrapperStyles,
      holderStyles
    });
  }
}
Sticky.defaultProps = {
  mode: "top",
  topOffset: 0,
  bottomOffset: 0,
  isIOSFixEnabled: true,
  offsetTransforms: true,
  disabled: false,
  onFixedToggle: void 0,
  boundaryElement: void 0,
  hideOnBoundaryHit: true,
  scrollElement: "window",
  dontUpdateHolderHeightWhenSticky: false
};
renderPropsVersion.default = Sticky;
var basicVersion = {};
(function(exports) {
  var __rest = commonjsGlobal && commonjsGlobal.__rest || function(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
          t[p[i]] = s[p[i]];
      }
    return t;
  };
  var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { "default": mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.defaultProps = void 0;
  const react_12 = __importDefault2(React__default);
  const render_props_version_12 = __importDefault2(renderPropsVersion);
  exports.defaultProps = Object.assign(Object.assign({}, render_props_version_12.default.defaultProps), { stickyClassName: "sticky", wrapperClassName: "", stickyStyle: {} });
  function Sticky2(props) {
    const _a = Object.assign(Object.assign({}, exports.defaultProps), props), {
      // props for StickyRenderProp
      mode,
      onFixedToggle,
      hideOnBoundaryHit,
      offsetTransforms,
      disabled,
      boundaryElement,
      scrollElement,
      bottomOffset,
      topOffset,
      positionRecheckInterval,
      children,
      isIOSFixEnabled,
      dontUpdateHolderHeightWhenSticky,
      // own props
      wrapperClassName,
      stickyClassName,
      stickyStyle
    } = _a, rest = __rest(_a, ["mode", "onFixedToggle", "hideOnBoundaryHit", "offsetTransforms", "disabled", "boundaryElement", "scrollElement", "bottomOffset", "topOffset", "positionRecheckInterval", "children", "isIOSFixEnabled", "dontUpdateHolderHeightWhenSticky", "wrapperClassName", "stickyClassName", "stickyStyle"]);
    return react_12.default.createElement(render_props_version_12.default, { mode, onFixedToggle, hideOnBoundaryHit, offsetTransforms, disabled, boundaryElement, scrollElement, bottomOffset, topOffset, positionRecheckInterval, isIOSFixEnabled, dontUpdateHolderHeightWhenSticky }, ({ isFixed, wrapperStyles, wrapperRef, holderStyles, holderRef }) => react_12.default.createElement(
      "div",
      Object.assign({}, rest, { ref: holderRef, style: holderStyles }),
      react_12.default.createElement("div", Object.assign({}, rest, { className: `${wrapperClassName} ${isFixed ? stickyClassName : ""}`, style: isFixed ? Object.assign(Object.assign({}, wrapperStyles), stickyStyle) : wrapperStyles, ref: wrapperRef }), children)
    ));
  }
  exports.default = Sticky2;
})(basicVersion);
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { "default": mod };
};
Object.defineProperty(lib, "__esModule", { value: true });
lib.RenderPropSticky = void 0;
const render_props_version_1 = __importDefault(renderPropsVersion);
lib.RenderPropSticky = render_props_version_1.default;
const basic_version_1 = __importDefault(basicVersion);
var _default = lib.default = basic_version_1.default;
const useOnce = (effect) => React.useEffect(effect, emptyDeps);
const emptyDeps = [];
const FormLayout = ({ layout }) => {
  const { formatMessage } = useIntl();
  const { model } = useDoc();
  return /* @__PURE__ */ jsx(Flex, { direction: "column", alignItems: "stretch", gap: 6, children: layout.map((panel, index) => {
    if (panel.some((row) => row.some((field) => field.type === "dynamiczone"))) {
      const [row] = panel;
      const [field] = row;
      const fieldWithTranslatedLabel = {
        ...field,
        label: formatMessage({
          id: `content-manager.content-types.${model}.${field.name}`,
          defaultMessage: field.label
        })
      };
      return /* @__PURE__ */ jsx(Grid.Root, { gap: 4, children: /* @__PURE__ */ jsx(Grid.Item, { col: 12, s: 12, xs: 12, direction: "column", alignItems: "stretch", children: /* @__PURE__ */ jsx(MemoizedInputRenderer, { ...fieldWithTranslatedLabel }) }) }, field.name);
    }
    return /* @__PURE__ */ jsx(
      Box,
      {
        hasRadius: true,
        background: "neutral0",
        shadow: "tableShadow",
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 6,
        paddingBottom: 6,
        borderColor: "neutral150",
        children: /* @__PURE__ */ jsx(Flex, { direction: "column", alignItems: "stretch", gap: 6, children: panel.map((row, gridRowIndex) => /* @__PURE__ */ jsx(Grid.Root, { gap: 4, children: row.map(({ size, ...field }) => {
          const fieldWithTranslatedLabel = {
            ...field,
            label: formatMessage({
              id: `content-manager.content-types.${model}.${field.name}`,
              defaultMessage: field.label
            })
          };
          return /* @__PURE__ */ jsx(
            Grid.Item,
            {
              col: size,
              s: 12,
              xs: 12,
              direction: "column",
              alignItems: "stretch",
              children: /* @__PURE__ */ jsx(MemoizedInputRenderer, { ...fieldWithTranslatedLabel })
            },
            field.name
          );
        }) }, gridRowIndex)) })
      },
      index
    );
  }) });
};
const EditViewPage = () => {
  const location = useLocation();
  const [
    {
      query: { status }
    },
    setQuery
  ] = useQueryParams({
    status: "draft"
  });
  const { formatMessage } = useIntl();
  const { toggleNotification } = useNotification();
  const {
    document: document2,
    meta,
    isLoading: isLoadingDocument,
    schema,
    components,
    collectionType,
    id,
    model,
    hasError
  } = useDoc();
  const hasDraftAndPublished = schema?.options?.draftAndPublish ?? false;
  useOnce(() => {
    if (location?.state && "error" in location.state) {
      toggleNotification({
        type: "danger",
        message: location.state.error,
        timeout: 5e3
      });
    }
  });
  const isLoadingActionsRBAC = useDocumentRBAC("EditViewPage", (state) => state.isLoading);
  const isSingleType = collectionType === SINGLE_TYPES;
  const isCreatingDocument = !id && !isSingleType;
  const {
    isLoading: isLoadingLayout,
    edit: {
      layout,
      settings: { mainField }
    }
  } = useDocumentLayout(model);
  const { isLazyLoading } = useLazyComponents([]);
  const isLoading = isLoadingActionsRBAC || isLoadingDocument || isLoadingLayout || isLazyLoading;
  const initialValues = React.useMemo(() => {
    if (!document2 && !isCreatingDocument && !isSingleType || !schema) {
      return void 0;
    }
    const form = document2?.id ? document2 : createDefaultForm(schema, components);
    return transformDocument(schema, components)(form);
  }, [document2, isCreatingDocument, isSingleType, schema, components]);
  if (hasError) {
    return /* @__PURE__ */ jsx(Page.Error, {});
  }
  if (isLoading && !document2?.documentId) {
    return /* @__PURE__ */ jsx(Page.Loading, {});
  }
  if (!initialValues) {
    return /* @__PURE__ */ jsx(Page.Error, {});
  }
  const handleTabChange = (status2) => {
    if (status2 === "published" || status2 === "draft") {
      setQuery({ status: status2 }, "push", true);
    }
  };
  let documentTitle = "Untitled";
  if (mainField !== "id" && document2?.[mainField]) {
    documentTitle = document2[mainField];
  } else if (isSingleType && schema?.info.displayName) {
    documentTitle = schema.info.displayName;
  }
  const validateSync = (values, options) => {
    const yupSchema = createYupSchema(schema?.attributes, components, {
      status,
      ...options
    });
    return yupSchema.validateSync(values, { abortEarly: false });
  };
  return /* @__PURE__ */ jsxs(Main, { paddingLeft: 10, paddingRight: 10, children: [
    /* @__PURE__ */ jsx(Page.Title, { children: documentTitle }),
    /* @__PURE__ */ jsx(
      Form,
      {
        disabled: hasDraftAndPublished && status === "published",
        initialValues,
        method: isCreatingDocument ? "POST" : "PUT",
        validate: (values, options) => {
          const yupSchema = createYupSchema(schema?.attributes, components, {
            status,
            ...options
          });
          return yupSchema.validate(values, { abortEarly: false });
        },
        initialErrors: location?.state?.forceValidation ? validateSync(initialValues, {}) : {},
        children: ({ resetForm }) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            Header,
            {
              isCreating: isCreatingDocument,
              status: hasDraftAndPublished ? getDocumentStatus(document2, meta) : void 0,
              title: documentTitle
            }
          ),
          /* @__PURE__ */ jsxs(Tabs.Root, { variant: "simple", value: status, onValueChange: handleTabChange, children: [
            /* @__PURE__ */ jsx(
              Tabs.List,
              {
                "aria-label": formatMessage({
                  id: getTranslation("containers.edit.tabs.label"),
                  defaultMessage: "Document status"
                }),
                children: hasDraftAndPublished ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(StatusTab, { value: "draft", children: formatMessage({
                    id: getTranslation("containers.edit.tabs.draft"),
                    defaultMessage: "draft"
                  }) }),
                  /* @__PURE__ */ jsx(
                    StatusTab,
                    {
                      disabled: !meta || meta.availableStatus.length === 0,
                      value: "published",
                      children: formatMessage({
                        id: getTranslation("containers.edit.tabs.published"),
                        defaultMessage: "published"
                      })
                    }
                  )
                ] }) : null
              }
            ),
            /* @__PURE__ */ jsxs(Grid.Root, { paddingTop: 8, gap: 4, children: [
              /* @__PURE__ */ jsxs(Grid.Item, { col: 10, m: 9, s: 12, direction: "column", alignItems: "stretch", children: [
                /* @__PURE__ */ jsx(Tabs.Content, { value: "draft", children: /* @__PURE__ */ jsx(FormLayout, { layout }) }),
                /* @__PURE__ */ jsx(Tabs.Content, { value: "published", children: /* @__PURE__ */ jsx(FormLayout, { layout }) })
              ] }),
              /* @__PURE__ */ jsx(Grid.Item, { col: 2, m: 3, s: 12, direction: "column", alignItems: "stretch", children: /* @__PURE__ */ jsx(_default, { children: /* @__PURE__ */ jsx(Panels, {}) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Blocker,
            {
              onProceed: resetForm
            }
          )
        ] })
      }
    )
  ] });
};
const StatusTab = styled(Tabs.Trigger)`
  text-transform: uppercase;
`;
const getDocumentStatus = (document2, meta) => {
  const docStatus = document2?.status;
  const statuses = meta?.availableStatus ?? [];
  if (!docStatus) {
    return "draft";
  }
  if (docStatus === "draft" && statuses.find((doc) => doc.publishedAt !== null)) {
    return "published";
  }
  return docStatus;
};
const ProtectedEditViewPage = () => {
  const { slug = "" } = useParams();
  const {
    permissions = [],
    isLoading,
    error
  } = useRBAC(
    PERMISSIONS.map((action) => ({
      action,
      subject: slug
    }))
  );
  if (isLoading) {
    return /* @__PURE__ */ jsx(Page.Loading, {});
  }
  if (error || !slug) {
    return /* @__PURE__ */ jsx(Page.Error, {});
  }
  return /* @__PURE__ */ jsx(Page.Protect, { permissions, children: ({ permissions: permissions2 }) => /* @__PURE__ */ jsx(DocumentRBAC, { permissions: permissions2, children: /* @__PURE__ */ jsx(EditViewPage, {}) }) });
};
export {
  EditViewPage,
  ProtectedEditViewPage,
  getDocumentStatus
};
//# sourceMappingURL=EditViewPage-D9xl1g8t.mjs.map
