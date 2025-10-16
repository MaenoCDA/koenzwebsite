import{i3 as I,b$ as ne,aY as pe,i4 as y,af as he,O as K,i5 as ge,j as e,au as oe,aU as me,i6 as S,i7 as se,i8 as x,i9 as N,ia as fe,aA as ie,r as E,ib as g,J as h,ae as xe,ao as je,ic as be,id as X,ie as Y,ig as P,ih as W,ii as f,ij as _,ik as G,il as Q,im as ye,io as U,ip as Ce,iq as we,ir as $e}from"./strapi-BWAWKOj2.js";import{u as R,a as ae,g as p,F as ee,A as Te,C as te}from"./index-BhIIILgq-BtCIoQDb.js";import"./groupBy-BHwRsj3S.js";import"./_baseEach-DDDKmNKC.js";import"./index-L6AmyMfn.js";import"./index-BRVyLNfZ.js";import"./_arrayIncludesWith-BNzMLSv9.js";import"./sortBy-BHaHGoJh.js";import"./_baseMap-e93yDYG_.js";const ve=h(g)`
  table {
    width: 100%;
    white-space: nowrap;
  }

  thead {
    border-bottom: 1px solid ${({theme:t})=>t.colors.neutral150};

    tr {
      border-top: 0;
    }
  }

  tr {
    border-top: 1px solid ${({theme:t})=>t.colors.neutral150};

    & td,
    & th {
      padding: ${({theme:t})=>t.spaces[4]};
    }

    & td:first-of-type,
    & th:first-of-type {
      padding: 0 ${({theme:t})=>t.spaces[1]};
    }
  }

  th,
  td {
    vertical-align: middle;
    text-align: left;
    color: ${({theme:t})=>t.colors.neutral600};
    outline-offset: -4px;
  }
`,re=h.tr`
  &.component-row,
  &.dynamiczone-row {
    position: relative;
    border-top: none !important;

    table tr:first-child {
      border-top: none;
    }

    > td:first-of-type {
      padding: 0 0 0 2rem;
      position: relative;

      &::before {
        content: '';
        width: 0.4rem;
        height: calc(100% - 40px);
        position: absolute;
        top: -7px;
        left: 2.6rem;
        border-radius: 4px;

        ${({$isFromDynamicZone:t,$isChildOfDynamicZone:n,theme:o})=>n?`background-color: ${o.colors.primary200};`:t?`background-color: ${o.colors.primary200};`:`background: ${o.colors.neutral150};`}
      }
    }
  }

  &.dynamiczone-row > td:first-of-type {
    padding: 0;
  }
`,le=({customRowComponent:t,component:n,isFromDynamicZone:o=!1,isNestedInDZComponent:s=!1,firstLoopComponentUid:r})=>{const{modifiedData:a}=R(),{schema:{attributes:c}}=y(a,["components",n],{schema:{attributes:[]}});return e.jsx(re,{$isChildOfDynamicZone:o,className:"component-row",children:e.jsx("td",{colSpan:12,children:e.jsx(ce,{customRowComponent:t,items:c,targetUid:n,firstLoopComponentUid:r||n,editTarget:"components",isFromDynamicZone:o,isNestedInDZComponent:s,isSub:!0,secondLoopComponentUid:r?n:null})})})},ke=({isActive:t=!1,icon:n="dashboard"})=>{const o=te[n]||te.dashboard;return e.jsx(x,{alignItems:"center",background:t?"primary200":"neutral200",justifyContent:"center",height:8,width:8,borderRadius:"50%",children:e.jsx(o,{height:"2rem",width:"2rem"})})},de=h(g)`
  position: absolute;
  display: none;
  top: 5px;
  right: 0.8rem;

  svg {
    width: 1rem;
    height: 1rem;

    path {
      fill: ${({theme:t})=>t.colors.primary600};
    }
  }
`,Me=h(x)`
  width: 14rem;
  height: 8rem;
  position: relative;
  border: 1px solid ${({theme:t})=>t.colors.neutral200};
  background: ${({theme:t})=>t.colors.neutral100};
  border-radius: ${({theme:t})=>t.borderRadius};
  max-width: 100%;

  &.active,
  &:focus,
  &:hover {
    border: 1px solid ${({theme:t})=>t.colors.primary200};
    background: ${({theme:t})=>t.colors.primary100};
    color: ${({theme:t})=>t.colors.primary600};

    ${de} {
      display: block;
    }

    /* > ComponentIcon */
    > div:first-child {
      background: ${({theme:t})=>t.colors.primary200};
      color: ${({theme:t})=>t.colors.primary600};

      svg {
        path {
          fill: ${({theme:t})=>t.colors.primary600};
        }
      }
    }
  }
`,Ae=({component:t,dzName:n,index:o,isActive:s=!1,isInDevelopmentMode:r=!1,onClick:a})=>{const{modifiedData:c,removeComponentFromDynamicZone:b}=R(),{schema:{icon:j,displayName:m}}=y(c,["components",t],{schema:{}}),u=i=>{i.stopPropagation(),b(n,o)};return e.jsxs(Me,{alignItems:"center",direction:"column",className:s?"active":"",borderRadius:"borderRadius",justifyContent:"center",paddingLeft:4,paddingRight:4,shrink:0,onClick:a,role:"tab",tabIndex:s?0:-1,cursor:"pointer","aria-selected":s,"aria-controls":`dz-${n}-panel-${o}`,id:`dz-${n}-tab-${o}`,children:[e.jsx(ke,{icon:j,isActive:s}),e.jsx(g,{marginTop:1,maxWidth:"100%",children:e.jsx(f,{variant:"pi",fontWeight:"bold",ellipsis:!0,children:m})}),r&&e.jsx(de,{tag:"button",onClick:u,children:e.jsx($e,{})})]})},Fe=h(N)`
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.9rem;
  border-radius: 6.4rem;
  background: ${({theme:t})=>t.colors.primary100};
  path {
    fill: ${({theme:t})=>t.colors.primary600};
  }
`,Ie=h(g)`
  height: 9rem;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
`,Re=h(x)`
  width: 100%;
  overflow-x: auto;
`,De=h(g)`
  padding-top: 9rem;
`,Be=h(x)`
  flex-shrink: 0;
  width: 14rem;
  height: 8rem;
  justify-content: center;
  align-items: center;
`,Se=({customRowComponent:t,components:n=[],addComponent:o,name:s,targetUid:r})=>{const{isInDevelopmentMode:a}=R(),[c,b]=E.useState(0),{formatMessage:j}=I(),m=i=>{c!==i&&b(i)},u=()=>{o(s)};return e.jsx(re,{className:"dynamiczone-row",$isFromDynamicZone:!0,children:e.jsxs("td",{colSpan:12,children:[e.jsx(Ie,{paddingLeft:8,children:e.jsxs(Re,{gap:2,children:[a&&e.jsx("button",{type:"button",onClick:u,children:e.jsxs(Be,{direction:"column",alignItems:"stretch",gap:1,children:[e.jsx(Fe,{}),e.jsx(f,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:j({id:p("button.component.add"),defaultMessage:"Add a component"})})]})}),e.jsx(x,{role:"tablist",gap:2,children:n.map((i,l)=>e.jsx(Ae,{dzName:s||"",index:l,component:i,isActive:c===l,isInDevelopmentMode:a,onClick:()=>m(l)},i))})]})}),e.jsx(De,{children:n.map((i,l)=>{const d={customRowComponent:t,component:i};return e.jsx(g,{id:`dz-${s}-panel-${l}`,role:"tabpanel","aria-labelledby":`dz-${s}-tab-${l}`,style:{display:c===l?"block":"none"},children:e.jsx("table",{children:e.jsx("tbody",{children:E.createElement(le,{...d,isFromDynamicZone:!0,component:r,key:i})})})},i)})})]})})},Ne=h(g)`
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
    fill: ${({theme:t,color:n})=>t.colors[`${n}600`]};
  }
`,Ee=h(g)`
  border-radius: 0 0 ${({theme:t})=>t.borderRadius} ${({theme:t})=>t.borderRadius};
  display: block;
  width: 100%;
  border: none;
  position: relative;
  left: -0.4rem;
`,Le=({children:t,icon:n,color:o,...s})=>e.jsx(Ee,{paddingBottom:4,paddingTop:4,tag:"button",type:"button",...s,children:e.jsxs(x,{children:[e.jsx(Ne,{color:o,"aria-hidden":!0,background:`${o}200`,children:n}),e.jsx(g,{paddingLeft:3,children:e.jsx(f,{variant:"pi",fontWeight:"bold",textColor:`${o}600`,children:t})})]})}),ce=({addComponentToDZ:t,customRowComponent:n,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:r=!1,isMain:a=!1,isNestedInDZComponent:c=!1,isSub:b=!1,items:j=[],secondLoopComponentUid:m,targetUid:u})=>{const{formatMessage:i}=I(),{trackUsage:l}=ne(),{isInDevelopmentMode:d,modifiedData:C,isInContentTypeView:T}=R(),{onOpenModalAddField:k}=ae(),w=()=>{l("hasClickedCTBAddFieldBanner"),k({forTarget:o,targetUid:u})};return u?j.length===0&&a?e.jsxs(X,{colCount:2,rowCount:2,children:[e.jsx(Y,{children:e.jsxs(P,{children:[e.jsx(W,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),e.jsx(W,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx(_,{children:e.jsx(P,{children:e.jsx(G,{colSpan:2,children:e.jsx(Q,{action:e.jsx(S,{onClick:w,size:"L",startIcon:e.jsx(N,{}),variant:"secondary",children:i({id:p("table.button.no-fields"),defaultMessage:"Add new field"})}),content:i(T?{id:p("table.content.no-fields.collection-type"),defaultMessage:"Add your first field to this Collection-Type"}:{id:p("table.content.no-fields.component"),defaultMessage:"Add your first field to this component"}),hasRadius:!0,icon:e.jsx(ee,{width:"16rem"})})})})})]}):e.jsxs(ve,{children:[e.jsx(g,{paddingLeft:6,paddingRight:a?6:0,...a&&{style:{overflowX:"auto"}},children:e.jsxs("table",{children:[a&&e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:e.jsx(f,{variant:"sigma",textColor:"neutral800",children:i({id:"global.name",defaultMessage:"Name"})})}),e.jsx("th",{colSpan:2,children:e.jsx(f,{variant:"sigma",textColor:"neutral800",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx("tbody",{children:j.map(v=>{const{type:A}=v,D=n;return e.jsxs(E.Fragment,{children:[e.jsx(D,{...v,isNestedInDZComponent:c,targetUid:u,editTarget:o,firstLoopComponentUid:s,isFromDynamicZone:r,secondLoopComponentUid:m}),A==="component"&&e.jsx(le,{...v,customRowComponent:n,targetUid:u,isNestedInDZComponent:r,editTarget:o,firstLoopComponentUid:s}),A==="dynamiczone"&&e.jsx(Se,{...v,customRowComponent:n,addComponent:t,targetUid:u})]},v.name)})})]})}),a&&d&&e.jsx(ye,{cursor:"pointer",icon:e.jsx(N,{}),onClick:w,children:i({id:p(`form.button.add.field.to.${C.contentType?C.contentType.schema.kind:o||"collectionType"}`),defaultMessage:"Add another field"})}),b&&d&&!r&&e.jsx(Le,{icon:e.jsx(N,{}),onClick:w,color:r?"primary":"neutral",children:i({id:p("form.button.add.field.to.component"),defaultMessage:"Add another field"})})]}):e.jsxs(X,{colCount:2,rowCount:2,children:[e.jsx(Y,{children:e.jsxs(P,{children:[e.jsx(W,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:i({id:"global.name",defaultMessage:"Name"})})}),e.jsx(W,{children:e.jsx(f,{variant:"sigma",textColor:"neutral600",children:i({id:"global.type",defaultMessage:"Type"})})})]})}),e.jsx(_,{children:e.jsx(P,{children:e.jsx(G,{colSpan:2,children:e.jsx(Q,{content:i({id:p("table.content.create-first-content-type"),defaultMessage:"Create your first Collection-Type"}),hasRadius:!0,icon:e.jsx(ee,{width:"16rem"})})})})})]})},Oe=h(g)`
  position: absolute;
  left: -1.8rem;
  top: 0px;

  &:before {
    content: '';
    width: 0.4rem;
    height: 1.2rem;
    background: ${({theme:t,color:n})=>t.colors[n]};
    display: block;
  }
`,Pe=h.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:t,color:n})=>t.colors[n]};
  }
`,We=t=>e.jsx(Oe,{children:e.jsx(Pe,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z"})})}),ze=({type:t,customField:n=null,repeatable:o=!1})=>{const{formatMessage:s}=I();let r=t;return["integer","biginteger","float","decimal"].includes(t)?r="number":["string"].includes(t)&&(r="text"),n?e.jsx(f,{children:s({id:p("attribute.customField"),defaultMessage:"Custom field"})}):e.jsxs(f,{textColor:"neutral800",children:[s({id:p(`attribute.${r}`),defaultMessage:t})," ",o&&s({id:p("component.repeatable"),defaultMessage:"(repeatable)"})]})},Ze=({content:t})=>e.jsx(e.Fragment,{children:oe(t)}),Ve=h(g)`
  position: relative;
`,He=E.memo(({configurable:t=!0,customField:n=null,editTarget:o,firstLoopComponentUid:s=null,isFromDynamicZone:r=!1,name:a,onClick:c,relation:b="",repeatable:j=!1,secondLoopComponentUid:m=null,target:u=null,targetUid:i=null,type:l})=>{const{contentTypes:d,isInDevelopmentMode:C,removeAttribute:T}=R(),{formatMessage:k}=I(),w=l==="relation"&&b.includes("morph"),v=["integer","biginteger","float","decimal"].includes(l)?"number":l,A=y(d,[u],{}),D=y(A,["schema","displayName"],""),B=y(A,"plugin"),z=u?"relation":v,L=()=>{w||t!==!1&&c(o,m||s||i,a,l,n)};let M;return m&&s?M=2:s?M=1:M=0,e.jsxs(Ve,{tag:"tr",onClick:C&&t&&!w?L:void 0,children:[e.jsxs("td",{style:{position:"relative"},children:[M!==0&&e.jsx(We,{color:r?"primary200":"neutral150"}),e.jsxs(x,{paddingLeft:2,gap:4,children:[e.jsx(Te,{type:z,customField:n}),e.jsx(f,{textColor:"neutral800",fontWeight:"bold",children:a})]})]}),e.jsx("td",{children:u?e.jsxs(f,{textColor:"neutral800",children:[k({id:p(`modelPage.attribute.${w?"relation-polymorphic":"relationWith"}`),defaultMessage:"Relation with"})," ",e.jsxs("span",{style:{fontStyle:"italic"},children:[e.jsx(Ze,{content:D})," ",B&&`(${k({id:p("from"),defaultMessage:"from"})}: ${B})`]})]}):e.jsx(ze,{type:l,customField:n,repeatable:j})}),e.jsx("td",{children:C?e.jsx(x,{justifyContent:"flex-end",onClick:F=>F.stopPropagation(),children:t?e.jsxs(x,{gap:1,children:[!w&&e.jsx(U,{onClick:L,label:`${k({id:"app.utils.edit",defaultMessage:"Edit"})} ${a}`,variant:"ghost",children:e.jsx(se,{})}),e.jsx(U,{onClick:F=>{F.stopPropagation(),T(o,a,m||s||"")},label:`${k({id:"global.delete",defaultMessage:"Delete"})} ${a}`,variant:"ghost",children:e.jsx(Ce,{})})]}):e.jsx(we,{})}):e.jsx(g,{height:"3.2rem"})})]})}),qe=t=>{let n;switch(t){case"date":case"datetime":case"time":case"timestamp":n="date";break;case"integer":case"biginteger":case"decimal":case"float":n="number";break;case"string":case"text":n="text";break;case"":n="relation";break;default:n=t}return n},Je={collectionTypesConfigurations:[{action:"plugin::content-manager.collection-types.configure-view",subject:null}],componentsConfigurations:[{action:"plugin::content-manager.components.configure-layout",subject:null}],singleTypesConfigurations:[{action:"plugin::content-manager.single-types.configure-view",subject:null}]},Ke=E.memo(({disabled:t,isTemporary:n=!1,isInContentTypeView:o=!0,contentTypeKind:s="collectionType",targetUid:r=""})=>{const{formatMessage:a}=I(),c=xe(),{collectionTypesConfigurations:b,componentsConfigurations:j,singleTypesConfigurations:m}=Je,u=a({id:"content-type-builder.form.button.configure-view",defaultMessage:"Configure the view"});let i=b;const l=()=>(n||c(o?`/content-manager/collection-types/${r}/configurations/edit`:`/content-manager/components/${r}/configurations/edit`),!1);o&&s==="singleType"&&(i=m),o||(i=j);const{isLoading:d,allowedActions:C}=je({viewConfig:i});return d||!C.canConfigureView&&!C.canConfigureLayout?null:e.jsx(S,{startIcon:e.jsx(be,{}),variant:"tertiary",onClick:l,disabled:n||t,children:u})}),Xe=h(ie.Header)`
  overflow-wrap: anywhere;
`,it=()=>{const{initialData:t,modifiedData:n,isInDevelopmentMode:o,isInContentTypeView:s,submitData:r}=R(),{formatMessage:a}=I(),{trackUsage:c}=ne(),b=pe("/plugins/content-type-builder/:kind/:currentUID"),{onOpenModalAddComponentsToDZ:j,onOpenModalAddField:m,onOpenModalEditField:u,onOpenModalEditSchema:i,onOpenModalEditCustomField:l}=ae(),d=s?"contentType":"component",C=[d,"schema","attributes"],T=y(n,[d,"uid"]),k=y(n,[d,"isTemporary"],!1),w=y(n,[d,"schema","kind"],null),v=y(n,C,[]),A=he(t,[d,"plugin"]),D=!K(n,t),B=s?"contentType":"component",z=$=>{j({dynamicZoneTarget:$,targetUid:T})},L=async($,Z,V,H,q)=>{const J=qe(H);q?l({forTarget:$,targetUid:Z,attributeName:V,attributeType:J,customFieldUid:q}):u({forTarget:$,targetUid:Z,attributeName:V,attributeType:J,step:H==="component"?"2":null})};let M=y(n,[d,"schema","displayName"],"");const F=y(n,[d,"schema","kind"],""),O=b?.params.currentUID==="create-content-type";!M&&O&&(M=a({id:p("button.model.create"),defaultMessage:"Create new collection type"}));const ue=()=>{const $=F||d;$==="collectionType"&&c("willEditNameOfContentType"),$==="singleType"&&c("willEditNameOfSingleType"),i({modalType:d,forTarget:d,targetUid:T,kind:$})};return ge({when:D,message:a({id:p("prompt.unsaved"),defaultMessage:"Are you sure?"})}),e.jsxs(e.Fragment,{children:[e.jsx(Xe,{id:"title",primaryAction:o&&e.jsxs(x,{gap:2,marginLeft:2,children:[!O&&e.jsx(S,{startIcon:e.jsx(N,{}),variant:"secondary",minWidth:"max-content",onClick:()=>{m({forTarget:B,targetUid:T})},children:a({id:p("button.attributes.add.another"),defaultMessage:"Add another field"})}),e.jsx(S,{startIcon:e.jsx(fe,{}),onClick:async()=>await r(),type:"submit",disabled:K(n,t),children:a({id:"global.save",defaultMessage:"Save"})})]}),secondaryAction:o&&!A&&!O&&e.jsx(S,{startIcon:e.jsx(se,{}),variant:"tertiary",onClick:ue,children:a({id:"app.utils.edit",defaultMessage:"Edit"})}),title:oe(M),subtitle:a({id:p("listView.headerLayout.description"),defaultMessage:"Build the data architecture of your content"}),navigationAction:e.jsx(me,{})}),e.jsx(ie.Content,{children:e.jsxs(x,{direction:"column",alignItems:"stretch",gap:4,children:[e.jsx(x,{justifyContent:"flex-end",children:e.jsx(x,{gap:2,children:e.jsx(Ke,{targetUid:T,isTemporary:k,isInContentTypeView:s,contentTypeKind:w,disabled:O},"link-to-cm-settings-view")})}),e.jsx(g,{background:"neutral0",shadow:"filterShadow",hasRadius:!0,children:e.jsx(ce,{items:v,customRowComponent:$=>e.jsx(He,{...$,onClick:L}),addComponentToDZ:z,targetUid:T,editTarget:B,isMain:!0})})]})})]})};export{it as default};
