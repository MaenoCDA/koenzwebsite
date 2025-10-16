import{r as h,cG as $c,j as s,lQ as Cc,lR as Oa,lS as Oe,lT as et,lU as Rt,lV as Ke,al as ar,lW as yc,lX as Ha,lY as Sc,lZ as Rc,l_ as Bn,l$ as X3,m0 as _c,m1 as jc,m2 as pa,m3 as Q1,m4 as Q3,m5 as J3,m6 as P3,m7 as er,m8 as Ac,m9 as e6,ma as Ic,mb as _,J as I,cL as te,mc as Tc,md as Mc,me as Ec,mf as t6,mg as n6,mh as Lc,mi as r6,mj as o6,mk as a6,ml as i6,ch as it,mm as s6,mn as c6,mo as l6,mp as u6,mq as d6,mr as h6,ms as f6,mt as g6,mu as m6,mv as w6,js as x6,mw as v6,mx as p6,my as b6,mz as $6,mA as C6,mB as y6,mC as S6,mD as R6,mE as _6,mF as j6,mG as A6,mH as I6,mI as T6,mJ as M6,mK as E6,mL as Vc,mM as L6,mN as V6,mO as D6,mP as B6,mQ as O6,y as H6,mR as ba,mS as Na,mT as $a,mU as Ca,mV as N6,mW as F6,mX as z6,mY as W6,mZ as k6,m_ as U6,m$ as q6,n0 as Dc,n1 as G6,n2 as Bc,n3 as K6,n4 as Y6,n5 as Z6,n6 as X6,n7 as Q6,n8 as Oc,n9 as Hc,na as J6,nb as P6,nc as e4,nd as t4,ne as n4,nf as r4,ng as o4,nh as a4,ni as i4,nj as s4,nk as c4,nl as l4,nm as u4,nn as d4,no as h4,np as f4,nq as g4,nr as m4,ns as w4,nt as x4,nu as v4,nv as p4,nw as b4,lC as J1,lE as Nc}from"./strapi-BWAWKOj2.js";var $4=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},Pn=new WeakMap,To=new WeakMap,Mo={},ga=0,Fc=function(e){return e&&(e.host||Fc(e.parentNode))},C4=function(e,n){return n.map(function(a){if(e.contains(a))return a;var c=Fc(a);return c&&e.contains(c)?c:(console.error("aria-hidden",a,"in not contained inside",e,". Doing nothing"),null)}).filter(function(a){return!!a})},y4=function(e,n,a,c){var o=C4(n,Array.isArray(e)?e:[e]);Mo[a]||(Mo[a]=new WeakMap);var l=Mo[a],u=[],w=new Set,v=new Set(o),R=function(y){!y||w.has(y)||(w.add(y),R(y.parentNode))};o.forEach(R);var C=function(y){!y||v.has(y)||Array.prototype.forEach.call(y.children,function(b){if(w.has(b))C(b);else try{var A=b.getAttribute(c),T=A!==null&&A!=="false",M=(Pn.get(b)||0)+1,V=(l.get(b)||0)+1;Pn.set(b,M),l.set(b,V),u.push(b),M===1&&T&&To.set(b,!0),V===1&&b.setAttribute(a,"true"),T||b.setAttribute(c,"true")}catch(L){console.error("aria-hidden: cannot operate on ",b,L)}})};return C(n),w.clear(),ga++,function(){u.forEach(function(y){var b=Pn.get(y)-1,A=l.get(y)-1;Pn.set(y,b),l.set(y,A),b||(To.has(y)||y.removeAttribute(c),To.delete(y)),A||y.removeAttribute(a)}),ga--,ga||(Pn=new WeakMap,Pn=new WeakMap,To=new WeakMap,Mo={})}},zc=function(e,n,a){a===void 0&&(a="data-aria-hidden");var c=Array.from(Array.isArray(e)?e:[e]),o=$4(e);return o?(c.push.apply(c,Array.from(o.querySelectorAll("[aria-live]"))),y4(c,o,a,"aria-hidden")):function(){return null}};function S4(e){const n=`${e}CollectionProvider`,[a,c]=_c(n),[o,l]=a(n,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),u=A=>{const{scope:T,children:M}=A,V=h.useRef(null),L=h.useRef(new Map).current,j=h.useRef(new Set).current;return s.jsx(o,{scope:T,itemMap:L,collectionRef:V,listeners:j,children:M})};u.displayName=n;const w=`${e}CollectionSlot`,v=h.forwardRef((A,T)=>{const{scope:M,children:V}=A,L=l(w,M),j=et(T,L.collectionRef);return s.jsx(pa,{ref:j,children:V})});v.displayName=w;const R=`${e}CollectionItemSlot`,C="data-radix-collection-item",y=h.forwardRef((A,T)=>{const{scope:M,children:V,...L}=A,j=h.useRef(null),B=et(T,j),F=l(R,M);return h.useEffect(()=>{const z=Array.from(F.itemMap.values());return F.itemMap.set(j,{ref:j,...L}),F.listeners.forEach(W=>W(Array.from(F.itemMap.values()),z)),()=>{const W=Array.from(F.itemMap.values());F.itemMap.delete(j),F.listeners.forEach(U=>U(Array.from(F.itemMap.values()),W))}}),s.jsx(pa,{[C]:"",ref:B,children:V})});y.displayName=R;function b(A){const T=l(`${e}CollectionConsumer`,A),M=h.useCallback(()=>{const L=T.collectionRef.current;if(!L)return[];const j=Array.from(L.querySelectorAll(`[${C}]`));return Array.from(T.itemMap.values()).sort((z,W)=>j.indexOf(z.ref.current)-j.indexOf(W.ref.current))},[T.collectionRef,T.itemMap]),V=h.useCallback(L=>(T.listeners.add(L),()=>T.listeners.delete(L)),[T.listeners]);return{getItems:M,subscribe:V}}return[{Provider:u,Slot:v,ItemSlot:y},b,c]}const ma=new Map;function R4(e,n){const a=e+(n?Object.entries(n).sort((o,l)=>o[0]<l[0]?-1:1).join():"");if(ma.has(a))return ma.get(a);const c=new Intl.Collator(e,n);return ma.set(a,c),c}function Fa(e,n){const a=R4(e,{usage:"search",...n});return{startsWith(c,o){return o.length===0?!0:(c=c.normalize("NFC"),o=o.normalize("NFC"),a.compare(c.slice(0,o.length),o)===0)},endsWith(c,o){return o.length===0?!0:(c=c.normalize("NFC"),o=o.normalize("NFC"),a.compare(c.slice(-o.length),o)===0)},contains(c,o){if(o.length===0)return!0;c=c.normalize("NFC"),o=o.normalize("NFC");let l=0;const u=o.length;for(;l+u<=c.length;l++){const w=c.slice(l,l+u);if(a.compare(o,w)===0)return!0}return!1}}}const _4=e=>{const n=h.useRef();return h.useEffect(()=>{n.current=e}),n.current},j4=[" ","Enter","ArrowUp","ArrowDown"],A4=["Enter"],I4=e=>!!(e.length===1&&e.match(/\S| /)),Wc="Combobox",[tr,Er]=S4(Wc),[T4,Yt]=$c(Wc),M4=({children:e})=>s.jsx(Ic,{children:s.jsx(tr.Provider,{scope:void 0,children:e})}),E4=e=>typeof e=="string"?e==="none"?{type:e,filter:void 0}:{type:e,filter:"startsWith"}:e,L4=e=>{const{allowCustomValue:n=!1,autocomplete:a="none",children:c,open:o,defaultOpen:l,onOpenChange:u,value:w,defaultValue:v,onValueChange:R,disabled:C,required:y=!1,locale:b="en-EN",onTextValueChange:A,textValue:T,defaultTextValue:M,filterValue:V,defaultFilterValue:L,onFilterValueChange:j,isPrintableCharacter:B=I4}=e,[F,z]=h.useState(null),[W,U]=h.useState(null),[oe,se]=h.useState(null),[ce,$e]=h.useState(null),[ne=!1,P]=er({prop:o,defaultProp:l,onChange:u}),[ee,_e]=er({prop:w,defaultProp:v,onChange:R}),[je,me]=er({prop:T,defaultProp:n&&!M?w:M,onChange:A}),[ye,Me]=er({prop:V,defaultProp:L,onChange:j}),De=Bn(),he=h.useCallback((we,ze)=>{const Ne=ze.map(ae=>ae.ref.current),[Ye,...Y]=Ne,[xe]=Y.slice(-1),Se=ce??ze.find(ae=>ae.value===ee)?.ref.current;for(const ae of we){if(ae===Se)return;if(ae?.scrollIntoView({block:"nearest"}),ae===Ye&&W&&(W.scrollTop=0),ae===xe&&W&&(W.scrollTop=W.scrollHeight),$e(ae),a==="both"){const ge=ze.find(Ce=>Ce.ref.current===ae);ge&&me(ge.textValue)}if(ae!==Se)return}},[a,me,W,ce,ee]),Je=E4(a);return h.useEffect(()=>{a!=="both"&&$e(null)},[je,a]),h.useEffect(()=>{if(oe&&F)return zc([oe,F])},[oe,F]),s.jsx(M4,{children:s.jsx(T4,{allowCustomValue:n,autocomplete:Je,required:y,trigger:F,onTriggerChange:z,contentId:De,value:ee,onValueChange:_e,open:ne,onOpenChange:P,disabled:C,locale:b,focusFirst:he,textValue:je,onTextValueChange:me,onViewportChange:U,onContentChange:se,visuallyFocussedItem:ce,filterValue:ye,onFilterValueChange:Me,onVisuallyFocussedItemChange:$e,isPrintableCharacter:B,children:c})})},kc="ComboboxTrigger",Uc=h.forwardRef((e,n)=>{const{...a}=e,c=Yt(kc),o=()=>{c.disabled||c.onOpenChange(!0)};return s.jsx(Cc,{asChild:!0,children:s.jsx(Oa,{asChild:!0,trapped:c.open,onMountAutoFocus:l=>{l.preventDefault()},onUnmountAutoFocus:l=>{c.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),l.preventDefault()},children:s.jsx("div",{ref:n,"data-disabled":c.disabled?"":void 0,...a,onClick:Oe(a.onClick,l=>{if(c.disabled){l.preventDefault();return}c.trigger?.focus()}),onPointerDown:Oe(a.onPointerDown,l=>{if(c.disabled){l.preventDefault();return}const u=l.target;u.hasPointerCapture(l.pointerId)&&u.releasePointerCapture(l.pointerId),(u.closest("button")??u.closest("div"))===l.currentTarget&&l.button===0&&l.ctrlKey===!1&&(o(),c.trigger?.focus())})})})})});Uc.displayName=kc;const qc="ComboboxInput",Gc=h.forwardRef((e,n)=>{const a=Yt(qc),c=h.useRef(null),{getItems:o}=Er(void 0),{startsWith:l}=Fa(a.locale,{sensitivity:"base"}),u=a.disabled,w=et(c,n,a.onTriggerChange),v=()=>{u||a.onOpenChange(!0)},R=_4(a.filterValue);return Rt(()=>{const C=setTimeout(()=>{if(a.textValue===""||a.textValue===void 0||a.filterValue===""||a.filterValue===void 0)return;const y=o().find(A=>A.type==="option"&&l(A.textValue,a.textValue)),b=Y4(R??"",a.filterValue);y&&!a.visuallyFocussedItem&&b===a.filterValue.length&&c.current?.setSelectionRange(a.filterValue.length,a.textValue.length)});return()=>clearTimeout(C)},[a.textValue,a.filterValue,l,a.visuallyFocussedItem,o,R]),s.jsx("input",{type:"text",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":a.autocomplete.type,"data-state":a.open?"open":"closed","aria-disabled":u,"aria-activedescendant":a.visuallyFocussedItem?.id,disabled:u,"data-disabled":u?"":void 0,"data-placeholder":a.textValue===void 0?"":void 0,value:a.textValue??"",...e,ref:w,onKeyDown:Oe(e.onKeyDown,C=>{if(["ArrowUp","ArrowDown","Home","End"].includes(C.key))a.open||v(),setTimeout(()=>{let b=o().filter(A=>!A.disabled&&A.isVisible).map(A=>A.ref.current);if(["ArrowUp","End"].includes(C.key)&&(b=b.slice().reverse()),["ArrowUp","ArrowDown"].includes(C.key)){const A=a.visuallyFocussedItem??o().find(T=>T.value===a.value)?.ref.current;if(A){let T=b.indexOf(A);T===b.length-1&&(T=-1),b=b.slice(T+1)}}if(["ArrowDown"].includes(C.key)&&a.autocomplete.type==="both"&&b.length>1){const[A,...T]=b,M=o().find(V=>V.ref.current===A).textValue;a.textValue===M&&(b=T)}a.focusFirst(b,o())}),C.preventDefault();else if(["Tab"].includes(C.key)&&a.open)C.preventDefault();else if(["Escape"].includes(C.key))a.open?a.onOpenChange(!1):(a.onValueChange(void 0),a.onTextValueChange("")),C.preventDefault();else if(A4.includes(C.key)){if(a.visuallyFocussedItem){const y=o().find(b=>b.ref.current===a.visuallyFocussedItem);y&&(a.onValueChange(y.value),a.onTextValueChange(y.textValue),a.autocomplete.type==="both"&&a.onFilterValueChange(y.textValue),y.ref.current?.click())}else{const y=o().find(b=>b.type==="option"&&!b.disabled&&b.textValue===a.textValue);y&&(a.onValueChange(y.value),a.onTextValueChange(y.textValue),a.autocomplete.type==="both"&&a.onFilterValueChange(y.textValue),y.ref.current?.click())}a.onOpenChange(!1),C.preventDefault()}else a.onVisuallyFocussedItemChange(null)}),onChange:Oe(e.onChange,C=>{a.onTextValueChange(C.currentTarget.value),a.autocomplete.type==="both"&&a.onFilterValueChange(C.currentTarget.value)}),onKeyUp:Oe(e.onKeyUp,C=>{if(!a.open&&(a.isPrintableCharacter(C.key)||["Backspace"].includes(C.key))&&v(),setTimeout(()=>{if(a.autocomplete.type==="both"&&a.isPrintableCharacter(C.key)&&a.filterValue!==void 0){const y=a.filterValue,b=o().find(A=>l(A.textValue,y));b&&a.onTextValueChange(b.textValue)}}),a.autocomplete.type==="none"&&a.isPrintableCharacter(C.key)){const y=a.textValue??"",b=o().find(A=>l(A.textValue,y));b&&(a.onVisuallyFocussedItemChange(b.ref.current),b.ref.current?.scrollIntoView())}}),onBlur:Oe(e.onBlur,()=>{if(a.open)return;a.onVisuallyFocussedItemChange(null);const[C]=o().filter(b=>b.textValue===a.textValue&&b.type==="option");if(C){a.onValueChange(C.value),a.autocomplete.type==="both"&&a.onFilterValueChange(C.textValue);return}if(a.allowCustomValue){a.onValueChange(a.textValue),a.autocomplete.type==="both"&&a.onFilterValueChange(a.textValue);return}const[y]=o().filter(b=>b.value===a.value&&b.type==="option");y&&a.textValue!==""?(a.onTextValueChange(y.textValue),a.autocomplete.type==="both"&&a.onFilterValueChange(y.textValue)):(a.onValueChange(void 0),a.onTextValueChange(""))})})});Gc.displayName="ComboboxTextInput";const Kc=h.forwardRef((e,n)=>{const{children:a,...c}=e,o=Yt(qc),l=o.disabled,u=()=>{l||(o.onOpenChange(!0),o.trigger?.focus())};return s.jsx(Ke.button,{"aria-hidden":!0,type:"button","aria-disabled":l,"aria-controls":o.contentId,"aria-expanded":o.open,disabled:l,"data-disabled":l?"":void 0,...c,tabIndex:-1,ref:n,onClick:Oe(c.onClick,()=>{o.trigger?.focus()}),onPointerDown:Oe(c.onPointerDown,w=>{w.button===0&&w.ctrlKey===!1&&(u(),w.preventDefault())}),onKeyDown:Oe(c.onKeyDown,w=>{j4.includes(w.key)&&(u(),w.preventDefault())}),children:a||"▼"})});Kc.displayName="ComboboxIcon";const V4="ComboboxPortal",Yc=e=>s.jsx(Ac,{asChild:!0,...e});Yc.displayName=V4;const za="ComboboxContent",Zc=h.forwardRef((e,n)=>{const a=Yt(za),{getItems:c}=Er(void 0),[o,l]=h.useState();if(Rt(()=>{l(new DocumentFragment)},[]),Rt(()=>{a.open&&a.autocomplete.type==="none"&&setTimeout(()=>{c().find(w=>w.value===a.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[c,a.autocomplete,a.value,a.open]),!a.open){const u=o;return u?ar.createPortal(s.jsx(tr.Slot,{scope:void 0,children:s.jsx("div",{children:e.children})}),u):null}return s.jsx(Xc,{...e,ref:n})});Zc.displayName=za;const D4=10,Xc=h.forwardRef((e,n)=>{const{onEscapeKeyDown:a,onPointerDownOutside:c,...o}=e,l=Yt(za),u=et(n,v=>l.onContentChange(v)),{onOpenChange:w}=l;return yc(),h.useEffect(()=>{const v=()=>{w(!1)};return window.addEventListener("blur",v),window.addEventListener("resize",v),()=>{window.removeEventListener("blur",v),window.removeEventListener("resize",v)}},[w]),s.jsx(Ha,{allowPinchZoom:!0,children:s.jsx(Sc,{asChild:!0,onEscapeKeyDown:a,onPointerDownOutside:c,onFocusOutside:v=>{v.preventDefault()},onDismiss:()=>{l.onOpenChange(!1),l.trigger?.focus({preventScroll:!0})},children:s.jsx(Qc,{role:"listbox",id:l.contentId,"data-state":l.open?"open":"closed",onContextMenu:v=>v.preventDefault(),...o,ref:u,style:{display:"flex",flexDirection:"column",outline:"none",...o.style}})})})});Xc.displayName="ComboboxContentImpl";const Qc=h.forwardRef((e,n)=>{const{align:a="start",collisionPadding:c=D4,...o}=e;return s.jsx(Rc,{...o,ref:n,align:a,collisionPadding:c,style:{boxSizing:"border-box",...o.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});Qc.displayName="ComboboxPopperPosition";const Jc="ComboboxViewport",Pc=h.forwardRef((e,n)=>{const a=Yt(Jc),c=et(n,a.onViewportChange);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),s.jsx(tr.Slot,{scope:void 0,children:s.jsx(Ke.div,{"data-radix-combobox-viewport":"",role:"presentation",...e,ref:c,style:{position:"relative",flex:1,overflow:"auto",...e.style}})})]})});Pc.displayName=Jc;const Bo="ComboboxItem",[P1,Wa]=$c(Bo),ka=h.forwardRef((e,n)=>{const{value:a,disabled:c=!1,textValue:o,...l}=e,[u,w]=h.useState();Rt(()=>{w(new DocumentFragment)},[]);const{onTextValueChange:v,textValue:R,...C}=Yt(Bo),y=Bn(),[b,A]=h.useState(o??""),T=C.value===a,{startsWith:M,contains:V}=Fa(C.locale,{sensitivity:"base"}),L=h.useCallback(j=>{A(B=>B||(j?.textContent??"").trim())},[]);return h.useEffect(()=>{T&&R===void 0&&b!==""&&v(b)},[b,T,R,v]),C.autocomplete.type==="both"&&b&&C.filterValue&&!M(b,C.filterValue)||C.autocomplete.type==="list"&&C.autocomplete.filter==="startsWith"&&b&&R&&!M(b,R)||C.autocomplete.type==="list"&&C.autocomplete.filter==="contains"&&b&&R&&!V(b,R)?u?ar.createPortal(s.jsx(P1,{textId:y,onTextValueChange:L,isSelected:T,textValue:b,children:s.jsx(tr.ItemSlot,{scope:void 0,value:a,textValue:b,disabled:c,type:"option",isVisible:!1,children:s.jsx(ya,{ref:n,value:a,disabled:c,...l})})}),u):null:s.jsx(P1,{textId:y,onTextValueChange:L,isSelected:T,textValue:b,children:s.jsx(tr.ItemSlot,{scope:void 0,value:a,textValue:b,disabled:c,type:"option",isVisible:!0,children:s.jsx(ya,{ref:n,value:a,disabled:c,...l})})})});ka.displayName=Bo;const el="ComboboxItemImpl",ya=h.forwardRef((e,n)=>{const{value:a,disabled:c=!1,...o}=e,l=h.useRef(null),u=et(n,l),{getItems:w}=Er(void 0),{onTextValueChange:v,visuallyFocussedItem:R,...C}=Yt(Bo),{isSelected:y,textValue:b,textId:A}=Wa(el),T=()=>{c||(C.onValueChange(a),v(b),C.onOpenChange(!1),C.autocomplete.type==="both"&&C.onFilterValueChange(b),C.trigger?.focus({preventScroll:!0}))},M=h.useMemo(()=>R===w().find(L=>L.ref.current===l.current)?.ref.current,[w,R]),V=Bn();return s.jsx(Ke.div,{role:"option","aria-labelledby":A,"data-highlighted":M?"":void 0,"aria-selected":y&&M,"data-state":y?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...o,id:V,ref:u,onPointerUp:Oe(o.onPointerUp,T)})});ya.displayName=el;const tl="ComboboxItemText",nl=h.forwardRef((e,n)=>{const{className:a,style:c,...o}=e,l=Wa(tl),u=et(n,l.onTextValueChange);return s.jsx(Ke.span,{id:l.textId,...o,ref:u})});nl.displayName=tl;const rl="ComboboxItemIndicator",ol=h.forwardRef((e,n)=>{const{isSelected:a}=Wa(rl);return a?s.jsx(Ke.span,{"aria-hidden":!0,...e,ref:n}):null});ol.displayName=rl;const Ua="ComboboxNoValueFound",al=h.forwardRef((e,n)=>{const{textValue:a="",filterValue:c="",locale:o,autocomplete:l}=Yt(Ua),[u,w]=h.useState([]),{subscribe:v}=Er(void 0),{startsWith:R,contains:C}=Fa(o,{sensitivity:"base"});return h.useEffect(()=>{const y=v(b=>{w(b)});return()=>{y()}},[v]),l.type==="none"&&u.length>0||l.type==="list"&&l.filter==="startsWith"&&u.some(y=>R(y.textValue,a))||l.type==="both"&&u.some(y=>R(y.textValue,c))||l.type==="list"&&l.filter==="contains"&&u.some(y=>C(y.textValue,a))?null:s.jsx(Ke.div,{...e,ref:n})});al.displayName=Ua;const il=h.forwardRef((e,n)=>{const{disabled:a=!1,...c}=e,o=Yt(Ua),{textValue:l,visuallyFocussedItem:u}=o,{getItems:w,subscribe:v}=Er(void 0),R=h.useRef(null),[C,y]=h.useState(!1),b=et(n,R),A=h.useMemo(()=>u===w().find(V=>V.ref.current===R.current)?.ref.current,[w,u]),T=Bn(),M=()=>{!a&&l&&(o.onValueChange(l),o.onTextValueChange(l),o.onOpenChange(!1),o.autocomplete.type==="both"&&o.onFilterValueChange(l),o.trigger?.focus({preventScroll:!0}))};return Rt(()=>{const V=v(L=>{y(!L.some(j=>j.textValue===l&&j.type!=="create"))});return w().length===0&&y(!0),()=>{V()}},[l,v,w]),!l||!C?null:s.jsx(tr.ItemSlot,{scope:void 0,value:l??"",textValue:l??"",disabled:a,isVisible:!0,type:"create",children:s.jsx(Ke.div,{role:"option",tabIndex:a?void 0:-1,"aria-disabled":a||void 0,"data-disabled":a?"":void 0,"data-highlighted":A?"":void 0,...c,id:T,ref:b,onPointerUp:Oe(c.onPointerUp,M)})})});il.displayName="ComboboxCreateItem";const B4=L4,O4=Uc,H4=Gc,N4=Kc,F4=Yc,z4=Zc,W4=Pc,k4=ka,U4=nl,q4=ol,G4=al,K4=il;function Y4(e,n){const a=Math.min(e.length,n.length);for(let c=0;c<a;c++)if(e[c]!==n[c])return c;return a}const Ft=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:ka,Content:z4,CreateItem:K4,Icon:N4,Item:k4,ItemIndicator:q4,ItemText:U4,NoValueFound:G4,Portal:F4,Root:B4,TextInput:H4,Trigger:O4,Viewport:W4},Symbol.toStringTag,{value:"Module"}));function qa(e){const n=h.useRef(e);return h.useEffect(()=>{n.current=e}),h.useMemo(()=>(...a)=>n.current?.(...a),[])}const Z4=[" ","Enter","ArrowUp","ArrowDown"],X4=[" ","Enter"],Lr="Select",[Oo,Vr,Q4]=X3(Lr),[ir,J4]=_c(Lr,[Q4,jc]),Ho=jc(),[P4,cn]=ir(Lr),[em,tm]=ir(Lr),Ga=e=>{const{__scopeSelect:n,children:a,open:c,defaultOpen:o,onOpenChange:l,value:u,defaultValue:w,onValueChange:v,dir:R,disabled:C,required:y,multi:b=!1}=e,A=Ho(n),[T,M]=h.useState(null),[V,L]=h.useState(null),[j,B]=h.useState(!1),F=e6(R),[z=!1,W]=er({prop:c,defaultProp:o,onChange:l}),[U,oe]=er({prop:u,defaultProp:w,onChange(ne){v&&(Array.isArray(ne),v(ne))}}),se=h.useRef(null),[ce,$e]=h.useState(new Set);return s.jsx(Ic,{...A,children:s.jsx(P4,{required:y,scope:n,trigger:T,onTriggerChange:M,valueNode:V,onValueNodeChange:L,valueNodeHasChildren:j,onValueNodeHasChildrenChange:B,contentId:Bn(),value:U,onValueChange:oe,open:z,onOpenChange:W,dir:F,triggerPointerDownPosRef:se,disabled:C,multi:b,children:s.jsx(Oo.Provider,{scope:n,children:s.jsx(em,{scope:e.__scopeSelect,onNativeOptionAdd:h.useCallback(ne=>{$e(P=>new Set(P).add(ne))},[]),onNativeOptionRemove:h.useCallback(ne=>{$e(P=>{const ee=new Set(P);return ee.delete(ne),ee})},[]),children:a})})})})};Ga.displayName=Lr;const sl="SelectTrigger",Ka=h.forwardRef((e,n)=>{const{__scopeSelect:a,...c}=e,o=Ho(a),l=cn(sl,a),u=l.disabled,w=et(n,l.onTriggerChange),v=Vr(a),[R,C,y]=wl(A=>{const T=v().filter(L=>!L.disabled),M=T.find(L=>L.value===l.value),V=xl(T,A,M);if(V!==void 0&&!Array.isArray(V.value)){const L=l.multi?[V.value]:V.value;l.onValueChange(L)}}),b=()=>{u||(l.onOpenChange(!0),y())};return s.jsx(Cc,{asChild:!0,...o,children:s.jsx(Ke.div,{role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed","data-disabled":u?"":void 0,"data-placeholder":l.value===void 0?"":void 0,tabIndex:u?void 0:0,...c,ref:w,onClick:Oe(c.onClick,A=>{A.currentTarget.focus()}),onPointerDown:Oe(c.onPointerDown,A=>{const T=A.target;T.hasPointerCapture(A.pointerId)&&T.releasePointerCapture(A.pointerId),(T.closest("button")??T.closest("div"))===A.currentTarget&&A.button===0&&A.ctrlKey===!1&&(b(),l.triggerPointerDownPosRef.current={x:Math.round(A.pageX),y:Math.round(A.pageY)},A.preventDefault())}),onKeyDown:Oe(c.onKeyDown,A=>{const T=R.current!=="",M=A.ctrlKey||A.altKey||A.metaKey,V=A.target;(V.closest("button")??V.closest("div"))===A.currentTarget&&(!M&&A.key.length===1&&C(A.key),!(T&&A.key===" ")&&Z4.includes(A.key)&&(b(),A.preventDefault()))})})})});Ka.displayName=sl;const cl="SelectValue",Ya=h.forwardRef((e,n)=>{const{__scopeSelect:a,children:c,placeholder:o,...l}=e,u=cn(cl,a),{onValueNodeHasChildrenChange:w}=u,v=c!==void 0,R=et(n,u.onValueNodeChange),[C,y]=h.useState([]),b=Vr(a);Rt(()=>{w(v)},[w,v]),h.useLayoutEffect(()=>{if(Array.isArray(u.value)&&C.length!==u.value.length){const T=setTimeout(()=>{const M=b().filter(V=>Array.isArray(V.value)?!1:u.value?.includes(V.value));y(M)});return()=>{clearTimeout(T)}}},[u.value,b,C]);let A;if((u.value===void 0||u.value.length===0)&&o!==void 0)A=s.jsx("span",{children:o});else if(typeof c=="function")if(Array.isArray(u.value)){const T=u.value.map(M=>{const V=C.find(L=>L.value===M);return V?c({value:M,textValue:V?.textValue}):null});A=T.every(M=>M===null)?o:T}else A=c(u.value);else A=c;return s.jsx(Ke.span,{...l,ref:R,children:A||null})});Ya.displayName=cl;const nm="SelectIcon",Za=h.forwardRef((e,n)=>{const{__scopeSelect:a,children:c,...o}=e;return s.jsx(Ke.span,{"aria-hidden":!0,...o,ref:n,children:c||"▼"})});Za.displayName=nm;const rm="SelectPortal",Xa=e=>s.jsx(Ac,{asChild:!0,...e});Xa.displayName=rm;const Ln="SelectContent",Qa=h.forwardRef((e,n)=>{const a=cn(Ln,e.__scopeSelect),[c,o]=h.useState();if(Rt(()=>{o(new DocumentFragment)},[]),!a.open){const l=c;return l?ar.createPortal(s.jsx(ll,{scope:e.__scopeSelect,children:s.jsx(Oo.Slot,{scope:e.__scopeSelect,children:s.jsx("div",{children:e.children})})}),l):null}return s.jsx(ul,{...e,ref:n})});Qa.displayName=Ln;const an=10,[ll,pn]=ir(Ln),om="SelectContentImpl",ul=h.forwardRef((e,n)=>{const{__scopeSelect:a,position:c="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:l,onPointerDownOutside:u,side:w,sideOffset:v,align:R,alignOffset:C,arrowPadding:y,collisionBoundary:b,collisionPadding:A,sticky:T,hideWhenDetached:M,avoidCollisions:V,...L}=e,j=cn(Ln,a),[B,F]=h.useState(null),[z,W]=h.useState(null),U=et(n,Y=>F(Y)),[oe,se]=h.useState(null),[ce,$e]=h.useState(null),ne=Vr(a),[P,ee]=h.useState(!1),_e=h.useRef(!1);h.useEffect(()=>{if(B)return zc(B)},[B]),yc();const je=h.useCallback(Y=>{const[xe,...Se]=ne().map(Ce=>Ce.ref.current),[ae]=Se.slice(-1),ge=document.activeElement;for(const Ce of Y)if(Ce===ge||(Ce?.scrollIntoView({block:"nearest"}),Ce===xe&&z&&(z.scrollTop=0),Ce===ae&&z&&(z.scrollTop=z.scrollHeight),Ce?.focus(),document.activeElement!==ge))return},[ne,z]),me=h.useCallback(()=>je([oe,B]),[je,oe,B]);h.useEffect(()=>{P&&me()},[P,me]);const{onOpenChange:ye,triggerPointerDownPosRef:Me}=j;h.useEffect(()=>{if(B){let Y={x:0,y:0};const xe=ae=>{Y={x:Math.abs(Math.round(ae.pageX)-(Me.current?.x??0)),y:Math.abs(Math.round(ae.pageY)-(Me.current?.y??0))}},Se=ae=>{Y.x<=10&&Y.y<=10?ae.preventDefault():B.contains(ae.target)||ye(!1),document.removeEventListener("pointermove",xe),Me.current=null};return Me.current!==null&&(document.addEventListener("pointermove",xe),document.addEventListener("pointerup",Se,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",xe),document.removeEventListener("pointerup",Se,{capture:!0})}}},[B,ye,Me]),h.useEffect(()=>{const Y=()=>ye(!1);return window.addEventListener("blur",Y),window.addEventListener("resize",Y),()=>{window.removeEventListener("blur",Y),window.removeEventListener("resize",Y)}},[ye]);const[De,he]=wl(Y=>{const xe=ne().filter(ge=>!ge.disabled),Se=xe.find(ge=>ge.ref.current===document.activeElement),ae=xl(xe,Y,Se);ae&&setTimeout(()=>ae.ref.current.focus())}),Je=h.useCallback((Y,xe,Se)=>{const ae=!_e.current&&!Se;(j.value!==void 0&&j.value===xe||ae)&&(se(Y),ae&&(_e.current=!0))},[j.value]),we=h.useCallback(()=>B?.focus(),[B]),ze=h.useCallback((Y,xe,Se)=>{const ae=!_e.current&&!Se;(j.value!==void 0&&(Array.isArray(xe)?xe.every(Ce=>j.value?.includes(Ce)):j.value===xe)||ae)&&$e(Y)},[j.value]),Ne=c==="popper"?Sa:dl,Ye=Ne===Sa?{side:w,sideOffset:v,align:R,alignOffset:C,arrowPadding:y,collisionBoundary:b,collisionPadding:A,sticky:T,hideWhenDetached:M,avoidCollisions:V}:{};return s.jsx(ll,{scope:a,content:B,viewport:z,onViewportChange:W,itemRefCallback:Je,selectedItem:oe,onItemLeave:we,itemTextRefCallback:ze,focusSelectedItem:me,selectedItemText:ce,position:c,isPositioned:P,searchRef:De,children:s.jsx(Ha,{as:pa,allowPinchZoom:!0,children:s.jsx(Oa,{asChild:!0,trapped:j.open,onMountAutoFocus:Y=>{Y.preventDefault()},onUnmountAutoFocus:Oe(o,Y=>{j.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),Y.preventDefault()}),children:s.jsx(Sc,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:Y=>Y.preventDefault(),onDismiss:()=>j.onOpenChange(!1),children:s.jsx(Ne,{role:"listbox",id:j.contentId,"data-state":j.open?"open":"closed","aria-multiselectable":j.multi?"true":void 0,dir:j.dir,onContextMenu:Y=>Y.preventDefault(),...L,...Ye,onPlaced:()=>ee(!0),ref:U,style:{display:"flex",flexDirection:"column",outline:"none",...L.style},onKeyDown:Oe(L.onKeyDown,Y=>{const xe=Y.ctrlKey||Y.altKey||Y.metaKey;if(Y.key==="Tab"&&Y.preventDefault(),!xe&&Y.key.length===1&&he(Y.key),["ArrowUp","ArrowDown","Home","End"].includes(Y.key)){let ae=ne().filter(ge=>!ge.disabled).map(ge=>ge.ref.current);if(["ArrowUp","End"].includes(Y.key)&&(ae=ae.slice().reverse()),["ArrowUp","ArrowDown"].includes(Y.key)){const ge=Y.target,Ce=ae.indexOf(ge);ae=ae.slice(Ce+1)}setTimeout(()=>je(ae)),Y.preventDefault()}})})})})})})});ul.displayName=om;const am="SelectItemAlignedPosition",dl=h.forwardRef((e,n)=>{const{__scopeSelect:a,onPlaced:c,...o}=e,l=cn(Ln,a),u=pn(Ln,a),[w,v]=h.useState(null),[R,C]=h.useState(null),y=et(n,U=>C(U)),b=Vr(a),A=h.useRef(!1),T=h.useRef(!0),{viewport:M,selectedItem:V,selectedItemText:L,focusSelectedItem:j}=u,B=h.useCallback(()=>{if(l.trigger&&l.valueNode&&w&&R&&M&&V&&L){const U=l.trigger.getBoundingClientRect(),oe=R.getBoundingClientRect(),se=l.valueNode.getBoundingClientRect(),ce=L.getBoundingClientRect();if(l.dir!=="rtl"){const ge=ce.left-oe.left,Ce=se.left-ge,rt=U.left-Ce,Ee=U.width+rt,Ae=Math.max(Ee,oe.width),_t=window.innerWidth-an,Ze=Q1(Ce,[an,_t-Ae]);w.style.minWidth=`${Ee}px`,w.style.left=`${Ze}px`}else{const ge=oe.right-ce.right,Ce=window.innerWidth-se.right-ge,rt=window.innerWidth-U.right-Ce,Ee=U.width+rt,Ae=Math.max(Ee,oe.width),_t=window.innerWidth-an,Ze=Q1(Ce,[an,_t-Ae]);w.style.minWidth=`${Ee}px`,w.style.right=`${Ze}px`}const $e=b(),ne=window.innerHeight-an*2,P=M.scrollHeight,ee=window.getComputedStyle(R),_e=parseInt(ee.borderTopWidth,10),je=parseInt(ee.paddingTop,10),me=parseInt(ee.borderBottomWidth,10),ye=parseInt(ee.paddingBottom,10),Me=_e+je+P+ye+me,De=Math.min(V.offsetHeight*5,Me),he=window.getComputedStyle(M),Je=parseInt(he.paddingTop,10),we=parseInt(he.paddingBottom,10),ze=U.top+U.height/2-an,Ne=ne-ze,Ye=V.offsetHeight/2,Y=V.offsetTop+Ye,xe=_e+je+Y,Se=Me-xe;if(xe<=ze){const ge=V===$e[$e.length-1].ref.current;w.style.bottom="0px";const Ce=R.clientHeight-M.offsetTop-M.offsetHeight,rt=Math.max(Ne,Ye+(ge?we:0)+Ce+me),Ee=xe+rt;w.style.height=`${Ee}px`}else{const ge=V===$e[0].ref.current;w.style.top="0px";const rt=Math.max(ze,_e+M.offsetTop+(ge?Je:0)+Ye)+Se;w.style.height=`${rt}px`,M.scrollTop=xe-ze+M.offsetTop}w.style.margin=`${an}px 0`,w.style.minHeight=`${De}px`,w.style.maxHeight=`${ne}px`,c?.(),requestAnimationFrame(()=>A.current=!0)}},[b,l.trigger,l.valueNode,w,R,M,V,L,l.dir,c]);Rt(()=>B(),[B]);const[F,z]=h.useState();Rt(()=>{R&&z(window.getComputedStyle(R).zIndex)},[R]);const W=h.useCallback(U=>{U&&T.current===!0&&(B(),j?.(),T.current=!1)},[B,j]);return s.jsx(sm,{scope:a,contentWrapper:w,shouldExpandOnScrollRef:A,onScrollButtonChange:W,children:s.jsx("div",{ref:v,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:F},children:s.jsx(Ke.div,{...o,ref:y,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}})})})});dl.displayName=am;const im="SelectPopperPosition",Sa=h.forwardRef((e,n)=>{const{__scopeSelect:a,align:c="start",collisionPadding:o=an,...l}=e,u=Ho(a);return s.jsx(Rc,{...u,...l,ref:n,align:c,collisionPadding:o,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Sa.displayName=im;const[sm,Ja]=ir(Ln,{}),Ra="SelectViewport",Pa=h.forwardRef((e,n)=>{const{__scopeSelect:a,...c}=e,o=pn(Ra,a),l=Ja(Ra,a),u=et(n,o.onViewportChange),w=h.useRef(0);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),s.jsx(Oo.Slot,{scope:a,children:s.jsx(Ke.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:u,style:{position:"relative",flex:1,overflow:"auto",...c.style},onScroll:Oe(c.onScroll,v=>{const R=v.currentTarget,{contentWrapper:C,shouldExpandOnScrollRef:y}=l;if(y?.current&&C){const b=Math.abs(w.current-R.scrollTop);if(b>0){const A=window.innerHeight-an*2,T=parseFloat(C.style.minHeight),M=parseFloat(C.style.height),V=Math.max(T,M);if(V<A){const L=V+b,j=Math.min(A,L),B=L-j;C.style.height=`${j}px`,C.style.bottom==="0px"&&(R.scrollTop=B>0?B:0,C.style.justifyContent="flex-end")}}}w.current=R.scrollTop})})})]})});Pa.displayName=Ra;const hl="SelectGroup",[cm,lm]=ir(hl),ei=h.forwardRef((e,n)=>{const{__scopeSelect:a,...c}=e,o=Bn();return s.jsx(cm,{scope:a,id:o,children:s.jsx(Ke.div,{role:"group","aria-labelledby":o,...c,ref:n})})});ei.displayName=hl;const fl="SelectLabel",ti=h.forwardRef((e,n)=>{const{__scopeSelect:a,...c}=e,o=lm(fl,a);return s.jsx(Ke.div,{id:o.id,...c,ref:n})});ti.displayName=fl;const Lo="SelectItem",[um,gl]=ir(Lo),ni=h.forwardRef((e,n)=>{const{__scopeSelect:a,value:c,disabled:o=!1,textValue:l,...u}=e,w=cn(Lo,a),v=pn(Lo,a),R=typeof c=="string"?Array.isArray(w.value)?w.value.includes(c):w.value===c:c.every(j=>w.value?.includes(j)),C=Array.isArray(w.value)&&Array.isArray(c)&&c.some(j=>w.value?.includes(j)),[y,b]=h.useState(l??""),[A,T]=h.useState(!1),M=et(n,j=>v.itemRefCallback?.(j,c,o)),V=Bn(),L=()=>{if(!o){let j=w.multi&&typeof c=="string"?[c]:c;C&&!R?w.onValueChange(j):Array.isArray(w.value)&&(j=vl(c,w.value)),w.onValueChange(j),w.multi||w.onOpenChange(!1)}};if(!w.multi&&Array.isArray(c))throw new Error("You can only pass an array of values in multi selects");return s.jsx(um,{scope:a,value:c,disabled:o,textId:V,isSelected:R,isIntermediate:C,onItemTextChange:h.useCallback(j=>{b(B=>B||(j?.textContent??"").trim())},[]),children:s.jsx(Oo.ItemSlot,{scope:a,value:c,disabled:o,textValue:y,children:s.jsx(Ke.div,{role:"option","aria-labelledby":V,"data-highlighted":A?"":void 0,"aria-selected":w.multi?void 0:R&&A,"aria-checked":w.multi?R:void 0,"data-state":R?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...u,ref:M,onFocus:Oe(u.onFocus,()=>T(!0)),onBlur:Oe(u.onBlur,()=>T(!1)),onPointerUp:Oe(u.onPointerUp,L),onPointerMove:Oe(u.onPointerMove,j=>{o?v.onItemLeave?.():j.currentTarget.focus({preventScroll:!0})}),onPointerLeave:Oe(u.onPointerLeave,j=>{j.currentTarget===document.activeElement&&v.onItemLeave?.()}),onKeyDown:Oe(u.onKeyDown,j=>{v.searchRef?.current!==""&&j.key===" "||(X4.includes(j.key)&&L(),j.key===" "&&j.preventDefault())})})})})});ni.displayName=Lo;const Ir="SelectItemText",ri=h.forwardRef((e,n)=>{const{__scopeSelect:a,className:c,style:o,...l}=e,u=cn(Ir,a),w=pn(Ir,a),v=gl(Ir,a),R=tm(Ir,a),[C,y]=h.useState(null),b=et(n,L=>y(L),v.onItemTextChange,L=>w.itemTextRefCallback?.(L,v.value,v.disabled)),A=C?.textContent,T=h.useMemo(()=>s.jsx("option",{value:v.value,disabled:v.disabled,children:A},Array.isArray(v.value)?v.value.join(";"):v.value),[v.disabled,v.value,A]),{onNativeOptionAdd:M,onNativeOptionRemove:V}=R;return Rt(()=>(M(T),()=>V(T)),[M,V,T]),s.jsxs(s.Fragment,{children:[s.jsx(Ke.span,{id:v.textId,...l,ref:b}),v.isSelected&&u.valueNode&&!u.valueNodeHasChildren?ar.createPortal(l.children,u.valueNode):null]})});ri.displayName=Ir;const ml="SelectItemIndicator",oi=h.forwardRef((e,n)=>{const{__scopeSelect:a,children:c,...o}=e,l=gl(ml,a);return typeof c=="function"?s.jsx(Ke.span,{"aria-hidden":!0,...o,ref:n,children:c({isSelected:l.isSelected,isIntermediate:l.isIntermediate})}):l.isSelected?s.jsx(Ke.span,{"aria-hidden":!0,...o,ref:n,children:c}):null});oi.displayName=ml;const _a="SelectScrollUpButton",ai=h.forwardRef((e,n)=>{const a=pn(_a,e.__scopeSelect),c=Ja(_a,e.__scopeSelect),[o,l]=h.useState(!1),u=et(n,c.onScrollButtonChange);return Rt(()=>{if(a.viewport&&a.isPositioned){const w=a.viewport,v=()=>{const R=w.scrollTop>0;l(R)};return v(),w.addEventListener("scroll",v),()=>w.removeEventListener("scroll",v)}},[a.viewport,a.isPositioned]),o?s.jsx(si,{...e,ref:u,onAutoScroll:()=>{const{viewport:w,selectedItem:v}=a;w&&v&&(w.scrollTop-=v.offsetHeight)}}):null});ai.displayName=_a;const ja="SelectScrollDownButton",ii=h.forwardRef((e,n)=>{const a=pn(ja,e.__scopeSelect),c=Ja(ja,e.__scopeSelect),[o,l]=h.useState(!1),u=et(n,c.onScrollButtonChange);return Rt(()=>{if(a.viewport&&a.isPositioned){const w=a.viewport,v=()=>{const R=w.scrollHeight-w.clientHeight,C=Math.ceil(w.scrollTop)<R;l(C)};return v(),w.addEventListener("scroll",v),()=>w.removeEventListener("scroll",v)}},[a.viewport,a.isPositioned]),o?s.jsx(si,{...e,ref:u,onAutoScroll:()=>{const{viewport:w,selectedItem:v}=a;w&&v&&(w.scrollTop+=v.offsetHeight)}}):null});ii.displayName=ja;const si=h.forwardRef((e,n)=>{const{__scopeSelect:a,onAutoScroll:c,...o}=e,l=pn("SelectScrollButton",a),u=h.useRef(null),w=Vr(a),v=h.useCallback(()=>{u.current!==null&&(window.clearInterval(u.current),u.current=null)},[]);return h.useEffect(()=>()=>v(),[v]),Rt(()=>{w().find(C=>C.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[w]),s.jsx(Ke.div,{"aria-hidden":!0,...o,ref:n,style:{flexShrink:0,...o.style},onPointerMove:Oe(o.onPointerMove,()=>{l.onItemLeave?.(),u.current===null&&(u.current=window.setInterval(c,50))}),onPointerLeave:Oe(o.onPointerLeave,()=>{v()})})});si.displayName="SelectScrollButtonImpl";const dm="SelectSeparator",ci=h.forwardRef((e,n)=>{const{__scopeSelect:a,...c}=e;return s.jsx(Ke.div,{"aria-hidden":!0,...c,ref:n})});ci.displayName=dm;const Aa="SelectArrow",li=h.forwardRef((e,n)=>{const{__scopeSelect:a,...c}=e,o=Ho(a),l=cn(Aa,a),u=pn(Aa,a);return l.open&&u.position==="popper"?s.jsx(Q3,{...o,...c,ref:n}):null});li.displayName=Aa;const hm="BubbleSelect",fm=h.forwardRef((e,n)=>{const{value:a,...c}=e,o=h.useRef(null),l=et(n,o),u=J3(a),w=cn(hm,void 0);h.useEffect(()=>{const R=o.current,C=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor(C,"value").set;if(u!==a&&b){const A=new Event("change",{bubbles:!0});b.call(R,a),R.dispatchEvent(A)}},[u,a]);let v=a;return w.multi&&!Array.isArray(a)&&(v=[]),s.jsx(P3,{asChild:!0,children:s.jsx("select",{...c,multiple:w.multi?!0:void 0,ref:l,defaultValue:v})})});fm.displayName="BubbleSelect";function wl(e){const n=qa(e),a=h.useRef(""),c=h.useRef(0),o=h.useCallback(u=>{const w=a.current+u;n(w),function v(R){a.current=R,window.clearTimeout(c.current),R!==""&&(c.current=window.setTimeout(()=>v(""),1e3))}(w)},[n]),l=h.useCallback(()=>{a.current="",window.clearTimeout(c.current)},[]);return h.useEffect(()=>()=>window.clearTimeout(c.current),[]),[a,o,l]}function xl(e,n,a){const o=n.length>1&&Array.from(n).every(R=>R===n[0])?n[0]:n,l=a?e.indexOf(a):-1;let u=gm(e,Math.max(l,0));o.length===1&&(u=u.filter(R=>R!==a));const v=u.find(R=>R.textValue.toLowerCase().startsWith(o.toLowerCase()));return v!==a?v:void 0}function gm(e,n){return e.map((a,c)=>e[(n+c)%e.length])}const vl=(e,n=[])=>{if(Array.isArray(e))return e.reduce((c,o)=>vl(o,c),n);const a=n.indexOf(e);return a===-1?[...n,e]:[...n.slice(0,a),...n.slice(a+1)]},mm=Ga,wm=Ka,xm=Ya,vm=Za,pm=Xa,bm=Qa,$m=Pa,Cm=ei,ym=ti,Sm=ni,Rm=ri,_m=oi,jm=ai,Am=ii,Im=ci,Tm=li,zt=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Tm,Content:bm,Group:Cm,Icon:vm,Item:Sm,ItemIndicator:_m,ItemText:Rm,Label:ym,Portal:pm,Root:mm,ScrollDownButton:Am,ScrollUpButton:jm,Select:Ga,SelectArrow:li,SelectContent:Qa,SelectGroup:ei,SelectIcon:Za,SelectItem:ni,SelectItemIndicator:oi,SelectItemText:ri,SelectLabel:ti,SelectPortal:Xa,SelectScrollDownButton:ii,SelectScrollUpButton:ai,SelectSeparator:ci,SelectTrigger:Ka,SelectValue:Ya,SelectViewport:Pa,Separator:Im,Trigger:wm,Value:xm,Viewport:$m,createSelectScope:J4},Symbol.toStringTag,{value:"Module"}));function En(e,n,{checkForDefaultPrevented:a=!0}={}){return function(o){if(e?.(o),a===!1||!o.defaultPrevented)return n?.(o)}}const Mm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 2A12.014 12.014 0 0 0 4 14c0 3 1.57 6.883 4.201 10.375C10.85 27.894 13.764 30 16 30s5.151-2.101 7.799-5.625C26.43 20.875 28 17 28 14A12.014 12.014 0 0 0 16 2M8 14.5A1.5 1.5 0 0 1 9.5 13a4.5 4.5 0 0 1 4.5 4.5 1.5 1.5 0 0 1-1.5 1.5A4.5 4.5 0 0 1 8 14.5M18 25h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m1.5-6a1.5 1.5 0 0 1-1.5-1.5 4.5 4.5 0 0 1 4.5-4.5 1.5 1.5 0 0 1 1.5 1.5 4.5 4.5 0 0 1-4.5 4.5"})})};h.forwardRef(Mm);const Em=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28 6H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2v11a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-9 12h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m9-7H4V8h24z"})})};h.forwardRef(Em);const Lm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M30.5 7v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1 0-3h2.137l-2.375-2.173-.047-.046a9.5 9.5 0 1 0-6.84 16.219H16a9.44 9.44 0 0 0 6.519-2.59 1.5 1.5 0 1 1 2.061 2.181A12.43 12.43 0 0 1 16 28.5h-.171a12.5 12.5 0 1 1 8.985-21.368L27.5 9.59V7a1.5 1.5 0 0 1 3 0"})})},Vm=h.forwardRef(Lm),zb=Vm,Dm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m26.061 19.061-9 9a1.503 1.503 0 0 1-2.125 0l-9-9a1.503 1.503 0 1 1 2.125-2.125l6.439 6.439V5a1.5 1.5 0 1 1 3 0v18.375l6.439-6.44a1.502 1.502 0 1 1 2.125 2.125z"})})};h.forwardRef(Dm);const Bm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H8.625l6.44 6.439a1.502 1.502 0 1 1-2.125 2.125l-9-9a1.5 1.5 0 0 1 0-2.125l9-9a1.503 1.503 0 0 1 2.125 2.125L8.625 14.5H27a1.5 1.5 0 0 1 1.5 1.5"})})},Om=h.forwardRef(Bm),Wb=Om,Hm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m28.061 17.061-9 9a1.503 1.503 0 1 1-2.125-2.125l6.439-6.436H5a1.5 1.5 0 1 1 0-3h18.375l-6.436-6.44a1.503 1.503 0 0 1 2.125-2.125l9 9a1.5 1.5 0 0 1-.003 2.126"})})};h.forwardRef(Hm);const Nm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M26.061 15.061a1.5 1.5 0 0 1-2.125 0L17.5 8.625V27a1.5 1.5 0 1 1-3 0V8.625l-6.439 6.436a1.503 1.503 0 1 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0l9 9a1.5 1.5 0 0 1 0 2.125"})})};h.forwardRef(Nm);const Fm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M11 13.5H5A1.5 1.5 0 0 1 3.5 12V6a1.5 1.5 0 0 1 3 0v1.733C8.581 5.683 11.786 3.5 16 3.5c5.558 0 8.92 3.299 9.061 3.439a1.5 1.5 0 0 1-2.117 2.125C22.889 9.01 20.25 6.5 16 6.5c-3.625 0-6.367 2.21-8 4h3a1.5 1.5 0 1 1 0 3m16 5h-6a1.5 1.5 0 1 0 0 3h3c-1.625 1.79-4.375 4-8 4-4.25 0-6.889-2.511-6.944-2.565A1.5 1.5 0 0 0 6.94 25.06c.141.141 3.504 3.44 9.061 3.44 4.214 0 7.419-2.183 9.5-4.233V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5"})})};h.forwardRef(Fm);const zm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27.725 21.993C27.031 20.798 26 17.416 26 13a10 10 0 0 0-20 0c0 4.418-1.032 7.797-1.726 8.993A2 2 0 0 0 6 25h5.101a5 5 0 0 0 9.798 0H26a2 2 0 0 0 1.725-3.008M16 27a3 3 0 0 1-2.828-2h5.656A3 3 0 0 1 16 27"})})};h.forwardRef(zm);const Wm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M22.135 14.308A6.001 6.001 0 0 0 17.5 4.5H9A1.5 1.5 0 0 0 7.5 6v19A1.5 1.5 0 0 0 9 26.5h10a6.5 6.5 0 0 0 3.135-12.192M10.5 7.5h7a3 3 0 0 1 0 6h-7zm8.5 16h-8.5v-7H19a3.5 3.5 0 1 1 0 7"})})};h.forwardRef(Wm);const km=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 4v20a1 1 0 0 1-1 1H9a2 2 0 0 0-2 2h17a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h17a1 1 0 0 1 1 1"})})};h.forwardRef(km);const Um=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M19 14a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m10-5v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h5a2 2 0 0 1 2 2M12 7h8V6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm15 7.201V9H5v5.201A23 23 0 0 0 16 17a23 23 0 0 0 11-2.799"})})};h.forwardRef(Um);const qm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M9.5 8A1.5 1.5 0 0 1 11 6.5h16a1.5 1.5 0 0 1 0 3H11A1.5 1.5 0 0 1 9.5 8M27 14.5H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3m0 8H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3M5.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};h.forwardRef(qm);const Gm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h3v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3z"})})},Km=h.forwardRef(Gm),Ym=Km,Zm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M30 14h-1.35l-3.472-7.812A2 2 0 0 0 23.35 5H8.65a2 2 0 0 0-1.828 1.188L3.35 14H2a1 1 0 0 0 0 2h1v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2h12v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V16h1a1 1 0 0 0 0-2m-20 6H8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m12 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"})})};h.forwardRef(Zm);const Xm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m26.708 12.708-10 10a1 1 0 0 1-1.415 0l-10-10A1 1 0 0 1 6 11h20a1 1 0 0 1 .707 1.707"})})},Qm=h.forwardRef(Xm),Vn=Qm,Jm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M26.924 20.383A1 1 0 0 1 26 21H6a1 1 0 0 1-.708-1.707l10-10a1 1 0 0 1 1.415 0l10 10a1 1 0 0 1 .217 1.09"})})};h.forwardRef(Jm);const Pm=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M7 26a1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3m-3-7a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 1 0 2 0 7.01 7.01 0 0 0-7-7m0-4a1 1 0 0 0 0 2 9.01 9.01 0 0 1 9 9 1 1 0 0 0 2 0A11.01 11.01 0 0 0 4 15M27 5H5a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1 13.014 13.014 0 0 1 13 13 1 1 0 0 0 1 1h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"})})};h.forwardRef(Pm);const ew=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M25 3h-1a2 2 0 0 0-2 2v2h-3.5V5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2H10V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.586A1.98 1.98 0 0 0 5.586 12L7 13.414V27a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V13.414L26.414 12A1.98 1.98 0 0 0 27 10.586V5a2 2 0 0 0-2-2m-6 24h-6v-8a3 3 0 0 1 6 0z"})})};h.forwardRef(ew);const tw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M25 24H7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v13h17a1 1 0 0 1 0 2"})})};h.forwardRef(tw);const nw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M3.094 14.443a12.8 12.8 0 0 1 2.914-6.72 2 2 0 0 1 2.953-.138l3.459 3.533a1.98 1.98 0 0 1 .211 2.56 3.2 3.2 0 0 0-.462.968.5.5 0 0 1-.478.354h-8.1a.5.5 0 0 1-.497-.557m14.08-11.435A2 2 0 0 0 15 5v5.084a1.98 1.98 0 0 0 1.656 1.97 4 4 0 0 1 .677 7.72.51.51 0 0 0-.333.476v8.154a.5.5 0 0 0 .558.5A13.04 13.04 0 0 0 29 16.185C29.094 9.4 23.899 3.61 17.174 3.008M14.656 19.77a4 4 0 0 1-2.425-2.427.51.51 0 0 0-.475-.343H3.59a.5.5 0 0 0-.5.556A13.01 13.01 0 0 0 14.443 28.91a.5.5 0 0 0 .556-.5V20.25a.51.51 0 0 0-.343-.48"})})};h.forwardRef(nw);const rw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 2a11 11 0 0 1 8.984 4.659L16 14.845zm0 22a11 11 0 0 1-8.984-4.659l18.97-10.951A11 11 0 0 1 16 27"})})};h.forwardRef(rw);const ow=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m29.061 10.061-16 16a1.5 1.5 0 0 1-2.125 0l-7-7a1.504 1.504 0 0 1 2.125-2.125L12 22.875 26.939 7.939a1.502 1.502 0 1 1 2.125 2.125z"})})},aw=h.forwardRef(ow),kb=aw,iw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5.708 10.708-7 7a1 1 0 0 1-1.415 0l-3-3a1 1 0 0 1 1.415-1.415L14 18.586l6.293-6.293a1 1 0 0 1 1.415 1.415"})})},sw=h.forwardRef(iw),cw=sw,lw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m27.061 13.061-10 10a1.503 1.503 0 0 1-2.125 0l-10-10a1.503 1.503 0 1 1 2.125-2.125L16 19.875l8.939-8.94a1.502 1.502 0 1 1 2.125 2.125z"})})};h.forwardRef(lw);const uw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M21.061 24.939a1.503 1.503 0 0 1-2.125 2.125l-10-10a1.5 1.5 0 0 1 0-2.125l10-10a1.503 1.503 0 0 1 2.125 2.125L12.125 16z"})})},dw=h.forwardRef(uw),pl=dw,hw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m23.061 17.061-10 10a1.503 1.503 0 0 1-2.125-2.125L19.875 16l-8.936-8.939a1.502 1.502 0 1 1 2.125-2.125l10 10a1.5 1.5 0 0 1-.003 2.125"})})},fw=h.forwardRef(hw),ui=fw,gw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27.061 21.061a1.503 1.503 0 0 1-2.125 0L16 12.125l-8.939 8.936a1.503 1.503 0 0 1-2.125-2.125l10-10a1.5 1.5 0 0 1 2.125 0l10 10a1.5 1.5 0 0 1 0 2.125"})})};h.forwardRef(gw);const mw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m7 14h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2"})})},ww=h.forwardRef(mw),xw=ww,vw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28 16a12 12 0 0 1-20.236 8.728 1.002 1.002 0 0 1 1.375-1.456 10 10 0 1 0-.21-14.343c-.441.446-.857.885-1.26 1.321l2.039 2.043A1 1 0 0 1 9 14H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1.707-.707L6.25 8.838c.402-.437.817-.875 1.258-1.32A12 12 0 0 1 28 16M16 9a1 1 0 0 0-1 1v6a1 1 0 0 0 .485.858l5 3a.999.999 0 0 0 1.486-1.1 1 1 0 0 0-.456-.616L17 15.434V10a1 1 0 0 0-1-1"})})};h.forwardRef(vw);const pw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435C30.764 9.693 25.884 5 20.008 5"})})};h.forwardRef(pw);const bw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M30.991 15.565C30.764 9.693 25.884 5 20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435m-7.283 3.143a1 1 0 0 1-1.415 0L20 16.414V24a1 1 0 0 1-2 0v-7.586l-2.293 2.293a1 1 0 0 1-1.415-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1 0 1.415"})})};h.forwardRef(bw);const $w=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M8.96 12.153 4.342 16l4.618 3.848a1.5 1.5 0 1 1-1.92 2.305l-6-5a1.5 1.5 0 0 1 0-2.305l6-5a1.5 1.5 0 0 1 1.92 2.304m22 2.694-6-5a1.5 1.5 0 1 0-1.92 2.306L27.658 16l-4.618 3.848a1.5 1.5 0 1 0 1.92 2.305l6-5a1.5 1.5 0 0 0 0-2.305M20.512 3.59a1.5 1.5 0 0 0-1.922.898l-8 22a1.5 1.5 0 0 0 2.82 1.024l8-22a1.5 1.5 0 0 0-.898-1.922"})})};h.forwardRef($w);const Cw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M200 40h-32a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h8v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-93.66 21.66a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L124.69 80Zm-64 24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L59.31 80l18.35 18.34a8 8 0 0 1-11.32 11.32ZM200 200H56v-64h96a16 16 0 0 0 16-16V56h32Z"})})};h.forwardRef(Cw);const yw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M26 10H4a1 1 0 0 0-1 1v6a12.04 12.04 0 0 0 4.068 9H4a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2h-3.067a12.1 12.1 0 0 0 3.375-5.011A5 5 0 0 0 31 16v-1a5 5 0 0 0-5-5m3 6a3 3 0 0 1-2.15 2.875Q27 17.944 27 17v-4.828A3 3 0 0 1 29 15zM14 7V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m4 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m-8 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0"})})};h.forwardRef(yw);const Sw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M29.743 13.401a1 1 0 0 0-.487-.675l-3.729-2.125-.015-4.202a1 1 0 0 0-.353-.76 14 14 0 0 0-4.59-2.584 1 1 0 0 0-.808.074L16 5.23l-3.765-2.106a1 1 0 0 0-.809-.075 14 14 0 0 0-4.585 2.594 1 1 0 0 0-.354.758L6.47 10.61 2.74 12.734a1 1 0 0 0-.486.675 13.3 13.3 0 0 0 0 5.195 1 1 0 0 0 .486.675l3.729 2.125.015 4.204a1 1 0 0 0 .353.76 14 14 0 0 0 4.59 2.583 1 1 0 0 0 .808-.073L16 26.768l3.765 2.107a1.013 1.013 0 0 0 .809.073 14 14 0 0 0 4.585-2.592 1 1 0 0 0 .354-.759l.018-4.206 3.729-2.125a1 1 0 0 0 .486-.675c.34-1.713.338-3.477-.003-5.19M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})},Rw=h.forwardRef(Sw),Ub=Rw,_w=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M18.5 12V6a1.5 1.5 0 1 1 3 0v4.5H26a1.5 1.5 0 1 1 0 3h-6a1.5 1.5 0 0 1-1.5-1.5M12 18.5H6a1.5 1.5 0 1 0 0 3h4.5V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5m14 0h-6a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 1 0 3 0v-4.5H26a1.5 1.5 0 1 0 0-3m-14-14A1.5 1.5 0 0 0 10.5 6v4.5H6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 12 4.5"})})};h.forwardRef(_w);const jw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M22.5 17.5h-2v-3h2a5 5 0 1 0-5-5v2h-3v-2a5 5 0 1 0-5 5h2v3h-2a5 5 0 1 0 5 5v-2h3v2a5 5 0 1 0 5-5m-2-8a2 2 0 1 1 2 2h-2zm-13 0a2 2 0 0 1 4 0v2h-2a2 2 0 0 1-2-2m4 13a2 2 0 1 1-2-2h2zm3-8h3v3h-3zm8 10a2 2 0 0 1-2-2v-2h2a2 2 0 0 1 0 4"})})};h.forwardRef(jw);const Aw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M30.5 24a1.5 1.5 0 0 1-1.5 1.5h-3.5V29a1.5 1.5 0 1 1-3 0v-3.5H8A1.5 1.5 0 0 1 6.5 24V9.5H3a1.5 1.5 0 0 1 0-3h3.5V3a1.5 1.5 0 0 1 3 0v19.5H29a1.5 1.5 0 0 1 1.5 1.5M13 9.5h9.5V19a1.5 1.5 0 1 0 3 0V8A1.5 1.5 0 0 0 24 6.5H13a1.5 1.5 0 0 0 0 3"})})};h.forwardRef(Aw);const Iw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M26.061 23.939a1.503 1.503 0 0 1-2.125 2.125L16 18.125l-7.939 7.936a1.503 1.503 0 1 1-2.125-2.125L13.875 16 5.939 8.061a1.503 1.503 0 1 1 2.125-2.125L16 13.875l7.939-7.94a1.502 1.502 0 1 1 2.125 2.125L18.125 16z"})})},Tw=h.forwardRef(Iw),On=Tw,Mw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m4.708 16.293a1 1 0 0 1-1.415 1.415L16 17.414l-3.293 3.293a1 1 0 0 1-1.415-1.415L14.587 16l-3.293-3.293a1 1 0 1 1 1.415-1.415L16 14.587l3.293-3.293a1 1 0 0 1 1.415 1.415L17.414 16z"})})};h.forwardRef(Mw);const Ew=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M30.48 9.524a1.51 1.51 0 0 0-1.668-.213l-6.276 3.125-5.24-8.704a1.514 1.514 0 0 0-2.592 0l-5.24 8.708L3.19 9.315a1.514 1.514 0 0 0-2.113 1.825l4.625 14.17a1 1 0 0 0 1.46.55C7.194 25.841 10.39 24 16 24s8.806 1.841 8.835 1.859a1 1 0 0 0 1.464-.549l4.625-14.166a1.51 1.51 0 0 0-.444-1.62M21.98 19.6a1 1 0 0 1-1.159.811 28.5 28.5 0 0 0-9.652 0 1 1 0 0 1-.348-1.97 30.6 30.6 0 0 1 10.348 0 1 1 0 0 1 .816 1.159z"})})};h.forwardRef(Ew);const Lw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27.414 24a2 2 0 0 1 0 2.829l-.585.585a2 2 0 0 1-2.829 0l-6.906-6.905-2.735 6.292A1.98 1.98 0 0 1 12.533 28h-.098a1.98 1.98 0 0 1-1.801-1.375L4.1 6.615A1.994 1.994 0 0 1 6.615 4.1l20.01 6.534a2 2 0 0 1 .176 3.725l-6.292 2.735z"})})};h.forwardRef(Lw);const Vw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3C9.271 3 4 6.075 4 10v12c0 3.925 5.271 7 12 7s12-3.075 12-7V10c0-3.925-5.271-7-12-7m10 13c0 1.203-.985 2.429-2.701 3.365C21.366 20.419 18.774 21 16 21s-5.366-.581-7.299-1.635C6.985 18.429 6 17.203 6 16v-2.08C8.133 15.795 11.779 17 16 17s7.868-1.21 10-3.08zm-2.701 9.365C21.366 26.419 18.774 27 16 27s-5.366-.581-7.299-1.635C6.985 24.429 6 23.203 6 22v-2.08C8.133 21.795 11.779 23 16 23s7.868-1.21 10-3.08V22c0 1.203-.985 2.429-2.701 3.365"})})};h.forwardRef(Vw);const Dw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M29 12a2 2 0 0 0-2-2h-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a1 1 0 0 0 1.625.777L9 19.25V23a2 2 0 0 0 2 2h11.699l4.676 3.778A1 1 0 0 0 29 28zm-5.319 11.223a1 1 0 0 0-.625-.223H11v-4h10a2 2 0 0 0 2-2v-5h4v13.906z"})})};h.forwardRef(Dw);const Bw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-13.561 1.061a1.5 1.5 0 0 0 2.125 0l5-5a1.502 1.502 0 1 0-2.125-2.125L17.5 15.375V5a1.5 1.5 0 1 0-3 0v10.375l-2.439-2.436a1.502 1.502 0 1 0-2.125 2.125z"})})};h.forwardRef(Bw);const Ow=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M13.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};h.forwardRef(Ow);const Hw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 4H11a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 16h-4v-9a1 1 0 0 0-1-1h-9V6h14z"})})};h.forwardRef(Hw);const Nw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m11 13c.001 1.411-.27 2.81-.8 4.118l-5.587-3.437a2 2 0 0 0-.78-.279l-2.853-.385a2.01 2.01 0 0 0-2 .983h-1.09l-.475-.983a1.99 1.99 0 0 0-1.375-1.083l-1-.216.978-1.718h2.088c.338 0 .67-.087.966-.25l1.532-.845q.202-.113.375-.268l3.364-3.042a1.99 1.99 0 0 0 .407-2.458l-.045-.08A11.01 11.01 0 0 1 27 16M5 16a10.94 10.94 0 0 1 1.068-4.725l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99a2.01 2.01 0 0 0 1.8 1.125h.186l-.904 2.029a2 2 0 0 0 .357 2.171l.018.018L16 25.742l-.242 1.25A11.014 11.014 0 0 1 5 16"})})};h.forwardRef(Nw);const Fw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:[s.jsx("path",{d:"M20.689 3.88A13 13 0 0 0 16 3a13 13 0 0 0-8.155 23.124l1.02-1.765A11 11 0 0 1 5 16a10.94 10.94 0 0 1 1.068-4.724l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99q.113.226.275.418l1.169-2.025-.121-.25a1.99 1.99 0 0 0-1.375-1.084l-1-.217.978-1.717h2.088c.338 0 .67-.087.966-.25l.726-.4z"}),s.jsx("path",{fillRule:"evenodd",d:"m24 2.144 1.732 1-1.58 2.736q.54.435 1.036.932A13.01 13.01 0 0 1 29 16a13 13 0 0 1-17.69 12.124l-1.578 2.732-1.732-1zm-.86 5.49-4.936 8.549 1.628.22c.277.037.543.132.78.278l5.588 3.436c.53-1.308.801-2.706.8-4.117a11.01 11.01 0 0 0-3.86-8.367M13.92 23.6l-1.593 2.76a11 11 0 0 0 3.43.631l.242-1.25z",clipRule:"evenodd"})]})};h.forwardRef(Fw);const zw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10.365 7.5C20.579 21.724 18.441 23 16 23s-4.579-1.275-5.865-3.5a1.001 1.001 0 0 1 1.477-1.31q.157.129.253.31C12.799 20.114 14.266 21 16 21s3.201-.887 4.135-2.5a1 1 0 1 1 1.73 1M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(zw);const Ww=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 10.865a1 1 0 0 1-1.365-.365C19.201 20.886 17.734 20 16 20s-3.201.887-4.135 2.5a1.001 1.001 0 1 1-1.73-1C11.421 19.276 13.559 18 16 18s4.579 1.275 5.865 3.5a1 1 0 0 1-.365 1.365M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(Ww);const kw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27.5 6v5a1.5 1.5 0 1 1-3 0V7.5H21a1.5 1.5 0 0 1 0-3h5A1.5 1.5 0 0 1 27.5 6M11 24.5H7.5V21a1.5 1.5 0 0 0-3 0v5A1.5 1.5 0 0 0 6 27.5h5a1.5 1.5 0 1 0 0-3m15-5a1.5 1.5 0 0 0-1.5 1.5v3.5H21a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5m-15-15H6A1.5 1.5 0 0 0 4.5 6v5a1.5 1.5 0 0 0 3 0V7.5H11a1.5 1.5 0 0 0 0-3"})})};h.forwardRef(kw);const Uw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 13a1.5 1.5 0 1 1-3 0V8.625l-7.439 7.439a1.503 1.503 0 1 1-2.125-2.125L23.375 6.5H19a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 28.5 5zM23 16a1.5 1.5 0 0 0-1.5 1.5v8h-15v-15h8a1.5 1.5 0 1 0 0-3H6A2.5 2.5 0 0 0 3.5 10v16A2.5 2.5 0 0 0 6 28.5h16a2.5 2.5 0 0 0 2.5-2.5v-8.5A1.5 1.5 0 0 0 23 16"})})},qw=h.forwardRef(Uw),Gw=qw,Kw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M30.914 15.595c-.044-.099-1.103-2.447-3.457-4.801C24.322 7.657 20.36 6 16 6S7.679 7.657 4.542 10.794C2.19 13.148 1.125 15.5 1.086 15.595a1 1 0 0 0 0 .812c.044.1 1.103 2.447 3.456 4.8C7.68 24.344 11.64 26 16 26s8.321-1.657 11.458-4.792c2.353-2.354 3.412-4.702 3.456-4.8a1 1 0 0 0 0-.813M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})},Yw=h.forwardRef(Kw),qb=Yw,Zw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M6.74 4.328a1 1 0 1 0-1.48 1.345l2.405 2.646c-4.54 2.786-6.493 7.081-6.579 7.276a1 1 0 0 0 0 .813c.044.098 1.103 2.446 3.456 4.8C7.68 24.343 11.64 26 16 26c2.24.013 4.459-.448 6.509-1.354l2.75 3.027a1 1 0 1 0 1.48-1.345zm11.125 15.21a4 4 0 0 1-5.209-5.73zm13.049-3.13c-.053.117-1.319 2.92-4.17 5.475a1 1 0 0 1-1.408-.072L12.675 7.884a1 1 0 0 1 .575-1.66A17 17 0 0 1 16 6c4.36 0 8.321 1.658 11.458 4.794 2.353 2.354 3.412 4.702 3.456 4.801a1 1 0 0 1 0 .813"})})},Xw=h.forwardRef(Zw),Gb=Xw,Qw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M17 15v12a1 1 0 0 1-2 0V15a1 1 0 0 1 2 0m8 9a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m3-6h-2V5a1 1 0 0 0-2 0v13h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M7 20a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m3-6H8V5a1 1 0 0 0-2 0v9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m9-6h-2V5a1 1 0 0 0-2 0v3h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"})})};h.forwardRef(Qw);const Jw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m26.48 16.851-7.474 7.559a1.97 1.97 0 0 1-1.4.585H9.415l-3.707 3.712a1.001 1.001 0 0 1-1.415-1.415l2.823-2.822L15.588 16h10.537a.5.5 0 0 1 .355.851m.607-13.03a8 8 0 0 0-10.737.518l-1.2 1.185a.5.5 0 0 0-.15.351v7.875l6.875-6.875a1 1 0 0 1 1.414 1.414L17.589 14h11.047a.5.5 0 0 0 .445-.27 8.01 8.01 0 0 0-1.994-9.909M7.854 20.904 13 15.758V8.845a.5.5 0 0 0-.851-.355L7.586 13A1.99 1.99 0 0 0 7 14.414v6.136a.5.5 0 0 0 .854.354"})})};h.forwardRef(Jw);const Pw=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707M19 11V5.5l5.5 5.5z"})})};h.forwardRef(Pw);const ex=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44ZM48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5 8.21 8.21 0 0 1 10.9-.91 8 8 0 0 1 .82 11.81A30.06 30.06 0 0 1 64 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.39 9.19 8.26 8.26 0 0 1 .73 11.09 8 8 0 0 1-11.9.38A14.17 14.17 0 0 0 64 160c-8.82 0-16 9-16 20m103.81 16.31a20.82 20.82 0 0 1-9.19 15.23C137.43 215 131 216 125.13 216a61.1 61.1 0 0 1-15.13-2 8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36.88-.59 1.83-1.52 2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.79 2.83 26.35 7.66 24.11 24.97M215.42 155l-19.89 55.68a8 8 0 0 1-15.06 0L160.58 155a8.21 8.21 0 0 1 4.5-10.45 8 8 0 0 1 10.45 4.76l12.47 34.9 12.47-34.9a8 8 0 0 1 10.45-4.76 8.23 8.23 0 0 1 4.5 10.45"})})};h.forwardRef(ex);const tx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707m-7 11a1 1 0 0 1-1.415 1.415L16 20.414l-2.293 2.293a1 1 0 0 1-1.415-1.415L14.587 19l-2.293-2.293a1 1 0 1 1 1.415-1.415L16 17.587l2.293-2.293a1 1 0 0 1 1.415 1.415L17.414 19zM19 11V5.5l5.5 5.5z"})})};h.forwardRef(tx);const nx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M6 15h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707l-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1m13-9.5 5.5 5.5H19zM28 19a1 1 0 0 1-1 1h-3v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1M8 18H6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-1h1a3.5 3.5 0 1 0 0-7m0 5H7v-3h1a1.5 1.5 0 1 1 0 3m8-5h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a4.5 4.5 0 1 0 0-9m0 7h-1v-5h1a2.5 2.5 0 0 1 0 5"})})};h.forwardRef(nx);const rx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76 44 44h-44Zm4 164.53a8.18 8.18 0 0 1-8.25 7.47H120a8 8 0 0 1-8-8v-55.73a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v48h20a8 8 0 0 1 8 8.51m-61.49-51.88L77.83 180l16.68 23.35a8 8 0 0 1-13 9.3L68 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L58.17 180l-16.68-23.35a8 8 0 0 1 2.3-11.46 8.19 8.19 0 0 1 10.88 2.38L68 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm121.28 39.66a20.81 20.81 0 0 1-9.18 15.23c-5.19 3.46-11.67 4.46-17.49 4.46a60.6 60.6 0 0 1-15.19-2 8 8 0 0 1 4.31-15.41c4.38 1.21 14.94 2.71 19.54-.35.89-.6 1.84-1.52 2.15-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 8.95-14.94c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.13 1.08 1.12 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.87 2.82 26.39 7.65 24.18 24.96"})})};h.forwardRef(rx);const ox=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M184 144h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 184 144m-.35 40H176v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 183.65 184M136 152v55.73a8.17 8.17 0 0 1-7.47 8.25 8 8 0 0 1-8.53-8v-55.71a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 136 152m-40 56.53a8.17 8.17 0 0 1-8.27 7.47h-31.5a8.27 8.27 0 0 1-6-2.5 8 8 0 0 1-1.18-9.5l25.16-44H56.27a8.17 8.17 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h31.77a8.27 8.27 0 0 1 6 2.5A8 8 0 0 1 95 156l-25.21 44H88a8 8 0 0 1 8 8.53M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Z"})})};h.forwardRef(ox);const ax=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M25.5 16a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M29 8.5H3a1.5 1.5 0 0 0 0 3h26a1.5 1.5 0 1 0 0-3m-10 12h-6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 1 0 0-3"})})},ix=h.forwardRef(ax),Kb=ix,sx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 9H16.414L13 5.586A1.98 1.98 0 0 0 11.586 5H5a2 2 0 0 0-2 2v18.078A1.926 1.926 0 0 0 4.924 27H27.11A1.89 1.89 0 0 0 29 25.111V11a2 2 0 0 0-2-2M5 7h6.586l2 2H5z"})})};h.forwardRef(sx);const cx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 9h-4.385q.075-.06.146-.125A3.7 3.7 0 0 0 24 6.196 4.08 4.08 0 0 0 19.805 2a3.7 3.7 0 0 0-2.68 1.239A6.9 6.9 0 0 0 16 5.049a6.9 6.9 0 0 0-1.125-1.81A3.7 3.7 0 0 0 12.195 2 4.08 4.08 0 0 0 8 6.196a3.7 3.7 0 0 0 1.239 2.679q.072.06.146.125H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v8a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V15H5v-4h10v4h2v-4h10v4H17v11.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M10.564 7.375A1.7 1.7 0 0 1 10 6.125 2.076 2.076 0 0 1 12.074 4h.061a1.71 1.71 0 0 1 1.25.563c1.049 1.185 1.419 3.15 1.549 4.365-1.22-.13-3.184-.5-4.37-1.553m10.875 0c-1.186 1.05-3.155 1.42-4.375 1.55.148-1.314.561-3.237 1.561-4.361A1.7 1.7 0 0 1 19.875 4h.061A2.077 2.077 0 0 1 22 6.135a1.7 1.7 0 0 1-.564 1.24z"})})};h.forwardRef(cx);const lx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m9.796 8h-4.428a17.8 17.8 0 0 0-2.533-5.625A11.05 11.05 0 0 1 25.796 11M16 5.014c1.5 1.625 2.625 3.693 3.296 5.986h-6.592C13.375 8.707 14.5 6.641 16 5.014M12 16c0-1.005.084-2.009.25-3h7.5a18.2 18.2 0 0 1 0 6h-7.5a18 18 0 0 1-.25-3m.704 5h6.592c-.671 2.293-1.796 4.359-3.296 5.986-1.5-1.627-2.625-3.693-3.296-5.986m6.131 5.625A17.8 17.8 0 0 0 21.367 21h4.43a11.05 11.05 0 0 1-6.962 5.625M21.776 19a20.2 20.2 0 0 0 0-6h4.808a11 11 0 0 1 0 6z"})})};h.forwardRef(lx);const ux=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{fillRule:"evenodd",d:"M13.29 28.226 6.765 24.46a2.822 2.822 0 1 1-2.708-4.693v-7.532a2.824 2.824 0 1 1 2.708-4.693l6.525-3.767a2.824 2.824 0 1 1 5.42 0l6.524 3.766a2.822 2.822 0 1 1 2.71 4.693v7.533a2.824 2.824 0 1 1-2.71 4.694l-6.524 3.766A2.825 2.825 0 0 1 16 31.84a2.822 2.822 0 0 1-2.71-3.614M16 5.806q.413-.002.791-.113l8.531 14.776a2.8 2.8 0 0 0-.791 1.37H7.467a2.8 2.8 0 0 0-.79-1.369L15.21 5.693q.377.11.791.112M7.468 23.178l-.033.12 6.526 3.767A2.81 2.81 0 0 1 16 26.195c.802 0 1.526.334 2.04.871l6.523-3.766-.032-.121zM5.397 12.233a2.824 2.824 0 0 0 2.038-3.532l6.526-3.767q.043.045.088.088L5.517 19.8l-.12-.032zM26.482 19.8q.06-.018.121-.033v-7.532a2.824 2.824 0 0 1-2.04-3.534L18.04 4.934q-.045.045-.089.088z",clipRule:"evenodd"})})};h.forwardRef(ux);const dx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 7v7.5a.5.5 0 0 1-.5.5H17V5.5a.5.5 0 0 1 .5-.5H25a2 2 0 0 1 2 2M14.5 5H7a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5H15V5.5a.5.5 0 0 0-.5-.5m12 12H17v9.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-7.5a.5.5 0 0 0-.5-.5M5 17.5V25a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V17H5.5a.5.5 0 0 0-.5.5"})})};h.forwardRef(dx);const hx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M10.5 6.5v5h-7A.5.5 0 0 1 3 11V8a2 2 0 0 1 2-2h5a.5.5 0 0 1 .5.5m2 19a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-5h-7zM3 21v3a2 2 0 0 0 2 2h5a.5.5 0 0 0 .5-.5v-5h-7a.5.5 0 0 0-.5.5m0-7v4a.5.5 0 0 0 .5.5h7v-5h-7a.5.5 0 0 0-.5.5m16-8h-6a.5.5 0 0 0-.5.5v5h7v-5A.5.5 0 0 0 19 6m9.5 7.5h-7v5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-16 5h7v-5h-7zM27 6h-5a.5.5 0 0 0-.5.5v5h7a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2m1.5 14.5h-7v5a.5.5 0 0 0 .5.5h5a2 2 0 0 0 2-2v-3a.5.5 0 0 0-.5-.5"})})};h.forwardRef(hx);const fx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.791 17.633a3.04 3.04 0 0 0-2.326-.597C28.813 14.666 30 12.31 30 10c0-3.309-2.661-6-5.933-6A5.95 5.95 0 0 0 19.5 6.094 5.95 5.95 0 0 0 14.932 4C11.663 4 9 6.691 9 10c0 1.375.405 2.711 1.258 4.125a4 4 0 0 0-1.844 1.05L5.586 18H2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h13q.123 0 .242-.03l8-2a1 1 0 0 0 .15-.05l4.858-2.067.055-.025a3.074 3.074 0 0 0 .491-5.195zm-1.362 3.393-4.75 2.023L14.875 25H7v-5.586l2.829-2.828A1.98 1.98 0 0 1 11.242 16H17.5a1.5 1.5 0 0 1 0 3H14a1 1 0 0 0 0 2h4q.113 0 .224-.025l8.375-1.926.038-.01a1.075 1.075 0 0 1 .788 1.987z"})})};h.forwardRef(fx);const gx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28 10.5h-5.475l.951-5.231a1.5 1.5 0 1 0-2.952-.538L19.475 10.5h-4.95l.951-5.231a1.5 1.5 0 1 0-2.952-.538L11.475 10.5H6a1.5 1.5 0 0 0 0 3h4.93l-.909 5H4a1.5 1.5 0 0 0 0 3h5.475l-.951 5.231a1.5 1.5 0 0 0 1.207 1.75q.134.022.269.019a1.5 1.5 0 0 0 1.475-1.233l1.05-5.767h4.95l-.951 5.231a1.5 1.5 0 1 0 2.952.543l1.049-5.774H26a1.5 1.5 0 1 0 0-3h-4.93l.909-5H28a1.5 1.5 0 1 0 0-3m-9.979 8H13.07l.909-5h4.951z"})})};h.forwardRef(gx);const mx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-5 5 4.94 4.94 0 0 1-3.571-1.45 1.5 1.5 0 0 1 2.142-2.1 1.94 1.94 0 0 0 1.429.55 2 2 0 0 0 0-4 1.94 1.94 0 0 0-1.429.55 1.5 1.5 0 0 1-2.551-1.3l1-6A1.5 1.5 0 0 1 25 12.5h5a1.5 1.5 0 1 1 0 3h-3.729l-.338 2.029q.283-.03.567-.029a5 5 0 0 1 5 5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(mx);const wx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M32 22a1.5 1.5 0 0 1-1.5 1.5V26a1.5 1.5 0 1 1-3 0v-2.5H23a1.5 1.5 0 0 1-1.422-1.974l3-9a1.5 1.5 0 0 1 2.845.948L25.08 20.5H27.5V18a1.5 1.5 0 1 1 3 0v2.5A1.5 1.5 0 0 1 32 22M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(wx);const xx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M29.5 14v12a1.5 1.5 0 1 1-3 0v-9.198l-.668.448a1.503 1.503 0 0 1-1.665-2.5l3-2A1.5 1.5 0 0 1 29.5 14M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(xx);const vx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m27.133 17.541 1.655-2.772a1.5 1.5 0 1 0-2.576-1.538l-4.03 6.75q-.018.029-.032.059a5 5 0 1 0 4.983-2.5zM26.5 24.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0"})})};h.forwardRef(vx);const px=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-8.571 3.5 1.5 1.5 0 1 1 2.142-2.099A2 2 0 1 0 26.5 20.5a1.5 1.5 0 0 1-1.229-2.36l1.854-2.64H24a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 0 1 1.229 2.36l-2.293 3.275A5 5 0 0 1 31.5 22.5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(px);const bx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0M30 24.5h-3l3.593-4.791a4.499 4.499 0 1 0-7.837-4.209 1.5 1.5 0 1 0 2.829 1q.076-.218.216-.402a1.5 1.5 0 1 1 2.394 1.807L22.8 25.1a1.5 1.5 0 0 0 1.2 2.4h6a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(bx);const $x=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M29 17v7a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h2.956A10.964 10.964 0 0 0 16.081 6H16A11 11 0 0 0 5.045 16H8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a13.014 13.014 0 0 1 22.236-9.167A12.93 12.93 0 0 1 29 17"})})};h.forwardRef($x);const Cx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M30 11.75c0 8.75-12.974 15.833-13.526 16.125a1 1 0 0 1-.948 0C14.974 27.582 2 20.5 2 11.75A7.76 7.76 0 0 1 9.75 4c2.581 0 4.841 1.11 6.25 2.986C17.409 5.11 19.669 4 22.25 4A7.76 7.76 0 0 1 30 11.75"})})};h.forwardRef(Cx);const yx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28 14.444V26a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14.444a2 2 0 0 1 .646-1.473l10-9.435.014-.013a2 2 0 0 1 2.705.013l10 9.435A2 2 0 0 1 28 14.444"})})};h.forwardRef(yx);const Sx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-7.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5 25v-3.5l6.5-6.5 10 10zm22 0h-2.671l-4.5-4.5 2.5-2.5L27 22.672z"})})};h.forwardRef(Sx);const Rx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 5H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 25H5V11h2v10a2 2 0 0 0 2 2h14zm4-4H9v-4.5l4.5-4.5 6.208 6.208a1 1 0 0 0 1.413 0L24.33 15 27 17.672z"})})};h.forwardRef(Rx);const _x=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 0 0 0-3m-18-4a1.5 1.5 0 0 0 1.061-2.561L6.125 12l3.936-3.94a1.503 1.503 0 1 0-2.125-2.125l-5 5a1.5 1.5 0 0 0 0 2.125l5 5A1.5 1.5 0 0 0 9 18.5"})})};h.forwardRef(_x);const jx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 0 0 0 3h22a1.5 1.5 0 1 0 0-3M3.939 18.06a1.5 1.5 0 0 0 2.125 0l5-5a1.5 1.5 0 0 0 0-2.125l-5-5a1.503 1.503 0 0 0-2.125 2.125L7.875 12l-3.936 3.939a1.5 1.5 0 0 0 0 2.122"})})};h.forwardRef(jx);const Ax=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 23a2 2 0 0 1-2-2v-5a1 1 0 0 1 0-2 2 2 0 0 1 2 2v5a1 1 0 0 1 0 2"})})},Ix=h.forwardRef(Ax),Tx=Ix,Mx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M25.5 7A1.5 1.5 0 0 1 24 8.5h-3.919l-5 15H18a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3h3.919l5-15H14a1.5 1.5 0 0 1 0-3h10A1.5 1.5 0 0 1 25.5 7"})})};h.forwardRef(Mx);const Ex=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M20 2a10.01 10.01 0 0 0-9.511 13.098l-7.196 7.195A1 1 0 0 0 3 23v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .707-.293l1.195-1.196A10 10 0 1 0 20 2m2.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"})})};h.forwardRef(Ex);const Lx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M5 7h22v5H5zm22 18H14V14h13z"})})};h.forwardRef(Lx);const Vx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M22 29a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m5-16a10.94 10.94 0 0 1-4.205 8.651A2.03 2.03 0 0 0 22 23.25V24a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-.75a2 2 0 0 0-.779-1.582A10.95 10.95 0 0 1 5 13.06C4.967 7.104 9.782 2.143 15.735 2A11 11 0 0 1 27 13m-4.014-1.168a7.2 7.2 0 0 0-5.82-5.818 1 1 0 1 0-.332 1.972c2.071.349 3.829 2.106 4.18 4.182a1 1 0 0 0 1.972-.335"})})};h.forwardRef(Vx);const Dx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m21.731 14.683-14 15a1 1 0 0 1-1.711-.875l1.832-9.167L.65 16.936a1 1 0 0 1-.375-1.625l14-15a1 1 0 0 1 1.71.875l-1.837 9.177 7.204 2.7a1 1 0 0 1 .375 1.62z"})})};h.forwardRef(Dx);const Bx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M17.046 23.441a1.5 1.5 0 0 1 0 2.125l-.742.743a7.502 7.502 0 1 1-10.61-10.61l3.015-3.014A7.5 7.5 0 0 1 19 12.375a1.506 1.506 0 0 1-2 2.25 4.5 4.5 0 0 0-6.171.184l-3.013 3.01a4.5 4.5 0 0 0 6.365 6.365l.743-.743a1.5 1.5 0 0 1 2.122 0m9.26-17.75a7.51 7.51 0 0 0-10.61 0l-.742.743a1.503 1.503 0 1 0 2.125 2.125l.742-.743a4.5 4.5 0 0 1 6.365 6.365l-3.014 3.015a4.5 4.5 0 0 1-6.172.179 1.506 1.506 0 1 0-2 2.25 7.5 7.5 0 0 0 10.288-.304l3.014-3.014a7.51 7.51 0 0 0 .004-10.613z"})})};h.forwardRef(Bx);const Ox=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M5 9.5h22a1.5 1.5 0 0 0 0-3H5a1.5 1.5 0 0 0 0 3m22 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(Ox);const Hx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 17.5h22a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m13 5H5a1.5 1.5 0 1 0 0 3h13a1.5 1.5 0 1 0 0-3m11 0h-1.5V21a1.5 1.5 0 1 0-3 0v1.5H23a1.5 1.5 0 1 0 0 3h1.5V27a1.5 1.5 0 1 0 3 0v-1.5H29a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(Hx);const Nx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M17.5 4v4a1.5 1.5 0 1 1-3 0V4a1.5 1.5 0 1 1 3 0m4.156 7.844a1.5 1.5 0 0 0 1.062-.44l2.828-2.829a1.503 1.503 0 1 0-2.125-2.125l-2.825 2.833a1.5 1.5 0 0 0 1.06 2.56M28 14.5h-4a1.5 1.5 0 1 0 0 3h4a1.5 1.5 0 1 0 0-3m-5.282 6.096a1.501 1.501 0 0 0-2.451 1.638c.075.182.186.348.326.487l2.828 2.829a1.503 1.503 0 0 0 2.125-2.125zM16 22.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 1 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5m-6.717-1.904-2.83 2.829A1.503 1.503 0 0 0 8.58 25.55l2.829-2.829a1.503 1.503 0 0 0-2.125-2.125M9.5 16A1.5 1.5 0 0 0 8 14.5H4a1.5 1.5 0 1 0 0 3h4A1.5 1.5 0 0 0 9.5 16m-.925-9.546A1.503 1.503 0 0 0 6.45 8.579l2.833 2.825a1.503 1.503 0 0 0 2.125-2.125z"})})},Fx=h.forwardRef(Nx),bl=Fx,zx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M16 20.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M20 10h-8V7a4 4 0 1 1 8 0z"})})};h.forwardRef(zx);const Wx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M31 19a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 0 1 1 1M7 9h2v2a1 1 0 1 0 2 0V9h2a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2m16 15h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2m4.414-14L10 27.414a2 2 0 0 1-2.828 0l-2.587-2.585a2 2 0 0 1 0-2.829L22 4.586a2 2 0 0 1 2.829 0l2.585 2.585a2 2 0 0 1 0 2.829M26 8.586 23.414 6l-4 4L22 12.586z"})})};h.forwardRef(Wx);const kx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M12.339 16 5 22.726V9.274zm1.48 1.356 1.5 1.381a1 1 0 0 0 1.352 0l1.5-1.38L25.421 24H6.571zM19.66 16 27 9.273v13.455z"})})};h.forwardRef(kx);const Ux=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{fillRule:"evenodd",d:"M11 7q0 .432-.088.838L16 10.382l5.088-2.544a4 4 0 1 1 .895 1.789L18.236 11.5l3.747 1.873a4 4 0 1 1 0 5.253L18.236 20.5l3.747 1.874a4 4 0 1 1-.895 1.788L16 21.618l-5.088 2.544Q11 24.567 11 25a4 4 0 1 1-.983-2.626l3.747-1.874-3.747-1.873a4 4 0 1 1 0-5.253l3.747-1.874-3.747-1.874A4 4 0 1 1 11 7M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2.236 8h9.528L16 12.618zM9 25a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M27 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-11a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-11 3.382L20.764 17h-9.528z",clipRule:"evenodd"})})};h.forwardRef(Ux);const qx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{fillRule:"evenodd",d:"M14.8 8.254a4 4 0 1 0-1.082 1.682l7.483 4.81a4 4 0 0 0-.075.254H10.874A4.002 4.002 0 0 0 3 16a4 4 0 0 0 7.874 1h10.252q.033.128.075.254l-7.484 4.81a4 4 0 1 0 1.082 1.682l7.484-4.81a4 4 0 1 0 0-5.871zM11 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};h.forwardRef(qx);const Gx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{fillRule:"evenodd",d:"M18.842 3.227a1 1 0 1 0-.445 1.95l1.747.399L9.6 12.959a4 4 0 1 0 0 6.081l10.546 7.385-1.748.399a1 1 0 1 0 .445 1.95l3.945-.9a1 1 0 0 0 .77-1.1l-.503-4.014a1 1 0 0 0-1.985.248l.223 1.779-10.545-7.384a4 4 0 0 0 .127-.403h14.712l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L25.586 15H10.874a4 4 0 0 0-.127-.403l10.544-7.383-.222 1.778a1 1 0 0 0 1.984.249l.503-4.015a1 1 0 0 0-.77-1.099zM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0",clipRule:"evenodd"})})};h.forwardRef(Gx);const Kx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 6H5a2 2 0 0 0-2 2v20a1.98 1.98 0 0 0 1.156 1.813 1.986 1.986 0 0 0 2.141-.299L10.312 26H27a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M10.5 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(Kx);const Yx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M10 16V8a6 6 0 1 1 12 0v8a6 6 0 1 1-12 0m16 0a1 1 0 0 0-2 0 8 8 0 0 1-16 0 1 1 0 1 0-2 0 10.014 10.014 0 0 0 9 9.95V29a1 1 0 0 0 2 0v-3.05A10.014 10.014 0 0 0 26 16"})})};h.forwardRef(Yx);const Zx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5"})})},Xx=h.forwardRef(Zx),Qx=Xx,Jx=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5 14H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"})})};h.forwardRef(Jx);const Px=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M20 27h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"})})};h.forwardRef(Px);const ev=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M29.443 18.776a13.1 13.1 0 0 1-4.626 6.614A13 13 0 0 1 4 15a12.9 12.9 0 0 1 2.61-7.815 13.1 13.1 0 0 1 6.614-4.625 1 1 0 0 1 1.25 1.25 11.01 11.01 0 0 0 13.725 13.725 1 1 0 0 1 1.25 1.25z"})})};h.forwardRef(ev);const tv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m17 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};h.forwardRef(tv);const nv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M10.939 8.061a1.5 1.5 0 0 1 0-2.125l4-4a1.5 1.5 0 0 1 2.125 0l4 4a1.503 1.503 0 1 1-2.125 2.125L17.5 6.625V12a1.5 1.5 0 1 1-3 0V6.625l-1.439 1.436a1.5 1.5 0 0 1-2.122 0m8 15.875L17.5 25.375V20a1.5 1.5 0 1 0-3 0v5.375l-1.439-1.44a1.504 1.504 0 0 0-2.125 2.125l4 4a1.5 1.5 0 0 0 2.125 0l4-4a1.502 1.502 0 1 0-2.125-2.125zm11.125-9-4-4a1.503 1.503 0 0 0-2.125 2.125l1.436 1.439H20a1.5 1.5 0 0 0 0 3h5.375l-1.44 1.439a1.503 1.503 0 0 0 2.125 2.125l4-4a1.5 1.5 0 0 0 .001-2.125zM6.625 17.5H12a1.5 1.5 0 1 0 0-3H6.625l1.44-1.439a1.503 1.503 0 1 0-2.125-2.125l-4 4a1.5 1.5 0 0 0 0 2.125l4 4a1.503 1.503 0 0 0 2.125-2.125z"})})};h.forwardRef(nv);const rv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M26.615 3.214a.99.99 0 0 0-.857-.183l-16 4a1 1 0 0 0-.758.97v13.762a4.5 4.5 0 1 0 2 3.737V13.781l14-3.5v7.482a4.5 4.5 0 1 0 2 3.737V4a1 1 0 0 0-.385-.786"})})};h.forwardRef(rv);const ov=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H14.5a1.5 1.5 0 1 1 0-3H27a1.5 1.5 0 0 1 1.5 1.5m-14-6.5H27a1.5 1.5 0 0 0 0-3H14.5a1.5 1.5 0 0 0 0 3m12.5 13H14.5a1.5 1.5 0 1 0 0 3H27a1.5 1.5 0 1 0 0-3M5.5 7.414V13a1.5 1.5 0 0 0 3 0V5a1.5 1.5 0 0 0-2.17-1.341l-2 1a1.5 1.5 0 0 0 1.17 2.75zm4.966 12.107a3.46 3.46 0 0 0-1.4-2.329 3.61 3.61 0 0 0-4.954.683 3.5 3.5 0 0 0-.52.942 1.5 1.5 0 0 0 2.818 1.027.5.5 0 0 1 .072-.125.6.6 0 0 1 .813-.103.48.48 0 0 1 .201.325.45.45 0 0 1-.096.347l-.016.02-3.585 4.794A1.5 1.5 0 0 0 5 27.5h4a1.5 1.5 0 1 0 0-3H8l1.785-2.389a3.43 3.43 0 0 0 .681-2.59"})})};h.forwardRef(ov);const av=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{fillRule:"evenodd",d:"M17.2 8.254a4 4 0 1 1 1.082 1.682l-7.482 4.81q.04.125.074.254h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1H10.874q-.033.128-.075.254l7.484 4.81a4 4 0 1 1-1.082 1.682l-7.484-4.81a4 4 0 1 1 0-5.871zM21 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4",clipRule:"evenodd"})})};h.forwardRef(av);const iv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{fillRule:"evenodd",d:"M10.874 17A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1zM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m18 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};h.forwardRef(iv);const sv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{fillRule:"evenodd",d:"M28.924 16.384c-.05.12-.124.231-.217.324l-4 4a1 1 0 0 1-1.632-.324 1 1 0 0 1 .217-1.09L25.585 17H10.875A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h14.712l-2.294-2.293a1 1 0 0 1 1.415-1.415l4 4a1 1 0 0 1 .217 1.09M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};h.forwardRef(sv);const cv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M29 4a1 1 0 0 0-1-1c-5.51 0-11.164 6.214-14.304 10.329A7.5 7.5 0 0 0 4 20.5c0 3.86-2.443 5.591-2.559 5.671A1 1 0 0 0 2 28h9.5a7.5 7.5 0 0 0 7.171-9.696C22.788 15.164 29 9.51 29 4M15.553 14.194a48 48 0 0 1 1.26-1.569 9.5 9.5 0 0 1 2.562 2.561q-.738.618-1.569 1.262a7.6 7.6 0 0 0-2.254-2.254m5.337-.335a11.6 11.6 0 0 0-2.75-2.75c3.973-4.316 6.969-5.625 8.738-5.989-.357 1.77-1.672 4.766-5.988 8.739"})})};h.forwardRef(cv);const lv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M31 13v6.25a2.01 2.01 0 0 1-1.45 1.922L17 24.75V29a1 1 0 0 1-2 0v-4.25a2.01 2.01 0 0 1 1.45-1.922L29 19.25V13h-2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3H2a1 1 0 0 1 0-2h2V8a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v3h2a2 2 0 0 1 2 2"})})};h.forwardRef(lv);const uv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M25.096 6.736A12.9 12.9 0 0 0 16 3h-.134A13 13 0 0 0 3 16c0 5.375 3.323 9.883 8.67 11.771A4 4 0 0 0 17 24a2 2 0 0 1 2-2h5.776a3.976 3.976 0 0 0 3.9-3.11c.224-.984.332-1.99.324-3a12.9 12.9 0 0 0-3.904-9.154M10.5 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(uv);const dv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.925 5.543v.018L21.65 29.554A1.985 1.985 0 0 1 19.728 31a1.98 1.98 0 0 1-1.803-1.144l-4.464-9.423a.5.5 0 0 1 .099-.568l7.158-7.159a1 1 0 0 0-1.414-1.413l-7.169 7.157a.5.5 0 0 1-.567.099l-9.376-4.441A2.05 2.05 0 0 1 1 12.17a1.99 1.99 0 0 1 1.446-1.815L26.44 3.08h.018a2 2 0 0 1 2.468 2.463"})})};h.forwardRef(dv);const hv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m26.56 17.061-10.257 10.25a7.501 7.501 0 0 1-10.607-10.61l12.27-12.236a5 5 0 0 1 7.07 7.074l-.021.02L13.04 23.086a1.503 1.503 0 0 1-2.121-.041 1.5 1.5 0 0 1 .041-2.121L22.924 9.409a2 2 0 1 0-2.838-2.82L7.816 18.82a4.5 4.5 0 1 0 6.366 6.364l10.258-10.25a1.503 1.503 0 0 1 2.125 2.125z"})})};h.forwardRef(hv);const fv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 14.5h16a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m22 2H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3m-6 5H5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(fv);const gv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m28.414 9.171-5.585-5.586a2 2 0 0 0-2.829 0L4.586 19A1.98 1.98 0 0 0 4 20.414V26a2 2 0 0 0 2 2h5.586A1.98 1.98 0 0 0 13 27.414L28.414 12a2 2 0 0 0 0-2.829M24 13.585 18.414 8l3-3L27 10.585z"})})},mv=h.forwardRef(gv),Yb=mv,wv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.985 21.885A7.03 7.03 0 0 1 22 28c-9.925 0-18-8.075-18-18a7.03 7.03 0 0 1 6.115-6.985 2 2 0 0 1 2.078 1.19l2.64 5.894v.015a2 2 0 0 1-.16 1.886 1 1 0 0 1-.07.096L12 15.181c.936 1.903 2.926 3.875 4.854 4.814l3.042-2.589q.045-.037.094-.07a2 2 0 0 1 1.896-.175l.017.008 5.888 2.639a2 2 0 0 1 1.194 2.077"})})};h.forwardRef(wv);const xv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m29.416 13-6.683 6.706c.57 1.584.806 4.236-1.65 7.5a2 2 0 0 1-1.458.794h-.141a2 2 0 0 1-1.415-.586l-6.033-6.04-5.328 5.333a1 1 0 1 1-1.415-1.415l5.332-5.328-6.037-6.038a2 2 0 0 1 .162-2.972c3.178-2.564 6.219-2.06 7.55-1.643L19 2.587a2 2 0 0 1 2.829 0l7.586 7.585A2 2 0 0 1 29.416 13"})})};h.forwardRef(xv);const vv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 2A11.013 11.013 0 0 0 5 13c0 9.413 10 16.521 10.426 16.819a1 1 0 0 0 1.148 0C17 29.52 27 22.413 27 13A11.01 11.01 0 0 0 16 2m0 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8"})})};h.forwardRef(vv);const pv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M30 17v4a1 1 0 0 1-1.196.98L19.5 20.125v2.966l2.207 2.206A1 1 0 0 1 22 26v3a1 1 0 0 1-1.375.929L16 28.078l-4.625 1.85A1 1 0 0 1 10 29v-3a1 1 0 0 1 .293-.707l2.207-2.207v-2.961L3.196 21.98A1 1 0 0 1 2 21v-4a1 1 0 0 1 .553-.895l9.947-4.972V5.5a3.5 3.5 0 1 1 7 0v5.633l9.948 4.972A1 1 0 0 1 30 17"})})};h.forwardRef(pv);const bv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M25.676 18.884a7.6 7.6 0 0 1-3.978 1.107 9 9 0 0 1-3.42-.707A6.94 6.94 0 0 0 17 23.314V27a1 1 0 0 1-1.066 1A1.023 1.023 0 0 1 15 26.969v-1.555l-4.828-4.828A6.6 6.6 0 0 1 7.93 21a5.73 5.73 0 0 1-2.99-.834C2.216 18.511.75 14.702 1.034 9.974a1 1 0 0 1 .94-.94c4.728-.28 8.537 1.182 10.187 3.906a5.75 5.75 0 0 1 .806 3.56.5.5 0 0 1-.86.304l-2.4-2.513a1 1 0 0 0-1.415 1.414l6.736 6.906q.01-.146.026-.291a8.57 8.57 0 0 1 2.33-4.933l6.323-6.682a1 1 0 0 0-1.413-1.415l-6.125 6.477a.5.5 0 0 1-.848-.217c-.592-2.185-.331-4.36.8-6.228 2.233-3.685 7.428-5.657 13.898-5.277a1 1 0 0 1 .94.94c.375 6.471-1.598 11.666-5.283 13.899"})})};h.forwardRef(bv);const $v=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M30 16a1.97 1.97 0 0 1-.95 1.689L11.04 28.706a2 2 0 0 1-2.767-.688A2 2 0 0 1 8 27.016V4.984a1.98 1.98 0 0 1 1.015-1.728 2 2 0 0 1 2.025.038L29.05 14.31A1.97 1.97 0 0 1 30 16"})})};h.forwardRef($v);const Cv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-9.5V27a1.5 1.5 0 1 1-3 0v-9.5H5a1.5 1.5 0 1 1 0-3h9.5V5a1.5 1.5 0 1 1 3 0v9.5H27a1.5 1.5 0 0 1 1.5 1.5"})})},yv=h.forwardRef(Cv),Zb=yv,Sv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.016 13.016 0 0 0 16 3m5 14h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2"})})};h.forwardRef(Sv);const Rv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 5H17V3a1 1 0 0 0-2 0v2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4.92l-2.701 3.375a1 1 0 0 0 1.562 1.25L12.48 24h7.04l3.699 4.625a1 1 0 1 0 1.562-1.25L22.08 24H27a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 18a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0z"})})};h.forwardRef(Rv);const _v=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M30.414 17 18 4.586A1.98 1.98 0 0 0 16.586 4H5a1 1 0 0 0-1 1v11.586A1.98 1.98 0 0 0 4.586 18L17 30.414a2 2 0 0 0 2.829 0l10.585-10.585a2 2 0 0 0 0-2.829M10.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(_v);const jv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M20.723 28H26a2 2 0 0 0 2-2v-4.706a1 1 0 0 0-1.383-.919 2.9 2.9 0 0 1-1.117.221c-1.654 0-3-1.387-3-3.091s1.346-3.091 3-3.091c.383 0 .763.075 1.117.221A1 1 0 0 0 28 13.706V9a2 2 0 0 0-2-2h-4.527a4.5 4.5 0 1 0-8.945 0H8a2 2 0 0 0-2 2v4.028a4.5 4.5 0 1 0 0 8.945V26a2 2 0 0 0 2 2h5.278"})})};h.forwardRef(jv);const Av=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M18 22.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M29.5 16A13.5 13.5 0 1 1 16 2.5 13.515 13.515 0 0 1 29.5 16m-3 0A10.5 10.5 0 1 0 16 26.5 10.51 10.51 0 0 0 26.5 16M16 8c-3.033 0-5.5 2.242-5.5 5v.5a1.5 1.5 0 1 0 3 0V13c0-1.102 1.125-2 2.5-2s2.5.898 2.5 2-1.125 2-2.5 2a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 2.966.32C19.79 17.235 21.5 15.296 21.5 13c0-2.758-2.468-5-5.5-5"})})};h.forwardRef(Av);const Iv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M14.5 9v11a6.006 6.006 0 0 1-6 6 1 1 0 0 1 0-2 4 4 0 0 0 4-4v-1H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2M27 7h-7.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H27v1a4 4 0 0 1-4 4 1 1 0 0 0 0 2 6.006 6.006 0 0 0 6-6V9a2 2 0 0 0-2-2"})})};h.forwardRef(Iv);const Tv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 5v23a1 1 0 0 1-2 0v-6h-6a1 1 0 0 1-1-1c.046-2.395.349-4.779.902-7.11 1.223-5.061 3.54-8.454 6.704-9.809a1 1 0 0 1 1.394.92m-12.014-.164a.999.999 0 1 0-1.972.33L13.986 11H11V5a1 1 0 0 0-2 0v6H6.014l.972-5.835a1 1 0 1 0-1.972-.329l-1 6A1 1 0 0 0 4 11a6.01 6.01 0 0 0 5 5.915V28a1 1 0 1 0 2 0V16.915A6.01 6.01 0 0 0 16 11q0-.083-.014-.164z"})})};h.forwardRef(Tv);const Mv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M19 28a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m8.953-8.521-1.546 6.954a2 2 0 0 1-3.188 1.138l-3.405-2.57h-7.625L8.78 27.57a2 2 0 0 1-3.189-1.138l-1.545-6.954a2.01 2.01 0 0 1 .415-1.714l3.57-4.282c.12-1.574.482-3.12 1.072-4.584 1.612-4.043 4.5-6.579 5.671-7.481a2 2 0 0 1 2.45 0c1.167.902 4.059 3.438 5.671 7.48.59 1.465.952 3.01 1.072 4.585l3.57 4.282a2.01 2.01 0 0 1 .415 1.714m-17.404 4.25q-2.014-3.666-2.445-7.209L6 19.045 7.545 26l.022-.016zM17.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m8.5 6.545-2.104-2.525q-.428 3.535-2.445 7.211l2.982 2.25.022.017z"})})};h.forwardRef(Mv);const Ev=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M19.716 14.141a1 1 0 0 1 .261-1.391l8.458-5.788a1 1 0 0 1 1.125 1.652L21.101 14.4a1 1 0 0 1-1.39-.261zm10.109 10.634a1 1 0 0 1-1.39.261L17 17.211l-5.315 3.636a4.5 4.5 0 1 1-1.125-1.65L15.229 16l-4.673-3.198a4.5 4.5 0 1 1 1.125-1.65l17.875 12.233a1 1 0 0 1 .269 1.39M9 22.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0-13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"})})};h.forwardRef(Ev);const Lv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M29.061 26.939 23.125 21A11.515 11.515 0 1 0 21 23.125l5.941 5.942a1.503 1.503 0 0 0 2.125-2.125zM5.5 14a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 5.5 14"})})},Vv=h.forwardRef(Lv),Dv=Vv,Bv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M26 5H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M26 17H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(Bv);const Ov=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28 7v7.346c0 11.202-9.477 14.918-11.375 15.549a1.94 1.94 0 0 1-1.25 0C13.475 29.264 4 25.548 4 14.346V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2"})})};h.forwardRef(Ov);const Hv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m30.949 7.653-6.47-3.528A1 1 0 0 0 24 4h-4a1 1 0 0 0-1 1 3 3 0 0 1-6 0 1 1 0 0 0-1-1H8a1 1 0 0 0-.48.125L1.051 7.653a1.97 1.97 0 0 0-.824 2.657l2.41 4.601A2.05 2.05 0 0 0 4.458 16H7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16h2.543a2.05 2.05 0 0 0 1.822-1.089l2.409-4.601a1.97 1.97 0 0 0-.825-2.658M4.459 14a.08.08 0 0 1-.051-.016L2.01 9.408 7 6.685V14zm23.134-.018a.07.07 0 0 1-.052.018H25V6.685l4.99 2.723z"})})};h.forwardRef(Hv);const Nv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M12 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0m11-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5.805-16.594A1 1 0 0 0 28 8H6.04L5.026 4.45A2.01 2.01 0 0 0 3.103 3H1a1 1 0 0 0 0 2h2.103l4.522 15.824A3.01 3.01 0 0 0 10.509 23h12.014a2.99 2.99 0 0 0 2.867-2.117l3.566-11.59a1 1 0 0 0-.151-.887"})})};h.forwardRef(Nv);const Fv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M14.5 27a1.5 1.5 0 0 1-1.5 1.5H6A2.5 2.5 0 0 1 3.5 26V6A2.5 2.5 0 0 1 6 3.5h7a1.5 1.5 0 0 1 0 3H6.5v19H13a1.5 1.5 0 0 1 1.5 1.5m13.561-12.061-5-5a1.503 1.503 0 0 0-2.125 2.125l2.439 2.436H13a1.5 1.5 0 1 0 0 3h10.375l-2.44 2.439a1.503 1.503 0 0 0 2.125 2.125l5-5a1.5 1.5 0 0 0 .001-2.125"})})};h.forwardRef(Fv);const zv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M4 10a1 1 0 0 1 1-1h4.646a3.5 3.5 0 0 1 6.708 0H27a1 1 0 1 1 0 2H16.354a3.5 3.5 0 0 1-6.708 0H5a1 1 0 0 1-1-1m23 11h-2.646a3.5 3.5 0 0 0-6.708 0H5a1 1 0 0 0 0 2h12.646a3.5 3.5 0 0 0 6.708 0H27a1 1 0 1 0 0-2"})})};h.forwardRef(zv);const Wv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M26 18a1.97 1.97 0 0 1-1.302 1.867l-6.457 2.375-2.375 6.452a1.99 1.99 0 0 1-3.735 0L9.75 22.25l-6.452-2.375a1.99 1.99 0 0 1 0-3.735l6.456-2.375 2.375-6.451a1.99 1.99 0 0 1 3.735 0l2.375 6.456 6.451 2.375A1.97 1.97 0 0 1 26 18M19 6h2v2a1 1 0 0 0 2 0V6h2a1 1 0 1 0 0-2h-2V2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2m11 4h-1V9a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2"})})};h.forwardRef(Wv);const kv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M15 7v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2m10-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m12 0h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"})})};h.forwardRef(kv);const Uv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:[s.jsx("path",{d:"M27.5 21.136 16 27.843 4.5 21.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),s.jsx("path",{d:"M27.5 15.136 16 21.843 4.5 15.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),s.jsx("path",{d:"m3.5 10.864 12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 0 0 0-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7a1 1 0 0 0 0 1.728"})]})};h.forwardRef(Uv);const qv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m29.313 14.298-5.638 4.92 1.689 7.325a2 2 0 0 1-2.98 2.167l-6.389-3.875L9.62 28.71a2 2 0 0 1-2.98-2.168l1.686-7.317-5.638-4.928a2 2 0 0 1 1.138-3.507l7.433-.644 2.901-6.92a1.994 1.994 0 0 1 3.68 0l2.91 6.92 7.43.644a2 2 0 0 1 1.139 3.508z"})})};h.forwardRef(qv);const Gv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M29 19a4 4 0 1 0-4.991 3.875A1 1 0 0 0 24 23a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4v-5.065c3.934-.5 7-3.934 7-8.039V5a2 2 0 0 0-2-2h-2a1 1 0 1 0 0 2h2v4.896c0 3.323-2.656 6.061-5.92 6.104A6 6 0 0 1 6 10V5h2a1 1 0 0 0 0-2H6a2 2 0 0 0-2 2v5a8 8 0 0 0 7 7.936V23a6.006 6.006 0 0 0 6 6h3a6.006 6.006 0 0 0 6-6 1 1 0 0 0-.009-.125A4 4 0 0 0 29 19m-4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"})})};h.forwardRef(Gv);const Kv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M29 12a1 1 0 0 0-.038-.275L27.17 5.45A2.01 2.01 0 0 0 25.25 4H6.75a2.01 2.01 0 0 0-1.919 1.45L3.04 11.725A1 1 0 0 0 3 12v2a5 5 0 0 0 2 4v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8a5 5 0 0 0 2-4zm-18 2a3 3 0 0 1-4.39 2.657 1 1 0 0 0-.228-.132A3 3 0 0 1 5 14v-1h6zm8 0a3 3 0 0 1-6 0v-1h6zm8 0a3 3 0 0 1-1.384 2.525q-.12.051-.225.131A3 3 0 0 1 21 14v-1h6z"})})};h.forwardRef(Kv);const Yv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-3.767A5.19 5.19 0 0 1 24.5 21c0 1.806-.976 3.54-2.679 4.756C20.25 26.881 18.18 27.5 16 27.5s-4.25-.619-5.821-1.744C8.476 24.54 7.5 22.806 7.5 21a1.5 1.5 0 0 1 3 0c0 1.898 2.519 3.5 5.5 3.5s5.5-1.602 5.5-3.5c0-1.595-1.163-2.523-4.419-3.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M9.389 12.5a1.5 1.5 0 0 0 1.5-1.5c0-2 2.197-3.5 5.111-3.5 2.17 0 3.921.831 4.685 2.223a1.5 1.5 0 0 0 2.625-1.446C22.016 5.914 19.281 4.5 16 4.5c-4.625 0-8.111 2.794-8.111 6.5a1.5 1.5 0 0 0 1.5 1.5"})})};h.forwardRef(Yv);const Zv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M15 5V2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m1 3a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m-8.707.707a1 1 0 1 0 1.414-1.415l-2-2a1 1 0 1 0-1.414 1.415zm0 14.586-2 2a1 1 0 1 0 1.414 1.415l2-2a1 1 0 1 0-1.415-1.415M24 9a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0-1.415-1.414l-2 2A1 1 0 0 0 24 9m.707 14.293a1 1 0 1 0-1.415 1.415l2 2a1 1 0 0 0 1.415-1.415zM6 16a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1m10 10a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m14-11h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"})})};h.forwardRef(Zv);const Xv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 8h-8.586l4.293-4.292a1 1 0 0 0-1.415-1.415L16 7.586l-5.292-5.293a1 1 0 1 0-1.415 1.415L13.586 8H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 17h-7V10h7zm-2-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"})})};h.forwardRef(Xv);const Qv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m29.978 19.625-1.5-12A3 3 0 0 0 25.5 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5.383l4.722 9.448A1 1 0 0 0 15 30a5 5 0 0 0 5-5v-2h7a3 3 0 0 0 2.977-3.375M9 18H4V7h5z"})})};h.forwardRef(Qv);const Jv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M29.25 10.015A3 3 0 0 0 27 9h-7V7a5 5 0 0 0-5-5 1 1 0 0 0-.895.553L9.383 12H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h21.5a3 3 0 0 0 2.977-2.625l1.5-12a3 3 0 0 0-.727-2.36M4 14h5v11H4z"})})};h.forwardRef(Jv);const Pv=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M23 3H9a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h1l-1.8 2.4a1 1 0 0 0 1.6 1.2l2.7-3.6h7l2.7 3.6a1 1 0 0 0 1.6-1.2L22 27h1a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4M10.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5-8H7v-5h8zm6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3.5-8h-8v-5h8z"})})};h.forwardRef(Pv);const e8=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M14 21a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm0-15h-8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})})},t8=h.forwardRef(e8),Xb=t8,n8=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m23.54 2.267-3.711 3.377c1.7.52 3.298 1.397 4.653 2.631 4.684 4.266 4.684 11.184 0 15.45q-5.184 4.72-16.021 6.008l3.71-3.377a12.2 12.2 0 0 1-4.653-2.63c-4.684-4.267-4.712-11.16 0-15.45q5.184-4.721 16.021-6.01m-7.54 8.4c-3.314 0-6 2.388-6 5.333s2.686 5.333 6 5.333 6-2.387 6-5.333c0-2.945-2.686-5.333-6-5.333"})})};h.forwardRef(n8);const r8=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M25.5 28a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M16 24.5a8.51 8.51 0 0 0 8.5-8.5V7a1.5 1.5 0 1 0-3 0v9a5.5 5.5 0 0 1-11 0V7a1.5 1.5 0 1 0-3 0v9a8.51 8.51 0 0 0 8.5 8.5"})})};h.forwardRef(r8);const o8=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-16.439-7.939L14.5 8.625V19a1.5 1.5 0 1 0 3 0V8.625l2.439 2.44a1.503 1.503 0 0 0 2.125-2.125l-5-5a1.5 1.5 0 0 0-2.125 0l-5 5a1.503 1.503 0 1 0 2.125 2.125z"})})};h.forwardRef(o8);const a8=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M28.866 27.5A1 1 0 0 1 28 28H4a1 1 0 0 1-.865-1.5c1.904-3.291 4.838-5.651 8.261-6.77a9 9 0 1 1 9.208 0c3.424 1.119 6.357 3.479 8.261 6.77a1 1 0 0 1 .001 1"})})};h.forwardRef(a8);const i8=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M19.44 3.101a1 1 0 0 0-1.054.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1 1 0 0 0 20 28V4a1 1 0 0 0-.56-.899M28.414 16l2.293-2.292a1.001 1.001 0 0 0-1.415-1.415L27 14.586l-2.293-2.293a1 1 0 1 0-1.415 1.415L25.587 16l-2.293 2.293a1 1 0 0 0 1.415 1.415L27 17.414l2.293 2.294a1 1 0 0 0 1.415-1.415z"})})};h.forwardRef(i8);const s8=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M19.439 3.101a1 1 0 0 0-1.053.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1.001 1.001 0 0 0 20 28V4a1 1 0 0 0-.561-.899M9 20H4v-8h5zm15.75-7.305a5 5 0 0 1 0 6.61 1 1 0 0 1-1.5-1.322 3 3 0 0 0 0-3.966 1 1 0 0 1 1.5-1.322M31 16a10 10 0 0 1-2.546 6.668 1 1 0 0 1-1.49-1.334 8 8 0 0 0 0-10.666.998.998 0 0 1 .407-1.624 1 1 0 0 1 1.083.29A9.98 9.98 0 0 1 31 16"})})};h.forwardRef(s8);const c8=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M15 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0m11 11c-3.58 0-5.226-1.662-6.969-3.421a25 25 0 0 0-1.375-1.323C13.031 8.24 5.63 15.098 5.316 15.391a1 1 0 0 0 1.369 1.458 20.5 20.5 0 0 1 3.815-2.724c1.723-.922 3.174-1.279 4.338-1.072L8.082 28.6a1 1 0 0 0 1.835.798l4.2-9.659L18 22.515V29a1 1 0 1 0 2 0v-7a1 1 0 0 0-.419-.814l-4.65-3.321L16.61 14c.33.305.657.634 1 .98C19.381 16.774 21.586 19 26 19a1 1 0 0 0 0-2"})})};h.forwardRef(c8);const l8=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-1 7a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0zm1 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})},u8=h.forwardRef(l8),d8=u8,h8=({fill:e="currentColor",stroke:n,...a},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...a,children:s.jsx("path",{d:"m31.316 24.949-3 1a1 1 0 0 1-1.211-.5l-3.724-7.45H13a1 1 0 0 1-1-1v-3.707A7 7 0 0 0 14 27c3.239 0 6.261-2.256 7.031-5.25a1 1 0 1 1 1.938.5C21.96 26.162 18.19 29 14 29a9 9 0 0 1-2-17.774V8.851a3.5 3.5 0 1 1 2 0V11h7a1 1 0 0 1 0 2h-7v3h10a1 1 0 0 1 .894.552l3.612 7.225 2.178-.726a1 1 0 1 1 .632 1.898"})})};h.forwardRef(h8);const Dr=(e,n)=>{const a=h.createContext(n),c=l=>{const{children:u,...w}=l,v=h.useMemo(()=>w,Object.values(w));return s.jsx(a.Provider,{value:v,children:u})};function o(l){const u=h.useContext(a);if(u)return u;if(n!==void 0)return n;throw new Error(`\`${l}\` must be used within \`${e}\``)}return c.displayName=`${e}Provider`,[c,o]};function f8(e,n){return typeof e=="string"?!1:n in e}function Eo(e,n,a){return e&&n&&f8(e,n)?e[n]:a}const ec={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},g8=e=>{const[n,a,c,o]=e,l=a??n;return[n,l,c??n,o??l]};function m8(e,n){switch(e){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return n.spaces;case"color":case"background":case"borderColor":return n.colors;case"fontSize":return n.fontSizes;case"fontWeight":return n.fontWeights;case"lineHeight":return n.lineHeights;case"zIndex":return n.zIndices;case"boxShadow":return n.shadows;default:return null}}const No=(e,n)=>{const a=Object.entries(e).reduce((c,o)=>{const[l,u]=o,w=m8(l,n),v=Object.prototype.hasOwnProperty.call(ec,l)?ec[l]:l;return v&&(u||u===0)&&(typeof u=="object"&&!Array.isArray(u)?Object.entries(u).forEach(([R,C])=>{c[R]={...c[R],...tc(v,C,w)}}):c.initial={...c.initial,...tc(v,u,w)}),c},{initial:{},small:{},medium:{},large:{}});return Object.entries(a).reduce((c,[o,l])=>{if(l&&Object.keys(l).length>0){const u=Object.entries(l).reduce((w,[v,R])=>(w.push(`${v}: ${R};`),w),[]).join(`
`);o==="initial"?c.push(u):c.push(`${n.breakpoints[o]}{ ${u} }`)}return c},[]).join(`
`)},tc=(e,n,a)=>{if(Array.isArray(e)&&Array.isArray(n)){const c=g8(n);return e.reduce((o,l,u)=>(o[l]=Eo(a,c[u],c[u]),o),{})}else return Array.isArray(e)&&!Array.isArray(n)?e.reduce((c,o)=>(c[o]=Eo(a,n,n),c),{}):!Array.isArray(e)&&!Array.isArray(n)?{[e]:Eo(a,n,n)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},ht=h.forwardRef,X=ht((e,n)=>{const{background:a,basis:c,borderColor:o,color:l,flex:u,fontSize:w,grow:v,hasRadius:R,padding:C,paddingBottom:y,paddingLeft:b,paddingRight:A,paddingTop:T,margin:M,marginLeft:V,marginBottom:L,marginRight:j,marginTop:B,shadow:F,shrink:z,lineHeight:W,fontWeight:U,width:oe,minWidth:se,maxWidth:ce,height:$e,minHeight:ne,maxHeight:P,top:ee,left:_e,bottom:je,right:me,borderRadius:ye,borderStyle:Me,borderWidth:De,tag:he,pointerEvents:Je,display:we,position:ze,zIndex:Ne,overflow:Ye,cursor:Y,transition:xe,transform:Se,animation:ae,textAlign:ge,textTransform:Ce,...rt}=e,Ee=he||"div",Ae={$background:a,$basis:c,$borderColor:o,$color:l,$flex:u,$fontSize:w,$grow:v,$hasRadius:R,$padding:C,$paddingBottom:y,$paddingLeft:b,$paddingRight:A,$paddingTop:T,$margin:M,$marginLeft:V,$marginBottom:L,$marginRight:j,$marginTop:B,$shadow:F,$shrink:z,$lineHeight:W,$fontWeight:U,$width:oe,$minWidth:se,$maxWidth:ce,$height:$e,$minHeight:ne,$maxHeight:P,$top:ee,$left:_e,$bottom:je,$right:me,$borderRadius:ye,$borderStyle:Me,$borderWidth:De,$pointerEvents:Je,$display:we,$position:ze,$zIndex:Ne,$overflow:Ye,$cursor:Y,$transition:xe,$transform:Se,$animation:ae,$textAlign:ge,$textTransform:Ce};return s.jsx(w8,{as:Ee,ref:n,...Ae,...rt})}),w8=I.div`
  ${({theme:e,...n})=>No({padding:n.$padding,paddingTop:n.$paddingTop,paddingBottom:n.$paddingBottom,paddingLeft:n.$paddingLeft,paddingRight:n.$paddingRight,margin:n.$margin,marginTop:n.$marginTop,marginBottom:n.$marginBottom,marginLeft:n.$marginLeft,marginRight:n.$marginRight,top:n.$top,left:n.$left,bottom:n.$bottom,right:n.$right,width:n.$width,minWidth:n.$minWidth,maxWidth:n.$maxWidth,height:n.$height,minHeight:n.$minHeight,maxHeight:n.$maxHeight,color:n.$color,background:n.$background,fontSize:n.$fontSize,fontWeight:n.$fontWeight,lineHeight:n.$lineHeight,borderRadius:n.$hasRadius?e.borderRadius:n.$borderRadius,borderStyle:n.$borderColor&&!n.$borderStyle?"solid":n.$borderStyle,borderWidth:n.$borderColor&&!n.$borderWidth?"1px":n.$borderWidth,borderColor:n.$borderColor,zIndex:n.$zIndex,boxShadow:n.$shadow,display:n.$display,pointerEvents:n.$pointerEvents,cursor:n.$cursor,textAlign:n.$textAlign,textTransform:n.$textTransform,transition:n.$transition,transform:n.$transform,animation:n.$animation,position:n.$position,overflow:n.$overflow,flex:n.$flex,flexShrink:n.$shrink,flexGrow:n.$grow,flexBasis:n.$basis},e)};
`,K=ht((e,n)=>{const{className:a,alignItems:c,direction:o,inline:l,gap:u,justifyContent:w,wrap:v,...R}=e,C={$alignItems:c,$direction:o,$gap:u,$justifyContent:w,$wrap:v,$inline:l};return s.jsx(x8,{className:a,ref:n,...C,...R})}),x8=I(X)`
  ${({theme:e,$display:n="flex",$alignItems:a="center",$direction:c="row",...o})=>No({gap:o.$gap,alignItems:a,justifyContent:o.$justifyContent,flexWrap:o.$wrap,flexDirection:c,display:o.$inline?"inline-flex":n},e)};
`,v8="alpha",p8="beta",b8="delta",$8="epsilon",nc="omega",C8="pi",y8="sigma",$l=te`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,S8=({$variant:e=nc,theme:n})=>{switch(e){case v8:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case p8:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case b8:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case $8:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case nc:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case C8:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case y8:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}},ue=ht((e,n)=>{const{ellipsis:a,textColor:c="currentcolor",textDecoration:o,textTransform:l,variant:u,lineHeight:w,fontWeight:v,fontSize:R,...C}=e,y={$ellipsis:a,$textColor:c,$textDecoration:o,$textTransform:l,$variant:u,$lineHeight:w,$fontWeight:v,$fontSize:R};return s.jsx(R8,{ref:n,tag:"span",...y,...C})}),R8=I(X)`
  ${S8}
  ${({$ellipsis:e})=>e?$l:""}

  ${({theme:e,...n})=>No({color:n.$textColor,textDecoration:n.$textDecoration,textTransform:n.$textTransform,lineHeight:n.$lineHeight,fontWeight:n.$fontWeight,fontSize:n.$fontSize},e)}
`,[_8,di]=Dr("Accordion"),j8=h.forwardRef(({children:e,size:n="S",...a},c)=>s.jsx(A8,{ref:c,$size:n,collapsible:!0,...a,type:"single",children:s.jsx(_8,{size:n,children:e})})),A8=I(y6)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?te`
        border-radius: ${n=>n.theme.borderRadius};
        border: solid 1px ${n=>n.theme.colors.neutral200};
      `:te``}
`,I8=h.forwardRef((e,n)=>{const{size:a}=di("Item");return s.jsx(T8,{$size:a,"data-size":a,ref:n,...e})}),T8=I(S6)`
  overflow: hidden;
  margin: 1px 0;

  &:first-child {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
    margin-top: 0;
  }

  &:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    margin-bottom: 0;
  }

  &[data-size='S'] {
    & + & {
      border-top: solid 1px ${e=>e.theme.colors.neutral200};
    }
  }

  &[data-state='open'] {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  &:not([data-disabled]):hover {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  /* This applies our desired focus effect correctly. */
  &:focus-within {
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary600};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,M8=h.forwardRef(({caretPosition:e="left",description:n,icon:a,iconProps:c,children:o,...l},u)=>{const{size:w}=di("Trigger");return s.jsxs(yl,{$caretPosition:e,$size:w,ref:u,...l,children:[e==="left"?s.jsx(Vo,{$size:w,children:s.jsx(Vn,{width:w==="S"?"1.2rem":"1.6rem",height:w==="S"?"1.2rem":"1.6rem"})}):null,s.jsxs(K,{tag:"span",gap:2,children:[a&&w==="S"?s.jsx(Cl,{children:s.jsx(a,{...c})}):null,s.jsxs(K,{alignItems:"flex-start",direction:"column",tag:"span",ref:u,children:[s.jsx(ue,{fontWeight:w==="S"?"bold":void 0,ellipsis:!0,variant:w==="M"?"delta":void 0,textAlign:"left",children:o}),n&&w==="M"?s.jsx(ue,{textAlign:"left",children:n}):null]})]}),e==="right"?s.jsx(Vo,{$size:w,children:s.jsx(Vn,{width:w==="S"?"1.2rem":"1.6rem",height:w==="S"?"1.2rem":"1.6rem"})}):null]})}),Cl=I(X)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,Vo=I(K).attrs(e=>({...e,tag:"span"}))`
  background-color: ${e=>e.theme.colors.neutral200};
  width: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  height: ${e=>e.$size==="S"?"2.4rem":"3.2rem"};
  flex: ${e=>e.$size==="S"?"0 0 2.4rem":"0 0 3.2rem"};
  border-radius: 50%;
  justify-content: center;

  @media (prefers-reduced-motion: no-preference) {
    transition:
      transform ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.authenticMotion},
      ${e=>e.theme.transitions.backgroundColor};
  }
`,yl=I(C6)`
  display: flex;
  align-items: center;
  justify-content: ${e=>e.$caretPosition==="left"?"flex-start":"space-between"};
  width: 100%;
  gap: ${e=>e.theme.spaces[4]};
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[4]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[3]:e.theme.spaces[6]};
  cursor: pointer;
  color: ${e=>e.theme.colors.neutral800};

  &[data-disabled] {
    cursor: default;
    color: ${e=>e.theme.colors.neutral600};
  }

  &[data-state='open'] > ${Vo} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,E8=h.forwardRef((e,n)=>{const{size:a}=di("Trigger");return s.jsx(Sl,{$size:a,...e,ref:n})}),Sl=I(K).attrs(e=>({...e,tag:"span"}))`
  padding-inline: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};
  padding-block: ${e=>e.$size==="S"?e.theme.spaces[2]:e.theme.spaces[6]};

  // Remove default IconButton styles so there are no backgrounds or borders.
  & > button {
    border: none;
    background: none;
    color: ${e=>e.theme.colors.neutral600};

    @media (prefers-reduced-motion: no-preference) {
      transition: ${e=>e.theme.transitions.color};
    }
  }
`,L8=h.forwardRef(({variant:e="primary",...n},a)=>s.jsx(V8,{$variant:e,ref:a,...n})),V8=I(R6)`
  display: flex;
  align-items: center;
  background-color: ${e=>e.$variant==="primary"?e.theme.colors.neutral0:e.theme.colors.neutral100};

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral150};
  }

  &:not([data-disabled]) {
    &:hover,
    &[data-state='open'] {
      background-color: ${e=>e.theme.colors.primary100};

      & > ${yl} {
        color: ${e=>e.theme.colors.primary600};

        & ${Cl} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${Vo} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${Sl} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,D8=h.forwardRef((e,n)=>s.jsx(H8,{ref:n,...e})),B8=it`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,O8=it`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,H8=I(_6)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${B8} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${O8} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`,Qb=Object.freeze(Object.defineProperty({__proto__:null,Actions:E8,Content:D8,Header:L8,Item:I8,Root:j8,Trigger:M8},Symbol.toStringTag,{value:"Module"})),Fo=te`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;

    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e=>e.theme.colors.primary600};
    }
  }
`,sr=({tag:e,...n})=>{const a=e||"span";return s.jsx(N8,{...n,as:a})},N8=I.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,nr=({children:e,label:n})=>{const a=h.Children.only(e);return s.jsxs(s.Fragment,{children:[h.cloneElement(a,{"aria-hidden":"true",focusable:"false"}),s.jsx(sr,{children:n})]})};nr.displayName="AccessibleIcon";const Rl=e=>{switch(e){case"danger":return"danger100";case"success":return"success100";case"warning":return"warning100";default:return"primary100"}},F8=e=>Rl(e).replace("100","200"),Ia=({theme:e,$variant:n})=>n==="danger"?e.colors.danger700:n==="success"?e.colors.success700:n==="warning"?e.colors.warning700:e.colors.primary700,z8=I(X)`
  ${Fo};
`,W8=I(K)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${Ia};
    }
  }
`,k8=({variant:e,...n})=>e==="success"?s.jsx(cw,{...n}):e==="danger"||e==="warning"?s.jsx(d8,{...n}):s.jsx(Tx,{...n}),U8=I(X)`
  & a > span {
    color: ${Ia};
  }

  svg path {
    fill: ${Ia};
  }
`,Jb=({title:e,children:n,variant:a="default",onClose:c,closeLabel:o,titleAs:l="p",action:u,...w})=>s.jsxs(K,{alignItems:"flex-start",background:Rl(a),borderColor:F8(a),shadow:"filterShadow",gap:3,hasRadius:!0,padding:5,paddingRight:6,...w,children:[s.jsx(W8,{height:"2rem",shrink:0,$variant:a,width:"2rem",children:s.jsx(k8,{"aria-hidden":!0,variant:a})}),s.jsxs(K,{alignItems:"start",gap:u?2:1,wrap:"wrap",role:a==="danger"?"alert":"status",width:"100%",children:[e&&s.jsx(ue,{fontWeight:"bold",textColor:"neutral800",tag:l,children:e}),s.jsx(ue,{tag:"p",textColor:"neutral800",children:n}),u&&s.jsx(U8,{$variant:a,children:u})]}),s.jsx(z8,{tag:"button",background:"transparent",borderColor:void 0,height:"1.6rem",width:"1.6rem",marginTop:1,onClick:c,color:"neutral700",children:s.jsx(nr,{label:o,children:s.jsx(On,{})})})]});function _l(e){const n=h.useRef(e);return h.useEffect(()=>{n.current=e}),h.useMemo(()=>(...a)=>{var c;return(c=n.current)===null||c===void 0?void 0:c.call(n,...a)},[])}function Kt({prop:e,defaultProp:n,onChange:a=()=>{}}){const[c,o]=jl({defaultProp:n,onChange:a}),l=e!==void 0,u=l?e:c,w=_l(a),v=h.useCallback(R=>{if(l){const y=typeof R=="function"?R(e):R;y!==e&&w(y)}else o(R)},[l,e,o,w]);return[u,v]}function jl({defaultProp:e,onChange:n}){const a=h.useState(e),[c]=a,o=h.useRef(c),l=_l(n);return h.useEffect(()=>{o.current!==c&&(l(c),o.current=c)},[c,o,l]),a}const rc={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},oc={120:"120ms"};`${oc[120]}${rc.easeOutQuad}`,`${oc[120]}${rc.easeOutQuad}`;const qe={overlayFadeIn:it`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:it`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:it`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:it`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:it`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:it`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:it`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:it`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:it`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:it`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:it`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},Mr=32,ac=2;h.forwardRef(({onLoadingStatusChange:e,delayMs:n=600,src:a,alt:c,fallback:o,preview:l=!1,...u},w)=>{const[v,R]=Kt({onChange:e}),[C,y]=h.useState(!1),b=l&&v==="loaded",A=T=>{b&&y(T)};return s.jsxs(Tc,{onOpenChange:A,children:[s.jsx(Mc,{asChild:!0,children:s.jsxs(Ta,{ref:w,...u,children:[b?s.jsx(q8,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:C?.4:0}}):null,s.jsx(G8,{src:a,alt:c,onLoadingStatusChange:R}),s.jsx(I6,{delayMs:n,children:s.jsx(ue,{fontWeight:"bold",textTransform:"uppercase",children:o})})]})}),b?s.jsx(Ec,{children:s.jsx(K8,{side:"top",sideOffset:4,children:s.jsx(Y8,{src:a,alt:c})})}):null]})});const Al=te`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,Il=te`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Ta=I(T6)`
  position: relative;
  z-index: 0;
  ${Al}
  width: ${Mr/10}rem;
  height: ${Mr/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,q8=I(X)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,G8=I(M6)`
  ${Il}
`,K8=I(Lc)`
  ${Al}
  width: ${Mr*ac/10}rem;
  height: ${Mr*ac/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${qe.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Y8=I.img`
  ${Il}
`;h.forwardRef((e,n)=>s.jsx(Z8,{...e,ref:n,tag:"div"}));const Z8=I(K)`
  & > ${Ta} + ${Ta} {
    margin-left: -${Mr/10/2}rem;
  }
`,X8=({active:e=!1,size:n="M",textColor:a="neutral600",backgroundColor:c="neutral150",children:o,minWidth:l=5,...u})=>{const w=n==="S"?1:2;return s.jsx(Q8,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:l,paddingLeft:w,paddingRight:w,background:e?"primary200":c,$size:n,...u,children:s.jsx(ue,{variant:"sigma",textColor:e?"primary600":a,lineHeight:"1rem",children:o})})},Q8=I(K)`
  border-radius: ${({theme:e,$size:n})=>n==="S"?"2px":e.borderRadius};
  ${({$size:e,theme:n})=>e==="S"?te`
        padding-block: 0.3rem;
        padding-inline ${n.spaces[1]}
      `:te`
      padding-block: 0.7rem;
      padding-inline ${n.spaces[2]}
    `};
`,Br=ht(({href:e,disabled:n=!1,isExternal:a=!1,...c},o)=>s.jsx(J8,{tag:"a",ref:o,target:a?"_blank":void 0,rel:a?"noreferrer noopener":void 0,href:e,tabIndex:n?-1:void 0,"aria-disabled":n,pointerEvents:n?"none":void 0,cursor:n?void 0:"pointer",...c})),J8=I(X)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,Tl=()=>s.jsx(X,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:s.jsx(ue,{variant:"pi",textColor:"neutral500",children:"/"})});Tl.displayName="Divider";const P8=I(K)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,e7=h.forwardRef(({label:e,children:n,...a},c)=>{const o=h.Children.toArray(n);return s.jsx(X,{"aria-label":e,tag:"nav",...a,ref:c,children:s.jsx(P8,{tag:"ol",children:h.Children.map(o,(l,u)=>{const w=o.length>1&&u+1<o.length;return s.jsxs(K,{inline:!0,tag:"li",children:[l,w&&s.jsx(Tl,{})]})})})})});e7.displayName="Breadcrumbs";const t7=h.forwardRef(({children:e,isCurrent:n=!1,...a},c)=>s.jsx(X,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:c,children:s.jsx(ue,{variant:"pi",textColor:"neutral800",fontWeight:n?"bold":"regular","aria-current":n,...a,children:e})}));t7.displayName="Crumb";const n7=I(Br)`
  border-radius: ${({theme:e})=>e.borderRadius};
  color: ${({theme:e})=>e.colors.neutral600};
  font-size: ${({theme:e})=>e.fontSizes[1]};
  line-height: ${({theme:e})=>e.lineHeights[4]};
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  text-decoration: none;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
    color: ${({theme:e})=>e.colors.neutral700};
  }
`,r7=h.forwardRef(({children:e,...n},a)=>s.jsx(n7,{ref:a,...n,children:e}));r7.displayName="CrumbLink";const rr=e=>e.replaceAll(":","");function o7(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function Ml(...e){return n=>e.forEach(a=>o7(a,n))}function xt(...e){return h.useCallback(Ml(...e),e)}const a7=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),or=a7()?h.useEffect:h.useLayoutEffect,i7=x6.useId||(()=>{});let s7=0;const Wt=e=>{const[n,a]=h.useState(i7());return or(()=>{e||a(c=>c??String(s7++))},[e]),e?.toString()??(n||"")},Or=(e,n,{selectorToWatch:a,skipWhen:c=!1})=>{const o=qa(n);h.useEffect(()=>{if(c||!e.current)return;const l={root:e.current,rootMargin:"0px"},u=R=>{R.forEach(C=>{C.isIntersecting&&e.current&&e.current.scrollHeight>e.current.clientHeight&&o(C)})},w=new IntersectionObserver(u,l),v=e.current.querySelector(a);return v&&w.observe(v),()=>{w.disconnect()}},[c,o,a,e])},hi="success-light",fi="danger-light",zo="default",Hr="tertiary",Nr="secondary",El="danger",Ll="success",Wo="ghost",gi=[hi,fi],c7=[zo,Hr,Nr,El,Ll,Wo,...gi],l7=["S","M","L"],Nt=e=>e===hi||e===fi?`${e.substring(0,e.lastIndexOf("-"))}`:e===Hr?"neutral":e===zo||e===Nr||c7.every(n=>n!==e)?"primary":`${e}`,Vl=({theme:e})=>te`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    color: ${e.colors.neutral600};
    cursor: default;
  `,Dl=({theme:e,$variant:n})=>[...gi,Nr].includes(n)?te`
      background-color: ${e.colors.neutral0};
    `:n===Hr?te`
      background-color: ${e.colors.neutral100};
    `:n===Wo?te`
      background-color: ${e.colors.neutral100};
    `:n===zo?te`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:te`
    border: 1px solid ${e.colors[`${Nt(n)}500`]};
    background: ${e.colors[`${Nt(n)}500`]};
  `,Bl=({theme:e,$variant:n})=>[...gi,Nr].includes(n)?te`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${Nt(n)}600`]};
      color: ${e.colors[`${Nt(n)}600`]};
    `:n===Hr||n===Wo?te`
      background-color: ${e.colors.neutral150};
    `:te`
    border: 1px solid ${e.colors[`${Nt(n)}600`]};
    background: ${e.colors[`${Nt(n)}600`]};
  `,Ol=({theme:e,$variant:n})=>{switch(n){case fi:case hi:case Nr:return te`
        border: 1px solid ${e.colors[`${Nt(n)}200`]};
        background: ${e.colors[`${Nt(n)}100`]};
        color: ${e.colors[`${Nt(n)}700`]};
      `;case Hr:return te`
        border: 1px solid ${e.colors.neutral200};
        background: ${e.colors.neutral0};
        color: ${e.colors.neutral800};
      `;case Wo:return te`
        border: 1px solid transparent;
        background: transparent;
        color: ${e.colors.neutral800};

        svg {
          fill: ${e.colors.neutral500};
        }
      `;case Ll:case El:return te`
        border: 1px solid ${e.colors[`${Nt(n)}600`]};
        background: ${e.colors[`${Nt(n)}600`]};
        color: ${e.colors.neutral0};
      `;default:return te`
        border: 1px solid ${e.colors.buttonPrimary600};
        background: ${e.colors.buttonPrimary600};
        color: ${e.colors.buttonNeutral0};
      `}},Ma=ht(({variant:e=zo,startIcon:n,endIcon:a,disabled:c=!1,children:o,onClick:l,size:u=l7[0],loading:w=!1,fullWidth:v=!1,...R},C)=>{const y=c||w,b=A=>{!y&&l&&l(A)};return s.jsxs(h7,{ref:C,"aria-disabled":y,disabled:y,$size:u,$variant:e,tag:"button",onClick:b,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:v?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",...R,children:[(n||w)&&s.jsx(K,{tag:"span","aria-hidden":!0,children:w?s.jsx(d7,{}):n}),s.jsx(ue,{variant:u==="S"?"pi":void 0,fontWeight:"bold",children:o}),a&&s.jsx(K,{tag:"span","aria-hidden":!0,children:a})]})}),u7=it`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,d7=I(bl)`
  animation: ${u7} 2s infinite linear;
  will-change: transform;
`,h7=I(K)`
  height: ${({theme:e,$size:n})=>e.sizes.button[n]};
  text-decoration: none;
  ${Ol}

  &:hover {
    ${Dl}
  }

  &:active {
    ${Bl}
  }

  &[aria-disabled='true'] {
    ${Vl}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,Hl=h.forwardRef(({children:e,description:n,label:a,defaultOpen:c,open:o,onOpenChange:l,delayDuration:u=500,disableHoverableContent:w,...v},R)=>s.jsxs(Tc,{defaultOpen:c,open:o,onOpenChange:l,delayDuration:u,disableHoverableContent:w,children:[s.jsx(Mc,{asChild:!0,children:e}),s.jsx(Ec,{children:s.jsx(f7,{ref:R,sideOffset:8,...v,children:s.jsx(ue,{variant:"pi",fontWeight:"bold",children:a||n})})})]})),f7=I(Lc)`
  background-color: ${e=>e.theme.colors.neutral900};
  color: ${e=>e.theme.colors.neutral0};
  padding-inline: ${e=>e.theme.spaces[2]};
  padding-block: ${e=>e.theme.spaces[2]};
  border-radius: ${e=>e.theme.borderRadius};
  z-index: ${e=>e.theme.zIndices.tooltip};
  will-change: opacity;
  transform-origin: var(--radix-tooltip-content-transform-origin);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${qe.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Ea=ht(({label:e,background:n,children:a,disabled:c=!1,onClick:o,size:l="S",variant:u="tertiary",withTooltip:w=!0,...v},R)=>{const C=b=>{!c&&o&&o(b)},y=s.jsx(Tr,{"aria-disabled":c,background:c?"neutral150":n,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...v,ref:R,$size:l,onClick:C,$variant:u,children:s.jsx(nr,{label:e,children:a})});return w?s.jsx(Hl,{label:e,children:y}):y}),Tr=I(K)`
  text-decoration: none;

  ${e=>{switch(e.$size){case"S":return te`
          padding-block: 0.7rem;
          padding-inline: 0.7rem;
        `;case"M":return te`
          padding-block: 0.9rem;
          padding-inline: 0.9rem;
        `;case"L":return te`
          padding-block: 1.1rem;
          padding-inline: 1.1rem;
        `}}}
  ${Ol}
  ${e=>e.$variant==="tertiary"?te`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${Dl}
    ${e=>e.$variant==="tertiary"?te`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${Bl}
  }

  &[aria-disabled='true'] {
    ${Vl}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;I(K)`
  & ${Tr}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${Tr}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Tr} {
    border-radius: 0;

    & + ${Tr} {
      border-left: none;
    }
  }
`;const g7=ht(({children:e,href:n,disabled:a=!1,startIcon:c,endIcon:o,isExternal:l=!1,...u},w)=>s.jsxs(m7,{ref:w,href:n,disabled:a,isExternal:l,...u,children:[c,s.jsx(ue,{textColor:a?"neutral600":"primary600",children:e}),o,n&&!o&&l&&s.jsx(Gw,{})]})),m7=I(Br)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: 1rem;

    path {
      fill: ${({disabled:e,theme:n})=>e?n.colors.neutral600:n.colors.primary600};
    }
  }

  &:hover {
    & > span {
      color: ${({theme:e})=>e.colors.primary500};
    }

    svg path {
      fill: ${({theme:e})=>e.colors.primary500};
    }
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${Fo};
`,w7=O6,x7=h.forwardRef(({label:e,endIcon:n=s.jsx(Vn,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:a=Ma,icon:c,...o},l)=>{const u={...o,ref:l,type:"button"};return s.jsx(E6,{asChild:!0,disabled:u.disabled,children:a===Ea?s.jsx(Ea,{label:e,variant:"tertiary",...u,children:c}):s.jsx(Ma,{endIcon:n,variant:"ghost",...u})})}),v7=h.forwardRef(({children:e,intersectionId:n,popoverPlacement:a="bottom-start",...c},o)=>{const[l,u]=a.split("-");return s.jsx(Vc,{children:s.jsx(p7,{align:u,side:l,loop:!0,asChild:!0,children:s.jsxs(Nl,{ref:o,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...c,children:[e,s.jsx(X,{id:n,width:"100%",height:"1px"})]})})})}),Nl=I(K)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,p7=I(L6)`
  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${qe.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${qe.slideDownIn};
      }
    }
  }
`,Fl=({theme:e})=>te`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  &[aria-disabled='true'] {
    cursor: not-allowed;
    color: ${e.colors.neutral500};
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,b7=I(K)`
  ${Fl}
`;I(g7)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:n})=>Eo(e.colors,n,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  /* TODO: do we need this? */
  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${Fl}
`;h.forwardRef((e,n)=>s.jsx(V6,{asChild:!0,children:s.jsx($7,{ref:n,variant:"sigma",textColor:"neutral600",...e})}));const $7=I(ue)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`;h.forwardRef(({disabled:e=!1,...n},a)=>s.jsx(D6,{asChild:!0,disabled:e,children:s.jsxs(C7,{ref:a,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...n,children:[s.jsx(ue,{children:n.children}),s.jsx(ui,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const C7=I(b7)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`;h.forwardRef((e,n)=>s.jsx(Vc,{children:s.jsx(B6,{sideOffset:8,asChild:!0,children:s.jsx(Nl,{ref:n,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})}));const y7=w7,S7=x7,R7=v7,_7=h.forwardRef(({children:e,onOpen:n,onClose:a,popoverPlacement:c,onReachEnd:o,...l},u)=>{const w=h.useRef(null),v=xt(u,w),R=h.useRef(null),[C,y]=h.useState(!1),b=V=>{o&&o(V)},A=V=>{V&&typeof n=="function"?n():!V&&typeof a=="function"&&a(),y(V)},T=Wt(),M=`intersection-${rr(T)}`;return Or(R,b,{selectorToWatch:`#${M}`,skipWhen:!C}),s.jsxs(y7,{onOpenChange:A,children:[s.jsx(S7,{ref:v,...l,children:l.label}),s.jsx(R7,{ref:R,intersectionId:M,popoverPlacement:c,children:e})]})}),j7=I(_7)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,A7=h.forwardRef(({children:e,...n},a)=>s.jsx(j7,{ref:a,endIcon:null,size:"S",...n,children:e}));A7.displayName="CrumbSimpleMenu";const zl=h.createContext({id:""}),I7=()=>h.useContext(zl);h.forwardRef(({id:e,...n},a)=>{const c=Wt(e),o=h.useMemo(()=>({id:c}),[c]);return s.jsx(zl.Provider,{value:o,children:s.jsx(X,{ref:a,id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${c}-title`,...n})})});const T7=h.forwardRef(({position:e,...n},a)=>s.jsx(M7,{ref:a,$position:e,...n,direction:"row",gap:2})),M7=I(K)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({$position:e,theme:n})=>{if(e==="end")return n.spaces[3]}};
  left: ${({$position:e,theme:n})=>{if(e==="start")return n.spaces[3]}};
`;I.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;I.div`
  display: flex;
  justify-content: center;
  height: ${({$size:e})=>e==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`;I.div`
  margin-left: auto;
  flex-shrink: 0;
`;I(X8)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`;const E7=({fill:e,...n})=>{const{colors:a}=_();return s.jsx(X,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?a[e]:void 0,...n,children:s.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},ic=h.forwardRef(({defaultChecked:e,checked:n,onCheckedChange:a,...c},o)=>{const l=h.useRef(null),[u,w]=Kt({defaultProp:e,prop:n,onChange:a}),v=xt(l,o);return s.jsx(L7,{ref:v,checked:u,onCheckedChange:w,...c,children:s.jsxs(V7,{style:{display:"inline-flex",pointerEvents:"auto"},forceMount:!0,children:[u===!0?s.jsx(E7,{width:"1.6rem",fill:"neutral0"}):null,u==="indeterminate"?s.jsx(Qx,{fill:"neutral0"}):null]})})}),L7=I(j6)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  border-radius: ${e=>e.theme.borderRadius};
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // this ensures the checkbox is always a square even in flex-containers.
  flex: 0 0 2rem;

  &[data-state='checked'],
  &[data-state='indeterminate'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
    background-color: ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: -1;
    min-width: 44px;
    min-height: 44px;
  }
`,V7=I(A6)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`,mi=h.forwardRef(({children:e,...n},a)=>{const c=Wt(n.id);return e?s.jsxs(K,{gap:2,children:[s.jsx(ic,{id:c,...n}),s.jsx(ue,{tag:"label",textColor:"neutral800",htmlFor:c,children:e})]}):s.jsx(ic,{ref:a,...n})});h.forwardRef((e,n)=>{const{id:a}=I7();return s.jsx(T7,{position:"start",children:s.jsx(mi,{"aria-labelledby":`${a}-title`,...e,ref:n})})});I(X)`
  word-break: break-all;
`;I(K)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const st={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},D7=I(X)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,B7=I(K)`
  grid-area: slides;
`,sc=I(X)`
  grid-area: ${({$area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,O7=h.forwardRef(({actions:e,children:n,label:a,nextLabel:c,onNext:o,onPrevious:l,previousLabel:u,secondaryLabel:w,selectedSlide:v,...R},C)=>{const y=h.useRef(null),b=h.useRef(null),A=h.Children.map(n,(M,V)=>h.cloneElement(M,{selected:V===v})),T=M=>{switch(M.key){case st.RIGHT:{M.preventDefault(),b?.current&&b.current.focus(),o&&o();break}case st.LEFT:{M.preventDefault(),y?.current&&y.current.focus(),l&&l();break}}};return s.jsx(X,{ref:C,...R,onKeyDown:T,children:s.jsxs(X,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[s.jsxs(D7,{tag:"section","aria-roledescription":"carousel","aria-label":a,display:"grid",position:"relative",children:[A&&A.length>1&&s.jsxs(s.Fragment,{children:[s.jsx(sc,{tag:"button",onClick:l,$area:"startAction",ref:y,type:"button",children:s.jsx(nr,{label:u,children:s.jsx(pl,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),s.jsx(sc,{tag:"button",onClick:o,$area:"endAction",ref:b,type:"button",children:s.jsx(nr,{label:c,children:s.jsx(ui,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),s.jsx(B7,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:A}),e]}),w&&s.jsx(X,{paddingTop:2,paddingLeft:4,paddingRight:4,children:s.jsx(Hl,{label:w,children:s.jsx(K,{justifyContent:"center",children:s.jsx(ue,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:w})})})})]})})});var _r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Do={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Do.exports;(function(e,n){(function(){var a,c="4.17.21",o=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",w="Invalid `variable` option passed into `_.template`",v="__lodash_hash_undefined__",R=500,C="__lodash_placeholder__",y=1,b=2,A=4,T=1,M=2,V=1,L=2,j=4,B=8,F=16,z=32,W=64,U=128,oe=256,se=512,ce=30,$e="...",ne=800,P=16,ee=1,_e=2,je=3,me=1/0,ye=9007199254740991,Me=17976931348623157e292,De=NaN,he=4294967295,Je=he-1,we=he>>>1,ze=[["ary",U],["bind",V],["bindKey",L],["curry",B],["curryRight",F],["flip",se],["partial",z],["partialRight",W],["rearg",oe]],Ne="[object Arguments]",Ye="[object Array]",Y="[object AsyncFunction]",xe="[object Boolean]",Se="[object Date]",ae="[object DOMException]",ge="[object Error]",Ce="[object Function]",rt="[object GeneratorFunction]",Ee="[object Map]",Ae="[object Number]",_t="[object Null]",Ze="[object Object]",lr="[object Promise]",qo="[object Proxy]",ln="[object RegExp]",ct="[object Set]",kt="[object String]",Hn="[object Symbol]",ur="[object Undefined]",$n="[object WeakMap]",Go="[object WeakSet]",Zt="[object ArrayBuffer]",Ge="[object DataView]",Ko="[object Float32Array]",Yo="[object Float64Array]",Zo="[object Int8Array]",Xo="[object Int16Array]",Qo="[object Int32Array]",Jo="[object Uint8Array]",Po="[object Uint8ClampedArray]",e0="[object Uint16Array]",t0="[object Uint32Array]",w2=/\b__p \+= '';/g,x2=/\b(__p \+=) '' \+/g,v2=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Ci=/&(?:amp|lt|gt|quot|#39);/g,yi=/[&<>"']/g,p2=RegExp(Ci.source),b2=RegExp(yi.source),$2=/<%-([\s\S]+?)%>/g,C2=/<%([\s\S]+?)%>/g,Si=/<%=([\s\S]+?)%>/g,y2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,S2=/^\w*$/,R2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,n0=/[\\^$.*+?()[\]{}|]/g,_2=RegExp(n0.source),r0=/^\s+/,j2=/\s/,A2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,I2=/\{\n\/\* \[wrapped with (.+)\] \*/,T2=/,? & /,M2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,E2=/[()=,{}\[\]\/\s]/,L2=/\\(\\)?/g,V2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ri=/\w*$/,D2=/^[-+]0x[0-9a-f]+$/i,B2=/^0b[01]+$/i,O2=/^\[object .+?Constructor\]$/,H2=/^0o[0-7]+$/i,N2=/^(?:0|[1-9]\d*)$/,F2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,zr=/($^)/,z2=/['\n\r\u2028\u2029\\]/g,Wr="\\ud800-\\udfff",W2="\\u0300-\\u036f",k2="\\ufe20-\\ufe2f",U2="\\u20d0-\\u20ff",_i=W2+k2+U2,ji="\\u2700-\\u27bf",Ai="a-z\\xdf-\\xf6\\xf8-\\xff",q2="\\xac\\xb1\\xd7\\xf7",G2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",K2="\\u2000-\\u206f",Y2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ii="A-Z\\xc0-\\xd6\\xd8-\\xde",Ti="\\ufe0e\\ufe0f",Mi=q2+G2+K2+Y2,o0="['’]",Z2="["+Wr+"]",Ei="["+Mi+"]",kr="["+_i+"]",Li="\\d+",X2="["+ji+"]",Vi="["+Ai+"]",Di="[^"+Wr+Mi+Li+ji+Ai+Ii+"]",a0="\\ud83c[\\udffb-\\udfff]",Q2="(?:"+kr+"|"+a0+")",Bi="[^"+Wr+"]",i0="(?:\\ud83c[\\udde6-\\uddff]){2}",s0="[\\ud800-\\udbff][\\udc00-\\udfff]",Nn="["+Ii+"]",Oi="\\u200d",Hi="(?:"+Vi+"|"+Di+")",J2="(?:"+Nn+"|"+Di+")",Ni="(?:"+o0+"(?:d|ll|m|re|s|t|ve))?",Fi="(?:"+o0+"(?:D|LL|M|RE|S|T|VE))?",zi=Q2+"?",Wi="["+Ti+"]?",P2="(?:"+Oi+"(?:"+[Bi,i0,s0].join("|")+")"+Wi+zi+")*",eu="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tu="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ki=Wi+zi+P2,nu="(?:"+[X2,i0,s0].join("|")+")"+ki,ru="(?:"+[Bi+kr+"?",kr,i0,s0,Z2].join("|")+")",ou=RegExp(o0,"g"),au=RegExp(kr,"g"),c0=RegExp(a0+"(?="+a0+")|"+ru+ki,"g"),iu=RegExp([Nn+"?"+Vi+"+"+Ni+"(?="+[Ei,Nn,"$"].join("|")+")",J2+"+"+Fi+"(?="+[Ei,Nn+Hi,"$"].join("|")+")",Nn+"?"+Hi+"+"+Ni,Nn+"+"+Fi,tu,eu,Li,nu].join("|"),"g"),su=RegExp("["+Oi+Wr+_i+Ti+"]"),cu=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,lu=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],uu=-1,Be={};Be[Ko]=Be[Yo]=Be[Zo]=Be[Xo]=Be[Qo]=Be[Jo]=Be[Po]=Be[e0]=Be[t0]=!0,Be[Ne]=Be[Ye]=Be[Zt]=Be[xe]=Be[Ge]=Be[Se]=Be[ge]=Be[Ce]=Be[Ee]=Be[Ae]=Be[Ze]=Be[ln]=Be[ct]=Be[kt]=Be[$n]=!1;var Ve={};Ve[Ne]=Ve[Ye]=Ve[Zt]=Ve[Ge]=Ve[xe]=Ve[Se]=Ve[Ko]=Ve[Yo]=Ve[Zo]=Ve[Xo]=Ve[Qo]=Ve[Ee]=Ve[Ae]=Ve[Ze]=Ve[ln]=Ve[ct]=Ve[kt]=Ve[Hn]=Ve[Jo]=Ve[Po]=Ve[e0]=Ve[t0]=!0,Ve[ge]=Ve[Ce]=Ve[$n]=!1;var du={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},hu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fu={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},gu={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},mu=parseFloat,wu=parseInt,Ui=typeof _r=="object"&&_r&&_r.Object===Object&&_r,xu=typeof self=="object"&&self&&self.Object===Object&&self,tt=Ui||xu||Function("return this")(),l0=n&&!n.nodeType&&n,Cn=l0&&!0&&e&&!e.nodeType&&e,qi=Cn&&Cn.exports===l0,u0=qi&&Ui.process,jt=function(){try{var $=Cn&&Cn.require&&Cn.require("util").types;return $||u0&&u0.binding&&u0.binding("util")}catch{}}(),Gi=jt&&jt.isArrayBuffer,Ki=jt&&jt.isDate,Yi=jt&&jt.isMap,Zi=jt&&jt.isRegExp,Xi=jt&&jt.isSet,Qi=jt&&jt.isTypedArray;function pt($,D,E){switch(E.length){case 0:return $.call(D);case 1:return $.call(D,E[0]);case 2:return $.call(D,E[0],E[1]);case 3:return $.call(D,E[0],E[1],E[2])}return $.apply(D,E)}function vu($,D,E,q){for(var re=-1,Re=$==null?0:$.length;++re<Re;){var Xe=$[re];D(q,Xe,E(Xe),$)}return q}function At($,D){for(var E=-1,q=$==null?0:$.length;++E<q&&D($[E],E,$)!==!1;);return $}function pu($,D){for(var E=$==null?0:$.length;E--&&D($[E],E,$)!==!1;);return $}function Ji($,D){for(var E=-1,q=$==null?0:$.length;++E<q;)if(!D($[E],E,$))return!1;return!0}function un($,D){for(var E=-1,q=$==null?0:$.length,re=0,Re=[];++E<q;){var Xe=$[E];D(Xe,E,$)&&(Re[re++]=Xe)}return Re}function Ur($,D){var E=$==null?0:$.length;return!!E&&Fn($,D,0)>-1}function d0($,D,E){for(var q=-1,re=$==null?0:$.length;++q<re;)if(E(D,$[q]))return!0;return!1}function He($,D){for(var E=-1,q=$==null?0:$.length,re=Array(q);++E<q;)re[E]=D($[E],E,$);return re}function dn($,D){for(var E=-1,q=D.length,re=$.length;++E<q;)$[re+E]=D[E];return $}function h0($,D,E,q){var re=-1,Re=$==null?0:$.length;for(q&&Re&&(E=$[++re]);++re<Re;)E=D(E,$[re],re,$);return E}function bu($,D,E,q){var re=$==null?0:$.length;for(q&&re&&(E=$[--re]);re--;)E=D(E,$[re],re,$);return E}function f0($,D){for(var E=-1,q=$==null?0:$.length;++E<q;)if(D($[E],E,$))return!0;return!1}var $u=g0("length");function Cu($){return $.split("")}function yu($){return $.match(M2)||[]}function Pi($,D,E){var q;return E($,function(re,Re,Xe){if(D(re,Re,Xe))return q=Re,!1}),q}function qr($,D,E,q){for(var re=$.length,Re=E+(q?1:-1);q?Re--:++Re<re;)if(D($[Re],Re,$))return Re;return-1}function Fn($,D,E){return D===D?Du($,D,E):qr($,es,E)}function Su($,D,E,q){for(var re=E-1,Re=$.length;++re<Re;)if(q($[re],D))return re;return-1}function es($){return $!==$}function ts($,D){var E=$==null?0:$.length;return E?w0($,D)/E:De}function g0($){return function(D){return D==null?a:D[$]}}function m0($){return function(D){return $==null?a:$[D]}}function ns($,D,E,q,re){return re($,function(Re,Xe,Le){E=q?(q=!1,Re):D(E,Re,Xe,Le)}),E}function Ru($,D){var E=$.length;for($.sort(D);E--;)$[E]=$[E].value;return $}function w0($,D){for(var E,q=-1,re=$.length;++q<re;){var Re=D($[q]);Re!==a&&(E=E===a?Re:E+Re)}return E}function x0($,D){for(var E=-1,q=Array($);++E<$;)q[E]=D(E);return q}function _u($,D){return He(D,function(E){return[E,$[E]]})}function rs($){return $&&$.slice(0,ss($)+1).replace(r0,"")}function bt($){return function(D){return $(D)}}function v0($,D){return He(D,function(E){return $[E]})}function dr($,D){return $.has(D)}function os($,D){for(var E=-1,q=$.length;++E<q&&Fn(D,$[E],0)>-1;);return E}function as($,D){for(var E=$.length;E--&&Fn(D,$[E],0)>-1;);return E}function ju($,D){for(var E=$.length,q=0;E--;)$[E]===D&&++q;return q}var Au=m0(du),Iu=m0(hu);function Tu($){return"\\"+gu[$]}function Mu($,D){return $==null?a:$[D]}function zn($){return su.test($)}function Eu($){return cu.test($)}function Lu($){for(var D,E=[];!(D=$.next()).done;)E.push(D.value);return E}function p0($){var D=-1,E=Array($.size);return $.forEach(function(q,re){E[++D]=[re,q]}),E}function is($,D){return function(E){return $(D(E))}}function hn($,D){for(var E=-1,q=$.length,re=0,Re=[];++E<q;){var Xe=$[E];(Xe===D||Xe===C)&&($[E]=C,Re[re++]=E)}return Re}function Gr($){var D=-1,E=Array($.size);return $.forEach(function(q){E[++D]=q}),E}function Vu($){var D=-1,E=Array($.size);return $.forEach(function(q){E[++D]=[q,q]}),E}function Du($,D,E){for(var q=E-1,re=$.length;++q<re;)if($[q]===D)return q;return-1}function Bu($,D,E){for(var q=E+1;q--;)if($[q]===D)return q;return q}function Wn($){return zn($)?Hu($):$u($)}function Dt($){return zn($)?Nu($):Cu($)}function ss($){for(var D=$.length;D--&&j2.test($.charAt(D)););return D}var Ou=m0(fu);function Hu($){for(var D=c0.lastIndex=0;c0.test($);)++D;return D}function Nu($){return $.match(c0)||[]}function Fu($){return $.match(iu)||[]}var zu=function $(D){D=D==null?tt:kn.defaults(tt.Object(),D,kn.pick(tt,lu));var E=D.Array,q=D.Date,re=D.Error,Re=D.Function,Xe=D.Math,Le=D.Object,b0=D.RegExp,Wu=D.String,It=D.TypeError,Kr=E.prototype,ku=Re.prototype,Un=Le.prototype,Yr=D["__core-js_shared__"],Zr=ku.toString,Te=Un.hasOwnProperty,Uu=0,cs=function(){var t=/[^.]+$/.exec(Yr&&Yr.keys&&Yr.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Xr=Un.toString,qu=Zr.call(Le),Gu=tt._,Ku=b0("^"+Zr.call(Te).replace(n0,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Qr=qi?D.Buffer:a,fn=D.Symbol,Jr=D.Uint8Array,ls=Qr?Qr.allocUnsafe:a,Pr=is(Le.getPrototypeOf,Le),us=Le.create,ds=Un.propertyIsEnumerable,eo=Kr.splice,hs=fn?fn.isConcatSpreadable:a,hr=fn?fn.iterator:a,yn=fn?fn.toStringTag:a,to=function(){try{var t=An(Le,"defineProperty");return t({},"",{}),t}catch{}}(),Yu=D.clearTimeout!==tt.clearTimeout&&D.clearTimeout,Zu=q&&q.now!==tt.Date.now&&q.now,Xu=D.setTimeout!==tt.setTimeout&&D.setTimeout,no=Xe.ceil,ro=Xe.floor,$0=Le.getOwnPropertySymbols,Qu=Qr?Qr.isBuffer:a,fs=D.isFinite,Ju=Kr.join,Pu=is(Le.keys,Le),Qe=Xe.max,ot=Xe.min,ed=q.now,td=D.parseInt,gs=Xe.random,nd=Kr.reverse,C0=An(D,"DataView"),fr=An(D,"Map"),y0=An(D,"Promise"),qn=An(D,"Set"),gr=An(D,"WeakMap"),mr=An(Le,"create"),oo=gr&&new gr,Gn={},rd=In(C0),od=In(fr),ad=In(y0),id=In(qn),sd=In(gr),ao=fn?fn.prototype:a,wr=ao?ao.valueOf:a,ms=ao?ao.toString:a;function g(t){if(We(t)&&!ie(t)&&!(t instanceof pe)){if(t instanceof Tt)return t;if(Te.call(t,"__wrapped__"))return w1(t)}return new Tt(t)}var Kn=function(){function t(){}return function(r){if(!Fe(r))return{};if(us)return us(r);t.prototype=r;var i=new t;return t.prototype=a,i}}();function io(){}function Tt(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=a}g.templateSettings={escape:$2,evaluate:C2,interpolate:Si,variable:"",imports:{_:g}},g.prototype=io.prototype,g.prototype.constructor=g,Tt.prototype=Kn(io.prototype),Tt.prototype.constructor=Tt;function pe(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=he,this.__views__=[]}function cd(){var t=new pe(this.__wrapped__);return t.__actions__=ft(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ft(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ft(this.__views__),t}function ld(){if(this.__filtered__){var t=new pe(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function ud(){var t=this.__wrapped__.value(),r=this.__dir__,i=ie(t),d=r<0,f=i?t.length:0,m=Ch(0,f,this.__views__),x=m.start,p=m.end,S=p-x,O=d?p:x-1,H=this.__iteratees__,N=H.length,k=0,G=ot(S,this.__takeCount__);if(!i||!d&&f==S&&G==S)return Ns(t,this.__actions__);var Q=[];e:for(;S--&&k<G;){O+=r;for(var de=-1,J=t[O];++de<N;){var ve=H[de],be=ve.iteratee,yt=ve.type,dt=be(J);if(yt==_e)J=dt;else if(!dt){if(yt==ee)continue e;break e}}Q[k++]=J}return Q}pe.prototype=Kn(io.prototype),pe.prototype.constructor=pe;function Sn(t){var r=-1,i=t==null?0:t.length;for(this.clear();++r<i;){var d=t[r];this.set(d[0],d[1])}}function dd(){this.__data__=mr?mr(null):{},this.size=0}function hd(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}function fd(t){var r=this.__data__;if(mr){var i=r[t];return i===v?a:i}return Te.call(r,t)?r[t]:a}function gd(t){var r=this.__data__;return mr?r[t]!==a:Te.call(r,t)}function md(t,r){var i=this.__data__;return this.size+=this.has(t)?0:1,i[t]=mr&&r===a?v:r,this}Sn.prototype.clear=dd,Sn.prototype.delete=hd,Sn.prototype.get=fd,Sn.prototype.has=gd,Sn.prototype.set=md;function Xt(t){var r=-1,i=t==null?0:t.length;for(this.clear();++r<i;){var d=t[r];this.set(d[0],d[1])}}function wd(){this.__data__=[],this.size=0}function xd(t){var r=this.__data__,i=so(r,t);if(i<0)return!1;var d=r.length-1;return i==d?r.pop():eo.call(r,i,1),--this.size,!0}function vd(t){var r=this.__data__,i=so(r,t);return i<0?a:r[i][1]}function pd(t){return so(this.__data__,t)>-1}function bd(t,r){var i=this.__data__,d=so(i,t);return d<0?(++this.size,i.push([t,r])):i[d][1]=r,this}Xt.prototype.clear=wd,Xt.prototype.delete=xd,Xt.prototype.get=vd,Xt.prototype.has=pd,Xt.prototype.set=bd;function Qt(t){var r=-1,i=t==null?0:t.length;for(this.clear();++r<i;){var d=t[r];this.set(d[0],d[1])}}function $d(){this.size=0,this.__data__={hash:new Sn,map:new(fr||Xt),string:new Sn}}function Cd(t){var r=bo(this,t).delete(t);return this.size-=r?1:0,r}function yd(t){return bo(this,t).get(t)}function Sd(t){return bo(this,t).has(t)}function Rd(t,r){var i=bo(this,t),d=i.size;return i.set(t,r),this.size+=i.size==d?0:1,this}Qt.prototype.clear=$d,Qt.prototype.delete=Cd,Qt.prototype.get=yd,Qt.prototype.has=Sd,Qt.prototype.set=Rd;function Rn(t){var r=-1,i=t==null?0:t.length;for(this.__data__=new Qt;++r<i;)this.add(t[r])}function _d(t){return this.__data__.set(t,v),this}function jd(t){return this.__data__.has(t)}Rn.prototype.add=Rn.prototype.push=_d,Rn.prototype.has=jd;function Bt(t){var r=this.__data__=new Xt(t);this.size=r.size}function Ad(){this.__data__=new Xt,this.size=0}function Id(t){var r=this.__data__,i=r.delete(t);return this.size=r.size,i}function Td(t){return this.__data__.get(t)}function Md(t){return this.__data__.has(t)}function Ed(t,r){var i=this.__data__;if(i instanceof Xt){var d=i.__data__;if(!fr||d.length<o-1)return d.push([t,r]),this.size=++i.size,this;i=this.__data__=new Qt(d)}return i.set(t,r),this.size=i.size,this}Bt.prototype.clear=Ad,Bt.prototype.delete=Id,Bt.prototype.get=Td,Bt.prototype.has=Md,Bt.prototype.set=Ed;function ws(t,r){var i=ie(t),d=!i&&Tn(t),f=!i&&!d&&vn(t),m=!i&&!d&&!f&&Qn(t),x=i||d||f||m,p=x?x0(t.length,Wu):[],S=p.length;for(var O in t)(r||Te.call(t,O))&&!(x&&(O=="length"||f&&(O=="offset"||O=="parent")||m&&(O=="buffer"||O=="byteLength"||O=="byteOffset")||tn(O,S)))&&p.push(O);return p}function xs(t){var r=t.length;return r?t[V0(0,r-1)]:a}function Ld(t,r){return $o(ft(t),_n(r,0,t.length))}function Vd(t){return $o(ft(t))}function S0(t,r,i){(i!==a&&!Ot(t[r],i)||i===a&&!(r in t))&&Jt(t,r,i)}function xr(t,r,i){var d=t[r];(!(Te.call(t,r)&&Ot(d,i))||i===a&&!(r in t))&&Jt(t,r,i)}function so(t,r){for(var i=t.length;i--;)if(Ot(t[i][0],r))return i;return-1}function Dd(t,r,i,d){return gn(t,function(f,m,x){r(d,f,i(f),x)}),d}function vs(t,r){return t&&qt(r,Pe(r),t)}function Bd(t,r){return t&&qt(r,mt(r),t)}function Jt(t,r,i){r=="__proto__"&&to?to(t,r,{configurable:!0,enumerable:!0,value:i,writable:!0}):t[r]=i}function R0(t,r){for(var i=-1,d=r.length,f=E(d),m=t==null;++i<d;)f[i]=m?a:aa(t,r[i]);return f}function _n(t,r,i){return t===t&&(i!==a&&(t=t<=i?t:i),r!==a&&(t=t>=r?t:r)),t}function Mt(t,r,i,d,f,m){var x,p=r&y,S=r&b,O=r&A;if(i&&(x=f?i(t,d,f,m):i(t)),x!==a)return x;if(!Fe(t))return t;var H=ie(t);if(H){if(x=Sh(t),!p)return ft(t,x)}else{var N=at(t),k=N==Ce||N==rt;if(vn(t))return Ws(t,p);if(N==Ze||N==Ne||k&&!f){if(x=S||k?{}:s1(t),!p)return S?fh(t,Bd(x,t)):hh(t,vs(x,t))}else{if(!Ve[N])return f?t:{};x=Rh(t,N,p)}}m||(m=new Bt);var G=m.get(t);if(G)return G;m.set(t,x),B1(t)?t.forEach(function(J){x.add(Mt(J,r,i,J,t,m))}):V1(t)&&t.forEach(function(J,ve){x.set(ve,Mt(J,r,i,ve,t,m))});var Q=O?S?q0:U0:S?mt:Pe,de=H?a:Q(t);return At(de||t,function(J,ve){de&&(ve=J,J=t[ve]),xr(x,ve,Mt(J,r,i,ve,t,m))}),x}function Od(t){var r=Pe(t);return function(i){return ps(i,t,r)}}function ps(t,r,i){var d=i.length;if(t==null)return!d;for(t=Le(t);d--;){var f=i[d],m=r[f],x=t[f];if(x===a&&!(f in t)||!m(x))return!1}return!0}function bs(t,r,i){if(typeof t!="function")throw new It(u);return Sr(function(){t.apply(a,i)},r)}function vr(t,r,i,d){var f=-1,m=Ur,x=!0,p=t.length,S=[],O=r.length;if(!p)return S;i&&(r=He(r,bt(i))),d?(m=d0,x=!1):r.length>=o&&(m=dr,x=!1,r=new Rn(r));e:for(;++f<p;){var H=t[f],N=i==null?H:i(H);if(H=d||H!==0?H:0,x&&N===N){for(var k=O;k--;)if(r[k]===N)continue e;S.push(H)}else m(r,N,d)||S.push(H)}return S}var gn=Ks(Ut),$s=Ks(j0,!0);function Hd(t,r){var i=!0;return gn(t,function(d,f,m){return i=!!r(d,f,m),i}),i}function co(t,r,i){for(var d=-1,f=t.length;++d<f;){var m=t[d],x=r(m);if(x!=null&&(p===a?x===x&&!Ct(x):i(x,p)))var p=x,S=m}return S}function Nd(t,r,i,d){var f=t.length;for(i=le(i),i<0&&(i=-i>f?0:f+i),d=d===a||d>f?f:le(d),d<0&&(d+=f),d=i>d?0:H1(d);i<d;)t[i++]=r;return t}function Cs(t,r){var i=[];return gn(t,function(d,f,m){r(d,f,m)&&i.push(d)}),i}function nt(t,r,i,d,f){var m=-1,x=t.length;for(i||(i=jh),f||(f=[]);++m<x;){var p=t[m];r>0&&i(p)?r>1?nt(p,r-1,i,d,f):dn(f,p):d||(f[f.length]=p)}return f}var _0=Ys(),ys=Ys(!0);function Ut(t,r){return t&&_0(t,r,Pe)}function j0(t,r){return t&&ys(t,r,Pe)}function lo(t,r){return un(r,function(i){return nn(t[i])})}function jn(t,r){r=wn(r,t);for(var i=0,d=r.length;t!=null&&i<d;)t=t[Gt(r[i++])];return i&&i==d?t:a}function Ss(t,r,i){var d=r(t);return ie(t)?d:dn(d,i(t))}function lt(t){return t==null?t===a?ur:_t:yn&&yn in Le(t)?$h(t):Vh(t)}function A0(t,r){return t>r}function Fd(t,r){return t!=null&&Te.call(t,r)}function zd(t,r){return t!=null&&r in Le(t)}function Wd(t,r,i){return t>=ot(r,i)&&t<Qe(r,i)}function I0(t,r,i){for(var d=i?d0:Ur,f=t[0].length,m=t.length,x=m,p=E(m),S=1/0,O=[];x--;){var H=t[x];x&&r&&(H=He(H,bt(r))),S=ot(H.length,S),p[x]=!i&&(r||f>=120&&H.length>=120)?new Rn(x&&H):a}H=t[0];var N=-1,k=p[0];e:for(;++N<f&&O.length<S;){var G=H[N],Q=r?r(G):G;if(G=i||G!==0?G:0,!(k?dr(k,Q):d(O,Q,i))){for(x=m;--x;){var de=p[x];if(!(de?dr(de,Q):d(t[x],Q,i)))continue e}k&&k.push(Q),O.push(G)}}return O}function kd(t,r,i,d){return Ut(t,function(f,m,x){r(d,i(f),m,x)}),d}function pr(t,r,i){r=wn(r,t),t=d1(t,r);var d=t==null?t:t[Gt(Lt(r))];return d==null?a:pt(d,t,i)}function Rs(t){return We(t)&&lt(t)==Ne}function Ud(t){return We(t)&&lt(t)==Zt}function qd(t){return We(t)&&lt(t)==Se}function br(t,r,i,d,f){return t===r?!0:t==null||r==null||!We(t)&&!We(r)?t!==t&&r!==r:Gd(t,r,i,d,br,f)}function Gd(t,r,i,d,f,m){var x=ie(t),p=ie(r),S=x?Ye:at(t),O=p?Ye:at(r);S=S==Ne?Ze:S,O=O==Ne?Ze:O;var H=S==Ze,N=O==Ze,k=S==O;if(k&&vn(t)){if(!vn(r))return!1;x=!0,H=!1}if(k&&!H)return m||(m=new Bt),x||Qn(t)?o1(t,r,i,d,f,m):ph(t,r,S,i,d,f,m);if(!(i&T)){var G=H&&Te.call(t,"__wrapped__"),Q=N&&Te.call(r,"__wrapped__");if(G||Q){var de=G?t.value():t,J=Q?r.value():r;return m||(m=new Bt),f(de,J,i,d,m)}}return k?(m||(m=new Bt),bh(t,r,i,d,f,m)):!1}function Kd(t){return We(t)&&at(t)==Ee}function T0(t,r,i,d){var f=i.length,m=f,x=!d;if(t==null)return!m;for(t=Le(t);f--;){var p=i[f];if(x&&p[2]?p[1]!==t[p[0]]:!(p[0]in t))return!1}for(;++f<m;){p=i[f];var S=p[0],O=t[S],H=p[1];if(x&&p[2]){if(O===a&&!(S in t))return!1}else{var N=new Bt;if(d)var k=d(O,H,S,t,r,N);if(!(k===a?br(H,O,T|M,d,N):k))return!1}}return!0}function _s(t){if(!Fe(t)||Ih(t))return!1;var r=nn(t)?Ku:O2;return r.test(In(t))}function Yd(t){return We(t)&&lt(t)==ln}function Zd(t){return We(t)&&at(t)==ct}function Xd(t){return We(t)&&jo(t.length)&&!!Be[lt(t)]}function js(t){return typeof t=="function"?t:t==null?wt:typeof t=="object"?ie(t)?Ts(t[0],t[1]):Is(t):Z1(t)}function M0(t){if(!yr(t))return Pu(t);var r=[];for(var i in Le(t))Te.call(t,i)&&i!="constructor"&&r.push(i);return r}function Qd(t){if(!Fe(t))return Lh(t);var r=yr(t),i=[];for(var d in t)d=="constructor"&&(r||!Te.call(t,d))||i.push(d);return i}function E0(t,r){return t<r}function As(t,r){var i=-1,d=gt(t)?E(t.length):[];return gn(t,function(f,m,x){d[++i]=r(f,m,x)}),d}function Is(t){var r=K0(t);return r.length==1&&r[0][2]?l1(r[0][0],r[0][1]):function(i){return i===t||T0(i,t,r)}}function Ts(t,r){return Z0(t)&&c1(r)?l1(Gt(t),r):function(i){var d=aa(i,t);return d===a&&d===r?ia(i,t):br(r,d,T|M)}}function uo(t,r,i,d,f){t!==r&&_0(r,function(m,x){if(f||(f=new Bt),Fe(m))Jd(t,r,x,i,uo,d,f);else{var p=d?d(Q0(t,x),m,x+"",t,r,f):a;p===a&&(p=m),S0(t,x,p)}},mt)}function Jd(t,r,i,d,f,m,x){var p=Q0(t,i),S=Q0(r,i),O=x.get(S);if(O){S0(t,i,O);return}var H=m?m(p,S,i+"",t,r,x):a,N=H===a;if(N){var k=ie(S),G=!k&&vn(S),Q=!k&&!G&&Qn(S);H=S,k||G||Q?ie(p)?H=p:ke(p)?H=ft(p):G?(N=!1,H=Ws(S,!0)):Q?(N=!1,H=ks(S,!0)):H=[]:Rr(S)||Tn(S)?(H=p,Tn(p)?H=N1(p):(!Fe(p)||nn(p))&&(H=s1(S))):N=!1}N&&(x.set(S,H),f(H,S,d,m,x),x.delete(S)),S0(t,i,H)}function Ms(t,r){var i=t.length;if(i)return r+=r<0?i:0,tn(r,i)?t[r]:a}function Es(t,r,i){r.length?r=He(r,function(m){return ie(m)?function(x){return jn(x,m.length===1?m[0]:m)}:m}):r=[wt];var d=-1;r=He(r,bt(Z()));var f=As(t,function(m,x,p){var S=He(r,function(O){return O(m)});return{criteria:S,index:++d,value:m}});return Ru(f,function(m,x){return dh(m,x,i)})}function Pd(t,r){return Ls(t,r,function(i,d){return ia(t,d)})}function Ls(t,r,i){for(var d=-1,f=r.length,m={};++d<f;){var x=r[d],p=jn(t,x);i(p,x)&&$r(m,wn(x,t),p)}return m}function eh(t){return function(r){return jn(r,t)}}function L0(t,r,i,d){var f=d?Su:Fn,m=-1,x=r.length,p=t;for(t===r&&(r=ft(r)),i&&(p=He(t,bt(i)));++m<x;)for(var S=0,O=r[m],H=i?i(O):O;(S=f(p,H,S,d))>-1;)p!==t&&eo.call(p,S,1),eo.call(t,S,1);return t}function Vs(t,r){for(var i=t?r.length:0,d=i-1;i--;){var f=r[i];if(i==d||f!==m){var m=f;tn(f)?eo.call(t,f,1):O0(t,f)}}return t}function V0(t,r){return t+ro(gs()*(r-t+1))}function th(t,r,i,d){for(var f=-1,m=Qe(no((r-t)/(i||1)),0),x=E(m);m--;)x[d?m:++f]=t,t+=i;return x}function D0(t,r){var i="";if(!t||r<1||r>ye)return i;do r%2&&(i+=t),r=ro(r/2),r&&(t+=t);while(r);return i}function fe(t,r){return J0(u1(t,r,wt),t+"")}function nh(t){return xs(Jn(t))}function rh(t,r){var i=Jn(t);return $o(i,_n(r,0,i.length))}function $r(t,r,i,d){if(!Fe(t))return t;r=wn(r,t);for(var f=-1,m=r.length,x=m-1,p=t;p!=null&&++f<m;){var S=Gt(r[f]),O=i;if(S==="__proto__"||S==="constructor"||S==="prototype")return t;if(f!=x){var H=p[S];O=d?d(H,S,p):a,O===a&&(O=Fe(H)?H:tn(r[f+1])?[]:{})}xr(p,S,O),p=p[S]}return t}var Ds=oo?function(t,r){return oo.set(t,r),t}:wt,oh=to?function(t,r){return to(t,"toString",{configurable:!0,enumerable:!1,value:ca(r),writable:!0})}:wt;function ah(t){return $o(Jn(t))}function Et(t,r,i){var d=-1,f=t.length;r<0&&(r=-r>f?0:f+r),i=i>f?f:i,i<0&&(i+=f),f=r>i?0:i-r>>>0,r>>>=0;for(var m=E(f);++d<f;)m[d]=t[d+r];return m}function ih(t,r){var i;return gn(t,function(d,f,m){return i=r(d,f,m),!i}),!!i}function ho(t,r,i){var d=0,f=t==null?d:t.length;if(typeof r=="number"&&r===r&&f<=we){for(;d<f;){var m=d+f>>>1,x=t[m];x!==null&&!Ct(x)&&(i?x<=r:x<r)?d=m+1:f=m}return f}return B0(t,r,wt,i)}function B0(t,r,i,d){var f=0,m=t==null?0:t.length;if(m===0)return 0;r=i(r);for(var x=r!==r,p=r===null,S=Ct(r),O=r===a;f<m;){var H=ro((f+m)/2),N=i(t[H]),k=N!==a,G=N===null,Q=N===N,de=Ct(N);if(x)var J=d||Q;else O?J=Q&&(d||k):p?J=Q&&k&&(d||!G):S?J=Q&&k&&!G&&(d||!de):G||de?J=!1:J=d?N<=r:N<r;J?f=H+1:m=H}return ot(m,Je)}function Bs(t,r){for(var i=-1,d=t.length,f=0,m=[];++i<d;){var x=t[i],p=r?r(x):x;if(!i||!Ot(p,S)){var S=p;m[f++]=x===0?0:x}}return m}function Os(t){return typeof t=="number"?t:Ct(t)?De:+t}function $t(t){if(typeof t=="string")return t;if(ie(t))return He(t,$t)+"";if(Ct(t))return ms?ms.call(t):"";var r=t+"";return r=="0"&&1/t==-me?"-0":r}function mn(t,r,i){var d=-1,f=Ur,m=t.length,x=!0,p=[],S=p;if(i)x=!1,f=d0;else if(m>=o){var O=r?null:xh(t);if(O)return Gr(O);x=!1,f=dr,S=new Rn}else S=r?[]:p;e:for(;++d<m;){var H=t[d],N=r?r(H):H;if(H=i||H!==0?H:0,x&&N===N){for(var k=S.length;k--;)if(S[k]===N)continue e;r&&S.push(N),p.push(H)}else f(S,N,i)||(S!==p&&S.push(N),p.push(H))}return p}function O0(t,r){return r=wn(r,t),t=d1(t,r),t==null||delete t[Gt(Lt(r))]}function Hs(t,r,i,d){return $r(t,r,i(jn(t,r)),d)}function fo(t,r,i,d){for(var f=t.length,m=d?f:-1;(d?m--:++m<f)&&r(t[m],m,t););return i?Et(t,d?0:m,d?m+1:f):Et(t,d?m+1:0,d?f:m)}function Ns(t,r){var i=t;return i instanceof pe&&(i=i.value()),h0(r,function(d,f){return f.func.apply(f.thisArg,dn([d],f.args))},i)}function H0(t,r,i){var d=t.length;if(d<2)return d?mn(t[0]):[];for(var f=-1,m=E(d);++f<d;)for(var x=t[f],p=-1;++p<d;)p!=f&&(m[f]=vr(m[f]||x,t[p],r,i));return mn(nt(m,1),r,i)}function Fs(t,r,i){for(var d=-1,f=t.length,m=r.length,x={};++d<f;){var p=d<m?r[d]:a;i(x,t[d],p)}return x}function N0(t){return ke(t)?t:[]}function F0(t){return typeof t=="function"?t:wt}function wn(t,r){return ie(t)?t:Z0(t,r)?[t]:m1(Ie(t))}var sh=fe;function xn(t,r,i){var d=t.length;return i=i===a?d:i,!r&&i>=d?t:Et(t,r,i)}var zs=Yu||function(t){return tt.clearTimeout(t)};function Ws(t,r){if(r)return t.slice();var i=t.length,d=ls?ls(i):new t.constructor(i);return t.copy(d),d}function z0(t){var r=new t.constructor(t.byteLength);return new Jr(r).set(new Jr(t)),r}function ch(t,r){var i=r?z0(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.byteLength)}function lh(t){var r=new t.constructor(t.source,Ri.exec(t));return r.lastIndex=t.lastIndex,r}function uh(t){return wr?Le(wr.call(t)):{}}function ks(t,r){var i=r?z0(t.buffer):t.buffer;return new t.constructor(i,t.byteOffset,t.length)}function Us(t,r){if(t!==r){var i=t!==a,d=t===null,f=t===t,m=Ct(t),x=r!==a,p=r===null,S=r===r,O=Ct(r);if(!p&&!O&&!m&&t>r||m&&x&&S&&!p&&!O||d&&x&&S||!i&&S||!f)return 1;if(!d&&!m&&!O&&t<r||O&&i&&f&&!d&&!m||p&&i&&f||!x&&f||!S)return-1}return 0}function dh(t,r,i){for(var d=-1,f=t.criteria,m=r.criteria,x=f.length,p=i.length;++d<x;){var S=Us(f[d],m[d]);if(S){if(d>=p)return S;var O=i[d];return S*(O=="desc"?-1:1)}}return t.index-r.index}function qs(t,r,i,d){for(var f=-1,m=t.length,x=i.length,p=-1,S=r.length,O=Qe(m-x,0),H=E(S+O),N=!d;++p<S;)H[p]=r[p];for(;++f<x;)(N||f<m)&&(H[i[f]]=t[f]);for(;O--;)H[p++]=t[f++];return H}function Gs(t,r,i,d){for(var f=-1,m=t.length,x=-1,p=i.length,S=-1,O=r.length,H=Qe(m-p,0),N=E(H+O),k=!d;++f<H;)N[f]=t[f];for(var G=f;++S<O;)N[G+S]=r[S];for(;++x<p;)(k||f<m)&&(N[G+i[x]]=t[f++]);return N}function ft(t,r){var i=-1,d=t.length;for(r||(r=E(d));++i<d;)r[i]=t[i];return r}function qt(t,r,i,d){var f=!i;i||(i={});for(var m=-1,x=r.length;++m<x;){var p=r[m],S=d?d(i[p],t[p],p,i,t):a;S===a&&(S=t[p]),f?Jt(i,p,S):xr(i,p,S)}return i}function hh(t,r){return qt(t,Y0(t),r)}function fh(t,r){return qt(t,a1(t),r)}function go(t,r){return function(i,d){var f=ie(i)?vu:Dd,m=r?r():{};return f(i,t,Z(d,2),m)}}function Yn(t){return fe(function(r,i){var d=-1,f=i.length,m=f>1?i[f-1]:a,x=f>2?i[2]:a;for(m=t.length>3&&typeof m=="function"?(f--,m):a,x&&ut(i[0],i[1],x)&&(m=f<3?a:m,f=1),r=Le(r);++d<f;){var p=i[d];p&&t(r,p,d,m)}return r})}function Ks(t,r){return function(i,d){if(i==null)return i;if(!gt(i))return t(i,d);for(var f=i.length,m=r?f:-1,x=Le(i);(r?m--:++m<f)&&d(x[m],m,x)!==!1;);return i}}function Ys(t){return function(r,i,d){for(var f=-1,m=Le(r),x=d(r),p=x.length;p--;){var S=x[t?p:++f];if(i(m[S],S,m)===!1)break}return r}}function gh(t,r,i){var d=r&V,f=Cr(t);function m(){var x=this&&this!==tt&&this instanceof m?f:t;return x.apply(d?i:this,arguments)}return m}function Zs(t){return function(r){r=Ie(r);var i=zn(r)?Dt(r):a,d=i?i[0]:r.charAt(0),f=i?xn(i,1).join(""):r.slice(1);return d[t]()+f}}function Zn(t){return function(r){return h0(K1(G1(r).replace(ou,"")),t,"")}}function Cr(t){return function(){var r=arguments;switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3]);case 5:return new t(r[0],r[1],r[2],r[3],r[4]);case 6:return new t(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new t(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var i=Kn(t.prototype),d=t.apply(i,r);return Fe(d)?d:i}}function mh(t,r,i){var d=Cr(t);function f(){for(var m=arguments.length,x=E(m),p=m,S=Xn(f);p--;)x[p]=arguments[p];var O=m<3&&x[0]!==S&&x[m-1]!==S?[]:hn(x,S);if(m-=O.length,m<i)return e1(t,r,mo,f.placeholder,a,x,O,a,a,i-m);var H=this&&this!==tt&&this instanceof f?d:t;return pt(H,this,x)}return f}function Xs(t){return function(r,i,d){var f=Le(r);if(!gt(r)){var m=Z(i,3);r=Pe(r),i=function(p){return m(f[p],p,f)}}var x=t(r,i,d);return x>-1?f[m?r[x]:x]:a}}function Qs(t){return en(function(r){var i=r.length,d=i,f=Tt.prototype.thru;for(t&&r.reverse();d--;){var m=r[d];if(typeof m!="function")throw new It(u);if(f&&!x&&po(m)=="wrapper")var x=new Tt([],!0)}for(d=x?d:i;++d<i;){m=r[d];var p=po(m),S=p=="wrapper"?G0(m):a;S&&X0(S[0])&&S[1]==(U|B|z|oe)&&!S[4].length&&S[9]==1?x=x[po(S[0])].apply(x,S[3]):x=m.length==1&&X0(m)?x[p]():x.thru(m)}return function(){var O=arguments,H=O[0];if(x&&O.length==1&&ie(H))return x.plant(H).value();for(var N=0,k=i?r[N].apply(this,O):H;++N<i;)k=r[N].call(this,k);return k}})}function mo(t,r,i,d,f,m,x,p,S,O){var H=r&U,N=r&V,k=r&L,G=r&(B|F),Q=r&se,de=k?a:Cr(t);function J(){for(var ve=arguments.length,be=E(ve),yt=ve;yt--;)be[yt]=arguments[yt];if(G)var dt=Xn(J),St=ju(be,dt);if(d&&(be=qs(be,d,f,G)),m&&(be=Gs(be,m,x,G)),ve-=St,G&&ve<O){var Ue=hn(be,dt);return e1(t,r,mo,J.placeholder,i,be,Ue,p,S,O-ve)}var Ht=N?i:this,on=k?Ht[t]:t;return ve=be.length,p?be=Dh(be,p):Q&&ve>1&&be.reverse(),H&&S<ve&&(be.length=S),this&&this!==tt&&this instanceof J&&(on=de||Cr(on)),on.apply(Ht,be)}return J}function Js(t,r){return function(i,d){return kd(i,t,r(d),{})}}function wo(t,r){return function(i,d){var f;if(i===a&&d===a)return r;if(i!==a&&(f=i),d!==a){if(f===a)return d;typeof i=="string"||typeof d=="string"?(i=$t(i),d=$t(d)):(i=Os(i),d=Os(d)),f=t(i,d)}return f}}function W0(t){return en(function(r){return r=He(r,bt(Z())),fe(function(i){var d=this;return t(r,function(f){return pt(f,d,i)})})})}function xo(t,r){r=r===a?" ":$t(r);var i=r.length;if(i<2)return i?D0(r,t):r;var d=D0(r,no(t/Wn(r)));return zn(r)?xn(Dt(d),0,t).join(""):d.slice(0,t)}function wh(t,r,i,d){var f=r&V,m=Cr(t);function x(){for(var p=-1,S=arguments.length,O=-1,H=d.length,N=E(H+S),k=this&&this!==tt&&this instanceof x?m:t;++O<H;)N[O]=d[O];for(;S--;)N[O++]=arguments[++p];return pt(k,f?i:this,N)}return x}function Ps(t){return function(r,i,d){return d&&typeof d!="number"&&ut(r,i,d)&&(i=d=a),r=rn(r),i===a?(i=r,r=0):i=rn(i),d=d===a?r<i?1:-1:rn(d),th(r,i,d,t)}}function vo(t){return function(r,i){return typeof r=="string"&&typeof i=="string"||(r=Vt(r),i=Vt(i)),t(r,i)}}function e1(t,r,i,d,f,m,x,p,S,O){var H=r&B,N=H?x:a,k=H?a:x,G=H?m:a,Q=H?a:m;r|=H?z:W,r&=~(H?W:z),r&j||(r&=-4);var de=[t,r,f,G,N,Q,k,p,S,O],J=i.apply(a,de);return X0(t)&&h1(J,de),J.placeholder=d,f1(J,t,r)}function k0(t){var r=Xe[t];return function(i,d){if(i=Vt(i),d=d==null?0:ot(le(d),292),d&&fs(i)){var f=(Ie(i)+"e").split("e"),m=r(f[0]+"e"+(+f[1]+d));return f=(Ie(m)+"e").split("e"),+(f[0]+"e"+(+f[1]-d))}return r(i)}}var xh=qn&&1/Gr(new qn([,-0]))[1]==me?function(t){return new qn(t)}:da;function t1(t){return function(r){var i=at(r);return i==Ee?p0(r):i==ct?Vu(r):_u(r,t(r))}}function Pt(t,r,i,d,f,m,x,p){var S=r&L;if(!S&&typeof t!="function")throw new It(u);var O=d?d.length:0;if(O||(r&=-97,d=f=a),x=x===a?x:Qe(le(x),0),p=p===a?p:le(p),O-=f?f.length:0,r&W){var H=d,N=f;d=f=a}var k=S?a:G0(t),G=[t,r,i,d,f,H,N,m,x,p];if(k&&Eh(G,k),t=G[0],r=G[1],i=G[2],d=G[3],f=G[4],p=G[9]=G[9]===a?S?0:t.length:Qe(G[9]-O,0),!p&&r&(B|F)&&(r&=-25),!r||r==V)var Q=gh(t,r,i);else r==B||r==F?Q=mh(t,r,p):(r==z||r==(V|z))&&!f.length?Q=wh(t,r,i,d):Q=mo.apply(a,G);var de=k?Ds:h1;return f1(de(Q,G),t,r)}function n1(t,r,i,d){return t===a||Ot(t,Un[i])&&!Te.call(d,i)?r:t}function r1(t,r,i,d,f,m){return Fe(t)&&Fe(r)&&(m.set(r,t),uo(t,r,a,r1,m),m.delete(r)),t}function vh(t){return Rr(t)?a:t}function o1(t,r,i,d,f,m){var x=i&T,p=t.length,S=r.length;if(p!=S&&!(x&&S>p))return!1;var O=m.get(t),H=m.get(r);if(O&&H)return O==r&&H==t;var N=-1,k=!0,G=i&M?new Rn:a;for(m.set(t,r),m.set(r,t);++N<p;){var Q=t[N],de=r[N];if(d)var J=x?d(de,Q,N,r,t,m):d(Q,de,N,t,r,m);if(J!==a){if(J)continue;k=!1;break}if(G){if(!f0(r,function(ve,be){if(!dr(G,be)&&(Q===ve||f(Q,ve,i,d,m)))return G.push(be)})){k=!1;break}}else if(!(Q===de||f(Q,de,i,d,m))){k=!1;break}}return m.delete(t),m.delete(r),k}function ph(t,r,i,d,f,m,x){switch(i){case Ge:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case Zt:return!(t.byteLength!=r.byteLength||!m(new Jr(t),new Jr(r)));case xe:case Se:case Ae:return Ot(+t,+r);case ge:return t.name==r.name&&t.message==r.message;case ln:case kt:return t==r+"";case Ee:var p=p0;case ct:var S=d&T;if(p||(p=Gr),t.size!=r.size&&!S)return!1;var O=x.get(t);if(O)return O==r;d|=M,x.set(t,r);var H=o1(p(t),p(r),d,f,m,x);return x.delete(t),H;case Hn:if(wr)return wr.call(t)==wr.call(r)}return!1}function bh(t,r,i,d,f,m){var x=i&T,p=U0(t),S=p.length,O=U0(r),H=O.length;if(S!=H&&!x)return!1;for(var N=S;N--;){var k=p[N];if(!(x?k in r:Te.call(r,k)))return!1}var G=m.get(t),Q=m.get(r);if(G&&Q)return G==r&&Q==t;var de=!0;m.set(t,r),m.set(r,t);for(var J=x;++N<S;){k=p[N];var ve=t[k],be=r[k];if(d)var yt=x?d(be,ve,k,r,t,m):d(ve,be,k,t,r,m);if(!(yt===a?ve===be||f(ve,be,i,d,m):yt)){de=!1;break}J||(J=k=="constructor")}if(de&&!J){var dt=t.constructor,St=r.constructor;dt!=St&&"constructor"in t&&"constructor"in r&&!(typeof dt=="function"&&dt instanceof dt&&typeof St=="function"&&St instanceof St)&&(de=!1)}return m.delete(t),m.delete(r),de}function en(t){return J0(u1(t,a,p1),t+"")}function U0(t){return Ss(t,Pe,Y0)}function q0(t){return Ss(t,mt,a1)}var G0=oo?function(t){return oo.get(t)}:da;function po(t){for(var r=t.name+"",i=Gn[r],d=Te.call(Gn,r)?i.length:0;d--;){var f=i[d],m=f.func;if(m==null||m==t)return f.name}return r}function Xn(t){var r=Te.call(g,"placeholder")?g:t;return r.placeholder}function Z(){var t=g.iteratee||la;return t=t===la?js:t,arguments.length?t(arguments[0],arguments[1]):t}function bo(t,r){var i=t.__data__;return Ah(r)?i[typeof r=="string"?"string":"hash"]:i.map}function K0(t){for(var r=Pe(t),i=r.length;i--;){var d=r[i],f=t[d];r[i]=[d,f,c1(f)]}return r}function An(t,r){var i=Mu(t,r);return _s(i)?i:a}function $h(t){var r=Te.call(t,yn),i=t[yn];try{t[yn]=a;var d=!0}catch{}var f=Xr.call(t);return d&&(r?t[yn]=i:delete t[yn]),f}var Y0=$0?function(t){return t==null?[]:(t=Le(t),un($0(t),function(r){return ds.call(t,r)}))}:ha,a1=$0?function(t){for(var r=[];t;)dn(r,Y0(t)),t=Pr(t);return r}:ha,at=lt;(C0&&at(new C0(new ArrayBuffer(1)))!=Ge||fr&&at(new fr)!=Ee||y0&&at(y0.resolve())!=lr||qn&&at(new qn)!=ct||gr&&at(new gr)!=$n)&&(at=function(t){var r=lt(t),i=r==Ze?t.constructor:a,d=i?In(i):"";if(d)switch(d){case rd:return Ge;case od:return Ee;case ad:return lr;case id:return ct;case sd:return $n}return r});function Ch(t,r,i){for(var d=-1,f=i.length;++d<f;){var m=i[d],x=m.size;switch(m.type){case"drop":t+=x;break;case"dropRight":r-=x;break;case"take":r=ot(r,t+x);break;case"takeRight":t=Qe(t,r-x);break}}return{start:t,end:r}}function yh(t){var r=t.match(I2);return r?r[1].split(T2):[]}function i1(t,r,i){r=wn(r,t);for(var d=-1,f=r.length,m=!1;++d<f;){var x=Gt(r[d]);if(!(m=t!=null&&i(t,x)))break;t=t[x]}return m||++d!=f?m:(f=t==null?0:t.length,!!f&&jo(f)&&tn(x,f)&&(ie(t)||Tn(t)))}function Sh(t){var r=t.length,i=new t.constructor(r);return r&&typeof t[0]=="string"&&Te.call(t,"index")&&(i.index=t.index,i.input=t.input),i}function s1(t){return typeof t.constructor=="function"&&!yr(t)?Kn(Pr(t)):{}}function Rh(t,r,i){var d=t.constructor;switch(r){case Zt:return z0(t);case xe:case Se:return new d(+t);case Ge:return ch(t,i);case Ko:case Yo:case Zo:case Xo:case Qo:case Jo:case Po:case e0:case t0:return ks(t,i);case Ee:return new d;case Ae:case kt:return new d(t);case ln:return lh(t);case ct:return new d;case Hn:return uh(t)}}function _h(t,r){var i=r.length;if(!i)return t;var d=i-1;return r[d]=(i>1?"& ":"")+r[d],r=r.join(i>2?", ":" "),t.replace(A2,`{
/* [wrapped with `+r+`] */
`)}function jh(t){return ie(t)||Tn(t)||!!(hs&&t&&t[hs])}function tn(t,r){var i=typeof t;return r=r??ye,!!r&&(i=="number"||i!="symbol"&&N2.test(t))&&t>-1&&t%1==0&&t<r}function ut(t,r,i){if(!Fe(i))return!1;var d=typeof r;return(d=="number"?gt(i)&&tn(r,i.length):d=="string"&&r in i)?Ot(i[r],t):!1}function Z0(t,r){if(ie(t))return!1;var i=typeof t;return i=="number"||i=="symbol"||i=="boolean"||t==null||Ct(t)?!0:S2.test(t)||!y2.test(t)||r!=null&&t in Le(r)}function Ah(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}function X0(t){var r=po(t),i=g[r];if(typeof i!="function"||!(r in pe.prototype))return!1;if(t===i)return!0;var d=G0(i);return!!d&&t===d[0]}function Ih(t){return!!cs&&cs in t}var Th=Yr?nn:fa;function yr(t){var r=t&&t.constructor,i=typeof r=="function"&&r.prototype||Un;return t===i}function c1(t){return t===t&&!Fe(t)}function l1(t,r){return function(i){return i==null?!1:i[t]===r&&(r!==a||t in Le(i))}}function Mh(t){var r=Ro(t,function(d){return i.size===R&&i.clear(),d}),i=r.cache;return r}function Eh(t,r){var i=t[1],d=r[1],f=i|d,m=f<(V|L|U),x=d==U&&i==B||d==U&&i==oe&&t[7].length<=r[8]||d==(U|oe)&&r[7].length<=r[8]&&i==B;if(!(m||x))return t;d&V&&(t[2]=r[2],f|=i&V?0:j);var p=r[3];if(p){var S=t[3];t[3]=S?qs(S,p,r[4]):p,t[4]=S?hn(t[3],C):r[4]}return p=r[5],p&&(S=t[5],t[5]=S?Gs(S,p,r[6]):p,t[6]=S?hn(t[5],C):r[6]),p=r[7],p&&(t[7]=p),d&U&&(t[8]=t[8]==null?r[8]:ot(t[8],r[8])),t[9]==null&&(t[9]=r[9]),t[0]=r[0],t[1]=f,t}function Lh(t){var r=[];if(t!=null)for(var i in Le(t))r.push(i);return r}function Vh(t){return Xr.call(t)}function u1(t,r,i){return r=Qe(r===a?t.length-1:r,0),function(){for(var d=arguments,f=-1,m=Qe(d.length-r,0),x=E(m);++f<m;)x[f]=d[r+f];f=-1;for(var p=E(r+1);++f<r;)p[f]=d[f];return p[r]=i(x),pt(t,this,p)}}function d1(t,r){return r.length<2?t:jn(t,Et(r,0,-1))}function Dh(t,r){for(var i=t.length,d=ot(r.length,i),f=ft(t);d--;){var m=r[d];t[d]=tn(m,i)?f[m]:a}return t}function Q0(t,r){if(!(r==="constructor"&&typeof t[r]=="function")&&r!="__proto__")return t[r]}var h1=g1(Ds),Sr=Xu||function(t,r){return tt.setTimeout(t,r)},J0=g1(oh);function f1(t,r,i){var d=r+"";return J0(t,_h(d,Bh(yh(d),i)))}function g1(t){var r=0,i=0;return function(){var d=ed(),f=P-(d-i);if(i=d,f>0){if(++r>=ne)return arguments[0]}else r=0;return t.apply(a,arguments)}}function $o(t,r){var i=-1,d=t.length,f=d-1;for(r=r===a?d:r;++i<r;){var m=V0(i,f),x=t[m];t[m]=t[i],t[i]=x}return t.length=r,t}var m1=Mh(function(t){var r=[];return t.charCodeAt(0)===46&&r.push(""),t.replace(R2,function(i,d,f,m){r.push(f?m.replace(L2,"$1"):d||i)}),r});function Gt(t){if(typeof t=="string"||Ct(t))return t;var r=t+"";return r=="0"&&1/t==-me?"-0":r}function In(t){if(t!=null){try{return Zr.call(t)}catch{}try{return t+""}catch{}}return""}function Bh(t,r){return At(ze,function(i){var d="_."+i[0];r&i[1]&&!Ur(t,d)&&t.push(d)}),t.sort()}function w1(t){if(t instanceof pe)return t.clone();var r=new Tt(t.__wrapped__,t.__chain__);return r.__actions__=ft(t.__actions__),r.__index__=t.__index__,r.__values__=t.__values__,r}function Oh(t,r,i){(i?ut(t,r,i):r===a)?r=1:r=Qe(le(r),0);var d=t==null?0:t.length;if(!d||r<1)return[];for(var f=0,m=0,x=E(no(d/r));f<d;)x[m++]=Et(t,f,f+=r);return x}function Hh(t){for(var r=-1,i=t==null?0:t.length,d=0,f=[];++r<i;){var m=t[r];m&&(f[d++]=m)}return f}function Nh(){var t=arguments.length;if(!t)return[];for(var r=E(t-1),i=arguments[0],d=t;d--;)r[d-1]=arguments[d];return dn(ie(i)?ft(i):[i],nt(r,1))}var Fh=fe(function(t,r){return ke(t)?vr(t,nt(r,1,ke,!0)):[]}),zh=fe(function(t,r){var i=Lt(r);return ke(i)&&(i=a),ke(t)?vr(t,nt(r,1,ke,!0),Z(i,2)):[]}),Wh=fe(function(t,r){var i=Lt(r);return ke(i)&&(i=a),ke(t)?vr(t,nt(r,1,ke,!0),a,i):[]});function kh(t,r,i){var d=t==null?0:t.length;return d?(r=i||r===a?1:le(r),Et(t,r<0?0:r,d)):[]}function Uh(t,r,i){var d=t==null?0:t.length;return d?(r=i||r===a?1:le(r),r=d-r,Et(t,0,r<0?0:r)):[]}function qh(t,r){return t&&t.length?fo(t,Z(r,3),!0,!0):[]}function Gh(t,r){return t&&t.length?fo(t,Z(r,3),!0):[]}function Kh(t,r,i,d){var f=t==null?0:t.length;return f?(i&&typeof i!="number"&&ut(t,r,i)&&(i=0,d=f),Nd(t,r,i,d)):[]}function x1(t,r,i){var d=t==null?0:t.length;if(!d)return-1;var f=i==null?0:le(i);return f<0&&(f=Qe(d+f,0)),qr(t,Z(r,3),f)}function v1(t,r,i){var d=t==null?0:t.length;if(!d)return-1;var f=d-1;return i!==a&&(f=le(i),f=i<0?Qe(d+f,0):ot(f,d-1)),qr(t,Z(r,3),f,!0)}function p1(t){var r=t==null?0:t.length;return r?nt(t,1):[]}function Yh(t){var r=t==null?0:t.length;return r?nt(t,me):[]}function Zh(t,r){var i=t==null?0:t.length;return i?(r=r===a?1:le(r),nt(t,r)):[]}function Xh(t){for(var r=-1,i=t==null?0:t.length,d={};++r<i;){var f=t[r];d[f[0]]=f[1]}return d}function b1(t){return t&&t.length?t[0]:a}function Qh(t,r,i){var d=t==null?0:t.length;if(!d)return-1;var f=i==null?0:le(i);return f<0&&(f=Qe(d+f,0)),Fn(t,r,f)}function Jh(t){var r=t==null?0:t.length;return r?Et(t,0,-1):[]}var Ph=fe(function(t){var r=He(t,N0);return r.length&&r[0]===t[0]?I0(r):[]}),ef=fe(function(t){var r=Lt(t),i=He(t,N0);return r===Lt(i)?r=a:i.pop(),i.length&&i[0]===t[0]?I0(i,Z(r,2)):[]}),tf=fe(function(t){var r=Lt(t),i=He(t,N0);return r=typeof r=="function"?r:a,r&&i.pop(),i.length&&i[0]===t[0]?I0(i,a,r):[]});function nf(t,r){return t==null?"":Ju.call(t,r)}function Lt(t){var r=t==null?0:t.length;return r?t[r-1]:a}function rf(t,r,i){var d=t==null?0:t.length;if(!d)return-1;var f=d;return i!==a&&(f=le(i),f=f<0?Qe(d+f,0):ot(f,d-1)),r===r?Bu(t,r,f):qr(t,es,f,!0)}function of(t,r){return t&&t.length?Ms(t,le(r)):a}var af=fe($1);function $1(t,r){return t&&t.length&&r&&r.length?L0(t,r):t}function sf(t,r,i){return t&&t.length&&r&&r.length?L0(t,r,Z(i,2)):t}function cf(t,r,i){return t&&t.length&&r&&r.length?L0(t,r,a,i):t}var lf=en(function(t,r){var i=t==null?0:t.length,d=R0(t,r);return Vs(t,He(r,function(f){return tn(f,i)?+f:f}).sort(Us)),d});function uf(t,r){var i=[];if(!(t&&t.length))return i;var d=-1,f=[],m=t.length;for(r=Z(r,3);++d<m;){var x=t[d];r(x,d,t)&&(i.push(x),f.push(d))}return Vs(t,f),i}function P0(t){return t==null?t:nd.call(t)}function df(t,r,i){var d=t==null?0:t.length;return d?(i&&typeof i!="number"&&ut(t,r,i)?(r=0,i=d):(r=r==null?0:le(r),i=i===a?d:le(i)),Et(t,r,i)):[]}function hf(t,r){return ho(t,r)}function ff(t,r,i){return B0(t,r,Z(i,2))}function gf(t,r){var i=t==null?0:t.length;if(i){var d=ho(t,r);if(d<i&&Ot(t[d],r))return d}return-1}function mf(t,r){return ho(t,r,!0)}function wf(t,r,i){return B0(t,r,Z(i,2),!0)}function xf(t,r){var i=t==null?0:t.length;if(i){var d=ho(t,r,!0)-1;if(Ot(t[d],r))return d}return-1}function vf(t){return t&&t.length?Bs(t):[]}function pf(t,r){return t&&t.length?Bs(t,Z(r,2)):[]}function bf(t){var r=t==null?0:t.length;return r?Et(t,1,r):[]}function $f(t,r,i){return t&&t.length?(r=i||r===a?1:le(r),Et(t,0,r<0?0:r)):[]}function Cf(t,r,i){var d=t==null?0:t.length;return d?(r=i||r===a?1:le(r),r=d-r,Et(t,r<0?0:r,d)):[]}function yf(t,r){return t&&t.length?fo(t,Z(r,3),!1,!0):[]}function Sf(t,r){return t&&t.length?fo(t,Z(r,3)):[]}var Rf=fe(function(t){return mn(nt(t,1,ke,!0))}),_f=fe(function(t){var r=Lt(t);return ke(r)&&(r=a),mn(nt(t,1,ke,!0),Z(r,2))}),jf=fe(function(t){var r=Lt(t);return r=typeof r=="function"?r:a,mn(nt(t,1,ke,!0),a,r)});function Af(t){return t&&t.length?mn(t):[]}function If(t,r){return t&&t.length?mn(t,Z(r,2)):[]}function Tf(t,r){return r=typeof r=="function"?r:a,t&&t.length?mn(t,a,r):[]}function ea(t){if(!(t&&t.length))return[];var r=0;return t=un(t,function(i){if(ke(i))return r=Qe(i.length,r),!0}),x0(r,function(i){return He(t,g0(i))})}function C1(t,r){if(!(t&&t.length))return[];var i=ea(t);return r==null?i:He(i,function(d){return pt(r,a,d)})}var Mf=fe(function(t,r){return ke(t)?vr(t,r):[]}),Ef=fe(function(t){return H0(un(t,ke))}),Lf=fe(function(t){var r=Lt(t);return ke(r)&&(r=a),H0(un(t,ke),Z(r,2))}),Vf=fe(function(t){var r=Lt(t);return r=typeof r=="function"?r:a,H0(un(t,ke),a,r)}),Df=fe(ea);function Bf(t,r){return Fs(t||[],r||[],xr)}function Of(t,r){return Fs(t||[],r||[],$r)}var Hf=fe(function(t){var r=t.length,i=r>1?t[r-1]:a;return i=typeof i=="function"?(t.pop(),i):a,C1(t,i)});function y1(t){var r=g(t);return r.__chain__=!0,r}function Nf(t,r){return r(t),t}function Co(t,r){return r(t)}var Ff=en(function(t){var r=t.length,i=r?t[0]:0,d=this.__wrapped__,f=function(m){return R0(m,t)};return r>1||this.__actions__.length||!(d instanceof pe)||!tn(i)?this.thru(f):(d=d.slice(i,+i+(r?1:0)),d.__actions__.push({func:Co,args:[f],thisArg:a}),new Tt(d,this.__chain__).thru(function(m){return r&&!m.length&&m.push(a),m}))});function zf(){return y1(this)}function Wf(){return new Tt(this.value(),this.__chain__)}function kf(){this.__values__===a&&(this.__values__=O1(this.value()));var t=this.__index__>=this.__values__.length,r=t?a:this.__values__[this.__index__++];return{done:t,value:r}}function Uf(){return this}function qf(t){for(var r,i=this;i instanceof io;){var d=w1(i);d.__index__=0,d.__values__=a,r?f.__wrapped__=d:r=d;var f=d;i=i.__wrapped__}return f.__wrapped__=t,r}function Gf(){var t=this.__wrapped__;if(t instanceof pe){var r=t;return this.__actions__.length&&(r=new pe(this)),r=r.reverse(),r.__actions__.push({func:Co,args:[P0],thisArg:a}),new Tt(r,this.__chain__)}return this.thru(P0)}function Kf(){return Ns(this.__wrapped__,this.__actions__)}var Yf=go(function(t,r,i){Te.call(t,i)?++t[i]:Jt(t,i,1)});function Zf(t,r,i){var d=ie(t)?Ji:Hd;return i&&ut(t,r,i)&&(r=a),d(t,Z(r,3))}function Xf(t,r){var i=ie(t)?un:Cs;return i(t,Z(r,3))}var Qf=Xs(x1),Jf=Xs(v1);function Pf(t,r){return nt(yo(t,r),1)}function e5(t,r){return nt(yo(t,r),me)}function t5(t,r,i){return i=i===a?1:le(i),nt(yo(t,r),i)}function S1(t,r){var i=ie(t)?At:gn;return i(t,Z(r,3))}function R1(t,r){var i=ie(t)?pu:$s;return i(t,Z(r,3))}var n5=go(function(t,r,i){Te.call(t,i)?t[i].push(r):Jt(t,i,[r])});function r5(t,r,i,d){t=gt(t)?t:Jn(t),i=i&&!d?le(i):0;var f=t.length;return i<0&&(i=Qe(f+i,0)),Ao(t)?i<=f&&t.indexOf(r,i)>-1:!!f&&Fn(t,r,i)>-1}var o5=fe(function(t,r,i){var d=-1,f=typeof r=="function",m=gt(t)?E(t.length):[];return gn(t,function(x){m[++d]=f?pt(r,x,i):pr(x,r,i)}),m}),a5=go(function(t,r,i){Jt(t,i,r)});function yo(t,r){var i=ie(t)?He:As;return i(t,Z(r,3))}function i5(t,r,i,d){return t==null?[]:(ie(r)||(r=r==null?[]:[r]),i=d?a:i,ie(i)||(i=i==null?[]:[i]),Es(t,r,i))}var s5=go(function(t,r,i){t[i?0:1].push(r)},function(){return[[],[]]});function c5(t,r,i){var d=ie(t)?h0:ns,f=arguments.length<3;return d(t,Z(r,4),i,f,gn)}function l5(t,r,i){var d=ie(t)?bu:ns,f=arguments.length<3;return d(t,Z(r,4),i,f,$s)}function u5(t,r){var i=ie(t)?un:Cs;return i(t,_o(Z(r,3)))}function d5(t){var r=ie(t)?xs:nh;return r(t)}function h5(t,r,i){(i?ut(t,r,i):r===a)?r=1:r=le(r);var d=ie(t)?Ld:rh;return d(t,r)}function f5(t){var r=ie(t)?Vd:ah;return r(t)}function g5(t){if(t==null)return 0;if(gt(t))return Ao(t)?Wn(t):t.length;var r=at(t);return r==Ee||r==ct?t.size:M0(t).length}function m5(t,r,i){var d=ie(t)?f0:ih;return i&&ut(t,r,i)&&(r=a),d(t,Z(r,3))}var w5=fe(function(t,r){if(t==null)return[];var i=r.length;return i>1&&ut(t,r[0],r[1])?r=[]:i>2&&ut(r[0],r[1],r[2])&&(r=[r[0]]),Es(t,nt(r,1),[])}),So=Zu||function(){return tt.Date.now()};function x5(t,r){if(typeof r!="function")throw new It(u);return t=le(t),function(){if(--t<1)return r.apply(this,arguments)}}function _1(t,r,i){return r=i?a:r,r=t&&r==null?t.length:r,Pt(t,U,a,a,a,a,r)}function j1(t,r){var i;if(typeof r!="function")throw new It(u);return t=le(t),function(){return--t>0&&(i=r.apply(this,arguments)),t<=1&&(r=a),i}}var ta=fe(function(t,r,i){var d=V;if(i.length){var f=hn(i,Xn(ta));d|=z}return Pt(t,d,r,i,f)}),A1=fe(function(t,r,i){var d=V|L;if(i.length){var f=hn(i,Xn(A1));d|=z}return Pt(r,d,t,i,f)});function I1(t,r,i){r=i?a:r;var d=Pt(t,B,a,a,a,a,a,r);return d.placeholder=I1.placeholder,d}function T1(t,r,i){r=i?a:r;var d=Pt(t,F,a,a,a,a,a,r);return d.placeholder=T1.placeholder,d}function M1(t,r,i){var d,f,m,x,p,S,O=0,H=!1,N=!1,k=!0;if(typeof t!="function")throw new It(u);r=Vt(r)||0,Fe(i)&&(H=!!i.leading,N="maxWait"in i,m=N?Qe(Vt(i.maxWait)||0,r):m,k="trailing"in i?!!i.trailing:k);function G(Ue){var Ht=d,on=f;return d=f=a,O=Ue,x=t.apply(on,Ht),x}function Q(Ue){return O=Ue,p=Sr(ve,r),H?G(Ue):x}function de(Ue){var Ht=Ue-S,on=Ue-O,X1=r-Ht;return N?ot(X1,m-on):X1}function J(Ue){var Ht=Ue-S,on=Ue-O;return S===a||Ht>=r||Ht<0||N&&on>=m}function ve(){var Ue=So();if(J(Ue))return be(Ue);p=Sr(ve,de(Ue))}function be(Ue){return p=a,k&&d?G(Ue):(d=f=a,x)}function yt(){p!==a&&zs(p),O=0,d=S=f=p=a}function dt(){return p===a?x:be(So())}function St(){var Ue=So(),Ht=J(Ue);if(d=arguments,f=this,S=Ue,Ht){if(p===a)return Q(S);if(N)return zs(p),p=Sr(ve,r),G(S)}return p===a&&(p=Sr(ve,r)),x}return St.cancel=yt,St.flush=dt,St}var v5=fe(function(t,r){return bs(t,1,r)}),p5=fe(function(t,r,i){return bs(t,Vt(r)||0,i)});function b5(t){return Pt(t,se)}function Ro(t,r){if(typeof t!="function"||r!=null&&typeof r!="function")throw new It(u);var i=function(){var d=arguments,f=r?r.apply(this,d):d[0],m=i.cache;if(m.has(f))return m.get(f);var x=t.apply(this,d);return i.cache=m.set(f,x)||m,x};return i.cache=new(Ro.Cache||Qt),i}Ro.Cache=Qt;function _o(t){if(typeof t!="function")throw new It(u);return function(){var r=arguments;switch(r.length){case 0:return!t.call(this);case 1:return!t.call(this,r[0]);case 2:return!t.call(this,r[0],r[1]);case 3:return!t.call(this,r[0],r[1],r[2])}return!t.apply(this,r)}}function $5(t){return j1(2,t)}var C5=sh(function(t,r){r=r.length==1&&ie(r[0])?He(r[0],bt(Z())):He(nt(r,1),bt(Z()));var i=r.length;return fe(function(d){for(var f=-1,m=ot(d.length,i);++f<m;)d[f]=r[f].call(this,d[f]);return pt(t,this,d)})}),na=fe(function(t,r){var i=hn(r,Xn(na));return Pt(t,z,a,r,i)}),E1=fe(function(t,r){var i=hn(r,Xn(E1));return Pt(t,W,a,r,i)}),y5=en(function(t,r){return Pt(t,oe,a,a,a,r)});function S5(t,r){if(typeof t!="function")throw new It(u);return r=r===a?r:le(r),fe(t,r)}function R5(t,r){if(typeof t!="function")throw new It(u);return r=r==null?0:Qe(le(r),0),fe(function(i){var d=i[r],f=xn(i,0,r);return d&&dn(f,d),pt(t,this,f)})}function _5(t,r,i){var d=!0,f=!0;if(typeof t!="function")throw new It(u);return Fe(i)&&(d="leading"in i?!!i.leading:d,f="trailing"in i?!!i.trailing:f),M1(t,r,{leading:d,maxWait:r,trailing:f})}function j5(t){return _1(t,1)}function A5(t,r){return na(F0(r),t)}function I5(){if(!arguments.length)return[];var t=arguments[0];return ie(t)?t:[t]}function T5(t){return Mt(t,A)}function M5(t,r){return r=typeof r=="function"?r:a,Mt(t,A,r)}function E5(t){return Mt(t,y|A)}function L5(t,r){return r=typeof r=="function"?r:a,Mt(t,y|A,r)}function V5(t,r){return r==null||ps(t,r,Pe(r))}function Ot(t,r){return t===r||t!==t&&r!==r}var D5=vo(A0),B5=vo(function(t,r){return t>=r}),Tn=Rs(function(){return arguments}())?Rs:function(t){return We(t)&&Te.call(t,"callee")&&!ds.call(t,"callee")},ie=E.isArray,O5=Gi?bt(Gi):Ud;function gt(t){return t!=null&&jo(t.length)&&!nn(t)}function ke(t){return We(t)&&gt(t)}function H5(t){return t===!0||t===!1||We(t)&&lt(t)==xe}var vn=Qu||fa,N5=Ki?bt(Ki):qd;function F5(t){return We(t)&&t.nodeType===1&&!Rr(t)}function z5(t){if(t==null)return!0;if(gt(t)&&(ie(t)||typeof t=="string"||typeof t.splice=="function"||vn(t)||Qn(t)||Tn(t)))return!t.length;var r=at(t);if(r==Ee||r==ct)return!t.size;if(yr(t))return!M0(t).length;for(var i in t)if(Te.call(t,i))return!1;return!0}function W5(t,r){return br(t,r)}function k5(t,r,i){i=typeof i=="function"?i:a;var d=i?i(t,r):a;return d===a?br(t,r,a,i):!!d}function ra(t){if(!We(t))return!1;var r=lt(t);return r==ge||r==ae||typeof t.message=="string"&&typeof t.name=="string"&&!Rr(t)}function U5(t){return typeof t=="number"&&fs(t)}function nn(t){if(!Fe(t))return!1;var r=lt(t);return r==Ce||r==rt||r==Y||r==qo}function L1(t){return typeof t=="number"&&t==le(t)}function jo(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ye}function Fe(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}function We(t){return t!=null&&typeof t=="object"}var V1=Yi?bt(Yi):Kd;function q5(t,r){return t===r||T0(t,r,K0(r))}function G5(t,r,i){return i=typeof i=="function"?i:a,T0(t,r,K0(r),i)}function K5(t){return D1(t)&&t!=+t}function Y5(t){if(Th(t))throw new re(l);return _s(t)}function Z5(t){return t===null}function X5(t){return t==null}function D1(t){return typeof t=="number"||We(t)&&lt(t)==Ae}function Rr(t){if(!We(t)||lt(t)!=Ze)return!1;var r=Pr(t);if(r===null)return!0;var i=Te.call(r,"constructor")&&r.constructor;return typeof i=="function"&&i instanceof i&&Zr.call(i)==qu}var oa=Zi?bt(Zi):Yd;function Q5(t){return L1(t)&&t>=-ye&&t<=ye}var B1=Xi?bt(Xi):Zd;function Ao(t){return typeof t=="string"||!ie(t)&&We(t)&&lt(t)==kt}function Ct(t){return typeof t=="symbol"||We(t)&&lt(t)==Hn}var Qn=Qi?bt(Qi):Xd;function J5(t){return t===a}function P5(t){return We(t)&&at(t)==$n}function eg(t){return We(t)&&lt(t)==Go}var tg=vo(E0),ng=vo(function(t,r){return t<=r});function O1(t){if(!t)return[];if(gt(t))return Ao(t)?Dt(t):ft(t);if(hr&&t[hr])return Lu(t[hr]());var r=at(t),i=r==Ee?p0:r==ct?Gr:Jn;return i(t)}function rn(t){if(!t)return t===0?t:0;if(t=Vt(t),t===me||t===-me){var r=t<0?-1:1;return r*Me}return t===t?t:0}function le(t){var r=rn(t),i=r%1;return r===r?i?r-i:r:0}function H1(t){return t?_n(le(t),0,he):0}function Vt(t){if(typeof t=="number")return t;if(Ct(t))return De;if(Fe(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=Fe(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=rs(t);var i=B2.test(t);return i||H2.test(t)?wu(t.slice(2),i?2:8):D2.test(t)?De:+t}function N1(t){return qt(t,mt(t))}function rg(t){return t?_n(le(t),-ye,ye):t===0?t:0}function Ie(t){return t==null?"":$t(t)}var og=Yn(function(t,r){if(yr(r)||gt(r)){qt(r,Pe(r),t);return}for(var i in r)Te.call(r,i)&&xr(t,i,r[i])}),F1=Yn(function(t,r){qt(r,mt(r),t)}),Io=Yn(function(t,r,i,d){qt(r,mt(r),t,d)}),ag=Yn(function(t,r,i,d){qt(r,Pe(r),t,d)}),ig=en(R0);function sg(t,r){var i=Kn(t);return r==null?i:vs(i,r)}var cg=fe(function(t,r){t=Le(t);var i=-1,d=r.length,f=d>2?r[2]:a;for(f&&ut(r[0],r[1],f)&&(d=1);++i<d;)for(var m=r[i],x=mt(m),p=-1,S=x.length;++p<S;){var O=x[p],H=t[O];(H===a||Ot(H,Un[O])&&!Te.call(t,O))&&(t[O]=m[O])}return t}),lg=fe(function(t){return t.push(a,r1),pt(z1,a,t)});function ug(t,r){return Pi(t,Z(r,3),Ut)}function dg(t,r){return Pi(t,Z(r,3),j0)}function hg(t,r){return t==null?t:_0(t,Z(r,3),mt)}function fg(t,r){return t==null?t:ys(t,Z(r,3),mt)}function gg(t,r){return t&&Ut(t,Z(r,3))}function mg(t,r){return t&&j0(t,Z(r,3))}function wg(t){return t==null?[]:lo(t,Pe(t))}function xg(t){return t==null?[]:lo(t,mt(t))}function aa(t,r,i){var d=t==null?a:jn(t,r);return d===a?i:d}function vg(t,r){return t!=null&&i1(t,r,Fd)}function ia(t,r){return t!=null&&i1(t,r,zd)}var pg=Js(function(t,r,i){r!=null&&typeof r.toString!="function"&&(r=Xr.call(r)),t[r]=i},ca(wt)),bg=Js(function(t,r,i){r!=null&&typeof r.toString!="function"&&(r=Xr.call(r)),Te.call(t,r)?t[r].push(i):t[r]=[i]},Z),$g=fe(pr);function Pe(t){return gt(t)?ws(t):M0(t)}function mt(t){return gt(t)?ws(t,!0):Qd(t)}function Cg(t,r){var i={};return r=Z(r,3),Ut(t,function(d,f,m){Jt(i,r(d,f,m),d)}),i}function yg(t,r){var i={};return r=Z(r,3),Ut(t,function(d,f,m){Jt(i,f,r(d,f,m))}),i}var Sg=Yn(function(t,r,i){uo(t,r,i)}),z1=Yn(function(t,r,i,d){uo(t,r,i,d)}),Rg=en(function(t,r){var i={};if(t==null)return i;var d=!1;r=He(r,function(m){return m=wn(m,t),d||(d=m.length>1),m}),qt(t,q0(t),i),d&&(i=Mt(i,y|b|A,vh));for(var f=r.length;f--;)O0(i,r[f]);return i});function _g(t,r){return W1(t,_o(Z(r)))}var jg=en(function(t,r){return t==null?{}:Pd(t,r)});function W1(t,r){if(t==null)return{};var i=He(q0(t),function(d){return[d]});return r=Z(r),Ls(t,i,function(d,f){return r(d,f[0])})}function Ag(t,r,i){r=wn(r,t);var d=-1,f=r.length;for(f||(f=1,t=a);++d<f;){var m=t==null?a:t[Gt(r[d])];m===a&&(d=f,m=i),t=nn(m)?m.call(t):m}return t}function Ig(t,r,i){return t==null?t:$r(t,r,i)}function Tg(t,r,i,d){return d=typeof d=="function"?d:a,t==null?t:$r(t,r,i,d)}var k1=t1(Pe),U1=t1(mt);function Mg(t,r,i){var d=ie(t),f=d||vn(t)||Qn(t);if(r=Z(r,4),i==null){var m=t&&t.constructor;f?i=d?new m:[]:Fe(t)?i=nn(m)?Kn(Pr(t)):{}:i={}}return(f?At:Ut)(t,function(x,p,S){return r(i,x,p,S)}),i}function Eg(t,r){return t==null?!0:O0(t,r)}function Lg(t,r,i){return t==null?t:Hs(t,r,F0(i))}function Vg(t,r,i,d){return d=typeof d=="function"?d:a,t==null?t:Hs(t,r,F0(i),d)}function Jn(t){return t==null?[]:v0(t,Pe(t))}function Dg(t){return t==null?[]:v0(t,mt(t))}function Bg(t,r,i){return i===a&&(i=r,r=a),i!==a&&(i=Vt(i),i=i===i?i:0),r!==a&&(r=Vt(r),r=r===r?r:0),_n(Vt(t),r,i)}function Og(t,r,i){return r=rn(r),i===a?(i=r,r=0):i=rn(i),t=Vt(t),Wd(t,r,i)}function Hg(t,r,i){if(i&&typeof i!="boolean"&&ut(t,r,i)&&(r=i=a),i===a&&(typeof r=="boolean"?(i=r,r=a):typeof t=="boolean"&&(i=t,t=a)),t===a&&r===a?(t=0,r=1):(t=rn(t),r===a?(r=t,t=0):r=rn(r)),t>r){var d=t;t=r,r=d}if(i||t%1||r%1){var f=gs();return ot(t+f*(r-t+mu("1e-"+((f+"").length-1))),r)}return V0(t,r)}var Ng=Zn(function(t,r,i){return r=r.toLowerCase(),t+(i?q1(r):r)});function q1(t){return sa(Ie(t).toLowerCase())}function G1(t){return t=Ie(t),t&&t.replace(F2,Au).replace(au,"")}function Fg(t,r,i){t=Ie(t),r=$t(r);var d=t.length;i=i===a?d:_n(le(i),0,d);var f=i;return i-=r.length,i>=0&&t.slice(i,f)==r}function zg(t){return t=Ie(t),t&&b2.test(t)?t.replace(yi,Iu):t}function Wg(t){return t=Ie(t),t&&_2.test(t)?t.replace(n0,"\\$&"):t}var kg=Zn(function(t,r,i){return t+(i?"-":"")+r.toLowerCase()}),Ug=Zn(function(t,r,i){return t+(i?" ":"")+r.toLowerCase()}),qg=Zs("toLowerCase");function Gg(t,r,i){t=Ie(t),r=le(r);var d=r?Wn(t):0;if(!r||d>=r)return t;var f=(r-d)/2;return xo(ro(f),i)+t+xo(no(f),i)}function Kg(t,r,i){t=Ie(t),r=le(r);var d=r?Wn(t):0;return r&&d<r?t+xo(r-d,i):t}function Yg(t,r,i){t=Ie(t),r=le(r);var d=r?Wn(t):0;return r&&d<r?xo(r-d,i)+t:t}function Zg(t,r,i){return i||r==null?r=0:r&&(r=+r),td(Ie(t).replace(r0,""),r||0)}function Xg(t,r,i){return(i?ut(t,r,i):r===a)?r=1:r=le(r),D0(Ie(t),r)}function Qg(){var t=arguments,r=Ie(t[0]);return t.length<3?r:r.replace(t[1],t[2])}var Jg=Zn(function(t,r,i){return t+(i?"_":"")+r.toLowerCase()});function Pg(t,r,i){return i&&typeof i!="number"&&ut(t,r,i)&&(r=i=a),i=i===a?he:i>>>0,i?(t=Ie(t),t&&(typeof r=="string"||r!=null&&!oa(r))&&(r=$t(r),!r&&zn(t))?xn(Dt(t),0,i):t.split(r,i)):[]}var e3=Zn(function(t,r,i){return t+(i?" ":"")+sa(r)});function t3(t,r,i){return t=Ie(t),i=i==null?0:_n(le(i),0,t.length),r=$t(r),t.slice(i,i+r.length)==r}function n3(t,r,i){var d=g.templateSettings;i&&ut(t,r,i)&&(r=a),t=Ie(t),r=Io({},r,d,n1);var f=Io({},r.imports,d.imports,n1),m=Pe(f),x=v0(f,m),p,S,O=0,H=r.interpolate||zr,N="__p += '",k=b0((r.escape||zr).source+"|"+H.source+"|"+(H===Si?V2:zr).source+"|"+(r.evaluate||zr).source+"|$","g"),G="//# sourceURL="+(Te.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++uu+"]")+`
`;t.replace(k,function(J,ve,be,yt,dt,St){return be||(be=yt),N+=t.slice(O,St).replace(z2,Tu),ve&&(p=!0,N+=`' +
__e(`+ve+`) +
'`),dt&&(S=!0,N+=`';
`+dt+`;
__p += '`),be&&(N+=`' +
((__t = (`+be+`)) == null ? '' : __t) +
'`),O=St+J.length,J}),N+=`';
`;var Q=Te.call(r,"variable")&&r.variable;if(!Q)N=`with (obj) {
`+N+`
}
`;else if(E2.test(Q))throw new re(w);N=(S?N.replace(w2,""):N).replace(x2,"$1").replace(v2,"$1;"),N="function("+(Q||"obj")+`) {
`+(Q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(p?", __e = _.escape":"")+(S?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+N+`return __p
}`;var de=Y1(function(){return Re(m,G+"return "+N).apply(a,x)});if(de.source=N,ra(de))throw de;return de}function r3(t){return Ie(t).toLowerCase()}function o3(t){return Ie(t).toUpperCase()}function a3(t,r,i){if(t=Ie(t),t&&(i||r===a))return rs(t);if(!t||!(r=$t(r)))return t;var d=Dt(t),f=Dt(r),m=os(d,f),x=as(d,f)+1;return xn(d,m,x).join("")}function i3(t,r,i){if(t=Ie(t),t&&(i||r===a))return t.slice(0,ss(t)+1);if(!t||!(r=$t(r)))return t;var d=Dt(t),f=as(d,Dt(r))+1;return xn(d,0,f).join("")}function s3(t,r,i){if(t=Ie(t),t&&(i||r===a))return t.replace(r0,"");if(!t||!(r=$t(r)))return t;var d=Dt(t),f=os(d,Dt(r));return xn(d,f).join("")}function c3(t,r){var i=ce,d=$e;if(Fe(r)){var f="separator"in r?r.separator:f;i="length"in r?le(r.length):i,d="omission"in r?$t(r.omission):d}t=Ie(t);var m=t.length;if(zn(t)){var x=Dt(t);m=x.length}if(i>=m)return t;var p=i-Wn(d);if(p<1)return d;var S=x?xn(x,0,p).join(""):t.slice(0,p);if(f===a)return S+d;if(x&&(p+=S.length-p),oa(f)){if(t.slice(p).search(f)){var O,H=S;for(f.global||(f=b0(f.source,Ie(Ri.exec(f))+"g")),f.lastIndex=0;O=f.exec(H);)var N=O.index;S=S.slice(0,N===a?p:N)}}else if(t.indexOf($t(f),p)!=p){var k=S.lastIndexOf(f);k>-1&&(S=S.slice(0,k))}return S+d}function l3(t){return t=Ie(t),t&&p2.test(t)?t.replace(Ci,Ou):t}var u3=Zn(function(t,r,i){return t+(i?" ":"")+r.toUpperCase()}),sa=Zs("toUpperCase");function K1(t,r,i){return t=Ie(t),r=i?a:r,r===a?Eu(t)?Fu(t):yu(t):t.match(r)||[]}var Y1=fe(function(t,r){try{return pt(t,a,r)}catch(i){return ra(i)?i:new re(i)}}),d3=en(function(t,r){return At(r,function(i){i=Gt(i),Jt(t,i,ta(t[i],t))}),t});function h3(t){var r=t==null?0:t.length,i=Z();return t=r?He(t,function(d){if(typeof d[1]!="function")throw new It(u);return[i(d[0]),d[1]]}):[],fe(function(d){for(var f=-1;++f<r;){var m=t[f];if(pt(m[0],this,d))return pt(m[1],this,d)}})}function f3(t){return Od(Mt(t,y))}function ca(t){return function(){return t}}function g3(t,r){return t==null||t!==t?r:t}var m3=Qs(),w3=Qs(!0);function wt(t){return t}function la(t){return js(typeof t=="function"?t:Mt(t,y))}function x3(t){return Is(Mt(t,y))}function v3(t,r){return Ts(t,Mt(r,y))}var p3=fe(function(t,r){return function(i){return pr(i,t,r)}}),b3=fe(function(t,r){return function(i){return pr(t,i,r)}});function ua(t,r,i){var d=Pe(r),f=lo(r,d);i==null&&!(Fe(r)&&(f.length||!d.length))&&(i=r,r=t,t=this,f=lo(r,Pe(r)));var m=!(Fe(i)&&"chain"in i)||!!i.chain,x=nn(t);return At(f,function(p){var S=r[p];t[p]=S,x&&(t.prototype[p]=function(){var O=this.__chain__;if(m||O){var H=t(this.__wrapped__),N=H.__actions__=ft(this.__actions__);return N.push({func:S,args:arguments,thisArg:t}),H.__chain__=O,H}return S.apply(t,dn([this.value()],arguments))})}),t}function $3(){return tt._===this&&(tt._=Gu),this}function da(){}function C3(t){return t=le(t),fe(function(r){return Ms(r,t)})}var y3=W0(He),S3=W0(Ji),R3=W0(f0);function Z1(t){return Z0(t)?g0(Gt(t)):eh(t)}function _3(t){return function(r){return t==null?a:jn(t,r)}}var j3=Ps(),A3=Ps(!0);function ha(){return[]}function fa(){return!1}function I3(){return{}}function T3(){return""}function M3(){return!0}function E3(t,r){if(t=le(t),t<1||t>ye)return[];var i=he,d=ot(t,he);r=Z(r),t-=he;for(var f=x0(d,r);++i<t;)r(i);return f}function L3(t){return ie(t)?He(t,Gt):Ct(t)?[t]:ft(m1(Ie(t)))}function V3(t){var r=++Uu;return Ie(t)+r}var D3=wo(function(t,r){return t+r},0),B3=k0("ceil"),O3=wo(function(t,r){return t/r},1),H3=k0("floor");function N3(t){return t&&t.length?co(t,wt,A0):a}function F3(t,r){return t&&t.length?co(t,Z(r,2),A0):a}function z3(t){return ts(t,wt)}function W3(t,r){return ts(t,Z(r,2))}function k3(t){return t&&t.length?co(t,wt,E0):a}function U3(t,r){return t&&t.length?co(t,Z(r,2),E0):a}var q3=wo(function(t,r){return t*r},1),G3=k0("round"),K3=wo(function(t,r){return t-r},0);function Y3(t){return t&&t.length?w0(t,wt):0}function Z3(t,r){return t&&t.length?w0(t,Z(r,2)):0}return g.after=x5,g.ary=_1,g.assign=og,g.assignIn=F1,g.assignInWith=Io,g.assignWith=ag,g.at=ig,g.before=j1,g.bind=ta,g.bindAll=d3,g.bindKey=A1,g.castArray=I5,g.chain=y1,g.chunk=Oh,g.compact=Hh,g.concat=Nh,g.cond=h3,g.conforms=f3,g.constant=ca,g.countBy=Yf,g.create=sg,g.curry=I1,g.curryRight=T1,g.debounce=M1,g.defaults=cg,g.defaultsDeep=lg,g.defer=v5,g.delay=p5,g.difference=Fh,g.differenceBy=zh,g.differenceWith=Wh,g.drop=kh,g.dropRight=Uh,g.dropRightWhile=qh,g.dropWhile=Gh,g.fill=Kh,g.filter=Xf,g.flatMap=Pf,g.flatMapDeep=e5,g.flatMapDepth=t5,g.flatten=p1,g.flattenDeep=Yh,g.flattenDepth=Zh,g.flip=b5,g.flow=m3,g.flowRight=w3,g.fromPairs=Xh,g.functions=wg,g.functionsIn=xg,g.groupBy=n5,g.initial=Jh,g.intersection=Ph,g.intersectionBy=ef,g.intersectionWith=tf,g.invert=pg,g.invertBy=bg,g.invokeMap=o5,g.iteratee=la,g.keyBy=a5,g.keys=Pe,g.keysIn=mt,g.map=yo,g.mapKeys=Cg,g.mapValues=yg,g.matches=x3,g.matchesProperty=v3,g.memoize=Ro,g.merge=Sg,g.mergeWith=z1,g.method=p3,g.methodOf=b3,g.mixin=ua,g.negate=_o,g.nthArg=C3,g.omit=Rg,g.omitBy=_g,g.once=$5,g.orderBy=i5,g.over=y3,g.overArgs=C5,g.overEvery=S3,g.overSome=R3,g.partial=na,g.partialRight=E1,g.partition=s5,g.pick=jg,g.pickBy=W1,g.property=Z1,g.propertyOf=_3,g.pull=af,g.pullAll=$1,g.pullAllBy=sf,g.pullAllWith=cf,g.pullAt=lf,g.range=j3,g.rangeRight=A3,g.rearg=y5,g.reject=u5,g.remove=uf,g.rest=S5,g.reverse=P0,g.sampleSize=h5,g.set=Ig,g.setWith=Tg,g.shuffle=f5,g.slice=df,g.sortBy=w5,g.sortedUniq=vf,g.sortedUniqBy=pf,g.split=Pg,g.spread=R5,g.tail=bf,g.take=$f,g.takeRight=Cf,g.takeRightWhile=yf,g.takeWhile=Sf,g.tap=Nf,g.throttle=_5,g.thru=Co,g.toArray=O1,g.toPairs=k1,g.toPairsIn=U1,g.toPath=L3,g.toPlainObject=N1,g.transform=Mg,g.unary=j5,g.union=Rf,g.unionBy=_f,g.unionWith=jf,g.uniq=Af,g.uniqBy=If,g.uniqWith=Tf,g.unset=Eg,g.unzip=ea,g.unzipWith=C1,g.update=Lg,g.updateWith=Vg,g.values=Jn,g.valuesIn=Dg,g.without=Mf,g.words=K1,g.wrap=A5,g.xor=Ef,g.xorBy=Lf,g.xorWith=Vf,g.zip=Df,g.zipObject=Bf,g.zipObjectDeep=Of,g.zipWith=Hf,g.entries=k1,g.entriesIn=U1,g.extend=F1,g.extendWith=Io,ua(g,g),g.add=D3,g.attempt=Y1,g.camelCase=Ng,g.capitalize=q1,g.ceil=B3,g.clamp=Bg,g.clone=T5,g.cloneDeep=E5,g.cloneDeepWith=L5,g.cloneWith=M5,g.conformsTo=V5,g.deburr=G1,g.defaultTo=g3,g.divide=O3,g.endsWith=Fg,g.eq=Ot,g.escape=zg,g.escapeRegExp=Wg,g.every=Zf,g.find=Qf,g.findIndex=x1,g.findKey=ug,g.findLast=Jf,g.findLastIndex=v1,g.findLastKey=dg,g.floor=H3,g.forEach=S1,g.forEachRight=R1,g.forIn=hg,g.forInRight=fg,g.forOwn=gg,g.forOwnRight=mg,g.get=aa,g.gt=D5,g.gte=B5,g.has=vg,g.hasIn=ia,g.head=b1,g.identity=wt,g.includes=r5,g.indexOf=Qh,g.inRange=Og,g.invoke=$g,g.isArguments=Tn,g.isArray=ie,g.isArrayBuffer=O5,g.isArrayLike=gt,g.isArrayLikeObject=ke,g.isBoolean=H5,g.isBuffer=vn,g.isDate=N5,g.isElement=F5,g.isEmpty=z5,g.isEqual=W5,g.isEqualWith=k5,g.isError=ra,g.isFinite=U5,g.isFunction=nn,g.isInteger=L1,g.isLength=jo,g.isMap=V1,g.isMatch=q5,g.isMatchWith=G5,g.isNaN=K5,g.isNative=Y5,g.isNil=X5,g.isNull=Z5,g.isNumber=D1,g.isObject=Fe,g.isObjectLike=We,g.isPlainObject=Rr,g.isRegExp=oa,g.isSafeInteger=Q5,g.isSet=B1,g.isString=Ao,g.isSymbol=Ct,g.isTypedArray=Qn,g.isUndefined=J5,g.isWeakMap=P5,g.isWeakSet=eg,g.join=nf,g.kebabCase=kg,g.last=Lt,g.lastIndexOf=rf,g.lowerCase=Ug,g.lowerFirst=qg,g.lt=tg,g.lte=ng,g.max=N3,g.maxBy=F3,g.mean=z3,g.meanBy=W3,g.min=k3,g.minBy=U3,g.stubArray=ha,g.stubFalse=fa,g.stubObject=I3,g.stubString=T3,g.stubTrue=M3,g.multiply=q3,g.nth=of,g.noConflict=$3,g.noop=da,g.now=So,g.pad=Gg,g.padEnd=Kg,g.padStart=Yg,g.parseInt=Zg,g.random=Hg,g.reduce=c5,g.reduceRight=l5,g.repeat=Xg,g.replace=Qg,g.result=Ag,g.round=G3,g.runInContext=$,g.sample=d5,g.size=g5,g.snakeCase=Jg,g.some=m5,g.sortedIndex=hf,g.sortedIndexBy=ff,g.sortedIndexOf=gf,g.sortedLastIndex=mf,g.sortedLastIndexBy=wf,g.sortedLastIndexOf=xf,g.startCase=e3,g.startsWith=t3,g.subtract=K3,g.sum=Y3,g.sumBy=Z3,g.template=n3,g.times=E3,g.toFinite=rn,g.toInteger=le,g.toLength=H1,g.toLower=r3,g.toNumber=Vt,g.toSafeInteger=rg,g.toString=Ie,g.toUpper=o3,g.trim=a3,g.trimEnd=i3,g.trimStart=s3,g.truncate=c3,g.unescape=l3,g.uniqueId=V3,g.upperCase=u3,g.upperFirst=sa,g.each=S1,g.eachRight=R1,g.first=b1,ua(g,function(){var t={};return Ut(g,function(r,i){Te.call(g.prototype,i)||(t[i]=r)}),t}(),{chain:!1}),g.VERSION=c,At(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){g[t].placeholder=g}),At(["drop","take"],function(t,r){pe.prototype[t]=function(i){i=i===a?1:Qe(le(i),0);var d=this.__filtered__&&!r?new pe(this):this.clone();return d.__filtered__?d.__takeCount__=ot(i,d.__takeCount__):d.__views__.push({size:ot(i,he),type:t+(d.__dir__<0?"Right":"")}),d},pe.prototype[t+"Right"]=function(i){return this.reverse()[t](i).reverse()}}),At(["filter","map","takeWhile"],function(t,r){var i=r+1,d=i==ee||i==je;pe.prototype[t]=function(f){var m=this.clone();return m.__iteratees__.push({iteratee:Z(f,3),type:i}),m.__filtered__=m.__filtered__||d,m}}),At(["head","last"],function(t,r){var i="take"+(r?"Right":"");pe.prototype[t]=function(){return this[i](1).value()[0]}}),At(["initial","tail"],function(t,r){var i="drop"+(r?"":"Right");pe.prototype[t]=function(){return this.__filtered__?new pe(this):this[i](1)}}),pe.prototype.compact=function(){return this.filter(wt)},pe.prototype.find=function(t){return this.filter(t).head()},pe.prototype.findLast=function(t){return this.reverse().find(t)},pe.prototype.invokeMap=fe(function(t,r){return typeof t=="function"?new pe(this):this.map(function(i){return pr(i,t,r)})}),pe.prototype.reject=function(t){return this.filter(_o(Z(t)))},pe.prototype.slice=function(t,r){t=le(t);var i=this;return i.__filtered__&&(t>0||r<0)?new pe(i):(t<0?i=i.takeRight(-t):t&&(i=i.drop(t)),r!==a&&(r=le(r),i=r<0?i.dropRight(-r):i.take(r-t)),i)},pe.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},pe.prototype.toArray=function(){return this.take(he)},Ut(pe.prototype,function(t,r){var i=/^(?:filter|find|map|reject)|While$/.test(r),d=/^(?:head|last)$/.test(r),f=g[d?"take"+(r=="last"?"Right":""):r],m=d||/^find/.test(r);f&&(g.prototype[r]=function(){var x=this.__wrapped__,p=d?[1]:arguments,S=x instanceof pe,O=p[0],H=S||ie(x),N=function(ve){var be=f.apply(g,dn([ve],p));return d&&k?be[0]:be};H&&i&&typeof O=="function"&&O.length!=1&&(S=H=!1);var k=this.__chain__,G=!!this.__actions__.length,Q=m&&!k,de=S&&!G;if(!m&&H){x=de?x:new pe(this);var J=t.apply(x,p);return J.__actions__.push({func:Co,args:[N],thisArg:a}),new Tt(J,k)}return Q&&de?t.apply(this,p):(J=this.thru(N),Q?d?J.value()[0]:J.value():J)})}),At(["pop","push","shift","sort","splice","unshift"],function(t){var r=Kr[t],i=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",d=/^(?:pop|shift)$/.test(t);g.prototype[t]=function(){var f=arguments;if(d&&!this.__chain__){var m=this.value();return r.apply(ie(m)?m:[],f)}return this[i](function(x){return r.apply(ie(x)?x:[],f)})}}),Ut(pe.prototype,function(t,r){var i=g[r];if(i){var d=i.name+"";Te.call(Gn,d)||(Gn[d]=[]),Gn[d].push({name:r,func:i})}}),Gn[mo(a,L).name]=[{name:"wrapper",func:a}],pe.prototype.clone=cd,pe.prototype.reverse=ld,pe.prototype.value=ud,g.prototype.at=Ff,g.prototype.chain=zf,g.prototype.commit=Wf,g.prototype.next=kf,g.prototype.plant=qf,g.prototype.reverse=Gf,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=Kf,g.prototype.first=g.prototype.head,hr&&(g.prototype[hr]=Uf),g},kn=zu();Cn?((Cn.exports=kn)._=kn,l0._=kn):tt._=kn}).call(_r)})(Do,Do.exports);Do.exports;const bn=(e="&")=>({theme:n,$hasError:a=!1})=>te`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${a?n.colors.danger600:n.colors.primary600};
      box-shadow: ${a?n.colors.danger600:n.colors.primary600} 0px 0px 0px 2px;
    }
  `,[H7,vt]=Dr("Field",{}),Dn=h.forwardRef(({children:e,name:n,error:a=!1,hint:c,id:o,required:l=!1,...u},w)=>{const v=Wt(o),[R,C]=h.useState();return s.jsx(H7,{name:n,id:v,error:a,hint:c,required:l,labelNode:R,setLabelNode:C,children:s.jsx(K,{direction:"column",alignItems:"stretch",gap:1,ref:w,...u,children:e})})}),wi=h.forwardRef(({children:e,action:n,...a},c)=>{const{id:o,required:l,setLabelNode:u}=vt("Label"),w=xt(c,u);return e?s.jsxs(N7,{ref:w,variant:"pi",textColor:"neutral800",fontWeight:"bold",...a,id:`${o}-label`,htmlFor:o,tag:"label",ellipsis:!0,children:[e,l&&s.jsx(ue,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),n&&s.jsx(F7,{marginLeft:1,children:n})]}):null}),N7=I(ue)`
  display: flex;
`,F7=I(K)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,ko=h.forwardRef(({endAction:e,startAction:n,disabled:a=!1,onChange:c,hasError:o,required:l,className:u,size:w="M",...v},R)=>{const{id:C,error:y,hint:b,name:A,required:T}=vt("Input");let M;y?M=`${C}-error`:b&&(M=`${C}-hint`);const V=!!y,L=h.useRef(null),j=h.useRef(null),B=xt(j,R),F=z=>{!a&&c&&c(z)};return h.useLayoutEffect(()=>{if(L.current&&j.current){const z=L.current.offsetWidth,W=j.current;if(W){const U=z+8+16;W.style.paddingRight=`${U}px`}}},[e]),s.jsxs(k7,{gap:2,justifyContent:"space-between",$hasError:V||o,$disabled:a,$size:w,$hasLeftAction:!!n,$hasRightAction:!!e,className:u,children:[n,s.jsx(z7,{id:C,name:A,ref:B,$size:w,"aria-describedby":M,"aria-invalid":V||o,"aria-disabled":a,disabled:a,"data-disabled":a?"":void 0,onChange:F,"aria-required":T||l,$hasLeftAction:!!n,$hasRightAction:!!e,...v}),e&&s.jsx(W7,{ref:L,children:e})]})}),z7=I.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  line-height: 2.2rem;
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }

  ${e=>{switch(e.$size){case"S":return te`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[1]};
        `;default:return te`
          padding-inline-start: ${e.$hasLeftAction?0:e.theme.spaces[4]};
          padding-inline-end: ${e.$hasRightAction?0:e.theme.spaces[4]};
          padding-block: ${e.theme.spaces[2]};
        `}}}
`,W7=I(K)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,k7=I(K)`
  border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:n})=>e?n.spaces[4]:0};
  position: relative;

  ${bn()}
  ${({theme:e,$disabled:n})=>n?te`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,Wl=()=>{const{id:e,hint:n,error:a}=vt("Hint");return!n||a?null:s.jsx(ue,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:n})},kl=()=>{const{id:e,error:n}=vt("Error");return!n||typeof n!="string"?null:s.jsx(ue,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:n})},Ul=h.forwardRef(({label:e,children:n,...a},c)=>s.jsx(U7,{justifyContent:"unset",background:"transparent",borderStyle:"none",...a,type:"button",tag:"button",ref:c,children:s.jsx(nr,{label:e,children:n})})),U7=I(K)`
  font-size: 1.6rem;
  padding: 0;
`,Pb=Object.freeze(Object.defineProperty({__proto__:null,Action:Ul,Error:kl,Hint:Wl,Input:ko,Label:wi,Root:Dn,useField:vt},Symbol.toStringTag,{value:"Module"}));h.forwardRef(({actions:e,children:n,error:a,hint:c,label:o,labelAction:l,nextLabel:u,onNext:w,onPrevious:v,previousLabel:R,required:C,secondaryLabel:y,selectedSlide:b,id:A,...T},M)=>{const V=Wt(A);return s.jsx(Dn,{hint:c,error:a,id:V,required:C,children:s.jsxs(K,{direction:"column",alignItems:"stretch",gap:1,children:[o&&s.jsx(wi,{action:l,children:o}),s.jsx(O7,{ref:M,actions:e,label:o,nextLabel:u,onNext:w,onPrevious:v,previousLabel:R,secondaryLabel:y,selectedSlide:b,id:V,...T,children:n}),s.jsx(Wl,{}),s.jsx(kl,{})]})})});I(X)`
  ${$l}
`;const q7="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",G7=h.forwardRef(({children:e,small:n=!1,...a},c)=>s.jsxs("div",{role:"alert","aria-live":"assertive",ref:c,...a,children:[s.jsx(sr,{children:e}),s.jsx(Y7,{src:q7,"aria-hidden":!0,$small:n})]})),K7=it`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Y7=I.img`
  animation: ${K7} 1s infinite linear;
  will-change: transform;
  ${({$small:e,theme:n})=>e&&`width: ${n.spaces[6]}; height: ${n.spaces[6]};`}
`,Z7=h.forwardRef(({allowCustomValue:e,autocomplete:n,children:a,className:c,clearLabel:o="clear",creatable:l=!1,createMessage:u=he=>`Create "${he}"`,defaultFilterValue:w,defaultTextValue:v,defaultOpen:R=!1,open:C,onOpenChange:y,disabled:b=!1,hasError:A,id:T,filterValue:M,hasMoreItems:V=!1,isPrintableCharacter:L,loading:j=!1,loadingMessage:B="Loading content...",name:F,noOptionsMessage:z=()=>"No results found",onChange:W,onClear:U,onCreateOption:oe,onFilterValueChange:se,onInputChange:ce,onTextValueChange:$e,onLoadMore:ne,placeholder:P="Select or enter a value",required:ee=!1,size:_e="M",startIcon:je,textValue:me,value:ye,...Me},De)=>{const[he,Je]=Kt({prop:C,defaultProp:R,onChange:y}),[we,ze]=Kt({prop:me,defaultProp:e&&!v?ye:v,onChange:$e}),[Ne,Ye]=Kt({prop:M,defaultProp:w,onChange:se}),Y=h.useRef(null),xe=h.useRef(null),Se=xt(xe,De),ae=h.useRef(null),ge=Ge=>{U&&!b&&(ze(""),Ye(""),U(Ge),xe.current.focus())},Ce=Ge=>{Je(Ge)},rt=Ge=>{ze(Ge)},Ee=Ge=>{Ye(Ge)},Ae=Ge=>{ce&&ce(Ge)},_t=Ge=>{W&&W(Ge)},Ze=Ge=>{ne&&V&&!j&&ne(Ge)},lr=()=>{oe&&we&&oe(we)},qo=Wt(),ln=`intersection-${rr(qo)}`;Or(Y,Ze,{selectorToWatch:`#${ln}`,skipWhen:!he});const{error:ct,...kt}=vt("Combobox"),Hn=!!ct||A,ur=kt.id??T,$n=kt.name??F,Go=kt.required||ee;let Zt;return ct?Zt=`${ur}-error`:kt.hint&&(Zt=`${ur}-hint`),s.jsxs(Ft.Root,{autocomplete:n||(l?"list":"both"),onOpenChange:Ce,open:he,onTextValueChange:rt,textValue:we,allowCustomValue:l||e,disabled:b,required:Go,value:ye,onValueChange:_t,filterValue:Ne,onFilterValueChange:Ee,isPrintableCharacter:L,children:[s.jsxs(Q7,{$hasError:Hn,$size:_e,className:c,children:[s.jsxs(K,{flex:"1",tag:"span",gap:3,children:[je?s.jsx(K,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:je}):null,s.jsx(J7,{placeholder:P,id:ur,"aria-invalid":!!ct,onChange:Ae,ref:Se,name:$n,"aria-describedby":Zt,...Me})]}),s.jsxs(K,{tag:"span",gap:3,children:[we&&U?s.jsx(X7,{tag:"button",hasRadius:!0,background:"transparent",type:"button",padding:0,color:"neutral600",borderStyle:"none",onClick:ge,"aria-disabled":b,"aria-label":o,title:o,ref:ae,children:s.jsx(On,{})}):null,s.jsx(P7,{children:s.jsx(Vn,{fill:"neutral500"})})]})]}),s.jsx(Ft.Portal,{children:s.jsx(ep,{sideOffset:4,children:s.jsxs(tp,{ref:Y,children:[a,l?s.jsx(Ft.CreateItem,{onPointerUp:lr,onClick:lr,asChild:!0,children:s.jsx(La,{children:s.jsx(ue,{children:u(we??"")})})}):null,!l&&!j?s.jsx(Ft.NoValueFound,{asChild:!0,children:s.jsx(La,{$hasHover:!1,children:s.jsx(ue,{children:z(we??"")})})}):null,j?s.jsx(K,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:s.jsx(G7,{small:!0,children:B})}):null,s.jsx(X,{id:ln,width:"100%",height:"1px"})]})})})]})}),X7=I(X)`
  padding: 0;
`,Q7=I(Ft.Trigger)`
  position: relative;
  border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spaces[4]};

  ${e=>{switch(e.$size){case"S":return te`
          padding-inline-start: ${({theme:n})=>n.spaces[4]};
          padding-inline-end: ${({theme:n})=>n.spaces[3]};
          padding-block: ${({theme:n})=>n.spaces[1]};
        `;default:return te`
          padding-inline-start: ${({theme:n})=>n.spaces[4]};
          padding-inline-end: ${({theme:n})=>n.spaces[3]};
          padding-block: ${({theme:n})=>n.spaces[2]};
        `}}}

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:n})=>bn()({theme:e,$hasError:n})};
`,J7=I(Ft.TextInput)`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  padding: 0;
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,P7=I(Ft.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,ep=I(Ft.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: var(--radix-combobox-trigger-width);
  /* This is from the design-system figma file. */
  max-height: 15rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${qe.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${qe.slideDownIn};
      }
    }
  }
`,tp=I(Ft.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,np=h.forwardRef(({children:e,value:n,disabled:a,textValue:c,...o},l)=>s.jsx(Ft.ComboboxItem,{asChild:!0,value:n,disabled:a,textValue:c,children:s.jsx(La,{ref:l,...o,children:s.jsx(Ft.ItemText,{asChild:!0,children:s.jsx(ue,{children:e})})})})),La=I.div`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  user-select: none;

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }

  &:hover,
  &[data-highlighted] {
    outline: none;
    background-color: ${({theme:e,$hasHover:n=!0})=>n?e.colors.primary100:e.colors.neutral0};
  }

  &[data-highlighted] {
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,rp=n6,op=h.forwardRef((e,n)=>s.jsx(s6,{...e,asChild:!0,ref:n})),ap=h.forwardRef((e,n)=>s.jsxs(u6,{children:[s.jsx(ip,{}),s.jsx(sp,{ref:n,...e})]})),ip=I(m6)`
  background-color: ${e=>e.theme.colors.neutral800};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  opacity: 0.2;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${qe.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,sp=I(w6)`
  max-width: 42rem;
  height: min-content;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${qe.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${qe.modalPopOut};
    }
  }
`,cp=h.forwardRef(({children:e,...n},a)=>s.jsx(c6,{asChild:!0,children:s.jsx(lp,{tag:"h2",variant:"beta",ref:a,padding:6,fontWeight:"bold",...n,children:e})})),lp=I(ue)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,up=h.forwardRef(({children:e,icon:n,...a},c)=>s.jsx(K,{ref:c,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...a,children:typeof e=="string"?s.jsxs(s.Fragment,{children:[n?h.cloneElement(n,{width:24,height:24}):null,s.jsx(ql,{children:e})]}):e})),ql=h.forwardRef((e,n)=>s.jsx(l6,{asChild:!0,children:s.jsx(ue,{ref:n,variant:"omega",...e,tag:"p"})})),dp=h.forwardRef((e,n)=>s.jsx(hp,{ref:n,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"})),hp=I(K)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,fp=h.forwardRef((e,n)=>s.jsx(d6,{...e,asChild:!0,ref:n})),gp=h.forwardRef((e,n)=>s.jsx(h6,{...e,asChild:!0,ref:n})),e$=Object.freeze(Object.defineProperty({__proto__:null,Action:gp,Body:up,Cancel:fp,Content:ap,Description:ql,Footer:dp,Header:cp,Root:rp,Trigger:op},Symbol.toStringTag,{value:"Module"}));let wa=0;function mp(){h.useEffect(()=>{var e,n;const a=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=a[0])!==null&&e!==void 0?e:cc()),document.body.insertAdjacentElement("beforeend",(n=a[1])!==null&&n!==void 0?n:cc()),wa++,()=>{wa===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(c=>c.remove()),wa--}},[])}function cc(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}function sn(e,n){const a=h.useRef(null);return n&&a.current&&wp(n,a.current)&&(n=a.current),a.current=n??null,h.useMemo(()=>new v4(e,n),[e,n])}function wp(e,n){if(e===n)return!0;const a=Object.keys(e),c=Object.keys(n);if(a.length!==c.length)return!1;for(const o of a)if(n[o]!==e[o])return!1;return!0}const xi={Log:"live-region-log",Status:"live-region-status",Alert:"live-region-alert"},lc=e=>{const n=document.querySelector(`#${xi.Log}`);n&&(n.innerText=e)},uc=e=>{const n=document.querySelector(`#${xi.Status}`);n&&(n.innerText=e)},dc=e=>{const n=document.querySelector(`#${xi.Alert}`);n&&(n.innerText=e)},t$=()=>(h.useEffect(()=>()=>{lc(""),dc(""),uc("")},[]),{notifyLog:lc,notifyAlert:dc,notifyStatus:uc});H6`
${te`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    /* Sets 1rem === 10px */
    font-size: 62.5%;
  }

  body {
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    color: ${({theme:e})=>e.colors.neutral800};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img,
  picture,
  video,
  canvas {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    padding: 0;
    font: inherit;
  }

  button {
    border: unset;
    background: unset;
    padding: unset;
    margin: unset;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    font: unset;
  }

  #root {
    isolation: isolate;
  }

  ol,
  ul {
    list-style: none;
    padding: unset;
    margin: unset;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: 2px;
  }

  /* Focusing the button with a mouse, touch, or stylus will show a subtle drop shadow. */
  *:focus:not(:focus-visible) {
    outline: none;
  }

  .lock-body-scroll {
    height: 100vh;
    overflow-y: hidden;
  }
`}
`;const hc="en-EN",xp=()=>typeof navigator>"u"?hc:navigator.language?navigator.language:hc,[n$,Uo]=Dr("StrapiDesignSystem",{locale:xp()}),vp=U6,Gl=h.forwardRef(({container:e=globalThis?.document?.body,...n},a)=>e?ar.createPortal(s.jsx(X,{ref:a,...n}),e):null);Gl.displayName="Portal";const pp=h.forwardRef(({onClear:e,clearLabel:n="Clear",startIcon:a,disabled:c,hasError:o,children:l,id:u,size:w="M",withTags:v,...R},C)=>{const y=h.useRef(null),b=M=>{e&&!c&&(e(M),y.current.focus())},{labelNode:A}=vt("SelectTrigger"),T=xt(y,C);return s.jsx(zt.Trigger,{asChild:!0,children:s.jsxs($p,{"aria-disabled":c,$hasError:o,ref:T,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:c?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":A?`${u}-label`:void 0,$size:w,$withTags:v,...R,children:[s.jsxs(K,{flex:"1",tag:"span",gap:3,children:[a&&s.jsx(K,{tag:"span","aria-hidden":!0,children:a}),l]}),s.jsxs(K,{tag:"span",gap:3,children:[e?s.jsx(bp,{tag:"button",hasRadius:!0,background:"transparent",role:"button",tabIndex:0,onClick:b,"aria-disabled":c,"aria-label":n,title:n,cursor:"pointer",children:s.jsx(On,{})}):null,s.jsx(Cp,{children:s.jsx(Vn,{})})]})]})})}),bp=I(X)`
  border: none;
  display: flex;

  svg {
    height: 1.1rem;
    width: 1.1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,$p=I(K)`
  border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return te`
          padding-block: ${e.theme.spaces[1]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `;default:return te`
          padding-block: ${e.$withTags?"0.3rem":e.theme.spaces[2]};
          padding-inline-start: ${e.$withTags?e.theme.spaces[1]:e.theme.spaces[4]};
          padding-inline-end: ${e.theme.spaces[3]};
        `}}}
  cursor: pointer;

  &[aria-disabled='true'] {
    color: ${e=>e.theme.colors.neutral500};
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:n})=>bn()({theme:e,$hasError:n})};
`,Cp=I(zt.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,yp=h.forwardRef(({children:e,placeholder:n,...a},c)=>s.jsx(Sp,{ref:c,ellipsis:!0,...a,children:s.jsx(Rp,{placeholder:n,children:e})})),Sp=I(ue)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
`,Rp=I(zt.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,_p=I(zt.Content)`
  background: ${({theme:e})=>e.colors.neutral0};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  min-width: var(--radix-select-trigger-width);
  max-height: 15.6rem;
  z-index: ${({theme:e})=>e.zIndices.popover};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    /* The select can't animate out yet, watch https://github.com/radix-ui/primitives/issues/1893, or take a look and solve it yourself. */
    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${qe.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${qe.slideDownIn};
      }
    }
  }
`,jp=I(zt.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,Ap=h.forwardRef((e,n)=>s.jsx(Tp,{ref:n,...e})),Ip=te`
  width: 100%;
  border: none;
  text-align: left;
  outline-offset: -3px;
  border-radius: ${e=>e.theme.borderRadius};
  padding: ${e=>`${e.theme.spaces[2]} ${e.theme.spaces[4]}`};
  padding-left: ${({theme:e})=>e.spaces[4]};
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spaces[2]};
  white-space: nowrap;
  user-select: none;
  color: ${({theme:e})=>e.colors.neutral800};

  &:focus-visible {
    outline: none;
    background-color: ${({theme:e})=>e.colors.primary100};
    cursor: pointer;
  }
`,Tp=I(zt.Item)`
  ${Ip}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
  }

  &[data-state='checked'] {
    font-weight: bold;
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,Kl=zt.Root,Yl=pp,Zl=yp,Xl=zt.Portal,Ql=_p,Jl=jp,vi=Ap,Pl=zt.ItemIndicator,e2=zt.ItemText,Mp=zt.Group,fc=h.forwardRef(({children:e,clearLabel:n="Clear",customizeContent:a,disabled:c,hasError:o,id:l,name:u,onChange:w,onClear:v,onCloseAutoFocus:R,onReachEnd:C,placeholder:y,required:b,size:A,startIcon:T,value:M,...V},L)=>{const[j,B]=h.useState(),[F,z]=h.useState(!1),W=he=>{z(he)},U=he=>{v&&v(he),w||B("")},oe=he=>{w?w(typeof M=="number"?Number(he):he):B(he)},se=h.useRef(null),ce=Wt(),$e=`intersection-${rr(ce)}`;Or(se,he=>{C&&C(he)},{selectorToWatch:`#${$e}`,skipWhen:!F});const{error:P,required:ee,..._e}=vt("SingleSelect"),je=!!P||o,me=_e.id??l,ye=_e.name??u;let Me;P?Me=`${me}-error`:_e.hint&&(Me=`${me}-hint`);const De=(typeof M<"u"&&M!==null?M.toString():j)??"";return s.jsxs(Kl,{onOpenChange:W,disabled:c,required:ee??b,onValueChange:oe,value:De,...V,children:[s.jsx(Yl,{ref:L,id:me,name:ye,startIcon:T,hasError:je,disabled:c,clearLabel:n,onClear:De&&v?U:void 0,"aria-label":V["aria-label"],"aria-describedby":Me??V["aria-describedby"],size:A,children:s.jsx(Zl,{placeholder:y,textColor:De?"neutral800":"neutral600",children:De&&a?a(De):void 0})}),s.jsx(Xl,{children:s.jsx(Ql,{position:"popper",sideOffset:4,onCloseAutoFocus:R,children:s.jsxs(Jl,{ref:se,children:[e,s.jsx(X,{id:$e,width:"100%",height:"1px"})]})})})]})}),gc=h.forwardRef(({value:e,startIcon:n,children:a,...c},o)=>s.jsxs(vi,{ref:o,value:e.toString(),...c,children:[n&&s.jsx(K,{tag:"span","aria-hidden":!0,children:n}),s.jsx(ue,{lineHeight:"20px",width:"100%",children:s.jsx(e2,{children:a})})]})),Ep=200,mc=15,[Lp,cr]=Dr("DatePicker"),Vp=h.forwardRef(({calendarLabel:e,className:n,initialDate:a,locale:c,maxDate:o,minDate:l,monthSelectLabel:u="Month",onChange:w,value:v,yearSelectLabel:R="Year",hasError:C,id:y,name:b,disabled:A=!1,required:T=!1,onClear:M,clearLabel:V="Clear",size:L="M",...j},B)=>{const F=ba(),z=Uo("DatePicker"),W=c??z.locale,U=sn(W,{day:"2-digit",month:"2-digit",year:"numeric"}),[oe,se]=h.useState(!1),[ce,$e]=h.useState(null),[ne,P]=h.useState(null),[ee,_e]=h.useState(null),[je,me]=h.useState(),[ye,Me]=Kt({defaultProp:a?Mn(a):void 0,prop:v?Mn(v):void 0,onChange(Ae){w&&w(Ae?.toDate(F))}}),[De,he]=h.useMemo(()=>{const Ae=a?Mn(a):Na("UTC"),_t=l?Mn(l):Ae.set({day:1,month:1,year:Ae.year-Ep});let Ze=o?Mn(o):Ae.set({day:31,month:12,year:Ae.year+mc});return Ze.compare(_t)<0&&(Ze=_t.set({day:31,month:12,year:_t.year+mc})),[_t,Ze]},[l,o,a]),[Je,we]=h.useState(Dp({currentValue:ye,minDate:De,maxDate:he})),ze=Wt(),Ne=h.useRef(null),Ye=Ae=>{M&&!A&&(me(""),Me(void 0),M(Ae),ne?.focus())},Y=h.useCallback(Ae=>{Ae&&ye&&we(ye),se(Ae)},[ye]);or(()=>{if(v){const Ae=Mn(v);me(U.format(Ae.toDate(F))),we(Ae)}else me("")},[v,U,F]),or(()=>{if(a&&je===void 0){const Ae=Mn(a);me(U.format(Ae.toDate(F)))}},[a,je,U,F]);const{error:xe,...Se}=vt("Combobox"),ae=!!xe||C,ge=Se.id??y,Ce=Se.name??b,rt=Se.required||T;let Ee;return xe?Ee=`${ge}-error`:Se.hint&&(Ee=`${ge}-hint`),s.jsxs(Lp,{calendarDate:Je,content:ee,contentId:ze,disabled:A,locale:W,minDate:De,maxDate:he,open:oe,onCalendarDateChange:we,onContentChange:_e,onOpenChange:Y,onTextInputChange:P,onTextValueChange:me,onTriggerChange:$e,onValueChange:Me,required:rt,textInput:ne,textValue:je,timeZone:F,trigger:ce,value:ye,children:[s.jsxs(Op,{className:n,hasError:ae,size:L,children:[s.jsx(Ym,{fill:"neutral500","aria-hidden":!0}),s.jsx(zp,{ref:B,"aria-describedby":Ee,id:ge,name:Ce,...j}),je&&M?s.jsx(Np,{tag:"button",hasRadius:!0,background:"transparent",type:"button",onClick:Ye,"aria-disabled":A,"aria-label":V,title:V,ref:Ne,children:s.jsx(On,{})}):null]}),s.jsx(Gl,{children:s.jsx(qp,{label:e,children:s.jsx(Xp,{monthSelectLabel:u,yearSelectLabel:R})})})]})}),wc=e=>!!e.match(/^[^a-zA-Z]*$/),Dp=({currentValue:e,minDate:n,maxDate:a})=>{const c=Na("UTC");return e||($a(n,c)===n&&Ca(a,c)===a?c:$a(n,c)===c?n:Ca(a,c)===c?a:c)},Bp="DatePickerTrigger",Op=h.forwardRef(({hasError:e,size:n,...a},c)=>{const o=cr(Bp),l=xt(c,w=>o.onTriggerChange(w)),u=()=>{o.disabled||o.onOpenChange(!0)};return s.jsx(Oa,{asChild:!0,trapped:o.open,onMountAutoFocus:w=>{w.preventDefault()},onUnmountAutoFocus:w=>{document.getSelection()?.empty(),w.preventDefault()},children:s.jsx(Hp,{ref:l,$hasError:e,$size:n,...a,hasRadius:!0,gap:3,overflow:"hidden",background:o.disabled?"neutral150":"neutral0",onClick:En(a.onClick,()=>{o.textInput?.focus()}),onPointerDown:En(a.onPointerDown,w=>{const v=w.target;v.hasPointerCapture(w.pointerId)&&v.releasePointerCapture(w.pointerId),(v.closest("button")??v.closest("div"))===w.currentTarget&&w.button===0&&w.ctrlKey===!1&&(u(),o.textInput?.focus())})})})}),Hp=I(K)`
  border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
  ${e=>{switch(e.$size){case"S":return te`
          padding-block: ${e.theme.spaces[1]};
          padding-inline: ${e.theme.spaces[3]};
        `;default:return te`
          padding-block: ${e.theme.spaces[2]};
          padding-inline: ${e.theme.spaces[3]};
        `}}}

  & > svg {
    flex: 1 0 auto;
  }

  &[data-disabled] {
    color: ${({theme:e})=>e.colors.neutral600};
    background: ${({theme:e})=>e.colors.neutral150};
    cursor: not-allowed;
  }

  /* Required to ensure the below inputFocusStyles are adhered too */
  &:focus-visible {
    outline: none;
  }

  ${({theme:e,$hasError:n})=>bn()({theme:e,$hasError:n})};
`,Np=I(X)`
  border: none;
  color: ${({theme:e})=>e.colors.neutral600};
  padding: 0;
  cursor: pointer;
`,Fp="DatePickerTextInput",zp=h.forwardRef(({placeholder:e,...n},a)=>{const c=cr(Fp),{onTextValueChange:o,textValue:l,onTextInputChange:u,onOpenChange:w,disabled:v,locale:R}=c,C=xt(a,L=>u(L)),y=()=>{v||w(!0)},b=sn(R,{year:"numeric",month:"2-digit",day:"2-digit"}),[A,T,M]=h.useMemo(()=>{const L=b.formatToParts(new Date),j=L.filter(z=>z.type==="year"||z.type==="month"||z.type==="day"),B=j.map(z=>{switch(z.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),F=L.find(z=>z.type==="literal")?.value??"";return[B,F,j]},[b]),V=A.map(L=>`\\d{${L.length}}`).join(`\\${T}`);return s.jsx(kp,{role:"combobox",type:"text",inputMode:"numeric",ref:C,"aria-autocomplete":"none","aria-controls":c.contentId,"aria-disabled":c.disabled,"aria-expanded":c.open,"aria-required":c.required,"aria-haspopup":"dialog","data-state":c.open?"open":"closed",disabled:v,"data-disabled":v?"":void 0,pattern:V,placeholder:e??A.join(T),...n,value:l??"",onBlur:En(n.onBlur,()=>{if(!c.textValue){c.onValueChange(void 0);return}c.onTextValueChange(b.format(c.calendarDate.toDate(c.timeZone))),c.onValueChange(c.calendarDate)}),onChange:En(n.onChange,L=>{if(wc(L.target.value)){const j=L.target.value.split(T),[B,F,z]=M.map((P,ee)=>{const _e=j[ee];return{...P,value:_e}}).sort((P,ee)=>P.type==="year"?1:ee.type==="year"?-1:P.type==="month"?1:ee.type==="month"?-1:0).map(P=>P.value),W=c.calendarDate.year;let U=c.calendarDate.year;if(z){const P=z.length===1?`0${z}`:z;U=z.length<3?Number(`${W}`.slice(0,4-P.length)+P):Number(P)}z&&z.length<3&&U>c.maxDate.year&&(U-=100);const oe=c.calendarDate.set({year:U}),se=oe.calendar.getMonthsInYear(oe),ce=oe.set({month:F&&Number(F)<=se?Number(F):void 0}),$e=ce.calendar.getDaysInMonth(ce),ne=ce.set({day:B&&Number(B)<=$e?Number(B):void 0});c.onCalendarDateChange(Wp(ne,c.minDate,c.maxDate)),c.onTextValueChange(L.target.value)}}),onKeyDown:En(n.onKeyDown,L=>{if(!c.open&&(wc(L.key)||["ArrowDown","Backspace"].includes(L.key)))y();else if(["Tab"].includes(L.key)&&c.open)L.preventDefault();else if(["Escape"].includes(L.key))c.open?c.onOpenChange(!1):(c.onValueChange(void 0),c.onTextValueChange("")),L.preventDefault();else if(c.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(L.key))switch(L.preventDefault(),L.key){case"ArrowDown":{const j=c.calendarDate.add({weeks:1});if(c.maxDate&&j.compare(c.maxDate)>0)return;c.onCalendarDateChange(j);return}case"ArrowRight":{const j=c.calendarDate.add({days:1});if(c.maxDate&&j.compare(c.maxDate)>0)return;c.onCalendarDateChange(j);return}case"ArrowUp":{const j=c.calendarDate.subtract({weeks:1});if(c.minDate&&j.compare(c.minDate)<0)return;c.onCalendarDateChange(j);return}case"ArrowLeft":{const j=c.calendarDate.subtract({days:1});if(c.minDate&&j.compare(c.minDate)<0)return;c.onCalendarDateChange(j)}}else c.open&&["Enter"].includes(L.key)&&(L.preventDefault(),o(b.format(c.calendarDate.toDate(c.timeZone))),c.onValueChange(c.calendarDate),c.onOpenChange(!1))})})});function Wp(e,n,a){return n&&(e=Ca(e,n)),a&&(e=$a(e,a)),e}const kp=I.input`
  width: 100%;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${({theme:e})=>e.colors.neutral800};
  border: none;
  background-color: transparent;

  &:focus-visible {
    outline: none;
  }

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Up="DatePickerContent",qp=h.forwardRef((e,n)=>{const[a,c]=h.useState(),o=cr(Up);if(or(()=>{c(new DocumentFragment)},[]),!o.open){const l=a;return l?ar.createPortal(s.jsx("div",{children:e.children}),l):null}return s.jsx(Kp,{...e,ref:n})}),Gp="DatePickerContent",Kp=h.forwardRef((e,n)=>{const{label:a="Choose date",...c}=e,{onOpenChange:o,...l}=cr(Gp),{x:u,y:w,refs:v,strategy:R,placement:C}=N6({strategy:"fixed",placement:"bottom-start",middleware:[F6({mainAxis:4}),z6(),W6()],elements:{reference:l.trigger},whileElementsMounted:k6});h.useEffect(()=>{const b=()=>{o(!1)};return window.addEventListener("blur",b),window.addEventListener("resize",b),()=>{window.removeEventListener("blur",b),window.removeEventListener("resize",b)}},[o]);const y=xt(n,b=>l.onContentChange(b),v.setFloating);return mp(),s.jsx(Ha,{allowPinchZoom:!0,children:s.jsx(vp,{asChild:!0,onFocusOutside:b=>{b.preventDefault()},onDismiss:()=>{o(!1)},children:s.jsx(Yp,{ref:y,"data-state":l.open?"open":"closed","data-side":C.includes("top")?"top":"bottom",onContextMenu:b=>b.preventDefault(),id:l.contentId,role:"dialog","aria-modal":"true","aria-label":a,style:{left:u,top:w,position:R},hasRadius:!0,background:"neutral0",padding:1,...c})})})}),Yp=I(X)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${qe.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${qe.slideDownIn};
      }
    }
  }
`,Zp="DatePickerCalendar",Xp=h.forwardRef(({monthSelectLabel:e,yearSelectLabel:n,...a},c)=>{const{locale:o,timeZone:l,minDate:u,maxDate:w,calendarDate:v,onCalendarDateChange:R}=cr(Zp),C=q6(v),y=h.useMemo(()=>{const B=u.year,F=w.year;return[...Array(F-B+1).keys()].map(z=>(B+z).toString())},[u,w]),b=sn(o,{month:"long"}),A=h.useMemo(()=>[...Array(v.calendar.getMonthsInYear(v)).keys()].map(B=>b.format(v.set({month:B+1}).toDate(l))),[v,b,l]),T=sn(o,{weekday:"short"}),M=h.useMemo(()=>{const B=Dc(Na(l),o);return[...new Array(7).keys()].map(F=>{const W=B.add({days:F}).toDate(l);return T.format(W)})},[l,o,T]),V=B=>{if(typeof B=="number")return;const F=v.set({month:A.indexOf(B)+1});R(F)},L=B=>{if(typeof B=="number")return;const F=v.set({year:parseInt(B,10)});R(F)},j=Qp(C,o);return s.jsxs(K,{ref:c,direction:"column",alignItems:"stretch",padding:4,...a,children:[s.jsxs(Jp,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[s.jsx(Dn,{children:s.jsx(fc,{"aria-label":e,value:A[v.month-1],onChange:V,children:A.map(B=>s.jsx(gc,{value:B,children:B},B))})}),s.jsx(Dn,{children:s.jsx(fc,{value:v.year.toString(),"aria-label":n,onChange:L,children:y.map(B=>s.jsx(gc,{value:B,children:B},B))})})]}),s.jsxs("table",{role:"grid",children:[s.jsx("thead",{"aria-hidden":!0,children:s.jsx("tr",{"aria-rowindex":0,children:M.map((B,F)=>s.jsx(Pp,{"aria-colindex":F,children:B},B))})}),s.jsx("tbody",{children:[...new Array(6).keys()].map(B=>s.jsx("tr",{"aria-rowindex":B+2,children:j(B).map((F,z)=>F?s.jsx(n9,{"aria-colindex":z+1,date:F,startDate:C,disabled:u.compare(F)>0||F.compare(w)>0},F.toString()):s.jsx(t2,{"aria-colindex":z+1},z+1))},B))})]})]})}),Qp=(e,n)=>a=>{let c=e.add({weeks:a});const o=[];c=Dc(c,n);const l=G6(c,n);for(let u=0;u<l;u++)o.push(null);for(;o.length<7;){o.push(c);const u=c.add({days:1});if(Bc(c,u))break;c=u}for(;o.length<7;)o.push(null);return o},Jp=I(K)`
  div[role='combobox'] {
    border: 1px solid transparent;
    background: transparent;
    font-weight: ${e=>e.theme.fontWeights.bold};

    svg {
      fill: ${({theme:e})=>e.colors.neutral500};
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};
    }
  }
`,Pp=h.forwardRef(({children:e,...n},a)=>s.jsx(e9,{tag:"th",role:"gridcell",ref:a,...n,height:"2.4rem",width:"3.2rem",children:s.jsx(ue,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),e9=I(X)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,t9="DatePickerCalendarCell",n9=h.forwardRef(({date:e,startDate:n,disabled:a,...c},o)=>{const{timeZone:l,locale:u,calendarDate:w,onValueChange:v,onOpenChange:R,onTextValueChange:C,onCalendarDateChange:y}=cr(t9),b=Bc(w,e),A=sn(u,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),T=h.useMemo(()=>A.format(e.toDate(l)),[A,e,l]),M=sn(u,{day:"numeric",calendar:e.calendar.identifier}),V=h.useMemo(()=>M.formatToParts(e.toDate(l)).find(z=>z.type==="day").value,[M,e,l]),L=sn(u,{day:"2-digit",month:"2-digit",year:"numeric"}),j=K6(n),B=e.compare(n)<0||e.compare(j)>0;let F="neutral900";return b?F="primary600":B&&(F="neutral600"),s.jsx(t2,{tag:"td",role:"gridcell",ref:o,"aria-selected":b,...c,hasRadius:!0,"aria-label":T,tabIndex:b?0:-1,background:b?"primary100":"neutral0",cursor:"pointer",onPointerDown:En(c.onPointerDown,z=>{z.preventDefault(),y(e),v(e),C(L.format(e.toDate(l))),R(!1)}),"aria-disabled":a,children:s.jsx(ue,{variant:"pi",textColor:F,children:V})})}),t2=I(X)`
  text-align: center;
  padding: 0.7rem;
  // Trick to prevent the outline from overflowing because of the general outline-offset
  outline-offset: -2px !important;
  &[aria-disabled='true'] {
    pointer-events: none;
    opacity: 0.5;
  }

  &[aria-disabled='false'] {
    &:hover {
      background: ${({theme:e})=>e.colors.primary100};
      color: ${({theme:e})=>e.colors.primary600};
    }
  }
`,Mn=e=>{const n=e.toISOString(),a=Y6(n,"UTC");return Z6(a)},xa=e=>!!e.match(/^[^a-zA-Z]*$/),r9=h.forwardRef(({step:e=15,value:n,defaultValue:a,onChange:c,...o},l)=>{const u=Uo("TimePicker"),[w,v]=h.useState(""),[R,C]=Kt({prop:n,defaultProp:a,onChange:c}),y=sn(u.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),b=h.useMemo(()=>{const j=y.formatToParts(new Date),{value:B}=j.find(F=>F.type==="literal");return B},[y]),A=h.useMemo(()=>{const j=60/e;return[...Array(24).keys()].flatMap(B=>[...Array(j).keys()].map(F=>y.format(new Date(0,0,0,B,F*e))))},[e,y]),T=j=>{(!j||xa(j))&&v(j)},M=j=>{const[B,F]=j.split(b);if(!B&&!F)return;const z=Number(B??"0"),W=Number(F??"0");if(!(z>23||W>59))return y.format(new Date(0,0,0,z,W))},V=j=>{const B=M(j.target.value);B?(v(B),C(B)):v(R)},L=j=>{if(typeof j<"u"){const B=M(j);C(B)}else C(j)};return h.useEffect(()=>{const j=typeof n>"u"?"":n;xa(j)&&v(j)},[n,v]),s.jsx(Z7,{...o,ref:l,value:R,onChange:L,isPrintableCharacter:xa,allowCustomValue:!0,placeholder:`--${b}--`,autocomplete:"none",startIcon:s.jsx(xw,{fill:"neutral500"}),inputMode:"numeric",pattern:`\\d{2}\\${b}\\d{2}`,textValue:w,onTextValueChange:T,onBlur:V,children:A.map(j=>s.jsx(np,{value:j,children:j},j))})}),o9=I(Vp)`
  flex: 1 1 70%;
  min-width: 120px;
`,a9=I(r9)`
  flex: 1 1 30%;
  min-width: 140px;
`,r$=h.forwardRef(({clearLabel:e="clear",dateLabel:n="Choose date",timeLabel:a="Choose time",disabled:c=!1,hasError:o,onChange:l,onClear:u,required:w=!1,step:v,value:R,initialDate:C,size:y,...b},A)=>{const T=h.useRef(null),[M,V]=Kt({defaultProp:C?jr(C,!1):void 0,prop:R?jr(R,!1):R??void 0,onChange(P){l&&l(P?.toDate(ba()))}}),L=Uo("DateTimePicker"),j=sn(L.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),B=M?j.format(M.toDate(ba())):"",F=P=>{let ee=P?jr(P):void 0;if(!(ee&&M&&ee.compare(M)===0)){if(B&&ee){const[_e,je]=B.split(":");ee=ee.set({hour:parseInt(_e,10),minute:parseInt(je,10)})}V(ee)}},z=P=>{if(!P)return;const[ee,_e]=P.split(":"),je=M?M.set({hour:parseInt(ee,10),minute:parseInt(_e,10)}):jr(new Date).set({hour:parseInt(ee,10),minute:parseInt(_e,10)});V(je)},W=P=>{V(void 0),u&&u(P)},U=()=>{const P=M?M.set({hour:0,minute:0}):jr(new Date);V(P)},oe=xt(T,A),{error:se,id:ce,labelNode:$e}=vt("DateTimePicker"),ne=!!se||o;return s.jsxs(K,{"aria-labelledby":$e?`${ce}-label`:void 0,role:"group",flex:"1",gap:1,children:[s.jsx(Dn,{children:s.jsx(o9,{...b,size:y,value:M?.toDate("UTC"),onChange:F,required:w,onClear:u?W:void 0,clearLabel:`${e} date`,disabled:c,ref:oe,"aria-label":n})}),s.jsx(Dn,{children:s.jsx(a9,{size:y,hasError:ne,value:B,onChange:z,onClear:u&&B!==void 0&&B!=="00:00"?U:void 0,clearLabel:`${e} time`,required:w,disabled:c,step:v,"aria-label":a})})]})}),jr=(e,n=!0)=>{const a=e.toISOString();let c=X6(a);return n&&(c=c.set({hour:0,minute:0})),Q6(c)},i9=h.forwardRef((e,n)=>s.jsx(s9,{ref:n,background:"neutral150",...e,"data-orientation":"horizontal",role:"separator",tag:"div"})),s9=I(X)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,c9=I(X)`
  svg {
    height: 8.8rem;
  }
`,o$=h.forwardRef(({icon:e,content:n,action:a,hasRadius:c=!0,shadow:o="tableShadow"},l)=>s.jsxs(K,{ref:l,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:c,shadow:o,children:[e?s.jsx(c9,{paddingBottom:6,"aria-hidden":!0,children:e}):null,s.jsx(X,{paddingBottom:4,children:s.jsx(ue,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:n})}),a]})),n2=Oc.define(),r2=Oc.define(),l9=Hc.mark({attributes:{style:"background-color: yellow; color: black"}}),u9=J6.define({create(){return Hc.none},update(e,n){return e=e.map(n.changes),n.effects.forEach(a=>{a.is(n2)?e=e.update({add:a.value,sort:!0}):a.is(r2)&&(e=e.update({filter:a.value}))}),e},provide:e=>P6.decorations.from(e)}),a$=h.forwardRef(({hasError:e,required:n,id:a,value:c="",disabled:o=!1,onChange:l=()=>null,...u},w)=>{const v=h.useRef(),R=h.useRef(),C=h.useRef(),{error:y,...b}=vt("JsonInput"),A=!!y||e,T=b.id??a,M=b.required||n;let V;y?V=`${T}-error`:b.hint&&(V=`${T}-hint`);const L=se=>{const ce=R.current?.doc;if(ce){const{text:$e,to:ne}=ce.line(se),P=ne-$e.trimStart().length;ne>P&&C.current?.dispatch({effects:n2.of([l9.range(P,ne)])})}},j=()=>{const se=R.current?.doc;if(se){const ce=se.length||0;C.current?.dispatch({effects:r2.of(($e,ne)=>ne<=0||$e>=ce)})}},B=({state:se,view:ce})=>{C.current=ce,R.current=se,j();const ne=p4()(ce);ne.length&&L(se.doc.lineAt(ne[0].from).number)},F=(se,ce)=>{B(ce),l(se)},z=(se,ce)=>{C.current=se,R.current=ce,B({view:se,state:ce})},{setContainer:W,view:U}=e4({value:c,onCreateEditor:z,container:v.current,editable:!o,extensions:[t4(),u9],onChange:F,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),oe=xt(v,W);return h.useImperativeHandle(w,()=>({...U?.dom,focus(){U&&U.focus()},scrollIntoView(se){U&&U.dom.scrollIntoView(se)}}),[U]),s.jsx(d9,{ref:oe,$hasError:A,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":M,id:T,"aria-describedby":V,...u})}),d9=I(K)`
  line-height: ${({theme:e})=>e.lineHeights[2]};

  .cm-editor {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral800 changes between themes 
     */
    background-color: #32324d;
    width: 100%;
    outline: none;
  }

  .cm-scroller {
    border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
    /* inputFocusStyle will receive hasError prop */
    ${bn()}
  }

  .cm-editor,
  .cm-scroller {
    border-radius: ${({theme:e})=>e.borderRadius};
  }

  .cm-gutters,
  .cm-activeLineGutter {
    /** 
     * Hard coded since the color is the same between themes,
     * theme.colors.neutral700 changes between themes 
     */
    background-color: #4a4a6a;
  }
`,i$=ht(({disabled:e,...n},a)=>s.jsx(Ma,{ref:a,tag:Br,tabIndex:e?-1:void 0,disabled:e,...n})),h9=I(X)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,s$=({labelledBy:e="main-content-title",...n})=>s.jsx(h9,{"aria-labelledby":e,tag:"main",id:"main-content",tabIndex:-1,...n});I(X)`
  text-decoration: none;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`;const f9=(e,n)=>`${e}${Math.floor(n*255).toString(16).padStart(2,"0")}`,o2=h.forwardRef(({children:e,viewportRef:n,...a},c)=>s.jsxs(g9,{ref:c,...a,children:[s.jsx(m9,{ref:n,children:e}),s.jsx(xc,{orientation:"vertical",children:s.jsx(vc,{})}),s.jsx(xc,{orientation:"horizontal",children:s.jsx(vc,{})})]})),g9=I(v6)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,m9=I(p6)`
  min-width: 100%;
  padding-inline: 4px;
`,xc=I(b6)`
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;

  &[data-orientation='vertical'] {
    width: 0.4rem;
  }

  &[data-orientation='horizontal'] {
    flex-direction: column;
    height: 0.4rem;
  }
`,vc=I($6)`
  position: relative;
  flex: 1;
  background-color: ${e=>e.theme.colors.neutral150};
  border-radius: var(--scrollbar-size);

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,w9=t6,x9=h.forwardRef((e,n)=>s.jsx(r6,{...e,asChild:!0,ref:n})),v9=h.forwardRef((e,n)=>s.jsx(a6,{children:s.jsx(p9,{children:s.jsx(b9,{ref:n,...e})})})),p9=I(f6)`
  background: ${e=>f9(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${qe.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,b9=I(g6)`
  max-width: 83rem;
  max-height: 90vh;
  height: auto;
  width: 60%;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: ${e=>e.theme.borderRadius};
  background-color: ${e=>e.theme.colors.neutral0};
  box-shadow: ${e=>e.theme.shadows.popupShadow};
  z-index: ${e=>e.theme.zIndices.modal};

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation-duration: ${e=>e.theme.motion.timings[200]};
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};
      animation-name: ${qe.modalPopIn};
    }

    &[data-state='closed'] {
      animation-duration: ${e=>e.theme.motion.timings[120]};
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};
      animation-name: ${qe.modalPopOut};
    }
  }
`,a2=h.forwardRef((e,n)=>s.jsx(i6,{...e,asChild:!0,ref:n})),$9=h.forwardRef(({children:e,closeLabel:n="Close modal",...a},c)=>s.jsxs(C9,{ref:c,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...a,tag:"header",children:[e,s.jsx(a2,{children:s.jsx(Ea,{withTooltip:!1,label:n,children:s.jsx(On,{})})})]})),C9=I(K)`
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`,y9=h.forwardRef((e,n)=>s.jsx(o6,{asChild:!0,children:s.jsx(ue,{tag:"h2",variant:"omega",fontWeight:"bold",ref:n,...e})})),S9=h.forwardRef(({children:e,...n},a)=>s.jsx(R9,{ref:a,...n,children:e})),R9=I(o2)`
  padding-inline: ${e=>e.theme.spaces[8]};

  & > div {
    padding-block: ${e=>e.theme.spaces[8]};

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`,_9=h.forwardRef((e,n)=>s.jsx(j9,{ref:n,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...e,tag:"footer"})),j9=I(K)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,c$=Object.freeze(Object.defineProperty({__proto__:null,Body:S9,Close:a2,Content:v9,Footer:_9,Header:$9,Root:w9,Title:y9,Trigger:x9},Symbol.toStringTag,{value:"Module"})),A9="",l$=h.forwardRef(({startAction:e,locale:n,onValueChange:a,value:c,step:o=1,disabled:l=!1,...u},w)=>{const v=Uo("NumberInput"),R=n||v.locale,C=h.useRef(new n4(R,{style:"decimal"})),y=h.useRef(new r4(R,{maximumFractionDigits:20})),[b,A]=I9({prop(W){const U=String(c);return isNaN(Number(U))||U!==W&&W!==""?W:y.current.format(Number(c))},defaultProp:A9,onChange(W){const U=C.current.parse(W??"");a(isNaN(U)?void 0:U)}}),T=W=>{A(String(W))},M=({target:{value:W}})=>{C.current.isValidPartialNumber(W)&&T(W)},L=(W=>{const U=W.toString();return U.includes(".")?U.split(".")[1].length:0})(o),j=()=>{if(!b){T(o);return}const W=C.current.parse(b),U=isNaN(W)?o:W+o,oe=parseFloat(U.toFixed(L));T(y.current.format(oe))},B=()=>{if(!b){T(-o);return}const W=C.current.parse(b),U=isNaN(W)?-o:W-o,oe=parseFloat(U.toFixed(L));T(y.current.format(oe))},F=W=>{if(!l)switch(W.key){case st.DOWN:{W.preventDefault(),B();break}case st.UP:{W.preventDefault(),j();break}}},z=()=>{if(b){const W=C.current.parse(b),U=isNaN(W)?"":y.current.format(W);T(U)}};return s.jsx(ko,{ref:w,startAction:e,disabled:l,type:"text",inputMode:"decimal",onChange:M,onKeyDown:F,onBlur:z,value:b,endAction:s.jsxs(K,{direction:"column",children:[s.jsx(pc,{disabled:l,"aria-hidden":!0,$reverse:!0,onClick:j,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:s.jsx(Vn,{fill:"neutral500"})}),s.jsx(pc,{disabled:l,"aria-hidden":!0,onClick:B,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:s.jsx(Vn,{fill:"neutral500"})})]}),...u})}),pc=I.button`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(${({$reverse:e})=>e?"-2px":"2px"});
  cursor: ${({disabled:e})=>e?"not-allowed":void 0};
  height: 1.1rem;

  svg {
    width: 1.2rem;
    transform: ${({$reverse:e})=>e?"rotateX(180deg)":void 0};
  }
`;function I9({prop:e,defaultProp:n,onChange:a=()=>{}}){const[c,o]=jl({defaultProp:n,onChange:a}),l=e!==void 0,u=e instanceof Function?e(c):e,w=l?u:c,v=qa(a),R=h.useCallback(C=>{if(l){const b=typeof C=="function"?C(u):C;b!==u&&(v(b),o(C))}else o(C)},[l,u,o,v]);return[w,R]}const T9=h.createContext({activePage:1,pageCount:1}),pi=()=>h.useContext(T9);ht(({children:e,...n},a)=>{const{activePage:c}=pi(),o=c===1;return s.jsxs(s2,{ref:a,"aria-disabled":o,tabIndex:o?-1:void 0,...n,children:[s.jsx(sr,{children:e}),s.jsx(pl,{"aria-hidden":!0})]})});ht(({children:e,...n},a)=>{const{activePage:c,pageCount:o}=pi(),l=c===o;return s.jsxs(s2,{ref:a,"aria-disabled":l,tabIndex:l?-1:void 0,...n,children:[s.jsx(sr,{children:e}),s.jsx(ui,{"aria-hidden":!0})]})});const i2=I(Br)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:n})=>e?n.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${Fo}
`,s2=I(i2)`
  font-size: 1.1rem;

  svg path {
    fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral600};
  }

  &:focus,
  &:hover {
    svg path {
      fill: ${e=>e["aria-disabled"]?e.theme.colors.neutral300:e.theme.colors.neutral700};
    }
  }

  ${e=>e["aria-disabled"]?`
  pointer-events: none;
    `:void 0}
`;ht(({number:e,children:n,...a},c)=>{const{activePage:o}=pi(),l=o===e;return s.jsxs(M9,{ref:c,...a,"aria-current":l,$active:l,children:[s.jsx(sr,{children:n}),s.jsx(ue,{"aria-hidden":!0,fontWeight:l?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})});const M9=I(i2)`
  color: ${({theme:e,$active:n})=>n?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:n})=>n?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`,E9=b4,L9=h.forwardRef((e,n)=>s.jsx(o4,{...e,asChild:!0,ref:n})),V9=h.forwardRef((e,n)=>s.jsx(a4,{children:s.jsx(D9,{sideOffset:4,side:"bottom",align:"start",...e,ref:n})})),D9=I(i4)`
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  z-index: ${({theme:e})=>e.zIndices.popover};
  background-color: ${e=>e.theme.colors.neutral0};
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: ${e=>e.theme.motion.timings[200]};

    &[data-state='open'] {
      animation-timing-function: ${e=>e.theme.motion.easings.authenticMotion};

      &[data-side='top'] {
        animation-name: ${qe.slideUpIn};
      }

      &[data-side='bottom'] {
        animation-name: ${qe.slideDownIn};
      }
    }

    &[data-state='closed'] {
      animation-timing-function: ${e=>e.theme.motion.easings.easeOutQuad};

      &[data-side='top'] {
        animation-name: ${qe.slideUpOut};
      }

      &[data-side='bottom'] {
        animation-name: ${qe.slideDownOut};
      }
    }
  }
`,B9=h.forwardRef(({children:e,intersectionId:n,onReachEnd:a,...c},o)=>{const l=h.useRef(null),u=xt(l,o),w=Wt();return Or(l,a??(()=>{}),{selectorToWatch:`#${rr(w)}`,skipWhen:!n||!a}),s.jsxs(O9,{ref:u,...c,children:[e,n&&a&&s.jsx(X,{id:rr(w),width:"100%",height:"1px"})]})}),O9=I(o2)`
  height: 20rem;
`,u$=Object.freeze(Object.defineProperty({__proto__:null,Content:V9,Root:E9,ScrollArea:B9,Trigger:L9},Symbol.toStringTag,{value:"Module"}));h.forwardRef(({size:e="M",value:n,...a},c)=>s.jsx(H9,{ref:c,$size:e,...a,children:s.jsx(N9,{style:{transform:`translate3D(-${100-(n??0)}%, 0, 0)`}})}));const H9=I(s4)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,N9=I(c4)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;h.forwardRef((e,n)=>s.jsx(F9,{ref:n,...e}));const F9=I(l4)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`;h.forwardRef(({children:e,id:n,...a},c)=>{const o=Wt(n);return s.jsxs(K,{gap:2,children:[s.jsx(z9,{id:o,ref:c,...a,children:s.jsx(W9,{})}),s.jsx(ue,{tag:"label",htmlFor:o,children:e})]})});const z9=I(u4)`
  background: ${e=>e.theme.colors.neutral0};
  width: 2rem;
  height: 2rem;
  flex: 0 0 2rem;
  border-radius: 50%;
  border: 1px solid ${e=>e.theme.colors.neutral300};
  position: relative;
  z-index: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: border-color ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.easeOutQuad};
  }

  &[data-state='checked'] {
    border: 1px solid ${e=>e.theme.colors.primary600};
  }

  &[data-disabled] {
    background-color: ${e=>e.theme.colors.neutral200};
  }

  /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    min-width: 44px;
    min-height: 44px;
  }
`,W9=I(d4)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;

  &[data-state='checked'] {
    @media (prefers-reduced-motion: no-preference) {
      animation: ${qe.popIn} ${e=>e.theme.motion.timings[200]};
    }
  }

  &::after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: ${e=>e.theme.colors.primary600};
  }
`,k9=e=>{const n=e.querySelector('[tabindex="0"]');n&&n.focus()},c2=h.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),U9=()=>h.useContext(c2),q9=h.forwardRef(({colCount:e,rowCount:n,jumpStep:a=3,initialCol:c=0,initialRow:o=0,...l},u)=>{const w=h.useRef(null),v=h.useRef(!1),R=xt(w,u),[C,y]=h.useState(o),[b,A]=h.useState(c),T=h.useCallback(({colIndex:L,rowIndex:j})=>{A(L),y(j)},[]);h.useEffect(()=>{v.current&&k9(w.current),v.current||(v.current=!0)},[b,C]);const M=L=>{switch(L.key){case st.RIGHT:{L.preventDefault(),A(j=>j<e-1?j+1:j);break}case st.LEFT:{L.preventDefault(),A(j=>j>0?j-1:j);break}case st.UP:{L.preventDefault(),y(j=>j>0?j-1:j);break}case st.DOWN:{L.preventDefault(),y(j=>j<n-1?j+1:j);break}case st.HOME:{L.preventDefault(),L.ctrlKey&&y(0),A(0);break}case st.END:{L.preventDefault(),L.ctrlKey&&y(n-1),A(e-1);break}case st.PAGE_DOWN:{L.preventDefault(),y(j=>j+a<n?j+a:n-1);break}case st.PAGE_UP:{L.preventDefault(),y(j=>j-a>0?j-a:0);break}}},V=h.useMemo(()=>({rowIndex:C,colIndex:b,setTableValues:T}),[b,C,T]);return s.jsx(c2.Provider,{value:V,children:s.jsx("table",{role:"grid",ref:R,"aria-rowcount":n,"aria-colcount":e,onKeyDown:M,...l})})}),Ar=(e,n)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(o=>!o.hasAttribute("disabled")),va=e=>e.filter(n=>n.tagName==="INPUT"?n.type!=="checkbox"&&n.type!=="radio":!1),l2=h.forwardRef(({coords:e={col:0,row:0},tag:n="td",...a},c)=>{const o=h.useRef(null),l=xt(c,o),{rowIndex:u,colIndex:w,setTableValues:v}=U9(),[R,C]=h.useState(!1),y=T=>{const M=Ar(o.current);if(M.length===0||M.length===1&&va(M).length===0)return;if(M.length>1&&!M.find(L=>L.tagName!=="BUTTON")){T.preventDefault();const L=M.findIndex(j=>j===document.activeElement);if(T.key===st.RIGHT){const j=M[L+1];j&&(T.stopPropagation(),j.focus())}else if(T.key===st.LEFT){const j=M[L-1];j&&(T.stopPropagation(),j.focus())}return}const V=T.key===st.ENTER;if(V&&!R)C(!0);else if((T.key===st.ESCAPE||V)&&R){if(V&&document.activeElement?.tagName==="A")return;C(!1),o.current.focus()}else R&&T.stopPropagation()},b=u===e.row-1&&w===e.col-1;or(()=>{const T=Ar(o.current);T.length===0||T.length===1&&va(T).length!==0||T.length>1&&T.find(M=>M.tagName!=="BUTTON")?(o.current.setAttribute("tabIndex",!R&&b?"0":"-1"),T.forEach((M,V)=>{M.setAttribute("tabIndex",R?"0":"-1"),R&&V===0&&M.focus()})):T.forEach(M=>{M.setAttribute("tabIndex",b?"0":"-1")})},[R,b]);const A=h.useCallback(()=>{const T=Ar(o.current);T.length>=1&&(va(T).length!==0||!T.find(M=>M.tagName!=="BUTTON"))&&C(!0),v({rowIndex:e.row-1,colIndex:e.col-1})},[e,v]);return or(()=>{const T=o.current;return Ar(T).forEach(V=>{V.addEventListener("focus",A)}),()=>{Ar(T).forEach(L=>{L.removeEventListener("focus",A)})}},[A]),s.jsx(X,{role:"gridcell",tag:n,ref:l,onKeyDown:y,...a})}),G9=e=>s.jsx(l2,{...e,tag:"th"}),K9=({children:e,...n})=>{const a=h.Children.toArray(e).map(c=>h.isValidElement(c)?h.cloneElement(c,{"aria-rowindex":1}):c);return s.jsx("thead",{...n,children:a})},Y9=({children:e,...n})=>{const a=h.Children.toArray(e).map((c,o)=>h.isValidElement(c)?h.cloneElement(c,{"aria-rowindex":o+2}):c);return s.jsx("tbody",{...n,children:a})},Z9=({children:e,...n})=>{const a=h.Children.toArray(e).map((c,o)=>h.isValidElement(c)?h.cloneElement(c,{"aria-colindex":o+1,coords:{col:o+1,row:n["aria-rowindex"]}}):c);return s.jsx(X,{tag:"tr",...n,children:a})},X9=I(On)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,u2=I(Dv)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,Q9=I.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${u2} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,J9=I(ko)`
  border: 1px solid transparent;

  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${bn()}
`;h.forwardRef(({name:e,children:n,value:a="",onClear:c,clearLabel:o,...l},u)=>{const w=h.useRef(null),v=a.length>0,R=y=>{c(y),w.current.focus()},C=Ml(u,w);return s.jsx(Q9,{children:s.jsxs(Dn,{name:e,children:[s.jsx(sr,{children:s.jsx(wi,{children:n})}),s.jsx(J9,{ref:C,value:a,startAction:s.jsx(u2,{"aria-hidden":!0}),endAction:v?s.jsx(Ul,{label:o,onClick:R,onMouseDown:y=>{y.preventDefault()},children:s.jsx(X9,{})}):void 0,...l})]})})});const P9=I(X)`
  display: inline-flex;
  border: none;

  & > svg {
    height: 1.2rem;
    width: 1.2rem;
  }

  & > svg path {
    fill: ${({theme:e,...n})=>n["aria-disabled"]?e.colors.neutral600:e.colors.primary600};
  }

  &:hover {
    cursor: ${({$iconAction:e})=>e?"pointer":"initial"};
  }
`,eb=({children:e,icon:n,label:a,disabled:c=!1,onClick:o,...l})=>{const u=w=>{c||!o||o(w)};return s.jsxs(K,{inline:!0,background:c?"neutral200":"primary100",color:c?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:c?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...l,children:[s.jsx(tb,{$disabled:c,variant:"pi",fontWeight:"bold",children:e}),s.jsx(P9,{tag:"button",disabled:c,"aria-disabled":c,"aria-label":a,padding:2,onClick:u,$iconAction:!!o,children:n})]})},tb=I(ue)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:n})=>n?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;h.forwardRef(({children:e,clearLabel:n="Clear",customizeContent:a,disabled:c,hasError:o,id:l,name:u,onChange:w,onClear:v,onCloseAutoFocus:R,onReachEnd:C,placeholder:y,required:b,size:A,startIcon:T,value:M,withTags:V,...L},j)=>{const B=h.useRef(null),[F,z]=h.useState(),[W,U]=h.useState(!1),oe=we=>{w?w(we):z(we)},se=we=>()=>{const ze=Array.isArray(M)?M.filter(Ne=>Ne!==we):(F??[]).filter(Ne=>Ne!==we);w?w(ze):z(ze)},ce=we=>{U(we)},$e=Wt(),ne=`intersection-${rr($e)}`;Or(B,we=>{C&&C(we)},{selectorToWatch:`#${ne}`,skipWhen:!W});const ee=typeof M<"u"&&M!==null?M:F,_e=we=>we&&typeof we=="object"&&we.value?s.jsx(eb,{tabIndex:-1,disabled:c,icon:s.jsx(On,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:se(we.value),children:we.textValue},we.value):null,{error:je,...me}=vt("MultiSelect"),ye=!!je||o,Me=me.id??l,De=me.name??u,he=me.required??b;let Je;return je?Je=`${Me}-error`:me.hint&&(Je=`${Me}-hint`),s.jsxs(Kl,{onOpenChange:ce,disabled:c,required:he,onValueChange:oe,value:ee,...L,multi:!0,children:[s.jsx(Yl,{ref:j,id:Me,name:De,"aria-label":L["aria-label"],"aria-describedby":Je??L["aria-describedby"],startIcon:T,hasError:ye,disabled:c,clearLabel:n,onClear:ee?.length?v:void 0,withTags:!!(V&&(ee?.length??!1)),size:A,children:s.jsx(Zl,{placeholder:y,textColor:ee?.length?"neutral800":"neutral600",children:ee?.length?V?_e:a?a(ee):void 0:void 0})}),s.jsx(Xl,{children:s.jsx(Ql,{position:"popper",sideOffset:4,onCloseAutoFocus:R,children:s.jsxs(Jl,{ref:B,children:[e,s.jsx(X,{id:ne,width:"100%",height:"1px"})]})})})]})});const nb=h.forwardRef(({value:e,children:n,startIcon:a,...c},o)=>s.jsxs(vi,{ref:o,value:e.toString(),...c,children:[a&&s.jsx(X,{tag:"span","aria-hidden":!0,children:a}),s.jsx(Pl,{children:({isSelected:l,isIntermediate:u})=>s.jsx(mi,{checked:u?"indeterminate":l})}),s.jsx(ue,{children:s.jsx(e2,{children:n})})]}));h.forwardRef(({children:e,label:n,startIcon:a,values:c=[],...o},l)=>s.jsxs(Mp,{ref:l,children:[s.jsxs(vi,{value:c,...o,children:[a&&s.jsx(X,{tag:"span","aria-hidden":!0,children:a}),s.jsx(Pl,{children:({isSelected:u,isIntermediate:w})=>s.jsx(mi,{checked:w?"indeterminate":u})}),s.jsx(ue,{children:n})]}),e]}));I(nb)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`;const rb="23.2rem";h.forwardRef(({...e},n)=>s.jsx(ob,{ref:n,...e,tag:"nav"}));const ob=I(X)`
  width: ${rb};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`;I(i9)`
  width: 2.4rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`;ht(({active:e,children:n,icon:a=null,withBullet:c=!1,isSubSectionChild:o=!1,...l},u)=>s.jsxs(ab,{background:"neutral100",paddingLeft:o?9:7,paddingBottom:2,paddingTop:2,ref:u,...l,children:[s.jsxs(K,{children:[a?s.jsx(ib,{children:a}):s.jsx(Va,{$active:e}),s.jsx(ue,{paddingLeft:2,children:n})]}),c&&s.jsx(K,{paddingRight:4,children:s.jsx(Va,{$active:!0})})]}));const Va=I.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:e,$active:n})=>n?e.colors.primary600:e.colors.neutral600};
  border-radius: 50%;
`,ab=I(Br)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>te`
        background-color: ${e.colors.primary100};
        border-right: 2px solid ${e.colors.primary600};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}

    ${Va} {
      background-color: ${({theme:e})=>e.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,ib=I.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;I.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;I(X)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;h.forwardRef(({visibleLabels:e,onLabel:n="On",offLabel:a="Off",onCheckedChange:c,checked:o,defaultChecked:l,disabled:u,...w},v)=>{const[R,C]=Kt({prop:o,defaultProp:l}),y=b=>{C(b)};return s.jsxs(K,{gap:3,children:[s.jsx(sb,{ref:v,onCheckedChange:En(c,y),checked:R,disabled:u,...w,children:s.jsx(cb,{})}),e?s.jsx(lb,{"aria-hidden":!0,"data-disabled":u,"data-state":R?"checked":"unchecked",children:R?n:a}):null]})});const sb=I(h4)`
  width: 4rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  background-color: ${({theme:e})=>e.colors.danger500};

  &[data-state='checked'] {
    background-color: ${({theme:e})=>e.colors.success500};
  }

  &[data-disabled] {
    background-color: ${({theme:e})=>e.colors.neutral300};
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`,cb=I(f4)`
  display: block;
  height: 1.6rem;
  width: 1.6rem;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.neutral0};
  transform: translateX(4px);

  &[data-state='checked'] {
    transform: translateX(20px);
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[120]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,lb=I(ue)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`,[ub,bi]=Dr("Tabs");h.forwardRef(({disabled:e=!1,variant:n="regular",hasError:a,...c},o)=>s.jsx(ub,{disabled:e,hasError:a,variant:n,children:s.jsx(db,{ref:o,...c})}));const db=I(g4)`
  width: 100%;
  position: relative;
`;h.forwardRef((e,n)=>{const{variant:a}=bi("List");return s.jsx(hb,{ref:n,...e,$variant:a})});const hb=I(m4)`
  display: flex;
  align-items: ${e=>e.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`;h.forwardRef(({children:e,disabled:n,...a},c)=>{const{disabled:o,variant:l,hasError:u}=bi("Trigger"),w=o===!0||o===a.value||n,v=u===a.value;return s.jsxs(fb,{ref:c,...a,$hasError:v,$variant:l,disabled:w,children:[s.jsx(h2,{fontWeight:"bold",variant:l==="simple"?"sigma":void 0,children:e}),l==="simple"?s.jsx(d2,{}):null]})});const d2=I.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,h2=I(ue)``,fb=I(w4)`
  position: relative;
  color: ${e=>e.$hasError?e.theme.colors.danger600:e.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${e=>e.$variant==="simple"?te`
        padding-block: ${n=>n.theme.spaces[4]};
        padding-inline: ${n=>n.theme.spaces[4]};

        & > ${h2} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};

          & > ${d2} {
            opacity: 1;
          }
        }
      `:te`
        padding-block: ${n=>n.theme.spaces[3]};
        padding-inline: ${n=>n.theme.spaces[3]};
        flex: 1;
        background-color: ${n=>n.theme.colors.neutral100};
        border-bottom: solid 1px ${n=>n.theme.colors.neutral150};

        &:not([data-state='active']) + &:not([data-state='active']) {
          border-left: solid 1px ${n=>n.theme.colors.neutral150};
        }

        &[data-state='active'] {
          padding-block: ${n=>n.theme.spaces[4]};
          padding-inline: ${n=>n.theme.spaces[4]};
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};
          border-top-right-radius: ${n=>n.theme.borderRadius};
          border-top-left-radius: ${n=>n.theme.borderRadius};
          background-color: ${n=>n.theme.colors.neutral0};
          border-bottom: solid 1px ${n=>n.theme.colors.neutral0};
          box-shadow: ${e.theme.shadows.tableShadow};
          z-index: 1;
        }
      `}

  &[data-disabled] {
    cursor: not-allowed;
    color: ${e=>e.theme.colors.neutral400};
  }
`;h.forwardRef((e,n)=>{const{variant:a}=bi("Content");return s.jsx(gb,{$variant:a,ref:n,...e})});const gb=I(x4)`
  ${e=>e.$variant==="simple"?te``:te`
        position: relative;
        z-index: 1;
        background-color: ${n=>n.theme.colors.neutral0};
      `}
`,mb=I(X)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,wb=I(q9)`
  width: 100%;
  white-space: nowrap;
`,xb=I(X)`
  &:before {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(90deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="left"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    left: 0;
  }

  &:after {
    // TODO: make sure to add a token for this weird stuff
    background: linear-gradient(270deg, #c0c0cf 0%, rgba(0, 0, 0, 0) 100%);
    opacity: 0.2;
    position: absolute;
    height: 100%;
    content: ${({$overflowing:e})=>e==="both"||e==="right"?"''":void 0};
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
    width: ${({theme:e})=>e.spaces[2]};
    right: 0;
    top: 0;
  }
`,vb=I(X)`
  overflow-x: auto;
`,d$=h.forwardRef(({footer:e,...n},a)=>{const c=h.useRef(null),[o,l]=h.useState(),u=w=>{const v=w.target.scrollWidth-w.target.clientWidth;if(w.target.scrollLeft===0){l("right");return}if(w.target.scrollLeft===v){l("left");return}w.target.scrollLeft>0&&l("both")};return h.useEffect(()=>{c.current.scrollWidth>c.current.clientWidth&&l("right")},[]),s.jsxs(mb,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[s.jsx(xb,{$overflowing:o,position:"relative",children:s.jsx(vb,{ref:c,onScroll:u,paddingLeft:6,paddingRight:6,children:s.jsx(wb,{ref:a,...n})})}),e]})}),pb=I(Y9)`
  & tr:last-of-type {
    border-bottom: none;
  }
`,h$=({children:e,...n})=>s.jsx(pb,{...n,children:e}),bb=I(K9)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`,f$=({children:e,...n})=>s.jsx(bb,{...n,children:e}),$b=I(Z9)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};

  & td,
  & th {
    padding: ${({theme:e})=>e.spaces[4]};
  }

  & td:first-of-type,
  & th:first-of-type {
    padding: 0 ${({theme:e})=>e.spaces[1]};
  }

  // Resetting padding values and fixing a height
  th {
    padding-top: 0;
    padding-bottom: 0;
    height: 5.6rem;
  }
`,g$=e=>s.jsx($b,{...e}),f2=I(l2)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`,m$=h.forwardRef(({children:e,action:n,...a},c)=>s.jsx(f2,{color:"neutral600",as:G9,ref:c,...a,children:s.jsxs(K,{children:[e,n]})})),w$=h.forwardRef(({children:e,...n},a)=>s.jsx(f2,{color:"neutral800",ref:a,...n,children:e}));I(X)`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 1rem;
    width: 1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`;I(X)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;ht(({children:e,startIcon:n,endIcon:a,disabled:c=!1,loading:o=!1,...l},u)=>{const w=c||o;return s.jsxs(Sb,{ref:u,disabled:w,"aria-disabled":w,tag:"button",type:"button",gap:2,...l,children:[o?s.jsx(yb,{"aria-hidden":!0,children:s.jsx(bl,{})}):n,s.jsx(ue,{variant:"pi",children:e}),a]})});const Cb=it`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,yb=I.span`
  display: flex;
  animation: ${Cb} 2s infinite linear;
  will-change: transform;
`,Sb=I(K)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${Fo}
`,Rb=h.forwardRef((e,n)=>s.jsx(ko,{ref:n,...e}));Rb.displayName="TextInput";const x$=h.forwardRef(({disabled:e,hasError:n,id:a,name:c,required:o,...l},u)=>{const{error:w,...v}=vt("Textarea"),R=!!w||n,C=v.id??a,y=v.name??c,b=v.required||o;let A;return w?A=`${C}-error`:v.hint&&(A=`${C}-hint`),s.jsx(_b,{borderColor:R?"danger600":"neutral200",$hasError:R,hasRadius:!0,children:s.jsx(jb,{"aria-invalid":R,"aria-required":b,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,ref:u,lineHeight:4,padding:4,width:"100%",height:"100%",id:C,name:y,"aria-describedby":A,...l})})}),_b=I(X)`
  height: 10.5rem;
  ${bn()}
`,jb=I(X)`
  border: none;
  resize: none;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
    font-size: ${({theme:e})=>e.fontSizes[2]};
    color: ${({theme:e})=>e.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`,v$=h.forwardRef(({offLabel:e,onLabel:n,disabled:a,hasError:c,required:o,id:l,name:u,checked:w,onChange:v,...R},C)=>{const[y=!1,b]=Kt({prop:w}),A=y!==null&&!y,{error:T,...M}=vt("Toggle"),V=!!T||c,L=M.id??l,j=M.name??u,B=M.required||o;let F;return T?F=`${L}-error`:M.hint&&(F=`${L}-hint`),s.jsxs(Ab,{position:"relative",hasRadius:!0,padding:1,background:a?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",wrap:"wrap",cursor:a?"not-allowed":"pointer",$hasError:V,children:[s.jsx(bc,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:a&&A?"neutral200":A?"neutral0":"transparent",borderColor:a&&A?"neutral300":A?"neutral200":a?"neutral150":"neutral100",children:s.jsx(ue,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:a?"neutral700":A?"danger700":"neutral600",children:e})}),s.jsx(bc,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:a&&y?"neutral200":y?"neutral0":"transparent",borderColor:a&&y?"neutral300":y?"neutral200":a?"neutral150":"neutral100",children:s.jsx(ue,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:a?"neutral700":y?"primary600":"neutral600",children:n})}),s.jsx(Ib,{...R,id:L,name:j,ref:C,onChange:z=>{b(z.currentTarget.checked),v?.(z)},type:"checkbox","aria-required":B,disabled:a,"aria-disabled":a,checked:!!y,"aria-describedby":F})]})}),Ab=I(K)`
  ${bn()}
`,bc=I(K)`
  padding-block: 0.6rem;
`,Ib=I.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`,Tb=ht((e,n)=>{const{gap:a=0,gridCols:c=12,...o}=e;return s.jsx(Mb,{ref:n,$gap:a,$gridCols:c,...o})}),Mb=I(X)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:n})=>No({gap:n},e)}
`,Eb=ht(({col:e,s:n,xs:a,m:c,...o},l)=>s.jsx(Lb,{ref:l,$col:e,$s:n,$xs:a,$m:c,...o})),Lb=I(K)`
  grid-column: span ${({$xs:e})=>e??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:n})=>e??n??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:n,$xs:a})=>e??n??a??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:n,$s:a,$xs:c})=>e??n??a??c??12};
  }
`,p$=Object.freeze(Object.defineProperty({__proto__:null,Item:Eb,Root:Tb},Symbol.toStringTag,{value:"Module"}));function Vb(e,n,a){if(a===void 0&&(a=Error),!e)throw new a(n)}var Db=function(e){console.error(e)},Bb=function(e){console.warn(e)},Ob={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:Db,onWarn:Bb};function Hb(e){Vb(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}J1(J1({},Ob),{textComponent:h.Fragment});var $i=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=h.createContext(null)):h.createContext(null);$i.Consumer;$i.Provider;var Nb=$i;function g2(){var e=h.useContext(Nb);return Hb(e),e}var Da;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Da||(Da={}));var Ba;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Ba||(Ba={}));function m2(e){var n=function(a){var c=g2(),o=a.value,l=a.children,u=Nc(a,["value","children"]),w=typeof o=="string"?new Date(o||0):o,v=e==="formatDate"?c.formatDateToParts(w,u):c.formatTimeToParts(w,u);return l(v)};return n.displayName=Ba[e],n}function Fr(e){var n=function(a){var c=g2(),o=a.value,l=a.children,u=Nc(a,["value","children"]),w=c[e](o,u);if(typeof l=="function")return l(w);var v=c.textComponent||h.Fragment;return h.createElement(v,null,w)};return n.displayName=Da[e],n}Fr("formatDate");Fr("formatTime");Fr("formatNumber");Fr("formatList");Fr("formatDisplayName");m2("formatDate");m2("formatTime");export{Ub as $,Jb as A,e7 as B,t7 as C,Vp as D,r9 as E,Yb as F,p$ as G,d8 as H,Ea as I,a$ as J,Kb as K,g7 as L,c$ as M,l$ as N,Vn as O,u$ as P,Fa as Q,i$ as R,fc as S,d$ as T,Zb as U,sr as V,o$ as W,e$ as X,s$ as Y,Xb as Z,Qb as _,R4 as a,f$ as b,g$ as c,m$ as d,ue as e,h$ as f,w$ as g,K as h,Ma as i,Pb as j,v$ as k,Rb as l,t$ as m,X as n,zb as o,kb as p,qa as q,Wb as r,xt as s,mi as t,g2 as u,r$ as v,gc as w,qb as x,Gb as y,x$ as z};
