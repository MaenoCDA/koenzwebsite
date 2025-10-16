import{m0 as Rc,r as h,l$ as X3,m1 as _c,lT as et,j as s,lV as Ke,lS as He,lU as Rt,lQ as jc,m8 as Ac,al as ir,l_ as On,m4 as Q3,m9 as J3,m7 as tr,ma as Ic,lW as Tc,lX as Wi,m2 as Si,lR as Ui,lY as Mc,lZ as Ec,m3 as rc,cG as Lc,m5 as P3,m6 as e6,mb as _,J as T,js as t6,cL as te,ch as at,mB as n6,mC as r6,mA as o6,mD as i6,mE as a6,mc as Vc,md as Dc,mH as s6,me as Bc,mI as c6,mJ as l6,mh as Hc,mK as u6,mL as Oc,mM as d6,mN as h6,mO as f6,mP as g6,mQ as m6,mF as x6,mG as w6,mm as v6,mp as p6,mu as b6,mv as $6,mn as C6,mo as y6,mq as S6,mr as R6,y as _6,mR as Ri,mS as qi,mT as _i,mU as ji,mV as j6,mW as A6,mX as I6,mY as T6,mZ as M6,m_ as E6,m$ as L6,n0 as Nc,n1 as V6,n2 as Fc,n3 as D6,n4 as B6,n5 as H6,n6 as O6,n7 as N6,n8 as zc,n9 as kc,na as F6,nb as z6,nc as k6,nd as W6,mw as U6,mx as q6,my as G6,mz as K6,mi as Y6,mk as Z6,ms as X6,mt as Q6,ml as J6,mj as P6,ne as e4,nf as t4,ng as n4,nh as r4,ni as o4,nj as i4,nk as a4,nl as s4,nm as c4,nn as l4,no as u4,np as d4,nq as h4,nr as f4,ns as g4,nt as m4,nu as x4,nv as w4,lC as oc,lE as Wc,P as Vo,nx as v4,s as p4,u as b4,aq as $4,ar as C4,at as y4,aA as ic,av as S4,ax as ac,ny as R4}from"./strapi-BWAWKOj2.js";var _4=function(e){if(typeof document>"u")return null;var n=Array.isArray(e)?e[0]:e;return n.ownerDocument.body},er=new WeakMap,Eo=new WeakMap,Lo={},pi=0,Uc=function(e){return e&&(e.host||Uc(e.parentNode))},j4=function(e,n){return n.map(function(i){if(e.contains(i))return i;var c=Uc(i);return c&&e.contains(c)?c:(console.error("aria-hidden",i,"in not contained inside",e,". Doing nothing"),null)}).filter(function(i){return!!i})},A4=function(e,n,i,c){var o=j4(n,Array.isArray(e)?e:[e]);Lo[i]||(Lo[i]=new WeakMap);var l=Lo[i],u=[],x=new Set,v=new Set(o),R=function(y){!y||x.has(y)||(x.add(y),R(y.parentNode))};o.forEach(R);var $=function(y){!y||v.has(y)||Array.prototype.forEach.call(y.children,function(b){if(x.has(b))$(b);else try{var A=b.getAttribute(c),M=A!==null&&A!=="false",I=(er.get(b)||0)+1,V=(l.get(b)||0)+1;er.set(b,I),l.set(b,V),u.push(b),I===1&&M&&Eo.set(b,!0),V===1&&b.setAttribute(i,"true"),M||b.setAttribute(c,"true")}catch(L){console.error("aria-hidden: cannot operate on ",b,L)}})};return $(n),x.clear(),pi++,function(){u.forEach(function(y){var b=er.get(y)-1,A=l.get(y)-1;er.set(y,b),l.set(y,A),b||(Eo.has(y)||y.removeAttribute(c),Eo.delete(y)),A||y.removeAttribute(i)}),pi--,pi||(er=new WeakMap,er=new WeakMap,Eo=new WeakMap,Lo={})}},qc=function(e,n,i){i===void 0&&(i="data-aria-hidden");var c=Array.from(Array.isArray(e)?e:[e]),o=_4(e);return o?(c.push.apply(c,Array.from(o.querySelectorAll("[aria-live]"))),A4(c,o,i,"aria-hidden")):function(){return null}};function I4(e){const n=`${e}CollectionProvider`,[i,c]=Rc(n),[o,l]=i(n,{collectionRef:{current:null},itemMap:new Map,listeners:new Set}),u=A=>{const{scope:M,children:I}=A,V=h.useRef(null),L=h.useRef(new Map).current,j=h.useRef(new Set).current;return s.jsx(o,{scope:M,itemMap:L,collectionRef:V,listeners:j,children:I})};u.displayName=n;const x=`${e}CollectionSlot`,v=h.forwardRef((A,M)=>{const{scope:I,children:V}=A,L=l(x,I),j=et(M,L.collectionRef);return s.jsx(Si,{ref:j,children:V})});v.displayName=x;const R=`${e}CollectionItemSlot`,$="data-radix-collection-item",y=h.forwardRef((A,M)=>{const{scope:I,children:V,...L}=A,j=h.useRef(null),B=et(M,j),F=l(R,I);return h.useEffect(()=>{const z=Array.from(F.itemMap.values());return F.itemMap.set(j,{ref:j,...L}),F.listeners.forEach(k=>k(Array.from(F.itemMap.values()),z)),()=>{const k=Array.from(F.itemMap.values());F.itemMap.delete(j),F.listeners.forEach(U=>U(Array.from(F.itemMap.values()),k))}}),s.jsx(Si,{[$]:"",ref:B,children:V})});y.displayName=R;function b(A){const M=l(`${e}CollectionConsumer`,A),I=h.useCallback(()=>{const L=M.collectionRef.current;if(!L)return[];const j=Array.from(L.querySelectorAll(`[${$}]`));return Array.from(M.itemMap.values()).sort((z,k)=>j.indexOf(z.ref.current)-j.indexOf(k.ref.current))},[M.collectionRef,M.itemMap]),V=h.useCallback(L=>(M.listeners.add(L),()=>M.listeners.delete(L)),[M.listeners]);return{getItems:I,subscribe:V}}return[{Provider:u,Slot:v,ItemSlot:y},b,c]}const bi=new Map;function T4(e,n){const i=e+(n?Object.entries(n).sort((o,l)=>o[0]<l[0]?-1:1).join():"");if(bi.has(i))return bi.get(i);const c=new Intl.Collator(e,n);return bi.set(i,c),c}function Gi(e,n){const i=T4(e,{usage:"search",...n});return{startsWith(c,o){return o.length===0?!0:(c=c.normalize("NFC"),o=o.normalize("NFC"),i.compare(c.slice(0,o.length),o)===0)},endsWith(c,o){return o.length===0?!0:(c=c.normalize("NFC"),o=o.normalize("NFC"),i.compare(c.slice(-o.length),o)===0)},contains(c,o){if(o.length===0)return!0;c=c.normalize("NFC"),o=o.normalize("NFC");let l=0;const u=o.length;for(;l+u<=c.length;l++){const x=c.slice(l,l+u);if(i.compare(o,x)===0)return!0}return!1}}}const M4=e=>{const n=h.useRef();return h.useEffect(()=>{n.current=e}),n.current},E4=[" ","Enter","ArrowUp","ArrowDown"],L4=["Enter"],V4=e=>!!(e.length===1&&e.match(/\S| /)),Gc="Combobox",[nr,Vr]=I4(Gc),[D4,Yt]=Lc(Gc),B4=({children:e})=>s.jsx(Ic,{children:s.jsx(nr.Provider,{scope:void 0,children:e})}),H4=e=>typeof e=="string"?e==="none"?{type:e,filter:void 0}:{type:e,filter:"startsWith"}:e,O4=e=>{const{allowCustomValue:n=!1,autocomplete:i="none",children:c,open:o,defaultOpen:l,onOpenChange:u,value:x,defaultValue:v,onValueChange:R,disabled:$,required:y=!1,locale:b="en-EN",onTextValueChange:A,textValue:M,defaultTextValue:I,filterValue:V,defaultFilterValue:L,onFilterValueChange:j,isPrintableCharacter:B=V4}=e,[F,z]=h.useState(null),[k,U]=h.useState(null),[oe,se]=h.useState(null),[le,$e]=h.useState(null),[ne=!1,P]=tr({prop:o,defaultProp:l,onChange:u}),[ee,_e]=tr({prop:x,defaultProp:v,onChange:R}),[je,me]=tr({prop:M,defaultProp:n&&!I?x:I,onChange:A}),[ye,Me]=tr({prop:V,defaultProp:L,onChange:j}),De=On(),he=h.useCallback((xe,ze)=>{const Ne=ze.map(ie=>ie.ref.current),[Ye,...Y]=Ne,[we]=Y.slice(-1),Se=le??ze.find(ie=>ie.value===ee)?.ref.current;for(const ie of xe){if(ie===Se)return;if(ie?.scrollIntoView({block:"nearest"}),ie===Ye&&k&&(k.scrollTop=0),ie===we&&k&&(k.scrollTop=k.scrollHeight),$e(ie),i==="both"){const ge=ze.find(Ce=>Ce.ref.current===ie);ge&&me(ge.textValue)}if(ie!==Se)return}},[i,me,k,le,ee]),Je=H4(i);return h.useEffect(()=>{i!=="both"&&$e(null)},[je,i]),h.useEffect(()=>{if(oe&&F)return qc([oe,F])},[oe,F]),s.jsx(B4,{children:s.jsx(D4,{allowCustomValue:n,autocomplete:Je,required:y,trigger:F,onTriggerChange:z,contentId:De,value:ee,onValueChange:_e,open:ne,onOpenChange:P,disabled:$,locale:b,focusFirst:he,textValue:je,onTextValueChange:me,onViewportChange:U,onContentChange:se,visuallyFocussedItem:le,filterValue:ye,onFilterValueChange:Me,onVisuallyFocussedItemChange:$e,isPrintableCharacter:B,children:c})})},Kc="ComboboxTrigger",Yc=h.forwardRef((e,n)=>{const{...i}=e,c=Yt(Kc),o=()=>{c.disabled||c.onOpenChange(!0)};return s.jsx(jc,{asChild:!0,children:s.jsx(Ui,{asChild:!0,trapped:c.open,onMountAutoFocus:l=>{l.preventDefault()},onUnmountAutoFocus:l=>{c.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),l.preventDefault()},children:s.jsx("div",{ref:n,"data-disabled":c.disabled?"":void 0,...i,onClick:He(i.onClick,l=>{if(c.disabled){l.preventDefault();return}c.trigger?.focus()}),onPointerDown:He(i.onPointerDown,l=>{if(c.disabled){l.preventDefault();return}const u=l.target;u.hasPointerCapture(l.pointerId)&&u.releasePointerCapture(l.pointerId),(u.closest("button")??u.closest("div"))===l.currentTarget&&l.button===0&&l.ctrlKey===!1&&(o(),c.trigger?.focus())})})})})});Yc.displayName=Kc;const Zc="ComboboxInput",Xc=h.forwardRef((e,n)=>{const i=Yt(Zc),c=h.useRef(null),{getItems:o}=Vr(void 0),{startsWith:l}=Gi(i.locale,{sensitivity:"base"}),u=i.disabled,x=et(c,n,i.onTriggerChange),v=()=>{u||i.onOpenChange(!0)},R=M4(i.filterValue);return Rt(()=>{const $=setTimeout(()=>{if(i.textValue===""||i.textValue===void 0||i.filterValue===""||i.filterValue===void 0)return;const y=o().find(A=>A.type==="option"&&l(A.textValue,i.textValue)),b=P4(R??"",i.filterValue);y&&!i.visuallyFocussedItem&&b===i.filterValue.length&&c.current?.setSelectionRange(i.filterValue.length,i.textValue.length)});return()=>clearTimeout($)},[i.textValue,i.filterValue,l,i.visuallyFocussedItem,o,R]),s.jsx("input",{type:"text",role:"combobox","aria-controls":i.contentId,"aria-expanded":i.open,"aria-required":i.required,"aria-autocomplete":i.autocomplete.type,"data-state":i.open?"open":"closed","aria-disabled":u,"aria-activedescendant":i.visuallyFocussedItem?.id,disabled:u,"data-disabled":u?"":void 0,"data-placeholder":i.textValue===void 0?"":void 0,value:i.textValue??"",...e,ref:x,onKeyDown:He(e.onKeyDown,$=>{if(["ArrowUp","ArrowDown","Home","End"].includes($.key))i.open||v(),setTimeout(()=>{let b=o().filter(A=>!A.disabled&&A.isVisible).map(A=>A.ref.current);if(["ArrowUp","End"].includes($.key)&&(b=b.slice().reverse()),["ArrowUp","ArrowDown"].includes($.key)){const A=i.visuallyFocussedItem??o().find(M=>M.value===i.value)?.ref.current;if(A){let M=b.indexOf(A);M===b.length-1&&(M=-1),b=b.slice(M+1)}}if(["ArrowDown"].includes($.key)&&i.autocomplete.type==="both"&&b.length>1){const[A,...M]=b,I=o().find(V=>V.ref.current===A).textValue;i.textValue===I&&(b=M)}i.focusFirst(b,o())}),$.preventDefault();else if(["Tab"].includes($.key)&&i.open)$.preventDefault();else if(["Escape"].includes($.key))i.open?i.onOpenChange(!1):(i.onValueChange(void 0),i.onTextValueChange("")),$.preventDefault();else if(L4.includes($.key)){if(i.visuallyFocussedItem){const y=o().find(b=>b.ref.current===i.visuallyFocussedItem);y&&(i.onValueChange(y.value),i.onTextValueChange(y.textValue),i.autocomplete.type==="both"&&i.onFilterValueChange(y.textValue),y.ref.current?.click())}else{const y=o().find(b=>b.type==="option"&&!b.disabled&&b.textValue===i.textValue);y&&(i.onValueChange(y.value),i.onTextValueChange(y.textValue),i.autocomplete.type==="both"&&i.onFilterValueChange(y.textValue),y.ref.current?.click())}i.onOpenChange(!1),$.preventDefault()}else i.onVisuallyFocussedItemChange(null)}),onChange:He(e.onChange,$=>{i.onTextValueChange($.currentTarget.value),i.autocomplete.type==="both"&&i.onFilterValueChange($.currentTarget.value)}),onKeyUp:He(e.onKeyUp,$=>{if(!i.open&&(i.isPrintableCharacter($.key)||["Backspace"].includes($.key))&&v(),setTimeout(()=>{if(i.autocomplete.type==="both"&&i.isPrintableCharacter($.key)&&i.filterValue!==void 0){const y=i.filterValue,b=o().find(A=>l(A.textValue,y));b&&i.onTextValueChange(b.textValue)}}),i.autocomplete.type==="none"&&i.isPrintableCharacter($.key)){const y=i.textValue??"",b=o().find(A=>l(A.textValue,y));b&&(i.onVisuallyFocussedItemChange(b.ref.current),b.ref.current?.scrollIntoView())}}),onBlur:He(e.onBlur,()=>{if(i.open)return;i.onVisuallyFocussedItemChange(null);const[$]=o().filter(b=>b.textValue===i.textValue&&b.type==="option");if($){i.onValueChange($.value),i.autocomplete.type==="both"&&i.onFilterValueChange($.textValue);return}if(i.allowCustomValue){i.onValueChange(i.textValue),i.autocomplete.type==="both"&&i.onFilterValueChange(i.textValue);return}const[y]=o().filter(b=>b.value===i.value&&b.type==="option");y&&i.textValue!==""?(i.onTextValueChange(y.textValue),i.autocomplete.type==="both"&&i.onFilterValueChange(y.textValue)):(i.onValueChange(void 0),i.onTextValueChange(""))})})});Xc.displayName="ComboboxTextInput";const Qc=h.forwardRef((e,n)=>{const{children:i,...c}=e,o=Yt(Zc),l=o.disabled,u=()=>{l||(o.onOpenChange(!0),o.trigger?.focus())};return s.jsx(Ke.button,{"aria-hidden":!0,type:"button","aria-disabled":l,"aria-controls":o.contentId,"aria-expanded":o.open,disabled:l,"data-disabled":l?"":void 0,...c,tabIndex:-1,ref:n,onClick:He(c.onClick,()=>{o.trigger?.focus()}),onPointerDown:He(c.onPointerDown,x=>{x.button===0&&x.ctrlKey===!1&&(u(),x.preventDefault())}),onKeyDown:He(c.onKeyDown,x=>{E4.includes(x.key)&&(u(),x.preventDefault())}),children:i||"▼"})});Qc.displayName="ComboboxIcon";const N4="ComboboxPortal",Jc=e=>s.jsx(Ac,{asChild:!0,...e});Jc.displayName=N4;const Ki="ComboboxContent",Pc=h.forwardRef((e,n)=>{const i=Yt(Ki),{getItems:c}=Vr(void 0),[o,l]=h.useState();if(Rt(()=>{l(new DocumentFragment)},[]),Rt(()=>{i.open&&i.autocomplete.type==="none"&&setTimeout(()=>{c().find(x=>x.value===i.value)?.ref.current?.scrollIntoView({block:"nearest"})})},[c,i.autocomplete,i.value,i.open]),!i.open){const u=o;return u?ir.createPortal(s.jsx(nr.Slot,{scope:void 0,children:s.jsx("div",{children:e.children})}),u):null}return s.jsx(el,{...e,ref:n})});Pc.displayName=Ki;const F4=10,el=h.forwardRef((e,n)=>{const{onEscapeKeyDown:i,onPointerDownOutside:c,...o}=e,l=Yt(Ki),u=et(n,v=>l.onContentChange(v)),{onOpenChange:x}=l;return Tc(),h.useEffect(()=>{const v=()=>{x(!1)};return window.addEventListener("blur",v),window.addEventListener("resize",v),()=>{window.removeEventListener("blur",v),window.removeEventListener("resize",v)}},[x]),s.jsx(Wi,{allowPinchZoom:!0,children:s.jsx(Mc,{asChild:!0,onEscapeKeyDown:i,onPointerDownOutside:c,onFocusOutside:v=>{v.preventDefault()},onDismiss:()=>{l.onOpenChange(!1),l.trigger?.focus({preventScroll:!0})},children:s.jsx(tl,{role:"listbox",id:l.contentId,"data-state":l.open?"open":"closed",onContextMenu:v=>v.preventDefault(),...o,ref:u,style:{display:"flex",flexDirection:"column",outline:"none",...o.style}})})})});el.displayName="ComboboxContentImpl";const tl=h.forwardRef((e,n)=>{const{align:i="start",collisionPadding:c=F4,...o}=e;return s.jsx(Ec,{...o,ref:n,align:i,collisionPadding:c,style:{boxSizing:"border-box",...o.style,"--radix-combobox-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-combobox-content-available-width":"var(--radix-popper-available-width)","--radix-combobox-content-available-height":"var(--radix-popper-available-height)","--radix-combobox-trigger-width":"var(--radix-popper-anchor-width)","--radix-combobox-trigger-height":"var(--radix-popper-anchor-height)"}})});tl.displayName="ComboboxPopperPosition";const nl="ComboboxViewport",rl=h.forwardRef((e,n)=>{const i=Yt(nl),c=et(n,i.onViewportChange);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-combobox-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-combobox-viewport]::-webkit-scrollbar{display:none}"}}),s.jsx(nr.Slot,{scope:void 0,children:s.jsx(Ke.div,{"data-radix-combobox-viewport":"",role:"presentation",...e,ref:c,style:{position:"relative",flex:1,overflow:"auto",...e.style}})})]})});rl.displayName=nl;const zo="ComboboxItem",[sc,Yi]=Lc(zo),Zi=h.forwardRef((e,n)=>{const{value:i,disabled:c=!1,textValue:o,...l}=e,[u,x]=h.useState();Rt(()=>{x(new DocumentFragment)},[]);const{onTextValueChange:v,textValue:R,...$}=Yt(zo),y=On(),[b,A]=h.useState(o??""),M=$.value===i,{startsWith:I,contains:V}=Gi($.locale,{sensitivity:"base"}),L=h.useCallback(j=>{A(B=>B||(j?.textContent??"").trim())},[]);return h.useEffect(()=>{M&&R===void 0&&b!==""&&v(b)},[b,M,R,v]),$.autocomplete.type==="both"&&b&&$.filterValue&&!I(b,$.filterValue)||$.autocomplete.type==="list"&&$.autocomplete.filter==="startsWith"&&b&&R&&!I(b,R)||$.autocomplete.type==="list"&&$.autocomplete.filter==="contains"&&b&&R&&!V(b,R)?u?ir.createPortal(s.jsx(sc,{textId:y,onTextValueChange:L,isSelected:M,textValue:b,children:s.jsx(nr.ItemSlot,{scope:void 0,value:i,textValue:b,disabled:c,type:"option",isVisible:!1,children:s.jsx(Ai,{ref:n,value:i,disabled:c,...l})})}),u):null:s.jsx(sc,{textId:y,onTextValueChange:L,isSelected:M,textValue:b,children:s.jsx(nr.ItemSlot,{scope:void 0,value:i,textValue:b,disabled:c,type:"option",isVisible:!0,children:s.jsx(Ai,{ref:n,value:i,disabled:c,...l})})})});Zi.displayName=zo;const ol="ComboboxItemImpl",Ai=h.forwardRef((e,n)=>{const{value:i,disabled:c=!1,...o}=e,l=h.useRef(null),u=et(n,l),{getItems:x}=Vr(void 0),{onTextValueChange:v,visuallyFocussedItem:R,...$}=Yt(zo),{isSelected:y,textValue:b,textId:A}=Yi(ol),M=()=>{c||($.onValueChange(i),v(b),$.onOpenChange(!1),$.autocomplete.type==="both"&&$.onFilterValueChange(b),$.trigger?.focus({preventScroll:!0}))},I=h.useMemo(()=>R===x().find(L=>L.ref.current===l.current)?.ref.current,[x,R]),V=On();return s.jsx(Ke.div,{role:"option","aria-labelledby":A,"data-highlighted":I?"":void 0,"aria-selected":y&&I,"data-state":y?"checked":"unchecked","aria-disabled":c||void 0,"data-disabled":c?"":void 0,tabIndex:c?void 0:-1,...o,id:V,ref:u,onPointerUp:He(o.onPointerUp,M)})});Ai.displayName=ol;const il="ComboboxItemText",al=h.forwardRef((e,n)=>{const{className:i,style:c,...o}=e,l=Yi(il),u=et(n,l.onTextValueChange);return s.jsx(Ke.span,{id:l.textId,...o,ref:u})});al.displayName=il;const sl="ComboboxItemIndicator",cl=h.forwardRef((e,n)=>{const{isSelected:i}=Yi(sl);return i?s.jsx(Ke.span,{"aria-hidden":!0,...e,ref:n}):null});cl.displayName=sl;const Xi="ComboboxNoValueFound",ll=h.forwardRef((e,n)=>{const{textValue:i="",filterValue:c="",locale:o,autocomplete:l}=Yt(Xi),[u,x]=h.useState([]),{subscribe:v}=Vr(void 0),{startsWith:R,contains:$}=Gi(o,{sensitivity:"base"});return h.useEffect(()=>{const y=v(b=>{x(b)});return()=>{y()}},[v]),l.type==="none"&&u.length>0||l.type==="list"&&l.filter==="startsWith"&&u.some(y=>R(y.textValue,i))||l.type==="both"&&u.some(y=>R(y.textValue,c))||l.type==="list"&&l.filter==="contains"&&u.some(y=>$(y.textValue,i))?null:s.jsx(Ke.div,{...e,ref:n})});ll.displayName=Xi;const ul=h.forwardRef((e,n)=>{const{disabled:i=!1,...c}=e,o=Yt(Xi),{textValue:l,visuallyFocussedItem:u}=o,{getItems:x,subscribe:v}=Vr(void 0),R=h.useRef(null),[$,y]=h.useState(!1),b=et(n,R),A=h.useMemo(()=>u===x().find(V=>V.ref.current===R.current)?.ref.current,[x,u]),M=On(),I=()=>{!i&&l&&(o.onValueChange(l),o.onTextValueChange(l),o.onOpenChange(!1),o.autocomplete.type==="both"&&o.onFilterValueChange(l),o.trigger?.focus({preventScroll:!0}))};return Rt(()=>{const V=v(L=>{y(!L.some(j=>j.textValue===l&&j.type!=="create"))});return x().length===0&&y(!0),()=>{V()}},[l,v,x]),!l||!$?null:s.jsx(nr.ItemSlot,{scope:void 0,value:l??"",textValue:l??"",disabled:i,isVisible:!0,type:"create",children:s.jsx(Ke.div,{role:"option",tabIndex:i?void 0:-1,"aria-disabled":i||void 0,"data-disabled":i?"":void 0,"data-highlighted":A?"":void 0,...c,id:M,ref:b,onPointerUp:He(c.onPointerUp,I)})})});ul.displayName="ComboboxCreateItem";const z4=O4,k4=Yc,W4=Xc,U4=Qc,q4=Jc,G4=Pc,K4=rl,Y4=Zi,Z4=al,X4=cl,Q4=ll,J4=ul;function P4(e,n){const i=Math.min(e.length,n.length);for(let c=0;c<i;c++)if(e[c]!==n[c])return c;return i}const Ft=Object.freeze(Object.defineProperty({__proto__:null,ComboboxItem:Zi,Content:G4,CreateItem:J4,Icon:U4,Item:Y4,ItemIndicator:X4,ItemText:Z4,NoValueFound:Q4,Portal:q4,Root:z4,TextInput:W4,Trigger:k4,Viewport:K4},Symbol.toStringTag,{value:"Module"}));function Qi(e){const n=h.useRef(e);return h.useEffect(()=>{n.current=e}),h.useMemo(()=>(...i)=>n.current?.(...i),[])}const em=[" ","Enter","ArrowUp","ArrowDown"],tm=[" ","Enter"],Dr="Select",[ko,Br,nm]=X3(Dr),[ar,rm]=Rc(Dr,[nm,_c]),Wo=_c(),[om,cn]=ar(Dr),[im,am]=ar(Dr),Ji=e=>{const{__scopeSelect:n,children:i,open:c,defaultOpen:o,onOpenChange:l,value:u,defaultValue:x,onValueChange:v,dir:R,disabled:$,required:y,multi:b=!1}=e,A=Wo(n),[M,I]=h.useState(null),[V,L]=h.useState(null),[j,B]=h.useState(!1),F=J3(R),[z=!1,k]=tr({prop:c,defaultProp:o,onChange:l}),[U,oe]=tr({prop:u,defaultProp:x,onChange(ne){v&&(Array.isArray(ne),v(ne))}}),se=h.useRef(null),[le,$e]=h.useState(new Set);return s.jsx(Ic,{...A,children:s.jsx(om,{required:y,scope:n,trigger:M,onTriggerChange:I,valueNode:V,onValueNodeChange:L,valueNodeHasChildren:j,onValueNodeHasChildrenChange:B,contentId:On(),value:U,onValueChange:oe,open:z,onOpenChange:k,dir:F,triggerPointerDownPosRef:se,disabled:$,multi:b,children:s.jsx(ko.Provider,{scope:n,children:s.jsx(im,{scope:e.__scopeSelect,onNativeOptionAdd:h.useCallback(ne=>{$e(P=>new Set(P).add(ne))},[]),onNativeOptionRemove:h.useCallback(ne=>{$e(P=>{const ee=new Set(P);return ee.delete(ne),ee})},[]),children:i})})})})};Ji.displayName=Dr;const dl="SelectTrigger",Pi=h.forwardRef((e,n)=>{const{__scopeSelect:i,...c}=e,o=Wo(i),l=cn(dl,i),u=l.disabled,x=et(n,l.onTriggerChange),v=Br(i),[R,$,y]=bl(A=>{const M=v().filter(L=>!L.disabled),I=M.find(L=>L.value===l.value),V=$l(M,A,I);if(V!==void 0&&!Array.isArray(V.value)){const L=l.multi?[V.value]:V.value;l.onValueChange(L)}}),b=()=>{u||(l.onOpenChange(!0),y())};return s.jsx(jc,{asChild:!0,...o,children:s.jsx(Ke.div,{role:"combobox","aria-controls":l.contentId,"aria-expanded":l.open,"aria-required":l.required,"aria-autocomplete":"none",dir:l.dir,"data-state":l.open?"open":"closed","data-disabled":u?"":void 0,"data-placeholder":l.value===void 0?"":void 0,tabIndex:u?void 0:0,...c,ref:x,onClick:He(c.onClick,A=>{A.currentTarget.focus()}),onPointerDown:He(c.onPointerDown,A=>{const M=A.target;M.hasPointerCapture(A.pointerId)&&M.releasePointerCapture(A.pointerId),(M.closest("button")??M.closest("div"))===A.currentTarget&&A.button===0&&A.ctrlKey===!1&&(b(),l.triggerPointerDownPosRef.current={x:Math.round(A.pageX),y:Math.round(A.pageY)},A.preventDefault())}),onKeyDown:He(c.onKeyDown,A=>{const M=R.current!=="",I=A.ctrlKey||A.altKey||A.metaKey,V=A.target;(V.closest("button")??V.closest("div"))===A.currentTarget&&(!I&&A.key.length===1&&$(A.key),!(M&&A.key===" ")&&em.includes(A.key)&&(b(),A.preventDefault()))})})})});Pi.displayName=dl;const hl="SelectValue",ea=h.forwardRef((e,n)=>{const{__scopeSelect:i,children:c,placeholder:o,...l}=e,u=cn(hl,i),{onValueNodeHasChildrenChange:x}=u,v=c!==void 0,R=et(n,u.onValueNodeChange),[$,y]=h.useState([]),b=Br(i);Rt(()=>{x(v)},[x,v]),h.useLayoutEffect(()=>{if(Array.isArray(u.value)&&$.length!==u.value.length){const M=setTimeout(()=>{const I=b().filter(V=>Array.isArray(V.value)?!1:u.value?.includes(V.value));y(I)});return()=>{clearTimeout(M)}}},[u.value,b,$]);let A;if((u.value===void 0||u.value.length===0)&&o!==void 0)A=s.jsx("span",{children:o});else if(typeof c=="function")if(Array.isArray(u.value)){const M=u.value.map(I=>{const V=$.find(L=>L.value===I);return V?c({value:I,textValue:V?.textValue}):null});A=M.every(I=>I===null)?o:M}else A=c(u.value);else A=c;return s.jsx(Ke.span,{...l,ref:R,children:A||null})});ea.displayName=hl;const sm="SelectIcon",ta=h.forwardRef((e,n)=>{const{__scopeSelect:i,children:c,...o}=e;return s.jsx(Ke.span,{"aria-hidden":!0,...o,ref:n,children:c||"▼"})});ta.displayName=sm;const cm="SelectPortal",na=e=>s.jsx(Ac,{asChild:!0,...e});na.displayName=cm;const Dn="SelectContent",ra=h.forwardRef((e,n)=>{const i=cn(Dn,e.__scopeSelect),[c,o]=h.useState();if(Rt(()=>{o(new DocumentFragment)},[]),!i.open){const l=c;return l?ir.createPortal(s.jsx(fl,{scope:e.__scopeSelect,children:s.jsx(ko.Slot,{scope:e.__scopeSelect,children:s.jsx("div",{children:e.children})})}),l):null}return s.jsx(gl,{...e,ref:n})});ra.displayName=Dn;const an=10,[fl,bn]=ar(Dn),lm="SelectContentImpl",gl=h.forwardRef((e,n)=>{const{__scopeSelect:i,position:c="item-aligned",onCloseAutoFocus:o,onEscapeKeyDown:l,onPointerDownOutside:u,side:x,sideOffset:v,align:R,alignOffset:$,arrowPadding:y,collisionBoundary:b,collisionPadding:A,sticky:M,hideWhenDetached:I,avoidCollisions:V,...L}=e,j=cn(Dn,i),[B,F]=h.useState(null),[z,k]=h.useState(null),U=et(n,Y=>F(Y)),[oe,se]=h.useState(null),[le,$e]=h.useState(null),ne=Br(i),[P,ee]=h.useState(!1),_e=h.useRef(!1);h.useEffect(()=>{if(B)return qc(B)},[B]),Tc();const je=h.useCallback(Y=>{const[we,...Se]=ne().map(Ce=>Ce.ref.current),[ie]=Se.slice(-1),ge=document.activeElement;for(const Ce of Y)if(Ce===ge||(Ce?.scrollIntoView({block:"nearest"}),Ce===we&&z&&(z.scrollTop=0),Ce===ie&&z&&(z.scrollTop=z.scrollHeight),Ce?.focus(),document.activeElement!==ge))return},[ne,z]),me=h.useCallback(()=>je([oe,B]),[je,oe,B]);h.useEffect(()=>{P&&me()},[P,me]);const{onOpenChange:ye,triggerPointerDownPosRef:Me}=j;h.useEffect(()=>{if(B){let Y={x:0,y:0};const we=ie=>{Y={x:Math.abs(Math.round(ie.pageX)-(Me.current?.x??0)),y:Math.abs(Math.round(ie.pageY)-(Me.current?.y??0))}},Se=ie=>{Y.x<=10&&Y.y<=10?ie.preventDefault():B.contains(ie.target)||ye(!1),document.removeEventListener("pointermove",we),Me.current=null};return Me.current!==null&&(document.addEventListener("pointermove",we),document.addEventListener("pointerup",Se,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",we),document.removeEventListener("pointerup",Se,{capture:!0})}}},[B,ye,Me]),h.useEffect(()=>{const Y=()=>ye(!1);return window.addEventListener("blur",Y),window.addEventListener("resize",Y),()=>{window.removeEventListener("blur",Y),window.removeEventListener("resize",Y)}},[ye]);const[De,he]=bl(Y=>{const we=ne().filter(ge=>!ge.disabled),Se=we.find(ge=>ge.ref.current===document.activeElement),ie=$l(we,Y,Se);ie&&setTimeout(()=>ie.ref.current.focus())}),Je=h.useCallback((Y,we,Se)=>{const ie=!_e.current&&!Se;(j.value!==void 0&&j.value===we||ie)&&(se(Y),ie&&(_e.current=!0))},[j.value]),xe=h.useCallback(()=>B?.focus(),[B]),ze=h.useCallback((Y,we,Se)=>{const ie=!_e.current&&!Se;(j.value!==void 0&&(Array.isArray(we)?we.every(Ce=>j.value?.includes(Ce)):j.value===we)||ie)&&$e(Y)},[j.value]),Ne=c==="popper"?Ii:ml,Ye=Ne===Ii?{side:x,sideOffset:v,align:R,alignOffset:$,arrowPadding:y,collisionBoundary:b,collisionPadding:A,sticky:M,hideWhenDetached:I,avoidCollisions:V}:{};return s.jsx(fl,{scope:i,content:B,viewport:z,onViewportChange:k,itemRefCallback:Je,selectedItem:oe,onItemLeave:xe,itemTextRefCallback:ze,focusSelectedItem:me,selectedItemText:le,position:c,isPositioned:P,searchRef:De,children:s.jsx(Wi,{as:Si,allowPinchZoom:!0,children:s.jsx(Ui,{asChild:!0,trapped:j.open,onMountAutoFocus:Y=>{Y.preventDefault()},onUnmountAutoFocus:He(o,Y=>{j.trigger?.focus({preventScroll:!0}),document.getSelection()?.empty(),Y.preventDefault()}),children:s.jsx(Mc,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:l,onPointerDownOutside:u,onFocusOutside:Y=>Y.preventDefault(),onDismiss:()=>j.onOpenChange(!1),children:s.jsx(Ne,{role:"listbox",id:j.contentId,"data-state":j.open?"open":"closed","aria-multiselectable":j.multi?"true":void 0,dir:j.dir,onContextMenu:Y=>Y.preventDefault(),...L,...Ye,onPlaced:()=>ee(!0),ref:U,style:{display:"flex",flexDirection:"column",outline:"none",...L.style},onKeyDown:He(L.onKeyDown,Y=>{const we=Y.ctrlKey||Y.altKey||Y.metaKey;if(Y.key==="Tab"&&Y.preventDefault(),!we&&Y.key.length===1&&he(Y.key),["ArrowUp","ArrowDown","Home","End"].includes(Y.key)){let ie=ne().filter(ge=>!ge.disabled).map(ge=>ge.ref.current);if(["ArrowUp","End"].includes(Y.key)&&(ie=ie.slice().reverse()),["ArrowUp","ArrowDown"].includes(Y.key)){const ge=Y.target,Ce=ie.indexOf(ge);ie=ie.slice(Ce+1)}setTimeout(()=>je(ie)),Y.preventDefault()}})})})})})})});gl.displayName=lm;const um="SelectItemAlignedPosition",ml=h.forwardRef((e,n)=>{const{__scopeSelect:i,onPlaced:c,...o}=e,l=cn(Dn,i),u=bn(Dn,i),[x,v]=h.useState(null),[R,$]=h.useState(null),y=et(n,U=>$(U)),b=Br(i),A=h.useRef(!1),M=h.useRef(!0),{viewport:I,selectedItem:V,selectedItemText:L,focusSelectedItem:j}=u,B=h.useCallback(()=>{if(l.trigger&&l.valueNode&&x&&R&&I&&V&&L){const U=l.trigger.getBoundingClientRect(),oe=R.getBoundingClientRect(),se=l.valueNode.getBoundingClientRect(),le=L.getBoundingClientRect();if(l.dir!=="rtl"){const ge=le.left-oe.left,Ce=se.left-ge,rt=U.left-Ce,Ee=U.width+rt,Ae=Math.max(Ee,oe.width),_t=window.innerWidth-an,Ze=rc(Ce,[an,_t-Ae]);x.style.minWidth=`${Ee}px`,x.style.left=`${Ze}px`}else{const ge=oe.right-le.right,Ce=window.innerWidth-se.right-ge,rt=window.innerWidth-U.right-Ce,Ee=U.width+rt,Ae=Math.max(Ee,oe.width),_t=window.innerWidth-an,Ze=rc(Ce,[an,_t-Ae]);x.style.minWidth=`${Ee}px`,x.style.right=`${Ze}px`}const $e=b(),ne=window.innerHeight-an*2,P=I.scrollHeight,ee=window.getComputedStyle(R),_e=parseInt(ee.borderTopWidth,10),je=parseInt(ee.paddingTop,10),me=parseInt(ee.borderBottomWidth,10),ye=parseInt(ee.paddingBottom,10),Me=_e+je+P+ye+me,De=Math.min(V.offsetHeight*5,Me),he=window.getComputedStyle(I),Je=parseInt(he.paddingTop,10),xe=parseInt(he.paddingBottom,10),ze=U.top+U.height/2-an,Ne=ne-ze,Ye=V.offsetHeight/2,Y=V.offsetTop+Ye,we=_e+je+Y,Se=Me-we;if(we<=ze){const ge=V===$e[$e.length-1].ref.current;x.style.bottom="0px";const Ce=R.clientHeight-I.offsetTop-I.offsetHeight,rt=Math.max(Ne,Ye+(ge?xe:0)+Ce+me),Ee=we+rt;x.style.height=`${Ee}px`}else{const ge=V===$e[0].ref.current;x.style.top="0px";const rt=Math.max(ze,_e+I.offsetTop+(ge?Je:0)+Ye)+Se;x.style.height=`${rt}px`,I.scrollTop=we-ze+I.offsetTop}x.style.margin=`${an}px 0`,x.style.minHeight=`${De}px`,x.style.maxHeight=`${ne}px`,c?.(),requestAnimationFrame(()=>A.current=!0)}},[b,l.trigger,l.valueNode,x,R,I,V,L,l.dir,c]);Rt(()=>B(),[B]);const[F,z]=h.useState();Rt(()=>{R&&z(window.getComputedStyle(R).zIndex)},[R]);const k=h.useCallback(U=>{U&&M.current===!0&&(B(),j?.(),M.current=!1)},[B,j]);return s.jsx(hm,{scope:i,contentWrapper:x,shouldExpandOnScrollRef:A,onScrollButtonChange:k,children:s.jsx("div",{ref:v,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:F},children:s.jsx(Ke.div,{...o,ref:y,style:{boxSizing:"border-box",maxHeight:"100%",...o.style}})})})});ml.displayName=um;const dm="SelectPopperPosition",Ii=h.forwardRef((e,n)=>{const{__scopeSelect:i,align:c="start",collisionPadding:o=an,...l}=e,u=Wo(i);return s.jsx(Ec,{...u,...l,ref:n,align:c,collisionPadding:o,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Ii.displayName=dm;const[hm,oa]=ar(Dn,{}),Ti="SelectViewport",ia=h.forwardRef((e,n)=>{const{__scopeSelect:i,...c}=e,o=bn(Ti,i),l=oa(Ti,i),u=et(n,o.onViewportChange),x=h.useRef(0);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"}}),s.jsx(ko.Slot,{scope:i,children:s.jsx(Ke.div,{"data-radix-select-viewport":"",role:"presentation",...c,ref:u,style:{position:"relative",flex:1,overflow:"auto",...c.style},onScroll:He(c.onScroll,v=>{const R=v.currentTarget,{contentWrapper:$,shouldExpandOnScrollRef:y}=l;if(y?.current&&$){const b=Math.abs(x.current-R.scrollTop);if(b>0){const A=window.innerHeight-an*2,M=parseFloat($.style.minHeight),I=parseFloat($.style.height),V=Math.max(M,I);if(V<A){const L=V+b,j=Math.min(A,L),B=L-j;$.style.height=`${j}px`,$.style.bottom==="0px"&&(R.scrollTop=B>0?B:0,$.style.justifyContent="flex-end")}}}x.current=R.scrollTop})})})]})});ia.displayName=Ti;const xl="SelectGroup",[fm,gm]=ar(xl),aa=h.forwardRef((e,n)=>{const{__scopeSelect:i,...c}=e,o=On();return s.jsx(fm,{scope:i,id:o,children:s.jsx(Ke.div,{role:"group","aria-labelledby":o,...c,ref:n})})});aa.displayName=xl;const wl="SelectLabel",sa=h.forwardRef((e,n)=>{const{__scopeSelect:i,...c}=e,o=gm(wl,i);return s.jsx(Ke.div,{id:o.id,...c,ref:n})});sa.displayName=wl;const Ho="SelectItem",[mm,vl]=ar(Ho),ca=h.forwardRef((e,n)=>{const{__scopeSelect:i,value:c,disabled:o=!1,textValue:l,...u}=e,x=cn(Ho,i),v=bn(Ho,i),R=typeof c=="string"?Array.isArray(x.value)?x.value.includes(c):x.value===c:c.every(j=>x.value?.includes(j)),$=Array.isArray(x.value)&&Array.isArray(c)&&c.some(j=>x.value?.includes(j)),[y,b]=h.useState(l??""),[A,M]=h.useState(!1),I=et(n,j=>v.itemRefCallback?.(j,c,o)),V=On(),L=()=>{if(!o){let j=x.multi&&typeof c=="string"?[c]:c;$&&!R?x.onValueChange(j):Array.isArray(x.value)&&(j=Cl(c,x.value)),x.onValueChange(j),x.multi||x.onOpenChange(!1)}};if(!x.multi&&Array.isArray(c))throw new Error("You can only pass an array of values in multi selects");return s.jsx(mm,{scope:i,value:c,disabled:o,textId:V,isSelected:R,isIntermediate:$,onItemTextChange:h.useCallback(j=>{b(B=>B||(j?.textContent??"").trim())},[]),children:s.jsx(ko.ItemSlot,{scope:i,value:c,disabled:o,textValue:y,children:s.jsx(Ke.div,{role:"option","aria-labelledby":V,"data-highlighted":A?"":void 0,"aria-selected":x.multi?void 0:R&&A,"aria-checked":x.multi?R:void 0,"data-state":R?"checked":"unchecked","aria-disabled":o||void 0,"data-disabled":o?"":void 0,tabIndex:o?void 0:-1,...u,ref:I,onFocus:He(u.onFocus,()=>M(!0)),onBlur:He(u.onBlur,()=>M(!1)),onPointerUp:He(u.onPointerUp,L),onPointerMove:He(u.onPointerMove,j=>{o?v.onItemLeave?.():j.currentTarget.focus({preventScroll:!0})}),onPointerLeave:He(u.onPointerLeave,j=>{j.currentTarget===document.activeElement&&v.onItemLeave?.()}),onKeyDown:He(u.onKeyDown,j=>{v.searchRef?.current!==""&&j.key===" "||(tm.includes(j.key)&&L(),j.key===" "&&j.preventDefault())})})})})});ca.displayName=Ho;const Tr="SelectItemText",la=h.forwardRef((e,n)=>{const{__scopeSelect:i,className:c,style:o,...l}=e,u=cn(Tr,i),x=bn(Tr,i),v=vl(Tr,i),R=am(Tr,i),[$,y]=h.useState(null),b=et(n,L=>y(L),v.onItemTextChange,L=>x.itemTextRefCallback?.(L,v.value,v.disabled)),A=$?.textContent,M=h.useMemo(()=>s.jsx("option",{value:v.value,disabled:v.disabled,children:A},Array.isArray(v.value)?v.value.join(";"):v.value),[v.disabled,v.value,A]),{onNativeOptionAdd:I,onNativeOptionRemove:V}=R;return Rt(()=>(I(M),()=>V(M)),[I,V,M]),s.jsxs(s.Fragment,{children:[s.jsx(Ke.span,{id:v.textId,...l,ref:b}),v.isSelected&&u.valueNode&&!u.valueNodeHasChildren?ir.createPortal(l.children,u.valueNode):null]})});la.displayName=Tr;const pl="SelectItemIndicator",ua=h.forwardRef((e,n)=>{const{__scopeSelect:i,children:c,...o}=e,l=vl(pl,i);return typeof c=="function"?s.jsx(Ke.span,{"aria-hidden":!0,...o,ref:n,children:c({isSelected:l.isSelected,isIntermediate:l.isIntermediate})}):l.isSelected?s.jsx(Ke.span,{"aria-hidden":!0,...o,ref:n,children:c}):null});ua.displayName=pl;const Mi="SelectScrollUpButton",da=h.forwardRef((e,n)=>{const i=bn(Mi,e.__scopeSelect),c=oa(Mi,e.__scopeSelect),[o,l]=h.useState(!1),u=et(n,c.onScrollButtonChange);return Rt(()=>{if(i.viewport&&i.isPositioned){const x=i.viewport,v=()=>{const R=x.scrollTop>0;l(R)};return v(),x.addEventListener("scroll",v),()=>x.removeEventListener("scroll",v)}},[i.viewport,i.isPositioned]),o?s.jsx(fa,{...e,ref:u,onAutoScroll:()=>{const{viewport:x,selectedItem:v}=i;x&&v&&(x.scrollTop-=v.offsetHeight)}}):null});da.displayName=Mi;const Ei="SelectScrollDownButton",ha=h.forwardRef((e,n)=>{const i=bn(Ei,e.__scopeSelect),c=oa(Ei,e.__scopeSelect),[o,l]=h.useState(!1),u=et(n,c.onScrollButtonChange);return Rt(()=>{if(i.viewport&&i.isPositioned){const x=i.viewport,v=()=>{const R=x.scrollHeight-x.clientHeight,$=Math.ceil(x.scrollTop)<R;l($)};return v(),x.addEventListener("scroll",v),()=>x.removeEventListener("scroll",v)}},[i.viewport,i.isPositioned]),o?s.jsx(fa,{...e,ref:u,onAutoScroll:()=>{const{viewport:x,selectedItem:v}=i;x&&v&&(x.scrollTop+=v.offsetHeight)}}):null});ha.displayName=Ei;const fa=h.forwardRef((e,n)=>{const{__scopeSelect:i,onAutoScroll:c,...o}=e,l=bn("SelectScrollButton",i),u=h.useRef(null),x=Br(i),v=h.useCallback(()=>{u.current!==null&&(window.clearInterval(u.current),u.current=null)},[]);return h.useEffect(()=>()=>v(),[v]),Rt(()=>{x().find($=>$.ref.current===document.activeElement)?.ref.current?.scrollIntoView({block:"nearest"})},[x]),s.jsx(Ke.div,{"aria-hidden":!0,...o,ref:n,style:{flexShrink:0,...o.style},onPointerMove:He(o.onPointerMove,()=>{l.onItemLeave?.(),u.current===null&&(u.current=window.setInterval(c,50))}),onPointerLeave:He(o.onPointerLeave,()=>{v()})})});fa.displayName="SelectScrollButtonImpl";const xm="SelectSeparator",ga=h.forwardRef((e,n)=>{const{__scopeSelect:i,...c}=e;return s.jsx(Ke.div,{"aria-hidden":!0,...c,ref:n})});ga.displayName=xm;const Li="SelectArrow",ma=h.forwardRef((e,n)=>{const{__scopeSelect:i,...c}=e,o=Wo(i),l=cn(Li,i),u=bn(Li,i);return l.open&&u.position==="popper"?s.jsx(Q3,{...o,...c,ref:n}):null});ma.displayName=Li;const wm="BubbleSelect",vm=h.forwardRef((e,n)=>{const{value:i,...c}=e,o=h.useRef(null),l=et(n,o),u=P3(i),x=cn(wm,void 0);h.useEffect(()=>{const R=o.current,$=window.HTMLSelectElement.prototype,b=Object.getOwnPropertyDescriptor($,"value").set;if(u!==i&&b){const A=new Event("change",{bubbles:!0});b.call(R,i),R.dispatchEvent(A)}},[u,i]);let v=i;return x.multi&&!Array.isArray(i)&&(v=[]),s.jsx(e6,{asChild:!0,children:s.jsx("select",{...c,multiple:x.multi?!0:void 0,ref:l,defaultValue:v})})});vm.displayName="BubbleSelect";function bl(e){const n=Qi(e),i=h.useRef(""),c=h.useRef(0),o=h.useCallback(u=>{const x=i.current+u;n(x),function v(R){i.current=R,window.clearTimeout(c.current),R!==""&&(c.current=window.setTimeout(()=>v(""),1e3))}(x)},[n]),l=h.useCallback(()=>{i.current="",window.clearTimeout(c.current)},[]);return h.useEffect(()=>()=>window.clearTimeout(c.current),[]),[i,o,l]}function $l(e,n,i){const o=n.length>1&&Array.from(n).every(R=>R===n[0])?n[0]:n,l=i?e.indexOf(i):-1;let u=pm(e,Math.max(l,0));o.length===1&&(u=u.filter(R=>R!==i));const v=u.find(R=>R.textValue.toLowerCase().startsWith(o.toLowerCase()));return v!==i?v:void 0}function pm(e,n){return e.map((i,c)=>e[(n+c)%e.length])}const Cl=(e,n=[])=>{if(Array.isArray(e))return e.reduce((c,o)=>Cl(o,c),n);const i=n.indexOf(e);return i===-1?[...n,e]:[...n.slice(0,i),...n.slice(i+1)]},bm=Ji,$m=Pi,Cm=ea,ym=ta,Sm=na,Rm=ra,_m=ia,jm=aa,Am=sa,Im=ca,Tm=la,Mm=ua,Em=da,Lm=ha,Vm=ga,Dm=ma,zt=Object.freeze(Object.defineProperty({__proto__:null,Arrow:Dm,Content:Rm,Group:jm,Icon:ym,Item:Im,ItemIndicator:Mm,ItemText:Tm,Label:Am,Portal:Sm,Root:bm,ScrollDownButton:Lm,ScrollUpButton:Em,Select:Ji,SelectArrow:ma,SelectContent:ra,SelectGroup:aa,SelectIcon:ta,SelectItem:ca,SelectItemIndicator:ua,SelectItemText:la,SelectLabel:sa,SelectPortal:na,SelectScrollDownButton:ha,SelectScrollUpButton:da,SelectSeparator:ga,SelectTrigger:Pi,SelectValue:ea,SelectViewport:ia,Separator:Vm,Trigger:$m,Value:Cm,Viewport:_m,createSelectScope:rm},Symbol.toStringTag,{value:"Module"}));function Vn(e,n,{checkForDefaultPrevented:i=!0}={}){return function(o){if(e?.(o),i===!1||!o.defaultPrevented)return n?.(o)}}const Bm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 2A12.014 12.014 0 0 0 4 14c0 3 1.57 6.883 4.201 10.375C10.85 27.894 13.764 30 16 30s5.151-2.101 7.799-5.625C26.43 20.875 28 17 28 14A12.014 12.014 0 0 0 16 2M8 14.5A1.5 1.5 0 0 1 9.5 13a4.5 4.5 0 0 1 4.5 4.5 1.5 1.5 0 0 1-1.5 1.5A4.5 4.5 0 0 1 8 14.5M18 25h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2m1.5-6a1.5 1.5 0 0 1-1.5-1.5 4.5 4.5 0 0 1 4.5-4.5 1.5 1.5 0 0 1 1.5 1.5 4.5 4.5 0 0 1-4.5 4.5"})})};h.forwardRef(Bm);const Hm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28 6H4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2v11a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-9 12h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2m9-7H4V8h24z"})})};h.forwardRef(Hm);const Om=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M30.5 7v6a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1 0-3h2.137l-2.375-2.173-.047-.046a9.5 9.5 0 1 0-6.84 16.219H16a9.44 9.44 0 0 0 6.519-2.59 1.5 1.5 0 1 1 2.061 2.181A12.43 12.43 0 0 1 16 28.5h-.171a12.5 12.5 0 1 1 8.985-21.368L27.5 9.59V7a1.5 1.5 0 0 1 3 0"})})};h.forwardRef(Om);const Nm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m26.061 19.061-9 9a1.503 1.503 0 0 1-2.125 0l-9-9a1.503 1.503 0 1 1 2.125-2.125l6.439 6.439V5a1.5 1.5 0 1 1 3 0v18.375l6.439-6.44a1.502 1.502 0 1 1 2.125 2.125z"})})};h.forwardRef(Nm);const Fm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H8.625l6.44 6.439a1.502 1.502 0 1 1-2.125 2.125l-9-9a1.5 1.5 0 0 1 0-2.125l9-9a1.503 1.503 0 0 1 2.125 2.125L8.625 14.5H27a1.5 1.5 0 0 1 1.5 1.5"})})};h.forwardRef(Fm);const zm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m28.061 17.061-9 9a1.503 1.503 0 1 1-2.125-2.125l6.439-6.436H5a1.5 1.5 0 1 1 0-3h18.375l-6.436-6.44a1.503 1.503 0 0 1 2.125-2.125l9 9a1.5 1.5 0 0 1-.003 2.126"})})};h.forwardRef(zm);const km=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M26.061 15.061a1.5 1.5 0 0 1-2.125 0L17.5 8.625V27a1.5 1.5 0 1 1-3 0V8.625l-6.439 6.436a1.503 1.503 0 1 1-2.125-2.125l9-9a1.5 1.5 0 0 1 2.125 0l9 9a1.5 1.5 0 0 1 0 2.125"})})};h.forwardRef(km);const Wm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M11 13.5H5A1.5 1.5 0 0 1 3.5 12V6a1.5 1.5 0 0 1 3 0v1.733C8.581 5.683 11.786 3.5 16 3.5c5.558 0 8.92 3.299 9.061 3.439a1.5 1.5 0 0 1-2.117 2.125C22.889 9.01 20.25 6.5 16 6.5c-3.625 0-6.367 2.21-8 4h3a1.5 1.5 0 1 1 0 3m16 5h-6a1.5 1.5 0 1 0 0 3h3c-1.625 1.79-4.375 4-8 4-4.25 0-6.889-2.511-6.944-2.565A1.5 1.5 0 0 0 6.94 25.06c.141.141 3.504 3.44 9.061 3.44 4.214 0 7.419-2.183 9.5-4.233V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5"})})};h.forwardRef(Wm);const Um=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27.725 21.993C27.031 20.798 26 17.416 26 13a10 10 0 0 0-20 0c0 4.418-1.032 7.797-1.726 8.993A2 2 0 0 0 6 25h5.101a5 5 0 0 0 9.798 0H26a2 2 0 0 0 1.725-3.008M16 27a3 3 0 0 1-2.828-2h5.656A3 3 0 0 1 16 27"})})};h.forwardRef(Um);const qm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M22.135 14.308A6.001 6.001 0 0 0 17.5 4.5H9A1.5 1.5 0 0 0 7.5 6v19A1.5 1.5 0 0 0 9 26.5h10a6.5 6.5 0 0 0 3.135-12.192M10.5 7.5h7a3 3 0 0 1 0 6h-7zm8.5 16h-8.5v-7H19a3.5 3.5 0 1 1 0 7"})})};h.forwardRef(qm);const Gm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 4v20a1 1 0 0 1-1 1H9a2 2 0 0 0-2 2h17a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4h17a1 1 0 0 1 1 1"})})};h.forwardRef(Gm);const Km=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M19 14a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m10-5v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v1h5a2 2 0 0 1 2 2M12 7h8V6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1zm15 7.201V9H5v5.201A23 23 0 0 0 16 17a23 23 0 0 0 11-2.799"})})};h.forwardRef(Km);const Ym=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M9.5 8A1.5 1.5 0 0 1 11 6.5h16a1.5 1.5 0 0 1 0 3H11A1.5 1.5 0 0 1 9.5 8M27 14.5H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3m0 8H11a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3M5.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 16a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};h.forwardRef(Ym);const Zm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M26 4h-3V3a1 1 0 0 0-2 0v1H11V3a1 1 0 0 0-2 0v1H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h3v1a1 1 0 0 0 2 0V6h10v1a1 1 0 0 0 2 0V6h3z"})})},Xm=h.forwardRef(Zm),Qm=Xm,Jm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M30 14h-1.35l-3.472-7.812A2 2 0 0 0 23.35 5H8.65a2 2 0 0 0-1.828 1.188L3.35 14H2a1 1 0 0 0 0 2h1v10a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-2h12v2a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V16h1a1 1 0 0 0 0-2m-20 6H8a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2m12 0a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"})})};h.forwardRef(Jm);const Pm=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m26.708 12.708-10 10a1 1 0 0 1-1.415 0l-10-10A1 1 0 0 1 6 11h20a1 1 0 0 1 .707 1.707"})})},ex=h.forwardRef(Pm),Bn=ex,tx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M26.924 20.383A1 1 0 0 1 26 21H6a1 1 0 0 1-.708-1.707l10-10a1 1 0 0 1 1.415 0l10 10a1 1 0 0 1 .217 1.09"})})};h.forwardRef(tx);const nx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M7 26a1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 0 1 0-2 3 3 0 0 1 3 3m-3-7a1 1 0 0 0 0 2 5 5 0 0 1 5 5 1 1 0 1 0 2 0 7.01 7.01 0 0 0-7-7m0-4a1 1 0 0 0 0 2 9.01 9.01 0 0 1 9 9 1 1 0 0 0 2 0A11.01 11.01 0 0 0 4 15M27 5H5a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1 13.014 13.014 0 0 1 13 13 1 1 0 0 0 1 1h9a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"})})};h.forwardRef(nx);const rx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M25 3h-1a2 2 0 0 0-2 2v2h-3.5V5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v2H10V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5.586A1.98 1.98 0 0 0 5.586 12L7 13.414V27a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V13.414L26.414 12A1.98 1.98 0 0 0 27 10.586V5a2 2 0 0 0-2-2m-6 24h-6v-8a3 3 0 0 1 6 0z"})})};h.forwardRef(rx);const ox=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m0 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-5-2a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m-3 7a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M25 24H7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v13h17a1 1 0 0 1 0 2"})})};h.forwardRef(ox);const ix=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M3.094 14.443a12.8 12.8 0 0 1 2.914-6.72 2 2 0 0 1 2.953-.138l3.459 3.533a1.98 1.98 0 0 1 .211 2.56 3.2 3.2 0 0 0-.462.968.5.5 0 0 1-.478.354h-8.1a.5.5 0 0 1-.497-.557m14.08-11.435A2 2 0 0 0 15 5v5.084a1.98 1.98 0 0 0 1.656 1.97 4 4 0 0 1 .677 7.72.51.51 0 0 0-.333.476v8.154a.5.5 0 0 0 .558.5A13.04 13.04 0 0 0 29 16.185C29.094 9.4 23.899 3.61 17.174 3.008M14.656 19.77a4 4 0 0 1-2.425-2.427.51.51 0 0 0-.475-.343H3.59a.5.5 0 0 0-.5.556A13.01 13.01 0 0 0 14.443 28.91a.5.5 0 0 0 .556-.5V20.25a.51.51 0 0 0-.343-.48"})})};h.forwardRef(ix);const ax=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m0 2a11 11 0 0 1 8.984 4.659L16 14.845zm0 22a11 11 0 0 1-8.984-4.659l18.97-10.951A11 11 0 0 1 16 27"})})};h.forwardRef(ax);const sx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m29.061 10.061-16 16a1.5 1.5 0 0 1-2.125 0l-7-7a1.504 1.504 0 0 1 2.125-2.125L12 22.875 26.939 7.939a1.502 1.502 0 1 1 2.125 2.125z"})})};h.forwardRef(sx);const cx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5.708 10.708-7 7a1 1 0 0 1-1.415 0l-3-3a1 1 0 0 1 1.415-1.415L14 18.586l6.293-6.293a1 1 0 0 1 1.415 1.415"})})};h.forwardRef(cx);const lx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m27.061 13.061-10 10a1.503 1.503 0 0 1-2.125 0l-10-10a1.503 1.503 0 1 1 2.125-2.125L16 19.875l8.939-8.94a1.502 1.502 0 1 1 2.125 2.125z"})})};h.forwardRef(lx);const ux=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M21.061 24.939a1.503 1.503 0 0 1-2.125 2.125l-10-10a1.5 1.5 0 0 1 0-2.125l10-10a1.503 1.503 0 0 1 2.125 2.125L12.125 16z"})})},dx=h.forwardRef(ux),yl=dx,hx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m23.061 17.061-10 10a1.503 1.503 0 0 1-2.125-2.125L19.875 16l-8.936-8.939a1.502 1.502 0 1 1 2.125-2.125l10 10a1.5 1.5 0 0 1-.003 2.125"})})},fx=h.forwardRef(hx),xa=fx,gx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27.061 21.061a1.503 1.503 0 0 1-2.125 0L16 12.125l-8.939 8.936a1.503 1.503 0 0 1-2.125-2.125l10-10a1.5 1.5 0 0 1 2.125 0l10 10a1.5 1.5 0 0 1 0 2.125"})})};h.forwardRef(gx);const mx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m7 14h-7a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6h6a1 1 0 0 1 0 2"})})},xx=h.forwardRef(mx),wx=xx,vx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28 16a12 12 0 0 1-20.236 8.728 1.002 1.002 0 0 1 1.375-1.456 10 10 0 1 0-.21-14.343c-.441.446-.857.885-1.26 1.321l2.039 2.043A1 1 0 0 1 9 14H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1.707-.707L6.25 8.838c.402-.437.817-.875 1.258-1.32A12 12 0 0 1 28 16M16 9a1 1 0 0 0-1 1v6a1 1 0 0 0 .485.858l5 3a.999.999 0 0 0 1.486-1.1 1 1 0 0 0-.456-.616L17 15.434V10a1 1 0 0 0-1-1"})})};h.forwardRef(vx);const px=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435C30.764 9.693 25.884 5 20.008 5"})})};h.forwardRef(px);const bx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M30.991 15.565C30.764 9.693 25.884 5 20.008 5a11.01 11.01 0 0 0-9.847 6.084A10.9 10.9 0 0 0 9 15.966 1.023 1.023 0 0 1 8.071 17 1 1 0 0 1 7 16a13 13 0 0 1 .668-4.115.5.5 0 0 0-.594-.647A8.01 8.01 0 0 0 1 19c0 4.399 3.719 8 8.125 8H20a11.01 11.01 0 0 0 10.991-11.435m-7.283 3.143a1 1 0 0 1-1.415 0L20 16.414V24a1 1 0 0 1-2 0v-7.586l-2.293 2.293a1 1 0 0 1-1.415-1.415l4-4a1 1 0 0 1 1.415 0l4 4a1 1 0 0 1 0 1.415"})})};h.forwardRef(bx);const $x=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M8.96 12.153 4.342 16l4.618 3.848a1.5 1.5 0 1 1-1.92 2.305l-6-5a1.5 1.5 0 0 1 0-2.305l6-5a1.5 1.5 0 0 1 1.92 2.304m22 2.694-6-5a1.5 1.5 0 1 0-1.92 2.306L27.658 16l-4.618 3.848a1.5 1.5 0 1 0 1.92 2.305l6-5a1.5 1.5 0 0 0 0-2.305M20.512 3.59a1.5 1.5 0 0 0-1.922.898l-8 22a1.5 1.5 0 0 0 2.82 1.024l8-22a1.5 1.5 0 0 0-.898-1.922"})})};h.forwardRef($x);const Cx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M200 40h-32a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v80a16 16 0 0 0 16 16h8v64a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-93.66 21.66a8 8 0 0 1 11.32-11.32l24 24a8 8 0 0 1 0 11.32l-24 24a8 8 0 0 1-11.32-11.32L124.69 80Zm-64 24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L59.31 80l18.35 18.34a8 8 0 0 1-11.32 11.32ZM200 200H56v-64h96a16 16 0 0 0 16-16V56h32Z"})})};h.forwardRef(Cx);const yx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M26 10H4a1 1 0 0 0-1 1v6a12.04 12.04 0 0 0 4.068 9H4a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2h-3.067a12.1 12.1 0 0 0 3.375-5.011A5 5 0 0 0 31 16v-1a5 5 0 0 0-5-5m3 6a3 3 0 0 1-2.15 2.875Q27 17.944 27 17v-4.828A3 3 0 0 1 29 15zM14 7V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m4 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m-8 0V3a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0"})})};h.forwardRef(yx);const Sx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M29.743 13.401a1 1 0 0 0-.487-.675l-3.729-2.125-.015-4.202a1 1 0 0 0-.353-.76 14 14 0 0 0-4.59-2.584 1 1 0 0 0-.808.074L16 5.23l-3.765-2.106a1 1 0 0 0-.809-.075 14 14 0 0 0-4.585 2.594 1 1 0 0 0-.354.758L6.47 10.61 2.74 12.734a1 1 0 0 0-.486.675 13.3 13.3 0 0 0 0 5.195 1 1 0 0 0 .486.675l3.729 2.125.015 4.204a1 1 0 0 0 .353.76 14 14 0 0 0 4.59 2.583 1 1 0 0 0 .808-.073L16 26.768l3.765 2.107a1.013 1.013 0 0 0 .809.073 14 14 0 0 0 4.585-2.592 1 1 0 0 0 .354-.759l.018-4.206 3.729-2.125a1 1 0 0 0 .486-.675c.34-1.713.338-3.477-.003-5.19M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})};h.forwardRef(Sx);const Rx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M18.5 12V6a1.5 1.5 0 1 1 3 0v4.5H26a1.5 1.5 0 1 1 0 3h-6a1.5 1.5 0 0 1-1.5-1.5M12 18.5H6a1.5 1.5 0 1 0 0 3h4.5V26a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5m14 0h-6a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 1 0 3 0v-4.5H26a1.5 1.5 0 1 0 0-3m-14-14A1.5 1.5 0 0 0 10.5 6v4.5H6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 12 4.5"})})};h.forwardRef(Rx);const _x=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M22.5 17.5h-2v-3h2a5 5 0 1 0-5-5v2h-3v-2a5 5 0 1 0-5 5h2v3h-2a5 5 0 1 0 5 5v-2h3v2a5 5 0 1 0 5-5m-2-8a2 2 0 1 1 2 2h-2zm-13 0a2 2 0 0 1 4 0v2h-2a2 2 0 0 1-2-2m4 13a2 2 0 1 1-2-2h2zm3-8h3v3h-3zm8 10a2 2 0 0 1-2-2v-2h2a2 2 0 0 1 0 4"})})};h.forwardRef(_x);const jx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M30.5 24a1.5 1.5 0 0 1-1.5 1.5h-3.5V29a1.5 1.5 0 1 1-3 0v-3.5H8A1.5 1.5 0 0 1 6.5 24V9.5H3a1.5 1.5 0 0 1 0-3h3.5V3a1.5 1.5 0 0 1 3 0v19.5H29a1.5 1.5 0 0 1 1.5 1.5M13 9.5h9.5V19a1.5 1.5 0 1 0 3 0V8A1.5 1.5 0 0 0 24 6.5H13a1.5 1.5 0 0 0 0 3"})})};h.forwardRef(jx);const Ax=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M26.061 23.939a1.503 1.503 0 0 1-2.125 2.125L16 18.125l-7.939 7.936a1.503 1.503 0 1 1-2.125-2.125L13.875 16 5.939 8.061a1.503 1.503 0 1 1 2.125-2.125L16 13.875l7.939-7.94a1.502 1.502 0 1 1 2.125 2.125L18.125 16z"})})},Ix=h.forwardRef(Ax),sr=Ix,Tx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m4.708 16.293a1 1 0 0 1-1.415 1.415L16 17.414l-3.293 3.293a1 1 0 0 1-1.415-1.415L14.587 16l-3.293-3.293a1 1 0 1 1 1.415-1.415L16 14.587l3.293-3.293a1 1 0 0 1 1.415 1.415L17.414 16z"})})};h.forwardRef(Tx);const Mx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M30.48 9.524a1.51 1.51 0 0 0-1.668-.213l-6.276 3.125-5.24-8.704a1.514 1.514 0 0 0-2.592 0l-5.24 8.708L3.19 9.315a1.514 1.514 0 0 0-2.113 1.825l4.625 14.17a1 1 0 0 0 1.46.55C7.194 25.841 10.39 24 16 24s8.806 1.841 8.835 1.859a1 1 0 0 0 1.464-.549l4.625-14.166a1.51 1.51 0 0 0-.444-1.62M21.98 19.6a1 1 0 0 1-1.159.811 28.5 28.5 0 0 0-9.652 0 1 1 0 0 1-.348-1.97 30.6 30.6 0 0 1 10.348 0 1 1 0 0 1 .816 1.159z"})})};h.forwardRef(Mx);const Ex=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27.414 24a2 2 0 0 1 0 2.829l-.585.585a2 2 0 0 1-2.829 0l-6.906-6.905-2.735 6.292A1.98 1.98 0 0 1 12.533 28h-.098a1.98 1.98 0 0 1-1.801-1.375L4.1 6.615A1.994 1.994 0 0 1 6.615 4.1l20.01 6.534a2 2 0 0 1 .176 3.725l-6.292 2.735z"})})};h.forwardRef(Ex);const Lx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3C9.271 3 4 6.075 4 10v12c0 3.925 5.271 7 12 7s12-3.075 12-7V10c0-3.925-5.271-7-12-7m10 13c0 1.203-.985 2.429-2.701 3.365C21.366 20.419 18.774 21 16 21s-5.366-.581-7.299-1.635C6.985 18.429 6 17.203 6 16v-2.08C8.133 15.795 11.779 17 16 17s7.868-1.21 10-3.08zm-2.701 9.365C21.366 26.419 18.774 27 16 27s-5.366-.581-7.299-1.635C6.985 24.429 6 23.203 6 22v-2.08C8.133 21.795 11.779 23 16 23s7.868-1.21 10-3.08V22c0 1.203-.985 2.429-2.701 3.365"})})};h.forwardRef(Lx);const Vx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M29 12a2 2 0 0 0-2-2h-4V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16a1 1 0 0 0 1.625.777L9 19.25V23a2 2 0 0 0 2 2h11.699l4.676 3.778A1 1 0 0 0 29 28zm-5.319 11.223a1 1 0 0 0-.625-.223H11v-4h10a2 2 0 0 0 2-2v-5h4v13.906z"})})};h.forwardRef(Vx);const Dx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-13.561 1.061a1.5 1.5 0 0 0 2.125 0l5-5a1.502 1.502 0 1 0-2.125-2.125L17.5 15.375V5a1.5 1.5 0 1 0-3 0v10.375l-2.439-2.436a1.502 1.502 0 1 0-2.125 2.125z"})})};h.forwardRef(Dx);const Bx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M13.5 7.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0m7 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-9 4.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-9 8.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4m9 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};h.forwardRef(Bx);const Hx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 4H11a1 1 0 0 0-1 1v5H5a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-5h5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1m-1 16h-4v-9a1 1 0 0 0-1-1h-9V6h14z"})})};h.forwardRef(Hx);const Ox=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m11 13c.001 1.411-.27 2.81-.8 4.118l-5.587-3.437a2 2 0 0 0-.78-.279l-2.853-.385a2.01 2.01 0 0 0-2 .983h-1.09l-.475-.983a1.99 1.99 0 0 0-1.375-1.083l-1-.216.978-1.718h2.088c.338 0 .67-.087.966-.25l1.532-.845q.202-.113.375-.268l3.364-3.042a1.99 1.99 0 0 0 .407-2.458l-.045-.08A11.01 11.01 0 0 1 27 16M5 16a10.94 10.94 0 0 1 1.068-4.725l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99a2.01 2.01 0 0 0 1.8 1.125h.186l-.904 2.029a2 2 0 0 0 .357 2.171l.018.018L16 25.742l-.242 1.25A11.014 11.014 0 0 1 5 16"})})};h.forwardRef(Ox);const Nx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:[s.jsx("path",{d:"M20.689 3.88A13 13 0 0 0 16 3a13 13 0 0 0-8.155 23.124l1.02-1.765A11 11 0 0 1 5 16a10.94 10.94 0 0 1 1.068-4.724l1.417 3.784a2 2 0 0 0 1.453 1.25l2.678.576.476.99q.113.226.275.418l1.169-2.025-.121-.25a1.99 1.99 0 0 0-1.375-1.084l-1-.217.978-1.717h2.088c.338 0 .67-.087.966-.25l.726-.4z"}),s.jsx("path",{fillRule:"evenodd",d:"m24 2.144 1.732 1-1.58 2.736q.54.435 1.036.932A13.01 13.01 0 0 1 29 16a13 13 0 0 1-17.69 12.124l-1.578 2.732-1.732-1zm-.86 5.49-4.936 8.549 1.628.22c.277.037.543.132.78.278l5.588 3.436c.53-1.308.801-2.706.8-4.117a11.01 11.01 0 0 0-3.86-8.367M13.92 23.6l-1.593 2.76a11 11 0 0 0 3.43.631l.242-1.25z",clipRule:"evenodd"})]})};h.forwardRef(Nx);const Fx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10.365 7.5C20.579 21.724 18.441 23 16 23s-4.579-1.275-5.865-3.5a1.001 1.001 0 0 1 1.477-1.31q.157.129.253.31C12.799 20.114 14.266 21 16 21s3.201-.887 4.135-2.5a1 1 0 1 1 1.73 1M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(Fx);const zx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-4.5 9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m10 10.865a1 1 0 0 1-1.365-.365C19.201 20.886 17.734 20 16 20s-3.201.887-4.135 2.5a1.001 1.001 0 1 1-1.73-1C11.421 19.276 13.559 18 16 18s4.579 1.275 5.865 3.5a1 1 0 0 1-.365 1.365M20.5 15a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(zx);const kx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27.5 6v5a1.5 1.5 0 1 1-3 0V7.5H21a1.5 1.5 0 0 1 0-3h5A1.5 1.5 0 0 1 27.5 6M11 24.5H7.5V21a1.5 1.5 0 0 0-3 0v5A1.5 1.5 0 0 0 6 27.5h5a1.5 1.5 0 1 0 0-3m15-5a1.5 1.5 0 0 0-1.5 1.5v3.5H21a1.5 1.5 0 1 0 0 3h5a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5m-15-15H6A1.5 1.5 0 0 0 4.5 6v5a1.5 1.5 0 0 0 3 0V7.5H11a1.5 1.5 0 0 0 0-3"})})};h.forwardRef(kx);const Wx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 13a1.5 1.5 0 1 1-3 0V8.625l-7.439 7.439a1.503 1.503 0 1 1-2.125-2.125L23.375 6.5H19a1.5 1.5 0 0 1 0-3h8A1.5 1.5 0 0 1 28.5 5zM23 16a1.5 1.5 0 0 0-1.5 1.5v8h-15v-15h8a1.5 1.5 0 1 0 0-3H6A2.5 2.5 0 0 0 3.5 10v16A2.5 2.5 0 0 0 6 28.5h16a2.5 2.5 0 0 0 2.5-2.5v-8.5A1.5 1.5 0 0 0 23 16"})})},Ux=h.forwardRef(Wx),qx=Ux,Gx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M30.914 15.595c-.044-.099-1.103-2.447-3.457-4.801C24.322 7.657 20.36 6 16 6S7.679 7.657 4.542 10.794C2.19 13.148 1.125 15.5 1.086 15.595a1 1 0 0 0 0 .812c.044.1 1.103 2.447 3.456 4.8C7.68 24.344 11.64 26 16 26s8.321-1.657 11.458-4.792c2.353-2.354 3.412-4.702 3.456-4.8a1 1 0 0 0 0-.813M16 21a5 5 0 1 1 0-10 5 5 0 0 1 0 10"})})};h.forwardRef(Gx);const Kx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M6.74 4.328a1 1 0 1 0-1.48 1.345l2.405 2.646c-4.54 2.786-6.493 7.081-6.579 7.276a1 1 0 0 0 0 .813c.044.098 1.103 2.446 3.456 4.8C7.68 24.343 11.64 26 16 26c2.24.013 4.459-.448 6.509-1.354l2.75 3.027a1 1 0 1 0 1.48-1.345zm11.125 15.21a4 4 0 0 1-5.209-5.73zm13.049-3.13c-.053.117-1.319 2.92-4.17 5.475a1 1 0 0 1-1.408-.072L12.675 7.884a1 1 0 0 1 .575-1.66A17 17 0 0 1 16 6c4.36 0 8.321 1.658 11.458 4.794 2.353 2.354 3.412 4.702 3.456 4.801a1 1 0 0 1 0 .813"})})};h.forwardRef(Kx);const Yx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M17 15v12a1 1 0 0 1-2 0V15a1 1 0 0 1 2 0m8 9a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1m3-6h-2V5a1 1 0 0 0-2 0v13h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M7 20a1 1 0 0 0-1 1v6a1 1 0 1 0 2 0v-6a1 1 0 0 0-1-1m3-6H8V5a1 1 0 0 0-2 0v9H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m9-6h-2V5a1 1 0 0 0-2 0v3h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"})})};h.forwardRef(Yx);const Zx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m26.48 16.851-7.474 7.559a1.97 1.97 0 0 1-1.4.585H9.415l-3.707 3.712a1.001 1.001 0 0 1-1.415-1.415l2.823-2.822L15.588 16h10.537a.5.5 0 0 1 .355.851m.607-13.03a8 8 0 0 0-10.737.518l-1.2 1.185a.5.5 0 0 0-.15.351v7.875l6.875-6.875a1 1 0 0 1 1.414 1.414L17.589 14h11.047a.5.5 0 0 0 .445-.27 8.01 8.01 0 0 0-1.994-9.909M7.854 20.904 13 15.758V8.845a.5.5 0 0 0-.851-.355L7.586 13A1.99 1.99 0 0 0 7 14.414v6.136a.5.5 0 0 0 .854.354"})})};h.forwardRef(Zx);const Xx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707M19 11V5.5l5.5 5.5z"})})};h.forwardRef(Xx);const Qx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44ZM48 180c0 11 7.18 20 16 20a14.18 14.18 0 0 0 10.06-4.5 8.21 8.21 0 0 1 10.9-.91 8 8 0 0 1 .82 11.81A30.06 30.06 0 0 1 64 216c-17.64 0-32-16.15-32-36s14.36-36 32-36a30 30 0 0 1 21.39 9.19 8.26 8.26 0 0 1 .73 11.09 8 8 0 0 1-11.9.38A14.17 14.17 0 0 0 64 160c-8.82 0-16 9-16 20m103.81 16.31a20.82 20.82 0 0 1-9.19 15.23C137.43 215 131 216 125.13 216a61.1 61.1 0 0 1-15.13-2 8 8 0 1 1 4.3-15.41c4.38 1.2 14.95 2.7 19.55-.36.88-.59 1.83-1.52 2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56 20.56 0 0 1 9-14.95c11.84-8 30.71-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54 4.54 0 0 0-2 3.67c-.12.9-.14 1.09 1.11 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.79 2.83 26.35 7.66 24.11 24.97M215.42 155l-19.89 55.68a8 8 0 0 1-15.06 0L160.58 155a8.21 8.21 0 0 1 4.5-10.45 8 8 0 0 1 10.45 4.76l12.47 34.9 12.47-34.9a8 8 0 0 1 10.45-4.76 8.23 8.23 0 0 1 4.5 10.45"})})};h.forwardRef(Qx);const Jx=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m26.708 10.293-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V11a1 1 0 0 0-.293-.707m-7 11a1 1 0 0 1-1.415 1.415L16 20.414l-2.293 2.293a1 1 0 0 1-1.415-1.415L14.587 19l-2.293-2.293a1 1 0 1 1 1.415-1.415L16 17.587l2.293-2.293a1 1 0 0 1 1.415 1.415L17.414 19zM19 11V5.5l5.5 5.5z"})})};h.forwardRef(Jx);const Px=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M6 15h20a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707l-7-7A1 1 0 0 0 19 3H7a2 2 0 0 0-2 2v9a1 1 0 0 0 1 1m13-9.5 5.5 5.5H19zM28 19a1 1 0 0 1-1 1h-3v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1M8 18H6a1 1 0 0 0-1 1v7a1 1 0 1 0 2 0v-1h1a3.5 3.5 0 1 0 0-7m0 5H7v-3h1a1.5 1.5 0 1 1 0 3m8-5h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a4.5 4.5 0 1 0 0-9m0 7h-1v-5h1a2.5 2.5 0 0 1 0 5"})})};h.forwardRef(Px);const ew=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M44 120h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4m108-76 44 44h-44Zm4 164.53a8.18 8.18 0 0 1-8.25 7.47H120a8 8 0 0 1-8-8v-55.73a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v48h20a8 8 0 0 1 8 8.51m-61.49-51.88L77.83 180l16.68 23.35a8 8 0 0 1-13 9.3L68 193.76l-13.49 18.89a8 8 0 1 1-13-9.3L58.17 180l-16.68-23.35a8 8 0 0 1 2.3-11.46 8.19 8.19 0 0 1 10.88 2.38L68 166.24l13.49-18.89a8 8 0 0 1 13 9.3Zm121.28 39.66a20.81 20.81 0 0 1-9.18 15.23c-5.19 3.46-11.67 4.46-17.49 4.46a60.6 60.6 0 0 1-15.19-2 8 8 0 0 1 4.31-15.41c4.38 1.21 14.94 2.71 19.54-.35.89-.6 1.84-1.52 2.15-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58 20.58 0 0 1 8.95-14.94c11.84-8 30.72-3.31 32.83-2.76a8 8 0 0 1-4.07 15.48c-4.48-1.17-15.22-2.56-19.82.56a4.54 4.54 0 0 0-2 3.67c-.11.9-.13 1.08 1.12 1.9 2.31 1.49 6.45 2.68 10.45 3.84 9.87 2.82 26.39 7.65 24.18 24.96"})})};h.forwardRef(ew);const tw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 256 256",fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M184 144h-16a8 8 0 0 0-8 8v55.73a8.17 8.17 0 0 0 7.47 8.25 8 8 0 0 0 8.53-8v-8h7.4c15.24 0 28.14-11.92 28.59-27.15A28 28 0 0 0 184 144m-.35 40H176v-24h8a12 12 0 0 1 12 13.16A12.25 12.25 0 0 1 183.65 184M136 152v55.73a8.17 8.17 0 0 1-7.47 8.25 8 8 0 0 1-8.53-8v-55.71a8.17 8.17 0 0 1 7.47-8.25A8 8 0 0 1 136 152m-40 56.53a8.17 8.17 0 0 1-8.27 7.47h-31.5a8.27 8.27 0 0 1-6-2.5 8 8 0 0 1-1.18-9.5l25.16-44H56.27a8.17 8.17 0 0 1-8.27-7.47 8 8 0 0 1 8-8.53h31.77a8.27 8.27 0 0 1 6 2.5A8 8 0 0 1 95 156l-25.21 44H88a8 8 0 0 1 8 8.53M213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v76a4 4 0 0 0 4 4h168a4 4 0 0 0 4-4V88a8 8 0 0 0-2.34-5.66M152 88V44l44 44Z"})})};h.forwardRef(tw);const nw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M25.5 16a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M29 8.5H3a1.5 1.5 0 0 0 0 3h26a1.5 1.5 0 1 0 0-3m-10 12h-6a1.5 1.5 0 1 0 0 3h6a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(nw);const rw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 9H16.414L13 5.586A1.98 1.98 0 0 0 11.586 5H5a2 2 0 0 0-2 2v18.078A1.926 1.926 0 0 0 4.924 27H27.11A1.89 1.89 0 0 0 29 25.111V11a2 2 0 0 0-2-2M5 7h6.586l2 2H5z"})})};h.forwardRef(rw);const ow=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 9h-4.385q.075-.06.146-.125A3.7 3.7 0 0 0 24 6.196 4.08 4.08 0 0 0 19.805 2a3.7 3.7 0 0 0-2.68 1.239A6.9 6.9 0 0 0 16 5.049a6.9 6.9 0 0 0-1.125-1.81A3.7 3.7 0 0 0 12.195 2 4.08 4.08 0 0 0 8 6.196a3.7 3.7 0 0 0 1.239 2.679q.072.06.146.125H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2v8a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V15H5v-4h10v4h2v-4h10v4H17v11.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M10.564 7.375A1.7 1.7 0 0 1 10 6.125 2.076 2.076 0 0 1 12.074 4h.061a1.71 1.71 0 0 1 1.25.563c1.049 1.185 1.419 3.15 1.549 4.365-1.22-.13-3.184-.5-4.37-1.553m10.875 0c-1.186 1.05-3.155 1.42-4.375 1.55.148-1.314.561-3.237 1.561-4.361A1.7 1.7 0 0 1 19.875 4h.061A2.077 2.077 0 0 1 22 6.135a1.7 1.7 0 0 1-.564 1.24z"})})};h.forwardRef(ow);const iw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m9.796 8h-4.428a17.8 17.8 0 0 0-2.533-5.625A11.05 11.05 0 0 1 25.796 11M16 5.014c1.5 1.625 2.625 3.693 3.296 5.986h-6.592C13.375 8.707 14.5 6.641 16 5.014M12 16c0-1.005.084-2.009.25-3h7.5a18.2 18.2 0 0 1 0 6h-7.5a18 18 0 0 1-.25-3m.704 5h6.592c-.671 2.293-1.796 4.359-3.296 5.986-1.5-1.627-2.625-3.693-3.296-5.986m6.131 5.625A17.8 17.8 0 0 0 21.367 21h4.43a11.05 11.05 0 0 1-6.962 5.625M21.776 19a20.2 20.2 0 0 0 0-6h4.808a11 11 0 0 1 0 6z"})})};h.forwardRef(iw);const aw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{fillRule:"evenodd",d:"M13.29 28.226 6.765 24.46a2.822 2.822 0 1 1-2.708-4.693v-7.532a2.824 2.824 0 1 1 2.708-4.693l6.525-3.767a2.824 2.824 0 1 1 5.42 0l6.524 3.766a2.822 2.822 0 1 1 2.71 4.693v7.533a2.824 2.824 0 1 1-2.71 4.694l-6.524 3.766A2.825 2.825 0 0 1 16 31.84a2.822 2.822 0 0 1-2.71-3.614M16 5.806q.413-.002.791-.113l8.531 14.776a2.8 2.8 0 0 0-.791 1.37H7.467a2.8 2.8 0 0 0-.79-1.369L15.21 5.693q.377.11.791.112M7.468 23.178l-.033.12 6.526 3.767A2.81 2.81 0 0 1 16 26.195c.802 0 1.526.334 2.04.871l6.523-3.766-.032-.121zM5.397 12.233a2.824 2.824 0 0 0 2.038-3.532l6.526-3.767q.043.045.088.088L5.517 19.8l-.12-.032zM26.482 19.8q.06-.018.121-.033v-7.532a2.824 2.824 0 0 1-2.04-3.534L18.04 4.934q-.045.045-.089.088z",clipRule:"evenodd"})})};h.forwardRef(aw);const sw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 7v7.5a.5.5 0 0 1-.5.5H17V5.5a.5.5 0 0 1 .5-.5H25a2 2 0 0 1 2 2M14.5 5H7a2 2 0 0 0-2 2v7.5a.5.5 0 0 0 .5.5H15V5.5a.5.5 0 0 0-.5-.5m12 12H17v9.5a.5.5 0 0 0 .5.5H25a2 2 0 0 0 2-2v-7.5a.5.5 0 0 0-.5-.5M5 17.5V25a2 2 0 0 0 2 2h7.5a.5.5 0 0 0 .5-.5V17H5.5a.5.5 0 0 0-.5.5"})})};h.forwardRef(sw);const cw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M10.5 6.5v5h-7A.5.5 0 0 1 3 11V8a2 2 0 0 1 2-2h5a.5.5 0 0 1 .5.5m2 19a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-5h-7zM3 21v3a2 2 0 0 0 2 2h5a.5.5 0 0 0 .5-.5v-5h-7a.5.5 0 0 0-.5.5m0-7v4a.5.5 0 0 0 .5.5h7v-5h-7a.5.5 0 0 0-.5.5m16-8h-6a.5.5 0 0 0-.5.5v5h7v-5A.5.5 0 0 0 19 6m9.5 7.5h-7v5h7a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5m-16 5h7v-5h-7zM27 6h-5a.5.5 0 0 0-.5.5v5h7a.5.5 0 0 0 .5-.5V8a2 2 0 0 0-2-2m1.5 14.5h-7v5a.5.5 0 0 0 .5.5h5a2 2 0 0 0 2-2v-3a.5.5 0 0 0-.5-.5"})})};h.forwardRef(cw);const lw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.791 17.633a3.04 3.04 0 0 0-2.326-.597C28.813 14.666 30 12.31 30 10c0-3.309-2.661-6-5.933-6A5.95 5.95 0 0 0 19.5 6.094 5.95 5.95 0 0 0 14.932 4C11.663 4 9 6.691 9 10c0 1.375.405 2.711 1.258 4.125a4 4 0 0 0-1.844 1.05L5.586 18H2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h13q.123 0 .242-.03l8-2a1 1 0 0 0 .15-.05l4.858-2.067.055-.025a3.074 3.074 0 0 0 .491-5.195zm-1.362 3.393-4.75 2.023L14.875 25H7v-5.586l2.829-2.828A1.98 1.98 0 0 1 11.242 16H17.5a1.5 1.5 0 0 1 0 3H14a1 1 0 0 0 0 2h4q.113 0 .224-.025l8.375-1.926.038-.01a1.075 1.075 0 0 1 .788 1.987z"})})};h.forwardRef(lw);const uw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28 10.5h-5.475l.951-5.231a1.5 1.5 0 1 0-2.952-.538L19.475 10.5h-4.95l.951-5.231a1.5 1.5 0 1 0-2.952-.538L11.475 10.5H6a1.5 1.5 0 0 0 0 3h4.93l-.909 5H4a1.5 1.5 0 0 0 0 3h5.475l-.951 5.231a1.5 1.5 0 0 0 1.207 1.75q.134.022.269.019a1.5 1.5 0 0 0 1.475-1.233l1.05-5.767h4.95l-.951 5.231a1.5 1.5 0 1 0 2.952.543l1.049-5.774H26a1.5 1.5 0 1 0 0-3h-4.93l.909-5H28a1.5 1.5 0 1 0 0-3m-9.979 8H13.07l.909-5h4.951z"})})};h.forwardRef(uw);const dw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-5 5 4.94 4.94 0 0 1-3.571-1.45 1.5 1.5 0 0 1 2.142-2.1 1.94 1.94 0 0 0 1.429.55 2 2 0 0 0 0-4 1.94 1.94 0 0 0-1.429.55 1.5 1.5 0 0 1-2.551-1.3l1-6A1.5 1.5 0 0 1 25 12.5h5a1.5 1.5 0 1 1 0 3h-3.729l-.338 2.029q.283-.03.567-.029a5 5 0 0 1 5 5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(dw);const hw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M32 22a1.5 1.5 0 0 1-1.5 1.5V26a1.5 1.5 0 1 1-3 0v-2.5H23a1.5 1.5 0 0 1-1.422-1.974l3-9a1.5 1.5 0 0 1 2.845.948L25.08 20.5H27.5V18a1.5 1.5 0 1 1 3 0v2.5A1.5 1.5 0 0 1 32 22M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(hw);const fw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M29.5 14v12a1.5 1.5 0 1 1-3 0v-9.198l-.668.448a1.503 1.503 0 0 1-1.665-2.5l3-2A1.5 1.5 0 0 1 29.5 14M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(fw);const gw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m27.133 17.541 1.655-2.772a1.5 1.5 0 1 0-2.576-1.538l-4.03 6.75q-.018.029-.032.059a5 5 0 1 0 4.983-2.5zM26.5 24.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0"})})};h.forwardRef(gw);const mw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M31.5 22.5a5 5 0 0 1-8.571 3.5 1.5 1.5 0 1 1 2.142-2.099A2 2 0 1 0 26.5 20.5a1.5 1.5 0 0 1-1.229-2.36l1.854-2.64H24a1.5 1.5 0 1 1 0-3h6a1.5 1.5 0 0 1 1.229 2.36l-2.293 3.275A5 5 0 0 1 31.5 22.5M18 5.5A1.5 1.5 0 0 0 16.5 7v6h-10V7a1.5 1.5 0 0 0-3 0v15a1.5 1.5 0 0 0 3 0v-6h10v6a1.5 1.5 0 1 0 3 0V7A1.5 1.5 0 0 0 18 5.5"})})};h.forwardRef(mw);const xw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M19.5 7v15a1.5 1.5 0 1 1-3 0v-6h-10v6a1.5 1.5 0 0 1-3 0V7a1.5 1.5 0 0 1 3 0v6h10V7a1.5 1.5 0 1 1 3 0M30 24.5h-3l3.593-4.791a4.499 4.499 0 1 0-7.837-4.209 1.5 1.5 0 1 0 2.829 1q.076-.218.216-.402a1.5 1.5 0 1 1 2.394 1.807L22.8 25.1a1.5 1.5 0 0 0 1.2 2.4h6a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(xw);const ww=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M29 17v7a3 3 0 0 1-3 3h-2a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h2.956A10.964 10.964 0 0 0 16.081 6H16A11 11 0 0 0 5.045 16H8a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-7a13.014 13.014 0 0 1 22.236-9.167A12.93 12.93 0 0 1 29 17"})})};h.forwardRef(ww);const vw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M30 11.75c0 8.75-12.974 15.833-13.526 16.125a1 1 0 0 1-.948 0C14.974 27.582 2 20.5 2 11.75A7.76 7.76 0 0 1 9.75 4c2.581 0 4.841 1.11 6.25 2.986C17.409 5.11 19.669 4 22.25 4A7.76 7.76 0 0 1 30 11.75"})})};h.forwardRef(vw);const pw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28 14.444V26a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V14.444a2 2 0 0 1 .646-1.473l10-9.435.014-.013a2 2 0 0 1 2.705.013l10 9.435A2 2 0 0 1 28 14.444"})})};h.forwardRef(pw);const bw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-7.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M5 25v-3.5l6.5-6.5 10 10zm22 0h-2.671l-4.5-4.5 2.5-2.5L27 22.672z"})})};h.forwardRef(bw);const $w=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 5H9a2 2 0 0 0-2 2v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M23 25H5V11h2v10a2 2 0 0 0 2 2h14zm4-4H9v-4.5l4.5-4.5 6.208 6.208a1 1 0 0 0 1.413 0L24.33 15 27 17.672z"})})};h.forwardRef($w);const Cw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 0 0 0-3m-18-4a1.5 1.5 0 0 0 1.061-2.561L6.125 12l3.936-3.94a1.503 1.503 0 1 0-2.125-2.125l-5 5a1.5 1.5 0 0 0 0 2.125l5 5A1.5 1.5 0 0 0 9 18.5"})})};h.forwardRef(Cw);const yw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1 0-3h12a1.5 1.5 0 0 1 1.5 1.5M15 9.5h12a1.5 1.5 0 0 0 0-3H15a1.5 1.5 0 0 0 0 3m12 13H5a1.5 1.5 0 0 0 0 3h22a1.5 1.5 0 1 0 0-3M3.939 18.06a1.5 1.5 0 0 0 2.125 0l5-5a1.5 1.5 0 0 0 0-2.125l-5-5a1.503 1.503 0 0 0-2.125 2.125L7.875 12l-3.936 3.939a1.5 1.5 0 0 0 0 2.122"})})};h.forwardRef(yw);const Sw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M17 23a2 2 0 0 1-2-2v-5a1 1 0 0 1 0-2 2 2 0 0 1 2 2v5a1 1 0 0 1 0 2"})})};h.forwardRef(Sw);const Rw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M25.5 7A1.5 1.5 0 0 1 24 8.5h-3.919l-5 15H18a1.5 1.5 0 1 1 0 3H8a1.5 1.5 0 1 1 0-3h3.919l5-15H14a1.5 1.5 0 0 1 0-3h10A1.5 1.5 0 0 1 25.5 7"})})};h.forwardRef(Rw);const _w=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M20 2a10.01 10.01 0 0 0-9.511 13.098l-7.196 7.195A1 1 0 0 0 3 23v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 1-1v-2h2a1 1 0 0 0 .707-.293l1.195-1.196A10 10 0 1 0 20 2m2.5 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4"})})};h.forwardRef(_w);const jw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 5H5a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M5 7h22v5H5zm22 18H14V14h13z"})})};h.forwardRef(jw);const Aw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M22 29a1 1 0 0 1-1 1H11a1 1 0 1 1 0-2h10a1 1 0 0 1 1 1m5-16a10.94 10.94 0 0 1-4.205 8.651A2.03 2.03 0 0 0 22 23.25V24a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-.75a2 2 0 0 0-.779-1.582A10.95 10.95 0 0 1 5 13.06C4.967 7.104 9.782 2.143 15.735 2A11 11 0 0 1 27 13m-4.014-1.168a7.2 7.2 0 0 0-5.82-5.818 1 1 0 1 0-.332 1.972c2.071.349 3.829 2.106 4.18 4.182a1 1 0 0 0 1.972-.335"})})};h.forwardRef(Aw);const Iw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m21.731 14.683-14 15a1 1 0 0 1-1.711-.875l1.832-9.167L.65 16.936a1 1 0 0 1-.375-1.625l14-15a1 1 0 0 1 1.71.875l-1.837 9.177 7.204 2.7a1 1 0 0 1 .375 1.62z"})})};h.forwardRef(Iw);const Tw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M17.046 23.441a1.5 1.5 0 0 1 0 2.125l-.742.743a7.502 7.502 0 1 1-10.61-10.61l3.015-3.014A7.5 7.5 0 0 1 19 12.375a1.506 1.506 0 0 1-2 2.25 4.5 4.5 0 0 0-6.171.184l-3.013 3.01a4.5 4.5 0 0 0 6.365 6.365l.743-.743a1.5 1.5 0 0 1 2.122 0m9.26-17.75a7.51 7.51 0 0 0-10.61 0l-.742.743a1.503 1.503 0 1 0 2.125 2.125l.742-.743a4.5 4.5 0 0 1 6.365 6.365l-3.014 3.015a4.5 4.5 0 0 1-6.172.179 1.506 1.506 0 1 0-2 2.25 7.5 7.5 0 0 0 10.288-.304l3.014-3.014a7.51 7.51 0 0 0 .004-10.613z"})})};h.forwardRef(Tw);const Mw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M5 9.5h22a1.5 1.5 0 0 0 0-3H5a1.5 1.5 0 0 0 0 3m22 13H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(Mw);const Ew=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 17.5h22a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m13 5H5a1.5 1.5 0 1 0 0 3h13a1.5 1.5 0 1 0 0-3m11 0h-1.5V21a1.5 1.5 0 1 0-3 0v1.5H23a1.5 1.5 0 1 0 0 3h1.5V27a1.5 1.5 0 1 0 3 0v-1.5H29a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(Ew);const Lw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M17.5 4v4a1.5 1.5 0 1 1-3 0V4a1.5 1.5 0 1 1 3 0m4.156 7.844a1.5 1.5 0 0 0 1.062-.44l2.828-2.829a1.503 1.503 0 1 0-2.125-2.125l-2.825 2.833a1.5 1.5 0 0 0 1.06 2.56M28 14.5h-4a1.5 1.5 0 1 0 0 3h4a1.5 1.5 0 1 0 0-3m-5.282 6.096a1.501 1.501 0 0 0-2.451 1.638c.075.182.186.348.326.487l2.828 2.829a1.503 1.503 0 0 0 2.125-2.125zM16 22.5a1.5 1.5 0 0 0-1.5 1.5v4a1.5 1.5 0 1 0 3 0v-4a1.5 1.5 0 0 0-1.5-1.5m-6.717-1.904-2.83 2.829A1.503 1.503 0 0 0 8.58 25.55l2.829-2.829a1.503 1.503 0 0 0-2.125-2.125M9.5 16A1.5 1.5 0 0 0 8 14.5H4a1.5 1.5 0 1 0 0 3h4A1.5 1.5 0 0 0 9.5 16m-.925-9.546A1.503 1.503 0 0 0 6.45 8.579l2.833 2.825a1.503 1.503 0 0 0 2.125-2.125z"})})},Vw=h.forwardRef(Lw),Sl=Vw,Dw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M26 10h-4V7a6 6 0 1 0-12 0v3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M16 20.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M20 10h-8V7a4 4 0 1 1 8 0z"})})};h.forwardRef(Dw);const Bw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M31 19a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 0 1 1 1M7 9h2v2a1 1 0 1 0 2 0V9h2a1 1 0 0 0 0-2h-2V5a1 1 0 0 0-2 0v2H7a1 1 0 0 0 0 2m16 15h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 1 0 2 0v-1h1a1 1 0 0 0 0-2m4.414-14L10 27.414a2 2 0 0 1-2.828 0l-2.587-2.585a2 2 0 0 1 0-2.829L22 4.586a2 2 0 0 1 2.829 0l2.585 2.585a2 2 0 0 1 0 2.829M26 8.586 23.414 6l-4 4L22 12.586z"})})};h.forwardRef(Bw);const Hw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28 6H4a1 1 0 0 0-1 1v17a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V7a1 1 0 0 0-1-1M12.339 16 5 22.726V9.274zm1.48 1.356 1.5 1.381a1 1 0 0 0 1.352 0l1.5-1.38L25.421 24H6.571zM19.66 16 27 9.273v13.455z"})})},Ow=h.forwardRef(Hw),Nw=Ow,Fw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{fillRule:"evenodd",d:"M11 7q0 .432-.088.838L16 10.382l5.088-2.544a4 4 0 1 1 .895 1.789L18.236 11.5l3.747 1.873a4 4 0 1 1 0 5.253L18.236 20.5l3.747 1.874a4 4 0 1 1-.895 1.788L16 21.618l-5.088 2.544Q11 24.567 11 25a4 4 0 1 1-.983-2.626l3.747-1.874-3.747-1.873a4 4 0 1 1 0-5.253l3.747-1.874-3.747-1.874A4 4 0 1 1 11 7M9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m2.236 8h9.528L16 12.618zM9 25a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2-7a2 2 0 1 0 0-4 2 2 0 0 0 0 4M27 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-2 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4m2-11a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-11 3.382L20.764 17h-9.528z",clipRule:"evenodd"})})};h.forwardRef(Fw);const zw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{fillRule:"evenodd",d:"M14.8 8.254a4 4 0 1 0-1.082 1.682l7.483 4.81a4 4 0 0 0-.075.254H10.874A4.002 4.002 0 0 0 3 16a4 4 0 0 0 7.874 1h10.252q.033.128.075.254l-7.484 4.81a4 4 0 1 0 1.082 1.682l7.484-4.81a4 4 0 1 0 0-5.871zM11 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0m16 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};h.forwardRef(zw);const kw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{fillRule:"evenodd",d:"M18.842 3.227a1 1 0 1 0-.445 1.95l1.747.399L9.6 12.959a4 4 0 1 0 0 6.081l10.546 7.385-1.748.399a1 1 0 1 0 .445 1.95l3.945-.9a1 1 0 0 0 .77-1.1l-.503-4.014a1 1 0 0 0-1.985.248l.223 1.779-10.545-7.384a4 4 0 0 0 .127-.403h14.712l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0 0-1.414l-3-3a1 1 0 0 0-1.414 1.414L25.586 15H10.874a4 4 0 0 0-.127-.403l10.544-7.383-.222 1.778a1 1 0 0 0 1.984.249l.503-4.015a1 1 0 0 0-.77-1.099zM9 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0",clipRule:"evenodd"})})};h.forwardRef(kw);const Ww=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 6H5a2 2 0 0 0-2 2v20a1.98 1.98 0 0 0 1.156 1.813 1.986 1.986 0 0 0 2.141-.299L10.312 26H27a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M10.5 17.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(Ww);const Uw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M10 16V8a6 6 0 1 1 12 0v8a6 6 0 1 1-12 0m16 0a1 1 0 0 0-2 0 8 8 0 0 1-16 0 1 1 0 1 0-2 0 10.014 10.014 0 0 0 9 9.95V29a1 1 0 0 0 2 0v-3.05A10.014 10.014 0 0 0 26 16"})})};h.forwardRef(Uw);const qw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5"})})},Gw=h.forwardRef(qw),Kw=Gw,Yw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m5 14H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2"})})};h.forwardRef(Yw);const Zw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M26 5H6a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3M20 27h-8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2"})})};h.forwardRef(Zw);const Xw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M29.443 18.776a13.1 13.1 0 0 1-4.626 6.614A13 13 0 0 1 4 15a12.9 12.9 0 0 1 2.61-7.815 13.1 13.1 0 0 1 6.614-4.625 1 1 0 0 1 1.25 1.25 11.01 11.01 0 0 0 13.725 13.725 1 1 0 0 1 1.25 1.25z"})})};h.forwardRef(Xw);const Qw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M18 16a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7.5 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4m17 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"})})};h.forwardRef(Qw);const Jw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M10.939 8.061a1.5 1.5 0 0 1 0-2.125l4-4a1.5 1.5 0 0 1 2.125 0l4 4a1.503 1.503 0 1 1-2.125 2.125L17.5 6.625V12a1.5 1.5 0 1 1-3 0V6.625l-1.439 1.436a1.5 1.5 0 0 1-2.122 0m8 15.875L17.5 25.375V20a1.5 1.5 0 1 0-3 0v5.375l-1.439-1.44a1.504 1.504 0 0 0-2.125 2.125l4 4a1.5 1.5 0 0 0 2.125 0l4-4a1.502 1.502 0 1 0-2.125-2.125zm11.125-9-4-4a1.503 1.503 0 0 0-2.125 2.125l1.436 1.439H20a1.5 1.5 0 0 0 0 3h5.375l-1.44 1.439a1.503 1.503 0 0 0 2.125 2.125l4-4a1.5 1.5 0 0 0 .001-2.125zM6.625 17.5H12a1.5 1.5 0 1 0 0-3H6.625l1.44-1.439a1.503 1.503 0 1 0-2.125-2.125l-4 4a1.5 1.5 0 0 0 0 2.125l4 4a1.503 1.503 0 0 0 2.125-2.125z"})})};h.forwardRef(Jw);const Pw=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M26.615 3.214a.99.99 0 0 0-.857-.183l-16 4a1 1 0 0 0-.758.97v13.762a4.5 4.5 0 1 0 2 3.737V13.781l14-3.5v7.482a4.5 4.5 0 1 0 2 3.737V4a1 1 0 0 0-.385-.786"})})};h.forwardRef(Pw);const ev=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5H14.5a1.5 1.5 0 1 1 0-3H27a1.5 1.5 0 0 1 1.5 1.5m-14-6.5H27a1.5 1.5 0 0 0 0-3H14.5a1.5 1.5 0 0 0 0 3m12.5 13H14.5a1.5 1.5 0 1 0 0 3H27a1.5 1.5 0 1 0 0-3M5.5 7.414V13a1.5 1.5 0 0 0 3 0V5a1.5 1.5 0 0 0-2.17-1.341l-2 1a1.5 1.5 0 0 0 1.17 2.75zm4.966 12.107a3.46 3.46 0 0 0-1.4-2.329 3.61 3.61 0 0 0-4.954.683 3.5 3.5 0 0 0-.52.942 1.5 1.5 0 0 0 2.818 1.027.5.5 0 0 1 .072-.125.6.6 0 0 1 .813-.103.48.48 0 0 1 .201.325.45.45 0 0 1-.096.347l-.016.02-3.585 4.794A1.5 1.5 0 0 0 5 27.5h4a1.5 1.5 0 1 0 0-3H8l1.785-2.389a3.43 3.43 0 0 0 .681-2.59"})})};h.forwardRef(ev);const tv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{fillRule:"evenodd",d:"M17.2 8.254a4 4 0 1 1 1.082 1.682l-7.482 4.81q.04.125.074.254h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1H10.874q-.033.128-.075.254l7.484 4.81a4 4 0 1 1-1.082 1.682l-7.484-4.81a4 4 0 1 1 0-5.871zM21 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4m2-11a2 2 0 1 0 4 0 2 2 0 0 0-4 0M7 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4",clipRule:"evenodd"})})};h.forwardRef(tv);const nv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{fillRule:"evenodd",d:"M10.874 17A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h10.252A4.002 4.002 0 0 1 29 16a4 4 0 0 1-7.874 1zM7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4m18 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};h.forwardRef(nv);const rv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{fillRule:"evenodd",d:"M28.924 16.384c-.05.12-.124.231-.217.324l-4 4a1 1 0 0 1-1.632-.324 1 1 0 0 1 .217-1.09L25.585 17H10.875A4.002 4.002 0 0 1 3 16a4 4 0 0 1 7.874-1h14.712l-2.294-2.293a1 1 0 0 1 1.415-1.415l4 4a1 1 0 0 1 .217 1.09M7 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4",clipRule:"evenodd"})})};h.forwardRef(rv);const ov=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M29 4a1 1 0 0 0-1-1c-5.51 0-11.164 6.214-14.304 10.329A7.5 7.5 0 0 0 4 20.5c0 3.86-2.443 5.591-2.559 5.671A1 1 0 0 0 2 28h9.5a7.5 7.5 0 0 0 7.171-9.696C22.788 15.164 29 9.51 29 4M15.553 14.194a48 48 0 0 1 1.26-1.569 9.5 9.5 0 0 1 2.562 2.561q-.738.618-1.569 1.262a7.6 7.6 0 0 0-2.254-2.254m5.337-.335a11.6 11.6 0 0 0-2.75-2.75c3.973-4.316 6.969-5.625 8.738-5.989-.357 1.77-1.672 4.766-5.988 8.739"})})};h.forwardRef(ov);const iv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M31 13v6.25a2.01 2.01 0 0 1-1.45 1.922L17 24.75V29a1 1 0 0 1-2 0v-4.25a2.01 2.01 0 0 1 1.45-1.922L29 19.25V13h-2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3H2a1 1 0 0 1 0-2h2V8a2 2 0 0 1 2-2h19a2 2 0 0 1 2 2v3h2a2 2 0 0 1 2 2"})})};h.forwardRef(iv);const av=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M25.096 6.736A12.9 12.9 0 0 0 16 3h-.134A13 13 0 0 0 3 16c0 5.375 3.323 9.883 8.67 11.771A4 4 0 0 0 17 24a2 2 0 0 1 2-2h5.776a3.976 3.976 0 0 0 3.9-3.11c.224-.984.332-1.99.324-3a12.9 12.9 0 0 0-3.904-9.154M10.5 21a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0-7a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5-3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(av);const sv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.925 5.543v.018L21.65 29.554A1.985 1.985 0 0 1 19.728 31a1.98 1.98 0 0 1-1.803-1.144l-4.464-9.423a.5.5 0 0 1 .099-.568l7.158-7.159a1 1 0 0 0-1.414-1.413l-7.169 7.157a.5.5 0 0 1-.567.099l-9.376-4.441A2.05 2.05 0 0 1 1 12.17a1.99 1.99 0 0 1 1.446-1.815L26.44 3.08h.018a2 2 0 0 1 2.468 2.463"})})};h.forwardRef(sv);const cv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m26.56 17.061-10.257 10.25a7.501 7.501 0 0 1-10.607-10.61l12.27-12.236a5 5 0 0 1 7.07 7.074l-.021.02L13.04 23.086a1.503 1.503 0 0 1-2.121-.041 1.5 1.5 0 0 1 .041-2.121L22.924 9.409a2 2 0 1 0-2.838-2.82L7.816 18.82a4.5 4.5 0 1 0 6.366 6.364l10.258-10.25a1.503 1.503 0 0 1 2.125 2.125z"})})};h.forwardRef(cv);const lv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M3.5 8A1.5 1.5 0 0 1 5 6.5h22a1.5 1.5 0 0 1 0 3H5A1.5 1.5 0 0 1 3.5 8M5 14.5h16a1.5 1.5 0 1 0 0-3H5a1.5 1.5 0 1 0 0 3m22 2H5a1.5 1.5 0 1 0 0 3h22a1.5 1.5 0 1 0 0-3m-6 5H5a1.5 1.5 0 1 0 0 3h16a1.5 1.5 0 1 0 0-3"})})};h.forwardRef(lv);const uv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m28.414 9.171-5.585-5.586a2 2 0 0 0-2.829 0L4.586 19A1.98 1.98 0 0 0 4 20.414V26a2 2 0 0 0 2 2h5.586A1.98 1.98 0 0 0 13 27.414L28.414 12a2 2 0 0 0 0-2.829M24 13.585 18.414 8l3-3L27 10.585z"})})};h.forwardRef(uv);const dv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.985 21.885A7.03 7.03 0 0 1 22 28c-9.925 0-18-8.075-18-18a7.03 7.03 0 0 1 6.115-6.985 2 2 0 0 1 2.078 1.19l2.64 5.894v.015a2 2 0 0 1-.16 1.886 1 1 0 0 1-.07.096L12 15.181c.936 1.903 2.926 3.875 4.854 4.814l3.042-2.589q.045-.037.094-.07a2 2 0 0 1 1.896-.175l.017.008 5.888 2.639a2 2 0 0 1 1.194 2.077"})})};h.forwardRef(dv);const hv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m29.416 13-6.683 6.706c.57 1.584.806 4.236-1.65 7.5a2 2 0 0 1-1.458.794h-.141a2 2 0 0 1-1.415-.586l-6.033-6.04-5.328 5.333a1 1 0 1 1-1.415-1.415l5.332-5.328-6.037-6.038a2 2 0 0 1 .162-2.972c3.178-2.564 6.219-2.06 7.55-1.643L19 2.587a2 2 0 0 1 2.829 0l7.586 7.585A2 2 0 0 1 29.416 13"})})};h.forwardRef(hv);const fv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 2A11.013 11.013 0 0 0 5 13c0 9.413 10 16.521 10.426 16.819a1 1 0 0 0 1.148 0C17 29.52 27 22.413 27 13A11.01 11.01 0 0 0 16 2m0 7a4 4 0 1 1 0 8 4 4 0 0 1 0-8"})})};h.forwardRef(fv);const gv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M30 17v4a1 1 0 0 1-1.196.98L19.5 20.125v2.966l2.207 2.206A1 1 0 0 1 22 26v3a1 1 0 0 1-1.375.929L16 28.078l-4.625 1.85A1 1 0 0 1 10 29v-3a1 1 0 0 1 .293-.707l2.207-2.207v-2.961L3.196 21.98A1 1 0 0 1 2 21v-4a1 1 0 0 1 .553-.895l9.947-4.972V5.5a3.5 3.5 0 1 1 7 0v5.633l9.948 4.972A1 1 0 0 1 30 17"})})};h.forwardRef(gv);const mv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M25.676 18.884a7.6 7.6 0 0 1-3.978 1.107 9 9 0 0 1-3.42-.707A6.94 6.94 0 0 0 17 23.314V27a1 1 0 0 1-1.066 1A1.023 1.023 0 0 1 15 26.969v-1.555l-4.828-4.828A6.6 6.6 0 0 1 7.93 21a5.73 5.73 0 0 1-2.99-.834C2.216 18.511.75 14.702 1.034 9.974a1 1 0 0 1 .94-.94c4.728-.28 8.537 1.182 10.187 3.906a5.75 5.75 0 0 1 .806 3.56.5.5 0 0 1-.86.304l-2.4-2.513a1 1 0 0 0-1.415 1.414l6.736 6.906q.01-.146.026-.291a8.57 8.57 0 0 1 2.33-4.933l6.323-6.682a1 1 0 0 0-1.413-1.415l-6.125 6.477a.5.5 0 0 1-.848-.217c-.592-2.185-.331-4.36.8-6.228 2.233-3.685 7.428-5.657 13.898-5.277a1 1 0 0 1 .94.94c.375 6.471-1.598 11.666-5.283 13.899"})})};h.forwardRef(mv);const xv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M30 16a1.97 1.97 0 0 1-.95 1.689L11.04 28.706a2 2 0 0 1-2.767-.688A2 2 0 0 1 8 27.016V4.984a1.98 1.98 0 0 1 1.015-1.728 2 2 0 0 1 2.025.038L29.05 14.31A1.97 1.97 0 0 1 30 16"})})};h.forwardRef(xv);const wv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-9.5V27a1.5 1.5 0 1 1-3 0v-9.5H5a1.5 1.5 0 1 1 0-3h9.5V5a1.5 1.5 0 1 1 3 0v9.5H27a1.5 1.5 0 0 1 1.5 1.5"})})};h.forwardRef(wv);const vv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.016 13.016 0 0 0 16 3m5 14h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 2 0v4h4a1 1 0 0 1 0 2"})})};h.forwardRef(vv);const pv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 5H17V3a1 1 0 0 0-2 0v2H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h4.92l-2.701 3.375a1 1 0 0 0 1.562 1.25L12.48 24h7.04l3.699 4.625a1 1 0 1 0 1.562-1.25L22.08 24H27a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 18a1 1 0 0 1-2 0v-3a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-5a1 1 0 0 1 2 0zm4 0a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0z"})})};h.forwardRef(pv);const bv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M30.414 17 18 4.586A1.98 1.98 0 0 0 16.586 4H5a1 1 0 0 0-1 1v11.586A1.98 1.98 0 0 0 4.586 18L17 30.414a2 2 0 0 0 2.829 0l10.585-10.585a2 2 0 0 0 0-2.829M10.5 12a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(bv);const $v=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M20.723 28H26a2 2 0 0 0 2-2v-4.706a1 1 0 0 0-1.383-.919 2.9 2.9 0 0 1-1.117.221c-1.654 0-3-1.387-3-3.091s1.346-3.091 3-3.091c.383 0 .763.075 1.117.221A1 1 0 0 0 28 13.706V9a2 2 0 0 0-2-2h-4.527a4.5 4.5 0 1 0-8.945 0H8a2 2 0 0 0-2 2v4.028a4.5 4.5 0 1 0 0 8.945V26a2 2 0 0 0 2 2h5.278"})})};h.forwardRef($v);const Cv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M18 22.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0M29.5 16A13.5 13.5 0 1 1 16 2.5 13.515 13.515 0 0 1 29.5 16m-3 0A10.5 10.5 0 1 0 16 26.5 10.51 10.51 0 0 0 26.5 16M16 8c-3.033 0-5.5 2.242-5.5 5v.5a1.5 1.5 0 1 0 3 0V13c0-1.102 1.125-2 2.5-2s2.5.898 2.5 2-1.125 2-2.5 2a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 0 2.966.32C19.79 17.235 21.5 15.296 21.5 13c0-2.758-2.468-5-5.5-5"})})};h.forwardRef(Cv);const yv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M14.5 9v11a6.006 6.006 0 0 1-6 6 1 1 0 0 1 0-2 4 4 0 0 0 4-4v-1H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7.5a2 2 0 0 1 2 2M27 7h-7.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2H27v1a4 4 0 0 1-4 4 1 1 0 0 0 0 2 6.006 6.006 0 0 0 6-6V9a2 2 0 0 0-2-2"})})};h.forwardRef(yv);const Sv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 5v23a1 1 0 0 1-2 0v-6h-6a1 1 0 0 1-1-1c.046-2.395.349-4.779.902-7.11 1.223-5.061 3.54-8.454 6.704-9.809a1 1 0 0 1 1.394.92m-12.014-.164a.999.999 0 1 0-1.972.33L13.986 11H11V5a1 1 0 0 0-2 0v6H6.014l.972-5.835a1 1 0 1 0-1.972-.329l-1 6A1 1 0 0 0 4 11a6.01 6.01 0 0 0 5 5.915V28a1 1 0 1 0 2 0V16.915A6.01 6.01 0 0 0 16 11q0-.083-.014-.164z"})})};h.forwardRef(Sv);const Rv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M19 28a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1m8.953-8.521-1.546 6.954a2 2 0 0 1-3.188 1.138l-3.405-2.57h-7.625L8.78 27.57a2 2 0 0 1-3.189-1.138l-1.545-6.954a2.01 2.01 0 0 1 .415-1.714l3.57-4.282c.12-1.574.482-3.12 1.072-4.584 1.612-4.043 4.5-6.579 5.671-7.481a2 2 0 0 1 2.45 0c1.167.902 4.059 3.438 5.671 7.48.59 1.465.952 3.01 1.072 4.585l3.57 4.282a2.01 2.01 0 0 1 .415 1.714m-17.404 4.25q-2.014-3.666-2.445-7.209L6 19.045 7.545 26l.022-.016zM17.5 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m8.5 6.545-2.104-2.525q-.428 3.535-2.445 7.211l2.982 2.25.022.017z"})})};h.forwardRef(Rv);const _v=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M19.716 14.141a1 1 0 0 1 .261-1.391l8.458-5.788a1 1 0 0 1 1.125 1.652L21.101 14.4a1 1 0 0 1-1.39-.261zm10.109 10.634a1 1 0 0 1-1.39.261L17 17.211l-5.315 3.636a4.5 4.5 0 1 1-1.125-1.65L15.229 16l-4.673-3.198a4.5 4.5 0 1 1 1.125-1.65l17.875 12.233a1 1 0 0 1 .269 1.39M9 22.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m0-13a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"})})};h.forwardRef(_v);const jv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M29.061 26.939 23.125 21A11.515 11.515 0 1 0 21 23.125l5.941 5.942a1.503 1.503 0 0 0 2.125-2.125zM5.5 14a8.5 8.5 0 1 1 8.5 8.5A8.51 8.51 0 0 1 5.5 14"})})},Av=h.forwardRef(jv),Iv=Av,Tv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M26 5H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M26 17H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-3.5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(Tv);const Mv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28 7v7.346c0 11.202-9.477 14.918-11.375 15.549a1.94 1.94 0 0 1-1.25 0C13.475 29.264 4 25.548 4 14.346V7a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2"})})};h.forwardRef(Mv);const Ev=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m30.949 7.653-6.47-3.528A1 1 0 0 0 24 4h-4a1 1 0 0 0-1 1 3 3 0 0 1-6 0 1 1 0 0 0-1-1H8a1 1 0 0 0-.48.125L1.051 7.653a1.97 1.97 0 0 0-.824 2.657l2.41 4.601A2.05 2.05 0 0 0 4.458 16H7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16h2.543a2.05 2.05 0 0 0 1.822-1.089l2.409-4.601a1.97 1.97 0 0 0-.825-2.658M4.459 14a.08.08 0 0 1-.051-.016L2.01 9.408 7 6.685V14zm23.134-.018a.07.07 0 0 1-.052.018H25V6.685l4.99 2.723z"})})};h.forwardRef(Ev);const Lv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M12 27a2 2 0 1 1-4 0 2 2 0 0 1 4 0m11-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4m5.805-16.594A1 1 0 0 0 28 8H6.04L5.026 4.45A2.01 2.01 0 0 0 3.103 3H1a1 1 0 0 0 0 2h2.103l4.522 15.824A3.01 3.01 0 0 0 10.509 23h12.014a2.99 2.99 0 0 0 2.867-2.117l3.566-11.59a1 1 0 0 0-.151-.887"})})};h.forwardRef(Lv);const Vv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M14.5 27a1.5 1.5 0 0 1-1.5 1.5H6A2.5 2.5 0 0 1 3.5 26V6A2.5 2.5 0 0 1 6 3.5h7a1.5 1.5 0 0 1 0 3H6.5v19H13a1.5 1.5 0 0 1 1.5 1.5m13.561-12.061-5-5a1.503 1.503 0 0 0-2.125 2.125l2.439 2.436H13a1.5 1.5 0 1 0 0 3h10.375l-2.44 2.439a1.503 1.503 0 0 0 2.125 2.125l5-5a1.5 1.5 0 0 0 .001-2.125"})})};h.forwardRef(Vv);const Dv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M4 10a1 1 0 0 1 1-1h4.646a3.5 3.5 0 0 1 6.708 0H27a1 1 0 1 1 0 2H16.354a3.5 3.5 0 0 1-6.708 0H5a1 1 0 0 1-1-1m23 11h-2.646a3.5 3.5 0 0 0-6.708 0H5a1 1 0 0 0 0 2h12.646a3.5 3.5 0 0 0 6.708 0H27a1 1 0 1 0 0-2"})})};h.forwardRef(Dv);const Bv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M26 18a1.97 1.97 0 0 1-1.302 1.867l-6.457 2.375-2.375 6.452a1.99 1.99 0 0 1-3.735 0L9.75 22.25l-6.452-2.375a1.99 1.99 0 0 1 0-3.735l6.456-2.375 2.375-6.451a1.99 1.99 0 0 1 3.735 0l2.375 6.456 6.451 2.375A1.97 1.97 0 0 1 26 18M19 6h2v2a1 1 0 0 0 2 0V6h2a1 1 0 1 0 0-2h-2V2a1 1 0 1 0-2 0v2h-2a1 1 0 1 0 0 2m11 4h-1V9a1 1 0 1 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2"})})};h.forwardRef(Bv);const Hv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M15 7v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2m10-2h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m12 0h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"})})};h.forwardRef(Hv);const Ov=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:[s.jsx("path",{d:"M27.5 21.136 16 27.843 4.5 21.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),s.jsx("path",{d:"M27.5 15.136 16 21.843 4.5 15.136a1 1 0 0 0-1 1.728l12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 1 0-1.008-1.728"}),s.jsx("path",{d:"m3.5 10.864 12 7a1 1 0 0 0 1.008 0l12-7a1 1 0 0 0 0-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7a1 1 0 0 0 0 1.728"})]})};h.forwardRef(Ov);const Nv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m29.313 14.298-5.638 4.92 1.689 7.325a2 2 0 0 1-2.98 2.167l-6.389-3.875L9.62 28.71a2 2 0 0 1-2.98-2.168l1.686-7.317-5.638-4.928a2 2 0 0 1 1.138-3.507l7.433-.644 2.901-6.92a1.994 1.994 0 0 1 3.68 0l2.91 6.92 7.43.644a2 2 0 0 1 1.139 3.508z"})})};h.forwardRef(Nv);const Fv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M29 19a4 4 0 1 0-4.991 3.875A1 1 0 0 0 24 23a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4v-5.065c3.934-.5 7-3.934 7-8.039V5a2 2 0 0 0-2-2h-2a1 1 0 1 0 0 2h2v4.896c0 3.323-2.656 6.061-5.92 6.104A6 6 0 0 1 6 10V5h2a1 1 0 0 0 0-2H6a2 2 0 0 0-2 2v5a8 8 0 0 0 7 7.936V23a6.006 6.006 0 0 0 6 6h3a6.006 6.006 0 0 0 6-6 1 1 0 0 0-.009-.125A4 4 0 0 0 29 19m-4 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"})})};h.forwardRef(Fv);const zv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M29 12a1 1 0 0 0-.038-.275L27.17 5.45A2.01 2.01 0 0 0 25.25 4H6.75a2.01 2.01 0 0 0-1.919 1.45L3.04 11.725A1 1 0 0 0 3 12v2a5 5 0 0 0 2 4v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-8a5 5 0 0 0 2-4zm-18 2a3 3 0 0 1-4.39 2.657 1 1 0 0 0-.228-.132A3 3 0 0 1 5 14v-1h6zm8 0a3 3 0 0 1-6 0v-1h6zm8 0a3 3 0 0 1-1.384 2.525q-.12.051-.225.131A3 3 0 0 1 21 14v-1h6z"})})};h.forwardRef(zv);const kv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 16a1.5 1.5 0 0 1-1.5 1.5h-3.767A5.19 5.19 0 0 1 24.5 21c0 1.806-.976 3.54-2.679 4.756C20.25 26.881 18.18 27.5 16 27.5s-4.25-.619-5.821-1.744C8.476 24.54 7.5 22.806 7.5 21a1.5 1.5 0 0 1 3 0c0 1.898 2.519 3.5 5.5 3.5s5.5-1.602 5.5-3.5c0-1.595-1.163-2.523-4.419-3.5H5a1.5 1.5 0 1 1 0-3h22a1.5 1.5 0 0 1 1.5 1.5M9.389 12.5a1.5 1.5 0 0 0 1.5-1.5c0-2 2.197-3.5 5.111-3.5 2.17 0 3.921.831 4.685 2.223a1.5 1.5 0 0 0 2.625-1.446C22.016 5.914 19.281 4.5 16 4.5c-4.625 0-8.111 2.794-8.111 6.5a1.5 1.5 0 0 0 1.5 1.5"})})};h.forwardRef(kv);const Wv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M15 5V2a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0m1 3a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8m-8.707.707a1 1 0 1 0 1.414-1.415l-2-2a1 1 0 1 0-1.414 1.415zm0 14.586-2 2a1 1 0 1 0 1.414 1.415l2-2a1 1 0 1 0-1.415-1.415M24 9a1 1 0 0 0 .707-.293l2-2a1 1 0 0 0-1.415-1.414l-2 2A1 1 0 0 0 24 9m.707 14.293a1 1 0 1 0-1.415 1.415l2 2a1 1 0 0 0 1.415-1.415zM6 16a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1m10 10a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m14-11h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2"})})};h.forwardRef(Wv);const Uv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 8h-8.586l4.293-4.292a1 1 0 0 0-1.415-1.415L16 7.586l-5.292-5.293a1 1 0 1 0-1.415 1.415L13.586 8H5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 17h-7V10h7zm-2-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 6a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"})})};h.forwardRef(Uv);const qv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m29.978 19.625-1.5-12A3 3 0 0 0 25.5 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h5.383l4.722 9.448A1 1 0 0 0 15 30a5 5 0 0 0 5-5v-2h7a3 3 0 0 0 2.977-3.375M9 18H4V7h5z"})})};h.forwardRef(qv);const Gv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M29.25 10.015A3 3 0 0 0 27 9h-7V7a5 5 0 0 0-5-5 1 1 0 0 0-.895.553L9.383 12H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h21.5a3 3 0 0 0 2.977-2.625l1.5-12a3 3 0 0 0-.727-2.36M4 14h5v11H4z"})})};h.forwardRef(Gv);const Kv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M23 3H9a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h1l-1.8 2.4a1 1 0 0 0 1.6 1.2l2.7-3.6h7l2.7 3.6a1 1 0 0 0 1.6-1.2L22 27h1a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4M10.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m4.5-8H7v-5h8zm6.5 8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m3.5-8h-8v-5h8z"})})};h.forwardRef(Kv);const Yv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M27 6h-5V5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H5a1 1 0 0 0 0 2h1v18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h1a1 1 0 1 0 0-2M14 21a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm6 0a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm0-15h-8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"})})};h.forwardRef(Yv);const Zv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m23.54 2.267-3.711 3.377c1.7.52 3.298 1.397 4.653 2.631 4.684 4.266 4.684 11.184 0 15.45q-5.184 4.72-16.021 6.008l3.71-3.377a12.2 12.2 0 0 1-4.653-2.63c-4.684-4.267-4.712-11.16 0-15.45q5.184-4.721 16.021-6.01m-7.54 8.4c-3.314 0-6 2.388-6 5.333s2.686 5.333 6 5.333 6-2.387 6-5.333c0-2.945-2.686-5.333-6-5.333"})})};h.forwardRef(Zv);const Xv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M25.5 28a1.5 1.5 0 0 1-1.5 1.5H8a1.5 1.5 0 1 1 0-3h16a1.5 1.5 0 0 1 1.5 1.5M16 24.5a8.51 8.51 0 0 0 8.5-8.5V7a1.5 1.5 0 1 0-3 0v9a5.5 5.5 0 0 1-11 0V7a1.5 1.5 0 1 0-3 0v9a8.51 8.51 0 0 0 8.5 8.5"})})};h.forwardRef(Xv);const Qv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.5 19v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 26v-7a1.5 1.5 0 0 1 3 0v6.5h19V19a1.5 1.5 0 1 1 3 0m-16.439-7.939L14.5 8.625V19a1.5 1.5 0 1 0 3 0V8.625l2.439 2.44a1.503 1.503 0 0 0 2.125-2.125l-5-5a1.5 1.5 0 0 0-2.125 0l-5 5a1.503 1.503 0 1 0 2.125 2.125z"})})};h.forwardRef(Qv);const Jv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M28.866 27.5A1 1 0 0 1 28 28H4a1 1 0 0 1-.865-1.5c1.904-3.291 4.838-5.651 8.261-6.77a9 9 0 1 1 9.208 0c3.424 1.119 6.357 3.479 8.261 6.77a1 1 0 0 1 .001 1"})})};h.forwardRef(Jv);const Pv=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M19.44 3.101a1 1 0 0 0-1.054.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1 1 0 0 0 20 28V4a1 1 0 0 0-.56-.899M28.414 16l2.293-2.292a1.001 1.001 0 0 0-1.415-1.415L27 14.586l-2.293-2.293a1 1 0 1 0-1.415 1.415L25.587 16l-2.293 2.293a1 1 0 0 0 1.415 1.415L27 17.414l2.293 2.294a1 1 0 0 0 1.415-1.415z"})})};h.forwardRef(Pv);const e8=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M19.439 3.101a1 1 0 0 0-1.053.11L9.656 10H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.656l8.73 6.789A1.001 1.001 0 0 0 20 28V4a1 1 0 0 0-.561-.899M9 20H4v-8h5zm15.75-7.305a5 5 0 0 1 0 6.61 1 1 0 0 1-1.5-1.322 3 3 0 0 0 0-3.966 1 1 0 0 1 1.5-1.322M31 16a10 10 0 0 1-2.546 6.668 1 1 0 0 1-1.49-1.334 8 8 0 0 0 0-10.666.998.998 0 0 1 .407-1.624 1 1 0 0 1 1.083.29A9.98 9.98 0 0 1 31 16"})})};h.forwardRef(e8);const t8=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M15 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0m11 11c-3.58 0-5.226-1.662-6.969-3.421a25 25 0 0 0-1.375-1.323C13.031 8.24 5.63 15.098 5.316 15.391a1 1 0 0 0 1.369 1.458 20.5 20.5 0 0 1 3.815-2.724c1.723-.922 3.174-1.279 4.338-1.072L8.082 28.6a1 1 0 0 0 1.835.798l4.2-9.659L18 22.515V29a1 1 0 1 0 2 0v-7a1 1 0 0 0-.419-.814l-4.65-3.321L16.61 14c.33.305.657.634 1 .98C19.381 16.774 21.586 19 26 19a1 1 0 0 0 0-2"})})};h.forwardRef(t8);const n8=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"M16 3a13 13 0 1 0 13 13A13.013 13.013 0 0 0 16 3m-1 7a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0zm1 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"})})};h.forwardRef(n8);const r8=({fill:e="currentColor",stroke:n,...i},c)=>{const{colors:o}=_(),l=e&&e in o?o[e]:e,u=n&&n in o?o[n]:n;return s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:16,height:16,fill:l,stroke:u,ref:c,...i,children:s.jsx("path",{d:"m31.316 24.949-3 1a1 1 0 0 1-1.211-.5l-3.724-7.45H13a1 1 0 0 1-1-1v-3.707A7 7 0 0 0 14 27c3.239 0 6.261-2.256 7.031-5.25a1 1 0 1 1 1.938.5C21.96 26.162 18.19 29 14 29a9 9 0 0 1-2-17.774V8.851a3.5 3.5 0 1 1 2 0V11h7a1 1 0 0 1 0 2h-7v3h10a1 1 0 0 1 .894.552l3.612 7.225 2.178-.726a1 1 0 1 1 .632 1.898"})})};h.forwardRef(r8);const Hr=(e,n)=>{const i=h.createContext(n),c=l=>{const{children:u,...x}=l,v=h.useMemo(()=>x,Object.values(x));return s.jsx(i.Provider,{value:v,children:u})};function o(l){const u=h.useContext(i);if(u)return u;if(n!==void 0)return n;throw new Error(`\`${l}\` must be used within \`${e}\``)}return c.displayName=`${e}Provider`,[c,o]};function o8(e,n){return typeof e=="string"?!1:n in e}function Do(e,n,i){return e&&n&&o8(e,n)?e[n]:i}const cc={padding:["padding-block-start","padding-inline-end","padding-block-end","padding-inline-start"],paddingTop:"padding-block-start",paddingRight:"padding-inline-end",paddingBottom:"padding-block-end",paddingLeft:"padding-inline-start",margin:["margin-block-start","margin-inline-end","margin-block-end","margin-inline-start"],marginLeft:"margin-inline-start",marginRight:"margin-inline-end",marginTop:"margin-block-start",marginBottom:"margin-block-end",borderRadius:"border-radius",borderStyle:"border-style",borderWidth:"border-width",borderColor:"border-color",fontSize:"font-size",fontWeight:"font-weight",lineHeight:"line-height",zIndex:"z-index",boxShadow:"box-shadow",pointerEvents:"pointer-events",textAlign:"text-align",textTransform:"text-transform",textDecoration:"text-decoration",flexGrow:"flex-grow",flexShrink:"flex-shrink",flexBasis:"flex-basis",minWidth:"min-width",maxWidth:"max-width",minHeight:"min-height",maxHeight:"max-height",flexDirection:"flex-direction",flexWrap:"flex-wrap",justifyContent:"justify-content",alignItems:"align-items"},i8=e=>{const[n,i,c,o]=e,l=i??n;return[n,l,c??n,o??l]};function a8(e,n){switch(e){case"gap":case"padding":case"margin":case"paddingTop":case"paddingLeft":case"paddingRight":case"paddingBottom":case"marginTop":case"marginLeft":case"marginRight":case"marginBottom":case"left":case"right":case"top":case"bottom":case"width":case"maxWidth":case"minWidth":case"height":case"maxHeight":case"minHeight":case"borderRadius":case"borderWidth":return n.spaces;case"color":case"background":case"borderColor":return n.colors;case"fontSize":return n.fontSizes;case"fontWeight":return n.fontWeights;case"lineHeight":return n.lineHeights;case"zIndex":return n.zIndices;case"boxShadow":return n.shadows;default:return null}}const Uo=(e,n)=>{const i=Object.entries(e).reduce((c,o)=>{const[l,u]=o,x=a8(l,n),v=Object.prototype.hasOwnProperty.call(cc,l)?cc[l]:l;return v&&(u||u===0)&&(typeof u=="object"&&!Array.isArray(u)?Object.entries(u).forEach(([R,$])=>{c[R]={...c[R],...lc(v,$,x)}}):c.initial={...c.initial,...lc(v,u,x)}),c},{initial:{},small:{},medium:{},large:{}});return Object.entries(i).reduce((c,[o,l])=>{if(l&&Object.keys(l).length>0){const u=Object.entries(l).reduce((x,[v,R])=>(x.push(`${v}: ${R};`),x),[]).join(`
`);o==="initial"?c.push(u):c.push(`${n.breakpoints[o]}{ ${u} }`)}return c},[]).join(`
`)},lc=(e,n,i)=>{if(Array.isArray(e)&&Array.isArray(n)){const c=i8(n);return e.reduce((o,l,u)=>(o[l]=Do(i,c[u],c[u]),o),{})}else return Array.isArray(e)&&!Array.isArray(n)?e.reduce((c,o)=>(c[o]=Do(i,n,n),c),{}):!Array.isArray(e)&&!Array.isArray(n)?{[e]:Do(i,n,n)}:(console.warn("You've passed an array of values to a property that does not support it. Please check the property and value you're passing."),{})},ht=h.forwardRef,Z=ht((e,n)=>{const{background:i,basis:c,borderColor:o,color:l,flex:u,fontSize:x,grow:v,hasRadius:R,padding:$,paddingBottom:y,paddingLeft:b,paddingRight:A,paddingTop:M,margin:I,marginLeft:V,marginBottom:L,marginRight:j,marginTop:B,shadow:F,shrink:z,lineHeight:k,fontWeight:U,width:oe,minWidth:se,maxWidth:le,height:$e,minHeight:ne,maxHeight:P,top:ee,left:_e,bottom:je,right:me,borderRadius:ye,borderStyle:Me,borderWidth:De,tag:he,pointerEvents:Je,display:xe,position:ze,zIndex:Ne,overflow:Ye,cursor:Y,transition:we,transform:Se,animation:ie,textAlign:ge,textTransform:Ce,...rt}=e,Ee=he||"div",Ae={$background:i,$basis:c,$borderColor:o,$color:l,$flex:u,$fontSize:x,$grow:v,$hasRadius:R,$padding:$,$paddingBottom:y,$paddingLeft:b,$paddingRight:A,$paddingTop:M,$margin:I,$marginLeft:V,$marginBottom:L,$marginRight:j,$marginTop:B,$shadow:F,$shrink:z,$lineHeight:k,$fontWeight:U,$width:oe,$minWidth:se,$maxWidth:le,$height:$e,$minHeight:ne,$maxHeight:P,$top:ee,$left:_e,$bottom:je,$right:me,$borderRadius:ye,$borderStyle:Me,$borderWidth:De,$pointerEvents:Je,$display:xe,$position:ze,$zIndex:Ne,$overflow:Ye,$cursor:Y,$transition:we,$transform:Se,$animation:ie,$textAlign:ge,$textTransform:Ce};return s.jsx(s8,{as:Ee,ref:n,...Ae,...rt})}),s8=T.div`
  ${({theme:e,...n})=>Uo({padding:n.$padding,paddingTop:n.$paddingTop,paddingBottom:n.$paddingBottom,paddingLeft:n.$paddingLeft,paddingRight:n.$paddingRight,margin:n.$margin,marginTop:n.$marginTop,marginBottom:n.$marginBottom,marginLeft:n.$marginLeft,marginRight:n.$marginRight,top:n.$top,left:n.$left,bottom:n.$bottom,right:n.$right,width:n.$width,minWidth:n.$minWidth,maxWidth:n.$maxWidth,height:n.$height,minHeight:n.$minHeight,maxHeight:n.$maxHeight,color:n.$color,background:n.$background,fontSize:n.$fontSize,fontWeight:n.$fontWeight,lineHeight:n.$lineHeight,borderRadius:n.$hasRadius?e.borderRadius:n.$borderRadius,borderStyle:n.$borderColor&&!n.$borderStyle?"solid":n.$borderStyle,borderWidth:n.$borderColor&&!n.$borderWidth?"1px":n.$borderWidth,borderColor:n.$borderColor,zIndex:n.$zIndex,boxShadow:n.$shadow,display:n.$display,pointerEvents:n.$pointerEvents,cursor:n.$cursor,textAlign:n.$textAlign,textTransform:n.$textTransform,transition:n.$transition,transform:n.$transform,animation:n.$animation,position:n.$position,overflow:n.$overflow,flex:n.$flex,flexShrink:n.$shrink,flexGrow:n.$grow,flexBasis:n.$basis},e)};
`,G=ht((e,n)=>{const{className:i,alignItems:c,direction:o,inline:l,gap:u,justifyContent:x,wrap:v,...R}=e,$={$alignItems:c,$direction:o,$gap:u,$justifyContent:x,$wrap:v,$inline:l};return s.jsx(c8,{className:i,ref:n,...$,...R})}),c8=T(Z)`
  ${({theme:e,$display:n="flex",$alignItems:i="center",$direction:c="row",...o})=>Uo({gap:o.$gap,alignItems:i,justifyContent:o.$justifyContent,flexWrap:o.$wrap,flexDirection:c,display:o.$inline?"inline-flex":n},e)};
`,l8="alpha",u8="beta",d8="delta",h8="epsilon",uc="omega",f8="pi",g8="sigma",Rl=te`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,m8=({$variant:e=uc,theme:n})=>{switch(e){case l8:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[5]};
        line-height: ${n.lineHeights[2]};
      `;case u8:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[4]};
        line-height: ${n.lineHeights[1]};
      `;case d8:return`
        font-weight: ${n.fontWeights.semiBold};
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[2]};
      `;case h8:return`
        font-size: ${n.fontSizes[3]};
        line-height: ${n.lineHeights[6]};
      `;case uc:return`
        font-size: ${n.fontSizes[2]};
        line-height: ${n.lineHeights[4]};
      `;case f8:return`
        font-size: ${n.fontSizes[1]};
        line-height: ${n.lineHeights[3]};
      `;case g8:return`
        font-weight: ${n.fontWeights.bold};
        font-size: ${n.fontSizes[0]};
        line-height: ${n.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${n.fontSizes[2]};
      `}},ce=ht((e,n)=>{const{ellipsis:i,textColor:c="currentcolor",textDecoration:o,textTransform:l,variant:u,lineHeight:x,fontWeight:v,fontSize:R,...$}=e,y={$ellipsis:i,$textColor:c,$textDecoration:o,$textTransform:l,$variant:u,$lineHeight:x,$fontWeight:v,$fontSize:R};return s.jsx(x8,{ref:n,tag:"span",...y,...$})}),x8=T(Z)`
  ${m8}
  ${({$ellipsis:e})=>e?Rl:""}

  ${({theme:e,...n})=>Uo({color:n.$textColor,textDecoration:n.$textDecoration,textTransform:n.$textTransform,lineHeight:n.$lineHeight,fontWeight:n.$fontWeight,fontSize:n.$fontSize},e)}
`,[w8,wa]=Hr("Accordion");h.forwardRef(({children:e,size:n="S",...i},c)=>s.jsx(v8,{ref:c,$size:n,collapsible:!0,...i,type:"single",children:s.jsx(w8,{size:n,children:e})}));const v8=T(n6)`
  background-color: ${e=>e.theme.colors.neutral0};

  ${e=>e.$size==="S"?te`
        border-radius: ${n=>n.theme.borderRadius};
        border: solid 1px ${n=>n.theme.colors.neutral200};
      `:te``}
`;h.forwardRef((e,n)=>{const{size:i}=wa("Item");return s.jsx(p8,{$size:i,"data-size":i,ref:n,...e})});const p8=T(r6)`
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
`;h.forwardRef(({caretPosition:e="left",description:n,icon:i,iconProps:c,children:o,...l},u)=>{const{size:x}=wa("Trigger");return s.jsxs(jl,{$caretPosition:e,$size:x,ref:u,...l,children:[e==="left"?s.jsx(Oo,{$size:x,children:s.jsx(Bn,{width:x==="S"?"1.2rem":"1.6rem",height:x==="S"?"1.2rem":"1.6rem"})}):null,s.jsxs(G,{tag:"span",gap:2,children:[i&&x==="S"?s.jsx(_l,{children:s.jsx(i,{...c})}):null,s.jsxs(G,{alignItems:"flex-start",direction:"column",tag:"span",ref:u,children:[s.jsx(ce,{fontWeight:x==="S"?"bold":void 0,ellipsis:!0,variant:x==="M"?"delta":void 0,textAlign:"left",children:o}),n&&x==="M"?s.jsx(ce,{textAlign:"left",children:n}):null]})]}),e==="right"?s.jsx(Oo,{$size:x,children:s.jsx(Bn,{width:x==="S"?"1.2rem":"1.6rem",height:x==="S"?"1.2rem":"1.6rem"})}):null]})});const _l=T(Z)`
  color: ${e=>e.theme.colors.neutral500};
  display: flex;

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`,Oo=T(G).attrs(e=>({...e,tag:"span"}))`
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
`,jl=T(o6)`
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

  &[data-state='open'] > ${Oo} {
    transform: rotate(180deg);
  }

  /* we remove the default focus because the entire item should have the focus style and the default would be hidden. */
  &:focus-visible {
    outline: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.color};
  }
`;h.forwardRef((e,n)=>{const{size:i}=wa("Trigger");return s.jsx(Al,{$size:i,...e,ref:n})});const Al=T(G).attrs(e=>({...e,tag:"span"}))`
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
`;h.forwardRef(({variant:e="primary",...n},i)=>s.jsx(b8,{$variant:e,ref:i,...n}));const b8=T(i6)`
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

      & > ${jl} {
        color: ${e=>e.theme.colors.primary600};

        & ${_l} {
          color: ${e=>e.theme.colors.primary600};
        }

        & ${Oo} {
          background-color: ${e=>e.theme.colors.primary200};
        }
      }

      & > ${Al} > button {
        color: ${e=>e.theme.colors.primary600};
      }
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: ${e=>e.theme.transitions.backgroundColor};
  }
`;h.forwardRef((e,n)=>s.jsx(y8,{ref:n,...e}));const $8=at`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`,C8=at`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`,y8=T(a6)`
  overflow: hidden;

  @media (prefers-reduced-motion: no-preference) {
    &[data-state='open'] {
      animation: ${$8} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }

    &[data-state='closed'] {
      animation: ${C8} ${e=>e.theme.motion.timings[320]}
        ${e=>e.theme.motion.easings.authenticMotion};
    }
  }
`,qo=te`
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
`,cr=({tag:e,...n})=>{const i=e||"span";return s.jsx(S8,{...n,as:i})},S8=T.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,Er=({children:e,label:n})=>{const i=h.Children.only(e);return s.jsxs(s.Fragment,{children:[h.cloneElement(i,{"aria-hidden":"true",focusable:"false"}),s.jsx(cr,{children:n})]})};Er.displayName="AccessibleIcon";const Vi=({theme:e,$variant:n})=>n==="danger"?e.colors.danger700:n==="success"?e.colors.success700:n==="warning"?e.colors.warning700:e.colors.primary700;T(Z)`
  ${qo};
`;T(G)`
  svg {
    height: 100%;
    width: 100%;

    path {
      fill: ${Vi};
    }
  }
`;T(Z)`
  & a > span {
    color: ${Vi};
  }

  svg path {
    fill: ${Vi};
  }
`;function Il(e){const n=h.useRef(e);return h.useEffect(()=>{n.current=e}),h.useMemo(()=>(...i)=>{var c;return(c=n.current)===null||c===void 0?void 0:c.call(n,...i)},[])}function Kt({prop:e,defaultProp:n,onChange:i=()=>{}}){const[c,o]=Tl({defaultProp:n,onChange:i}),l=e!==void 0,u=l?e:c,x=Il(i),v=h.useCallback(R=>{if(l){const y=typeof R=="function"?R(e):R;y!==e&&x(y)}else o(R)},[l,e,o,x]);return[u,v]}function Tl({defaultProp:e,onChange:n}){const i=h.useState(e),[c]=i,o=h.useRef(c),l=Il(n);return h.useEffect(()=>{o.current!==c&&(l(c),o.current=c)},[c,o,l]),i}const dc={easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)"},hc={120:"120ms"};`${hc[120]}${dc.easeOutQuad}`,`${hc[120]}${dc.easeOutQuad}`;const qe={overlayFadeIn:at`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.2;
    }
  `,modalPopIn:at`
    from {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
    to {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  `,modalPopOut:at`
    from {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    to {
      transform:translate(-50%, -50%)  scale(0.8);
      opacity: 0;
    }
  `,popIn:at`
    from {
      transform: scale(0.8);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  `,popOut:at`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0.8);
      opacity: 0;
    }
  `,slideDownIn:at`
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideDownOut:at`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-10px);
    }
  `,slideUpIn:at`
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  `,slideUpOut:at`
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(10px);
    }
  `,fadeIn:at`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `,fadeOut:at`
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  `},Lr=32,fc=2;h.forwardRef(({onLoadingStatusChange:e,delayMs:n=600,src:i,alt:c,fallback:o,preview:l=!1,...u},x)=>{const[v,R]=Kt({onChange:e}),[$,y]=h.useState(!1),b=l&&v==="loaded",A=M=>{b&&y(M)};return s.jsxs(Vc,{onOpenChange:A,children:[s.jsx(Dc,{asChild:!0,children:s.jsxs(Di,{ref:x,...u,children:[b?s.jsx(R8,{width:"100%",height:"100%",position:"absolute",background:"neutral0",zIndex:"overlay",style:{opacity:$?.4:0}}):null,s.jsx(_8,{src:i,alt:c,onLoadingStatusChange:R}),s.jsx(s6,{delayMs:n,children:s.jsx(ce,{fontWeight:"bold",textTransform:"uppercase",children:o})})]})}),b?s.jsx(Bc,{children:s.jsx(j8,{side:"top",sideOffset:4,children:s.jsx(A8,{src:i,alt:c})})}):null]})});const Ml=te`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow: hidden;
  user-select: none;
  overflow: hidden;
  border-radius: 50%;
`,El=te`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`,Di=T(c6)`
  position: relative;
  z-index: 0;
  ${Ml}
  width: ${Lr/10}rem;
  height: ${Lr/10}rem;
  /* TODO: we should get the user email & hash it to turn it into a hex-value so different emails can consistently get a different background */
  background-color: ${e=>e.theme.colors.primary600};
  color: ${e=>e.theme.colors.neutral0};
`,R8=T(Z)`
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,_8=T(l6)`
  ${El}
`,j8=T(Hc)`
  ${Ml}
  width: ${Lr*fc/10}rem;
  height: ${Lr*fc/10}rem;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${qe.fadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,A8=T.img`
  ${El}
`;h.forwardRef((e,n)=>s.jsx(I8,{...e,ref:n,tag:"div"}));const I8=T(G)`
  & > ${Di} + ${Di} {
    margin-left: -${Lr/10/2}rem;
  }
`,T8=({active:e=!1,size:n="M",textColor:i="neutral600",backgroundColor:c="neutral150",children:o,minWidth:l=5,...u})=>{const x=n==="S"?1:2;return s.jsx(M8,{inline:!0,alignItems:"center",justifyContent:"center",minWidth:l,paddingLeft:x,paddingRight:x,background:e?"primary200":c,$size:n,...u,children:s.jsx(ce,{variant:"sigma",textColor:e?"primary600":i,lineHeight:"1rem",children:o})})},M8=T(G)`
  border-radius: ${({theme:e,$size:n})=>n==="S"?"2px":e.borderRadius};
  ${({$size:e,theme:n})=>e==="S"?te`
        padding-block: 0.3rem;
        padding-inline ${n.spaces[1]}
      `:te`
      padding-block: 0.7rem;
      padding-inline ${n.spaces[2]}
    `};
`,Or=ht(({href:e,disabled:n=!1,isExternal:i=!1,...c},o)=>s.jsx(E8,{tag:"a",ref:o,target:i?"_blank":void 0,rel:i?"noreferrer noopener":void 0,href:e,tabIndex:n?-1:void 0,"aria-disabled":n,pointerEvents:n?"none":void 0,cursor:n?void 0:"pointer",...c})),E8=T(Z)`
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`,Ll=()=>s.jsx(Z,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:s.jsx(ce,{variant:"pi",textColor:"neutral500",children:"/"})});Ll.displayName="Divider";const L8=T(G)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  & > *:first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,V8=h.forwardRef(({label:e,children:n,...i},c)=>{const o=h.Children.toArray(n);return s.jsx(Z,{"aria-label":e,tag:"nav",...i,ref:c,children:s.jsx(L8,{tag:"ol",children:h.Children.map(o,(l,u)=>{const x=o.length>1&&u+1<o.length;return s.jsxs(G,{inline:!0,tag:"li",children:[l,x&&s.jsx(Ll,{})]})})})})});V8.displayName="Breadcrumbs";const D8=h.forwardRef(({children:e,isCurrent:n=!1,...i},c)=>s.jsx(Z,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,ref:c,children:s.jsx(ce,{variant:"pi",textColor:"neutral800",fontWeight:n?"bold":"regular","aria-current":n,...i,children:e})}));D8.displayName="Crumb";const B8=T(Or)`
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
`,H8=h.forwardRef(({children:e,...n},i)=>s.jsx(B8,{ref:i,...n,children:e}));H8.displayName="CrumbLink";const rr=e=>e.replaceAll(":","");function O8(e,n){typeof e=="function"?e(n):e!=null&&(e.current=n)}function Vl(...e){return n=>e.forEach(i=>O8(i,n))}function wt(...e){return h.useCallback(Vl(...e),e)}const N8=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),or=N8()?h.useEffect:h.useLayoutEffect,F8=t6.useId||(()=>{});let z8=0;const kt=e=>{const[n,i]=h.useState(F8());return or(()=>{e||i(c=>c??String(z8++))},[e]),e?.toString()??(n||"")},Nr=(e,n,{selectorToWatch:i,skipWhen:c=!1})=>{const o=Qi(n);h.useEffect(()=>{if(c||!e.current)return;const l={root:e.current,rootMargin:"0px"},u=R=>{R.forEach($=>{$.isIntersecting&&e.current&&e.current.scrollHeight>e.current.clientHeight&&o($)})},x=new IntersectionObserver(u,l),v=e.current.querySelector(i);return v&&x.observe(v),()=>{x.disconnect()}},[c,o,i,e])},va="success-light",pa="danger-light",Go="default",Fr="tertiary",zr="secondary",Dl="danger",Bl="success",Ko="ghost",ba=[va,pa],k8=[Go,Fr,zr,Dl,Bl,Ko,...ba],W8=["S","M","L"],Nt=e=>e===va||e===pa?`${e.substring(0,e.lastIndexOf("-"))}`:e===Fr?"neutral":e===Go||e===zr||k8.every(n=>n!==e)?"primary":`${e}`,Hl=({theme:e})=>te`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    color: ${e.colors.neutral600};
    cursor: default;
  `,Ol=({theme:e,$variant:n})=>[...ba,zr].includes(n)?te`
      background-color: ${e.colors.neutral0};
    `:n===Fr?te`
      background-color: ${e.colors.neutral100};
    `:n===Ko?te`
      background-color: ${e.colors.neutral100};
    `:n===Go?te`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:te`
    border: 1px solid ${e.colors[`${Nt(n)}500`]};
    background: ${e.colors[`${Nt(n)}500`]};
  `,Nl=({theme:e,$variant:n})=>[...ba,zr].includes(n)?te`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${Nt(n)}600`]};
      color: ${e.colors[`${Nt(n)}600`]};
    `:n===Fr||n===Ko?te`
      background-color: ${e.colors.neutral150};
    `:te`
    border: 1px solid ${e.colors[`${Nt(n)}600`]};
    background: ${e.colors[`${Nt(n)}600`]};
  `,Fl=({theme:e,$variant:n})=>{switch(n){case pa:case va:case zr:return te`
        border: 1px solid ${e.colors[`${Nt(n)}200`]};
        background: ${e.colors[`${Nt(n)}100`]};
        color: ${e.colors[`${Nt(n)}700`]};
      `;case Fr:return te`
        border: 1px solid ${e.colors.neutral200};
        background: ${e.colors.neutral0};
        color: ${e.colors.neutral800};
      `;case Ko:return te`
        border: 1px solid transparent;
        background: transparent;
        color: ${e.colors.neutral800};

        svg {
          fill: ${e.colors.neutral500};
        }
      `;case Bl:case Dl:return te`
        border: 1px solid ${e.colors[`${Nt(n)}600`]};
        background: ${e.colors[`${Nt(n)}600`]};
        color: ${e.colors.neutral0};
      `;default:return te`
        border: 1px solid ${e.colors.buttonPrimary600};
        background: ${e.colors.buttonPrimary600};
        color: ${e.colors.buttonNeutral0};
      `}},No=ht(({variant:e=Go,startIcon:n,endIcon:i,disabled:c=!1,children:o,onClick:l,size:u=W8[0],loading:x=!1,fullWidth:v=!1,...R},$)=>{const y=c||x,b=A=>{!y&&l&&l(A)};return s.jsxs(G8,{ref:$,"aria-disabled":y,disabled:y,$size:u,$variant:e,tag:"button",onClick:b,hasRadius:!0,gap:2,inline:!0,alignItems:"center",justifyContent:"center",width:v?"100%":void 0,paddingLeft:4,paddingRight:4,cursor:"pointer",...R,children:[(n||x)&&s.jsx(G,{tag:"span","aria-hidden":!0,children:x?s.jsx(q8,{}):n}),s.jsx(ce,{variant:u==="S"?"pi":void 0,fontWeight:"bold",children:o}),i&&s.jsx(G,{tag:"span","aria-hidden":!0,children:i})]})}),U8=at`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,q8=T(Sl)`
  animation: ${U8} 2s infinite linear;
  will-change: transform;
`,G8=T(G)`
  height: ${({theme:e,$size:n})=>e.sizes.button[n]};
  text-decoration: none;
  ${Fl}

  &:hover {
    ${Ol}
  }

  &:active {
    ${Nl}
  }

  &[aria-disabled='true'] {
    ${Hl}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`,zl=h.forwardRef(({children:e,description:n,label:i,defaultOpen:c,open:o,onOpenChange:l,delayDuration:u=500,disableHoverableContent:x,...v},R)=>s.jsxs(Vc,{defaultOpen:c,open:o,onOpenChange:l,delayDuration:u,disableHoverableContent:x,children:[s.jsx(Dc,{asChild:!0,children:e}),s.jsx(Bc,{children:s.jsx(K8,{ref:R,sideOffset:8,...v,children:s.jsx(ce,{variant:"pi",fontWeight:"bold",children:i||n})})})]})),K8=T(Hc)`
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
`,Bi=ht(({label:e,background:n,children:i,disabled:c=!1,onClick:o,size:l="S",variant:u="tertiary",withTooltip:x=!0,...v},R)=>{const $=b=>{!c&&o&&o(b)},y=s.jsx(Mr,{"aria-disabled":c,background:c?"neutral150":n,tag:"button",display:"inline-flex",justifyContent:"center",hasRadius:!0,cursor:"pointer",...v,ref:R,$size:l,onClick:$,$variant:u,children:s.jsx(Er,{label:e,children:i})});return x?s.jsx(zl,{label:e,children:y}):y}),Mr=T(G)`
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
  ${Fl}
  ${e=>e.$variant==="tertiary"?te`
          color: ${e.theme.colors.neutral500};
        `:""}

  &:hover {
    ${Ol}
    ${e=>e.$variant==="tertiary"?te`
            color: ${e.theme.colors.neutral600};
          `:""}
  }

  &:active {
    ${Nl}
  }

  &[aria-disabled='true'] {
    ${Hl}
  }

  @media (prefers-reduced-motion: no-preference) {
    transition:
      ${e=>e.theme.transitions.backgroundColor},
      ${e=>e.theme.transitions.color},
      border-color ${e=>e.theme.motion.timings[200]} ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;T(G)`
  & ${Mr}:first-child {
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & ${Mr}:last-child {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Mr} {
    border-radius: 0;

    & + ${Mr} {
      border-left: none;
    }
  }
`;const Y8=ht(({children:e,href:n,disabled:i=!1,startIcon:c,endIcon:o,isExternal:l=!1,...u},x)=>s.jsxs(Z8,{ref:x,href:n,disabled:i,isExternal:l,...u,children:[c,s.jsx(ce,{textColor:i?"neutral600":"primary600",children:e}),o,n&&!o&&l&&s.jsx(qx,{})]})),Z8=T(Or)`
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

  ${qo};
`,X8=m6,Q8=h.forwardRef(({label:e,endIcon:n=s.jsx(Bn,{width:"1.2rem",height:"1.2rem","aria-hidden":!0}),tag:i=No,icon:c,...o},l)=>{const u={...o,ref:l,type:"button"};return s.jsx(u6,{asChild:!0,disabled:u.disabled,children:i===Bi?s.jsx(Bi,{label:e,variant:"tertiary",...u,children:c}):s.jsx(No,{endIcon:n,variant:"ghost",...u})})}),J8=h.forwardRef(({children:e,intersectionId:n,popoverPlacement:i="bottom-start",...c},o)=>{const[l,u]=i.split("-");return s.jsx(Oc,{children:s.jsx(P8,{align:u,side:l,loop:!0,asChild:!0,children:s.jsxs(kl,{ref:o,direction:"column",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,marginTop:1,marginBottom:1,alignItems:"flex-start",position:"relative",overflow:"auto",...c,children:[e,s.jsx(Z,{id:n,width:"100%",height:"1px"})]})})})}),kl=T(G)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,P8=T(d6)`
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
`,Wl=({theme:e})=>te`
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
`,ep=T(G)`
  ${Wl}
`;T(Y8)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:n})=>Do(e.colors,n,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  /* TODO: do we need this? */
  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${Wl}
`;h.forwardRef((e,n)=>s.jsx(h6,{asChild:!0,children:s.jsx(tp,{ref:n,variant:"sigma",textColor:"neutral600",...e})}));const tp=T(ce)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`;h.forwardRef(({disabled:e=!1,...n},i)=>s.jsx(f6,{asChild:!0,disabled:e,children:s.jsxs(np,{ref:i,color:"neutral800",tag:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...n,children:[s.jsx(ce,{children:n.children}),s.jsx(xa,{fill:"neutral500",height:"1.2rem",width:"1.2rem"})]})}));const np=T(ep)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`;h.forwardRef((e,n)=>s.jsx(Oc,{children:s.jsx(g6,{sideOffset:8,asChild:!0,children:s.jsx(kl,{ref:n,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})}));const rp=X8,op=Q8,ip=J8,ap=h.forwardRef(({children:e,onOpen:n,onClose:i,popoverPlacement:c,onReachEnd:o,...l},u)=>{const x=h.useRef(null),v=wt(u,x),R=h.useRef(null),[$,y]=h.useState(!1),b=V=>{o&&o(V)},A=V=>{V&&typeof n=="function"?n():!V&&typeof i=="function"&&i(),y(V)},M=kt(),I=`intersection-${rr(M)}`;return Nr(R,b,{selectorToWatch:`#${I}`,skipWhen:!$}),s.jsxs(rp,{onOpenChange:A,children:[s.jsx(op,{ref:v,...l,children:l.label}),s.jsx(ip,{ref:R,intersectionId:I,popoverPlacement:c,children:e})]})}),sp=T(ap)`
  padding: ${({theme:e})=>`${e.spaces[1]} ${e.spaces[2]}`};
  height: unset;

  :hover,
  :focus {
    background-color: ${({theme:e})=>e.colors.neutral200};
  }
`,cp=h.forwardRef(({children:e,...n},i)=>s.jsx(sp,{ref:i,endIcon:null,size:"S",...n,children:e}));cp.displayName="CrumbSimpleMenu";const Ul=h.createContext({id:""}),lp=()=>h.useContext(Ul);h.forwardRef(({id:e,...n},i)=>{const c=kt(e),o=h.useMemo(()=>({id:c}),[c]);return s.jsx(Ul.Provider,{value:o,children:s.jsx(Z,{ref:i,id:e,tabIndex:0,hasRadius:!0,background:"neutral0",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",shadow:"tableShadow",tag:"article","aria-labelledby":`${c}-title`,...n})})});const up=h.forwardRef(({position:e,...n},i)=>s.jsx(dp,{ref:i,$position:e,...n,direction:"row",gap:2})),dp=T(G)`
  position: absolute;
  top: ${({theme:e})=>e.spaces[3]};
  right: ${({$position:e,theme:n})=>{if(e==="end")return n.spaces[3]}};
  left: ${({$position:e,theme:n})=>{if(e==="start")return n.spaces[3]}};
`;T.img`
  // inline flows is based on typography and displays an extra white space below the image
  // switch to block is required in order to make the img stick the bottom of the container
  // addition infos: https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image
  margin: 0;
  padding: 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;T.div`
  display: flex;
  justify-content: center;
  height: ${({$size:e})=>e==="S"?"8.8rem":"16.4rem"};
  width: 100%;
  background: repeating-conic-gradient(${({theme:e})=>e.colors.neutral100} 0% 25%, transparent 0% 50%) 50% / 20px
    20px;
  border-top-left-radius: ${({theme:e})=>e.borderRadius};
  border-top-right-radius: ${({theme:e})=>e.borderRadius};
`;T.div`
  margin-left: auto;
  flex-shrink: 0;
`;T(T8)`
  margin-left: ${({theme:e})=>e.spaces[1]};
`;const hp=({fill:e,...n})=>{const{colors:i}=_();return s.jsx(Z,{tag:"svg",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",fill:e?i[e]:void 0,...n,children:s.jsx("path",{d:"M29.0613 10.0613L13.0613 26.0613C12.9219 26.2011 12.7563 26.3121 12.574 26.3878C12.3917 26.4635 12.1962 26.5024 11.9988 26.5024C11.8013 26.5024 11.6059 26.4635 11.4235 26.3878C11.2412 26.3121 11.0756 26.2011 10.9363 26.0613L3.93626 19.0613C3.79673 18.9217 3.68605 18.7561 3.61053 18.5738C3.53502 18.3915 3.49615 18.1961 3.49615 17.9988C3.49615 17.8014 3.53502 17.606 3.61053 17.4237C3.68605 17.2414 3.79673 17.0758 3.93626 16.9363C4.07579 16.7967 4.24143 16.686 4.42374 16.6105C4.60604 16.535 4.80143 16.4962 4.99876 16.4962C5.19608 16.4962 5.39147 16.535 5.57378 16.6105C5.75608 16.686 5.92173 16.7967 6.06126 16.9363L12 22.875L26.9388 7.93876C27.2205 7.65697 27.6027 7.49866 28.0013 7.49866C28.3998 7.49866 28.782 7.65697 29.0638 7.93876C29.3455 8.22055 29.5039 8.60274 29.5039 9.00126C29.5039 9.39977 29.3455 9.78197 29.0638 10.0638L29.0613 10.0613Z"})})},gc=h.forwardRef(({defaultChecked:e,checked:n,onCheckedChange:i,...c},o)=>{const l=h.useRef(null),[u,x]=Kt({defaultProp:e,prop:n,onChange:i}),v=wt(l,o);return s.jsx(fp,{ref:v,checked:u,onCheckedChange:x,...c,children:s.jsxs(gp,{style:{display:"inline-flex",pointerEvents:"auto"},forceMount:!0,children:[u===!0?s.jsx(hp,{width:"1.6rem",fill:"neutral0"}):null,u==="indeterminate"?s.jsx(Kw,{fill:"neutral0"}):null]})})}),fp=T(x6)`
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
`,gp=T(w6)`
  width: 100%;
  height: 100%;
  cursor: pointer;
`,$a=h.forwardRef(({children:e,...n},i)=>{const c=kt(n.id);return e?s.jsxs(G,{gap:2,children:[s.jsx(gc,{id:c,...n}),s.jsx(ce,{tag:"label",textColor:"neutral800",htmlFor:c,children:e})]}):s.jsx(gc,{ref:i,...n})});h.forwardRef((e,n)=>{const{id:i}=lp();return s.jsx(up,{position:"start",children:s.jsx($a,{"aria-labelledby":`${i}-title`,...e,ref:n})})});T(Z)`
  word-break: break-all;
`;T(G)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const st={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",END:"End",HOME:"Home",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown"},mp=T(Z)`
  grid-template-columns: auto 1fr auto;
  grid-template-areas: 'startAction slides endAction';
`,xp=T(G)`
  grid-area: slides;
`,mc=T(Z)`
  grid-area: ${({$area:e})=>e};

  &:focus svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral900};
  }
`,wp=h.forwardRef(({actions:e,children:n,label:i,nextLabel:c,onNext:o,onPrevious:l,previousLabel:u,secondaryLabel:x,selectedSlide:v,...R},$)=>{const y=h.useRef(null),b=h.useRef(null),A=h.Children.map(n,(I,V)=>h.cloneElement(I,{selected:V===v})),M=I=>{switch(I.key){case st.RIGHT:{I.preventDefault(),b?.current&&b.current.focus(),o&&o();break}case st.LEFT:{I.preventDefault(),y?.current&&y.current.focus(),l&&l();break}}};return s.jsx(Z,{ref:$,...R,onKeyDown:M,children:s.jsxs(Z,{padding:2,borderColor:"neutral200",hasRadius:!0,background:"neutral100",children:[s.jsxs(mp,{tag:"section","aria-roledescription":"carousel","aria-label":i,display:"grid",position:"relative",children:[A&&A.length>1&&s.jsxs(s.Fragment,{children:[s.jsx(mc,{tag:"button",onClick:l,$area:"startAction",ref:y,type:"button",children:s.jsx(Er,{label:u,children:s.jsx(yl,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})}),s.jsx(mc,{tag:"button",onClick:o,$area:"endAction",ref:b,type:"button",children:s.jsx(Er,{label:c,children:s.jsx(xa,{width:"1.6rem",height:"1.6rem",fill:"neutral600"})})})]}),s.jsx(xp,{"aria-live":"polite",paddingLeft:2,paddingRight:2,width:"100%",overflow:"hidden",children:A}),e]}),x&&s.jsx(Z,{paddingTop:2,paddingLeft:4,paddingRight:4,children:s.jsx(zl,{label:x,children:s.jsx(G,{justifyContent:"center",children:s.jsx(ce,{variant:"pi",textColor:"neutral600",ellipsis:!0,children:x})})})})]})})});var jr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Fo={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Fo.exports;(function(e,n){(function(){var i,c="4.17.21",o=200,l="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",x="Invalid `variable` option passed into `_.template`",v="__lodash_hash_undefined__",R=500,$="__lodash_placeholder__",y=1,b=2,A=4,M=1,I=2,V=1,L=2,j=4,B=8,F=16,z=32,k=64,U=128,oe=256,se=512,le=30,$e="...",ne=800,P=16,ee=1,_e=2,je=3,me=1/0,ye=9007199254740991,Me=17976931348623157e292,De=NaN,he=4294967295,Je=he-1,xe=he>>>1,ze=[["ary",U],["bind",V],["bindKey",L],["curry",B],["curryRight",F],["flip",se],["partial",z],["partialRight",k],["rearg",oe]],Ne="[object Arguments]",Ye="[object Array]",Y="[object AsyncFunction]",we="[object Boolean]",Se="[object Date]",ie="[object DOMException]",ge="[object Error]",Ce="[object Function]",rt="[object GeneratorFunction]",Ee="[object Map]",Ae="[object Number]",_t="[object Null]",Ze="[object Object]",ur="[object Promise]",Xo="[object Proxy]",ln="[object RegExp]",ct="[object Set]",Wt="[object String]",Nn="[object Symbol]",dr="[object Undefined]",Cn="[object WeakMap]",Qo="[object WeakSet]",Zt="[object ArrayBuffer]",Ge="[object DataView]",Jo="[object Float32Array]",Po="[object Float64Array]",e0="[object Int8Array]",t0="[object Int16Array]",n0="[object Int32Array]",r0="[object Uint8Array]",o0="[object Uint8ClampedArray]",i0="[object Uint16Array]",a0="[object Uint32Array]",x2=/\b__p \+= '';/g,w2=/\b(__p \+=) '' \+/g,v2=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Aa=/&(?:amp|lt|gt|quot|#39);/g,Ia=/[&<>"']/g,p2=RegExp(Aa.source),b2=RegExp(Ia.source),$2=/<%-([\s\S]+?)%>/g,C2=/<%([\s\S]+?)%>/g,Ta=/<%=([\s\S]+?)%>/g,y2=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,S2=/^\w*$/,R2=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,s0=/[\\^$.*+?()[\]{}|]/g,_2=RegExp(s0.source),c0=/^\s+/,j2=/\s/,A2=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,I2=/\{\n\/\* \[wrapped with (.+)\] \*/,T2=/,? & /,M2=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,E2=/[()=,{}\[\]\/\s]/,L2=/\\(\\)?/g,V2=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ma=/\w*$/,D2=/^[-+]0x[0-9a-f]+$/i,B2=/^0b[01]+$/i,H2=/^\[object .+?Constructor\]$/,O2=/^0o[0-7]+$/i,N2=/^(?:0|[1-9]\d*)$/,F2=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Wr=/($^)/,z2=/['\n\r\u2028\u2029\\]/g,Ur="\\ud800-\\udfff",k2="\\u0300-\\u036f",W2="\\ufe20-\\ufe2f",U2="\\u20d0-\\u20ff",Ea=k2+W2+U2,La="\\u2700-\\u27bf",Va="a-z\\xdf-\\xf6\\xf8-\\xff",q2="\\xac\\xb1\\xd7\\xf7",G2="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",K2="\\u2000-\\u206f",Y2=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Da="A-Z\\xc0-\\xd6\\xd8-\\xde",Ba="\\ufe0e\\ufe0f",Ha=q2+G2+K2+Y2,l0="['’]",Z2="["+Ur+"]",Oa="["+Ha+"]",qr="["+Ea+"]",Na="\\d+",X2="["+La+"]",Fa="["+Va+"]",za="[^"+Ur+Ha+Na+La+Va+Da+"]",u0="\\ud83c[\\udffb-\\udfff]",Q2="(?:"+qr+"|"+u0+")",ka="[^"+Ur+"]",d0="(?:\\ud83c[\\udde6-\\uddff]){2}",h0="[\\ud800-\\udbff][\\udc00-\\udfff]",Fn="["+Da+"]",Wa="\\u200d",Ua="(?:"+Fa+"|"+za+")",J2="(?:"+Fn+"|"+za+")",qa="(?:"+l0+"(?:d|ll|m|re|s|t|ve))?",Ga="(?:"+l0+"(?:D|LL|M|RE|S|T|VE))?",Ka=Q2+"?",Ya="["+Ba+"]?",P2="(?:"+Wa+"(?:"+[ka,d0,h0].join("|")+")"+Ya+Ka+")*",eu="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tu="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Za=Ya+Ka+P2,nu="(?:"+[X2,d0,h0].join("|")+")"+Za,ru="(?:"+[ka+qr+"?",qr,d0,h0,Z2].join("|")+")",ou=RegExp(l0,"g"),iu=RegExp(qr,"g"),f0=RegExp(u0+"(?="+u0+")|"+ru+Za,"g"),au=RegExp([Fn+"?"+Fa+"+"+qa+"(?="+[Oa,Fn,"$"].join("|")+")",J2+"+"+Ga+"(?="+[Oa,Fn+Ua,"$"].join("|")+")",Fn+"?"+Ua+"+"+qa,Fn+"+"+Ga,tu,eu,Na,nu].join("|"),"g"),su=RegExp("["+Wa+Ur+Ea+Ba+"]"),cu=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,lu=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],uu=-1,Be={};Be[Jo]=Be[Po]=Be[e0]=Be[t0]=Be[n0]=Be[r0]=Be[o0]=Be[i0]=Be[a0]=!0,Be[Ne]=Be[Ye]=Be[Zt]=Be[we]=Be[Ge]=Be[Se]=Be[ge]=Be[Ce]=Be[Ee]=Be[Ae]=Be[Ze]=Be[ln]=Be[ct]=Be[Wt]=Be[Cn]=!1;var Ve={};Ve[Ne]=Ve[Ye]=Ve[Zt]=Ve[Ge]=Ve[we]=Ve[Se]=Ve[Jo]=Ve[Po]=Ve[e0]=Ve[t0]=Ve[n0]=Ve[Ee]=Ve[Ae]=Ve[Ze]=Ve[ln]=Ve[ct]=Ve[Wt]=Ve[Nn]=Ve[r0]=Ve[o0]=Ve[i0]=Ve[a0]=!0,Ve[ge]=Ve[Ce]=Ve[Cn]=!1;var du={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},hu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},fu={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},gu={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},mu=parseFloat,xu=parseInt,Xa=typeof jr=="object"&&jr&&jr.Object===Object&&jr,wu=typeof self=="object"&&self&&self.Object===Object&&self,tt=Xa||wu||Function("return this")(),g0=n&&!n.nodeType&&n,yn=g0&&!0&&e&&!e.nodeType&&e,Qa=yn&&yn.exports===g0,m0=Qa&&Xa.process,jt=function(){try{var C=yn&&yn.require&&yn.require("util").types;return C||m0&&m0.binding&&m0.binding("util")}catch{}}(),Ja=jt&&jt.isArrayBuffer,Pa=jt&&jt.isDate,es=jt&&jt.isMap,ts=jt&&jt.isRegExp,ns=jt&&jt.isSet,rs=jt&&jt.isTypedArray;function pt(C,D,E){switch(E.length){case 0:return C.call(D);case 1:return C.call(D,E[0]);case 2:return C.call(D,E[0],E[1]);case 3:return C.call(D,E[0],E[1],E[2])}return C.apply(D,E)}function vu(C,D,E,q){for(var re=-1,Re=C==null?0:C.length;++re<Re;){var Xe=C[re];D(q,Xe,E(Xe),C)}return q}function At(C,D){for(var E=-1,q=C==null?0:C.length;++E<q&&D(C[E],E,C)!==!1;);return C}function pu(C,D){for(var E=C==null?0:C.length;E--&&D(C[E],E,C)!==!1;);return C}function os(C,D){for(var E=-1,q=C==null?0:C.length;++E<q;)if(!D(C[E],E,C))return!1;return!0}function un(C,D){for(var E=-1,q=C==null?0:C.length,re=0,Re=[];++E<q;){var Xe=C[E];D(Xe,E,C)&&(Re[re++]=Xe)}return Re}function Gr(C,D){var E=C==null?0:C.length;return!!E&&zn(C,D,0)>-1}function x0(C,D,E){for(var q=-1,re=C==null?0:C.length;++q<re;)if(E(D,C[q]))return!0;return!1}function Oe(C,D){for(var E=-1,q=C==null?0:C.length,re=Array(q);++E<q;)re[E]=D(C[E],E,C);return re}function dn(C,D){for(var E=-1,q=D.length,re=C.length;++E<q;)C[re+E]=D[E];return C}function w0(C,D,E,q){var re=-1,Re=C==null?0:C.length;for(q&&Re&&(E=C[++re]);++re<Re;)E=D(E,C[re],re,C);return E}function bu(C,D,E,q){var re=C==null?0:C.length;for(q&&re&&(E=C[--re]);re--;)E=D(E,C[re],re,C);return E}function v0(C,D){for(var E=-1,q=C==null?0:C.length;++E<q;)if(D(C[E],E,C))return!0;return!1}var $u=p0("length");function Cu(C){return C.split("")}function yu(C){return C.match(M2)||[]}function is(C,D,E){var q;return E(C,function(re,Re,Xe){if(D(re,Re,Xe))return q=Re,!1}),q}function Kr(C,D,E,q){for(var re=C.length,Re=E+(q?1:-1);q?Re--:++Re<re;)if(D(C[Re],Re,C))return Re;return-1}function zn(C,D,E){return D===D?Du(C,D,E):Kr(C,as,E)}function Su(C,D,E,q){for(var re=E-1,Re=C.length;++re<Re;)if(q(C[re],D))return re;return-1}function as(C){return C!==C}function ss(C,D){var E=C==null?0:C.length;return E?$0(C,D)/E:De}function p0(C){return function(D){return D==null?i:D[C]}}function b0(C){return function(D){return C==null?i:C[D]}}function cs(C,D,E,q,re){return re(C,function(Re,Xe,Le){E=q?(q=!1,Re):D(E,Re,Xe,Le)}),E}function Ru(C,D){var E=C.length;for(C.sort(D);E--;)C[E]=C[E].value;return C}function $0(C,D){for(var E,q=-1,re=C.length;++q<re;){var Re=D(C[q]);Re!==i&&(E=E===i?Re:E+Re)}return E}function C0(C,D){for(var E=-1,q=Array(C);++E<C;)q[E]=D(E);return q}function _u(C,D){return Oe(D,function(E){return[E,C[E]]})}function ls(C){return C&&C.slice(0,fs(C)+1).replace(c0,"")}function bt(C){return function(D){return C(D)}}function y0(C,D){return Oe(D,function(E){return C[E]})}function hr(C,D){return C.has(D)}function us(C,D){for(var E=-1,q=C.length;++E<q&&zn(D,C[E],0)>-1;);return E}function ds(C,D){for(var E=C.length;E--&&zn(D,C[E],0)>-1;);return E}function ju(C,D){for(var E=C.length,q=0;E--;)C[E]===D&&++q;return q}var Au=b0(du),Iu=b0(hu);function Tu(C){return"\\"+gu[C]}function Mu(C,D){return C==null?i:C[D]}function kn(C){return su.test(C)}function Eu(C){return cu.test(C)}function Lu(C){for(var D,E=[];!(D=C.next()).done;)E.push(D.value);return E}function S0(C){var D=-1,E=Array(C.size);return C.forEach(function(q,re){E[++D]=[re,q]}),E}function hs(C,D){return function(E){return C(D(E))}}function hn(C,D){for(var E=-1,q=C.length,re=0,Re=[];++E<q;){var Xe=C[E];(Xe===D||Xe===$)&&(C[E]=$,Re[re++]=E)}return Re}function Yr(C){var D=-1,E=Array(C.size);return C.forEach(function(q){E[++D]=q}),E}function Vu(C){var D=-1,E=Array(C.size);return C.forEach(function(q){E[++D]=[q,q]}),E}function Du(C,D,E){for(var q=E-1,re=C.length;++q<re;)if(C[q]===D)return q;return-1}function Bu(C,D,E){for(var q=E+1;q--;)if(C[q]===D)return q;return q}function Wn(C){return kn(C)?Ou(C):$u(C)}function Dt(C){return kn(C)?Nu(C):Cu(C)}function fs(C){for(var D=C.length;D--&&j2.test(C.charAt(D)););return D}var Hu=b0(fu);function Ou(C){for(var D=f0.lastIndex=0;f0.test(C);)++D;return D}function Nu(C){return C.match(f0)||[]}function Fu(C){return C.match(au)||[]}var zu=function C(D){D=D==null?tt:Un.defaults(tt.Object(),D,Un.pick(tt,lu));var E=D.Array,q=D.Date,re=D.Error,Re=D.Function,Xe=D.Math,Le=D.Object,R0=D.RegExp,ku=D.String,It=D.TypeError,Zr=E.prototype,Wu=Re.prototype,qn=Le.prototype,Xr=D["__core-js_shared__"],Qr=Wu.toString,Te=qn.hasOwnProperty,Uu=0,gs=function(){var t=/[^.]+$/.exec(Xr&&Xr.keys&&Xr.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Jr=qn.toString,qu=Qr.call(Le),Gu=tt._,Ku=R0("^"+Qr.call(Te).replace(s0,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Pr=Qa?D.Buffer:i,fn=D.Symbol,eo=D.Uint8Array,ms=Pr?Pr.allocUnsafe:i,to=hs(Le.getPrototypeOf,Le),xs=Le.create,ws=qn.propertyIsEnumerable,no=Zr.splice,vs=fn?fn.isConcatSpreadable:i,fr=fn?fn.iterator:i,Sn=fn?fn.toStringTag:i,ro=function(){try{var t=In(Le,"defineProperty");return t({},"",{}),t}catch{}}(),Yu=D.clearTimeout!==tt.clearTimeout&&D.clearTimeout,Zu=q&&q.now!==tt.Date.now&&q.now,Xu=D.setTimeout!==tt.setTimeout&&D.setTimeout,oo=Xe.ceil,io=Xe.floor,_0=Le.getOwnPropertySymbols,Qu=Pr?Pr.isBuffer:i,ps=D.isFinite,Ju=Zr.join,Pu=hs(Le.keys,Le),Qe=Xe.max,ot=Xe.min,ed=q.now,td=D.parseInt,bs=Xe.random,nd=Zr.reverse,j0=In(D,"DataView"),gr=In(D,"Map"),A0=In(D,"Promise"),Gn=In(D,"Set"),mr=In(D,"WeakMap"),xr=In(Le,"create"),ao=mr&&new mr,Kn={},rd=Tn(j0),od=Tn(gr),id=Tn(A0),ad=Tn(Gn),sd=Tn(mr),so=fn?fn.prototype:i,wr=so?so.valueOf:i,$s=so?so.toString:i;function g(t){if(ke(t)&&!ae(t)&&!(t instanceof pe)){if(t instanceof Tt)return t;if(Te.call(t,"__wrapped__"))return C1(t)}return new Tt(t)}var Yn=function(){function t(){}return function(r){if(!Fe(r))return{};if(xs)return xs(r);t.prototype=r;var a=new t;return t.prototype=i,a}}();function co(){}function Tt(t,r){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!r,this.__index__=0,this.__values__=i}g.templateSettings={escape:$2,evaluate:C2,interpolate:Ta,variable:"",imports:{_:g}},g.prototype=co.prototype,g.prototype.constructor=g,Tt.prototype=Yn(co.prototype),Tt.prototype.constructor=Tt;function pe(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=he,this.__views__=[]}function cd(){var t=new pe(this.__wrapped__);return t.__actions__=ft(this.__actions__),t.__dir__=this.__dir__,t.__filtered__=this.__filtered__,t.__iteratees__=ft(this.__iteratees__),t.__takeCount__=this.__takeCount__,t.__views__=ft(this.__views__),t}function ld(){if(this.__filtered__){var t=new pe(this);t.__dir__=-1,t.__filtered__=!0}else t=this.clone(),t.__dir__*=-1;return t}function ud(){var t=this.__wrapped__.value(),r=this.__dir__,a=ae(t),d=r<0,f=a?t.length:0,m=Ch(0,f,this.__views__),w=m.start,p=m.end,S=p-w,H=d?p:w-1,O=this.__iteratees__,N=O.length,W=0,K=ot(S,this.__takeCount__);if(!a||!d&&f==S&&K==S)return qs(t,this.__actions__);var Q=[];e:for(;S--&&W<K;){H+=r;for(var de=-1,J=t[H];++de<N;){var ve=O[de],be=ve.iteratee,yt=ve.type,dt=be(J);if(yt==_e)J=dt;else if(!dt){if(yt==ee)continue e;break e}}Q[W++]=J}return Q}pe.prototype=Yn(co.prototype),pe.prototype.constructor=pe;function Rn(t){var r=-1,a=t==null?0:t.length;for(this.clear();++r<a;){var d=t[r];this.set(d[0],d[1])}}function dd(){this.__data__=xr?xr(null):{},this.size=0}function hd(t){var r=this.has(t)&&delete this.__data__[t];return this.size-=r?1:0,r}function fd(t){var r=this.__data__;if(xr){var a=r[t];return a===v?i:a}return Te.call(r,t)?r[t]:i}function gd(t){var r=this.__data__;return xr?r[t]!==i:Te.call(r,t)}function md(t,r){var a=this.__data__;return this.size+=this.has(t)?0:1,a[t]=xr&&r===i?v:r,this}Rn.prototype.clear=dd,Rn.prototype.delete=hd,Rn.prototype.get=fd,Rn.prototype.has=gd,Rn.prototype.set=md;function Xt(t){var r=-1,a=t==null?0:t.length;for(this.clear();++r<a;){var d=t[r];this.set(d[0],d[1])}}function xd(){this.__data__=[],this.size=0}function wd(t){var r=this.__data__,a=lo(r,t);if(a<0)return!1;var d=r.length-1;return a==d?r.pop():no.call(r,a,1),--this.size,!0}function vd(t){var r=this.__data__,a=lo(r,t);return a<0?i:r[a][1]}function pd(t){return lo(this.__data__,t)>-1}function bd(t,r){var a=this.__data__,d=lo(a,t);return d<0?(++this.size,a.push([t,r])):a[d][1]=r,this}Xt.prototype.clear=xd,Xt.prototype.delete=wd,Xt.prototype.get=vd,Xt.prototype.has=pd,Xt.prototype.set=bd;function Qt(t){var r=-1,a=t==null?0:t.length;for(this.clear();++r<a;){var d=t[r];this.set(d[0],d[1])}}function $d(){this.size=0,this.__data__={hash:new Rn,map:new(gr||Xt),string:new Rn}}function Cd(t){var r=Co(this,t).delete(t);return this.size-=r?1:0,r}function yd(t){return Co(this,t).get(t)}function Sd(t){return Co(this,t).has(t)}function Rd(t,r){var a=Co(this,t),d=a.size;return a.set(t,r),this.size+=a.size==d?0:1,this}Qt.prototype.clear=$d,Qt.prototype.delete=Cd,Qt.prototype.get=yd,Qt.prototype.has=Sd,Qt.prototype.set=Rd;function _n(t){var r=-1,a=t==null?0:t.length;for(this.__data__=new Qt;++r<a;)this.add(t[r])}function _d(t){return this.__data__.set(t,v),this}function jd(t){return this.__data__.has(t)}_n.prototype.add=_n.prototype.push=_d,_n.prototype.has=jd;function Bt(t){var r=this.__data__=new Xt(t);this.size=r.size}function Ad(){this.__data__=new Xt,this.size=0}function Id(t){var r=this.__data__,a=r.delete(t);return this.size=r.size,a}function Td(t){return this.__data__.get(t)}function Md(t){return this.__data__.has(t)}function Ed(t,r){var a=this.__data__;if(a instanceof Xt){var d=a.__data__;if(!gr||d.length<o-1)return d.push([t,r]),this.size=++a.size,this;a=this.__data__=new Qt(d)}return a.set(t,r),this.size=a.size,this}Bt.prototype.clear=Ad,Bt.prototype.delete=Id,Bt.prototype.get=Td,Bt.prototype.has=Md,Bt.prototype.set=Ed;function Cs(t,r){var a=ae(t),d=!a&&Mn(t),f=!a&&!d&&vn(t),m=!a&&!d&&!f&&Jn(t),w=a||d||f||m,p=w?C0(t.length,ku):[],S=p.length;for(var H in t)(r||Te.call(t,H))&&!(w&&(H=="length"||f&&(H=="offset"||H=="parent")||m&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||tn(H,S)))&&p.push(H);return p}function ys(t){var r=t.length;return r?t[N0(0,r-1)]:i}function Ld(t,r){return yo(ft(t),jn(r,0,t.length))}function Vd(t){return yo(ft(t))}function I0(t,r,a){(a!==i&&!Ht(t[r],a)||a===i&&!(r in t))&&Jt(t,r,a)}function vr(t,r,a){var d=t[r];(!(Te.call(t,r)&&Ht(d,a))||a===i&&!(r in t))&&Jt(t,r,a)}function lo(t,r){for(var a=t.length;a--;)if(Ht(t[a][0],r))return a;return-1}function Dd(t,r,a,d){return gn(t,function(f,m,w){r(d,f,a(f),w)}),d}function Ss(t,r){return t&&qt(r,Pe(r),t)}function Bd(t,r){return t&&qt(r,mt(r),t)}function Jt(t,r,a){r=="__proto__"&&ro?ro(t,r,{configurable:!0,enumerable:!0,value:a,writable:!0}):t[r]=a}function T0(t,r){for(var a=-1,d=r.length,f=E(d),m=t==null;++a<d;)f[a]=m?i:ui(t,r[a]);return f}function jn(t,r,a){return t===t&&(a!==i&&(t=t<=a?t:a),r!==i&&(t=t>=r?t:r)),t}function Mt(t,r,a,d,f,m){var w,p=r&y,S=r&b,H=r&A;if(a&&(w=f?a(t,d,f,m):a(t)),w!==i)return w;if(!Fe(t))return t;var O=ae(t);if(O){if(w=Sh(t),!p)return ft(t,w)}else{var N=it(t),W=N==Ce||N==rt;if(vn(t))return Ys(t,p);if(N==Ze||N==Ne||W&&!f){if(w=S||W?{}:f1(t),!p)return S?fh(t,Bd(w,t)):hh(t,Ss(w,t))}else{if(!Ve[N])return f?t:{};w=Rh(t,N,p)}}m||(m=new Bt);var K=m.get(t);if(K)return K;m.set(t,w),k1(t)?t.forEach(function(J){w.add(Mt(J,r,a,J,t,m))}):F1(t)&&t.forEach(function(J,ve){w.set(ve,Mt(J,r,a,ve,t,m))});var Q=H?S?X0:Z0:S?mt:Pe,de=O?i:Q(t);return At(de||t,function(J,ve){de&&(ve=J,J=t[ve]),vr(w,ve,Mt(J,r,a,ve,t,m))}),w}function Hd(t){var r=Pe(t);return function(a){return Rs(a,t,r)}}function Rs(t,r,a){var d=a.length;if(t==null)return!d;for(t=Le(t);d--;){var f=a[d],m=r[f],w=t[f];if(w===i&&!(f in t)||!m(w))return!1}return!0}function _s(t,r,a){if(typeof t!="function")throw new It(u);return Rr(function(){t.apply(i,a)},r)}function pr(t,r,a,d){var f=-1,m=Gr,w=!0,p=t.length,S=[],H=r.length;if(!p)return S;a&&(r=Oe(r,bt(a))),d?(m=x0,w=!1):r.length>=o&&(m=hr,w=!1,r=new _n(r));e:for(;++f<p;){var O=t[f],N=a==null?O:a(O);if(O=d||O!==0?O:0,w&&N===N){for(var W=H;W--;)if(r[W]===N)continue e;S.push(O)}else m(r,N,d)||S.push(O)}return S}var gn=Ps(Ut),js=Ps(E0,!0);function Od(t,r){var a=!0;return gn(t,function(d,f,m){return a=!!r(d,f,m),a}),a}function uo(t,r,a){for(var d=-1,f=t.length;++d<f;){var m=t[d],w=r(m);if(w!=null&&(p===i?w===w&&!Ct(w):a(w,p)))var p=w,S=m}return S}function Nd(t,r,a,d){var f=t.length;for(a=ue(a),a<0&&(a=-a>f?0:f+a),d=d===i||d>f?f:ue(d),d<0&&(d+=f),d=a>d?0:U1(d);a<d;)t[a++]=r;return t}function As(t,r){var a=[];return gn(t,function(d,f,m){r(d,f,m)&&a.push(d)}),a}function nt(t,r,a,d,f){var m=-1,w=t.length;for(a||(a=jh),f||(f=[]);++m<w;){var p=t[m];r>0&&a(p)?r>1?nt(p,r-1,a,d,f):dn(f,p):d||(f[f.length]=p)}return f}var M0=e1(),Is=e1(!0);function Ut(t,r){return t&&M0(t,r,Pe)}function E0(t,r){return t&&Is(t,r,Pe)}function ho(t,r){return un(r,function(a){return nn(t[a])})}function An(t,r){r=xn(r,t);for(var a=0,d=r.length;t!=null&&a<d;)t=t[Gt(r[a++])];return a&&a==d?t:i}function Ts(t,r,a){var d=r(t);return ae(t)?d:dn(d,a(t))}function lt(t){return t==null?t===i?dr:_t:Sn&&Sn in Le(t)?$h(t):Vh(t)}function L0(t,r){return t>r}function Fd(t,r){return t!=null&&Te.call(t,r)}function zd(t,r){return t!=null&&r in Le(t)}function kd(t,r,a){return t>=ot(r,a)&&t<Qe(r,a)}function V0(t,r,a){for(var d=a?x0:Gr,f=t[0].length,m=t.length,w=m,p=E(m),S=1/0,H=[];w--;){var O=t[w];w&&r&&(O=Oe(O,bt(r))),S=ot(O.length,S),p[w]=!a&&(r||f>=120&&O.length>=120)?new _n(w&&O):i}O=t[0];var N=-1,W=p[0];e:for(;++N<f&&H.length<S;){var K=O[N],Q=r?r(K):K;if(K=a||K!==0?K:0,!(W?hr(W,Q):d(H,Q,a))){for(w=m;--w;){var de=p[w];if(!(de?hr(de,Q):d(t[w],Q,a)))continue e}W&&W.push(Q),H.push(K)}}return H}function Wd(t,r,a,d){return Ut(t,function(f,m,w){r(d,a(f),m,w)}),d}function br(t,r,a){r=xn(r,t),t=w1(t,r);var d=t==null?t:t[Gt(Lt(r))];return d==null?i:pt(d,t,a)}function Ms(t){return ke(t)&&lt(t)==Ne}function Ud(t){return ke(t)&&lt(t)==Zt}function qd(t){return ke(t)&&lt(t)==Se}function $r(t,r,a,d,f){return t===r?!0:t==null||r==null||!ke(t)&&!ke(r)?t!==t&&r!==r:Gd(t,r,a,d,$r,f)}function Gd(t,r,a,d,f,m){var w=ae(t),p=ae(r),S=w?Ye:it(t),H=p?Ye:it(r);S=S==Ne?Ze:S,H=H==Ne?Ze:H;var O=S==Ze,N=H==Ze,W=S==H;if(W&&vn(t)){if(!vn(r))return!1;w=!0,O=!1}if(W&&!O)return m||(m=new Bt),w||Jn(t)?u1(t,r,a,d,f,m):ph(t,r,S,a,d,f,m);if(!(a&M)){var K=O&&Te.call(t,"__wrapped__"),Q=N&&Te.call(r,"__wrapped__");if(K||Q){var de=K?t.value():t,J=Q?r.value():r;return m||(m=new Bt),f(de,J,a,d,m)}}return W?(m||(m=new Bt),bh(t,r,a,d,f,m)):!1}function Kd(t){return ke(t)&&it(t)==Ee}function D0(t,r,a,d){var f=a.length,m=f,w=!d;if(t==null)return!m;for(t=Le(t);f--;){var p=a[f];if(w&&p[2]?p[1]!==t[p[0]]:!(p[0]in t))return!1}for(;++f<m;){p=a[f];var S=p[0],H=t[S],O=p[1];if(w&&p[2]){if(H===i&&!(S in t))return!1}else{var N=new Bt;if(d)var W=d(H,O,S,t,r,N);if(!(W===i?$r(O,H,M|I,d,N):W))return!1}}return!0}function Es(t){if(!Fe(t)||Ih(t))return!1;var r=nn(t)?Ku:H2;return r.test(Tn(t))}function Yd(t){return ke(t)&&lt(t)==ln}function Zd(t){return ke(t)&&it(t)==ct}function Xd(t){return ke(t)&&Io(t.length)&&!!Be[lt(t)]}function Ls(t){return typeof t=="function"?t:t==null?xt:typeof t=="object"?ae(t)?Bs(t[0],t[1]):Ds(t):tc(t)}function B0(t){if(!Sr(t))return Pu(t);var r=[];for(var a in Le(t))Te.call(t,a)&&a!="constructor"&&r.push(a);return r}function Qd(t){if(!Fe(t))return Lh(t);var r=Sr(t),a=[];for(var d in t)d=="constructor"&&(r||!Te.call(t,d))||a.push(d);return a}function H0(t,r){return t<r}function Vs(t,r){var a=-1,d=gt(t)?E(t.length):[];return gn(t,function(f,m,w){d[++a]=r(f,m,w)}),d}function Ds(t){var r=J0(t);return r.length==1&&r[0][2]?m1(r[0][0],r[0][1]):function(a){return a===t||D0(a,t,r)}}function Bs(t,r){return ei(t)&&g1(r)?m1(Gt(t),r):function(a){var d=ui(a,t);return d===i&&d===r?di(a,t):$r(r,d,M|I)}}function fo(t,r,a,d,f){t!==r&&M0(r,function(m,w){if(f||(f=new Bt),Fe(m))Jd(t,r,w,a,fo,d,f);else{var p=d?d(ni(t,w),m,w+"",t,r,f):i;p===i&&(p=m),I0(t,w,p)}},mt)}function Jd(t,r,a,d,f,m,w){var p=ni(t,a),S=ni(r,a),H=w.get(S);if(H){I0(t,a,H);return}var O=m?m(p,S,a+"",t,r,w):i,N=O===i;if(N){var W=ae(S),K=!W&&vn(S),Q=!W&&!K&&Jn(S);O=S,W||K||Q?ae(p)?O=p:We(p)?O=ft(p):K?(N=!1,O=Ys(S,!0)):Q?(N=!1,O=Zs(S,!0)):O=[]:_r(S)||Mn(S)?(O=p,Mn(p)?O=q1(p):(!Fe(p)||nn(p))&&(O=f1(S))):N=!1}N&&(w.set(S,O),f(O,S,d,m,w),w.delete(S)),I0(t,a,O)}function Hs(t,r){var a=t.length;if(a)return r+=r<0?a:0,tn(r,a)?t[r]:i}function Os(t,r,a){r.length?r=Oe(r,function(m){return ae(m)?function(w){return An(w,m.length===1?m[0]:m)}:m}):r=[xt];var d=-1;r=Oe(r,bt(X()));var f=Vs(t,function(m,w,p){var S=Oe(r,function(H){return H(m)});return{criteria:S,index:++d,value:m}});return Ru(f,function(m,w){return dh(m,w,a)})}function Pd(t,r){return Ns(t,r,function(a,d){return di(t,d)})}function Ns(t,r,a){for(var d=-1,f=r.length,m={};++d<f;){var w=r[d],p=An(t,w);a(p,w)&&Cr(m,xn(w,t),p)}return m}function eh(t){return function(r){return An(r,t)}}function O0(t,r,a,d){var f=d?Su:zn,m=-1,w=r.length,p=t;for(t===r&&(r=ft(r)),a&&(p=Oe(t,bt(a)));++m<w;)for(var S=0,H=r[m],O=a?a(H):H;(S=f(p,O,S,d))>-1;)p!==t&&no.call(p,S,1),no.call(t,S,1);return t}function Fs(t,r){for(var a=t?r.length:0,d=a-1;a--;){var f=r[a];if(a==d||f!==m){var m=f;tn(f)?no.call(t,f,1):k0(t,f)}}return t}function N0(t,r){return t+io(bs()*(r-t+1))}function th(t,r,a,d){for(var f=-1,m=Qe(oo((r-t)/(a||1)),0),w=E(m);m--;)w[d?m:++f]=t,t+=a;return w}function F0(t,r){var a="";if(!t||r<1||r>ye)return a;do r%2&&(a+=t),r=io(r/2),r&&(t+=t);while(r);return a}function fe(t,r){return ri(x1(t,r,xt),t+"")}function nh(t){return ys(Pn(t))}function rh(t,r){var a=Pn(t);return yo(a,jn(r,0,a.length))}function Cr(t,r,a,d){if(!Fe(t))return t;r=xn(r,t);for(var f=-1,m=r.length,w=m-1,p=t;p!=null&&++f<m;){var S=Gt(r[f]),H=a;if(S==="__proto__"||S==="constructor"||S==="prototype")return t;if(f!=w){var O=p[S];H=d?d(O,S,p):i,H===i&&(H=Fe(O)?O:tn(r[f+1])?[]:{})}vr(p,S,H),p=p[S]}return t}var zs=ao?function(t,r){return ao.set(t,r),t}:xt,oh=ro?function(t,r){return ro(t,"toString",{configurable:!0,enumerable:!1,value:fi(r),writable:!0})}:xt;function ih(t){return yo(Pn(t))}function Et(t,r,a){var d=-1,f=t.length;r<0&&(r=-r>f?0:f+r),a=a>f?f:a,a<0&&(a+=f),f=r>a?0:a-r>>>0,r>>>=0;for(var m=E(f);++d<f;)m[d]=t[d+r];return m}function ah(t,r){var a;return gn(t,function(d,f,m){return a=r(d,f,m),!a}),!!a}function go(t,r,a){var d=0,f=t==null?d:t.length;if(typeof r=="number"&&r===r&&f<=xe){for(;d<f;){var m=d+f>>>1,w=t[m];w!==null&&!Ct(w)&&(a?w<=r:w<r)?d=m+1:f=m}return f}return z0(t,r,xt,a)}function z0(t,r,a,d){var f=0,m=t==null?0:t.length;if(m===0)return 0;r=a(r);for(var w=r!==r,p=r===null,S=Ct(r),H=r===i;f<m;){var O=io((f+m)/2),N=a(t[O]),W=N!==i,K=N===null,Q=N===N,de=Ct(N);if(w)var J=d||Q;else H?J=Q&&(d||W):p?J=Q&&W&&(d||!K):S?J=Q&&W&&!K&&(d||!de):K||de?J=!1:J=d?N<=r:N<r;J?f=O+1:m=O}return ot(m,Je)}function ks(t,r){for(var a=-1,d=t.length,f=0,m=[];++a<d;){var w=t[a],p=r?r(w):w;if(!a||!Ht(p,S)){var S=p;m[f++]=w===0?0:w}}return m}function Ws(t){return typeof t=="number"?t:Ct(t)?De:+t}function $t(t){if(typeof t=="string")return t;if(ae(t))return Oe(t,$t)+"";if(Ct(t))return $s?$s.call(t):"";var r=t+"";return r=="0"&&1/t==-me?"-0":r}function mn(t,r,a){var d=-1,f=Gr,m=t.length,w=!0,p=[],S=p;if(a)w=!1,f=x0;else if(m>=o){var H=r?null:wh(t);if(H)return Yr(H);w=!1,f=hr,S=new _n}else S=r?[]:p;e:for(;++d<m;){var O=t[d],N=r?r(O):O;if(O=a||O!==0?O:0,w&&N===N){for(var W=S.length;W--;)if(S[W]===N)continue e;r&&S.push(N),p.push(O)}else f(S,N,a)||(S!==p&&S.push(N),p.push(O))}return p}function k0(t,r){return r=xn(r,t),t=w1(t,r),t==null||delete t[Gt(Lt(r))]}function Us(t,r,a,d){return Cr(t,r,a(An(t,r)),d)}function mo(t,r,a,d){for(var f=t.length,m=d?f:-1;(d?m--:++m<f)&&r(t[m],m,t););return a?Et(t,d?0:m,d?m+1:f):Et(t,d?m+1:0,d?f:m)}function qs(t,r){var a=t;return a instanceof pe&&(a=a.value()),w0(r,function(d,f){return f.func.apply(f.thisArg,dn([d],f.args))},a)}function W0(t,r,a){var d=t.length;if(d<2)return d?mn(t[0]):[];for(var f=-1,m=E(d);++f<d;)for(var w=t[f],p=-1;++p<d;)p!=f&&(m[f]=pr(m[f]||w,t[p],r,a));return mn(nt(m,1),r,a)}function Gs(t,r,a){for(var d=-1,f=t.length,m=r.length,w={};++d<f;){var p=d<m?r[d]:i;a(w,t[d],p)}return w}function U0(t){return We(t)?t:[]}function q0(t){return typeof t=="function"?t:xt}function xn(t,r){return ae(t)?t:ei(t,r)?[t]:$1(Ie(t))}var sh=fe;function wn(t,r,a){var d=t.length;return a=a===i?d:a,!r&&a>=d?t:Et(t,r,a)}var Ks=Yu||function(t){return tt.clearTimeout(t)};function Ys(t,r){if(r)return t.slice();var a=t.length,d=ms?ms(a):new t.constructor(a);return t.copy(d),d}function G0(t){var r=new t.constructor(t.byteLength);return new eo(r).set(new eo(t)),r}function ch(t,r){var a=r?G0(t.buffer):t.buffer;return new t.constructor(a,t.byteOffset,t.byteLength)}function lh(t){var r=new t.constructor(t.source,Ma.exec(t));return r.lastIndex=t.lastIndex,r}function uh(t){return wr?Le(wr.call(t)):{}}function Zs(t,r){var a=r?G0(t.buffer):t.buffer;return new t.constructor(a,t.byteOffset,t.length)}function Xs(t,r){if(t!==r){var a=t!==i,d=t===null,f=t===t,m=Ct(t),w=r!==i,p=r===null,S=r===r,H=Ct(r);if(!p&&!H&&!m&&t>r||m&&w&&S&&!p&&!H||d&&w&&S||!a&&S||!f)return 1;if(!d&&!m&&!H&&t<r||H&&a&&f&&!d&&!m||p&&a&&f||!w&&f||!S)return-1}return 0}function dh(t,r,a){for(var d=-1,f=t.criteria,m=r.criteria,w=f.length,p=a.length;++d<w;){var S=Xs(f[d],m[d]);if(S){if(d>=p)return S;var H=a[d];return S*(H=="desc"?-1:1)}}return t.index-r.index}function Qs(t,r,a,d){for(var f=-1,m=t.length,w=a.length,p=-1,S=r.length,H=Qe(m-w,0),O=E(S+H),N=!d;++p<S;)O[p]=r[p];for(;++f<w;)(N||f<m)&&(O[a[f]]=t[f]);for(;H--;)O[p++]=t[f++];return O}function Js(t,r,a,d){for(var f=-1,m=t.length,w=-1,p=a.length,S=-1,H=r.length,O=Qe(m-p,0),N=E(O+H),W=!d;++f<O;)N[f]=t[f];for(var K=f;++S<H;)N[K+S]=r[S];for(;++w<p;)(W||f<m)&&(N[K+a[w]]=t[f++]);return N}function ft(t,r){var a=-1,d=t.length;for(r||(r=E(d));++a<d;)r[a]=t[a];return r}function qt(t,r,a,d){var f=!a;a||(a={});for(var m=-1,w=r.length;++m<w;){var p=r[m],S=d?d(a[p],t[p],p,a,t):i;S===i&&(S=t[p]),f?Jt(a,p,S):vr(a,p,S)}return a}function hh(t,r){return qt(t,P0(t),r)}function fh(t,r){return qt(t,d1(t),r)}function xo(t,r){return function(a,d){var f=ae(a)?vu:Dd,m=r?r():{};return f(a,t,X(d,2),m)}}function Zn(t){return fe(function(r,a){var d=-1,f=a.length,m=f>1?a[f-1]:i,w=f>2?a[2]:i;for(m=t.length>3&&typeof m=="function"?(f--,m):i,w&&ut(a[0],a[1],w)&&(m=f<3?i:m,f=1),r=Le(r);++d<f;){var p=a[d];p&&t(r,p,d,m)}return r})}function Ps(t,r){return function(a,d){if(a==null)return a;if(!gt(a))return t(a,d);for(var f=a.length,m=r?f:-1,w=Le(a);(r?m--:++m<f)&&d(w[m],m,w)!==!1;);return a}}function e1(t){return function(r,a,d){for(var f=-1,m=Le(r),w=d(r),p=w.length;p--;){var S=w[t?p:++f];if(a(m[S],S,m)===!1)break}return r}}function gh(t,r,a){var d=r&V,f=yr(t);function m(){var w=this&&this!==tt&&this instanceof m?f:t;return w.apply(d?a:this,arguments)}return m}function t1(t){return function(r){r=Ie(r);var a=kn(r)?Dt(r):i,d=a?a[0]:r.charAt(0),f=a?wn(a,1).join(""):r.slice(1);return d[t]()+f}}function Xn(t){return function(r){return w0(P1(J1(r).replace(ou,"")),t,"")}}function yr(t){return function(){var r=arguments;switch(r.length){case 0:return new t;case 1:return new t(r[0]);case 2:return new t(r[0],r[1]);case 3:return new t(r[0],r[1],r[2]);case 4:return new t(r[0],r[1],r[2],r[3]);case 5:return new t(r[0],r[1],r[2],r[3],r[4]);case 6:return new t(r[0],r[1],r[2],r[3],r[4],r[5]);case 7:return new t(r[0],r[1],r[2],r[3],r[4],r[5],r[6])}var a=Yn(t.prototype),d=t.apply(a,r);return Fe(d)?d:a}}function mh(t,r,a){var d=yr(t);function f(){for(var m=arguments.length,w=E(m),p=m,S=Qn(f);p--;)w[p]=arguments[p];var H=m<3&&w[0]!==S&&w[m-1]!==S?[]:hn(w,S);if(m-=H.length,m<a)return a1(t,r,wo,f.placeholder,i,w,H,i,i,a-m);var O=this&&this!==tt&&this instanceof f?d:t;return pt(O,this,w)}return f}function n1(t){return function(r,a,d){var f=Le(r);if(!gt(r)){var m=X(a,3);r=Pe(r),a=function(p){return m(f[p],p,f)}}var w=t(r,a,d);return w>-1?f[m?r[w]:w]:i}}function r1(t){return en(function(r){var a=r.length,d=a,f=Tt.prototype.thru;for(t&&r.reverse();d--;){var m=r[d];if(typeof m!="function")throw new It(u);if(f&&!w&&$o(m)=="wrapper")var w=new Tt([],!0)}for(d=w?d:a;++d<a;){m=r[d];var p=$o(m),S=p=="wrapper"?Q0(m):i;S&&ti(S[0])&&S[1]==(U|B|z|oe)&&!S[4].length&&S[9]==1?w=w[$o(S[0])].apply(w,S[3]):w=m.length==1&&ti(m)?w[p]():w.thru(m)}return function(){var H=arguments,O=H[0];if(w&&H.length==1&&ae(O))return w.plant(O).value();for(var N=0,W=a?r[N].apply(this,H):O;++N<a;)W=r[N].call(this,W);return W}})}function wo(t,r,a,d,f,m,w,p,S,H){var O=r&U,N=r&V,W=r&L,K=r&(B|F),Q=r&se,de=W?i:yr(t);function J(){for(var ve=arguments.length,be=E(ve),yt=ve;yt--;)be[yt]=arguments[yt];if(K)var dt=Qn(J),St=ju(be,dt);if(d&&(be=Qs(be,d,f,K)),m&&(be=Js(be,m,w,K)),ve-=St,K&&ve<H){var Ue=hn(be,dt);return a1(t,r,wo,J.placeholder,a,be,Ue,p,S,H-ve)}var Ot=N?a:this,on=W?Ot[t]:t;return ve=be.length,p?be=Dh(be,p):Q&&ve>1&&be.reverse(),O&&S<ve&&(be.length=S),this&&this!==tt&&this instanceof J&&(on=de||yr(on)),on.apply(Ot,be)}return J}function o1(t,r){return function(a,d){return Wd(a,t,r(d),{})}}function vo(t,r){return function(a,d){var f;if(a===i&&d===i)return r;if(a!==i&&(f=a),d!==i){if(f===i)return d;typeof a=="string"||typeof d=="string"?(a=$t(a),d=$t(d)):(a=Ws(a),d=Ws(d)),f=t(a,d)}return f}}function K0(t){return en(function(r){return r=Oe(r,bt(X())),fe(function(a){var d=this;return t(r,function(f){return pt(f,d,a)})})})}function po(t,r){r=r===i?" ":$t(r);var a=r.length;if(a<2)return a?F0(r,t):r;var d=F0(r,oo(t/Wn(r)));return kn(r)?wn(Dt(d),0,t).join(""):d.slice(0,t)}function xh(t,r,a,d){var f=r&V,m=yr(t);function w(){for(var p=-1,S=arguments.length,H=-1,O=d.length,N=E(O+S),W=this&&this!==tt&&this instanceof w?m:t;++H<O;)N[H]=d[H];for(;S--;)N[H++]=arguments[++p];return pt(W,f?a:this,N)}return w}function i1(t){return function(r,a,d){return d&&typeof d!="number"&&ut(r,a,d)&&(a=d=i),r=rn(r),a===i?(a=r,r=0):a=rn(a),d=d===i?r<a?1:-1:rn(d),th(r,a,d,t)}}function bo(t){return function(r,a){return typeof r=="string"&&typeof a=="string"||(r=Vt(r),a=Vt(a)),t(r,a)}}function a1(t,r,a,d,f,m,w,p,S,H){var O=r&B,N=O?w:i,W=O?i:w,K=O?m:i,Q=O?i:m;r|=O?z:k,r&=~(O?k:z),r&j||(r&=-4);var de=[t,r,f,K,N,Q,W,p,S,H],J=a.apply(i,de);return ti(t)&&v1(J,de),J.placeholder=d,p1(J,t,r)}function Y0(t){var r=Xe[t];return function(a,d){if(a=Vt(a),d=d==null?0:ot(ue(d),292),d&&ps(a)){var f=(Ie(a)+"e").split("e"),m=r(f[0]+"e"+(+f[1]+d));return f=(Ie(m)+"e").split("e"),+(f[0]+"e"+(+f[1]-d))}return r(a)}}var wh=Gn&&1/Yr(new Gn([,-0]))[1]==me?function(t){return new Gn(t)}:xi;function s1(t){return function(r){var a=it(r);return a==Ee?S0(r):a==ct?Vu(r):_u(r,t(r))}}function Pt(t,r,a,d,f,m,w,p){var S=r&L;if(!S&&typeof t!="function")throw new It(u);var H=d?d.length:0;if(H||(r&=-97,d=f=i),w=w===i?w:Qe(ue(w),0),p=p===i?p:ue(p),H-=f?f.length:0,r&k){var O=d,N=f;d=f=i}var W=S?i:Q0(t),K=[t,r,a,d,f,O,N,m,w,p];if(W&&Eh(K,W),t=K[0],r=K[1],a=K[2],d=K[3],f=K[4],p=K[9]=K[9]===i?S?0:t.length:Qe(K[9]-H,0),!p&&r&(B|F)&&(r&=-25),!r||r==V)var Q=gh(t,r,a);else r==B||r==F?Q=mh(t,r,p):(r==z||r==(V|z))&&!f.length?Q=xh(t,r,a,d):Q=wo.apply(i,K);var de=W?zs:v1;return p1(de(Q,K),t,r)}function c1(t,r,a,d){return t===i||Ht(t,qn[a])&&!Te.call(d,a)?r:t}function l1(t,r,a,d,f,m){return Fe(t)&&Fe(r)&&(m.set(r,t),fo(t,r,i,l1,m),m.delete(r)),t}function vh(t){return _r(t)?i:t}function u1(t,r,a,d,f,m){var w=a&M,p=t.length,S=r.length;if(p!=S&&!(w&&S>p))return!1;var H=m.get(t),O=m.get(r);if(H&&O)return H==r&&O==t;var N=-1,W=!0,K=a&I?new _n:i;for(m.set(t,r),m.set(r,t);++N<p;){var Q=t[N],de=r[N];if(d)var J=w?d(de,Q,N,r,t,m):d(Q,de,N,t,r,m);if(J!==i){if(J)continue;W=!1;break}if(K){if(!v0(r,function(ve,be){if(!hr(K,be)&&(Q===ve||f(Q,ve,a,d,m)))return K.push(be)})){W=!1;break}}else if(!(Q===de||f(Q,de,a,d,m))){W=!1;break}}return m.delete(t),m.delete(r),W}function ph(t,r,a,d,f,m,w){switch(a){case Ge:if(t.byteLength!=r.byteLength||t.byteOffset!=r.byteOffset)return!1;t=t.buffer,r=r.buffer;case Zt:return!(t.byteLength!=r.byteLength||!m(new eo(t),new eo(r)));case we:case Se:case Ae:return Ht(+t,+r);case ge:return t.name==r.name&&t.message==r.message;case ln:case Wt:return t==r+"";case Ee:var p=S0;case ct:var S=d&M;if(p||(p=Yr),t.size!=r.size&&!S)return!1;var H=w.get(t);if(H)return H==r;d|=I,w.set(t,r);var O=u1(p(t),p(r),d,f,m,w);return w.delete(t),O;case Nn:if(wr)return wr.call(t)==wr.call(r)}return!1}function bh(t,r,a,d,f,m){var w=a&M,p=Z0(t),S=p.length,H=Z0(r),O=H.length;if(S!=O&&!w)return!1;for(var N=S;N--;){var W=p[N];if(!(w?W in r:Te.call(r,W)))return!1}var K=m.get(t),Q=m.get(r);if(K&&Q)return K==r&&Q==t;var de=!0;m.set(t,r),m.set(r,t);for(var J=w;++N<S;){W=p[N];var ve=t[W],be=r[W];if(d)var yt=w?d(be,ve,W,r,t,m):d(ve,be,W,t,r,m);if(!(yt===i?ve===be||f(ve,be,a,d,m):yt)){de=!1;break}J||(J=W=="constructor")}if(de&&!J){var dt=t.constructor,St=r.constructor;dt!=St&&"constructor"in t&&"constructor"in r&&!(typeof dt=="function"&&dt instanceof dt&&typeof St=="function"&&St instanceof St)&&(de=!1)}return m.delete(t),m.delete(r),de}function en(t){return ri(x1(t,i,R1),t+"")}function Z0(t){return Ts(t,Pe,P0)}function X0(t){return Ts(t,mt,d1)}var Q0=ao?function(t){return ao.get(t)}:xi;function $o(t){for(var r=t.name+"",a=Kn[r],d=Te.call(Kn,r)?a.length:0;d--;){var f=a[d],m=f.func;if(m==null||m==t)return f.name}return r}function Qn(t){var r=Te.call(g,"placeholder")?g:t;return r.placeholder}function X(){var t=g.iteratee||gi;return t=t===gi?Ls:t,arguments.length?t(arguments[0],arguments[1]):t}function Co(t,r){var a=t.__data__;return Ah(r)?a[typeof r=="string"?"string":"hash"]:a.map}function J0(t){for(var r=Pe(t),a=r.length;a--;){var d=r[a],f=t[d];r[a]=[d,f,g1(f)]}return r}function In(t,r){var a=Mu(t,r);return Es(a)?a:i}function $h(t){var r=Te.call(t,Sn),a=t[Sn];try{t[Sn]=i;var d=!0}catch{}var f=Jr.call(t);return d&&(r?t[Sn]=a:delete t[Sn]),f}var P0=_0?function(t){return t==null?[]:(t=Le(t),un(_0(t),function(r){return ws.call(t,r)}))}:wi,d1=_0?function(t){for(var r=[];t;)dn(r,P0(t)),t=to(t);return r}:wi,it=lt;(j0&&it(new j0(new ArrayBuffer(1)))!=Ge||gr&&it(new gr)!=Ee||A0&&it(A0.resolve())!=ur||Gn&&it(new Gn)!=ct||mr&&it(new mr)!=Cn)&&(it=function(t){var r=lt(t),a=r==Ze?t.constructor:i,d=a?Tn(a):"";if(d)switch(d){case rd:return Ge;case od:return Ee;case id:return ur;case ad:return ct;case sd:return Cn}return r});function Ch(t,r,a){for(var d=-1,f=a.length;++d<f;){var m=a[d],w=m.size;switch(m.type){case"drop":t+=w;break;case"dropRight":r-=w;break;case"take":r=ot(r,t+w);break;case"takeRight":t=Qe(t,r-w);break}}return{start:t,end:r}}function yh(t){var r=t.match(I2);return r?r[1].split(T2):[]}function h1(t,r,a){r=xn(r,t);for(var d=-1,f=r.length,m=!1;++d<f;){var w=Gt(r[d]);if(!(m=t!=null&&a(t,w)))break;t=t[w]}return m||++d!=f?m:(f=t==null?0:t.length,!!f&&Io(f)&&tn(w,f)&&(ae(t)||Mn(t)))}function Sh(t){var r=t.length,a=new t.constructor(r);return r&&typeof t[0]=="string"&&Te.call(t,"index")&&(a.index=t.index,a.input=t.input),a}function f1(t){return typeof t.constructor=="function"&&!Sr(t)?Yn(to(t)):{}}function Rh(t,r,a){var d=t.constructor;switch(r){case Zt:return G0(t);case we:case Se:return new d(+t);case Ge:return ch(t,a);case Jo:case Po:case e0:case t0:case n0:case r0:case o0:case i0:case a0:return Zs(t,a);case Ee:return new d;case Ae:case Wt:return new d(t);case ln:return lh(t);case ct:return new d;case Nn:return uh(t)}}function _h(t,r){var a=r.length;if(!a)return t;var d=a-1;return r[d]=(a>1?"& ":"")+r[d],r=r.join(a>2?", ":" "),t.replace(A2,`{
/* [wrapped with `+r+`] */
`)}function jh(t){return ae(t)||Mn(t)||!!(vs&&t&&t[vs])}function tn(t,r){var a=typeof t;return r=r??ye,!!r&&(a=="number"||a!="symbol"&&N2.test(t))&&t>-1&&t%1==0&&t<r}function ut(t,r,a){if(!Fe(a))return!1;var d=typeof r;return(d=="number"?gt(a)&&tn(r,a.length):d=="string"&&r in a)?Ht(a[r],t):!1}function ei(t,r){if(ae(t))return!1;var a=typeof t;return a=="number"||a=="symbol"||a=="boolean"||t==null||Ct(t)?!0:S2.test(t)||!y2.test(t)||r!=null&&t in Le(r)}function Ah(t){var r=typeof t;return r=="string"||r=="number"||r=="symbol"||r=="boolean"?t!=="__proto__":t===null}function ti(t){var r=$o(t),a=g[r];if(typeof a!="function"||!(r in pe.prototype))return!1;if(t===a)return!0;var d=Q0(a);return!!d&&t===d[0]}function Ih(t){return!!gs&&gs in t}var Th=Xr?nn:vi;function Sr(t){var r=t&&t.constructor,a=typeof r=="function"&&r.prototype||qn;return t===a}function g1(t){return t===t&&!Fe(t)}function m1(t,r){return function(a){return a==null?!1:a[t]===r&&(r!==i||t in Le(a))}}function Mh(t){var r=jo(t,function(d){return a.size===R&&a.clear(),d}),a=r.cache;return r}function Eh(t,r){var a=t[1],d=r[1],f=a|d,m=f<(V|L|U),w=d==U&&a==B||d==U&&a==oe&&t[7].length<=r[8]||d==(U|oe)&&r[7].length<=r[8]&&a==B;if(!(m||w))return t;d&V&&(t[2]=r[2],f|=a&V?0:j);var p=r[3];if(p){var S=t[3];t[3]=S?Qs(S,p,r[4]):p,t[4]=S?hn(t[3],$):r[4]}return p=r[5],p&&(S=t[5],t[5]=S?Js(S,p,r[6]):p,t[6]=S?hn(t[5],$):r[6]),p=r[7],p&&(t[7]=p),d&U&&(t[8]=t[8]==null?r[8]:ot(t[8],r[8])),t[9]==null&&(t[9]=r[9]),t[0]=r[0],t[1]=f,t}function Lh(t){var r=[];if(t!=null)for(var a in Le(t))r.push(a);return r}function Vh(t){return Jr.call(t)}function x1(t,r,a){return r=Qe(r===i?t.length-1:r,0),function(){for(var d=arguments,f=-1,m=Qe(d.length-r,0),w=E(m);++f<m;)w[f]=d[r+f];f=-1;for(var p=E(r+1);++f<r;)p[f]=d[f];return p[r]=a(w),pt(t,this,p)}}function w1(t,r){return r.length<2?t:An(t,Et(r,0,-1))}function Dh(t,r){for(var a=t.length,d=ot(r.length,a),f=ft(t);d--;){var m=r[d];t[d]=tn(m,a)?f[m]:i}return t}function ni(t,r){if(!(r==="constructor"&&typeof t[r]=="function")&&r!="__proto__")return t[r]}var v1=b1(zs),Rr=Xu||function(t,r){return tt.setTimeout(t,r)},ri=b1(oh);function p1(t,r,a){var d=r+"";return ri(t,_h(d,Bh(yh(d),a)))}function b1(t){var r=0,a=0;return function(){var d=ed(),f=P-(d-a);if(a=d,f>0){if(++r>=ne)return arguments[0]}else r=0;return t.apply(i,arguments)}}function yo(t,r){var a=-1,d=t.length,f=d-1;for(r=r===i?d:r;++a<r;){var m=N0(a,f),w=t[m];t[m]=t[a],t[a]=w}return t.length=r,t}var $1=Mh(function(t){var r=[];return t.charCodeAt(0)===46&&r.push(""),t.replace(R2,function(a,d,f,m){r.push(f?m.replace(L2,"$1"):d||a)}),r});function Gt(t){if(typeof t=="string"||Ct(t))return t;var r=t+"";return r=="0"&&1/t==-me?"-0":r}function Tn(t){if(t!=null){try{return Qr.call(t)}catch{}try{return t+""}catch{}}return""}function Bh(t,r){return At(ze,function(a){var d="_."+a[0];r&a[1]&&!Gr(t,d)&&t.push(d)}),t.sort()}function C1(t){if(t instanceof pe)return t.clone();var r=new Tt(t.__wrapped__,t.__chain__);return r.__actions__=ft(t.__actions__),r.__index__=t.__index__,r.__values__=t.__values__,r}function Hh(t,r,a){(a?ut(t,r,a):r===i)?r=1:r=Qe(ue(r),0);var d=t==null?0:t.length;if(!d||r<1)return[];for(var f=0,m=0,w=E(oo(d/r));f<d;)w[m++]=Et(t,f,f+=r);return w}function Oh(t){for(var r=-1,a=t==null?0:t.length,d=0,f=[];++r<a;){var m=t[r];m&&(f[d++]=m)}return f}function Nh(){var t=arguments.length;if(!t)return[];for(var r=E(t-1),a=arguments[0],d=t;d--;)r[d-1]=arguments[d];return dn(ae(a)?ft(a):[a],nt(r,1))}var Fh=fe(function(t,r){return We(t)?pr(t,nt(r,1,We,!0)):[]}),zh=fe(function(t,r){var a=Lt(r);return We(a)&&(a=i),We(t)?pr(t,nt(r,1,We,!0),X(a,2)):[]}),kh=fe(function(t,r){var a=Lt(r);return We(a)&&(a=i),We(t)?pr(t,nt(r,1,We,!0),i,a):[]});function Wh(t,r,a){var d=t==null?0:t.length;return d?(r=a||r===i?1:ue(r),Et(t,r<0?0:r,d)):[]}function Uh(t,r,a){var d=t==null?0:t.length;return d?(r=a||r===i?1:ue(r),r=d-r,Et(t,0,r<0?0:r)):[]}function qh(t,r){return t&&t.length?mo(t,X(r,3),!0,!0):[]}function Gh(t,r){return t&&t.length?mo(t,X(r,3),!0):[]}function Kh(t,r,a,d){var f=t==null?0:t.length;return f?(a&&typeof a!="number"&&ut(t,r,a)&&(a=0,d=f),Nd(t,r,a,d)):[]}function y1(t,r,a){var d=t==null?0:t.length;if(!d)return-1;var f=a==null?0:ue(a);return f<0&&(f=Qe(d+f,0)),Kr(t,X(r,3),f)}function S1(t,r,a){var d=t==null?0:t.length;if(!d)return-1;var f=d-1;return a!==i&&(f=ue(a),f=a<0?Qe(d+f,0):ot(f,d-1)),Kr(t,X(r,3),f,!0)}function R1(t){var r=t==null?0:t.length;return r?nt(t,1):[]}function Yh(t){var r=t==null?0:t.length;return r?nt(t,me):[]}function Zh(t,r){var a=t==null?0:t.length;return a?(r=r===i?1:ue(r),nt(t,r)):[]}function Xh(t){for(var r=-1,a=t==null?0:t.length,d={};++r<a;){var f=t[r];d[f[0]]=f[1]}return d}function _1(t){return t&&t.length?t[0]:i}function Qh(t,r,a){var d=t==null?0:t.length;if(!d)return-1;var f=a==null?0:ue(a);return f<0&&(f=Qe(d+f,0)),zn(t,r,f)}function Jh(t){var r=t==null?0:t.length;return r?Et(t,0,-1):[]}var Ph=fe(function(t){var r=Oe(t,U0);return r.length&&r[0]===t[0]?V0(r):[]}),ef=fe(function(t){var r=Lt(t),a=Oe(t,U0);return r===Lt(a)?r=i:a.pop(),a.length&&a[0]===t[0]?V0(a,X(r,2)):[]}),tf=fe(function(t){var r=Lt(t),a=Oe(t,U0);return r=typeof r=="function"?r:i,r&&a.pop(),a.length&&a[0]===t[0]?V0(a,i,r):[]});function nf(t,r){return t==null?"":Ju.call(t,r)}function Lt(t){var r=t==null?0:t.length;return r?t[r-1]:i}function rf(t,r,a){var d=t==null?0:t.length;if(!d)return-1;var f=d;return a!==i&&(f=ue(a),f=f<0?Qe(d+f,0):ot(f,d-1)),r===r?Bu(t,r,f):Kr(t,as,f,!0)}function of(t,r){return t&&t.length?Hs(t,ue(r)):i}var af=fe(j1);function j1(t,r){return t&&t.length&&r&&r.length?O0(t,r):t}function sf(t,r,a){return t&&t.length&&r&&r.length?O0(t,r,X(a,2)):t}function cf(t,r,a){return t&&t.length&&r&&r.length?O0(t,r,i,a):t}var lf=en(function(t,r){var a=t==null?0:t.length,d=T0(t,r);return Fs(t,Oe(r,function(f){return tn(f,a)?+f:f}).sort(Xs)),d});function uf(t,r){var a=[];if(!(t&&t.length))return a;var d=-1,f=[],m=t.length;for(r=X(r,3);++d<m;){var w=t[d];r(w,d,t)&&(a.push(w),f.push(d))}return Fs(t,f),a}function oi(t){return t==null?t:nd.call(t)}function df(t,r,a){var d=t==null?0:t.length;return d?(a&&typeof a!="number"&&ut(t,r,a)?(r=0,a=d):(r=r==null?0:ue(r),a=a===i?d:ue(a)),Et(t,r,a)):[]}function hf(t,r){return go(t,r)}function ff(t,r,a){return z0(t,r,X(a,2))}function gf(t,r){var a=t==null?0:t.length;if(a){var d=go(t,r);if(d<a&&Ht(t[d],r))return d}return-1}function mf(t,r){return go(t,r,!0)}function xf(t,r,a){return z0(t,r,X(a,2),!0)}function wf(t,r){var a=t==null?0:t.length;if(a){var d=go(t,r,!0)-1;if(Ht(t[d],r))return d}return-1}function vf(t){return t&&t.length?ks(t):[]}function pf(t,r){return t&&t.length?ks(t,X(r,2)):[]}function bf(t){var r=t==null?0:t.length;return r?Et(t,1,r):[]}function $f(t,r,a){return t&&t.length?(r=a||r===i?1:ue(r),Et(t,0,r<0?0:r)):[]}function Cf(t,r,a){var d=t==null?0:t.length;return d?(r=a||r===i?1:ue(r),r=d-r,Et(t,r<0?0:r,d)):[]}function yf(t,r){return t&&t.length?mo(t,X(r,3),!1,!0):[]}function Sf(t,r){return t&&t.length?mo(t,X(r,3)):[]}var Rf=fe(function(t){return mn(nt(t,1,We,!0))}),_f=fe(function(t){var r=Lt(t);return We(r)&&(r=i),mn(nt(t,1,We,!0),X(r,2))}),jf=fe(function(t){var r=Lt(t);return r=typeof r=="function"?r:i,mn(nt(t,1,We,!0),i,r)});function Af(t){return t&&t.length?mn(t):[]}function If(t,r){return t&&t.length?mn(t,X(r,2)):[]}function Tf(t,r){return r=typeof r=="function"?r:i,t&&t.length?mn(t,i,r):[]}function ii(t){if(!(t&&t.length))return[];var r=0;return t=un(t,function(a){if(We(a))return r=Qe(a.length,r),!0}),C0(r,function(a){return Oe(t,p0(a))})}function A1(t,r){if(!(t&&t.length))return[];var a=ii(t);return r==null?a:Oe(a,function(d){return pt(r,i,d)})}var Mf=fe(function(t,r){return We(t)?pr(t,r):[]}),Ef=fe(function(t){return W0(un(t,We))}),Lf=fe(function(t){var r=Lt(t);return We(r)&&(r=i),W0(un(t,We),X(r,2))}),Vf=fe(function(t){var r=Lt(t);return r=typeof r=="function"?r:i,W0(un(t,We),i,r)}),Df=fe(ii);function Bf(t,r){return Gs(t||[],r||[],vr)}function Hf(t,r){return Gs(t||[],r||[],Cr)}var Of=fe(function(t){var r=t.length,a=r>1?t[r-1]:i;return a=typeof a=="function"?(t.pop(),a):i,A1(t,a)});function I1(t){var r=g(t);return r.__chain__=!0,r}function Nf(t,r){return r(t),t}function So(t,r){return r(t)}var Ff=en(function(t){var r=t.length,a=r?t[0]:0,d=this.__wrapped__,f=function(m){return T0(m,t)};return r>1||this.__actions__.length||!(d instanceof pe)||!tn(a)?this.thru(f):(d=d.slice(a,+a+(r?1:0)),d.__actions__.push({func:So,args:[f],thisArg:i}),new Tt(d,this.__chain__).thru(function(m){return r&&!m.length&&m.push(i),m}))});function zf(){return I1(this)}function kf(){return new Tt(this.value(),this.__chain__)}function Wf(){this.__values__===i&&(this.__values__=W1(this.value()));var t=this.__index__>=this.__values__.length,r=t?i:this.__values__[this.__index__++];return{done:t,value:r}}function Uf(){return this}function qf(t){for(var r,a=this;a instanceof co;){var d=C1(a);d.__index__=0,d.__values__=i,r?f.__wrapped__=d:r=d;var f=d;a=a.__wrapped__}return f.__wrapped__=t,r}function Gf(){var t=this.__wrapped__;if(t instanceof pe){var r=t;return this.__actions__.length&&(r=new pe(this)),r=r.reverse(),r.__actions__.push({func:So,args:[oi],thisArg:i}),new Tt(r,this.__chain__)}return this.thru(oi)}function Kf(){return qs(this.__wrapped__,this.__actions__)}var Yf=xo(function(t,r,a){Te.call(t,a)?++t[a]:Jt(t,a,1)});function Zf(t,r,a){var d=ae(t)?os:Od;return a&&ut(t,r,a)&&(r=i),d(t,X(r,3))}function Xf(t,r){var a=ae(t)?un:As;return a(t,X(r,3))}var Qf=n1(y1),Jf=n1(S1);function Pf(t,r){return nt(Ro(t,r),1)}function e5(t,r){return nt(Ro(t,r),me)}function t5(t,r,a){return a=a===i?1:ue(a),nt(Ro(t,r),a)}function T1(t,r){var a=ae(t)?At:gn;return a(t,X(r,3))}function M1(t,r){var a=ae(t)?pu:js;return a(t,X(r,3))}var n5=xo(function(t,r,a){Te.call(t,a)?t[a].push(r):Jt(t,a,[r])});function r5(t,r,a,d){t=gt(t)?t:Pn(t),a=a&&!d?ue(a):0;var f=t.length;return a<0&&(a=Qe(f+a,0)),To(t)?a<=f&&t.indexOf(r,a)>-1:!!f&&zn(t,r,a)>-1}var o5=fe(function(t,r,a){var d=-1,f=typeof r=="function",m=gt(t)?E(t.length):[];return gn(t,function(w){m[++d]=f?pt(r,w,a):br(w,r,a)}),m}),i5=xo(function(t,r,a){Jt(t,a,r)});function Ro(t,r){var a=ae(t)?Oe:Vs;return a(t,X(r,3))}function a5(t,r,a,d){return t==null?[]:(ae(r)||(r=r==null?[]:[r]),a=d?i:a,ae(a)||(a=a==null?[]:[a]),Os(t,r,a))}var s5=xo(function(t,r,a){t[a?0:1].push(r)},function(){return[[],[]]});function c5(t,r,a){var d=ae(t)?w0:cs,f=arguments.length<3;return d(t,X(r,4),a,f,gn)}function l5(t,r,a){var d=ae(t)?bu:cs,f=arguments.length<3;return d(t,X(r,4),a,f,js)}function u5(t,r){var a=ae(t)?un:As;return a(t,Ao(X(r,3)))}function d5(t){var r=ae(t)?ys:nh;return r(t)}function h5(t,r,a){(a?ut(t,r,a):r===i)?r=1:r=ue(r);var d=ae(t)?Ld:rh;return d(t,r)}function f5(t){var r=ae(t)?Vd:ih;return r(t)}function g5(t){if(t==null)return 0;if(gt(t))return To(t)?Wn(t):t.length;var r=it(t);return r==Ee||r==ct?t.size:B0(t).length}function m5(t,r,a){var d=ae(t)?v0:ah;return a&&ut(t,r,a)&&(r=i),d(t,X(r,3))}var x5=fe(function(t,r){if(t==null)return[];var a=r.length;return a>1&&ut(t,r[0],r[1])?r=[]:a>2&&ut(r[0],r[1],r[2])&&(r=[r[0]]),Os(t,nt(r,1),[])}),_o=Zu||function(){return tt.Date.now()};function w5(t,r){if(typeof r!="function")throw new It(u);return t=ue(t),function(){if(--t<1)return r.apply(this,arguments)}}function E1(t,r,a){return r=a?i:r,r=t&&r==null?t.length:r,Pt(t,U,i,i,i,i,r)}function L1(t,r){var a;if(typeof r!="function")throw new It(u);return t=ue(t),function(){return--t>0&&(a=r.apply(this,arguments)),t<=1&&(r=i),a}}var ai=fe(function(t,r,a){var d=V;if(a.length){var f=hn(a,Qn(ai));d|=z}return Pt(t,d,r,a,f)}),V1=fe(function(t,r,a){var d=V|L;if(a.length){var f=hn(a,Qn(V1));d|=z}return Pt(r,d,t,a,f)});function D1(t,r,a){r=a?i:r;var d=Pt(t,B,i,i,i,i,i,r);return d.placeholder=D1.placeholder,d}function B1(t,r,a){r=a?i:r;var d=Pt(t,F,i,i,i,i,i,r);return d.placeholder=B1.placeholder,d}function H1(t,r,a){var d,f,m,w,p,S,H=0,O=!1,N=!1,W=!0;if(typeof t!="function")throw new It(u);r=Vt(r)||0,Fe(a)&&(O=!!a.leading,N="maxWait"in a,m=N?Qe(Vt(a.maxWait)||0,r):m,W="trailing"in a?!!a.trailing:W);function K(Ue){var Ot=d,on=f;return d=f=i,H=Ue,w=t.apply(on,Ot),w}function Q(Ue){return H=Ue,p=Rr(ve,r),O?K(Ue):w}function de(Ue){var Ot=Ue-S,on=Ue-H,nc=r-Ot;return N?ot(nc,m-on):nc}function J(Ue){var Ot=Ue-S,on=Ue-H;return S===i||Ot>=r||Ot<0||N&&on>=m}function ve(){var Ue=_o();if(J(Ue))return be(Ue);p=Rr(ve,de(Ue))}function be(Ue){return p=i,W&&d?K(Ue):(d=f=i,w)}function yt(){p!==i&&Ks(p),H=0,d=S=f=p=i}function dt(){return p===i?w:be(_o())}function St(){var Ue=_o(),Ot=J(Ue);if(d=arguments,f=this,S=Ue,Ot){if(p===i)return Q(S);if(N)return Ks(p),p=Rr(ve,r),K(S)}return p===i&&(p=Rr(ve,r)),w}return St.cancel=yt,St.flush=dt,St}var v5=fe(function(t,r){return _s(t,1,r)}),p5=fe(function(t,r,a){return _s(t,Vt(r)||0,a)});function b5(t){return Pt(t,se)}function jo(t,r){if(typeof t!="function"||r!=null&&typeof r!="function")throw new It(u);var a=function(){var d=arguments,f=r?r.apply(this,d):d[0],m=a.cache;if(m.has(f))return m.get(f);var w=t.apply(this,d);return a.cache=m.set(f,w)||m,w};return a.cache=new(jo.Cache||Qt),a}jo.Cache=Qt;function Ao(t){if(typeof t!="function")throw new It(u);return function(){var r=arguments;switch(r.length){case 0:return!t.call(this);case 1:return!t.call(this,r[0]);case 2:return!t.call(this,r[0],r[1]);case 3:return!t.call(this,r[0],r[1],r[2])}return!t.apply(this,r)}}function $5(t){return L1(2,t)}var C5=sh(function(t,r){r=r.length==1&&ae(r[0])?Oe(r[0],bt(X())):Oe(nt(r,1),bt(X()));var a=r.length;return fe(function(d){for(var f=-1,m=ot(d.length,a);++f<m;)d[f]=r[f].call(this,d[f]);return pt(t,this,d)})}),si=fe(function(t,r){var a=hn(r,Qn(si));return Pt(t,z,i,r,a)}),O1=fe(function(t,r){var a=hn(r,Qn(O1));return Pt(t,k,i,r,a)}),y5=en(function(t,r){return Pt(t,oe,i,i,i,r)});function S5(t,r){if(typeof t!="function")throw new It(u);return r=r===i?r:ue(r),fe(t,r)}function R5(t,r){if(typeof t!="function")throw new It(u);return r=r==null?0:Qe(ue(r),0),fe(function(a){var d=a[r],f=wn(a,0,r);return d&&dn(f,d),pt(t,this,f)})}function _5(t,r,a){var d=!0,f=!0;if(typeof t!="function")throw new It(u);return Fe(a)&&(d="leading"in a?!!a.leading:d,f="trailing"in a?!!a.trailing:f),H1(t,r,{leading:d,maxWait:r,trailing:f})}function j5(t){return E1(t,1)}function A5(t,r){return si(q0(r),t)}function I5(){if(!arguments.length)return[];var t=arguments[0];return ae(t)?t:[t]}function T5(t){return Mt(t,A)}function M5(t,r){return r=typeof r=="function"?r:i,Mt(t,A,r)}function E5(t){return Mt(t,y|A)}function L5(t,r){return r=typeof r=="function"?r:i,Mt(t,y|A,r)}function V5(t,r){return r==null||Rs(t,r,Pe(r))}function Ht(t,r){return t===r||t!==t&&r!==r}var D5=bo(L0),B5=bo(function(t,r){return t>=r}),Mn=Ms(function(){return arguments}())?Ms:function(t){return ke(t)&&Te.call(t,"callee")&&!ws.call(t,"callee")},ae=E.isArray,H5=Ja?bt(Ja):Ud;function gt(t){return t!=null&&Io(t.length)&&!nn(t)}function We(t){return ke(t)&&gt(t)}function O5(t){return t===!0||t===!1||ke(t)&&lt(t)==we}var vn=Qu||vi,N5=Pa?bt(Pa):qd;function F5(t){return ke(t)&&t.nodeType===1&&!_r(t)}function z5(t){if(t==null)return!0;if(gt(t)&&(ae(t)||typeof t=="string"||typeof t.splice=="function"||vn(t)||Jn(t)||Mn(t)))return!t.length;var r=it(t);if(r==Ee||r==ct)return!t.size;if(Sr(t))return!B0(t).length;for(var a in t)if(Te.call(t,a))return!1;return!0}function k5(t,r){return $r(t,r)}function W5(t,r,a){a=typeof a=="function"?a:i;var d=a?a(t,r):i;return d===i?$r(t,r,i,a):!!d}function ci(t){if(!ke(t))return!1;var r=lt(t);return r==ge||r==ie||typeof t.message=="string"&&typeof t.name=="string"&&!_r(t)}function U5(t){return typeof t=="number"&&ps(t)}function nn(t){if(!Fe(t))return!1;var r=lt(t);return r==Ce||r==rt||r==Y||r==Xo}function N1(t){return typeof t=="number"&&t==ue(t)}function Io(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ye}function Fe(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}function ke(t){return t!=null&&typeof t=="object"}var F1=es?bt(es):Kd;function q5(t,r){return t===r||D0(t,r,J0(r))}function G5(t,r,a){return a=typeof a=="function"?a:i,D0(t,r,J0(r),a)}function K5(t){return z1(t)&&t!=+t}function Y5(t){if(Th(t))throw new re(l);return Es(t)}function Z5(t){return t===null}function X5(t){return t==null}function z1(t){return typeof t=="number"||ke(t)&&lt(t)==Ae}function _r(t){if(!ke(t)||lt(t)!=Ze)return!1;var r=to(t);if(r===null)return!0;var a=Te.call(r,"constructor")&&r.constructor;return typeof a=="function"&&a instanceof a&&Qr.call(a)==qu}var li=ts?bt(ts):Yd;function Q5(t){return N1(t)&&t>=-ye&&t<=ye}var k1=ns?bt(ns):Zd;function To(t){return typeof t=="string"||!ae(t)&&ke(t)&&lt(t)==Wt}function Ct(t){return typeof t=="symbol"||ke(t)&&lt(t)==Nn}var Jn=rs?bt(rs):Xd;function J5(t){return t===i}function P5(t){return ke(t)&&it(t)==Cn}function eg(t){return ke(t)&&lt(t)==Qo}var tg=bo(H0),ng=bo(function(t,r){return t<=r});function W1(t){if(!t)return[];if(gt(t))return To(t)?Dt(t):ft(t);if(fr&&t[fr])return Lu(t[fr]());var r=it(t),a=r==Ee?S0:r==ct?Yr:Pn;return a(t)}function rn(t){if(!t)return t===0?t:0;if(t=Vt(t),t===me||t===-me){var r=t<0?-1:1;return r*Me}return t===t?t:0}function ue(t){var r=rn(t),a=r%1;return r===r?a?r-a:r:0}function U1(t){return t?jn(ue(t),0,he):0}function Vt(t){if(typeof t=="number")return t;if(Ct(t))return De;if(Fe(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=Fe(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=ls(t);var a=B2.test(t);return a||O2.test(t)?xu(t.slice(2),a?2:8):D2.test(t)?De:+t}function q1(t){return qt(t,mt(t))}function rg(t){return t?jn(ue(t),-ye,ye):t===0?t:0}function Ie(t){return t==null?"":$t(t)}var og=Zn(function(t,r){if(Sr(r)||gt(r)){qt(r,Pe(r),t);return}for(var a in r)Te.call(r,a)&&vr(t,a,r[a])}),G1=Zn(function(t,r){qt(r,mt(r),t)}),Mo=Zn(function(t,r,a,d){qt(r,mt(r),t,d)}),ig=Zn(function(t,r,a,d){qt(r,Pe(r),t,d)}),ag=en(T0);function sg(t,r){var a=Yn(t);return r==null?a:Ss(a,r)}var cg=fe(function(t,r){t=Le(t);var a=-1,d=r.length,f=d>2?r[2]:i;for(f&&ut(r[0],r[1],f)&&(d=1);++a<d;)for(var m=r[a],w=mt(m),p=-1,S=w.length;++p<S;){var H=w[p],O=t[H];(O===i||Ht(O,qn[H])&&!Te.call(t,H))&&(t[H]=m[H])}return t}),lg=fe(function(t){return t.push(i,l1),pt(K1,i,t)});function ug(t,r){return is(t,X(r,3),Ut)}function dg(t,r){return is(t,X(r,3),E0)}function hg(t,r){return t==null?t:M0(t,X(r,3),mt)}function fg(t,r){return t==null?t:Is(t,X(r,3),mt)}function gg(t,r){return t&&Ut(t,X(r,3))}function mg(t,r){return t&&E0(t,X(r,3))}function xg(t){return t==null?[]:ho(t,Pe(t))}function wg(t){return t==null?[]:ho(t,mt(t))}function ui(t,r,a){var d=t==null?i:An(t,r);return d===i?a:d}function vg(t,r){return t!=null&&h1(t,r,Fd)}function di(t,r){return t!=null&&h1(t,r,zd)}var pg=o1(function(t,r,a){r!=null&&typeof r.toString!="function"&&(r=Jr.call(r)),t[r]=a},fi(xt)),bg=o1(function(t,r,a){r!=null&&typeof r.toString!="function"&&(r=Jr.call(r)),Te.call(t,r)?t[r].push(a):t[r]=[a]},X),$g=fe(br);function Pe(t){return gt(t)?Cs(t):B0(t)}function mt(t){return gt(t)?Cs(t,!0):Qd(t)}function Cg(t,r){var a={};return r=X(r,3),Ut(t,function(d,f,m){Jt(a,r(d,f,m),d)}),a}function yg(t,r){var a={};return r=X(r,3),Ut(t,function(d,f,m){Jt(a,f,r(d,f,m))}),a}var Sg=Zn(function(t,r,a){fo(t,r,a)}),K1=Zn(function(t,r,a,d){fo(t,r,a,d)}),Rg=en(function(t,r){var a={};if(t==null)return a;var d=!1;r=Oe(r,function(m){return m=xn(m,t),d||(d=m.length>1),m}),qt(t,X0(t),a),d&&(a=Mt(a,y|b|A,vh));for(var f=r.length;f--;)k0(a,r[f]);return a});function _g(t,r){return Y1(t,Ao(X(r)))}var jg=en(function(t,r){return t==null?{}:Pd(t,r)});function Y1(t,r){if(t==null)return{};var a=Oe(X0(t),function(d){return[d]});return r=X(r),Ns(t,a,function(d,f){return r(d,f[0])})}function Ag(t,r,a){r=xn(r,t);var d=-1,f=r.length;for(f||(f=1,t=i);++d<f;){var m=t==null?i:t[Gt(r[d])];m===i&&(d=f,m=a),t=nn(m)?m.call(t):m}return t}function Ig(t,r,a){return t==null?t:Cr(t,r,a)}function Tg(t,r,a,d){return d=typeof d=="function"?d:i,t==null?t:Cr(t,r,a,d)}var Z1=s1(Pe),X1=s1(mt);function Mg(t,r,a){var d=ae(t),f=d||vn(t)||Jn(t);if(r=X(r,4),a==null){var m=t&&t.constructor;f?a=d?new m:[]:Fe(t)?a=nn(m)?Yn(to(t)):{}:a={}}return(f?At:Ut)(t,function(w,p,S){return r(a,w,p,S)}),a}function Eg(t,r){return t==null?!0:k0(t,r)}function Lg(t,r,a){return t==null?t:Us(t,r,q0(a))}function Vg(t,r,a,d){return d=typeof d=="function"?d:i,t==null?t:Us(t,r,q0(a),d)}function Pn(t){return t==null?[]:y0(t,Pe(t))}function Dg(t){return t==null?[]:y0(t,mt(t))}function Bg(t,r,a){return a===i&&(a=r,r=i),a!==i&&(a=Vt(a),a=a===a?a:0),r!==i&&(r=Vt(r),r=r===r?r:0),jn(Vt(t),r,a)}function Hg(t,r,a){return r=rn(r),a===i?(a=r,r=0):a=rn(a),t=Vt(t),kd(t,r,a)}function Og(t,r,a){if(a&&typeof a!="boolean"&&ut(t,r,a)&&(r=a=i),a===i&&(typeof r=="boolean"?(a=r,r=i):typeof t=="boolean"&&(a=t,t=i)),t===i&&r===i?(t=0,r=1):(t=rn(t),r===i?(r=t,t=0):r=rn(r)),t>r){var d=t;t=r,r=d}if(a||t%1||r%1){var f=bs();return ot(t+f*(r-t+mu("1e-"+((f+"").length-1))),r)}return N0(t,r)}var Ng=Xn(function(t,r,a){return r=r.toLowerCase(),t+(a?Q1(r):r)});function Q1(t){return hi(Ie(t).toLowerCase())}function J1(t){return t=Ie(t),t&&t.replace(F2,Au).replace(iu,"")}function Fg(t,r,a){t=Ie(t),r=$t(r);var d=t.length;a=a===i?d:jn(ue(a),0,d);var f=a;return a-=r.length,a>=0&&t.slice(a,f)==r}function zg(t){return t=Ie(t),t&&b2.test(t)?t.replace(Ia,Iu):t}function kg(t){return t=Ie(t),t&&_2.test(t)?t.replace(s0,"\\$&"):t}var Wg=Xn(function(t,r,a){return t+(a?"-":"")+r.toLowerCase()}),Ug=Xn(function(t,r,a){return t+(a?" ":"")+r.toLowerCase()}),qg=t1("toLowerCase");function Gg(t,r,a){t=Ie(t),r=ue(r);var d=r?Wn(t):0;if(!r||d>=r)return t;var f=(r-d)/2;return po(io(f),a)+t+po(oo(f),a)}function Kg(t,r,a){t=Ie(t),r=ue(r);var d=r?Wn(t):0;return r&&d<r?t+po(r-d,a):t}function Yg(t,r,a){t=Ie(t),r=ue(r);var d=r?Wn(t):0;return r&&d<r?po(r-d,a)+t:t}function Zg(t,r,a){return a||r==null?r=0:r&&(r=+r),td(Ie(t).replace(c0,""),r||0)}function Xg(t,r,a){return(a?ut(t,r,a):r===i)?r=1:r=ue(r),F0(Ie(t),r)}function Qg(){var t=arguments,r=Ie(t[0]);return t.length<3?r:r.replace(t[1],t[2])}var Jg=Xn(function(t,r,a){return t+(a?"_":"")+r.toLowerCase()});function Pg(t,r,a){return a&&typeof a!="number"&&ut(t,r,a)&&(r=a=i),a=a===i?he:a>>>0,a?(t=Ie(t),t&&(typeof r=="string"||r!=null&&!li(r))&&(r=$t(r),!r&&kn(t))?wn(Dt(t),0,a):t.split(r,a)):[]}var e3=Xn(function(t,r,a){return t+(a?" ":"")+hi(r)});function t3(t,r,a){return t=Ie(t),a=a==null?0:jn(ue(a),0,t.length),r=$t(r),t.slice(a,a+r.length)==r}function n3(t,r,a){var d=g.templateSettings;a&&ut(t,r,a)&&(r=i),t=Ie(t),r=Mo({},r,d,c1);var f=Mo({},r.imports,d.imports,c1),m=Pe(f),w=y0(f,m),p,S,H=0,O=r.interpolate||Wr,N="__p += '",W=R0((r.escape||Wr).source+"|"+O.source+"|"+(O===Ta?V2:Wr).source+"|"+(r.evaluate||Wr).source+"|$","g"),K="//# sourceURL="+(Te.call(r,"sourceURL")?(r.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++uu+"]")+`
`;t.replace(W,function(J,ve,be,yt,dt,St){return be||(be=yt),N+=t.slice(H,St).replace(z2,Tu),ve&&(p=!0,N+=`' +
__e(`+ve+`) +
'`),dt&&(S=!0,N+=`';
`+dt+`;
__p += '`),be&&(N+=`' +
((__t = (`+be+`)) == null ? '' : __t) +
'`),H=St+J.length,J}),N+=`';
`;var Q=Te.call(r,"variable")&&r.variable;if(!Q)N=`with (obj) {
`+N+`
}
`;else if(E2.test(Q))throw new re(x);N=(S?N.replace(x2,""):N).replace(w2,"$1").replace(v2,"$1;"),N="function("+(Q||"obj")+`) {
`+(Q?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(p?", __e = _.escape":"")+(S?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+N+`return __p
}`;var de=ec(function(){return Re(m,K+"return "+N).apply(i,w)});if(de.source=N,ci(de))throw de;return de}function r3(t){return Ie(t).toLowerCase()}function o3(t){return Ie(t).toUpperCase()}function i3(t,r,a){if(t=Ie(t),t&&(a||r===i))return ls(t);if(!t||!(r=$t(r)))return t;var d=Dt(t),f=Dt(r),m=us(d,f),w=ds(d,f)+1;return wn(d,m,w).join("")}function a3(t,r,a){if(t=Ie(t),t&&(a||r===i))return t.slice(0,fs(t)+1);if(!t||!(r=$t(r)))return t;var d=Dt(t),f=ds(d,Dt(r))+1;return wn(d,0,f).join("")}function s3(t,r,a){if(t=Ie(t),t&&(a||r===i))return t.replace(c0,"");if(!t||!(r=$t(r)))return t;var d=Dt(t),f=us(d,Dt(r));return wn(d,f).join("")}function c3(t,r){var a=le,d=$e;if(Fe(r)){var f="separator"in r?r.separator:f;a="length"in r?ue(r.length):a,d="omission"in r?$t(r.omission):d}t=Ie(t);var m=t.length;if(kn(t)){var w=Dt(t);m=w.length}if(a>=m)return t;var p=a-Wn(d);if(p<1)return d;var S=w?wn(w,0,p).join(""):t.slice(0,p);if(f===i)return S+d;if(w&&(p+=S.length-p),li(f)){if(t.slice(p).search(f)){var H,O=S;for(f.global||(f=R0(f.source,Ie(Ma.exec(f))+"g")),f.lastIndex=0;H=f.exec(O);)var N=H.index;S=S.slice(0,N===i?p:N)}}else if(t.indexOf($t(f),p)!=p){var W=S.lastIndexOf(f);W>-1&&(S=S.slice(0,W))}return S+d}function l3(t){return t=Ie(t),t&&p2.test(t)?t.replace(Aa,Hu):t}var u3=Xn(function(t,r,a){return t+(a?" ":"")+r.toUpperCase()}),hi=t1("toUpperCase");function P1(t,r,a){return t=Ie(t),r=a?i:r,r===i?Eu(t)?Fu(t):yu(t):t.match(r)||[]}var ec=fe(function(t,r){try{return pt(t,i,r)}catch(a){return ci(a)?a:new re(a)}}),d3=en(function(t,r){return At(r,function(a){a=Gt(a),Jt(t,a,ai(t[a],t))}),t});function h3(t){var r=t==null?0:t.length,a=X();return t=r?Oe(t,function(d){if(typeof d[1]!="function")throw new It(u);return[a(d[0]),d[1]]}):[],fe(function(d){for(var f=-1;++f<r;){var m=t[f];if(pt(m[0],this,d))return pt(m[1],this,d)}})}function f3(t){return Hd(Mt(t,y))}function fi(t){return function(){return t}}function g3(t,r){return t==null||t!==t?r:t}var m3=r1(),x3=r1(!0);function xt(t){return t}function gi(t){return Ls(typeof t=="function"?t:Mt(t,y))}function w3(t){return Ds(Mt(t,y))}function v3(t,r){return Bs(t,Mt(r,y))}var p3=fe(function(t,r){return function(a){return br(a,t,r)}}),b3=fe(function(t,r){return function(a){return br(t,a,r)}});function mi(t,r,a){var d=Pe(r),f=ho(r,d);a==null&&!(Fe(r)&&(f.length||!d.length))&&(a=r,r=t,t=this,f=ho(r,Pe(r)));var m=!(Fe(a)&&"chain"in a)||!!a.chain,w=nn(t);return At(f,function(p){var S=r[p];t[p]=S,w&&(t.prototype[p]=function(){var H=this.__chain__;if(m||H){var O=t(this.__wrapped__),N=O.__actions__=ft(this.__actions__);return N.push({func:S,args:arguments,thisArg:t}),O.__chain__=H,O}return S.apply(t,dn([this.value()],arguments))})}),t}function $3(){return tt._===this&&(tt._=Gu),this}function xi(){}function C3(t){return t=ue(t),fe(function(r){return Hs(r,t)})}var y3=K0(Oe),S3=K0(os),R3=K0(v0);function tc(t){return ei(t)?p0(Gt(t)):eh(t)}function _3(t){return function(r){return t==null?i:An(t,r)}}var j3=i1(),A3=i1(!0);function wi(){return[]}function vi(){return!1}function I3(){return{}}function T3(){return""}function M3(){return!0}function E3(t,r){if(t=ue(t),t<1||t>ye)return[];var a=he,d=ot(t,he);r=X(r),t-=he;for(var f=C0(d,r);++a<t;)r(a);return f}function L3(t){return ae(t)?Oe(t,Gt):Ct(t)?[t]:ft($1(Ie(t)))}function V3(t){var r=++Uu;return Ie(t)+r}var D3=vo(function(t,r){return t+r},0),B3=Y0("ceil"),H3=vo(function(t,r){return t/r},1),O3=Y0("floor");function N3(t){return t&&t.length?uo(t,xt,L0):i}function F3(t,r){return t&&t.length?uo(t,X(r,2),L0):i}function z3(t){return ss(t,xt)}function k3(t,r){return ss(t,X(r,2))}function W3(t){return t&&t.length?uo(t,xt,H0):i}function U3(t,r){return t&&t.length?uo(t,X(r,2),H0):i}var q3=vo(function(t,r){return t*r},1),G3=Y0("round"),K3=vo(function(t,r){return t-r},0);function Y3(t){return t&&t.length?$0(t,xt):0}function Z3(t,r){return t&&t.length?$0(t,X(r,2)):0}return g.after=w5,g.ary=E1,g.assign=og,g.assignIn=G1,g.assignInWith=Mo,g.assignWith=ig,g.at=ag,g.before=L1,g.bind=ai,g.bindAll=d3,g.bindKey=V1,g.castArray=I5,g.chain=I1,g.chunk=Hh,g.compact=Oh,g.concat=Nh,g.cond=h3,g.conforms=f3,g.constant=fi,g.countBy=Yf,g.create=sg,g.curry=D1,g.curryRight=B1,g.debounce=H1,g.defaults=cg,g.defaultsDeep=lg,g.defer=v5,g.delay=p5,g.difference=Fh,g.differenceBy=zh,g.differenceWith=kh,g.drop=Wh,g.dropRight=Uh,g.dropRightWhile=qh,g.dropWhile=Gh,g.fill=Kh,g.filter=Xf,g.flatMap=Pf,g.flatMapDeep=e5,g.flatMapDepth=t5,g.flatten=R1,g.flattenDeep=Yh,g.flattenDepth=Zh,g.flip=b5,g.flow=m3,g.flowRight=x3,g.fromPairs=Xh,g.functions=xg,g.functionsIn=wg,g.groupBy=n5,g.initial=Jh,g.intersection=Ph,g.intersectionBy=ef,g.intersectionWith=tf,g.invert=pg,g.invertBy=bg,g.invokeMap=o5,g.iteratee=gi,g.keyBy=i5,g.keys=Pe,g.keysIn=mt,g.map=Ro,g.mapKeys=Cg,g.mapValues=yg,g.matches=w3,g.matchesProperty=v3,g.memoize=jo,g.merge=Sg,g.mergeWith=K1,g.method=p3,g.methodOf=b3,g.mixin=mi,g.negate=Ao,g.nthArg=C3,g.omit=Rg,g.omitBy=_g,g.once=$5,g.orderBy=a5,g.over=y3,g.overArgs=C5,g.overEvery=S3,g.overSome=R3,g.partial=si,g.partialRight=O1,g.partition=s5,g.pick=jg,g.pickBy=Y1,g.property=tc,g.propertyOf=_3,g.pull=af,g.pullAll=j1,g.pullAllBy=sf,g.pullAllWith=cf,g.pullAt=lf,g.range=j3,g.rangeRight=A3,g.rearg=y5,g.reject=u5,g.remove=uf,g.rest=S5,g.reverse=oi,g.sampleSize=h5,g.set=Ig,g.setWith=Tg,g.shuffle=f5,g.slice=df,g.sortBy=x5,g.sortedUniq=vf,g.sortedUniqBy=pf,g.split=Pg,g.spread=R5,g.tail=bf,g.take=$f,g.takeRight=Cf,g.takeRightWhile=yf,g.takeWhile=Sf,g.tap=Nf,g.throttle=_5,g.thru=So,g.toArray=W1,g.toPairs=Z1,g.toPairsIn=X1,g.toPath=L3,g.toPlainObject=q1,g.transform=Mg,g.unary=j5,g.union=Rf,g.unionBy=_f,g.unionWith=jf,g.uniq=Af,g.uniqBy=If,g.uniqWith=Tf,g.unset=Eg,g.unzip=ii,g.unzipWith=A1,g.update=Lg,g.updateWith=Vg,g.values=Pn,g.valuesIn=Dg,g.without=Mf,g.words=P1,g.wrap=A5,g.xor=Ef,g.xorBy=Lf,g.xorWith=Vf,g.zip=Df,g.zipObject=Bf,g.zipObjectDeep=Hf,g.zipWith=Of,g.entries=Z1,g.entriesIn=X1,g.extend=G1,g.extendWith=Mo,mi(g,g),g.add=D3,g.attempt=ec,g.camelCase=Ng,g.capitalize=Q1,g.ceil=B3,g.clamp=Bg,g.clone=T5,g.cloneDeep=E5,g.cloneDeepWith=L5,g.cloneWith=M5,g.conformsTo=V5,g.deburr=J1,g.defaultTo=g3,g.divide=H3,g.endsWith=Fg,g.eq=Ht,g.escape=zg,g.escapeRegExp=kg,g.every=Zf,g.find=Qf,g.findIndex=y1,g.findKey=ug,g.findLast=Jf,g.findLastIndex=S1,g.findLastKey=dg,g.floor=O3,g.forEach=T1,g.forEachRight=M1,g.forIn=hg,g.forInRight=fg,g.forOwn=gg,g.forOwnRight=mg,g.get=ui,g.gt=D5,g.gte=B5,g.has=vg,g.hasIn=di,g.head=_1,g.identity=xt,g.includes=r5,g.indexOf=Qh,g.inRange=Hg,g.invoke=$g,g.isArguments=Mn,g.isArray=ae,g.isArrayBuffer=H5,g.isArrayLike=gt,g.isArrayLikeObject=We,g.isBoolean=O5,g.isBuffer=vn,g.isDate=N5,g.isElement=F5,g.isEmpty=z5,g.isEqual=k5,g.isEqualWith=W5,g.isError=ci,g.isFinite=U5,g.isFunction=nn,g.isInteger=N1,g.isLength=Io,g.isMap=F1,g.isMatch=q5,g.isMatchWith=G5,g.isNaN=K5,g.isNative=Y5,g.isNil=X5,g.isNull=Z5,g.isNumber=z1,g.isObject=Fe,g.isObjectLike=ke,g.isPlainObject=_r,g.isRegExp=li,g.isSafeInteger=Q5,g.isSet=k1,g.isString=To,g.isSymbol=Ct,g.isTypedArray=Jn,g.isUndefined=J5,g.isWeakMap=P5,g.isWeakSet=eg,g.join=nf,g.kebabCase=Wg,g.last=Lt,g.lastIndexOf=rf,g.lowerCase=Ug,g.lowerFirst=qg,g.lt=tg,g.lte=ng,g.max=N3,g.maxBy=F3,g.mean=z3,g.meanBy=k3,g.min=W3,g.minBy=U3,g.stubArray=wi,g.stubFalse=vi,g.stubObject=I3,g.stubString=T3,g.stubTrue=M3,g.multiply=q3,g.nth=of,g.noConflict=$3,g.noop=xi,g.now=_o,g.pad=Gg,g.padEnd=Kg,g.padStart=Yg,g.parseInt=Zg,g.random=Og,g.reduce=c5,g.reduceRight=l5,g.repeat=Xg,g.replace=Qg,g.result=Ag,g.round=G3,g.runInContext=C,g.sample=d5,g.size=g5,g.snakeCase=Jg,g.some=m5,g.sortedIndex=hf,g.sortedIndexBy=ff,g.sortedIndexOf=gf,g.sortedLastIndex=mf,g.sortedLastIndexBy=xf,g.sortedLastIndexOf=wf,g.startCase=e3,g.startsWith=t3,g.subtract=K3,g.sum=Y3,g.sumBy=Z3,g.template=n3,g.times=E3,g.toFinite=rn,g.toInteger=ue,g.toLength=U1,g.toLower=r3,g.toNumber=Vt,g.toSafeInteger=rg,g.toString=Ie,g.toUpper=o3,g.trim=i3,g.trimEnd=a3,g.trimStart=s3,g.truncate=c3,g.unescape=l3,g.uniqueId=V3,g.upperCase=u3,g.upperFirst=hi,g.each=T1,g.eachRight=M1,g.first=_1,mi(g,function(){var t={};return Ut(g,function(r,a){Te.call(g.prototype,a)||(t[a]=r)}),t}(),{chain:!1}),g.VERSION=c,At(["bind","bindKey","curry","curryRight","partial","partialRight"],function(t){g[t].placeholder=g}),At(["drop","take"],function(t,r){pe.prototype[t]=function(a){a=a===i?1:Qe(ue(a),0);var d=this.__filtered__&&!r?new pe(this):this.clone();return d.__filtered__?d.__takeCount__=ot(a,d.__takeCount__):d.__views__.push({size:ot(a,he),type:t+(d.__dir__<0?"Right":"")}),d},pe.prototype[t+"Right"]=function(a){return this.reverse()[t](a).reverse()}}),At(["filter","map","takeWhile"],function(t,r){var a=r+1,d=a==ee||a==je;pe.prototype[t]=function(f){var m=this.clone();return m.__iteratees__.push({iteratee:X(f,3),type:a}),m.__filtered__=m.__filtered__||d,m}}),At(["head","last"],function(t,r){var a="take"+(r?"Right":"");pe.prototype[t]=function(){return this[a](1).value()[0]}}),At(["initial","tail"],function(t,r){var a="drop"+(r?"":"Right");pe.prototype[t]=function(){return this.__filtered__?new pe(this):this[a](1)}}),pe.prototype.compact=function(){return this.filter(xt)},pe.prototype.find=function(t){return this.filter(t).head()},pe.prototype.findLast=function(t){return this.reverse().find(t)},pe.prototype.invokeMap=fe(function(t,r){return typeof t=="function"?new pe(this):this.map(function(a){return br(a,t,r)})}),pe.prototype.reject=function(t){return this.filter(Ao(X(t)))},pe.prototype.slice=function(t,r){t=ue(t);var a=this;return a.__filtered__&&(t>0||r<0)?new pe(a):(t<0?a=a.takeRight(-t):t&&(a=a.drop(t)),r!==i&&(r=ue(r),a=r<0?a.dropRight(-r):a.take(r-t)),a)},pe.prototype.takeRightWhile=function(t){return this.reverse().takeWhile(t).reverse()},pe.prototype.toArray=function(){return this.take(he)},Ut(pe.prototype,function(t,r){var a=/^(?:filter|find|map|reject)|While$/.test(r),d=/^(?:head|last)$/.test(r),f=g[d?"take"+(r=="last"?"Right":""):r],m=d||/^find/.test(r);f&&(g.prototype[r]=function(){var w=this.__wrapped__,p=d?[1]:arguments,S=w instanceof pe,H=p[0],O=S||ae(w),N=function(ve){var be=f.apply(g,dn([ve],p));return d&&W?be[0]:be};O&&a&&typeof H=="function"&&H.length!=1&&(S=O=!1);var W=this.__chain__,K=!!this.__actions__.length,Q=m&&!W,de=S&&!K;if(!m&&O){w=de?w:new pe(this);var J=t.apply(w,p);return J.__actions__.push({func:So,args:[N],thisArg:i}),new Tt(J,W)}return Q&&de?t.apply(this,p):(J=this.thru(N),Q?d?J.value()[0]:J.value():J)})}),At(["pop","push","shift","sort","splice","unshift"],function(t){var r=Zr[t],a=/^(?:push|sort|unshift)$/.test(t)?"tap":"thru",d=/^(?:pop|shift)$/.test(t);g.prototype[t]=function(){var f=arguments;if(d&&!this.__chain__){var m=this.value();return r.apply(ae(m)?m:[],f)}return this[a](function(w){return r.apply(ae(w)?w:[],f)})}}),Ut(pe.prototype,function(t,r){var a=g[r];if(a){var d=a.name+"";Te.call(Kn,d)||(Kn[d]=[]),Kn[d].push({name:r,func:a})}}),Kn[wo(i,L).name]=[{name:"wrapper",func:i}],pe.prototype.clone=cd,pe.prototype.reverse=ld,pe.prototype.value=ud,g.prototype.at=Ff,g.prototype.chain=zf,g.prototype.commit=kf,g.prototype.next=Wf,g.prototype.plant=qf,g.prototype.reverse=Gf,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=Kf,g.prototype.first=g.prototype.head,fr&&(g.prototype[fr]=Uf),g},Un=zu();yn?((yn.exports=Un)._=Un,g0._=Un):tt._=Un}).call(jr)})(Fo,Fo.exports);Fo.exports;const $n=(e="&")=>({theme:n,$hasError:i=!1})=>te`
    outline: none;
    box-shadow: none;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${i?n.colors.danger600:n.colors.primary600};
      box-shadow: ${i?n.colors.danger600:n.colors.primary600} 0px 0px 0px 2px;
    }
  `,[vp,vt]=Hr("Field",{}),Hn=h.forwardRef(({children:e,name:n,error:i=!1,hint:c,id:o,required:l=!1,...u},x)=>{const v=kt(o),[R,$]=h.useState();return s.jsx(vp,{name:n,id:v,error:i,hint:c,required:l,labelNode:R,setLabelNode:$,children:s.jsx(G,{direction:"column",alignItems:"stretch",gap:1,ref:x,...u,children:e})})}),Ca=h.forwardRef(({children:e,action:n,...i},c)=>{const{id:o,required:l,setLabelNode:u}=vt("Label"),x=wt(c,u);return e?s.jsxs(pp,{ref:x,variant:"pi",textColor:"neutral800",fontWeight:"bold",...i,id:`${o}-label`,htmlFor:o,tag:"label",ellipsis:!0,children:[e,l&&s.jsx(ce,{"aria-hidden":!0,lineHeight:"1em",textColor:"danger600",children:"*"}),n&&s.jsx(bp,{marginLeft:1,children:n})]}):null}),pp=T(ce)`
  display: flex;
`,bp=T(G)`
  line-height: 0;
  color: ${({theme:e})=>e.colors.neutral500};
`,Yo=h.forwardRef(({endAction:e,startAction:n,disabled:i=!1,onChange:c,hasError:o,required:l,className:u,size:x="M",...v},R)=>{const{id:$,error:y,hint:b,name:A,required:M}=vt("Input");let I;y?I=`${$}-error`:b&&(I=`${$}-hint`);const V=!!y,L=h.useRef(null),j=h.useRef(null),B=wt(j,R),F=z=>{!i&&c&&c(z)};return h.useLayoutEffect(()=>{if(L.current&&j.current){const z=L.current.offsetWidth,k=j.current;if(k){const U=z+8+16;k.style.paddingRight=`${U}px`}}},[e]),s.jsxs(yp,{gap:2,justifyContent:"space-between",$hasError:V||o,$disabled:i,$size:x,$hasLeftAction:!!n,$hasRightAction:!!e,className:u,children:[n,s.jsx($p,{id:$,name:A,ref:B,$size:x,"aria-describedby":I,"aria-invalid":V||o,"aria-disabled":i,disabled:i,"data-disabled":i?"":void 0,onChange:F,"aria-required":M||l,$hasLeftAction:!!n,$hasRightAction:!!e,...v}),e&&s.jsx(Cp,{ref:L,children:e})]})}),$p=T.input`
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
`,Cp=T(G)`
  position: absolute;
  right: ${({theme:e})=>e.spaces[4]};
  top: 50%;
  transform: translateY(-50%);
`,yp=T(G)`
  border: 1px solid ${({theme:e,$hasError:n})=>n?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  padding-inline-start: ${({$hasLeftAction:e,theme:n})=>e?n.spaces[4]:0};
  position: relative;

  ${$n()}
  ${({theme:e,$disabled:n})=>n?te`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0};
`,ql=()=>{const{id:e,hint:n,error:i}=vt("Hint");return!n||i?null:s.jsx(ce,{variant:"pi",tag:"p",id:`${e}-hint`,textColor:"neutral600",children:n})},Gl=()=>{const{id:e,error:n}=vt("Error");return!n||typeof n!="string"?null:s.jsx(ce,{variant:"pi",tag:"p",id:`${e}-error`,textColor:"danger600","data-strapi-field-error":!0,children:n})},Kl=h.forwardRef(({label:e,children:n,...i},c)=>s.jsx(Sp,{justifyContent:"unset",background:"transparent",borderStyle:"none",...i,type:"button",tag:"button",ref:c,children:s.jsx(Er,{label:e,children:n})})),Sp=T(G)`
  font-size: 1.6rem;
  padding: 0;
`,pn=Object.freeze(Object.defineProperty({__proto__:null,Action:Kl,Error:Gl,Hint:ql,Input:Yo,Label:Ca,Root:Hn,useField:vt},Symbol.toStringTag,{value:"Module"}));h.forwardRef(({actions:e,children:n,error:i,hint:c,label:o,labelAction:l,nextLabel:u,onNext:x,onPrevious:v,previousLabel:R,required:$,secondaryLabel:y,selectedSlide:b,id:A,...M},I)=>{const V=kt(A);return s.jsx(Hn,{hint:c,error:i,id:V,required:$,children:s.jsxs(G,{direction:"column",alignItems:"stretch",gap:1,children:[o&&s.jsx(Ca,{action:l,children:o}),s.jsx(wp,{ref:I,actions:e,label:o,nextLabel:u,onNext:x,onPrevious:v,previousLabel:R,secondaryLabel:y,selectedSlide:b,id:V,...M,children:n}),s.jsx(ql,{}),s.jsx(Gl,{})]})})});T(Z)`
  ${Rl}
`;const Rp="data:image/svg+xml,%3csvg%20width='63'%20height='63'%20viewBox='0%200%2063%2063'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M42.5563%2011.9816C39.484%2010.3071%2035.8575%209.29097%2032.3354%209.13521C28.6443%208.92888%2024.8295%209.72318%2021.3336%2011.4129C20.9123%2011.5901%2020.5376%2011.8101%2020.1722%2012.0249L20.0108%2012.1179C19.8774%2012.1951%2019.7441%2012.2724%2019.608%2012.3536C19.3253%2012.5146%2019.0492%2012.6744%2018.7544%2012.8792C18.5463%2013.0329%2018.3395%2013.1759%2018.1301%2013.323C17.5658%2013.7208%2016.9868%2014.1317%2016.4983%2014.5979C14.8476%2015.9524%2013.5571%2017.6075%2012.6071%2018.9214C10.4365%2022.1566%209.08622%2025.9567%208.80702%2029.6143L8.7764%2030.1588C8.73328%2030.9196%208.68476%2031.7057%208.75353%2032.4555C8.76648%2032.6084%208.7661%2032.7638%208.77506%2032.914C8.78895%2033.229%208.80152%2033.5373%208.846%2033.8672L9.07396%2035.4221C9.09756%2035.5764%209.1198%2035.7413%209.1633%2035.9263L9.65919%2037.9272L10.138%2039.2823C10.2729%2039.6673%2010.4158%2040.0751%2010.6%2040.43C12.0292%2043.637%2014.1425%2046.4578%2016.7063%2048.585C19.0508%2050.5296%2021.824%2052.0023%2024.7491%2052.8452L26.2371%2053.2376C26.3781%2053.2693%2026.4926%2053.2889%2026.6031%2053.3058L26.7775%2053.3311C27.0052%2053.3636%2027.2195%2053.3986%2027.4445%2053.435C27.8598%2053.5076%2028.2672%2053.5748%2028.7079%2053.6183L30.5641%2053.7229C30.9516%2053.7249%2031.3352%2053.7068%2031.7081%2053.6874C31.9039%2053.681%2032.0984%2053.6681%2032.3288%2053.662C34.5253%2053.4772%2036.5106%2053.0634%2038.0516%2052.4652C38.1769%2052.4171%2038.3008%2052.3796%2038.4234%2052.3355C38.6727%2052.2499%2038.9259%2052.167%2039.1432%2052.0599L40.8591%2051.2626L42.5702%2050.266C42.9009%2050.0682%2043.0205%2049.6414%2042.8282%2049.2984C42.632%2048.9526%2042.2034%2048.8308%2041.8634%2049.0166L40.1792%2049.9218L38.4995%2050.6224C38.3169%2050.6953%2038.121%2050.7534%2037.9224%2050.8155C37.7838%2050.8489%2037.6518%2050.8983%2037.5012%2050.9408C36.0711%2051.435%2034.2445%2051.7425%2032.244%2051.8346C32.0442%2051.8383%2031.8471%2051.8379%2031.654%2051.8403C31.3051%2051.8414%2030.9602%2051.8451%2030.6392%2051.8305L28.9177%2051.6725C28.5476%2051.619%2028.1695%2051.5427%2027.7848%2051.4678C27.5639%2051.4167%2027.3376%2051.3737%2027.1299%2051.3374L26.9529%2051.2987C26.8704%2051.2834%2026.7772%2051.2667%2026.7333%2051.2543L25.3466%2050.8322C22.7651%2049.9789%2020.33%2048.5729%2018.2942%2046.7557C16.1056%2044.7951%2014.3339%2042.2335%2013.1742%2039.3582C12.0276%2036.6013%2011.5988%2033.2792%2011.9716%2030.0076C12.3145%2027.0213%2013.3948%2024.1635%2015.1858%2021.5083C15.3034%2021.3339%2015.421%2021.1596%2015.5212%2021.0196C16.4309%2019.8688%2017.5408%2018.5589%2018.9483%2017.496C19.3367%2017.1525%2019.7862%2016.856%2020.2611%2016.5478C20.4878%2016.4009%2020.7079%2016.2553%2020.8907%2016.1306C21.0974%2016.0048%2021.3188%2015.8831%2021.5348%2015.7694C21.6761%2015.6975%2021.8162%2015.619%2021.9388%2015.5576L22.1002%2015.4646C22.4002%2015.3037%2022.6749%2015.1546%2022.9908%2015.039L24.1186%2014.5715C24.3399%2014.4844%2024.5718%2014.4159%2024.7997%2014.3447C24.953%2014.2982%2025.0982%2014.2635%2025.2635%2014.2078C25.786%2014.0182%2026.3283%2013.9112%2026.9105%2013.7965C27.117%2013.7571%2027.3302%2013.7163%2027.5608%2013.6585C27.7553%2013.611%2027.9737%2013.5969%2028.2082%2013.5762C28.364%2013.5603%2028.5172%2013.5483%2028.6318%2013.5333C28.7876%2013.5173%2028.9342%2013.5066%2029.0927%2013.4867C29.3285%2013.4555%2029.5456%2013.4347%2029.7494%2013.4337C30.0237%2013.44%2030.2994%2013.4357%2030.5777%2013.4274C31.0811%2013.421%2031.5579%2013.4197%2032.0318%2013.4914C34.9664%2013.7352%2037.7144%2014.6085%2040.2052%2016.0868C42.3489%2017.3655%2044.2716%2019.1525%2045.7607%2021.264C47.0255%2023.0628%2047.9756%2025.0528%2048.4928%2027.0393C48.572%2027.3176%2048.6299%2027.5931%2048.6839%2027.8659C48.7154%2028.0428%2048.7563%2028.2145%2048.7892%2028.3636C48.8037%2028.4541%2048.8208%2028.5406%2048.8445%2028.6258C48.8749%2028.7443%2048.8986%2028.864%2048.9116%2028.9651L48.9793%2029.6047C48.9922%2029.7748%2049.0132%2029.9331%2049.0301%2030.0887C49.0668%2030.3268%2049.0889%2030.5608%2049.0964%2030.7561L49.1083%2031.9001C49.1312%2032.3307%2049.089%2032.7116%2049.0522%2033.0673C49.0384%2033.2598%2049.0126%2033.4443%2049.0123%2033.5824C48.9961%2033.6926%2048.9918%2033.7935%2048.9836%2033.8917C48.9753%2034.0072%2048.9724%2034.1148%2048.9414%2034.2554L48.5449%2036.3059C48.3134%2037.8623%2049.3793%2039.3365%2050.9488%2039.5822C52.0417%2039.7601%2053.1536%2039.2819%2053.7711%2038.3664C54.0063%2038.0176%2054.1604%2037.6257%2054.2227%2037.2064L54.5217%2035.2574C54.5514%2035.0756%2054.572%2034.83%2054.5846%2034.5791L54.6028%2034.2338C54.6098%2034.0598%2054.6223%2033.8779%2054.6347%2033.6788C54.6734%2033.1052%2054.7163%2032.4479%2054.6619%2031.8058L54.5867%2030.4289C54.5622%2030.0952%2054.5097%2029.76%2054.4559%2029.4181C54.431%2029.2572%2054.4048%2029.0896%2054.3826%2028.9074L54.2687%2028.104C54.2332%2027.9244%2054.1804%2027.7273%2054.1329%2027.5396L54.0643%2027.2454C54.0195%2027.071%2053.9773%2026.8927%2053.9338%2026.7076C53.8455%2026.3309%2053.7479%2025.9422%2053.613%2025.5571C52.84%2023.0292%2051.5383%2020.5194%2049.8338%2018.2799C47.8544%2015.682%2045.3333%2013.5087%2042.5563%2011.9816Z'%20fill='%234945FF'/%3e%3c/svg%3e",_p=h.forwardRef(({children:e,small:n=!1,...i},c)=>s.jsxs("div",{role:"alert","aria-live":"assertive",ref:c,...i,children:[s.jsx(cr,{children:e}),s.jsx(Ap,{src:Rp,"aria-hidden":!0,$small:n})]})),jp=at`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,Ap=T.img`
  animation: ${jp} 1s infinite linear;
  will-change: transform;
  ${({$small:e,theme:n})=>e&&`width: ${n.spaces[6]}; height: ${n.spaces[6]};`}
`,Ip=h.forwardRef(({allowCustomValue:e,autocomplete:n,children:i,className:c,clearLabel:o="clear",creatable:l=!1,createMessage:u=he=>`Create "${he}"`,defaultFilterValue:x,defaultTextValue:v,defaultOpen:R=!1,open:$,onOpenChange:y,disabled:b=!1,hasError:A,id:M,filterValue:I,hasMoreItems:V=!1,isPrintableCharacter:L,loading:j=!1,loadingMessage:B="Loading content...",name:F,noOptionsMessage:z=()=>"No results found",onChange:k,onClear:U,onCreateOption:oe,onFilterValueChange:se,onInputChange:le,onTextValueChange:$e,onLoadMore:ne,placeholder:P="Select or enter a value",required:ee=!1,size:_e="M",startIcon:je,textValue:me,value:ye,...Me},De)=>{const[he,Je]=Kt({prop:$,defaultProp:R,onChange:y}),[xe,ze]=Kt({prop:me,defaultProp:e&&!v?ye:v,onChange:$e}),[Ne,Ye]=Kt({prop:I,defaultProp:x,onChange:se}),Y=h.useRef(null),we=h.useRef(null),Se=wt(we,De),ie=h.useRef(null),ge=Ge=>{U&&!b&&(ze(""),Ye(""),U(Ge),we.current.focus())},Ce=Ge=>{Je(Ge)},rt=Ge=>{ze(Ge)},Ee=Ge=>{Ye(Ge)},Ae=Ge=>{le&&le(Ge)},_t=Ge=>{k&&k(Ge)},Ze=Ge=>{ne&&V&&!j&&ne(Ge)},ur=()=>{oe&&xe&&oe(xe)},Xo=kt(),ln=`intersection-${rr(Xo)}`;Nr(Y,Ze,{selectorToWatch:`#${ln}`,skipWhen:!he});const{error:ct,...Wt}=vt("Combobox"),Nn=!!ct||A,dr=Wt.id??M,Cn=Wt.name??F,Qo=Wt.required||ee;let Zt;return ct?Zt=`${dr}-error`:Wt.hint&&(Zt=`${dr}-hint`),s.jsxs(Ft.Root,{autocomplete:n||(l?"list":"both"),onOpenChange:Ce,open:he,onTextValueChange:rt,textValue:xe,allowCustomValue:l||e,disabled:b,required:Qo,value:ye,onValueChange:_t,filterValue:Ne,onFilterValueChange:Ee,isPrintableCharacter:L,children:[s.jsxs(Mp,{$hasError:Nn,$size:_e,className:c,children:[s.jsxs(G,{flex:"1",tag:"span",gap:3,children:[je?s.jsx(G,{flex:"0 0 1.6rem",tag:"span","aria-hidden":!0,children:je}):null,s.jsx(Ep,{placeholder:P,id:dr,"aria-invalid":!!ct,onChange:Ae,ref:Se,name:Cn,"aria-describedby":Zt,...Me})]}),s.jsxs(G,{tag:"span",gap:3,children:[xe&&U?s.jsx(Tp,{tag:"button",hasRadius:!0,background:"transparent",type:"button",padding:0,color:"neutral600",borderStyle:"none",onClick:ge,"aria-disabled":b,"aria-label":o,title:o,ref:ie,children:s.jsx(sr,{})}):null,s.jsx(Lp,{children:s.jsx(Bn,{fill:"neutral500"})})]})]}),s.jsx(Ft.Portal,{children:s.jsx(Vp,{sideOffset:4,children:s.jsxs(Dp,{ref:Y,children:[i,l?s.jsx(Ft.CreateItem,{onPointerUp:ur,onClick:ur,asChild:!0,children:s.jsx(Hi,{children:s.jsx(ce,{children:u(xe??"")})})}):null,!l&&!j?s.jsx(Ft.NoValueFound,{asChild:!0,children:s.jsx(Hi,{$hasHover:!1,children:s.jsx(ce,{children:z(xe??"")})})}):null,j?s.jsx(G,{justifyContent:"center",alignItems:"center",paddingTop:2,paddingBottom:2,children:s.jsx(_p,{small:!0,children:B})}):null,s.jsx(Z,{id:ln,width:"100%",height:"1px"})]})})})]})}),Tp=T(Z)`
  padding: 0;
`,Mp=T(Ft.Trigger)`
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

  ${({theme:e,$hasError:n})=>$n()({theme:e,$hasError:n})};
`,Ep=T(Ft.TextInput)`
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
`,Lp=T(Ft.Icon)`
  border: none;
  background: transparent;
  padding: 0;
  color: ${({theme:e})=>e.colors.neutral600};
  display: flex;

  &[aria-disabled='true'] {
    cursor: inherit;
  }
`,Vp=T(Ft.Content)`
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
`,Dp=T(Ft.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,Bp=h.forwardRef(({children:e,value:n,disabled:i,textValue:c,...o},l)=>s.jsx(Ft.ComboboxItem,{asChild:!0,value:n,disabled:i,textValue:c,children:s.jsx(Hi,{ref:l,...o,children:s.jsx(Ft.ItemText,{asChild:!0,children:s.jsx(ce,{children:e})})})})),Hi=T.div`
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
`;h.forwardRef((e,n)=>s.jsx(v6,{...e,asChild:!0,ref:n}));h.forwardRef((e,n)=>s.jsxs(p6,{children:[s.jsx(Hp,{}),s.jsx(Op,{ref:n,...e})]}));const Hp=T(b6)`
  background-color: ${e=>e.theme.colors.neutral800};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};
  opacity: 0.2;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${qe.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,Op=T($6)`
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
`;h.forwardRef(({children:e,...n},i)=>s.jsx(C6,{asChild:!0,children:s.jsx(Np,{tag:"h2",variant:"beta",ref:i,padding:6,fontWeight:"bold",...n,children:e})}));const Np=T(ce)`
  display: flex;
  justify-content: center;
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;h.forwardRef(({children:e,icon:n,...i},c)=>s.jsx(G,{ref:c,gap:2,direction:"column",paddingTop:8,paddingBottom:8,paddingLeft:6,paddingRight:6,...i,children:typeof e=="string"?s.jsxs(s.Fragment,{children:[n?h.cloneElement(n,{width:24,height:24}):null,s.jsx(Fp,{children:e})]}):e}));const Fp=h.forwardRef((e,n)=>s.jsx(y6,{asChild:!0,children:s.jsx(ce,{ref:n,variant:"omega",...e,tag:"p"})}));h.forwardRef((e,n)=>s.jsx(zp,{ref:n,gap:2,padding:4,justifyContent:"space-between",...e,tag:"footer"}));const zp=T(G)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`;h.forwardRef((e,n)=>s.jsx(S6,{...e,asChild:!0,ref:n}));h.forwardRef((e,n)=>s.jsx(R6,{...e,asChild:!0,ref:n}));let $i=0;function kp(){h.useEffect(()=>{var e,n;const i=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",(e=i[0])!==null&&e!==void 0?e:xc()),document.body.insertAdjacentElement("beforeend",(n=i[1])!==null&&n!==void 0?n:xc()),$i++,()=>{$i===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(c=>c.remove()),$i--}},[])}function xc(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}function sn(e,n){const i=h.useRef(null);return n&&i.current&&Wp(n,i.current)&&(n=i.current),i.current=n??null,h.useMemo(()=>new x4(e,n),[e,n])}function Wp(e,n){if(e===n)return!0;const i=Object.keys(e),c=Object.keys(n);if(i.length!==c.length)return!1;for(const o of i)if(n[o]!==e[o])return!1;return!0}_6`
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
`;const wc="en-EN",Up=()=>typeof navigator>"u"?wc:navigator.language?navigator.language:wc,[rb,Zo]=Hr("StrapiDesignSystem",{locale:Up()}),qp=E6,Yl=h.forwardRef(({container:e=globalThis?.document?.body,...n},i)=>e?ir.createPortal(s.jsx(Z,{ref:i,...n}),e):null);Yl.displayName="Portal";const Gp=h.forwardRef(({onClear:e,clearLabel:n="Clear",startIcon:i,disabled:c,hasError:o,children:l,id:u,size:x="M",withTags:v,...R},$)=>{const y=h.useRef(null),b=I=>{e&&!c&&(e(I),y.current.focus())},{labelNode:A}=vt("SelectTrigger"),M=wt(y,$);return s.jsx(zt.Trigger,{asChild:!0,children:s.jsxs(Yp,{"aria-disabled":c,$hasError:o,ref:M,alignItems:"center",justifyContent:"space-between",position:"relative",overflow:"hidden",hasRadius:!0,background:c?"neutral150":"neutral0",gap:4,cursor:"default","aria-labelledby":A?`${u}-label`:void 0,$size:x,$withTags:v,...R,children:[s.jsxs(G,{flex:"1",tag:"span",gap:3,children:[i&&s.jsx(G,{tag:"span","aria-hidden":!0,children:i}),l]}),s.jsxs(G,{tag:"span",gap:3,children:[e?s.jsx(Kp,{tag:"button",hasRadius:!0,background:"transparent",role:"button",tabIndex:0,onClick:b,"aria-disabled":c,"aria-label":n,title:n,cursor:"pointer",children:s.jsx(sr,{})}):null,s.jsx(Zp,{children:s.jsx(Bn,{})})]})]})})}),Kp=T(Z)`
  border: none;
  display: flex;

  svg {
    height: 1.1rem;
    width: 1.1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Yp=T(G)`
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

  ${({theme:e,$hasError:n})=>$n()({theme:e,$hasError:n})};
`,Zp=T(zt.Icon)`
  display: flex;
  & > svg {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Xp=h.forwardRef(({children:e,placeholder:n,...i},c)=>s.jsx(Qp,{ref:c,ellipsis:!0,...i,children:s.jsx(Jp,{placeholder:n,children:e})})),Qp=T(ce)`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2.2rem;
`,Jp=T(zt.Value)`
  display: flex;
  gap: ${({theme:e})=>e.spaces[1]};
  flex-wrap: wrap;
`,Pp=T(zt.Content)`
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
`,e7=T(zt.Viewport)`
  padding: ${({theme:e})=>e.spaces[1]};
`,t7=h.forwardRef((e,n)=>s.jsx(r7,{ref:n,...e})),n7=te`
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
`,r7=T(zt.Item)`
  ${n7}

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary100};
  }

  &[data-state='checked'] {
    font-weight: bold;
    background-color: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
    font-weight: bold;
  }
`,Zl=zt.Root,Xl=Gp,Ql=Xp,Jl=zt.Portal,Pl=Pp,e2=e7,ya=t7,t2=zt.ItemIndicator,n2=zt.ItemText,o7=zt.Group,Oi=h.forwardRef(({children:e,clearLabel:n="Clear",customizeContent:i,disabled:c,hasError:o,id:l,name:u,onChange:x,onClear:v,onCloseAutoFocus:R,onReachEnd:$,placeholder:y,required:b,size:A,startIcon:M,value:I,...V},L)=>{const[j,B]=h.useState(),[F,z]=h.useState(!1),k=he=>{z(he)},U=he=>{v&&v(he),x||B("")},oe=he=>{x?x(typeof I=="number"?Number(he):he):B(he)},se=h.useRef(null),le=kt(),$e=`intersection-${rr(le)}`;Nr(se,he=>{$&&$(he)},{selectorToWatch:`#${$e}`,skipWhen:!F});const{error:P,required:ee,..._e}=vt("SingleSelect"),je=!!P||o,me=_e.id??l,ye=_e.name??u;let Me;P?Me=`${me}-error`:_e.hint&&(Me=`${me}-hint`);const De=(typeof I<"u"&&I!==null?I.toString():j)??"";return s.jsxs(Zl,{onOpenChange:k,disabled:c,required:ee??b,onValueChange:oe,value:De,...V,children:[s.jsx(Xl,{ref:L,id:me,name:ye,startIcon:M,hasError:je,disabled:c,clearLabel:n,onClear:De&&v?U:void 0,"aria-label":V["aria-label"],"aria-describedby":Me??V["aria-describedby"],size:A,children:s.jsx(Ql,{placeholder:y,textColor:De?"neutral800":"neutral600",children:De&&i?i(De):void 0})}),s.jsx(Jl,{children:s.jsx(Pl,{position:"popper",sideOffset:4,onCloseAutoFocus:R,children:s.jsxs(e2,{ref:se,children:[e,s.jsx(Z,{id:$e,width:"100%",height:"1px"})]})})})]})}),Ni=h.forwardRef(({value:e,startIcon:n,children:i,...c},o)=>s.jsxs(ya,{ref:o,value:e.toString(),...c,children:[n&&s.jsx(G,{tag:"span","aria-hidden":!0,children:n}),s.jsx(ce,{lineHeight:"20px",width:"100%",children:s.jsx(n2,{children:i})})]})),i7=200,vc=15,[a7,lr]=Hr("DatePicker"),s7=h.forwardRef(({calendarLabel:e,className:n,initialDate:i,locale:c,maxDate:o,minDate:l,monthSelectLabel:u="Month",onChange:x,value:v,yearSelectLabel:R="Year",hasError:$,id:y,name:b,disabled:A=!1,required:M=!1,onClear:I,clearLabel:V="Clear",size:L="M",...j},B)=>{const F=Ri(),z=Zo("DatePicker"),k=c??z.locale,U=sn(k,{day:"2-digit",month:"2-digit",year:"numeric"}),[oe,se]=h.useState(!1),[le,$e]=h.useState(null),[ne,P]=h.useState(null),[ee,_e]=h.useState(null),[je,me]=h.useState(),[ye,Me]=Kt({defaultProp:i?En(i):void 0,prop:v?En(v):void 0,onChange(Ae){x&&x(Ae?.toDate(F))}}),[De,he]=h.useMemo(()=>{const Ae=i?En(i):qi("UTC"),_t=l?En(l):Ae.set({day:1,month:1,year:Ae.year-i7});let Ze=o?En(o):Ae.set({day:31,month:12,year:Ae.year+vc});return Ze.compare(_t)<0&&(Ze=_t.set({day:31,month:12,year:_t.year+vc})),[_t,Ze]},[l,o,i]),[Je,xe]=h.useState(c7({currentValue:ye,minDate:De,maxDate:he})),ze=kt(),Ne=h.useRef(null),Ye=Ae=>{I&&!A&&(me(""),Me(void 0),I(Ae),ne?.focus())},Y=h.useCallback(Ae=>{Ae&&ye&&xe(ye),se(Ae)},[ye]);or(()=>{if(v){const Ae=En(v);me(U.format(Ae.toDate(F))),xe(Ae)}else me("")},[v,U,F]),or(()=>{if(i&&je===void 0){const Ae=En(i);me(U.format(Ae.toDate(F)))}},[i,je,U,F]);const{error:we,...Se}=vt("Combobox"),ie=!!we||$,ge=Se.id??y,Ce=Se.name??b,rt=Se.required||M;let Ee;return we?Ee=`${ge}-error`:Se.hint&&(Ee=`${ge}-hint`),s.jsxs(a7,{calendarDate:Je,content:ee,contentId:ze,disabled:A,locale:k,minDate:De,maxDate:he,open:oe,onCalendarDateChange:xe,onContentChange:_e,onOpenChange:Y,onTextInputChange:P,onTextValueChange:me,onTriggerChange:$e,onValueChange:Me,required:rt,textInput:ne,textValue:je,timeZone:F,trigger:le,value:ye,children:[s.jsxs(u7,{className:n,hasError:ie,size:L,children:[s.jsx(Qm,{fill:"neutral500","aria-hidden":!0}),s.jsx(g7,{ref:B,"aria-describedby":Ee,id:ge,name:Ce,...j}),je&&I?s.jsx(h7,{tag:"button",hasRadius:!0,background:"transparent",type:"button",onClick:Ye,"aria-disabled":A,"aria-label":V,title:V,ref:Ne,children:s.jsx(sr,{})}):null]}),s.jsx(Yl,{children:s.jsx(v7,{label:e,children:s.jsx(y7,{monthSelectLabel:u,yearSelectLabel:R})})})]})}),pc=e=>!!e.match(/^[^a-zA-Z]*$/),c7=({currentValue:e,minDate:n,maxDate:i})=>{const c=qi("UTC");return e||(_i(n,c)===n&&ji(i,c)===i?c:_i(n,c)===c?n:ji(i,c)===c?i:c)},l7="DatePickerTrigger",u7=h.forwardRef(({hasError:e,size:n,...i},c)=>{const o=lr(l7),l=wt(c,x=>o.onTriggerChange(x)),u=()=>{o.disabled||o.onOpenChange(!0)};return s.jsx(Ui,{asChild:!0,trapped:o.open,onMountAutoFocus:x=>{x.preventDefault()},onUnmountAutoFocus:x=>{document.getSelection()?.empty(),x.preventDefault()},children:s.jsx(d7,{ref:l,$hasError:e,$size:n,...i,hasRadius:!0,gap:3,overflow:"hidden",background:o.disabled?"neutral150":"neutral0",onClick:Vn(i.onClick,()=>{o.textInput?.focus()}),onPointerDown:Vn(i.onPointerDown,x=>{const v=x.target;v.hasPointerCapture(x.pointerId)&&v.releasePointerCapture(x.pointerId),(v.closest("button")??v.closest("div"))===x.currentTarget&&x.button===0&&x.ctrlKey===!1&&(u(),o.textInput?.focus())})})})}),d7=T(G)`
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

  ${({theme:e,$hasError:n})=>$n()({theme:e,$hasError:n})};
`,h7=T(Z)`
  border: none;
  color: ${({theme:e})=>e.colors.neutral600};
  padding: 0;
  cursor: pointer;
`,f7="DatePickerTextInput",g7=h.forwardRef(({placeholder:e,...n},i)=>{const c=lr(f7),{onTextValueChange:o,textValue:l,onTextInputChange:u,onOpenChange:x,disabled:v,locale:R}=c,$=wt(i,L=>u(L)),y=()=>{v||x(!0)},b=sn(R,{year:"numeric",month:"2-digit",day:"2-digit"}),[A,M,I]=h.useMemo(()=>{const L=b.formatToParts(new Date),j=L.filter(z=>z.type==="year"||z.type==="month"||z.type==="day"),B=j.map(z=>{switch(z.type){case"day":return"DD";case"month":return"MM";case"year":return"YYYY";default:return""}}),F=L.find(z=>z.type==="literal")?.value??"";return[B,F,j]},[b]),V=A.map(L=>`\\d{${L.length}}`).join(`\\${M}`);return s.jsx(x7,{role:"combobox",type:"text",inputMode:"numeric",ref:$,"aria-autocomplete":"none","aria-controls":c.contentId,"aria-disabled":c.disabled,"aria-expanded":c.open,"aria-required":c.required,"aria-haspopup":"dialog","data-state":c.open?"open":"closed",disabled:v,"data-disabled":v?"":void 0,pattern:V,placeholder:e??A.join(M),...n,value:l??"",onBlur:Vn(n.onBlur,()=>{if(!c.textValue){c.onValueChange(void 0);return}c.onTextValueChange(b.format(c.calendarDate.toDate(c.timeZone))),c.onValueChange(c.calendarDate)}),onChange:Vn(n.onChange,L=>{if(pc(L.target.value)){const j=L.target.value.split(M),[B,F,z]=I.map((P,ee)=>{const _e=j[ee];return{...P,value:_e}}).sort((P,ee)=>P.type==="year"?1:ee.type==="year"?-1:P.type==="month"?1:ee.type==="month"?-1:0).map(P=>P.value),k=c.calendarDate.year;let U=c.calendarDate.year;if(z){const P=z.length===1?`0${z}`:z;U=z.length<3?Number(`${k}`.slice(0,4-P.length)+P):Number(P)}z&&z.length<3&&U>c.maxDate.year&&(U-=100);const oe=c.calendarDate.set({year:U}),se=oe.calendar.getMonthsInYear(oe),le=oe.set({month:F&&Number(F)<=se?Number(F):void 0}),$e=le.calendar.getDaysInMonth(le),ne=le.set({day:B&&Number(B)<=$e?Number(B):void 0});c.onCalendarDateChange(m7(ne,c.minDate,c.maxDate)),c.onTextValueChange(L.target.value)}}),onKeyDown:Vn(n.onKeyDown,L=>{if(!c.open&&(pc(L.key)||["ArrowDown","Backspace"].includes(L.key)))y();else if(["Tab"].includes(L.key)&&c.open)L.preventDefault();else if(["Escape"].includes(L.key))c.open?c.onOpenChange(!1):(c.onValueChange(void 0),c.onTextValueChange("")),L.preventDefault();else if(c.open&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(L.key))switch(L.preventDefault(),L.key){case"ArrowDown":{const j=c.calendarDate.add({weeks:1});if(c.maxDate&&j.compare(c.maxDate)>0)return;c.onCalendarDateChange(j);return}case"ArrowRight":{const j=c.calendarDate.add({days:1});if(c.maxDate&&j.compare(c.maxDate)>0)return;c.onCalendarDateChange(j);return}case"ArrowUp":{const j=c.calendarDate.subtract({weeks:1});if(c.minDate&&j.compare(c.minDate)<0)return;c.onCalendarDateChange(j);return}case"ArrowLeft":{const j=c.calendarDate.subtract({days:1});if(c.minDate&&j.compare(c.minDate)<0)return;c.onCalendarDateChange(j)}}else c.open&&["Enter"].includes(L.key)&&(L.preventDefault(),o(b.format(c.calendarDate.toDate(c.timeZone))),c.onValueChange(c.calendarDate),c.onOpenChange(!1))})})});function m7(e,n,i){return n&&(e=ji(e,n)),i&&(e=_i(e,i)),e}const x7=T.input`
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
`,w7="DatePickerContent",v7=h.forwardRef((e,n)=>{const[i,c]=h.useState(),o=lr(w7);if(or(()=>{c(new DocumentFragment)},[]),!o.open){const l=i;return l?ir.createPortal(s.jsx("div",{children:e.children}),l):null}return s.jsx(b7,{...e,ref:n})}),p7="DatePickerContent",b7=h.forwardRef((e,n)=>{const{label:i="Choose date",...c}=e,{onOpenChange:o,...l}=lr(p7),{x:u,y:x,refs:v,strategy:R,placement:$}=j6({strategy:"fixed",placement:"bottom-start",middleware:[A6({mainAxis:4}),I6(),T6()],elements:{reference:l.trigger},whileElementsMounted:M6});h.useEffect(()=>{const b=()=>{o(!1)};return window.addEventListener("blur",b),window.addEventListener("resize",b),()=>{window.removeEventListener("blur",b),window.removeEventListener("resize",b)}},[o]);const y=wt(n,b=>l.onContentChange(b),v.setFloating);return kp(),s.jsx(Wi,{allowPinchZoom:!0,children:s.jsx(qp,{asChild:!0,onFocusOutside:b=>{b.preventDefault()},onDismiss:()=>{o(!1)},children:s.jsx($7,{ref:y,"data-state":l.open?"open":"closed","data-side":$.includes("top")?"top":"bottom",onContextMenu:b=>b.preventDefault(),id:l.contentId,role:"dialog","aria-modal":"true","aria-label":i,style:{left:u,top:x,position:R},hasRadius:!0,background:"neutral0",padding:1,...c})})})}),$7=T(Z)`
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
`,C7="DatePickerCalendar",y7=h.forwardRef(({monthSelectLabel:e,yearSelectLabel:n,...i},c)=>{const{locale:o,timeZone:l,minDate:u,maxDate:x,calendarDate:v,onCalendarDateChange:R}=lr(C7),$=L6(v),y=h.useMemo(()=>{const B=u.year,F=x.year;return[...Array(F-B+1).keys()].map(z=>(B+z).toString())},[u,x]),b=sn(o,{month:"long"}),A=h.useMemo(()=>[...Array(v.calendar.getMonthsInYear(v)).keys()].map(B=>b.format(v.set({month:B+1}).toDate(l))),[v,b,l]),M=sn(o,{weekday:"short"}),I=h.useMemo(()=>{const B=Nc(qi(l),o);return[...new Array(7).keys()].map(F=>{const k=B.add({days:F}).toDate(l);return M.format(k)})},[l,o,M]),V=B=>{if(typeof B=="number")return;const F=v.set({month:A.indexOf(B)+1});R(F)},L=B=>{if(typeof B=="number")return;const F=v.set({year:parseInt(B,10)});R(F)},j=S7($,o);return s.jsxs(G,{ref:c,direction:"column",alignItems:"stretch",padding:4,...i,children:[s.jsxs(R7,{justifyContent:"flex-start",paddingBottom:4,paddingLeft:2,paddingRight:2,gap:2,children:[s.jsx(Hn,{children:s.jsx(Oi,{"aria-label":e,value:A[v.month-1],onChange:V,children:A.map(B=>s.jsx(Ni,{value:B,children:B},B))})}),s.jsx(Hn,{children:s.jsx(Oi,{value:v.year.toString(),"aria-label":n,onChange:L,children:y.map(B=>s.jsx(Ni,{value:B,children:B},B))})})]}),s.jsxs("table",{role:"grid",children:[s.jsx("thead",{"aria-hidden":!0,children:s.jsx("tr",{"aria-rowindex":0,children:I.map((B,F)=>s.jsx(_7,{"aria-colindex":F,children:B},B))})}),s.jsx("tbody",{children:[...new Array(6).keys()].map(B=>s.jsx("tr",{"aria-rowindex":B+2,children:j(B).map((F,z)=>F?s.jsx(I7,{"aria-colindex":z+1,date:F,startDate:$,disabled:u.compare(F)>0||F.compare(x)>0},F.toString()):s.jsx(r2,{"aria-colindex":z+1},z+1))},B))})]})]})}),S7=(e,n)=>i=>{let c=e.add({weeks:i});const o=[];c=Nc(c,n);const l=V6(c,n);for(let u=0;u<l;u++)o.push(null);for(;o.length<7;){o.push(c);const u=c.add({days:1});if(Fc(c,u))break;c=u}for(;o.length<7;)o.push(null);return o},R7=T(G)`
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
`,_7=h.forwardRef(({children:e,...n},i)=>s.jsx(j7,{tag:"th",role:"gridcell",ref:i,...n,height:"2.4rem",width:"3.2rem",children:s.jsx(ce,{variant:"pi",fontWeight:"bold",color:"neutral800",children:e.slice(0,2)})})),j7=T(Z)`
  border-radius: ${({theme:e})=>e.borderRadius};
  text-transform: capitalize;
`,A7="DatePickerCalendarCell",I7=h.forwardRef(({date:e,startDate:n,disabled:i,...c},o)=>{const{timeZone:l,locale:u,calendarDate:x,onValueChange:v,onOpenChange:R,onTextValueChange:$,onCalendarDateChange:y}=lr(A7),b=Fc(x,e),A=sn(u,{weekday:"long",day:"numeric",month:"long",year:"numeric"}),M=h.useMemo(()=>A.format(e.toDate(l)),[A,e,l]),I=sn(u,{day:"numeric",calendar:e.calendar.identifier}),V=h.useMemo(()=>I.formatToParts(e.toDate(l)).find(z=>z.type==="day").value,[I,e,l]),L=sn(u,{day:"2-digit",month:"2-digit",year:"numeric"}),j=D6(n),B=e.compare(n)<0||e.compare(j)>0;let F="neutral900";return b?F="primary600":B&&(F="neutral600"),s.jsx(r2,{tag:"td",role:"gridcell",ref:o,"aria-selected":b,...c,hasRadius:!0,"aria-label":M,tabIndex:b?0:-1,background:b?"primary100":"neutral0",cursor:"pointer",onPointerDown:Vn(c.onPointerDown,z=>{z.preventDefault(),y(e),v(e),$(L.format(e.toDate(l))),R(!1)}),"aria-disabled":i,children:s.jsx(ce,{variant:"pi",textColor:F,children:V})})}),r2=T(Z)`
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
`,En=e=>{const n=e.toISOString(),i=B6(n,"UTC");return H6(i)},Ci=e=>!!e.match(/^[^a-zA-Z]*$/),T7=h.forwardRef(({step:e=15,value:n,defaultValue:i,onChange:c,...o},l)=>{const u=Zo("TimePicker"),[x,v]=h.useState(""),[R,$]=Kt({prop:n,defaultProp:i,onChange:c}),y=sn(u.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),b=h.useMemo(()=>{const j=y.formatToParts(new Date),{value:B}=j.find(F=>F.type==="literal");return B},[y]),A=h.useMemo(()=>{const j=60/e;return[...Array(24).keys()].flatMap(B=>[...Array(j).keys()].map(F=>y.format(new Date(0,0,0,B,F*e))))},[e,y]),M=j=>{(!j||Ci(j))&&v(j)},I=j=>{const[B,F]=j.split(b);if(!B&&!F)return;const z=Number(B??"0"),k=Number(F??"0");if(!(z>23||k>59))return y.format(new Date(0,0,0,z,k))},V=j=>{const B=I(j.target.value);B?(v(B),$(B)):v(R)},L=j=>{if(typeof j<"u"){const B=I(j);$(B)}else $(j)};return h.useEffect(()=>{const j=typeof n>"u"?"":n;Ci(j)&&v(j)},[n,v]),s.jsx(Ip,{...o,ref:l,value:R,onChange:L,isPrintableCharacter:Ci,allowCustomValue:!0,placeholder:`--${b}--`,autocomplete:"none",startIcon:s.jsx(wx,{fill:"neutral500"}),inputMode:"numeric",pattern:`\\d{2}\\${b}\\d{2}`,textValue:x,onTextValueChange:M,onBlur:V,children:A.map(j=>s.jsx(Bp,{value:j,children:j},j))})}),M7=T(s7)`
  flex: 1 1 70%;
  min-width: 120px;
`,E7=T(T7)`
  flex: 1 1 30%;
  min-width: 140px;
`;h.forwardRef(({clearLabel:e="clear",dateLabel:n="Choose date",timeLabel:i="Choose time",disabled:c=!1,hasError:o,onChange:l,onClear:u,required:x=!1,step:v,value:R,initialDate:$,size:y,...b},A)=>{const M=h.useRef(null),[I,V]=Kt({defaultProp:$?Ar($,!1):void 0,prop:R?Ar(R,!1):R??void 0,onChange(P){l&&l(P?.toDate(Ri()))}}),L=Zo("DateTimePicker"),j=sn(L.locale,{hour:"2-digit",minute:"2-digit",hour12:!1}),B=I?j.format(I.toDate(Ri())):"",F=P=>{let ee=P?Ar(P):void 0;if(!(ee&&I&&ee.compare(I)===0)){if(B&&ee){const[_e,je]=B.split(":");ee=ee.set({hour:parseInt(_e,10),minute:parseInt(je,10)})}V(ee)}},z=P=>{if(!P)return;const[ee,_e]=P.split(":"),je=I?I.set({hour:parseInt(ee,10),minute:parseInt(_e,10)}):Ar(new Date).set({hour:parseInt(ee,10),minute:parseInt(_e,10)});V(je)},k=P=>{V(void 0),u&&u(P)},U=()=>{const P=I?I.set({hour:0,minute:0}):Ar(new Date);V(P)},oe=wt(M,A),{error:se,id:le,labelNode:$e}=vt("DateTimePicker"),ne=!!se||o;return s.jsxs(G,{"aria-labelledby":$e?`${le}-label`:void 0,role:"group",flex:"1",gap:1,children:[s.jsx(Hn,{children:s.jsx(M7,{...b,size:y,value:I?.toDate("UTC"),onChange:F,required:x,onClear:u?k:void 0,clearLabel:`${e} date`,disabled:c,ref:oe,"aria-label":n})}),s.jsx(Hn,{children:s.jsx(E7,{size:y,hasError:ne,value:B,onChange:z,onClear:u&&B!==void 0&&B!=="00:00"?U:void 0,clearLabel:`${e} time`,required:x,disabled:c,step:v,"aria-label":i})})]})});const Ar=(e,n=!0)=>{const i=e.toISOString();let c=O6(i);return n&&(c=c.set({hour:0,minute:0})),N6(c)},L7=h.forwardRef((e,n)=>s.jsx(V7,{ref:n,background:"neutral150",...e,"data-orientation":"horizontal",role:"separator",tag:"div"})),V7=T(Z)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
`,D7=T(Z)`
  svg {
    height: 8.8rem;
  }
`;h.forwardRef(({icon:e,content:n,action:i,hasRadius:c=!0,shadow:o="tableShadow"},l)=>s.jsxs(G,{ref:l,alignItems:"center",direction:"column",padding:11,background:"neutral0",hasRadius:c,shadow:o,children:[e?s.jsx(D7,{paddingBottom:6,"aria-hidden":!0,children:e}):null,s.jsx(Z,{paddingBottom:4,children:s.jsx(ce,{variant:"delta",tag:"p",textAlign:"center",textColor:"neutral600",children:n})}),i]}));const o2=zc.define(),i2=zc.define(),B7=kc.mark({attributes:{style:"background-color: yellow; color: black"}}),H7=F6.define({create(){return kc.none},update(e,n){return e=e.map(n.changes),n.effects.forEach(i=>{i.is(o2)?e=e.update({add:i.value,sort:!0}):i.is(i2)&&(e=e.update({filter:i.value}))}),e},provide:e=>z6.decorations.from(e)});h.forwardRef(({hasError:e,required:n,id:i,value:c="",disabled:o=!1,onChange:l=()=>null,...u},x)=>{const v=h.useRef(),R=h.useRef(),$=h.useRef(),{error:y,...b}=vt("JsonInput"),A=!!y||e,M=b.id??i,I=b.required||n;let V;y?V=`${M}-error`:b.hint&&(V=`${M}-hint`);const L=se=>{const le=R.current?.doc;if(le){const{text:$e,to:ne}=le.line(se),P=ne-$e.trimStart().length;ne>P&&$.current?.dispatch({effects:o2.of([B7.range(P,ne)])})}},j=()=>{const se=R.current?.doc;if(se){const le=se.length||0;$.current?.dispatch({effects:i2.of(($e,ne)=>ne<=0||$e>=le)})}},B=({state:se,view:le})=>{$.current=le,R.current=se,j();const ne=w4()(le);ne.length&&L(se.doc.lineAt(ne[0].from).number)},F=(se,le)=>{B(le),l(se)},z=(se,le)=>{$.current=se,R.current=le,B({view:se,state:le})},{setContainer:k,view:U}=k6({value:c,onCreateEditor:z,container:v.current,editable:!o,extensions:[W6(),H7],onChange:F,theme:"dark",basicSetup:{lineNumbers:!0,bracketMatching:!0,closeBrackets:!0,indentOnInput:!0,syntaxHighlighting:!0,highlightSelectionMatches:!0,tabSize:2}}),oe=wt(v,k);return h.useImperativeHandle(x,()=>({...U?.dom,focus(){U&&U.focus()},scrollIntoView(se){U&&U.dom.scrollIntoView(se)}}),[U]),s.jsx(O7,{ref:oe,$hasError:A,alignItems:"stretch",fontSize:2,hasRadius:!0,"aria-required":I,id:M,"aria-describedby":V,...u})});const O7=T(G)`
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
    ${$n()}
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
`;ht(({disabled:e,...n},i)=>s.jsx(No,{ref:i,tag:Or,tabIndex:e?-1:void 0,disabled:e,...n}));T(Z)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`;T(Z)`
  text-decoration: none;

  &:focus {
    left: ${({theme:e})=>e.spaces[3]};
    top: ${({theme:e})=>e.spaces[3]};
  }
`;const N7=(e,n)=>`${e}${Math.floor(n*255).toString(16).padStart(2,"0")}`,a2=h.forwardRef(({children:e,viewportRef:n,...i},c)=>s.jsxs(F7,{ref:c,...i,children:[s.jsx(z7,{ref:n,children:e}),s.jsx(bc,{orientation:"vertical",children:s.jsx($c,{})}),s.jsx(bc,{orientation:"horizontal",children:s.jsx($c,{})})]})),F7=T(U6)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`,z7=T(q6)`
  min-width: 100%;
  padding-inline: 4px;
`,bc=T(G6)`
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
`,$c=T(K6)`
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
`;h.forwardRef((e,n)=>s.jsx(Y6,{...e,asChild:!0,ref:n}));h.forwardRef((e,n)=>s.jsx(Z6,{children:s.jsx(k7,{children:s.jsx(W7,{ref:n,...e})})}));const k7=T(X6)`
  background: ${e=>N7(e.theme.colors.neutral800,.2)};
  position: fixed;
  inset: 0;
  z-index: ${e=>e.theme.zIndices.overlay};

  @media (prefers-reduced-motion: no-preference) {
    animation: ${qe.overlayFadeIn} ${e=>e.theme.motion.timings[200]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`,W7=T(Q6)`
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
`,U7=h.forwardRef((e,n)=>s.jsx(J6,{...e,asChild:!0,ref:n}));h.forwardRef(({children:e,closeLabel:n="Close modal",...i},c)=>s.jsxs(q7,{ref:c,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...i,tag:"header",children:[e,s.jsx(U7,{children:s.jsx(Bi,{withTooltip:!1,label:n,children:s.jsx(sr,{})})})]}));const q7=T(G)`
  border-bottom: solid 1px ${e=>e.theme.colors.neutral150};
`;h.forwardRef((e,n)=>s.jsx(P6,{asChild:!0,children:s.jsx(ce,{tag:"h2",variant:"omega",fontWeight:"bold",ref:n,...e})}));h.forwardRef(({children:e,...n},i)=>s.jsx(G7,{ref:i,...n,children:e}));const G7=T(a2)`
  padding-inline: ${e=>e.theme.spaces[8]};

  & > div {
    padding-block: ${e=>e.theme.spaces[8]};

    & > div {
      // the scroll area component applies a display: table to the child, which we don't want.
      display: block !important;
    }
  }
`;h.forwardRef((e,n)=>s.jsx(K7,{ref:n,padding:4,paddingLeft:5,paddingRight:5,background:"neutral100",justifyContent:"space-between",...e,tag:"footer"}));const K7=T(G)`
  border-top: solid 1px ${e=>e.theme.colors.neutral150};
  flex: 1;
`,Y7="";h.forwardRef(({startAction:e,locale:n,onValueChange:i,value:c,step:o=1,disabled:l=!1,...u},x)=>{const v=Zo("NumberInput"),R=n||v.locale,$=h.useRef(new e4(R,{style:"decimal"})),y=h.useRef(new t4(R,{maximumFractionDigits:20})),[b,A]=Z7({prop(k){const U=String(c);return isNaN(Number(U))||U!==k&&k!==""?k:y.current.format(Number(c))},defaultProp:Y7,onChange(k){const U=$.current.parse(k??"");i(isNaN(U)?void 0:U)}}),M=k=>{A(String(k))},I=({target:{value:k}})=>{$.current.isValidPartialNumber(k)&&M(k)},L=(k=>{const U=k.toString();return U.includes(".")?U.split(".")[1].length:0})(o),j=()=>{if(!b){M(o);return}const k=$.current.parse(b),U=isNaN(k)?o:k+o,oe=parseFloat(U.toFixed(L));M(y.current.format(oe))},B=()=>{if(!b){M(-o);return}const k=$.current.parse(b),U=isNaN(k)?-o:k-o,oe=parseFloat(U.toFixed(L));M(y.current.format(oe))},F=k=>{if(!l)switch(k.key){case st.DOWN:{k.preventDefault(),B();break}case st.UP:{k.preventDefault(),j();break}}},z=()=>{if(b){const k=$.current.parse(b),U=isNaN(k)?"":y.current.format(k);M(U)}};return s.jsx(Yo,{ref:x,startAction:e,disabled:l,type:"text",inputMode:"decimal",onChange:I,onKeyDown:F,onBlur:z,value:b,endAction:s.jsxs(G,{direction:"column",children:[s.jsx(Cc,{disabled:l,"aria-hidden":!0,$reverse:!0,onClick:j,tabIndex:-1,type:"button","data-testid":"ArrowUp",children:s.jsx(Bn,{fill:"neutral500"})}),s.jsx(Cc,{disabled:l,"aria-hidden":!0,onClick:B,tabIndex:-1,type:"button","data-testid":"ArrowDown",children:s.jsx(Bn,{fill:"neutral500"})})]}),...u})});const Cc=T.button`
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
`;function Z7({prop:e,defaultProp:n,onChange:i=()=>{}}){const[c,o]=Tl({defaultProp:n,onChange:i}),l=e!==void 0,u=e instanceof Function?e(c):e,x=l?u:c,v=Qi(i),R=h.useCallback($=>{if(l){const b=typeof $=="function"?$(u):$;b!==u&&(v(b),o($))}else o($)},[l,u,o,v]);return[x,R]}const X7=h.createContext({activePage:1,pageCount:1}),Sa=()=>h.useContext(X7);ht(({children:e,...n},i)=>{const{activePage:c}=Sa(),o=c===1;return s.jsxs(c2,{ref:i,"aria-disabled":o,tabIndex:o?-1:void 0,...n,children:[s.jsx(cr,{children:e}),s.jsx(yl,{"aria-hidden":!0})]})});ht(({children:e,...n},i)=>{const{activePage:c,pageCount:o}=Sa(),l=c===o;return s.jsxs(c2,{ref:i,"aria-disabled":l,tabIndex:l?-1:void 0,...n,children:[s.jsx(cr,{children:e}),s.jsx(xa,{"aria-hidden":!0})]})});const s2=T(Or)`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:n})=>e?n.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;

  ${qo}
`,c2=T(s2)`
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
`;ht(({number:e,children:n,...i},c)=>{const{activePage:o}=Sa(),l=o===e;return s.jsxs(Q7,{ref:c,...i,"aria-current":l,$active:l,children:[s.jsx(cr,{children:n}),s.jsx(ce,{"aria-hidden":!0,fontWeight:l?"bold":void 0,lineHeight:"revert",variant:"pi",children:e})]})});const Q7=T(s2)`
  color: ${({theme:e,$active:n})=>n?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:n})=>n?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`;h.forwardRef((e,n)=>s.jsx(n4,{...e,asChild:!0,ref:n}));h.forwardRef((e,n)=>s.jsx(r4,{children:s.jsx(J7,{sideOffset:4,side:"bottom",align:"start",...e,ref:n})}));const J7=T(o4)`
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
`;h.forwardRef(({children:e,intersectionId:n,onReachEnd:i,...c},o)=>{const l=h.useRef(null),u=wt(l,o),x=kt();return Nr(l,i??(()=>{}),{selectorToWatch:`#${rr(x)}`,skipWhen:!n||!i}),s.jsxs(P7,{ref:u,...c,children:[e,n&&i&&s.jsx(Z,{id:rr(x),width:"100%",height:"1px"})]})});const P7=T(a2)`
  height: 20rem;
`;h.forwardRef(({size:e="M",value:n,...i},c)=>s.jsx(e9,{ref:c,$size:e,...i,children:s.jsx(t9,{style:{transform:`translate3D(-${100-(n??0)}%, 0, 0)`}})}));const e9=T(i4)`
  position: relative;
  overflow: hidden;
  width: ${e=>e.$size==="S"?"7.8rem":"10.2rem"};
  height: ${e=>e.$size==="S"?"0.4rem":"0.8rem"};
  background-color: ${e=>e.theme.colors.neutral600};
  border-radius: ${e=>e.theme.borderRadius};

  /* Fix overflow clipping in Safari */
  /* https://gist.github.com/domske/b66047671c780a238b51c51ffde8d3a0 */
  transform: translateZ(0);
`,t9=T(a4)`
  background-color: ${({theme:e})=>e.colors.neutral0};
  border-radius: ${({theme:e})=>e.borderRadius};
  width: 100%;
  height: 100%;

  @media (prefers-reduced-motion: no-preference) {
    transition: transform ${e=>e.theme.motion.timings[320]}
      ${e=>e.theme.motion.easings.authenticMotion};
  }
`;h.forwardRef((e,n)=>s.jsx(n9,{ref:n,...e}));const n9=T(s4)`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.theme.spaces[3]};
`;h.forwardRef(({children:e,id:n,...i},c)=>{const o=kt(n);return s.jsxs(G,{gap:2,children:[s.jsx(r9,{id:o,ref:c,...i,children:s.jsx(o9,{})}),s.jsx(ce,{tag:"label",htmlFor:o,children:e})]})});const r9=T(c4)`
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
`,o9=T(l4)`
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
`,i9=e=>{const n=e.querySelector('[tabindex="0"]');n&&n.focus()},l2=h.createContext({rowIndex:0,colIndex:0,setTableValues(){throw new Error("setTableValues must be initialized via the RawTableContext.Provider")}}),a9=()=>h.useContext(l2),s9=h.forwardRef(({colCount:e,rowCount:n,jumpStep:i=3,initialCol:c=0,initialRow:o=0,...l},u)=>{const x=h.useRef(null),v=h.useRef(!1),R=wt(x,u),[$,y]=h.useState(o),[b,A]=h.useState(c),M=h.useCallback(({colIndex:L,rowIndex:j})=>{A(L),y(j)},[]);h.useEffect(()=>{v.current&&i9(x.current),v.current||(v.current=!0)},[b,$]);const I=L=>{switch(L.key){case st.RIGHT:{L.preventDefault(),A(j=>j<e-1?j+1:j);break}case st.LEFT:{L.preventDefault(),A(j=>j>0?j-1:j);break}case st.UP:{L.preventDefault(),y(j=>j>0?j-1:j);break}case st.DOWN:{L.preventDefault(),y(j=>j<n-1?j+1:j);break}case st.HOME:{L.preventDefault(),L.ctrlKey&&y(0),A(0);break}case st.END:{L.preventDefault(),L.ctrlKey&&y(n-1),A(e-1);break}case st.PAGE_DOWN:{L.preventDefault(),y(j=>j+i<n?j+i:n-1);break}case st.PAGE_UP:{L.preventDefault(),y(j=>j-i>0?j-i:0);break}}},V=h.useMemo(()=>({rowIndex:$,colIndex:b,setTableValues:M}),[b,$,M]);return s.jsx(l2.Provider,{value:V,children:s.jsx("table",{role:"grid",ref:R,"aria-rowcount":n,"aria-colcount":e,onKeyDown:I,...l})})}),Ir=(e,n)=>[...e.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter(o=>!o.hasAttribute("disabled")),yi=e=>e.filter(n=>n.tagName==="INPUT"?n.type!=="checkbox"&&n.type!=="radio":!1),u2=h.forwardRef(({coords:e={col:0,row:0},tag:n="td",...i},c)=>{const o=h.useRef(null),l=wt(c,o),{rowIndex:u,colIndex:x,setTableValues:v}=a9(),[R,$]=h.useState(!1),y=M=>{const I=Ir(o.current);if(I.length===0||I.length===1&&yi(I).length===0)return;if(I.length>1&&!I.find(L=>L.tagName!=="BUTTON")){M.preventDefault();const L=I.findIndex(j=>j===document.activeElement);if(M.key===st.RIGHT){const j=I[L+1];j&&(M.stopPropagation(),j.focus())}else if(M.key===st.LEFT){const j=I[L-1];j&&(M.stopPropagation(),j.focus())}return}const V=M.key===st.ENTER;if(V&&!R)$(!0);else if((M.key===st.ESCAPE||V)&&R){if(V&&document.activeElement?.tagName==="A")return;$(!1),o.current.focus()}else R&&M.stopPropagation()},b=u===e.row-1&&x===e.col-1;or(()=>{const M=Ir(o.current);M.length===0||M.length===1&&yi(M).length!==0||M.length>1&&M.find(I=>I.tagName!=="BUTTON")?(o.current.setAttribute("tabIndex",!R&&b?"0":"-1"),M.forEach((I,V)=>{I.setAttribute("tabIndex",R?"0":"-1"),R&&V===0&&I.focus()})):M.forEach(I=>{I.setAttribute("tabIndex",b?"0":"-1")})},[R,b]);const A=h.useCallback(()=>{const M=Ir(o.current);M.length>=1&&(yi(M).length!==0||!M.find(I=>I.tagName!=="BUTTON"))&&$(!0),v({rowIndex:e.row-1,colIndex:e.col-1})},[e,v]);return or(()=>{const M=o.current;return Ir(M).forEach(V=>{V.addEventListener("focus",A)}),()=>{Ir(M).forEach(L=>{L.removeEventListener("focus",A)})}},[A]),s.jsx(Z,{role:"gridcell",tag:n,ref:l,onKeyDown:y,...i})}),c9=e=>s.jsx(u2,{...e,tag:"th"}),l9=({children:e,...n})=>{const i=h.Children.toArray(e).map(c=>h.isValidElement(c)?h.cloneElement(c,{"aria-rowindex":1}):c);return s.jsx("thead",{...n,children:i})},u9=({children:e,...n})=>{const i=h.Children.toArray(e).map((c,o)=>h.isValidElement(c)?h.cloneElement(c,{"aria-rowindex":o+2}):c);return s.jsx("tbody",{...n,children:i})},d9=({children:e,...n})=>{const i=h.Children.toArray(e).map((c,o)=>h.isValidElement(c)?h.cloneElement(c,{"aria-colindex":o+1,coords:{col:o+1,row:n["aria-rowindex"]}}):c);return s.jsx(Z,{tag:"tr",...n,children:i})},h9=T(sr)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,d2=T(Iv)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,f9=T.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${d2} {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`,g9=T(Yo)`
  border: 1px solid transparent;

  &:hover {
    button {
      cursor: pointer;
    }
  }

  ${$n()}
`;h.forwardRef(({name:e,children:n,value:i="",onClear:c,clearLabel:o,...l},u)=>{const x=h.useRef(null),v=i.length>0,R=y=>{c(y),x.current.focus()},$=Vl(u,x);return s.jsx(f9,{children:s.jsxs(Hn,{name:e,children:[s.jsx(cr,{children:s.jsx(Ca,{children:n})}),s.jsx(g9,{ref:$,value:i,startAction:s.jsx(d2,{"aria-hidden":!0}),endAction:v?s.jsx(Kl,{label:o,onClick:R,onMouseDown:y=>{y.preventDefault()},children:s.jsx(h9,{})}):void 0,...l})]})})});const m9=T(Z)`
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
`,x9=({children:e,icon:n,label:i,disabled:c=!1,onClick:o,...l})=>{const u=x=>{c||!o||o(x)};return s.jsxs(G,{inline:!0,background:c?"neutral200":"primary100",color:c?"neutral700":"primary600",paddingLeft:3,paddingRight:1,borderColor:c?"neutral300":"primary200",hasRadius:!0,height:"3.2rem",...l,children:[s.jsx(w9,{$disabled:c,variant:"pi",fontWeight:"bold",children:e}),s.jsx(m9,{tag:"button",disabled:c,"aria-disabled":c,"aria-label":i,padding:2,onClick:u,$iconAction:!!o,children:n})]})},w9=T(ce)`
  color: inherit;
  border-right: 1px solid ${({theme:e,$disabled:n})=>n?e.colors.neutral300:e.colors.primary200};
  padding-right: ${({theme:e})=>e.spaces[2]};
`;h.forwardRef(({children:e,clearLabel:n="Clear",customizeContent:i,disabled:c,hasError:o,id:l,name:u,onChange:x,onClear:v,onCloseAutoFocus:R,onReachEnd:$,placeholder:y,required:b,size:A,startIcon:M,value:I,withTags:V,...L},j)=>{const B=h.useRef(null),[F,z]=h.useState(),[k,U]=h.useState(!1),oe=xe=>{x?x(xe):z(xe)},se=xe=>()=>{const ze=Array.isArray(I)?I.filter(Ne=>Ne!==xe):(F??[]).filter(Ne=>Ne!==xe);x?x(ze):z(ze)},le=xe=>{U(xe)},$e=kt(),ne=`intersection-${rr($e)}`;Nr(B,xe=>{$&&$(xe)},{selectorToWatch:`#${ne}`,skipWhen:!k});const ee=typeof I<"u"&&I!==null?I:F,_e=xe=>xe&&typeof xe=="object"&&xe.value?s.jsx(x9,{tabIndex:-1,disabled:c,icon:s.jsx(sr,{width:`${14/16}rem`,height:`${14/16}rem`}),onClick:se(xe.value),children:xe.textValue},xe.value):null,{error:je,...me}=vt("MultiSelect"),ye=!!je||o,Me=me.id??l,De=me.name??u,he=me.required??b;let Je;return je?Je=`${Me}-error`:me.hint&&(Je=`${Me}-hint`),s.jsxs(Zl,{onOpenChange:le,disabled:c,required:he,onValueChange:oe,value:ee,...L,multi:!0,children:[s.jsx(Xl,{ref:j,id:Me,name:De,"aria-label":L["aria-label"],"aria-describedby":Je??L["aria-describedby"],startIcon:M,hasError:ye,disabled:c,clearLabel:n,onClear:ee?.length?v:void 0,withTags:!!(V&&(ee?.length??!1)),size:A,children:s.jsx(Ql,{placeholder:y,textColor:ee?.length?"neutral800":"neutral600",children:ee?.length?V?_e:i?i(ee):void 0:void 0})}),s.jsx(Jl,{children:s.jsx(Pl,{position:"popper",sideOffset:4,onCloseAutoFocus:R,children:s.jsxs(e2,{ref:B,children:[e,s.jsx(Z,{id:ne,width:"100%",height:"1px"})]})})})]})});const v9=h.forwardRef(({value:e,children:n,startIcon:i,...c},o)=>s.jsxs(ya,{ref:o,value:e.toString(),...c,children:[i&&s.jsx(Z,{tag:"span","aria-hidden":!0,children:i}),s.jsx(t2,{children:({isSelected:l,isIntermediate:u})=>s.jsx($a,{checked:u?"indeterminate":l})}),s.jsx(ce,{children:s.jsx(n2,{children:n})})]}));h.forwardRef(({children:e,label:n,startIcon:i,values:c=[],...o},l)=>s.jsxs(o7,{ref:l,children:[s.jsxs(ya,{value:c,...o,children:[i&&s.jsx(Z,{tag:"span","aria-hidden":!0,children:i}),s.jsx(t2,{children:({isSelected:u,isIntermediate:x})=>s.jsx($a,{checked:x?"indeterminate":u})}),s.jsx(ce,{children:n})]}),e]}));T(v9)`
  padding-left: ${({theme:e})=>e.spaces[7]};
`;const p9="23.2rem";h.forwardRef(({...e},n)=>s.jsx(b9,{ref:n,...e,tag:"nav"}));const b9=T(Z)`
  width: ${p9};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`;T(L7)`
  width: 2.4rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`;ht(({active:e,children:n,icon:i=null,withBullet:c=!1,isSubSectionChild:o=!1,...l},u)=>s.jsxs($9,{background:"neutral100",paddingLeft:o?9:7,paddingBottom:2,paddingTop:2,ref:u,...l,children:[s.jsxs(G,{children:[i?s.jsx(C9,{children:i}):s.jsx(Fi,{$active:e}),s.jsx(ce,{paddingLeft:2,children:n})]}),c&&s.jsx(G,{paddingRight:4,children:s.jsx(Fi,{$active:!0})})]}));const Fi=T.span`
  width: 0.4rem;
  height: 0.4rem;
  background-color: ${({theme:e,$active:n})=>n?e.colors.primary600:e.colors.neutral600};
  border-radius: 50%;
`,$9=T(Or)`
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

    ${Fi} {
      background-color: ${({theme:e})=>e.colors.primary600};
    }
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,C9=T.div`
  svg {
    height: 1.6rem;
    width: 1.6rem;
  }
`;T.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`;T(Z)`
  & > svg {
    height: 0.4rem;
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;h.forwardRef(({visibleLabels:e,onLabel:n="On",offLabel:i="Off",onCheckedChange:c,checked:o,defaultChecked:l,disabled:u,...x},v)=>{const[R,$]=Kt({prop:o,defaultProp:l}),y=b=>{$(b)};return s.jsxs(G,{gap:3,children:[s.jsx(y9,{ref:v,onCheckedChange:Vn(c,y),checked:R,disabled:u,...x,children:s.jsx(S9,{})}),e?s.jsx(R9,{"aria-hidden":!0,"data-disabled":u,"data-state":R?"checked":"unchecked",children:R?n:i}):null]})});const y9=T(u4)`
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
`,S9=T(d4)`
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
`,R9=T(ce)`
  color: ${e=>e.theme.colors.danger600};

  &[data-state='checked'] {
    color: ${e=>e.theme.colors.success600};
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral500};
  }
`,[_9,Ra]=Hr("Tabs");h.forwardRef(({disabled:e=!1,variant:n="regular",hasError:i,...c},o)=>s.jsx(_9,{disabled:e,hasError:i,variant:n,children:s.jsx(j9,{ref:o,...c})}));const j9=T(h4)`
  width: 100%;
  position: relative;
`;h.forwardRef((e,n)=>{const{variant:i}=Ra("List");return s.jsx(A9,{ref:n,...e,$variant:i})});const A9=T(f4)`
  display: flex;
  align-items: ${e=>e.$variant==="regular"?"flex-end":"unset"};
  position: relative;
  z-index: 0;
`;h.forwardRef(({children:e,disabled:n,...i},c)=>{const{disabled:o,variant:l,hasError:u}=Ra("Trigger"),x=o===!0||o===i.value||n,v=u===i.value;return s.jsxs(I9,{ref:c,...i,$hasError:v,$variant:l,disabled:x,children:[s.jsx(f2,{fontWeight:"bold",variant:l==="simple"?"sigma":void 0,children:e}),l==="simple"?s.jsx(h2,{}):null]})});const h2=T.span`
  display: block;
  width: 100%;
  background-color: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  height: 0.2rem;
`,f2=T(ce)``,I9=T(g4)`
  position: relative;
  color: ${e=>e.$hasError?e.theme.colors.danger600:e.theme.colors.neutral600};
  cursor: pointer;
  z-index: 0;

  ${e=>e.$variant==="simple"?te`
        padding-block: ${n=>n.theme.spaces[4]};
        padding-inline: ${n=>n.theme.spaces[4]};

        & > ${f2} {
          line-height: 1.2rem;
        }

        &[data-state='active'] {
          color: ${e.$hasError?e.theme.colors.danger600:e.theme.colors.primary700};

          & > ${h2} {
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
`;h.forwardRef((e,n)=>{const{variant:i}=Ra("Content");return s.jsx(T9,{$variant:i,ref:n,...e})});const T9=T(m4)`
  ${e=>e.$variant==="simple"?te``:te`
        position: relative;
        z-index: 1;
        background-color: ${n=>n.theme.colors.neutral0};
      `}
`,M9=T(Z)`
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.colors.neutral150};
`,E9=T(s9)`
  width: 100%;
  white-space: nowrap;
`,L9=T(Z)`
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
`,V9=T(Z)`
  overflow-x: auto;
`;h.forwardRef(({footer:e,...n},i)=>{const c=h.useRef(null),[o,l]=h.useState(),u=x=>{const v=x.target.scrollWidth-x.target.clientWidth;if(x.target.scrollLeft===0){l("right");return}if(x.target.scrollLeft===v){l("left");return}x.target.scrollLeft>0&&l("both")};return h.useEffect(()=>{c.current.scrollWidth>c.current.clientWidth&&l("right")},[]),s.jsxs(M9,{shadow:"tableShadow",hasRadius:!0,background:"neutral0",children:[s.jsx(L9,{$overflowing:o,position:"relative",children:s.jsx(V9,{ref:c,onScroll:u,paddingLeft:6,paddingRight:6,children:s.jsx(E9,{ref:i,...n})})}),e]})});T(u9)`
  & tr:last-of-type {
    border-bottom: none;
  }
`;T(l9)`
  border-bottom: 1px solid ${({theme:e})=>e.colors.neutral150};
`;T(d9)`
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
`;const g2=T(u2)`
  vertical-align: middle;
  text-align: left;
  outline-offset: -4px;

  /**
  * Hack to make sure the checkbox looks aligned
  */
  input {
    vertical-align: sub;
  }
`;h.forwardRef(({children:e,action:n,...i},c)=>s.jsx(g2,{color:"neutral600",as:c9,ref:c,...i,children:s.jsxs(G,{children:[e,n]})}));h.forwardRef(({children:e,...n},i)=>s.jsx(g2,{color:"neutral800",ref:i,...n,children:e}));T(Z)`
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
`;T(Z)`
  border-radius: 0 0 ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius};
  display: block;
  width: 100%;
  border: none;
`;ht(({children:e,startIcon:n,endIcon:i,disabled:c=!1,loading:o=!1,...l},u)=>{const x=c||o;return s.jsxs(H9,{ref:u,disabled:x,"aria-disabled":x,tag:"button",type:"button",gap:2,...l,children:[o?s.jsx(B9,{"aria-hidden":!0,children:s.jsx(Sl,{})}):n,s.jsx(ce,{variant:"pi",children:e}),i]})});const D9=at`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,B9=T.span`
  display: flex;
  animation: ${D9} 2s infinite linear;
  will-change: transform;
`,H9=T(G)`
  border: none;
  background-color: transparent;
  color: ${e=>e.theme.colors.primary600};
  cursor: pointer;

  &[aria-disabled='true'] {
    pointer-events: none;
    color: ${e=>e.theme.colors.neutral600};
  }

  ${qo}
`,Bo=h.forwardRef((e,n)=>s.jsx(Yo,{ref:n,...e}));Bo.displayName="TextInput";h.forwardRef(({disabled:e,hasError:n,id:i,name:c,required:o,...l},u)=>{const{error:x,...v}=vt("Textarea"),R=!!x||n,$=v.id??i,y=v.name??c,b=v.required||o;let A;return x?A=`${$}-error`:v.hint&&(A=`${$}-hint`),s.jsx(O9,{borderColor:R?"danger600":"neutral200",$hasError:R,hasRadius:!0,children:s.jsx(N9,{"aria-invalid":R,"aria-required":b,tag:"textarea",background:e?"neutral150":"neutral0",color:e?"neutral600":"neutral800",disabled:e,fontSize:2,hasRadius:!0,ref:u,lineHeight:4,padding:4,width:"100%",height:"100%",id:$,name:y,"aria-describedby":A,...l})})});const O9=T(Z)`
  height: 10.5rem;
  ${$n()}
`,N9=T(Z)`
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
`;h.forwardRef(({offLabel:e,onLabel:n,disabled:i,hasError:c,required:o,id:l,name:u,checked:x,onChange:v,...R},$)=>{const[y=!1,b]=Kt({prop:x}),A=y!==null&&!y,{error:M,...I}=vt("Toggle"),V=!!M||c,L=I.id??l,j=I.name??u,B=I.required||o;let F;return M?F=`${L}-error`:I.hint&&(F=`${L}-hint`),s.jsxs(F9,{position:"relative",hasRadius:!0,padding:1,background:i?"neutral150":"neutral100",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral200",wrap:"wrap",cursor:i?"not-allowed":"pointer",$hasError:V,children:[s.jsx(yc,{hasRadius:!0,flex:"1 1 50%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,justifyContent:"center",background:i&&A?"neutral200":A?"neutral0":"transparent",borderColor:i&&A?"neutral300":A?"neutral200":i?"neutral150":"neutral100",children:s.jsx(ce,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:i?"neutral700":A?"danger700":"neutral600",children:e})}),s.jsx(yc,{hasRadius:!0,flex:"1 1 50%",paddingLeft:3,paddingRight:3,justifyContent:"center",background:i&&y?"neutral200":y?"neutral0":"transparent",borderColor:i&&y?"neutral300":y?"neutral200":i?"neutral150":"neutral100",children:s.jsx(ce,{variant:"pi",fontWeight:"bold",textTransform:"uppercase",textColor:i?"neutral700":y?"primary600":"neutral600",children:n})}),s.jsx(z9,{...R,id:L,name:j,ref:$,onChange:z=>{b(z.currentTarget.checked),v?.(z)},type:"checkbox","aria-required":B,disabled:i,"aria-disabled":i,checked:!!y,"aria-describedby":F})]})});const F9=T(G)`
  ${$n()}
`,yc=T(G)`
  padding-block: 0.6rem;
`,z9=T.input`
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  z-index: 0;
  width: 100%;
`,k9=ht((e,n)=>{const{gap:i=0,gridCols:c=12,...o}=e;return s.jsx(W9,{ref:n,$gap:i,$gridCols:c,...o})}),W9=T(Z)`
  display: grid;
  grid-template-columns: repeat(${({$gridCols:e})=>e}, 1fr);
  ${({theme:e,$gap:n})=>Uo({gap:n},e)}
`,U9=ht(({col:e,s:n,xs:i,m:c,...o},l)=>s.jsx(q9,{ref:l,$col:e,$s:n,$xs:i,$m:c,...o})),q9=T(G)`
  grid-column: span ${({$xs:e})=>e??12};
  max-width: 100%;

  ${({theme:e})=>e.breakpoints.small} {
    grid-column: span ${({$s:e,$xs:n})=>e??n??12};
  }

  ${({theme:e})=>e.breakpoints.medium} {
    grid-column: span ${({$m:e,$s:n,$xs:i})=>e??n??i??12};
  }

  ${({theme:e})=>e.breakpoints.large} {
    grid-column: span ${({$col:e,$m:n,$s:i,$xs:c})=>e??n??i??c??12};
  }
`,Ln=Object.freeze(Object.defineProperty({__proto__:null,Item:U9,Root:k9},Symbol.toStringTag,{value:"Module"}));function G9(e,n,i){if(i===void 0&&(i=Error),!e)throw new i(n)}var K9=function(e){console.error(e)},Y9=function(e){console.warn(e)},Z9={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:K9,onWarn:Y9};function X9(e){G9(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}oc(oc({},Z9),{textComponent:h.Fragment});var _a=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=h.createContext(null)):h.createContext(null);_a.Consumer;_a.Provider;var Q9=_a;function ja(){var e=h.useContext(Q9);return X9(e),e}var zi;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(zi||(zi={}));var ki;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(ki||(ki={}));function m2(e){var n=function(i){var c=ja(),o=i.value,l=i.children,u=Wc(i,["value","children"]),x=typeof o=="string"?new Date(o||0):o,v=e==="formatDate"?c.formatDateToParts(x,u):c.formatTimeToParts(x,u);return l(v)};return n.displayName=ki[e],n}function kr(e){var n=function(i){var c=ja(),o=i.value,l=i.children,u=Wc(i,["value","children"]),x=c[e](o,u);if(typeof l=="function")return l(x);var v=c.textComponent||h.Fragment;return h.createElement(v,null,x)};return n.displayName=zi[e],n}kr("formatDate");kr("formatTime");kr("formatNumber");kr("formatList");kr("formatDisplayName");m2("formatDate");m2("formatTime");const J9=(e,n)=>!e||!n?{}:{[e]:n[e]},P9=e=>(e?.inner||[]).reduce((n,i)=>(i.path&&(n[i.path.split("[").join(".").split("]").join("")]={id:i.message,defaultMessage:i.message,values:J9(i?.type,i?.params)}),n),{}),Sc=y4().shape({email:S4().email(ac.email.id).required(ac.required.id)}),eb=T.a`
  color: ${({theme:e})=>e.colors.primary600};
`,ob=()=>s.jsx(Vo.Protect,{permissions:v4.settings,children:s.jsx(tb,{})}),tb=()=>{const{toggleNotification:e}=p4(),{formatMessage:n}=ja(),{get:i,post:c}=b4(),[o,l]=h.useState(""),[u,x]=h.useState(!1),[v,R]=h.useState({}),{data:$,isLoading:y}=$4(["email","settings"],async()=>{const I=await i("/email/settings"),{data:{config:V}}=I;return V}),b=C4(async I=>{await c("/email/test",I)},{onError(){e({type:"danger",message:n({id:"email.Settings.email.plugin.notification.test.error",defaultMessage:"Failed to send a test mail to {to}"},{to:o})})},onSuccess(){e({type:"success",message:n({id:"email.Settings.email.plugin.notification.test.success",defaultMessage:"Email test succeeded, check the {to} mailbox"},{to:o})})},retry:!1});h.useEffect(()=>{Sc.validate({email:o},{abortEarly:!1}).then(()=>x(!0)).catch(()=>x(!1))},[o]);const A=I=>{l(()=>I.target.value)},M=async I=>{I.preventDefault();try{await Sc.validate({email:o},{abortEarly:!1})}catch(V){V instanceof R4&&R(P9(V))}b.mutate({to:o})};return y?s.jsx(Vo.Loading,{}):s.jsxs(Vo.Main,{labelledBy:"title","aria-busy":y||b.isLoading,children:[s.jsx(Vo.Title,{children:n({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:n({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"})})}),s.jsx(ic.Header,{id:"title",title:n({id:"email.Settings.email.plugin.title",defaultMessage:"Configuration"}),subtitle:n({id:"email.Settings.email.plugin.subTitle",defaultMessage:"Test the settings for the Email plugin"})}),s.jsx(ic.Content,{children:$&&s.jsx("form",{onSubmit:M,children:s.jsxs(G,{direction:"column",alignItems:"stretch",gap:7,children:[s.jsx(Z,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:s.jsxs(G,{direction:"column",alignItems:"stretch",gap:4,children:[s.jsxs(G,{direction:"column",alignItems:"stretch",gap:1,children:[s.jsx(ce,{variant:"delta",tag:"h2",children:n({id:"email.Settings.email.plugin.title.config",defaultMessage:"Configuration"})}),s.jsx(ce,{children:n({id:"email.Settings.email.plugin.text.configuration",defaultMessage:"The plugin is configured through the {file} file, checkout this {link} for the documentation."},{file:"./config/plugins.js",link:s.jsx(eb,{href:"https://docs.strapi.io/developer-docs/latest/plugins/email.html",target:"_blank",rel:"noopener noreferrer",children:n({id:"email.link",defaultMessage:"Link"})})})})]}),s.jsxs(Ln.Root,{gap:5,children:[s.jsx(Ln.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:s.jsxs(pn.Root,{name:"shipper-email",children:[s.jsx(pn.Label,{children:n({id:"email.Settings.email.plugin.label.defaultFrom",defaultMessage:"Default sender email"})}),s.jsx(Bo,{placeholder:n({id:"email.Settings.email.plugin.placeholder.defaultFrom",defaultMessage:"ex: Strapi No-Reply '<'no-reply@strapi.io'>'"}),disabled:!0,value:$.settings.defaultFrom})]})}),s.jsx(Ln.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:s.jsxs(pn.Root,{name:"response-email",children:[s.jsx(pn.Label,{children:n({id:"email.Settings.email.plugin.label.defaultReplyTo",defaultMessage:"Default response email"})}),s.jsx(Bo,{placeholder:n({id:"email.Settings.email.plugin.placeholder.defaultReplyTo",defaultMessage:"ex: Strapi '<'example@strapi.io'>'"}),disabled:!0,value:$.settings.defaultReplyTo})]})}),s.jsx(Ln.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:s.jsxs(pn.Root,{name:"email-provider",children:[s.jsx(pn.Label,{children:n({id:"email.Settings.email.plugin.label.provider",defaultMessage:"Email provider"})}),s.jsx(Oi,{disabled:!0,value:$.provider,children:s.jsx(Ni,{value:$.provider,children:$.provider})})]})})]})]})}),s.jsxs(G,{alignItems:"stretch",background:"neutral0",direction:"column",gap:4,hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:[s.jsx(ce,{variant:"delta",tag:"h2",children:n({id:"email.Settings.email.plugin.title.test",defaultMessage:"Test email delivery"})}),s.jsxs(Ln.Root,{gap:5,children:[s.jsx(Ln.Item,{col:6,s:12,direction:"column",alignItems:"stretch",children:s.jsxs(pn.Root,{name:"test-address",error:v.email?.id&&n({id:`email.${v.email?.id}`,defaultMessage:"This is not a valid email"}),children:[s.jsx(pn.Label,{children:n({id:"email.Settings.email.plugin.label.testAddress",defaultMessage:"Recipient email"})}),s.jsx(Bo,{onChange:A,value:o,placeholder:n({id:"email.Settings.email.plugin.placeholder.testAddress",defaultMessage:"ex: developer@example.com"})})]})}),s.jsx(Ln.Item,{col:7,s:12,direction:"column",alignItems:"start",children:s.jsx(No,{loading:b.isLoading,disabled:!u,type:"submit",startIcon:s.jsx(Nw,{}),children:n({id:"email.Settings.email.plugin.button.test-email",defaultMessage:"Send test email"})})})]})]})]})})})]})};export{ob as ProtectedSettingsPage};
