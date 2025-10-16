import{lC as ut,r as k,lE as Oe,sU as xt,ak as Tr,sV as xr,sW as br,sX as wr,j as d,sY as _r,sZ as kr,cG as Cr,J as c,n as S,B as b,a7 as pt,e as N,v as le,L as $r,N as Fn,D as Un,b_ as Gn,s_ as Sr,y as Ar,aE as Er,K as Rr,at as ce,aw as Ir,av as z,U as zt,aG as Bt,a6 as Mr,a9 as Lr,s$ as jr,sF as Ht,aQ as Dr,jC as Pr,jD as Or,qM as Nr,hK as W,ai as pe,qu as $e,ch as zn,t0 as qr,c8 as Fr,ca as Ur,cL as xe,sz as Gr,t1 as bt,sA as zr,jr as mt,sL as Br,t2 as Bn,t3 as Hn,t4 as Hr,dZ as Zr,t5 as Wr,si as $t,sj as Vr,sk as tn,sl as Qr,sm as Kr,sn as Yr,so as Jr,sp as Xr,sq as es,sr as ts,sQ as Zn,G as Wn,T as Zt,t6 as ns,M as rs,t7 as ss,d as Vn,t8 as as,t9 as os,mb as is,ta as ds,tb as Qn,sI as Kn,cH as Yn,tc as ls,sO as cs,td as us,te as ps,sG as Jn,sP as ms,tf as fs,tg as hs,th as gs,ti as ys,tj as Wt,cD as vs,aW as Ts,tk as xs,tl as bs,tm as Xn,tq as je,to as nn,tp as St,ad as ws}from"./strapi-JxO5pAxa.js";import{u as _s}from"./index-98ha0H9h.js";function er(e,t,n){if(n===void 0&&(n=Error),!e)throw new n(t)}var ks=function(e){},Cs=function(e){},$s={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:ks,onWarn:Cs};function Ss(e){er(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}ut(ut({},$s),{textComponent:k.Fragment});function rn(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),s=n.length;if(r.length!==s)return!1;for(var a=0;a<s;a++){var o=n[a];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}var Vt=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=k.createContext(null)):k.createContext(null);Vt.Consumer;Vt.Provider;var As=Vt;function wt(){var e=k.useContext(As);return Ss(e),e}var Lt;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Lt||(Lt={}));var jt;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(jt||(jt={}));function tr(e){var t=function(n){var r=wt(),s=n.value,a=n.children,o=Oe(n,["value","children"]),i=typeof s=="string"?new Date(s||0):s,l=e==="formatDate"?r.formatDateToParts(i,o):r.formatTimeToParts(i,o);return a(l)};return t.displayName=jt[e],t}function et(e){var t=function(n){var r=wt(),s=n.value,a=n.children,o=Oe(n,["value","children"]),i=r[e](s,o);if(typeof a=="function")return a(i);var l=r.textComponent||k.Fragment;return k.createElement(l,null,i)};return t.displayName=Lt[e],t}function Es(e,t){var n=e.values,r=Oe(e,["values"]),s=t.values,a=Oe(t,["values"]);return rn(s,n)&&rn(r,a)}function nr(e){var t=wt(),n=t.formatMessage,r=t.textComponent,s=r===void 0?k.Fragment:r,a=e.id,o=e.description,i=e.defaultMessage,l=e.values,u=e.children,p=e.tagName,T=p===void 0?s:p,m=e.ignoreTag,g={id:a,description:o,defaultMessage:i},w=n(g,l,{ignoreTag:m});return typeof u=="function"?u(Array.isArray(w)?w:[w]):T?k.createElement(T,null,k.Children.toArray(w)):k.createElement(k.Fragment,null,w)}nr.displayName="FormattedMessage";var ge=k.memo(nr,Es);ge.displayName="MemoizedFormattedMessage";et("formatDate");et("formatTime");et("formatNumber");et("formatList");et("formatDisplayName");tr("formatDate");tr("formatTime");const ft="5.6rem",Rs=e=>{let t=null;return document.cookie.split(";").forEach(r=>{const[s,a]=r.split("=").map(o=>o.trim());s===e&&(t=decodeURIComponent(a))}),t},Is=(e,t,n)=>{let r="";document.cookie=`${e}=${encodeURIComponent(t)}; Path=/${r}`},Ms=e=>{document.cookie=`${e}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`},Le={TOKEN:"jwtToken",STATUS:"isLoggedIn"},sn="STRAPI_THEME",Ls="strapi-admin-language",js=xt({name:"admin",initialState:()=>({language:{locale:"en",localeNames:{en:"English"}},permissions:{},theme:{availableThemes:[],currentTheme:localStorage.getItem(sn)||"system"},token:null}),reducers:{setAppTheme(e,t){e.theme.currentTheme=t.payload,window.localStorage.setItem(sn,t.payload)},setAvailableThemes(e,t){e.theme.availableThemes=t.payload},setLocale(e,t){e.language.locale=t.payload,window.localStorage.setItem(Ls,t.payload),document.documentElement.setAttribute("lang",t.payload)},setToken(e,t){e.token=t.payload},login(e,t){const{token:n,persist:r}=t.payload;r?window.localStorage.setItem(Le.TOKEN,JSON.stringify(n)):Is(Le.TOKEN,n),window.localStorage.setItem(Le.STATUS,"true"),e.token=n},logout(e){e.token=null,Ms(Le.TOKEN),window.localStorage.removeItem(Le.TOKEN),window.localStorage.removeItem(Le.STATUS)}}}),{setAppTheme:ui,setAvailableThemes:pi,setLocale:mi,setToken:fi,logout:Ds,login:Ps}=js.actions,an={TOKEN:"jwtToken"};class Ye extends Error{constructor(t,n){super(t),this.name="FetchError",this.message=t,this.response=n,this.code=n?.data?.error?.status,this.status=n?.data?.error?.status,Error.captureStackTrace&&Error.captureStackTrace(this,Ye)}}const Os=e=>e instanceof Ye,Ns=()=>{const e=localStorage.getItem(an.TOKEN);return e?JSON.parse(e):Rs(an.TOKEN)??null},dt=(e={})=>{const t=window.strapi.backendURL,n={Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${Ns()}`},r=m=>m instanceof FormData,s=m=>m.charAt(0)!=="/"?`/${m}`:m,a=m=>new RegExp("^(?:[a-z+]+:)?//","i").test(m),o=m=>a(m)?m:s(m),i=async(m,g)=>{try{const w=await m.json();if(!m.ok&&w.error&&!g?.(m.status))throw new Ye(w.error.message,{data:w});if(!m.ok&&!g?.(m.status))throw new Ye("Unknown Server Error");return{data:w}}catch(w){if(w instanceof SyntaxError&&m.ok)return{data:[],status:m.status};throw w}},l=m=>g=>{if(m){if(typeof m=="string")return`${g}?${m}`;const w=xr.stringify(m,{encode:!1});return`${g}?${w}`}return g},u=m=>`${t}${m}`,p=m=>Tr(o,u,l(m?.params));return{get:async(m,g)=>{const w=new Headers({...n,...g?.headers}),J=p(g),X=await fetch(J(m),{signal:g?.signal??e.signal,method:"GET",headers:w});return i(X,g?.validateStatus)},post:async(m,g,w)=>{const J=new Headers({...n,...w?.headers}),X=p(w);r(g)&&J.delete("Content-Type");const ke=await fetch(X(m),{signal:w?.signal??e.signal,method:"POST",headers:J,body:r(g)?g:JSON.stringify(g)});return i(ke,w?.validateStatus)},put:async(m,g,w)=>{const J=new Headers({...n,...w?.headers}),X=p(w);r(g)&&J.delete("Content-Type");const ke=await fetch(X(m),{signal:w?.signal??e.signal,method:"PUT",headers:J,body:r(g)?g:JSON.stringify(g)});return i(ke,w?.validateStatus)},del:async(m,g)=>{const w=new Headers({...n,...g?.headers}),J=p(g),X=await fetch(J(m),{signal:g?.signal??e.signal,method:"DELETE",headers:w});return i(X,g?.validateStatus)}}};let at=null;const qs=e=>/^\/admin\/(login|logout|access-token)\b/.test(e),Fs=async(e,t)=>{const{signal:n,dispatch:r}=t,s=async a=>{const{get:o,post:i,del:l,put:u}=dt();if(typeof a=="string")return await o(a,{signal:n});const{url:p,method:T="GET",data:m,config:g}=a;return T==="POST"?i(p,m,{...g,signal:n}):T==="DELETE"?l(p,{...g,signal:n}):T==="PUT"?u(p,m,{...g,signal:n}):o(p,{...g,signal:n})};try{return{data:(await s(e)).data}}catch(a){if(Os(a)){if(a.status===401){const i=typeof e=="string"?e:e.url;if(!qs(i)){if(!at){async function l(){const{post:u}=dt(),T=(await u("/admin/access-token"))?.data?.data?.token;if(!T)throw new Error("access_token_exchange_failed");const m=!!localStorage.getItem("jwtToken");return r(Ps({token:T,persist:m})),T}at=l().finally(()=>{at=null})}try{return await at,{data:(await s(e)).data}}catch{try{const{post:u}=dt();await u("/admin/logout")}catch{}r(Ds())}}}return typeof a.response?.data=="object"&&a.response?.data!==null&&"error"in a.response?.data?{data:void 0,error:a.response?.data.error}:{data:void 0,error:{name:"UnknownError",message:a.message,details:a.response,status:a.status}}}const o=a;return{data:void 0,error:{name:o.name,message:o.message,stack:o.stack}}}},Us=()=>Fs,re=br({reducerPath:"adminApi",baseQuery:Us(),tagTypes:["GuidedTourMeta","HomepageKeyStatistics","AIUsage"],endpoints:()=>({})}),Gs=re.injectEndpoints({endpoints:e=>({getAIUsage:e.query({query:()=>({method:"GET",url:"/admin/ai-usage"}),providesTags:["AIUsage"]}),getAiToken:e.query({query:()=>({method:"GET",url:"/admin/ai-token"}),transformResponse(t){return t.data}})}),overrideExisting:!0}),{useGetAIUsageQuery:hi,useGetAiTokenQuery:gi,useLazyGetAiTokenQuery:yi}=Gs;function Q(e,t){const n=wr(t),r=a=>{const{children:o,...i}=a,l=k.useMemo(()=>i,Object.values(i));return d.jsx(n.Provider,{value:l,children:o})};function s(a,o,i){return _r(n,l=>{if(l)return o(l);if(i)throw new Error(`\`${a}\` must be used within \`${e}\``)})}return r.displayName=e+"Provider",[r,s]}Q("StrapiApp");const zs=re.enhanceEndpoints({addTagTypes:["User","Me","ProvidersOptions"]}).injectEndpoints({endpoints:e=>({getMe:e.query({query:()=>({method:"GET",url:"/admin/users/me"}),transformResponse(t){return t.data},providesTags:t=>t?["Me",{type:"User",id:t.id}]:["Me"]}),getMyPermissions:e.query({query:()=>({method:"GET",url:"/admin/users/me/permissions"}),transformResponse(t){return t.data}}),updateMe:e.mutation({query:t=>({method:"PUT",url:"/admin/users/me",data:t}),transformResponse(t){return t.data},invalidatesTags:["Me"]}),getAiToken:e.query({query:()=>({method:"GET",url:"/admin/users/me/ai-token"}),transformResponse(t){return t.data}}),checkPermissions:e.query({query:t=>({method:"POST",url:"/admin/permissions/check",data:t})}),login:e.mutation({query:t=>({method:"POST",url:"/admin/login",data:t}),transformResponse(t){return t.data},invalidatesTags:["Me"]}),logout:e.mutation({query:t=>({method:"POST",url:"/admin/logout",data:t})}),resetPassword:e.mutation({query:t=>({method:"POST",url:"/admin/reset-password",data:t}),transformResponse(t){return t.data}}),accessTokenExchange:e.mutation({query:t=>({method:"POST",url:"/admin/access-token",data:t}),transformResponse(t){return t.data}}),getRegistrationInfo:e.query({query:t=>({url:"/admin/registration-info",method:"GET",config:{params:{registrationToken:t}}}),transformResponse(t){return t.data}}),registerAdmin:e.mutation({query:t=>({method:"POST",url:"/admin/register-admin",data:t}),transformResponse(t){return t.data}}),registerUser:e.mutation({query:t=>({method:"POST",url:"/admin/register",data:t}),transformResponse(t){return t.data}}),forgotPassword:e.mutation({query:t=>({url:"/admin/forgot-password",method:"POST",data:t})}),isSSOLocked:e.query({query:()=>({url:"/admin/providers/isSSOLocked",method:"GET"}),transformResponse(t){return t.data}}),getProviders:e.query({query:()=>({url:"/admin/providers",method:"GET"})}),getProviderOptions:e.query({query:()=>({url:"/admin/providers/options",method:"GET"}),transformResponse(t){return t.data},providesTags:["ProvidersOptions"]}),updateProviderOptions:e.mutation({query:t=>({url:"/admin/providers/options",method:"PUT",data:t}),transformResponse(t){return t.data},invalidatesTags:["ProvidersOptions"]})}),overrideExisting:!0}),{useCheckPermissionsQuery:vi,useLazyCheckPermissionsQuery:Ti,useGetMeQuery:xi,useLoginMutation:bi,useAccessTokenExchangeMutation:wi,useLogoutMutation:_i,useUpdateMeMutation:ki,useResetPasswordMutation:Ci,useRegisterAdminMutation:$i,useRegisterUserMutation:Si,useGetRegistrationInfoQuery:Ai,useForgotPasswordMutation:Ei,useGetMyPermissionsQuery:Ri,useGetAiTokenQuery:Ii,useLazyGetAiTokenQuery:Mi,useIsSSOLockedQuery:Li,useGetProvidersQuery:ji,useGetProviderOptionsQuery:Di,useUpdateProviderOptionsMutation:Pi}=zs;Q("Auth");Q("History",{history:[],currentLocationIndex:0,currentLocation:"",canGoBack:!1,pushState:()=>{throw new Error("You must use the `HistoryProvider` to access the `pushState` function.")},goBack:()=>{throw new Error("You must use the `HistoryProvider` to access the `goBack` function.")}});function rr(e){return new TextEncoder().encode(e).length}const on=e=>e&&e.startsWith("/")?`${window.strapi.backendURL}${e}`:e,Bs=re.enhanceEndpoints({addTagTypes:["ProjectSettings","LicenseLimits","LicenseTrialTimeLeft"]}).injectEndpoints({endpoints:e=>({init:e.query({query:()=>({url:"/admin/init",method:"GET"}),transformResponse(t){return t.data},providesTags:["ProjectSettings"]}),information:e.query({query:()=>({url:"/admin/information",method:"GET"}),transformResponse(t){return t.data}}),telemetryProperties:e.query({query:()=>({url:"/admin/telemetry-properties",method:"GET",config:{validateStatus:t=>t<500}}),transformResponse(t){return t.data}}),projectSettings:e.query({query:()=>({url:"/admin/project-settings",method:"GET"}),providesTags:["ProjectSettings"],transformResponse(t){return{authLogo:t.authLogo?{name:t.authLogo.name,url:on(t.authLogo.url)}:void 0,menuLogo:t.menuLogo?{name:t.menuLogo.name,url:on(t.menuLogo.url)}:void 0}}}),updateProjectSettings:e.mutation({query:t=>({url:"/admin/project-settings",method:"POST",data:t,config:{headers:{"Content-Type":"multipart/form-data"}}}),invalidatesTags:["ProjectSettings"]}),getPlugins:e.query({query:()=>({url:"/admin/plugins",method:"GET"})}),getLicenseLimits:e.query({query:()=>({url:"/admin/license-limit-information",method:"GET"}),providesTags:["LicenseLimits"]}),getLicenseTrialTimeLeft:e.query({query:()=>({url:"/admin/license-trial-time-left",method:"GET"}),providesTags:["LicenseTrialTimeLeft"]}),getGuidedTourMeta:e.query({query:()=>({url:"/admin/guided-tour-meta",method:"GET"}),providesTags:["GuidedTourMeta"]})}),overrideExisting:!1}),{useInitQuery:Oi,useTelemetryPropertiesQuery:Ni,useInformationQuery:qi,useProjectSettingsQuery:Fi,useUpdateProjectSettingsMutation:Ui,useGetPluginsQuery:Gi,useGetLicenseLimitsQuery:zi,useGetLicenseTrialTimeLeftQuery:Bi,useGetGuidedTourMetaQuery:sr}=Bs;function Hs(){const[e,t]=k.useState("desktop");return k.useEffect(()=>{const n=navigator.userAgent.toLowerCase();/mobile|iphone|ipod|android.*mobile|windows phone/.test(n)?t("mobile"):/ipad|tablet|android(?!.*mobile)/.test(n)?t("tablet"):t("desktop")},[]),e}const[Hi,Zs]=Q("AppInfo",{});var Ws={ADMIN_PATH:"/admin",STRAPI_ADMIN_BACKEND_URL:"/",STRAPI_TELEMETRY_DISABLED:"false"};const Vs=k.createContext({uuid:!1}),Qs=()=>{const e=Hs(),{uuid:t,telemetryProperties:n}=k.useContext(Vs),r=Zs("useTracking",a=>a.userId);return{trackUsage:k.useCallback(async(a,o)=>{try{if(t&&!window.strapi.telemetryDisabled)return await kr.post(`${Ws.STRAPI_ANALYTICS_URL||"https://analytics.strapi.io"}/api/v2/track`,{event:a,userId:r,eventProperties:{...o},userProperties:{deviceType:e},groupProperties:{...n,projectId:t,projectType:window.strapi.projectType,aiLicenseKey:window.strapi.aiLicenseKey}},{headers:{"Content-Type":"application/json","X-Strapi-Event":a}})}catch{}return null},[n,r,t])}};Cr("ConfigurationContext");const Re={contentTypeBuilder:{createSchema:"didCreateContentTypeSchema",addField:"didAddFieldToSchema"},contentManager:{createContent:"didCreateContent"},apiTokens:{copyToken:"didCopyApiToken"}},Ne=({tourName:e,displayedCurrentStep:t,displayedTourLength:n})=>{const r=oe("GuidedTourPopover",o=>o.state),s=t??r.tours[e].currentStep+1,a=n??qe[e]._meta.displayedStepCount;return d.jsx(N,{variant:"omega",fontSize:"12px",children:d.jsx(ge,{id:"tours.stepCount",defaultMessage:"Step {currentStep} of {tourLength}",values:{currentStep:s,tourLength:a}})})},tt=({onClick:e})=>d.jsx(le,{onClick:e,children:d.jsx(ge,{id:"tours.gotIt",defaultMessage:"Got it"})}),Qt=({showSkip:e,showPrevious:t,to:n,tourName:r,onNextStep:s,onPreviousStep:a})=>{const{trackUsage:o}=Qs(),i=oe("GuidedTourPopover",w=>w.dispatch),u=oe("GuidedTourPopover",w=>w.state).tours[r].currentStep+1,p=qe[r]._meta.totalStepCount,T=()=>{o("didSkipGuidedTour",{name:r}),i({type:"skip_tour",payload:r})},m=()=>{u===p&&o("didCompleteGuidedTour",{name:r}),s?s():i({type:"next_step",payload:r})},g=()=>{a?a():i({type:"previous_step",payload:r})};return d.jsxs(S,{gap:2,children:[e&&d.jsx(le,{variant:"tertiary",onClick:T,children:d.jsx(ge,{id:"tours.skip",defaultMessage:"Skip"})}),!e&&t&&d.jsx(le,{variant:"tertiary",onClick:g,children:d.jsx(ge,{id:"tours.previous",defaultMessage:"Previous"})}),n?d.jsx($r,{tag:Fn,to:n,onClick:m,children:d.jsx(ge,{id:"tours.next",defaultMessage:"Next"})}):d.jsx(le,{onClick:m,children:d.jsx(ge,{id:"tours.next",defaultMessage:"Next"})})]})},Ks=c(S)`
  border-top: ${({theme:e})=>`1px solid ${e.colors.neutral150}`};
`,Ys=c(b)`
  p {
    margin-top: ${({theme:e})=>e.spaces[5]};
  }
  ul {
    list-style-type: disc;
    padding-left: ${({theme:e})=>e.spaces[4]};
  }
`,Js=c(pt.Arrow)`
  fill: ${({theme:e})=>e.colors.neutral0};
  transform: translateY(-16px) rotate(-90deg);
`,Xs=e=>({Root:k.forwardRef(({withArrow:t=!0,...n},r)=>d.jsxs(pt.Content,{ref:r,"aria-labelledby":"guided-tour-title",side:"top",align:"center",style:{border:"none"},onClick:s=>s.stopPropagation(),...n,children:[t&&d.jsx(Js,{asChild:!0,children:d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"25",viewBox:"0 0 23 25",fill:"none",children:d.jsx("path",{d:"M11 24.5L1.82843 15.3284C0.266332 13.7663 0.26633 11.2337 1.82843 9.67157L11 0.5L23 12.5L11 24.5Z"})})}),d.jsx(S,{width:"360px",direction:"column",alignItems:"start",children:n.children})]})),Title:t=>d.jsx(b,{paddingTop:5,paddingLeft:5,paddingRight:5,paddingBottom:1,width:"100%",children:"children"in t?t.children:d.jsx(N,{tag:"h1",id:"guided-tour-title",variant:"omega",fontWeight:"bold",children:d.jsx(ge,{id:t.id,defaultMessage:t.defaultMessage})})}),Content:t=>{const{formatMessage:n}=wt();let r="";return"children"in t||(r=n({id:t.id,defaultMessage:t.defaultMessage})),d.jsx(b,{paddingBottom:5,paddingLeft:5,paddingRight:5,width:"100%",children:"children"in t?t.children:d.jsx(Ys,{children:d.jsx(N,{tag:"div",variant:"omega",dangerouslySetInnerHTML:{__html:r}})})})},Actions:({showStepCount:t=!0,showPrevious:n=!0,showSkip:r=!1,to:s,children:a,...o})=>d.jsx(Ks,{width:"100%",padding:3,paddingLeft:5,justifyContent:t?"space-between":"flex-end",...o,children:a||d.jsxs(d.Fragment,{children:[t&&d.jsx(Ne,{tourName:e}),d.jsx(Qt,{tourName:e,showSkip:r,showPrevious:!r&&n,to:s})]})})}),ea=({Step:e})=>d.jsxs(e.Root,{side:"top",sideOffset:32,withArrow:!1,children:[d.jsx(e.Title,{id:"tours.apiTokens.Introduction.title",defaultMessage:"Last but not least, API tokens"}),d.jsx(e.Content,{id:"tours.apiTokens.Introduction.content",defaultMessage:"Control API access with highly customizable permissions."}),d.jsx(e.Actions,{showSkip:!0})]}),ta=({Step:e})=>d.jsxs(e.Root,{side:"bottom",align:"end",children:[d.jsx(e.Title,{id:"tours.apiTokens.ManageAPIToken.title",defaultMessage:"Manage an API token"}),d.jsx(e.Content,{id:"tours.apiTokens.ManageAPIToken.content",defaultMessage:'Click the "Pencil" icon to view and update an existing API token.'}),d.jsx(e.Actions,{})]}),na=({Step:e,dispatch:t})=>d.jsxs(e.Root,{side:"bottom",align:"end",children:[d.jsx(e.Title,{id:"tours.apiTokens.ViewAPIToken.title",defaultMessage:"View API token"}),d.jsx(e.Content,{id:"tours.apiTokens.ViewAPIToken.content",defaultMessage:'Click the "View token" button to see your API token.'}),d.jsxs(e.Actions,{children:[d.jsx(Ne,{tourName:"apiTokens"}),d.jsx(tt,{onClick:()=>t({type:"next_step",payload:"apiTokens"})})]})]}),ra=({Step:e,dispatch:t})=>d.jsxs(e.Root,{side:"bottom",align:"start",sideOffset:-5,children:[d.jsx(e.Title,{id:"tours.apiTokens.CopyAPIToken.title",defaultMessage:"Copy your new API token"}),d.jsx(e.Content,{id:"tours.apiTokens.CopyAPIToken.content",defaultMessage:"Copy your API token",values:{spacer:d.jsx(b,{paddingTop:2}),a:n=>d.jsx(Un,{isExternal:!0,href:"https://docs.strapi.io/cms/features/api-tokens#usage",children:n})}}),d.jsxs(e.Actions,{children:[d.jsx(Ne,{tourName:"apiTokens"}),d.jsx(tt,{onClick:()=>t({type:"next_step",payload:"apiTokens"})})]})]}),sa=({Step:e})=>d.jsxs(e.Root,{side:"right",align:"start",children:[d.jsx(e.Title,{id:"tours.apiTokens.FinalStep.title",defaultMessage:"Congratulations, it's time to deploy your application!"}),d.jsx(e.Content,{id:"tours.apiTokens.FinalStep.content",defaultMessage:"Your application is ready to be deployed and its content to be shared with the world!"}),d.jsx(e.Actions,{showPrevious:!1,showStepCount:!1,to:"/"})]}),aa=[{name:"Introduction",content:ea},{name:"ManageAPIToken",content:ta},{name:"ViewAPIToken",content:na},{name:"CopyAPIToken",content:ra},{name:"Finish",content:sa,excludeFromStepCount:!0,when:e=>e.includes(Re.apiTokens.copyToken)}],_t=({isActionRequired:e=!1,...t})=>{const{collectionType:n}=Gn(),r=oe("ContentManagerActions",T=>T.state),s=oe("ContentManagerActions",T=>T.dispatch),a=n==="single-types",o=r.tours.contentManager.currentStep+1,i=a&&o>Ae.length?o-Ae.length:o,l=a?qe.contentManager._meta.displayedStepCount-Ae.length:qe.contentManager._meta.displayedStepCount,u=()=>{a&&r.tours.contentManager.currentStep===0?s({type:"go_to_step",payload:{tourName:"contentManager",step:Ae.length+1}}):s({type:"next_step",payload:"contentManager"})},p=()=>{a&&r.tours.contentManager.currentStep===Ae.length+1?s({type:"go_to_step",payload:{tourName:"contentManager",step:r.tours.contentManager.currentStep-Ae.length-1}}):s({type:"previous_step",payload:"contentManager"})};return e?d.jsxs(d.Fragment,{children:[d.jsx(Ne,{tourName:"contentManager",displayedCurrentStep:i,displayedTourLength:l}),d.jsx(tt,{onClick:u})]}):d.jsxs(d.Fragment,{children:[d.jsx(Ne,{tourName:"contentManager",displayedCurrentStep:i,displayedTourLength:l}),d.jsx(Qt,{tourName:"contentManager",onNextStep:u,onPreviousStep:p,...t})]})},oa=({Step:e})=>d.jsxs(e.Root,{side:"top",sideOffset:33,withArrow:!1,children:[d.jsx(e.Title,{id:"tours.contentManager.Introduction.title",defaultMessage:"Content manager"}),d.jsx(e.Content,{id:"tours.contentManager.Introduction.content",defaultMessage:"Create and manage content from your collection types and single types."}),d.jsx(e.Actions,{children:d.jsx(_t,{showSkip:!0})})]}),ia=({Step:e})=>d.jsxs(e.Root,{side:"bottom",align:"end",children:[d.jsx(e.Title,{id:"tours.contentManager.CreateNewEntry.title",defaultMessage:"Create new entry"}),d.jsx(e.Content,{id:"tours.contentManager.CreateNewEntry.content",defaultMessage:'Click the "Create new entry" button to create and publish a new entry for this collection type.'}),d.jsx(e.Actions,{children:d.jsx(_t,{showPrevious:!0})})]}),da=({Step:e})=>d.jsxs(e.Root,{sideOffset:-12,children:[d.jsx(e.Title,{id:"tours.contentManager.Fields.title",defaultMessage:"Fields"}),d.jsx(e.Content,{id:"tours.contentManager.Fields.content",defaultMessage:"First, fill in the fields you created in the Content-Type Builder."}),d.jsx(e.Actions,{children:d.jsx(_t,{showPrevious:!0})})]}),la=({Step:e})=>d.jsxs(e.Root,{side:"left",align:"center",children:[d.jsx(e.Title,{id:"tours.contentManager.Publish.title",defaultMessage:"Publish"}),d.jsx(e.Content,{id:"tours.contentManager.Publish.content",defaultMessage:'Then click the "Publish" button to make your content available through the content API.'}),d.jsx(e.Actions,{children:d.jsx(_t,{isActionRequired:!0})})]}),ca=({Step:e})=>d.jsxs(e.Root,{side:"right",children:[d.jsx(e.Title,{id:"tours.contentManager.FinalStep.title",defaultMessage:"Time to setup API tokens!"}),d.jsx(e.Content,{id:"tours.contentManager.FinalStep.content",defaultMessage:"Now that you've created and published an entry, let's setup an API token to manage access to your content."}),d.jsx(e.Actions,{showStepCount:!1,showPrevious:!1,to:"/settings/api-tokens"})]}),Ae=[{name:"CreateNewEntry",content:ia}],ua=[{name:"Introduction",when:e=>e.includes(Re.contentTypeBuilder.createSchema),content:oa},...Ae,{name:"Fields",content:da},{name:"Publish",content:la},{name:"Finish",content:ca,excludeFromStepCount:!0,when:e=>e.includes(Re.contentManager.createContent)}],pa=()=>{const e=window.strapi.ai?.enabled!==!1;return!!window.strapi?.isEE&&e},_e=({...e})=>{const t=oe("ContentTypeBuilderActions",u=>u.state),n=oe("ContentTypeBuilderActions",u=>u.dispatch),r=pa(),s=t.tours.contentTypeBuilder.currentStep+1,a=!r&&s>se.length?s-se.length:r&&s>De.length?s-De.length:s,o=r?qe.contentTypeBuilder._meta.displayedStepCount-De.length:qe.contentTypeBuilder._meta.displayedStepCount-se.length,i=()=>{const u=t.tours.contentTypeBuilder.currentStep;if(!r&&u===0){const p=1+se.length;n({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:p}})}else if(r&&u===se.length){const p=1+se.length+De.length;n({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:p}})}else n({type:"next_step",payload:"contentTypeBuilder"})},l=()=>{const u=t.tours.contentTypeBuilder.currentStep;!r&&u===1+se.length?n({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:0}}):r&&u===1+se.length+De.length?n({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:se.length}}):n({type:"previous_step",payload:"contentTypeBuilder"})};return d.jsxs(d.Fragment,{children:[d.jsx(Ne,{tourName:"contentTypeBuilder",displayedCurrentStep:a,displayedTourLength:o}),e.children||d.jsx(Qt,{tourName:"contentTypeBuilder",onNextStep:i,onPreviousStep:l,...e})]})},ma=({Step:e})=>d.jsxs(e.Root,{sideOffset:33,withArrow:!1,children:[d.jsx(e.Title,{id:"tours.contentTypeBuilder.Introduction.title",defaultMessage:"Content-Type Builder"}),d.jsx(e.Content,{id:"tours.contentTypeBuilder.Introduction.content",defaultMessage:"Create and manage your content structure with collection types, single types and components."}),d.jsx(e.Actions,{children:d.jsx(_e,{showSkip:!0})})]}),fa=({Step:e})=>d.jsxs(e.Root,{side:"left",children:[d.jsx(e.Title,{id:"tours.contentTypeBuilder.AIChat.title",defaultMessage:"Time to get started!"}),d.jsx(e.Content,{id:"tours.contentTypeBuilder.AIChat.content",defaultMessage:"<p>If you have any questions about the Content-Type Builder or Strapi ask them here.</p><p>Strapi AI can generate schemas tailored to your needs. Ask for exactly what you want, for example:<ul><li>Date picker</li><li>Email and password fields</li><li>Media of any type</li><li>UIDs</li></ul></p><p>Don’t be shy, try it out !</p>"}),d.jsx(e.Actions,{children:d.jsx(_e,{showPrevious:!0})})]}),ha=({Step:e})=>d.jsxs(e.Root,{side:"right",sideOffset:16,children:[d.jsx(e.Title,{id:"tours.contentTypeBuilder.CollectionTypes.title",defaultMessage:"Collection Types"}),d.jsx(e.Content,{id:"tours.contentTypeBuilder.CollectionTypes.content",defaultMessage:"A content structure that can manage multiple entries, such as articles or products."}),d.jsx(e.Actions,{children:d.jsx(_e,{showPrevious:!0})})]}),ga=({Step:e})=>d.jsxs(e.Root,{side:"right",sideOffset:16,children:[d.jsx(e.Title,{id:"tours.contentTypeBuilder.SingleTypes.title",defaultMessage:"Single Types"}),d.jsx(e.Content,{id:"tours.contentTypeBuilder.SingleTypes.content",defaultMessage:"A content structure that can manage a single entry, such as a homepage or a header."}),d.jsx(e.Actions,{children:d.jsx(_e,{showPrevious:!0})})]}),ya=({Step:e})=>d.jsxs(e.Root,{side:"right",sideOffset:16,children:[d.jsx(e.Title,{id:"tours.contentTypeBuilder.Components.title",defaultMessage:"Components"}),d.jsx(e.Content,{id:"tours.contentTypeBuilder.Components.content",defaultMessage:"A reusable content structure that can be used across multiple content types, such as buttons, sliders or cards."}),d.jsx(e.Actions,{children:d.jsx(_e,{showPrevious:!0})})]}),va=({Step:e})=>d.jsxs(e.Root,{side:"right",sideOffset:16,children:[d.jsx(e.Title,{id:"tours.contentTypeBuilder.YourTurn.title",defaultMessage:"Your turn"}),d.jsx(e.Content,{id:"tours.contentTypeBuilder.YourTurn.content",defaultMessage:"Create a collection type or single type and configure it."}),d.jsx(e.Actions,{children:d.jsx(_e,{showPrevious:!0})})]}),Ta=({Step:e,dispatch:t})=>d.jsxs(e.Root,{side:"bottom",children:[d.jsx(e.Title,{id:"tours.contentTypeBuilder.AddFields.title",defaultMessage:"Don't forget to add a field to your content type"}),d.jsx(e.Content,{id:"tours.contentTypeBuilder.AddFields.content",defaultMessage:"Add the fields your content needs such as text, media and relations."}),d.jsx(e.Actions,{children:d.jsx(_e,{showPrevious:!0,children:d.jsx(tt,{onClick:()=>t({type:"next_step",payload:"contentTypeBuilder"})})})})]}),xa=({Step:e,dispatch:t})=>d.jsxs(e.Root,{side:"right",children:[d.jsx(e.Title,{id:"tours.contentTypeBuilder.Save.title",defaultMessage:"Save before you leave!"}),d.jsx(e.Content,{id:"tours.contentTypeBuilder.Save.content",defaultMessage:"Save the changes you made here before leaving this page."}),d.jsx(e.Actions,{children:d.jsx(_e,{showPrevious:!0,children:d.jsx(tt,{onClick:()=>{t({type:"remove_completed_action",payload:Re.contentTypeBuilder.createSchema}),t({type:"next_step",payload:"contentTypeBuilder"})}})})})]}),ba=({Step:e})=>{const{data:t}=sr(),{"*":n}=Gn(),r=n?.split("/").pop(),s=r?t?.data?.schemas?.[r]:null,o=s?`/content-manager/${{collectionType:"collection-types",singleType:"single-types"}[s.kind]}/${s.uid}`:"/content-manager";return d.jsxs(e.Root,{side:"right",children:[d.jsx(e.Title,{id:"tours.contentTypeBuilder.Finish.title",defaultMessage:"First Step: Done! 🎉"}),d.jsx(e.Content,{id:"tours.contentTypeBuilder.Finish.content",defaultMessage:"You've built your first content type! Now head over to the Content Manager to start adding entries!"}),d.jsx(e.Actions,{showStepCount:!1,showPrevious:!1,to:o})]})},se=[{name:"AIChat",content:fa}],De=[{name:"CollectionTypes",content:ha},{name:"SingleTypes",content:ga},{name:"Components",content:ya},{name:"YourTurn",content:va},{name:"AddFields",content:Ta}],wa=[{name:"Introduction",content:ma},...se,...De,{name:"Save",when:e=>e.includes(Re.contentTypeBuilder.addField),content:xa},{name:"Finish",content:ba,excludeFromStepCount:!0,when:e=>e.includes(Re.contentTypeBuilder.createSchema)}],qe={contentTypeBuilder:ot("contentTypeBuilder",wa),contentManager:ot("contentManager",ua),apiTokens:ot("apiTokens",aa),strapiCloud:ot("strapiCloud",[])},_a=({children:e,...t})=>{const n=oe("TooltipWrapper",r=>r.state);return!n.enabled||n.hidden?e:d.jsx(Ca,{...t,children:e})},ka=c(b)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50, 50, 77, 0.2);
  z-index: 10;
`,Ca=({children:e,content:t,tourName:n,step:r,when:s})=>{const{data:a}=sr(),o=oe("GuidedTourTooltip",g=>g.state),i=oe("GuidedTourTooltip",g=>g.dispatch),l=o.tours[n].currentStep===r,u=s?s(o.completedActions):!0,p=a?.data?.isFirstSuperAdminUser&&!o.tours[n].isCompleted&&l&&u;k.useEffect(()=>{if(!p)return;const g=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=g}},[p]);const T=k.useMemo(()=>Xs(n),[n]),m=Object.keys(a?.data?.schemas??{}).filter(g=>g.startsWith("api::")).length>0;return k.useEffect(()=>{m&&i({type:"set_completed_actions",payload:[Re.contentTypeBuilder.createSchema]})},[i,m,r,n]),d.jsxs(d.Fragment,{children:[p&&d.jsx(Sr,{children:d.jsx(ka,{})}),d.jsxs(pt.Root,{open:p,children:[d.jsx(pt.Anchor,{children:e}),t({Step:T,state:o,dispatch:i})]})]})};function ot(e,t){return t.reduce((r,s,a)=>{const o=s.name;if(o in r)throw Error(`The tour: ${e} with step: ${s.name} has already been registered`);return r[o]=({children:i})=>d.jsx(_a,{tourName:e,step:a,content:s.content,when:s.when,children:i}),s.excludeFromStepCount&&r._meta.displayedStepCount--,r},{_meta:{totalStepCount:t.length,displayedStepCount:t.length}})}const[Zi,oe]=Q("GuidedTour");Ar`
  body {
    background: ${({theme:e})=>e.colors.neutral100};
  }
`;new Er({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});c(Rr)`
  & > div:first-child {
    display: none;
  }

  & > button {
    display: none;
  }
`;c(N)`
  word-break: break-all;
  color: ${({theme:e})=>e.colors.danger600};
`;const $a={S:180,M:250};c(b)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({$size:e})=>`${$a[e]}px`}, 1fr)
  );
  grid-gap: ${({theme:e})=>e.spaces[4]};
`;c(b)`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;

  ${({theme:e})=>e.breakpoints.medium} {
    grid-template-columns: ${({$hasSideNav:e})=>e?"auto 1fr":"1fr"};
  }
`;c(S)`
  display: none;
  background: ${({theme:e})=>e.colors.neutral0};

  ${({theme:e})=>e.breakpoints.medium} {
    display: block;
    box-shadow: none;
    transform: none;
  }
`;c(b)`
  overflow-x: hidden;

  ${({theme:e})=>e.breakpoints.medium} {
    transform: none;
    width: auto;
  }
`;const de="The Form Component has not been initialised, ensure you are using this hook within a Form component";Q("Form",{disabled:!1,errors:{},initialValues:{},isSubmitting:!1,modified:!1,addFieldRow:()=>{throw new Error(de)},moveFieldRow:()=>{throw new Error(de)},onChange:()=>{throw new Error(de)},removeFieldRow:()=>{throw new Error(de)},resetForm:()=>{throw new Error(de)},setErrors:()=>{throw new Error(de)},setValues:()=>{throw new Error(de)},setSubmitting:()=>{throw new Error(de)},validate:async()=>{throw new Error(de)},values:{}});c.img`
  height: 7.2rem;
`;c(b)`
  margin: 0 auto;
  width: 100%;
  max-width: 55.2rem;
`;c(S)`
  flex-direction: column;
`;const H={email:{id:"components.Input.error.validation.email"},lowercase:{id:"components.Input.error.validation.lowercase"},max:{id:"components.Input.error.validation.max"},min:{id:"components.Input.error.validation.min"},minLength:{id:"components.Input.error.validation.minLength"},required:{id:"components.Input.error.validation.required",defaultMessage:"This value is required."}};ce().shape({email:z().nullable().email({id:H.email.id,defaultMessage:"Not a valid email"}).required(H.required),password:z().required(H.required).nullable(),rememberMe:Ir().nullable()});c(zt.Root)`
  height: 3.2rem;
  width: 3.2rem;

  > label,
  ~ input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  > label {
    color: inherit;
    cursor: pointer;
    padding: ${({theme:e})=>e.spaces[2]};
    text-align: center;
    vertical-align: middle;
  }

  &:hover,
  &:focus-within {
    background-color: ${({theme:e})=>e.colors.neutral0};
  }

  &:active,
  &.selected {
    color: ${({theme:e})=>e.colors.primary700};
    background-color: ${({theme:e})=>e.colors.neutral0};
    border-color: ${({theme:e})=>e.colors.primary700};
  }
`;[...Array(11).keys()];ce().shape({firstname:z().trim().required(H.required).nullable(),lastname:z().nullable(),password:z().min(8,{id:H.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).test("max-bytes",{id:"components.Input.error.contain.maxBytes",defaultMessage:"Password must be less than 73 bytes"},function(e){return!e||typeof e!="string"?!0:rr(e)<=72}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:H.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:z().required({id:H.required.id,defaultMessage:"Confirm password is required"}).oneOf([Bt("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}).nullable(),registrationToken:z().required({id:H.required.id,defaultMessage:"Registration token is required"})});ce().shape({firstname:z().trim().required({id:H.required.id,defaultMessage:"Firstname is required"}).nullable(),lastname:z().nullable(),password:z().min(8,{id:H.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).test("max-bytes",{id:"components.Input.error.contain.maxBytes",defaultMessage:"Password must be less than 73 bytes"},function(e){return e?new TextEncoder().encode(e).length<=72:!0}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:H.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:z().required({id:H.required.id,defaultMessage:"Confirm password is required"}).nullable().oneOf([Bt("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}),email:z().email({id:H.email.id,defaultMessage:"Not a valid email"}).strict().lowercase({id:H.lowercase.id,defaultMessage:"Email must be lowercase"}).required({id:H.required.id,defaultMessage:"Email is required"}).nullable()});c.a`
  color: ${({theme:e})=>e.colors.primary600};
`;ce().shape({password:z().min(8,{id:H.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).test("required-byte-size",{id:"components.Input.error.contain.maxBytes",defaultMessage:"Password must be less than 73 bytes"},function(e){return!e||typeof e!="string"?!0:rr(e)<=72}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:H.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:z().required({id:H.required.id,defaultMessage:"Confirm password is required"}).oneOf([Bt("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}).nullable()});re.reducerPath+"",re.reducer;c(Mr)`
  width: 24px;
  height: 24px;

  path {
    fill: ${({theme:e})=>e.colors.danger600};
  }
`;Q("Filters");Q("Pagination");Q("Table");c(Lr)`
  transform: ${({$isUp:e})=>`rotate(${e?"180":"0"}deg)`};
`;c(S)`
  margin-right: ${({theme:e})=>e.spaces[6]};

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;c(N)`
  color: ${({theme:e})=>e.colors.neutral800};
  word-break: break-all;
`;const dn=c(jr)`
  width: 100%;
  height: calc(100dvh - ${ft} - 1px);
  overflow: hidden;
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  flex-direction: column;
  border-right: 0;
  box-shadow: none;
  position: fixed;
  top: calc(${ft} + 1px);
  left: 0;
  z-index: 2;

  ${({theme:e})=>e.breakpoints.medium} {
    position: sticky;
    top: 0;
    border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
  ${({theme:e})=>e.breakpoints.large} {
    height: 100dvh;
  }
`,Sa=c(Fn)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  height: 32px;

  color: ${({theme:e})=>e.colors.neutral800};

  &.active > div {
    ${({theme:e})=>`
        background-color: ${e.colors.primary100};
        color: ${e.colors.primary700};
        font-weight: 500;
      `}
  }

  &:hover.active > div {
    ${({theme:e})=>`
        background-color: ${e.colors.primary100};
      `}
  }

  &:hover > div {
    ${({theme:e})=>`
        background-color: ${e.colors.neutral100};
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`;c(S)`
  flex: 0 0 ${ft};
  height: ${ft};
`;c.button`
  cursor: pointer;
  width: 100%;
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-left: ${({theme:e})=>e.spaces[3]};
  padding-right: ${({theme:e})=>e.spaces[3]};
  padding-top: ${({theme:e})=>e.spaces[2]};
  padding-bottom: ${({theme:e})=>e.spaces[2]};

  &:hover {
    background-color: ${({theme:e})=>e.colors.neutral100};
  }
`;c.li`
  ${Sa} > div {
    padding-left: 36px;
  }
`;c(b)`
  ${dn} {
    background-color: transparent;
    border-right: none;
  }

  ${({theme:e})=>e.breakpoints.medium} {
    ${dn} {
      top: 0;
    }
  }
`;c(Ht)`
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.primary600} 0%,
    ${({theme:e})=>e.colors.alternative600} 121.48%
  );
  padding: 0.4rem 1rem;
`;const Aa=()=>{const e=k.useRef(null);return e.current===null&&(e.current=new AbortController),k.useEffect(()=>()=>{e.current.abort()},[]),k.useMemo(()=>dt({signal:e.current.signal}),[])},Ea=re.enhanceEndpoints({addTagTypes:["LicenseLimits","User","Role","RolePermissions"]}).injectEndpoints({endpoints:e=>({createUser:e.mutation({query:t=>({url:"/admin/users",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:["LicenseLimits",{type:"User",id:"LIST"},"HomepageKeyStatistics"]}),updateUser:e.mutation({query:({id:t,...n})=>({url:`/admin/users/${t}`,method:"PUT",data:n}),invalidatesTags:(t,n,{id:r})=>[{type:"User",id:r},{type:"User",id:"LIST"}]}),getUsers:e.query({query:({id:t,...n}={})=>({url:`/admin/users/${t??""}`,method:"GET",config:{params:n}}),transformResponse:t=>{let n=[];return t.data&&("results"in t.data?Array.isArray(t.data.results)&&(n=t.data.results):n=[t.data]),{users:n,pagination:"pagination"in t.data?t.data.pagination:null}},providesTags:(t,n,r)=>typeof r=="object"&&"id"in r?[{type:"User",id:r.id}]:[...t?.users.map(({id:s})=>({type:"User",id:s}))??[],{type:"User",id:"LIST"}]}),deleteManyUsers:e.mutation({query:t=>({url:"/admin/users/batch-delete",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:["LicenseLimits",{type:"User",id:"LIST"},"HomepageKeyStatistics"]}),createRole:e.mutation({query:t=>({url:"/admin/roles",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:[{type:"Role",id:"LIST"}]}),getRoles:e.query({query:({id:t,...n}={})=>({url:`/admin/roles/${t??""}`,method:"GET",config:{params:n}}),transformResponse:t=>{let n=[];return t.data&&(Array.isArray(t.data)?n=t.data:n=[t.data]),n},providesTags:(t,n,r)=>typeof r=="object"&&"id"in r?[{type:"Role",id:r.id}]:[...t?.map(({id:s})=>({type:"Role",id:s}))??[],{type:"Role",id:"LIST"}]}),updateRole:e.mutation({query:({id:t,...n})=>({url:`/admin/roles/${t}`,method:"PUT",data:n}),transformResponse:t=>t.data,invalidatesTags:(t,n,{id:r})=>[{type:"Role",id:r}]}),getRolePermissions:e.query({query:({id:t,...n})=>({url:`/admin/roles/${t}/permissions`,method:"GET",config:{params:n}}),transformResponse:t=>t.data,providesTags:(t,n,{id:r})=>[{type:"RolePermissions",id:r}]}),updateRolePermissions:e.mutation({query:({id:t,...n})=>({url:`/admin/roles/${t}/permissions`,method:"PUT",data:n}),transformResponse:t=>t.data,invalidatesTags:(t,n,{id:r})=>[{type:"RolePermissions",id:r}]}),getRolePermissionLayout:e.query({query:t=>({url:"/admin/permissions",method:"GET",config:{params:t}}),transformResponse:t=>t.data})}),overrideExisting:!1}),{useCreateUserMutation:Wi,useGetUsersQuery:Vi,useUpdateUserMutation:Qi,useDeleteManyUsersMutation:Ki,useGetRolesQuery:Yi,useCreateRoleMutation:Ji,useUpdateRoleMutation:Xi,useGetRolePermissionsQuery:ed,useGetRolePermissionLayoutQuery:td,useUpdateRolePermissionsMutation:nd}=Ea,Ra=re.enhanceEndpoints({addTagTypes:["CountDocuments","HomepageLayout"]}).injectEndpoints({endpoints:e=>({getKeyStatistics:e.query({query:()=>"/admin/homepage/key-statistics",transformResponse:t=>t.data,providesTags:(t,n)=>["HomepageKeyStatistics"]}),getCountDocuments:e.query({query:()=>"/content-manager/homepage/count-documents",transformResponse:t=>t.data,providesTags:(t,n)=>["CountDocuments"]}),getHomepageLayout:e.query({query:()=>"/admin/homepage/layout",transformResponse:t=>t.data,providesTags:["HomepageLayout"]}),updateHomepageLayout:e.mutation({query:t=>({url:"/admin/homepage/layout",method:"PUT",data:t}),transformResponse:t=>t.data,invalidatesTags:["HomepageLayout"]})})}),{useGetKeyStatisticsQuery:rd,useGetCountDocumentsQuery:sd,useGetHomepageLayoutQuery:ad,useUpdateHomepageLayoutMutation:od}=Ra;var P;(function(e){e.assertEqual=s=>{};function t(s){}e.assertIs=t;function n(s){throw new Error}e.assertNever=n,e.arrayToEnum=s=>{const a={};for(const o of s)a[o]=o;return a},e.getValidEnumValues=s=>{const a=e.objectKeys(s).filter(i=>typeof s[s[i]]!="number"),o={};for(const i of a)o[i]=s[i];return e.objectValues(o)},e.objectValues=s=>e.objectKeys(s).map(function(a){return s[a]}),e.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const a=[];for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&a.push(o);return a},e.find=(s,a)=>{for(const o of s)if(a(o))return o},e.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function r(s,a=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(a)}e.joinValues=r,e.jsonStringifyReplacer=(s,a)=>typeof a=="bigint"?a.toString():a})(P||(P={}));var ln;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(ln||(ln={}));const y=P.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),he=e=>{switch(typeof e){case"undefined":return y.undefined;case"string":return y.string;case"number":return Number.isNaN(e)?y.nan:y.number;case"boolean":return y.boolean;case"function":return y.function;case"bigint":return y.bigint;case"symbol":return y.symbol;case"object":return Array.isArray(e)?y.array:e===null?y.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?y.promise:typeof Map<"u"&&e instanceof Map?y.map:typeof Set<"u"&&e instanceof Set?y.set:typeof Date<"u"&&e instanceof Date?y.date:y.object;default:return y.unknown}},f=P.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class ue extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}format(t){const n=t||function(a){return a.message},r={_errors:[]},s=a=>{for(const o of a.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let i=r,l=0;for(;l<o.path.length;){const u=o.path[l];l===o.path.length-1?(i[u]=i[u]||{_errors:[]},i[u]._errors.push(n(o))):i[u]=i[u]||{_errors:[]},i=i[u],l++}}};return s(this),r}static assert(t){if(!(t instanceof ue))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,P.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const s of this.issues)s.path.length>0?(n[s.path[0]]=n[s.path[0]]||[],n[s.path[0]].push(t(s))):r.push(t(s));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}ue.create=e=>new ue(e);const Dt=(e,t)=>{let n;switch(e.code){case f.invalid_type:e.received===y.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case f.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,P.jsonStringifyReplacer)}`;break;case f.unrecognized_keys:n=`Unrecognized key(s) in object: ${P.joinValues(e.keys,", ")}`;break;case f.invalid_union:n="Invalid input";break;case f.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${P.joinValues(e.options)}`;break;case f.invalid_enum_value:n=`Invalid enum value. Expected ${P.joinValues(e.options)}, received '${e.received}'`;break;case f.invalid_arguments:n="Invalid function arguments";break;case f.invalid_return_type:n="Invalid function return type";break;case f.invalid_date:n="Invalid date";break;case f.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:P.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case f.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case f.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case f.custom:n="Invalid input";break;case f.invalid_intersection_types:n="Intersection results could not be merged";break;case f.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case f.not_finite:n="Number must be finite";break;default:n=t.defaultError,P.assertNever(e)}return{message:n}};let Ia=Dt;function Ma(){return Ia}const La=e=>{const{data:t,path:n,errorMaps:r,issueData:s}=e,a=[...n,...s.path||[]],o={...s,path:a};if(s.message!==void 0)return{...s,path:a,message:s.message};let i="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)i=u(o,{data:t,defaultError:i}).message;return{...s,path:a,message:i}};function h(e,t){const n=Ma(),r=La({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===Dt?void 0:Dt].filter(s=>!!s)});e.common.issues.push(r)}class Y{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const s of n){if(s.status==="aborted")return C;s.status==="dirty"&&t.dirty(),r.push(s.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const s of n){const a=await s.key,o=await s.value;r.push({key:a,value:o})}return Y.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const s of n){const{key:a,value:o}=s;if(a.status==="aborted"||o.status==="aborted")return C;a.status==="dirty"&&t.dirty(),o.status==="dirty"&&t.dirty(),a.value!=="__proto__"&&(typeof o.value<"u"||s.alwaysSet)&&(r[a.value]=o.value)}return{status:t.value,value:r}}}const C=Object.freeze({status:"aborted"}),Ve=e=>({status:"dirty",value:e}),te=e=>({status:"valid",value:e}),cn=e=>e.status==="aborted",un=e=>e.status==="dirty",Fe=e=>e.status==="valid",ht=e=>typeof Promise<"u"&&e instanceof Promise;var v;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(v||(v={}));class be{constructor(t,n,r,s){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const pn=(e,t)=>{if(Fe(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new ue(e.common.issues);return this._error=n,this._error}}};function I(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:s}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:s}:{errorMap:(o,i)=>{const{message:l}=e;return o.code==="invalid_enum_value"?{message:l??i.defaultError}:typeof i.data>"u"?{message:l??r??i.defaultError}:o.code!=="invalid_type"?{message:i.defaultError}:{message:l??n??i.defaultError}},description:s}}class D{get description(){return this._def.description}_getType(t){return he(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:he(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new Y,ctx:{common:t.parent.common,data:t.data,parsedType:he(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(ht(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){const r={common:{issues:[],async:n?.async??!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:he(t)},s=this._parseSync({data:t,path:r.path,parent:r});return pn(r,s)}"~validate"(t){const n={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:he(t)};if(!this["~standard"].async)try{const r=this._parseSync({data:t,path:[],parent:n});return Fe(r)?{value:r.value}:{issues:n.common.issues}}catch(r){r?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),n.common={issues:[],async:!0}}return this._parseAsync({data:t,path:[],parent:n}).then(r=>Fe(r)?{value:r.value}:{issues:n.common.issues})}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:he(t)},s=this._parse({data:t,path:r.path,parent:r}),a=await(ht(s)?s:Promise.resolve(s));return pn(r,a)}refine(t,n){const r=s=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(s):n;return this._refinement((s,a)=>{const o=t(s),i=()=>a.addIssue({code:f.custom,...r(s)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(i(),!1)):o?!0:(i(),!1)})}refinement(t,n){return this._refinement((r,s)=>t(r)?!0:(s.addIssue(typeof n=="function"?n(r,s):n),!1))}_refinement(t){return new ze({schema:this,typeName:$.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:n=>this["~validate"](n)}}optional(){return ve.create(this,this._def)}nullable(){return Be.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ae.create(this)}promise(){return Tt.create(this,this._def)}or(t){return yt.create([this,t],this._def)}and(t){return vt.create(this,t,this._def)}transform(t){return new ze({...I(this._def),schema:this,typeName:$.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new Nt({...I(this._def),innerType:this,defaultValue:n,typeName:$.ZodDefault})}brand(){return new no({typeName:$.ZodBranded,type:this,...I(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new qt({...I(this._def),innerType:this,catchValue:n,typeName:$.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return Kt.create(this,t)}readonly(){return Ft.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const ja=/^c[^\s-]{8,}$/i,Da=/^[0-9a-z]+$/,Pa=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Oa=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Na=/^[a-z0-9_-]{21}$/i,qa=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Fa=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Ua=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Ga="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let At;const za=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ba=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Ha=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Za=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Wa=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Va=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,ar="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Qa=new RegExp(`^${ar}$`);function or(e){let t="[0-5]\\d";e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`);const n=e.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`}function Ka(e){return new RegExp(`^${or(e)}$`)}function Ya(e){let t=`${ar}T${or(e)}`;const n=[];return n.push(e.local?"Z?":"Z"),e.offset&&n.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${n.join("|")})`,new RegExp(`^${t}$`)}function Ja(e,t){return!!((t==="v4"||!t)&&za.test(e)||(t==="v6"||!t)&&Ha.test(e))}function Xa(e,t){if(!qa.test(e))return!1;try{const[n]=e.split("."),r=n.replace(/-/g,"+").replace(/_/g,"/").padEnd(n.length+(4-n.length%4)%4,"="),s=JSON.parse(atob(r));return!(typeof s!="object"||s===null||"typ"in s&&s?.typ!=="JWT"||!s.alg||t&&s.alg!==t)}catch{return!1}}function eo(e,t){return!!((t==="v4"||!t)&&Ba.test(e)||(t==="v6"||!t)&&Za.test(e))}class ye extends D{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==y.string){const a=this._getOrReturnCtx(t);return h(a,{code:f.invalid_type,expected:y.string,received:a.parsedType}),C}const r=new Y;let s;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(s=this._getOrReturnCtx(t,s),h(s,{code:f.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="max")t.data.length>a.value&&(s=this._getOrReturnCtx(t,s),h(s,{code:f.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="length"){const o=t.data.length>a.value,i=t.data.length<a.value;(o||i)&&(s=this._getOrReturnCtx(t,s),o?h(s,{code:f.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):i&&h(s,{code:f.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),r.dirty())}else if(a.kind==="email")Ua.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"email",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="emoji")At||(At=new RegExp(Ga,"u")),At.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"emoji",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="uuid")Oa.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"uuid",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="nanoid")Na.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"nanoid",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid")ja.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"cuid",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid2")Da.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"cuid2",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="ulid")Pa.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"ulid",code:f.invalid_string,message:a.message}),r.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{s=this._getOrReturnCtx(t,s),h(s,{validation:"url",code:f.invalid_string,message:a.message}),r.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"regex",code:f.invalid_string,message:a.message}),r.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),r.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:{startsWith:a.value},message:a.message}),r.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:{endsWith:a.value},message:a.message}),r.dirty()):a.kind==="datetime"?Ya(a).test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:"datetime",message:a.message}),r.dirty()):a.kind==="date"?Qa.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:"date",message:a.message}),r.dirty()):a.kind==="time"?Ka(a).test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{code:f.invalid_string,validation:"time",message:a.message}),r.dirty()):a.kind==="duration"?Fa.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"duration",code:f.invalid_string,message:a.message}),r.dirty()):a.kind==="ip"?Ja(t.data,a.version)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"ip",code:f.invalid_string,message:a.message}),r.dirty()):a.kind==="jwt"?Xa(t.data,a.alg)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"jwt",code:f.invalid_string,message:a.message}),r.dirty()):a.kind==="cidr"?eo(t.data,a.version)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"cidr",code:f.invalid_string,message:a.message}),r.dirty()):a.kind==="base64"?Wa.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"base64",code:f.invalid_string,message:a.message}),r.dirty()):a.kind==="base64url"?Va.test(t.data)||(s=this._getOrReturnCtx(t,s),h(s,{validation:"base64url",code:f.invalid_string,message:a.message}),r.dirty()):P.assertNever(a);return{status:r.value,value:t.data}}_regex(t,n,r){return this.refinement(s=>t.test(s),{validation:n,code:f.invalid_string,...v.errToObj(r)})}_addCheck(t){return new ye({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...v.errToObj(t)})}url(t){return this._addCheck({kind:"url",...v.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...v.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...v.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...v.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...v.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...v.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...v.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...v.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...v.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...v.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...v.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...v.errToObj(t)})}datetime(t){return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:t?.offset??!1,local:t?.local??!1,...v.errToObj(t?.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof t?.precision>"u"?null:t?.precision,...v.errToObj(t?.message)})}duration(t){return this._addCheck({kind:"duration",...v.errToObj(t)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...v.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...v.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...v.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...v.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...v.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...v.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...v.errToObj(n)})}nonempty(t){return this.min(1,v.errToObj(t))}trim(){return new ye({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ye({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ye({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}ye.create=e=>new ye({checks:[],typeName:$.ZodString,coerce:e?.coerce??!1,...I(e)});function to(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,s=n>r?n:r,a=Number.parseInt(e.toFixed(s).replace(".","")),o=Number.parseInt(t.toFixed(s).replace(".",""));return a%o/10**s}class Ue extends D{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==y.number){const a=this._getOrReturnCtx(t);return h(a,{code:f.invalid_type,expected:y.number,received:a.parsedType}),C}let r;const s=new Y;for(const a of this._def.checks)a.kind==="int"?P.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),h(r,{code:f.invalid_type,expected:"integer",received:"float",message:a.message}),s.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="multipleOf"?to(t.data,a.value)!==0&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),h(r,{code:f.not_finite,message:a.message}),s.dirty()):P.assertNever(a);return{status:s.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,v.toString(n))}gt(t,n){return this.setLimit("min",t,!1,v.toString(n))}lte(t,n){return this.setLimit("max",t,!0,v.toString(n))}lt(t,n){return this.setLimit("max",t,!1,v.toString(n))}setLimit(t,n,r,s){return new Ue({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:v.toString(s)}]})}_addCheck(t){return new Ue({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:v.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:v.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:v.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:v.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:v.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:v.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:v.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:v.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:v.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&P.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Ue.create=e=>new Ue({checks:[],typeName:$.ZodNumber,coerce:e?.coerce||!1,...I(e)});class Je extends D{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==y.bigint)return this._getInvalidInput(t);let r;const s=new Y;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),h(r,{code:f.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):P.assertNever(a);return{status:s.value,value:t.data}}_getInvalidInput(t){const n=this._getOrReturnCtx(t);return h(n,{code:f.invalid_type,expected:y.bigint,received:n.parsedType}),C}gte(t,n){return this.setLimit("min",t,!0,v.toString(n))}gt(t,n){return this.setLimit("min",t,!1,v.toString(n))}lte(t,n){return this.setLimit("max",t,!0,v.toString(n))}lt(t,n){return this.setLimit("max",t,!1,v.toString(n))}setLimit(t,n,r,s){return new Je({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:v.toString(s)}]})}_addCheck(t){return new Je({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:v.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:v.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:v.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:v.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:v.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}Je.create=e=>new Je({checks:[],typeName:$.ZodBigInt,coerce:e?.coerce??!1,...I(e)});class Pt extends D{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==y.boolean){const r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:y.boolean,received:r.parsedType}),C}return te(t.data)}}Pt.create=e=>new Pt({typeName:$.ZodBoolean,coerce:e?.coerce||!1,...I(e)});class gt extends D{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==y.date){const a=this._getOrReturnCtx(t);return h(a,{code:f.invalid_type,expected:y.date,received:a.parsedType}),C}if(Number.isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return h(a,{code:f.invalid_date}),C}const r=new Y;let s;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(s=this._getOrReturnCtx(t,s),h(s,{code:f.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),r.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(s=this._getOrReturnCtx(t,s),h(s,{code:f.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),r.dirty()):P.assertNever(a);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new gt({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:v.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:v.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}gt.create=e=>new gt({checks:[],coerce:e?.coerce||!1,typeName:$.ZodDate,...I(e)});class mn extends D{_parse(t){if(this._getType(t)!==y.symbol){const r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:y.symbol,received:r.parsedType}),C}return te(t.data)}}mn.create=e=>new mn({typeName:$.ZodSymbol,...I(e)});class fn extends D{_parse(t){if(this._getType(t)!==y.undefined){const r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:y.undefined,received:r.parsedType}),C}return te(t.data)}}fn.create=e=>new fn({typeName:$.ZodUndefined,...I(e)});class hn extends D{_parse(t){if(this._getType(t)!==y.null){const r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:y.null,received:r.parsedType}),C}return te(t.data)}}hn.create=e=>new hn({typeName:$.ZodNull,...I(e)});class gn extends D{constructor(){super(...arguments),this._any=!0}_parse(t){return te(t.data)}}gn.create=e=>new gn({typeName:$.ZodAny,...I(e)});class yn extends D{constructor(){super(...arguments),this._unknown=!0}_parse(t){return te(t.data)}}yn.create=e=>new yn({typeName:$.ZodUnknown,...I(e)});class we extends D{_parse(t){const n=this._getOrReturnCtx(t);return h(n,{code:f.invalid_type,expected:y.never,received:n.parsedType}),C}}we.create=e=>new we({typeName:$.ZodNever,...I(e)});class vn extends D{_parse(t){if(this._getType(t)!==y.undefined){const r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:y.void,received:r.parsedType}),C}return te(t.data)}}vn.create=e=>new vn({typeName:$.ZodVoid,...I(e)});class ae extends D{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),s=this._def;if(n.parsedType!==y.array)return h(n,{code:f.invalid_type,expected:y.array,received:n.parsedType}),C;if(s.exactLength!==null){const o=n.data.length>s.exactLength.value,i=n.data.length<s.exactLength.value;(o||i)&&(h(n,{code:o?f.too_big:f.too_small,minimum:i?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&n.data.length<s.minLength.value&&(h(n,{code:f.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&n.data.length>s.maxLength.value&&(h(n,{code:f.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,i)=>s.type._parseAsync(new be(n,o,n.path,i)))).then(o=>Y.mergeArray(r,o));const a=[...n.data].map((o,i)=>s.type._parseSync(new be(n,o,n.path,i)));return Y.mergeArray(r,a)}get element(){return this._def.type}min(t,n){return new ae({...this._def,minLength:{value:t,message:v.toString(n)}})}max(t,n){return new ae({...this._def,maxLength:{value:t,message:v.toString(n)}})}length(t,n){return new ae({...this._def,exactLength:{value:t,message:v.toString(n)}})}nonempty(t){return this.min(1,t)}}ae.create=(e,t)=>new ae({type:e,minLength:null,maxLength:null,exactLength:null,typeName:$.ZodArray,...I(t)});function Pe(e){if(e instanceof B){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=ve.create(Pe(r))}return new B({...e._def,shape:()=>t})}else return e instanceof ae?new ae({...e._def,type:Pe(e.element)}):e instanceof ve?ve.create(Pe(e.unwrap())):e instanceof Be?Be.create(Pe(e.unwrap())):e instanceof Ie?Ie.create(e.items.map(t=>Pe(t))):e}class B extends D{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=P.objectKeys(t);return this._cached={shape:t,keys:n},this._cached}_parse(t){if(this._getType(t)!==y.object){const u=this._getOrReturnCtx(t);return h(u,{code:f.invalid_type,expected:y.object,received:u.parsedType}),C}const{status:r,ctx:s}=this._processInputParams(t),{shape:a,keys:o}=this._getCached(),i=[];if(!(this._def.catchall instanceof we&&this._def.unknownKeys==="strip"))for(const u in s.data)o.includes(u)||i.push(u);const l=[];for(const u of o){const p=a[u],T=s.data[u];l.push({key:{status:"valid",value:u},value:p._parse(new be(s,T,s.path,u)),alwaysSet:u in s.data})}if(this._def.catchall instanceof we){const u=this._def.unknownKeys;if(u==="passthrough")for(const p of i)l.push({key:{status:"valid",value:p},value:{status:"valid",value:s.data[p]}});else if(u==="strict")i.length>0&&(h(s,{code:f.unrecognized_keys,keys:i}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const p of i){const T=s.data[p];l.push({key:{status:"valid",value:p},value:u._parse(new be(s,T,s.path,p)),alwaysSet:p in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const u=[];for(const p of l){const T=await p.key,m=await p.value;u.push({key:T,value:m,alwaysSet:p.alwaysSet})}return u}).then(u=>Y.mergeObjectSync(r,u)):Y.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return v.errToObj,new B({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{const s=this._def.errorMap?.(n,r).message??r.defaultError;return n.code==="unrecognized_keys"?{message:v.errToObj(t).message??s}:{message:s}}}:{}})}strip(){return new B({...this._def,unknownKeys:"strip"})}passthrough(){return new B({...this._def,unknownKeys:"passthrough"})}extend(t){return new B({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new B({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:$.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new B({...this._def,catchall:t})}pick(t){const n={};for(const r of P.objectKeys(t))t[r]&&this.shape[r]&&(n[r]=this.shape[r]);return new B({...this._def,shape:()=>n})}omit(t){const n={};for(const r of P.objectKeys(this.shape))t[r]||(n[r]=this.shape[r]);return new B({...this._def,shape:()=>n})}deepPartial(){return Pe(this)}partial(t){const n={};for(const r of P.objectKeys(this.shape)){const s=this.shape[r];t&&!t[r]?n[r]=s:n[r]=s.optional()}return new B({...this._def,shape:()=>n})}required(t){const n={};for(const r of P.objectKeys(this.shape))if(t&&!t[r])n[r]=this.shape[r];else{let a=this.shape[r];for(;a instanceof ve;)a=a._def.innerType;n[r]=a}return new B({...this._def,shape:()=>n})}keyof(){return ir(P.objectKeys(this.shape))}}B.create=(e,t)=>new B({shape:()=>e,unknownKeys:"strip",catchall:we.create(),typeName:$.ZodObject,...I(t)});B.strictCreate=(e,t)=>new B({shape:()=>e,unknownKeys:"strict",catchall:we.create(),typeName:$.ZodObject,...I(t)});B.lazycreate=(e,t)=>new B({shape:e,unknownKeys:"strip",catchall:we.create(),typeName:$.ZodObject,...I(t)});class yt extends D{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function s(a){for(const i of a)if(i.result.status==="valid")return i.result;for(const i of a)if(i.result.status==="dirty")return n.common.issues.push(...i.ctx.common.issues),i.result;const o=a.map(i=>new ue(i.ctx.common.issues));return h(n,{code:f.invalid_union,unionErrors:o}),C}if(n.common.async)return Promise.all(r.map(async a=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(s);{let a;const o=[];for(const l of r){const u={...n,common:{...n.common,issues:[]},parent:null},p=l._parseSync({data:n.data,path:n.path,parent:u});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const i=o.map(l=>new ue(l));return h(n,{code:f.invalid_union,unionErrors:i}),C}}get options(){return this._def.options}}yt.create=(e,t)=>new yt({options:e,typeName:$.ZodUnion,...I(t)});function Ot(e,t){const n=he(e),r=he(t);if(e===t)return{valid:!0,data:e};if(n===y.object&&r===y.object){const s=P.objectKeys(t),a=P.objectKeys(e).filter(i=>s.indexOf(i)!==-1),o={...e,...t};for(const i of a){const l=Ot(e[i],t[i]);if(!l.valid)return{valid:!1};o[i]=l.data}return{valid:!0,data:o}}else if(n===y.array&&r===y.array){if(e.length!==t.length)return{valid:!1};const s=[];for(let a=0;a<e.length;a++){const o=e[a],i=t[a],l=Ot(o,i);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return n===y.date&&r===y.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class vt extends D{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),s=(a,o)=>{if(cn(a)||cn(o))return C;const i=Ot(a.value,o.value);return i.valid?((un(a)||un(o))&&n.dirty(),{status:n.value,value:i.data}):(h(r,{code:f.invalid_intersection_types}),C)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([a,o])=>s(a,o)):s(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}vt.create=(e,t,n)=>new vt({left:e,right:t,typeName:$.ZodIntersection,...I(n)});class Ie extends D{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==y.array)return h(r,{code:f.invalid_type,expected:y.array,received:r.parsedType}),C;if(r.data.length<this._def.items.length)return h(r,{code:f.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),C;!this._def.rest&&r.data.length>this._def.items.length&&(h(r,{code:f.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...r.data].map((o,i)=>{const l=this._def.items[i]||this._def.rest;return l?l._parse(new be(r,o,r.path,i)):null}).filter(o=>!!o);return r.common.async?Promise.all(a).then(o=>Y.mergeArray(n,o)):Y.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Ie({...this._def,rest:t})}}Ie.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Ie({items:e,typeName:$.ZodTuple,rest:null,...I(t)})};class Tn extends D{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==y.map)return h(r,{code:f.invalid_type,expected:y.map,received:r.parsedType}),C;const s=this._def.keyType,a=this._def.valueType,o=[...r.data.entries()].map(([i,l],u)=>({key:s._parse(new be(r,i,r.path,[u,"key"])),value:a._parse(new be(r,l,r.path,[u,"value"]))}));if(r.common.async){const i=new Map;return Promise.resolve().then(async()=>{for(const l of o){const u=await l.key,p=await l.value;if(u.status==="aborted"||p.status==="aborted")return C;(u.status==="dirty"||p.status==="dirty")&&n.dirty(),i.set(u.value,p.value)}return{status:n.value,value:i}})}else{const i=new Map;for(const l of o){const u=l.key,p=l.value;if(u.status==="aborted"||p.status==="aborted")return C;(u.status==="dirty"||p.status==="dirty")&&n.dirty(),i.set(u.value,p.value)}return{status:n.value,value:i}}}}Tn.create=(e,t,n)=>new Tn({valueType:t,keyType:e,typeName:$.ZodMap,...I(n)});class Xe extends D{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==y.set)return h(r,{code:f.invalid_type,expected:y.set,received:r.parsedType}),C;const s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(h(r,{code:f.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),n.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(h(r,{code:f.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),n.dirty());const a=this._def.valueType;function o(l){const u=new Set;for(const p of l){if(p.status==="aborted")return C;p.status==="dirty"&&n.dirty(),u.add(p.value)}return{status:n.value,value:u}}const i=[...r.data.values()].map((l,u)=>a._parse(new be(r,l,r.path,u)));return r.common.async?Promise.all(i).then(l=>o(l)):o(i)}min(t,n){return new Xe({...this._def,minSize:{value:t,message:v.toString(n)}})}max(t,n){return new Xe({...this._def,maxSize:{value:t,message:v.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}Xe.create=(e,t)=>new Xe({valueType:e,minSize:null,maxSize:null,typeName:$.ZodSet,...I(t)});class xn extends D{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}xn.create=(e,t)=>new xn({getter:e,typeName:$.ZodLazy,...I(t)});class bn extends D{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return h(n,{received:n.data,code:f.invalid_literal,expected:this._def.value}),C}return{status:"valid",value:t.data}}get value(){return this._def.value}}bn.create=(e,t)=>new bn({value:e,typeName:$.ZodLiteral,...I(t)});function ir(e,t){return new Ge({values:e,typeName:$.ZodEnum,...I(t)})}class Ge extends D{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return h(n,{expected:P.joinValues(r),received:n.parsedType,code:f.invalid_type}),C}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(t.data)){const n=this._getOrReturnCtx(t),r=this._def.values;return h(n,{received:n.data,code:f.invalid_enum_value,options:r}),C}return te(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t,n=this._def){return Ge.create(t,{...this._def,...n})}exclude(t,n=this._def){return Ge.create(this.options.filter(r=>!t.includes(r)),{...this._def,...n})}}Ge.create=ir;class wn extends D{_parse(t){const n=P.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==y.string&&r.parsedType!==y.number){const s=P.objectValues(n);return h(r,{expected:P.joinValues(s),received:r.parsedType,code:f.invalid_type}),C}if(this._cache||(this._cache=new Set(P.getValidEnumValues(this._def.values))),!this._cache.has(t.data)){const s=P.objectValues(n);return h(r,{received:r.data,code:f.invalid_enum_value,options:s}),C}return te(t.data)}get enum(){return this._def.values}}wn.create=(e,t)=>new wn({values:e,typeName:$.ZodNativeEnum,...I(t)});class Tt extends D{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==y.promise&&n.common.async===!1)return h(n,{code:f.invalid_type,expected:y.promise,received:n.parsedType}),C;const r=n.parsedType===y.promise?n.data:Promise.resolve(n.data);return te(r.then(s=>this._def.type.parseAsync(s,{path:n.path,errorMap:n.common.contextualErrorMap})))}}Tt.create=(e,t)=>new Tt({type:e,typeName:$.ZodPromise,...I(t)});class ze extends D{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===$.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),s=this._def.effect||null,a={addIssue:o=>{h(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(a.addIssue=a.addIssue.bind(a),s.type==="preprocess"){const o=s.transform(r.data,a);if(r.common.async)return Promise.resolve(o).then(async i=>{if(n.value==="aborted")return C;const l=await this._def.schema._parseAsync({data:i,path:r.path,parent:r});return l.status==="aborted"?C:l.status==="dirty"||n.value==="dirty"?Ve(l.value):l});{if(n.value==="aborted")return C;const i=this._def.schema._parseSync({data:o,path:r.path,parent:r});return i.status==="aborted"?C:i.status==="dirty"||n.value==="dirty"?Ve(i.value):i}}if(s.type==="refinement"){const o=i=>{const l=s.refinement(i,a);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return i};if(r.common.async===!1){const i=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?C:(i.status==="dirty"&&n.dirty(),o(i.value),{status:n.value,value:i.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(i=>i.status==="aborted"?C:(i.status==="dirty"&&n.dirty(),o(i.value).then(()=>({status:n.value,value:i.value}))))}if(s.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Fe(o))return C;const i=s.transform(o.value,a);if(i instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:i}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>Fe(o)?Promise.resolve(s.transform(o.value,a)).then(i=>({status:n.value,value:i})):C);P.assertNever(s)}}ze.create=(e,t,n)=>new ze({schema:e,typeName:$.ZodEffects,effect:t,...I(n)});ze.createWithPreprocess=(e,t,n)=>new ze({schema:t,effect:{type:"preprocess",transform:e},typeName:$.ZodEffects,...I(n)});class ve extends D{_parse(t){return this._getType(t)===y.undefined?te(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}ve.create=(e,t)=>new ve({innerType:e,typeName:$.ZodOptional,...I(t)});class Be extends D{_parse(t){return this._getType(t)===y.null?te(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Be.create=(e,t)=>new Be({innerType:e,typeName:$.ZodNullable,...I(t)});class Nt extends D{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===y.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}Nt.create=(e,t)=>new Nt({innerType:e,typeName:$.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...I(t)});class qt extends D{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},s=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return ht(s)?s.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new ue(r.common.issues)},input:r.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new ue(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}qt.create=(e,t)=>new qt({innerType:e,typeName:$.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...I(t)});class _n extends D{_parse(t){if(this._getType(t)!==y.nan){const r=this._getOrReturnCtx(t);return h(r,{code:f.invalid_type,expected:y.nan,received:r.parsedType}),C}return{status:"valid",value:t.data}}}_n.create=e=>new _n({typeName:$.ZodNaN,...I(e)});class no extends D{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Kt extends D{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?C:a.status==="dirty"?(n.dirty(),Ve(a.value)):this._def.out._parseAsync({data:a.value,path:r.path,parent:r})})();{const s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?C:s.status==="dirty"?(n.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(t,n){return new Kt({in:t,out:n,typeName:$.ZodPipeline})}}class Ft extends D{_parse(t){const n=this._def.innerType._parse(t),r=s=>(Fe(s)&&(s.value=Object.freeze(s.value)),s);return ht(n)?n.then(s=>r(s)):r(n)}unwrap(){return this._def.innerType}}Ft.create=(e,t)=>new Ft({innerType:e,typeName:$.ZodReadonly,...I(t)});var $;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})($||($={}));const kn=ye.create,ro=Ue.create,so=Pt.create;we.create;ae.create;const ao=B.create,oo=yt.create;vt.create;Ie.create;const io=Ge.create;Tt.create;ve.create;Be.create;ao({dependsOn:kn().min(1),operator:io(["is","isNot"]),value:oo([kn(),ro(),so()])});const lt=(e,t)=>{const n=t==null;return e==="oneToOne"&&n?"oneWay":e==="oneToMany"&&n?"manyWay":e},lo=e=>[...new Set(e)],Cn=e=>typeof e=="function",co=(e,t)=>{const n={past:[],future:[],current:Cn(e.initialState)?e.initialState():e.initialState},{limit:r=10}=t??{},s=t.stateSelector||(o=>o),a=Object.keys(e.reducers).reduce((o,i)=>{const l=e.reducers[i];if(!Cn(l))throw new Error("Reducer must be a function. prepapre not support in UndoRedo wrapper");return o[i]=(u,p)=>{const T=l(u.current,p);if(t.excludeActionsFromHistory?.includes(i)){T!==void 0&&(u.current=T);return}const m=Dr(u.current);u.past.push(s(m)),u.past.length>r&&u.past.shift(),u.future=[],T!==void 0&&(u.current=T)},o},{});return xt({name:e.name,initialState:n,reducers:{...a,undo:o=>{if(o.past.length===0)return;const i=o.past.pop();i!==void 0&&(o.future=[o.current,...o.future],o.current={...o.current,...i})},redo:o=>{if(o.future.length===0)return;const i=o.future.shift();i!=null&&(o.past=[...o.past,o.current],o.current={...o.current,...i})},discardAll:o=>{t.discard?t.discard(o.current):o.current=n.current,o.past=[],o.future=[]},clearHistory:o=>{o.past=[],o.future=[]}}})},$n={components:{},contentTypes:{},initialComponents:{},initialContentTypes:{},reservedNames:{models:[],attributes:[]},isLoading:!0},Sn=["oneWay","manyWay"],An=e=>e==="manyToOne"?"oneToMany":e==="oneToMany"?"manyToOne":e,me=(e,t)=>e.attributes.findIndex(({name:n})=>n===t),ee=(e,{forTarget:t,targetUid:n})=>t==="contentType"?e.contentTypes[n]:e.components[n],K=(e,t)=>{switch(e.status){case"NEW":case"REMOVED":break;default:e.status=t}},dr=(e,t)=>e==="NEW"||e==="REMOVED"?e:t,Qe=(e,t)=>{e.status=dr(e.status,t)},Et=e=>({...e,status:"NEW"}),En=(e,t,n)=>{const r=e.attributes[t],s=dr(r.status,"CHANGED");e.attributes[t]={...n,status:s},K(e,"CHANGED")},it=(e,t)=>{e.attributes.push(t),K(e,"CHANGED")},Rn=(e,t)=>{const n=e.attributes[t];K(e,"CHANGED"),n.status==="NEW"?e.attributes.splice(t,1):Qe(n,"REMOVED")},uo=(e,t,n)=>{e.attributes[t]=n,K(e,"CHANGED")},Ze=(e,t)=>{const n=e.attributes.findIndex(s=>s.name===t),r=e.attributes[n];K(e,"CHANGED"),r.status==="NEW"?e.attributes.splice(n,1):Qe(r,"REMOVED")},In=(e,t)=>{Or(e,t),K(e,"CHANGED")};co({name:"data-manager",initialState:$n,reducers:{init:(e,t)=>{const{components:n,contentTypes:r,reservedNames:s}=t.payload;e.components=n,e.initialComponents=n,e.initialContentTypes=r,e.contentTypes=r,e.reservedNames=s,e.isLoading=!1},createComponentSchema:(e,t)=>{const{uid:n,data:r,componentCategory:s}=t.payload,a={uid:n,status:"NEW",category:s,modelName:r.displayName,globalId:r.displayName,info:{icon:r.icon,displayName:r.displayName},attributes:[],modelType:"component"};e.components[n]=a},createSchema:(e,t)=>{const{uid:n,data:r}=t.payload,{displayName:s,singularName:a,pluralName:o,kind:i,draftAndPublish:l,pluginOptions:u}=r,p={uid:n,status:"NEW",visible:!0,modelType:"contentType",restrictRelationsTo:null,attributes:[],kind:i,modelName:s,globalId:s,options:{draftAndPublish:l},info:{displayName:s,singularName:a,pluralName:o},pluginOptions:u};e.contentTypes[n]=p},addAttribute:(e,t)=>{const{attributeToSet:n,forTarget:r,targetUid:s}=t.payload,a=ee(e,{forTarget:r,targetUid:s}),o=Et(Pr(n,"createComponent"));if(o.type==="relation"){const i=o.target,l=o.targetAttribute||null,u=o.relation,p=lt(u,l);if(!["oneWay","manyWay"].includes(p)){const m=Et({name:l,relation:An(p),target:a.uid,targetAttribute:o.name,type:"relation",private:o.private}),g=ee(e,{forTarget:r,targetUid:i});it(g,m)}}it(a,o),K(a,"CHANGED")},moveAttribute:(e,t)=>{const{forTarget:n,targetUid:r,from:s,to:a}=t.payload,o=ee(e,{forTarget:n,targetUid:r}),i=o.attributes[s];o.attributes.splice(s,1),o.attributes.splice(a,0,i),K(o,"CHANGED")},addCustomFieldAttribute:(e,t)=>{const{attributeToSet:n,forTarget:r,targetUid:s}=t.payload,a=ee(e,{forTarget:r,targetUid:s});it(a,Et(n))},addCreatedComponentToDynamicZone:(e,t)=>{const{dynamicZoneTarget:n,componentsToAdd:r,forTarget:s,targetUid:a}=t.payload,o=ee(e,{forTarget:s,targetUid:a}),i=me(o,n),l=o.attributes[i];r.forEach(u=>{l.components.push(u)}),Qe(l,"CHANGED"),K(o,"CHANGED")},changeDynamicZoneComponents:(e,t)=>{const{dynamicZoneTarget:n,newComponents:r,forTarget:s,targetUid:a}=t.payload,o=ee(e,{forTarget:s,targetUid:a}),i=me(o,n),l=o.attributes[i],u=l.components,p=lo([...u,...r]);K(o,"CHANGED"),Qe(l,"CHANGED"),l.components=p},editAttribute:(e,t)=>{const{name:n,attributeToSet:r,forTarget:s,targetUid:a}=t.payload,o=ee(e,{forTarget:s,targetUid:a}),i=me(o,n);if(i===-1)return;const l=o.attributes[i];if(En(o,i,r),l.type!==r.type||l.type!=="relation"||r.type!=="relation")return;const u=ee(e,{forTarget:"contentType",targetUid:l.target}),p=ee(e,{forTarget:"contentType",targetUid:r.target}),T=me(u,l.targetAttribute??"");l.targetAttribute&&Ze(u,l.targetAttribute);const m=lt(r.relation,r.targetAttribute);if(!Sn.includes(m)){const w={name:r.targetAttribute,type:"relation",relation:An(r.relation),targetAttribute:r.name,target:o.uid,private:l.private??r.private,pluginOptions:l.pluginOptions??r.pluginOptions,status:"CHANGED"};T!==-1&&u.uid===p.uid?uo(p,T,w):it(p,{...w,status:"NEW"})}},editCustomFieldAttribute:(e,t)=>{const{forTarget:n,targetUid:r,name:s,attributeToSet:a}=t.payload,o=s,i=ee(e,{forTarget:n,targetUid:r}),l=me(i,o);En(i,l,a)},reloadPlugin:()=>$n,removeComponentFromDynamicZone:(e,t)=>{const{dzName:n,componentToRemoveIndex:r,forTarget:s,targetUid:a}=t.payload,o=s==="contentType"?e.contentTypes[a]:e.components[a];if(!o)return;const i=me(o,n),l=o.attributes[i];K(o,"CHANGED"),Qe(l,"CHANGED"),l.components.splice(r,1)},removeField:(e,t)=>{const{forTarget:n,targetUid:r,attributeToRemoveName:s}=t.payload,a=ee(e,{forTarget:n,targetUid:r}),o=me(a,s),i=a.attributes[o];if(i.type==="relation"){const{target:l,relation:u,targetAttribute:p}=i,T=lt(u,p);if(!Sn.includes(T)&&p){const g=ee(e,{forTarget:n,targetUid:l}),w=me(g,p);Rn(g,w)}}a.attributes.forEach(l=>{l.type==="uid"&&l.targetField===s&&delete l.targetField}),Rn(a,o)},updateComponentSchema:(e,t)=>{const{data:n,uid:r}=t.payload,s=e.components[r];s&&In(s,{info:{displayName:n.displayName,icon:n.icon}})},updateComponentUid:(e,t)=>{const{newComponentUID:n,uid:r}=t.payload,s=e.components[r];if(!(!s||s.status!=="NEW")&&n!==r){const a={...s,uid:n};e.components[n]=a,delete e.components[r],Object.keys(e.contentTypes).forEach(o=>{const i=e.contentTypes[o];i.attributes.forEach(l=>{if(l.type==="dynamiczone"){const u=l.components.map(p=>p===r?n:p);l.components=u}}),i.attributes.forEach(l=>{l.type==="component"&&l.component===r&&(l.component=n)})}),Object.keys(e.components).forEach(o=>{e.components[o].attributes.forEach(l=>{l.type==="component"&&l.component===r&&(l.component=n)})})}},updateSchema:(e,t)=>{const{data:n,uid:r}=t.payload,{displayName:s,kind:a,draftAndPublish:o,pluginOptions:i}=n,l=e.contentTypes[r];l&&In(l,{info:{displayName:s},kind:a,options:{draftAndPublish:o},pluginOptions:i})},deleteComponent:(e,t)=>{const n=t.payload;e.components[n].status==="NEW"?delete e.components[n]:K(e.components[n],"REMOVED"),Object.keys(e.contentTypes).forEach(r=>{const s=e.contentTypes[r];s.attributes.forEach(a=>{if(a.type==="dynamiczone"){const o=a.components.filter(i=>i!==n);a.components=o}}),s.attributes.forEach(a=>{a.type==="component"&&a.component===n&&Ze(s,a.name)})}),Object.keys(e.components).forEach(r=>{const s=e.components[r];s.attributes.forEach(a=>{a.type==="component"&&a.component===n&&Ze(s,a.name)})})},deleteContentType:(e,t)=>{const n=t.payload,r=e.contentTypes[n];r.status==="NEW"?delete e.contentTypes[n]:K(r,"REMOVED"),Object.keys(e.components).forEach(s=>{const a=e.components[s];a.attributes.forEach(o=>{o.type==="relation"&&o.target===n&&Ze(a,o.name)})}),Object.keys(e.contentTypes).forEach(s=>{const a=e.contentTypes[s];a.attributes.forEach(o=>{o.type==="relation"&&o.target===n&&Ze(a,o.name)})})},applyChange(e,t){const{action:n,schema:r}=t.payload;switch(n){case"add":{const s=r.uid;r.modelType==="component"?e.components[s]=r:e.contentTypes[s]=r}break;case"update":{const s=r.uid;if(r.modelType==="component"){const a=e.components[s];e.components[s]={...r,status:a?.status==="NEW"?"NEW":r.status}}else{const a=e.contentTypes[s];e.contentTypes[s]={...r,status:a?.status==="NEW"?"NEW":r.status}}}break;case"delete":{const s=r.uid;if(r.modelType==="component"){if(!e.components[s])return;e.components[s]?.status==="NEW"?delete e.components[s]:e.components[s].status="REMOVED"}else{if(!e.contentTypes[s])return;e.contentTypes[s]?.status==="NEW"?delete e.contentTypes[s]:e.contentTypes[s].status="REMOVED"}break}}}}},{limit:50,excludeActionsFromHistory:["reloadPlugin","init"],stateSelector:e=>e?{components:e.components,contentTypes:e.contentTypes}:{},discard:e=>{e.components=e.initialComponents,e.contentTypes=e.initialContentTypes}});const Ee=e=>Nr(e,{separator:"-"}),po=(e,t)=>`${Ee(t)}.${Ee(e)}`,lr=(e,t)=>{if(t.items)return t.items.reduce(lr,e);if("defaultValue"in t){const{name:n,defaultValue:r}=t;e.push({name:n,defaultValue:r})}return e},Rt=e=>["manyToMany","oneToMany","manyWay"].includes(e)?2:1,Mn=e=>["manyToMany","manyToOne"].includes(e)?2:1,We={formErrors:{},modifiedData:{},initialData:{},componentToCreate:{},isCreatingComponentWhileAddingAField:!1};xt({name:"formModal",initialState:We,reducers:{onChange:(e,t)=>{const{keys:n,value:r}=t.payload,s=e.modifiedData;if(!!s.default&&n.length===1&&n.includes("type")){const o=s.type;o&&["date","datetime","time"].includes(o)&&delete e.modifiedData.default}W(e,["modifiedData",...n],r)},onChangeRelationTarget:(e,t)=>{const{target:{oneThatIsCreatingARelationWithAnother:n,selectedContentTypeFriendlyName:r,targetContentTypeAllowedRelations:s,value:a}}=t.payload;let o=!1,i=null;W(e,["modifiedData","target"],a);const l=e.modifiedData;if(Array.isArray(s)){const m=lt(l.relation,l.targetAttribute);if(m&&!s.includes(m)){const g=s[0];o=!0,i=g,g==="oneWay"?W(e,["modifiedData","relation"],"oneToOne"):g==="manyWay"?W(e,["modifiedData","relation"],"oneToMany"):W(e,["modifiedData","relation"],g)}}let u;if(o&&i?u=$e(pe(Ee(r)),Rt(i)):u=$e(pe(Ee(r)),Rt(l.relation)),W(e,["modifiedData","name"],u),e.modifiedData.targetAttribute===null)return;if(o&&i&&["oneWay","manyWay"].includes(i)){W(e,["modifiedData","targetAttribute"],null);return}const T=$e(pe(Ee(n)),Mn(l.relation));W(e,["modifiedData","targetAttribute"],T)},onChangeRelationType:(e,t)=>{const{target:{oneThatIsCreatingARelationWithAnother:n,value:r}}=t.payload,s=e.modifiedData.name;if(!["oneWay","manyWay"].includes(r)){W(e,["modifiedData","relation"],r);const a=e.modifiedData.targetAttribute;W(e,["modifiedData","name"],$e(pe(Ee(s)),Rt(r))),W(e,["modifiedData","targetAttribute"],$e(a||pe(Ee(n)),Mn(r)));return}if(r==="oneWay"){W(e,["modifiedData","relation"],"oneToOne"),W(e,["modifiedData","targetAttribute"],null),W(e,["modifiedData","name"],$e(pe(s),1));return}W(e,["modifiedData","relation"],"oneToMany"),W(e,["modifiedData","targetAttribute"],null),W(e,["modifiedData","name"],$e(pe(s),2))},resetProps:()=>We,resetPropsAndSetFormForAddingAnExistingCompo:(e,t)=>{const{options:n={}}=t.payload;return{...We,modifiedData:{type:"component",repeatable:!0,...n}}},resetPropsAndSaveCurrentData:(e,t)=>{const{options:n={}}=t.payload,r=e.modifiedData.componentToCreate,s={displayName:r.displayName,type:"component",repeatable:!1,...n,component:po(r.displayName,r.category)};return{...We,componentToCreate:r,modifiedData:s,isCreatingComponentWhileAddingAField:e.modifiedData.createComponent}},resetPropsAndSetTheFormForAddingACompoToADz:e=>{const n={...e.modifiedData,createComponent:!0,componentToCreate:{type:"component"}};return{...We,modifiedData:n}},setDataToEdit:(e,t)=>{const{data:n}=t.payload;e.modifiedData=n,e.initialData=n},setAttributeDataSchema:(e,t)=>{const{isEditing:n}=t.payload;if(n===!0){const{modifiedDataToSetForEditing:u}=t.payload;e.modifiedData=u,e.initialData=u;return}const{attributeType:r,nameToSetForRelation:s,targetUid:a,step:o,options:i={}}=t.payload;let l;r==="component"?o==="1"?l={type:"component",createComponent:!0,componentToCreate:{type:"component"}}:l={...i,type:"component",repeatable:!0}:r==="dynamiczone"?l={...i,type:"dynamiczone",components:[]}:r==="text"?l={...i,type:"string"}:r==="number"||r==="date"?l=i:r==="media"?l={allowedTypes:["images","files","videos","audios"],type:"media",multiple:!0,...i}:r==="enumeration"?l={...i,type:"enumeration",enum:[]}:r==="relation"?l={name:pe(s),relation:"oneToOne",targetAttribute:null,target:a,type:"relation"}:l={...i,type:r,default:null},e.modifiedData=l},setCustomFieldDataSchema:(e,t)=>{const{payload:n}=t;if(n.isEditing===!0){const{modifiedDataToSetForEditing:i}=t.payload;e.modifiedData=i,e.initialData=i;return}const{customField:r,options:s={}}=n;e.modifiedData={...s,type:r.type};const o=[...r?.options?.base||[],...r?.options?.advanced||[]].reduce(lr,[]);o.length&&o.forEach(({name:i,defaultValue:l})=>W(e.modifiedData,i,l))},setDynamicZoneDataSchema:(e,t)=>{const{attributeToEdit:n}=t.payload;e.modifiedData=n,e.initialData=n},setErrors:(e,t)=>{e.formErrors=t.payload.errors}}});var mo=function(e){},fo=function(e){},ho={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:mo,onWarn:fo};const go=zn`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  `;c(qr)`
  animation: ${go} 1s infinite linear;
`;c(S)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* TODO: set this up in the theme for consistence z-index values */
  z-index: 1140;
  padding-top: 16rem;

  & > * {
    position: relative;
    z-index: 1;
  }

  &:before {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: ${({theme:e})=>e.colors.neutral0};
    opacity: 0.9;
  }
`;c(b)`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    > path {
      fill: ${({theme:e})=>e.colors.primary600} !important;
    }
  }
`;const fe="single-types";Q("DocumentRBAC",{canCreate:!1,canCreateFields:[],canDelete:!1,canPublish:!1,canRead:!1,canReadFields:[],canUpdate:!1,canUpdateFields:[],canUserAction:()=>!1,isLoading:!1});const He=re.enhanceEndpoints({addTagTypes:["ComponentConfiguration","ContentTypesConfiguration","ContentTypeSettings","Document","InitialData","HistoryVersion","Relations","UidAvailability","RecentDocumentList","GuidedTourMeta","CountDocuments","UpcomingReleasesList"]}),cr=He.injectEndpoints({overrideExisting:!0,endpoints:e=>({autoCloneDocument:e.mutation({query:({model:t,sourceId:n,params:r})=>({url:`/content-manager/collection-types/${t}/auto-clone/${n}`,method:"POST",config:{params:r}}),invalidatesTags:(t,n,{model:r})=>n?[]:[{type:"Document",id:`${r}_LIST`},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),cloneDocument:e.mutation({query:({model:t,sourceId:n,data:r,params:s})=>({url:`/content-manager/collection-types/${t}/clone/${n}`,method:"POST",data:r,config:{params:s}}),invalidatesTags:(t,n,{model:r})=>[{type:"Document",id:`${r}_LIST`},{type:"UidAvailability",id:r},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),createDocument:e.mutation({query:({model:t,data:n,params:r})=>({url:`/content-manager/collection-types/${t}`,method:"POST",data:n,config:{params:r}}),invalidatesTags:(t,n,{model:r})=>[{type:"Document",id:`${r}_LIST`},"Relations",{type:"UidAvailability",id:r},"RecentDocumentList","CountDocuments","UpcomingReleasesList"],transformResponse:(t,n,r)=>!("data"in t)&&r.model==="plugin::users-permissions.user"?{data:t,meta:{availableStatus:[],availableLocales:[]}}:t}),deleteDocument:e.mutation({query:({collectionType:t,model:n,documentId:r,params:s})=>({url:`/content-manager/${t}/${n}${t!==fe&&r?`/${r}`:""}`,method:"DELETE",config:{params:s}}),invalidatesTags:(t,n,{collectionType:r,model:s})=>[{type:"Document",id:r!==fe?`${s}_LIST`:s},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),deleteManyDocuments:e.mutation({query:({model:t,params:n,...r})=>({url:`/content-manager/collection-types/${t}/actions/bulkDelete`,method:"POST",data:r,config:{params:n}}),invalidatesTags:(t,n,{model:r})=>[{type:"Document",id:`${r}_LIST`},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),discardDocument:e.mutation({query:({collectionType:t,model:n,documentId:r,params:s})=>({url:r?`/content-manager/${t}/${n}/${r}/actions/discard`:`/content-manager/${t}/${n}/actions/discard`,method:"POST",config:{params:s}}),invalidatesTags:(t,n,{collectionType:r,model:s,documentId:a})=>[{type:"Document",id:r!==fe?`${s}_${a}`:s},{type:"Document",id:`${s}_LIST`},"Relations",{type:"UidAvailability",id:s},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),getAllDocuments:e.query({query:({model:t,params:n})=>({url:`/content-manager/collection-types/${t}`,method:"GET",config:{params:Fr.stringify(n,{encode:!0})}}),providesTags:(t,n,r)=>[{type:"Document",id:"ALL_LIST"},{type:"Document",id:`${r.model}_LIST`},...t?.results.map(({documentId:s})=>({type:"Document",id:`${r.model}_${s}`}))??[]]}),getDraftRelationCount:e.query({query:({collectionType:t,model:n,documentId:r,params:s})=>({url:r?`/content-manager/${t}/${n}/${r}/actions/countDraftRelations`:`/content-manager/${t}/${n}/actions/countDraftRelations`,method:"GET",config:{params:s}})}),getDocument:e.query({queryFn:async({collectionType:t,model:n,documentId:r,params:s},a,o,i)=>{const l=await i({url:`/content-manager/${t}/${n}${r?`/${r}`:""}`,method:"GET",config:{params:s}});return l.error&&l.error.name==="NotFoundError"&&t===fe?{data:{document:void 0},error:void 0}:l},providesTags:(t,n,{collectionType:r,model:s,documentId:a})=>[{type:"Document",id:r!==fe?`${s}_${t&&"documentId"in t?t.documentId:a}`:s},{type:"Document",id:`${s}_ALL_ITEMS`}]}),getManyDraftRelationCount:e.query({query:({model:t,...n})=>({url:`/content-manager/collection-types/${t}/actions/countManyEntriesDraftRelations`,method:"GET",config:{params:n}}),transformResponse:t=>t.data}),publishDocument:e.mutation({query:({collectionType:t,model:n,documentId:r,params:s,data:a})=>({url:r?`/content-manager/${t}/${n}/${r}/actions/publish`:`/content-manager/${t}/${n}/actions/publish`,method:"POST",data:a,config:{params:s}}),invalidatesTags:(t,n,{collectionType:r,model:s,documentId:a})=>[{type:"Document",id:r!==fe?`${s}_${a}`:s},{type:"Document",id:`${s}_LIST`},"Relations","RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),publishManyDocuments:e.mutation({query:({model:t,params:n,...r})=>({url:`/content-manager/collection-types/${t}/actions/bulkPublish`,method:"POST",data:r,config:{params:n}}),invalidatesTags:(t,n,{model:r,documentIds:s})=>[...s.map(a=>({type:"Document",id:`${r}_${a}`})),"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),updateDocument:e.mutation({query:({collectionType:t,model:n,documentId:r,data:s,params:a})=>({url:`/content-manager/${t}/${n}${r?`/${r}`:""}`,method:"PUT",data:s,config:{params:a}}),invalidatesTags:(t,n,{collectionType:r,model:s,documentId:a})=>[{type:"Document",id:r!==fe?`${s}_${a}`:s},"Relations",{type:"UidAvailability",id:s},"RecentDocumentList","CountDocuments","UpcomingReleasesList"],async onQueryStarted({data:t,...n},{dispatch:r,queryFulfilled:s}){const a=r(cr.util.updateQueryData("getDocument",n,o=>{Object.assign(o.data,t)}));try{await s}catch{a.undo()}},transformResponse:(t,n,r)=>!("data"in t)&&r.model==="plugin::users-permissions.user"?{data:t,meta:{availableStatus:[],availableLocales:[]}}:t}),unpublishDocument:e.mutation({query:({collectionType:t,model:n,documentId:r,params:s,data:a})=>({url:r?`/content-manager/${t}/${n}/${r}/actions/unpublish`:`/content-manager/${t}/${n}/actions/unpublish`,method:"POST",data:a,config:{params:s}}),invalidatesTags:(t,n,{collectionType:r,model:s,documentId:a})=>[{type:"Document",id:r!==fe?`${s}_${a}`:s},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),unpublishManyDocuments:e.mutation({query:({model:t,params:n,...r})=>({url:`/content-manager/collection-types/${t}/actions/bulkUnpublish`,method:"POST",data:r,config:{params:n}}),invalidatesTags:(t,n,{model:r,documentIds:s})=>[...s.map(a=>({type:"Document",id:`${r}_${a}`})),"RecentDocumentList","CountDocuments","UpcomingReleasesList"]})})}),{useAutoCloneDocumentMutation:id,useCloneDocumentMutation:dd,useCreateDocumentMutation:ld,useDeleteDocumentMutation:cd,useDeleteManyDocumentsMutation:ud,useDiscardDocumentMutation:pd,useGetAllDocumentsQuery:md,useLazyGetDocumentQuery:fd,useGetDocumentQuery:hd,useLazyGetDraftRelationCountQuery:gd,useGetManyDraftRelationCountQuery:yd,usePublishDocumentMutation:vd,usePublishManyDocumentsMutation:Td,useUpdateDocumentMutation:xd,useUnpublishDocumentMutation:bd,useUnpublishManyDocumentsMutation:wd}=cr,yo=He.injectEndpoints({endpoints:e=>({getInitialData:e.query({query:()=>"/content-manager/init",transformResponse:t=>t.data,providesTags:["InitialData"]})})}),{useGetInitialDataQuery:_d}=yo,vo=He.injectEndpoints({endpoints:e=>({getContentTypeConfiguration:e.query({query:t=>({url:`/content-manager/content-types/${t}/configuration`,method:"GET"}),transformResponse:t=>t.data,providesTags:(t,n,r)=>[{type:"ContentTypesConfiguration",id:r},{type:"ContentTypeSettings",id:"LIST"}]}),getAllContentTypeSettings:e.query({query:()=>"/content-manager/content-types-settings",transformResponse:t=>t.data,providesTags:[{type:"ContentTypeSettings",id:"LIST"}]}),updateContentTypeConfiguration:e.mutation({query:({uid:t,...n})=>({url:`/content-manager/content-types/${t}/configuration`,method:"PUT",data:n}),transformResponse:t=>t.data,invalidatesTags:(t,n,{uid:r})=>[{type:"ContentTypesConfiguration",id:r},{type:"ContentTypeSettings",id:"LIST"},{type:"InitialData"}]})})}),{useGetContentTypeConfigurationQuery:kd,useGetAllContentTypeSettingsQuery:Cd,useUpdateContentTypeConfigurationMutation:$d}=vo,To=(e=!0)=>{const n=window.STRAPI_HIGHLIGHT_HOVER_COLOR??"#4945ff",r=window.STRAPI_HIGHLIGHT_ACTIVE_COLOR??"#7b79ff",s="strapi-preview-highlight-styles",a=300,o=window.STRAPI_DISABLE_STEGA_DECODING??!1,i="data-strapi-source",l="strapi-preview-overlay",u={STRAPI_FIELD_FOCUS:"strapiFieldFocus",STRAPI_FIELD_BLUR:"strapiFieldBlur",STRAPI_FIELD_CHANGE:"strapiFieldChange",STRAPI_FIELD_FOCUS_INTENT:"strapiFieldFocusIntent",STRAPI_FIELD_SINGLE_CLICK_HINT:"strapiFieldSingleClickHint"};if(!e)return{INTERNAL_EVENTS:u};const p=(x,R)=>{window.parent.postMessage({type:x,payload:R},"*")},T=x=>document.querySelectorAll(`[${i}*="path=${x}"]`),m=async()=>{if(o)return;const{vercelStegaDecode:x,vercelStegaClean:R}=await Ur(()=>import("https://cdn.jsdelivr.net/npm/@vercel/stega@0.1.2/+esm"),[]),L=j=>{const O=Array.from(j.childNodes).filter(F=>F.nodeType===Node.TEXT_NODE),q=O.map(F=>F.textContent||"").join("");if(q)try{const F=x(q);F&&"strapiSource"in F&&(j.setAttribute(i,F.strapiSource),O.forEach(_=>{if(_.textContent){const U=R(_.textContent);U!==_.textContent&&(_.textContent=U)}}))}catch{}},G=document.querySelectorAll("*");Array.from(G).forEach(L);const A=new MutationObserver(j=>{j.forEach(O=>{O.type==="childList"&&O.addedNodes.forEach(q=>{if(q.nodeType===Node.ELEMENT_NODE){const F=q;L(F);const _=F.querySelectorAll("*");Array.from(_).forEach(L)}}),O.type==="characterData"&&O.target.parentElement&&L(O.target.parentElement)})});return A.observe(document,{childList:!0,subtree:!0,characterData:!0}),A},g=()=>{const x=document.getElementById(s);x&&x.remove();const R=document.createElement("style");return R.id=s,R.textContent=`
      .strapi-highlight {
        position: absolute;
        outline: 2px solid transparent;
        pointer-events: auto;
        border-radius: 2px;
        background-color: transparent;
        will-change: transform;
        transition: outline-color 0.1s ease-in-out;
      }

      .strapi-highlight:hover {
        outline-color: ${n} !important;
      }

      .strapi-highlight.strapi-highlight-focused {
        outline-color: ${r} !important;
        outline-width: 3px !important;
      }
    `,document.head.appendChild(R),R},w=()=>{window.__strapi_previewCleanup?.(),document.getElementById(l)?.remove();const x=document.createElement("div");return x.id=l,x.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `,window.document.body.appendChild(x),x},J=x=>{const R=new Map,L=[],G=[],A=new Map;let j=null;const O=(E,M)=>{if(!M)return;const V=E.getBoundingClientRect();M.style.width=`${V.width+2*2}px`,M.style.height=`${V.height+2*2}px`,M.style.transform=`translate(${V.left-2}px, ${V.top-2}px)`},q=()=>{R.forEach((E,M)=>{O(M,E)})},F=E=>{if(R.has(E))return;const M=document.createElement("div");M.className="strapi-highlight";const V=Z=>{if(Z.__strapi_redispatched)return;Z.preventDefault(),Z.stopPropagation();const Ce=A.get(E);Ce&&(window.clearTimeout(Ce),A.delete(E));const st=window.setTimeout(()=>{A.delete(E),p(u.STRAPI_FIELD_SINGLE_CLICK_HINT,null);const ie=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,detail:1,button:Z.button,buttons:Z.buttons,clientX:Z.clientX,clientY:Z.clientY,ctrlKey:Z.ctrlKey,altKey:Z.altKey,shiftKey:Z.shiftKey,metaKey:Z.metaKey});ie.__strapi_redispatched=!0,E.dispatchEvent(ie)},a);A.set(E,st)},Me=Z=>{Z.preventDefault(),Z.stopPropagation();const Ce=A.get(E);Ce&&(clearTimeout(Ce),A.delete(E));const st=E.getAttribute(i);if(st){const ie=E.getBoundingClientRect();p(u.STRAPI_FIELD_FOCUS_INTENT,{path:st,position:{top:ie.top,left:ie.left,right:ie.right,bottom:ie.bottom,width:ie.width,height:ie.height}})}},ne=Z=>{Z.detail>=2&&Z.preventDefault()};M.addEventListener("click",V),M.addEventListener("dblclick",Me),M.addEventListener("mousedown",ne),L.push({element:M,type:"click",handler:V},{element:M,type:"dblclick",handler:Me},{element:M,type:"mousedown",handler:ne}),R.set(E,M),x.appendChild(M),O(E,M)},_=E=>{const M=R.get(E);if(!M)return;const V=A.get(E);V&&(window.clearTimeout(V),A.delete(E)),M.remove(),R.delete(E),L.filter(ne=>ne.element===M).forEach(({element:ne,type:Z,handler:Ce})=>{ne.removeEventListener(Z,Ce)}),L.splice(0,L.length,...L.filter(ne=>ne.element!==M))},U=window.document.querySelectorAll(`[${i}]`);return Array.from(U).forEach(E=>{E instanceof HTMLElement&&F(E)}),{get elements(){return Array.from(R.keys())},get highlights(){return Array.from(R.values())},updateAllHighlights:q,eventListeners:L,focusedHighlights:G,createHighlightForElement:F,removeHighlightForElement:_,setFocusedField:E=>{j=E},getFocusedField:()=>j,clearAllPendingClicks:()=>{A.forEach(E=>clearTimeout(E)),A.clear()}}},X=x=>{const R=()=>{x.updateAllHighlights()},L=new Set;return L.add(window),x.elements.forEach(A=>{let j=A.parentElement;for(;j;){const O=window.getComputedStyle(j),q=O.overflow+O.overflowX+O.overflowY;(q.includes("scroll")||q.includes("auto"))&&L.add(j),j=j.parentElement}}),L.forEach(A=>{A===window?(window.addEventListener("scroll",R),window.addEventListener("resize",R)):A.addEventListener("scroll",R)}),{cleanup:()=>{L.forEach(A=>{A===window?(window.removeEventListener("scroll",R),window.removeEventListener("resize",R)):A.removeEventListener("scroll",R)})}}},ke=(x,R)=>{const L=new ResizeObserver(()=>{x.updateAllHighlights()}),G=j=>{L.observe(j)};x.elements.forEach(G),L.observe(document.documentElement);const A=new MutationObserver(j=>{j.forEach(O=>{if(O.type==="attributes"&&O.attributeName===i){const q=O.target;q.hasAttribute(i)?(x.createHighlightForElement(q),G(q)):x.removeHighlightForElement(q)}O.type==="childList"&&(O.addedNodes.forEach(q=>{if(q.nodeType===Node.ELEMENT_NODE){const F=q;F.hasAttribute(i)&&F instanceof HTMLElement&&(x.createHighlightForElement(F),G(F));const _=F.querySelectorAll(`[${i}]`);Array.from(_).forEach(U=>{U instanceof HTMLElement&&(x.createHighlightForElement(U),G(U))})}}),O.removedNodes.forEach(q=>{if(q.nodeType===Node.ELEMENT_NODE){const F=q;x.removeHighlightForElement(F)}}))})});return A.observe(document,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[i]}),{resizeObserver:L,highlightObserver:A,stegaObserver:R}},Xt=x=>{const R=G=>{if(G.data?.type){if(G.data.type===u.STRAPI_FIELD_CHANGE){const{field:A,value:j}=G.data.payload;if(!A)return;T(A).forEach(O=>{O instanceof HTMLElement&&(O.textContent=j||"")}),x.updateAllHighlights();return}if(G.data.type===u.STRAPI_FIELD_FOCUS){const{field:A}=G.data.payload;if(!A)return;x.focusedHighlights.forEach(j=>{j.classList.remove("strapi-highlight-focused")}),x.focusedHighlights.length=0,x.setFocusedField(A),T(A).forEach((j,O)=>{O===0&&j.scrollIntoView({behavior:"smooth",block:"center"});const q=x.highlights[Array.from(x.elements).indexOf(j)];q&&(q.classList.add("strapi-highlight-focused"),x.focusedHighlights.push(q))});return}if(G.data.type===u.STRAPI_FIELD_BLUR){const{field:A}=G.data.payload;if(A!==x.getFocusedField())return;x.focusedHighlights.forEach(j=>{j.classList.remove("strapi-highlight-focused")}),x.focusedHighlights.length=0,x.setFocusedField(null)}}};window.addEventListener("message",R);const L={element:window,type:"message",handler:R};return[...x.eventListeners,L]},en=(x,R,L,G,A)=>{window.__strapi_previewCleanup=()=>{R.resizeObserver.disconnect(),R.highlightObserver.disconnect(),R.stegaObserver?.disconnect(),L.cleanup(),A.clearAllPendingClicks(),G.forEach(({element:O,type:q,handler:F})=>{O.removeEventListener(q,F)});const j=document.getElementById(s);j&&j.remove(),x.remove()}};m().then(x=>{g();const R=w(),L=J(R),G=ke(L,x),A=X(L),j=Xt(L);en(R,G,A,j,L)})},xo=To(!1);xo.INTERNAL_EVENTS;Q("InputPopover");c.pre`
  border-radius: ${({theme:e})=>e.borderRadius};
  background-color: ${({theme:e})=>e.colors.neutral100};
  max-width: 100%;
  overflow: auto;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
  flex-shrink: 1;

  & > code {
    font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
      monospace;
    color: ${({theme:e})=>e.colors.neutral800};
    overflow: auto;
    max-width: 100%;
  }
`;c(N).attrs({tag:"h1"})`
  font-size: 4.2rem;
  line-height: ${({theme:e})=>e.lineHeights[1]};
`;c(N).attrs({tag:"h2"})`
  font-size: 3.5rem;
  line-height: ${({theme:e})=>e.lineHeights[1]};
`;c(N).attrs({tag:"h3"})`
  font-size: 2.9rem;
  line-height: ${({theme:e})=>e.lineHeights[1]};
`;c(N).attrs({tag:"h4"})`
  font-size: 2.4rem;
  line-height: ${({theme:e})=>e.lineHeights[1]};
`;c(N).attrs({tag:"h5"})`
  font-size: 2rem;
  line-height: ${({theme:e})=>e.lineHeights[1]};
`;c(N).attrs({tag:"h6"})`
  font-size: 1.6rem;
  line-height: ${({theme:e})=>e.lineHeights[1]};
`;c(S)`
  transition-property: box-shadow;
  transition-duration: 0.2s;
  ${e=>e.$isFocused&&xe`
      box-shadow: ${e.theme.colors.primary600} 0px 0px 0px 3px;
    `}

  & > img {
    height: auto;
    // The max-height is decided with the design team, the 56px is the height of the toolbar
    max-height: calc(512px - 56px);
    max-width: 100%;
    object-fit: contain;
  }
`;c(b)`
  text-decoration: none;
`;c(le)`
  visibility: ${e=>e.$visible?"visible":"hidden"};
`;const ur=xe`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spaces[2]};
  margin-inline-start: ${({theme:e})=>e.spaces[0]};
  margin-inline-end: ${({theme:e})=>e.spaces[0]};
  padding-inline-start: ${({theme:e})=>e.spaces[2]};

  ol,
  ul {
    margin-block-start: ${({theme:e})=>e.spaces[0]};
    margin-block-end: ${({theme:e})=>e.spaces[0]};
  }

  li {
    margin-inline-start: ${({theme:e})=>e.spaces[3]};
  }
`;c.ol`
  list-style-type: ${e=>e.$listStyleType};
  ${ur}
`;c.ul`
  list-style-type: ${e=>e.$listStyleType};
  ${ur}
`;c.blockquote.attrs({role:"blockquote"})`
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  border-left: ${({theme:e})=>`${e.spaces[1]} solid ${e.colors.neutral200}`};
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  color: ${({theme:e})=>e.colors.neutral600};
`;const Ln={UPWARD:"upward",DOWNWARD:"downward"};c(S)`
  &[aria-disabled='true'] {
    cursor: not-allowed;
    background: ${({theme:e})=>e.colors.neutral150};
  }
`;c(Gr)`
  background: ${({theme:e})=>e.colors.neutral150};
  width: 1px;
  height: 2.4rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
`;c(S)`
  // Inherit the not-allowed cursor from ToolbarWrapper when disabled
  &[aria-disabled] {
    cursor: not-allowed;
  }

  &[aria-disabled='false'] {
    cursor: pointer;

    // Only apply hover styles if the button is enabled
    &:hover {
      background: ${({theme:e})=>e.colors.primary100};
    }
  }
`;c(b)`
  // Styling changes to SingleSelect component don't work, so adding wrapper to target SingleSelect
  div[role='combobox'] {
    border: none;
    cursor: pointer;
    min-height: unset;
    padding-top: 6px;
    padding-bottom: 6px;

    &[aria-disabled='false']:hover {
      cursor: pointer;
      background: ${({theme:e})=>e.colors.primary100};
    }

    &[aria-disabled] {
      background: transparent;
      cursor: inherit;

      // Select text and icons should also have disabled color
      span {
        color: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`;c(bt.Item)`
  ${e=>e.isActive&&xe`
      color: ${({theme:t})=>t.colors.primary600};
      font-weight: 600;
    `}

  svg {
    fill: ${({theme:e,isActive:t})=>t?e.colors.primary600:e.colors.neutral500};
  }
`;c(zr)`
  // The outline style is set on the wrapper with :focus-within
  outline: none;
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spaces[3]};
  height: 100%;
  // For fullscreen align input in the center with fixed width
  width: ${e=>e.isExpandedMode?"512px":"100%"};
  margin: auto;

  > *:last-child {
    padding-bottom: ${({theme:e})=>e.spaces[3]};
  }
`;c(b)`
  position: ${({isOverDropTarget:e})=>e&&"relative"};
`;c(b)`
  position: absolute;
  right: 0;

  // Show drop placeholder 8px above or below the drop target
  ${({dragDirection:e,theme:t,placeholderMargin:n})=>xe`
    top: ${e===Ln.UPWARD&&`-${t.spaces[n]}`};
    bottom: ${e===Ln.DOWNWARD&&`-${t.spaces[n]}`};
  `}
`;c(S)`
  // Style each block rendered using renderElement()
  & > [data-slate-node='element'] {
    width: 100%;
    opacity: inherit;
  }

  // Set the visibility of drag button
  [role='button'] {
    visibility: ${e=>e.$dragVisibility};
    opacity: inherit;
  }
  &[aria-disabled='true'] {
    user-drag: none;
  }
`;c(mt)`
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-left: ${({theme:e})=>e.spaces[0]};
  padding-right: ${({theme:e})=>e.spaces[0]};
  padding-top: ${({theme:e})=>e.spaces[1]};
  padding-bottom: ${({theme:e})=>e.spaces[1]};
  visibility: hidden;
  cursor: grab;
  opacity: inherit;
  margin-top: ${e=>e.$dragHandleTopMargin??0};

  &:hover {
    background: ${({theme:e})=>e.colors.neutral100};
  }
  &:active {
    cursor: grabbing;
    background: ${({theme:e})=>e.colors.neutral150};
  }
  &[aria-disabled='true'] {
    visibility: hidden;
  }
  svg {
    min-width: ${({theme:e})=>e.spaces[3]};

    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`;c(S)`
  border: 1px solid
    ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};

  ${({theme:e,$hasError:t=!1})=>xe`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    &:focus-within {
      border: 1px solid ${t?e.colors.danger600:e.colors.primary600};
      box-shadow: ${t?e.colors.danger600:e.colors.primary600} 0px 0px 0px 2px;
    }
  `}

  ${({theme:e,$disabled:t})=>t?xe`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`;const kt=xe`
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`;c(N).attrs({fontWeight:"bold"})`
  ${kt}
`;c(N)`
  font-style: italic;
  ${kt}
`;c(N).attrs({textDecoration:"underline"})`
  ${kt}
`;c(N).attrs({textDecoration:"line-through"})`
  ${kt}
`;c.code`
  background-color: ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  padding: ${({theme:e})=>`0 ${e.spaces[2]}`};
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
    monospace;
  color: inherit;
`;Q("BlocksEditor");c(Br)`
  background: ${({theme:e})=>e.colors.neutral200};
`;Q("ComponentContext",{id:void 0,level:-1,uid:void 0,type:void 0});c(Bn.Root)`
  border: 1px solid
    ${({theme:e,$error:t})=>t?e.colors.danger600:e.colors.neutral200};
`;c(Hn)`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral200};
  padding-inline: ${e=>e.theme.spaces[6]};
  padding-block: ${e=>e.theme.spaces[3]};

  &:not([disabled]) {
    cursor: pointer;

    &:hover {
      background-color: ${e=>e.theme.colors.primary100};
    }
  }

  span {
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2.4rem;
  }

  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 120ms ${e=>e.theme.motion.easings.easeOutQuad};
  }
`;c(b)`
  display: block;
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
`;c(Hr)`
  height: ${({theme:e})=>e.spaces[6]};
  width: ${({theme:e})=>e.spaces[6]};
  transform: ${({$isOpen:e})=>e?"rotate(45deg)":"rotate(0deg)"};

  > circle {
    fill: ${({theme:e,$hasError:t})=>t?e.colors.danger200:e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral500};
  }
`;c(le)`
  padding-left: ${({theme:e})=>e.spaces[3]};
  border-radius: 26px;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  height: 5rem;
`;c(Bn.Content)`
  container-type: inline-size;
`;c(b)`
        display: grid;
        grid-template-columns: repeat(auto-fill, 100%);
        grid-gap: 4px;

        ${({theme:e})=>e.breakpoints.medium} {
          grid-template-columns: repeat(auto-fill, 14rem);
        }
      `;c(S)`
  color: ${({theme:e})=>e.colors.neutral600};
  cursor: pointer;

  @media (prefers-reduced-motion: no-preference) {
    transition: color 120ms ${e=>e.theme.motion.easings.easeOutQuad};
  }

  &:focus,
  &:hover {
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    background: ${({theme:e})=>e.colors.primary100};
    color: ${({theme:e})=>e.colors.primary600};
  }
`;c(b)`
  > div:first-child {
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  }
`;c(b)`
  border-radius: 0 0 ${({theme:e})=>e.spaces[1]} ${({theme:e})=>e.spaces[1]};
`;c(b)`
  width: ${({theme:e})=>e.spaces[2]};
  height: ${({theme:e})=>e.spaces[4]};
`;c.span`
  display: block;
  background-color: ${({theme:e})=>e.colors.primary100};
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:e})=>e.spaces[6]};
`;c(b)`
  list-style: none;
  padding: 0;
  margin: 0;
`;Q("DynamicZone",{isInDynamicZone:!1});const bo=He.injectEndpoints({endpoints:e=>({getRelations:e.query({query:({model:t,id:n,targetField:r,params:s})=>({url:`/content-manager/relations/${t}/${n}/${r}`,method:"GET",config:{params:s}}),serializeQueryArgs:t=>{const{endpointName:n,queryArgs:r}=t;return{endpointName:n,model:r.model,id:r.id,targetField:r.targetField,locale:r.params?.locale,status:r.params?.status}},merge:(t,n)=>{t.pagination&&n.pagination&&(t.pagination.page<n.pagination.page?(t.results=[...It(n.results,t.results),...t.results],t.pagination=n.pagination):n.pagination.page===1&&(t.results=It(n.results),t.pagination=n.pagination))},forceRefetch({currentArg:t,previousArg:n}){return!t?.params&&!n?.params?!1:t?.params?.page!==n?.params?.page||t?.params?.pageSize!==n?.params?.pageSize},transformResponse:t=>"results"in t&&t.results?{...t,results:It(t.results.toReversed())}:t,providesTags:["Relations"]}),searchRelations:e.query({query:({model:t,targetField:n,params:r})=>({url:`/content-manager/relations/${t}/${n}`,method:"GET",config:{params:r}}),serializeQueryArgs:t=>{const{endpointName:n,queryArgs:r}=t;return{endpointName:n,model:r.model,targetField:r.targetField,_q:r.params?._q,idsToOmit:r.params?.idsToOmit,idsToInclude:r.params?.idsToInclude}},merge:(t,n)=>{if(t.pagination&&n.pagination)if(t.pagination.page<n.pagination.page){const r=t.results.map(a=>a.documentId),s=n.results.filter(a=>!r.includes(a.documentId));t.results.push(...s),t.pagination=n.pagination}else n.pagination.page===1&&(t.results=n.results,t.pagination=n.pagination)},forceRefetch({currentArg:t,previousArg:n}){return!t?.params&&!n?.params?!1:t?.params?.page!==n?.params?.page||t?.params?.pageSize!==n?.params?.pageSize},transformResponse:t=>t.results?{...t,results:t.results}:t})})}),It=(e,t=[])=>{const[n]=t.slice(0),r=Zr(null,n?.__temp_key__??null,e.length);return e.map((s,a)=>({...s,__temp_key__:r[a]}))},{useGetRelationsQuery:Sd,useLazySearchRelationsQuery:Ad}=bo;c(S)`
  & > div {
    width: 100%;
  }
`;c(b)`
  position: relative;
  overflow: hidden;
  flex: 1;

  &:before,
  &:after {
    position: absolute;
    width: 100%;
    height: 4px;
    z-index: 1;
  }

  &:before {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    top: 0;
    opacity: ${({$overflowDirection:e})=>e==="top-bottom"||e==="top"?1:0};
    transition: opacity 0.2s ease-in-out;
  }

  &:after {
    /* TODO: as for DS Table component we would need this to be handled by the DS theme */
    content: '';
    background: linear-gradient(0deg, rgba(3, 3, 5, 0.2) 0%, rgba(0, 0, 0, 0) 100%);
    bottom: 0;
    opacity: ${({$overflowDirection:e})=>e==="top-bottom"||e==="bottom"?1:0};
    transition: opacity 0.2s ease-in-out;
  }
`;c(S)`
  width: 100%;
  /* Used to prevent endAction to be pushed out of container */
  min-width: 0;

  & > div[role='button'] {
    cursor: all-scroll;
  }
`;c.button`
  svg path {
    fill: ${({theme:e,disabled:t})=>t?e.colors.neutral600:e.colors.neutral500};
  }

  &:hover svg path,
  &:focus svg path {
    fill: ${({theme:e,disabled:t})=>!t&&e.colors.neutral600};
  }
`;c(Un)`
  display: block;

  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`;const wo=He.injectEndpoints({endpoints:e=>({getDefaultUID:e.query({query:({params:t,...n})=>({url:"/content-manager/uid/generate",method:"POST",data:n,config:{params:t}}),transformResponse:t=>t.data}),generateUID:e.mutation({query:({params:t,...n})=>({url:"/content-manager/uid/generate",method:"POST",data:n,config:{params:t}}),transformResponse:t=>t.data}),getAvailability:e.query({query:({params:t,...n})=>({url:"/content-manager/uid/check-availability",method:"POST",data:n,config:{params:t}}),providesTags:(t,n,r)=>[{type:"UidAvailability",id:r.contentTypeUID}]})})}),{useGenerateUIDMutation:Ed,useGetDefaultUIDQuery:Rd,useGetAvailabilityQuery:Id}=wo;c(zt.Action)`
  width: 1.6rem;

  svg {
    height: 1.6rem;
    width: 1.6rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral400};
    }
  }

  svg:hover {
    path {
      fill: ${({theme:e})=>e.colors.primary600};
    }
  }
`;c(S)`
  svg {
    height: 1.2rem;
    width: 1.2rem;

    path {
      fill: ${({theme:e,$available:t})=>t?e.colors.success600:e.colors.danger600};
    }
  }
`;const _o=zn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;c(S)`
  animation: ${_o} 2s infinite linear;
`;const Ke=new Wr({html:!0,xhtmlOut:!1,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight(e,t){if(t&&t!=="auto"&&$t.getLanguage(t))return'<pre class="hljs language-'+Ke.utils.escapeHtml(t.toLowerCase())+'"><code>'+$t.highlight(t,e,!0).value+"</code></pre>";if(t==="auto"){const n=$t.highlightAuto(e);return'<pre class="hljs language-'+Ke.utils.escapeHtml(n.language)+'"><code>'+n.value+"</code></pre>"}return'<pre class="hljs"><code>'+Ke.utils.escapeHtml(e)+"</code></pre>"}}).use(Vr).use(tn,"warning").use(tn,"tip").use(Qr).use(Kr).use(Yr).use(Jr).use(Xr).use(es).use(ts);Ke.renderer.rules.footnote_ref=(e,t,n,r,s)=>'<sup class="footnote-ref"><span>'+s.rules.footnote_caption?.(e,t,n,r,s)+"</span></sup>";Ke.renderer.rules.footnote_anchor=()=>' <span class="footnote-backref">↩︎</span>';c.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
  font-size: 1.4rem;
  background-color: ${({theme:e})=>e.colors.neutral0};
  color: ${({theme:e})=>e.colors.neutral800};
  line-height: ${({theme:e})=>e.lineHeights[6]};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: ${({theme:e})=>e.spaces[2]};
    margin-block-end: ${({theme:e})=>e.spaces[2]};
  }

  p {
    margin-bottom: ${({theme:e})=>e.spaces[2]};
  }

  h1 {
    font-size: 3.6rem;
    font-weight: 600;
  }

  h2 {
    font-size: 3rem;
    font-weight: 500;
  }

  h3 {
    font-size: 2.4rem;
    font-weight: 500;
  }

  h4 {
    font-size: 2rem;
    font-weight: 500;
  }

  strong {
    font-weight: 800;
  }

  em {
    font-style: italic;
  }

  blockquote {
    margin-top: ${({theme:e})=>e.spaces[8]};
    margin-bottom: ${({theme:e})=>e.spaces[7]};
    font-size: 1.4rem;
    font-weight: 400;
    border-left: 4px solid ${({theme:e})=>e.colors.neutral150};
    font-style: italic;
    padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[5]};
  }

  img {
    max-width: 100%;
  }

  table {
    thead {
      background: ${({theme:e})=>e.colors.neutral150};

      th {
        padding: ${({theme:e})=>e.spaces[4]};
      }
    }
    tr {
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
    }
    th,
    td {
      padding: ${({theme:e})=>e.spaces[4]};
      border: 1px solid ${({theme:e})=>e.colors.neutral200};
      border-bottom: 0;
      border-top: 0;
    }
  }

  pre,
  code {
    font-size: 1.4rem;
    border-radius: 4px;
    /* 
      Hard coded since the color is the same between themes,
      theme.colors.neutral800 changes between themes.

      Matches the color of the JSON Input component.
    */
    background-color: #32324d;
    max-width: 100%;
    overflow: auto;
    padding: ${({theme:e})=>e.spaces[2]};
  }

  /* Inline code */
  p,
  pre,
  td {
    > code {
      color: #839496;
    }
  }

  ol {
    list-style-type: decimal;
    margin-block-start: ${({theme:e})=>e.spaces[4]};
    margin-block-end: ${({theme:e})=>e.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:e})=>e.spaces[4]};

    ol,
    ul {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }

  ul {
    list-style-type: disc;
    margin-block-start: ${({theme:e})=>e.spaces[4]};
    margin-block-end: ${({theme:e})=>e.spaces[4]};
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: ${({theme:e})=>e.spaces[4]};

    ul,
    ol {
      margin-block-start: 0px;
      margin-block-end: 0px;
    }
  }
`;c.div`
  position: relative;
  height: calc(100% - 48px);
`;c.div`
  cursor: ${({$disabled:e})=>e?"not-allowed !important":"auto"};
  height: 100%;
  /* BASICS */
  .CodeMirror-placeholder {
    color: ${({theme:e})=>e.colors.neutral600} !important;
  }

  .CodeMirror {
    /* Set height, width, borders, and global font properties here */
    font-size: 1.4rem;
    height: ${({$isExpandMode:e})=>e?"100%":"410px"}; //  512px(total height) - 48px (header) - 52px(footer) - 2px border
    color: ${({theme:e})=>e.colors.neutral800};
    direction: ltr;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* PADDING */

  .CodeMirror-lines {
    padding: ${({theme:e})=>`${e.spaces[3]} ${e.spaces[4]}`};
    /* Vertical padding around content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    /* The little square between H and V scrollbars */
    background-color: ${({theme:e})=>`${e.colors.neutral0}`};
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    /* z-index: 1; */
  }

  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: 0;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
    the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: ${({theme:e})=>`${e.colors.neutral0}`};
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 50px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -50px;
    margin-right: -50px;
    padding-bottom: 50px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 50px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
    before actual scrolling happens, thus preventing shaking and
    flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 1;
    display: none;
    outline: none;
  }

  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  /* Reset some styles that the rest of the page might have set */
  .CodeMirror pre.CodeMirror-line,
  .CodeMirror pre.CodeMirror-line-like {
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: 1.5;
    color: inherit;
    /* z-index: 2; */
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }

  .CodeMirror pre.CodeMirror-line-like {
    z-index: 2;
  }

  .CodeMirror-wrap pre.CodeMirror-line,
  .CodeMirror-wrap pre.CodeMirror-line-like {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: break-word;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    /* z-index: 2; */
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
    border-color: ${({theme:e})=>`${e.colors.neutral800}`};
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    + div {
      z-index: 0 !important;
    }
  }

  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: ${({theme:e})=>e.colors.neutral200};
    /* z-index: -10; */
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: '';
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  span {
    color: ${({theme:e})=>e.colors.neutral800} !important;
  }
`;c(b)`
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`;c(le)`
  background-color: transparent;
  border: none;
  align-items: center;

  & > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
  }

  svg {
    margin-left: ${({theme:e})=>`${e.spaces[2]}`};

    path {
      fill: ${({theme:e})=>e.colors.neutral700};
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;c(Zn)`
  margin-left: ${({theme:e})=>e.spaces[4]};
`;c(mt)`
  margin: ${({theme:e})=>`0 ${e.spaces[2]}`};
`;c(Zn)`
  margin-right: ${({theme:e})=>`${e.spaces[2]}`};
`;c(le)`
  background-color: transparent;
  border: none;
  align-items: center;

  & > span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
  }

  svg {
    margin-left: ${({theme:e})=>`${e.spaces[2]}`};
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;c(Wn.Root)`
  container-type: inline-size;
`;c(Wn.Item)`
        grid-column: span 12;
        ${({theme:e})=>e.breakpoints.medium} {
          ${({col:e})=>e&&`grid-column: span ${e};`}
        }
      `;c(Zt.Trigger)`
  text-transform: uppercase;
`;c(N)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;c(Zt.Trigger)`
  text-transform: uppercase;
`;c(S)`
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const ko=He.injectEndpoints({endpoints:e=>({getPreviewUrl:e.query({query({query:t,params:n}){return{url:`/content-manager/preview/url/${n.contentType}`,method:"GET",config:{params:t}}}})})}),{useGetPreviewUrlQuery:Md}=ko;Q("PreviewPage");c(ns)`
  will-change: transform;
  rotate: ${e=>e.$isSideEditorOpen?"0deg":"180deg"};
  transition: rotate 0.2s ease-in-out;
`;c(rs.Content)`
  width: 90%;
  max-width: 100%;
  height: 90%;
  max-height: 100%;
`;Q("RelationModal");c(Hn)`
  max-width: 100%;
  & > span {
    font-size: ${({theme:e})=>e.fontSizes[2]};
    width: inherit;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;c(N)`
  max-width: 300px;
`;c(ss)`
  width: 100%;
  table-layout: fixed;
  td:first-child {
    border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
  td:first-of-type {
    padding: ${({theme:e})=>e.spaces[4]};
  }
`;c(Vn)`
  path {
    fill: currentColor;
  }
`;c(as)`
  path {
    fill: currentColor;
  }
`;const Co={collectionTypeLinks:[],components:[],fieldSizes:{},models:[],singleTypeLinks:[],isLoading:!0},$o=xt({name:"app",initialState:Co,reducers:{setInitialData(e,t){const{authorizedCollectionTypeLinks:n,authorizedSingleTypeLinks:r,components:s,contentTypeSchemas:a,fieldSizes:o}=t.payload;e.collectionTypeLinks=n.filter(({isDisplayed:i})=>i),e.singleTypeLinks=r.filter(({isDisplayed:i})=>i),e.components=s,e.models=a,e.fieldSizes=o,e.isLoading=!1}}}),{actions:So,reducer:Ao}=$o,{setInitialData:Ld}=So;os({app:Ao});var Eo="@strapi/upload",Ro={name:Eo};function Io(e){er(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}ut(ut({},ho),{textComponent:k.Fragment});var Yt=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=k.createContext(null)):k.createContext(null);Yt.Consumer;Yt.Provider;var Mo=Yt;function nt(){var e=k.useContext(Mo);return Io(e),e}var Ut;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Ut||(Ut={}));var Gt;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Gt||(Gt={}));function pr(e){var t=function(n){var r=nt(),s=n.value,a=n.children,o=Oe(n,["value","children"]),i=typeof s=="string"?new Date(s||0):s,l=e==="formatDate"?r.formatDateToParts(i,o):r.formatTimeToParts(i,o);return a(l)};return t.displayName=Gt[e],t}function rt(e){var t=function(n){var r=nt(),s=n.value,a=n.children,o=Oe(n,["value","children"]),i=r[e](s,o);if(typeof a=="function")return a(i);var l=r.textComponent||k.Fragment;return k.createElement(l,null,i)};return t.displayName=Ut[e],t}rt("formatDate");rt("formatTime");rt("formatNumber");rt("formatList");rt("formatDisplayName");pr("formatDate");pr("formatTime");const Lo=Ro.name.replace(/^@strapi\//i,""),ct=e=>`${Lo}.${e}`;ce().shape({urls:z().test({name:"isUrlValid",message:"${path}",test(e=""){const t=e.split(/\r?\n/);if(t.length===0)return this.createError({path:this.path,message:H.min.id});if(t.length>20)return this.createError({path:this.path,message:H.max.id});const n=t.filter(a=>{try{return new URL(a),!1}catch{return!0}}),r=n.length;if(r===0)return!0;const s=r>1?"form.upload-url.error.url.invalids":"form.upload-url.error.url.invalid";return this.createError({path:this.path,message:ct(s),params:{number:n.length}})}})});var Te;(function(e){e.Video="video",e.Image="image",e.Document="doc",e.Audio="audio"})(Te||(Te={}));var jn;(function(e){e.Url="url",e.Computer="computer"})(jn||(jn={}));const jo=e=>e&&e[0]==="."?e.substring(1):e;c(S)`
  align-self: flex-end;
  height: 2.2rem;
  width: 2.8rem;

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.primary200};
  }
`;const Do=c(b)`
  background: transparent;
  border: none;
  position: relative;
  z-index: 1;

  svg {
    height: 1.1rem;
    width: 1.1rem;
  }

  svg path {
    fill: ${({theme:e})=>e.colors.neutral600};
  }
`;c(Do)`
  display: flex;
  background: none;
  border: none;

  svg {
    width: 0.9rem;
  }
`;const mr=e=>e&&e.startsWith("/")?`${window.strapi.backendURL}${e}`:e,Po=(e,t=!0)=>{if(e.isLocal)return e.url;const n=t&&e?.formats?.thumbnail?.url||e.url;return mr(n)};c(S)`
  border-radius: ${({theme:e})=>`${e.borderRadius} ${e.borderRadius} 0 0`};
  width: 100%;
  height: 100%;

  svg {
    path {
      fill: ${({theme:e,error:t})=>t?e.colors.danger600:void 0};
    }
  }
`;c.button`
  border: none;
  background: none;
  width: min-content;
  color: ${({theme:e})=>e.colors.neutral600};

  &:hover,
  &:focus {
    color: ${({theme:e})=>e.colors.neutral700};
  }

  svg {
    height: 10px;
    width: 10px;

    path {
      fill: currentColor;
    }
  }
`;const Dn=c(S)`
  min-height: 26.4rem;
  border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>e.colors.neutral0} 0%,
    ${({theme:e})=>e.colors.neutral100} 121.48%
  );
`,Oo=k.forwardRef(({mime:e,url:t,name:n,...r},s)=>{const a=is(),{formatMessage:o}=nt();return e.includes(Te.Image)?d.jsx("img",{ref:s,src:t,alt:n,...r}):e.includes(Te.Video)?d.jsx(ds,{src:t,accentColor:a.colors.primary500}):e.includes(Te.Audio)?d.jsx(b,{margin:"5",children:d.jsx("audio",{controls:!0,src:t,ref:s,...r,children:n})}):e.includes("pdf")?d.jsx(Dn,{width:"100%",justifyContent:"center",...r,children:d.jsxs(S,{gap:2,direction:"column",alignItems:"center",children:[d.jsx(Qn,{"aria-label":n,fill:"neutral500",width:24,height:24}),d.jsx(N,{textColor:"neutral500",variant:"pi",children:o({id:"noPreview",defaultMessage:"No preview available"})})]})}):d.jsx(Dn,{width:"100%",justifyContent:"center",...r,children:d.jsxs(S,{gap:2,direction:"column",alignItems:"center",children:[d.jsx(Kn,{"aria-label":n,fill:"neutral500",width:24,height:24}),d.jsx(N,{textColor:"neutral500",variant:"pi",children:o({id:"noPreview",defaultMessage:"No preview available"})})]})})});Oo.displayName="AssetPreview";c(b)`
  position: relative;
`;c.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: repeating-conic-gradient(
      ${({theme:e})=>e.colors.neutral100} 0% 25%,
      transparent 0% 50%
    )
    50% / 20px 20px;

  svg {
    height: 26px;
  }

  img,
  mux-player {
    margin: 0;
    padding: 0;
    max-height: 26.4rem;
    max-width: 100%;
  }

  mux-player {
    --play-button: inline-flex;
    --mute-button: inline-flex;
    --pip-button: inline-flex;
    --fullscreen-button: inline-flex;
    --playback-rate-button: inline-flex;
    --volume-range: inline-flex;
    --time-range: inline-flex;
    --time-display: inline-flex;
    --duration-display: inline-flex;
  }
`;c(S)`
  height: 5.2rem;
  background-color: ${({$blurry:e})=>e?"rgba(33, 33, 52, 0.4)":void 0};
`;c(S)`
  z-index: 1;
  height: 5.2rem;
  position: absolute;
  background-color: rgba(33, 33, 52, 0.4);
  width: 100%;
`;c(Ht)`
  span {
    color: inherit;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
  }
`;c.div`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
`;c(bt.Trigger)`
  svg {
    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }

  &:hover {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }

  &:active {
    svg {
      > g,
      path {
        fill: ${({theme:e})=>e.colors.neutral400};
      }
    }
  }
`;c(S)`
  /* 80px are coming from the Tabs component that is not included in the ModalBody */
  min-height: ${()=>"calc(60dvh + 8rem)"};
`;ce({name:z().required(),alternativeText:z(),caption:z(),folder:Yn()});ce({name:z().required(),parent:ce({label:z(),value:Yn().nullable(!0)}).nullable(!0)});const No=c.span`
  text-transform: uppercase;
`,fr=c(ls)`
  opacity: 0;
  z-index: 1;

  &:focus-within {
    opacity: 1;
  }
`,qo=c.div`
  z-index: 1;
`,Fo=c(cs)`
  cursor: pointer;

  &:hover {
    ${fr} {
      opacity: 1;
    }
  }
`,Ct=({children:e,extension:t,isSelectable:n=!1,name:r,onSelect:s,onRemove:a,onEdit:o,selected:i=!1,subtitle:l="",variant:u="Image",className:p})=>{const{formatMessage:T}=nt(),m=w=>{o&&o(w)},g=w=>{w.stopPropagation()};return d.jsxs(Fo,{className:p,role:"button",height:"100%",tabIndex:-1,onClick:m,children:[d.jsxs(us,{children:[n&&d.jsx(qo,{onClick:g,children:d.jsx(ps,{checked:i,onCheckedChange:s})}),(a||o)&&d.jsxs(fr,{onClick:g,position:"end",children:[a&&d.jsx(mt,{label:T({id:ct("control-card.remove-selection"),defaultMessage:"Remove from selection"}),onClick:a,children:d.jsx(Jn,{})}),o&&d.jsx(mt,{label:T({id:ct("control-card.edit"),defaultMessage:"Edit"}),onClick:o,children:d.jsx(Vn,{})})]}),e]}),d.jsxs(ms,{children:[d.jsxs(fs,{children:[d.jsx(b,{paddingTop:1,children:d.jsx(N,{tag:"h2",children:d.jsx(hs,{tag:"span",children:r})})}),d.jsxs(gs,{children:[d.jsx(No,{children:t}),l]})]}),d.jsx(S,{paddingTop:1,grow:1,children:d.jsx(ys,{children:T({id:ct(`settings.section.${u.toLowerCase()}.label`),defaultMessage:u})})})]})]})},Uo=({url:e,alt:t})=>d.jsx(b,{children:d.jsx("audio",{controls:!0,src:e,children:t})}),Go=c(b)`
  canvas,
  audio {
    display: block;
    max-width: 100%;
    max-height: ${({size:e})=>e==="M"?16.4:8.8}rem;
  }
`,zo=({name:e,url:t,size:n="M",selected:r=!1,...s})=>d.jsx(Ct,{name:e,selected:r,...s,variant:"Audio",children:d.jsx(Wt,{size:n,children:d.jsx(S,{alignItems:"center",children:d.jsx(Go,{size:n,children:d.jsx(Uo,{url:t,alt:e})})})})}),Bo=c(S)`
  border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>e.colors.neutral0} 0%,
    ${({theme:e})=>e.colors.neutral100} 121.48%
  );
`,Ho=({name:e,extension:t,size:n="M",selected:r=!1,...s})=>{const{formatMessage:a}=nt();return d.jsx(Ct,{name:e,extension:t,selected:r,...s,variant:"Doc",children:d.jsx(Bo,{width:"100%",height:n==="S"?"8.8rem":"16.4rem",justifyContent:"center",children:d.jsxs(S,{gap:2,direction:"column",alignItems:"center",children:[t==="pdf"?d.jsx(Qn,{"aria-label":e,fill:"neutral500",width:24,height:24}):d.jsx(Kn,{"aria-label":e,fill:"neutral500",width:24,height:24}),d.jsx(N,{textColor:"neutral500",variant:"pi",children:a({id:"noPreview",defaultMessage:"No preview available"})})]})})})},Zo=({url:e,params:t})=>{if(e===void 0||typeof t!="object")return e;const n=new URL(e,window.strapi.backendURL);return Object.entries(t).forEach(([r,s])=>{s!=null&&n.searchParams.append(r,s)}),n.toString()},Wo=({height:e,width:t,thumbnail:n,size:r="M",alt:s,isUrlSigned:a,selected:o=!1,...i})=>{const l=a?n:Zo({url:n,params:{updatedAt:i.updatedAt}}),u=e&&t?` - ${t}✕${e}`:void 0;return d.jsx(Ct,{...i,selected:o,subtitle:u,variant:"Image",children:d.jsx(Wt,{src:l,size:r,alt:s})})},Mt=e=>String(e).padStart(2,"0"),Vo=e=>{const t=vs({start:0,end:e*1e3});return`${Mt(t.hours)}:${Mt(t.minutes)}:${Mt(t.seconds)}`},Qo=3,Ko=({url:e,mime:t,onLoadDuration:n=()=>{},alt:r,...s})=>{const a=i=>{if(i.currentTarget.currentTime>0){const l=i.currentTarget,u=document.createElement("canvas");u.height=l.videoHeight,u.width=l.videoWidth,u.getContext("2d")?.drawImage(l,0,0,l.videoWidth,l.videoHeight),l.replaceWith(u),n&&n(l.duration)}},o=i=>{const l=i.currentTarget;l.readyState<Qo||l.play()};return d.jsxs(b,{tag:"figure",...s,children:[d.jsx("video",{muted:!0,onLoadedData:o,src:e,crossOrigin:"anonymous",onTimeUpdate:a,children:d.jsx("source",{type:t})}),d.jsx(Ts,{tag:"figcaption",children:r})]},e)},Yo=c(b)`
  canvas,
  video {
    display: block;
    pointer-events: none;
    max-width: 100%;
    max-height: ${({size:e})=>e==="M"?16.4:8.8}rem;
  }
`,Jo=({name:e,url:t,mime:n,size:r="M",selected:s=!1,...a})=>{const[o,i]=k.useState(),l=o&&Vo(o);return d.jsxs(Ct,{selected:s,name:e,...a,variant:"Video",children:[d.jsx(Wt,{size:r,children:d.jsx(Yo,{size:r,children:d.jsx(Ko,{url:t,mime:n,onLoadDuration:i,alt:e})})}),d.jsx(xs,{children:l||"..."})]})},Xo=({asset:e,isSelected:t=!1,onSelect:n,onEdit:r,onRemove:s,size:a="M",local:o=!1,className:i})=>{const l=n?()=>n(e):void 0,u={id:e.id,isSelectable:e.isSelectable,extension:jo(e.ext),name:e.name,url:o?e.url:Po(e,!0),mime:e.mime,onEdit:r?()=>r(e):void 0,onSelect:l,onRemove:s?()=>s(e):void 0,selected:t,size:a,className:i};return e.mime?.includes(Te.Video)?d.jsx(Jo,{...u}):e.mime?.includes(Te.Image)?d.jsx(Wo,{alt:e.alternativeText||e.name,height:e.height,thumbnail:mr(e?.formats?.thumbnail?.url||e.url),width:e.width,updatedAt:e.updatedAt,isUrlSigned:e?.isUrlSigned||!1,...u}):e.mime?.includes(Te.Audio)?d.jsx(zo,{...u}):d.jsx(Ho,{...u})};c(Xo)`
  && {
    cursor: inherit;
  }
`;c(b)`
  background: linear-gradient(
    180deg,
    rgba(234, 234, 239, 0) 0%,
    ${({theme:e})=>e.colors.neutral200} 100%
  );
  opacity: 0.33;
`;c.button`
  height: 100%;
  left: 0;
  position: absolute;
  opacity: 0;
  top: 0;
  width: 100%;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;c(bs)`
  path {
    fill: currentColor;
  }
`;const ei=c(b)`
  display: none;
`;c(b)`
  &:hover,
  &:focus-within {
    ${ei} {
      display: ${({$isCardActions:e})=>e?"block":""};
    }
  }
`;c(S)`
  user-select: none;
`;const ti=c(b)`
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`;c(ti)`
  text-decoration: none;
`;c(b)`
  figure {
    width: ${({theme:e})=>e.spaces[7]};
    height: ${({theme:e})=>e.spaces[7]};
  }

  canvas,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;c(N)`
  line-height: revert;
`;const hr=xe`
  padding: ${({theme:e})=>e.spaces[3]};
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({$active:e,theme:t})=>e?t.shadows.filterShadow:void 0};
  text-decoration: none;
  display: flex;
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
`,Jt=c.button`
  ${hr}
`,ni=c.div`
  ${hr}
`;Jt.defaultProps={type:"button"};c(Jt)`
  color: ${({theme:e,$active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`;c(Jt)`
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
`;c(ni)`
  color: ${({theme:e})=>e.colors.neutral800};
`;c(N)`
  max-width: 100%;
`;c(b)`
  svg {
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`;c(S)`
  /* 80px are coming from the Tabs component that is not included in the ModalBody */
  min-height: ${()=>"calc(60dvh + 8rem)"};
`;c(Zt.Root)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;c(S)`
  flex-direction: column;
`;c.div`
  font-size: 6rem;

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`;c(b)`
  border-style: dashed;
`;c(b)`
  opacity: 0;
  cursor: pointer;
`;c.div`
  height: 8.8rem;
  width: 100%;
`;c.span`
  text-transform: uppercase;
`;c(S)`
  background: linear-gradient(180deg, #ffffff 0%, #f6f6f9 121.48%);
`;c(b)`
  canvas,
  video {
    max-width: 100%;
    height: 124px;
  }
`;c(b)`
  canvas,
  audio {
    max-width: 100%;
  }
`;c(N)`
  align-items: center;
`;c(N)`
  text-align: center;
`;const gr=re.enhanceEndpoints({addTagTypes:["Locale","KeyStatistics"]}),ri=gr.injectEndpoints({endpoints:e=>({createLocale:e.mutation({query:t=>({url:"/i18n/locales",method:"POST",data:t}),invalidatesTags:[{type:"Locale",id:"LIST"},"HomepageKeyStatistics"]}),deleteLocale:e.mutation({query:t=>({url:`/i18n/locales/${t}`,method:"DELETE"}),invalidatesTags:(t,n,r)=>[{type:"Locale",id:r},"HomepageKeyStatistics"]}),getLocales:e.query({query:()=>"/i18n/locales",providesTags:t=>[{type:"Locale",id:"LIST"},...Array.isArray(t)?t.map(n=>({type:"Locale",id:n.id})):[]]}),getDefaultLocales:e.query({query:()=>"/i18n/iso-locales"}),updateLocale:e.mutation({query:({id:t,...n})=>({url:`/i18n/locales/${t}`,method:"PUT",data:n}),invalidatesTags:(t,n,{id:r})=>[{type:"Locale",id:r}]})})}),{useCreateLocaleMutation:jd,useDeleteLocaleMutation:Dd,useGetLocalesQuery:Pd,useGetDefaultLocalesQuery:Od,useUpdateLocaleMutation:Nd}=ri,si=gr.injectEndpoints({overrideExisting:!0,endpoints:e=>({getManyDraftRelationCount:e.query({query:({model:t,...n})=>({url:`/content-manager/collection-types/${t}/actions/countManyEntriesDraftRelations`,method:"GET",config:{params:n}}),transformResponse:t=>t.data})})}),{useGetManyDraftRelationCountQuery:qd}=si;c(Jn)`
  path {
    fill: currentColor;
  }
`;c(S)`
  svg {
    width: 12px;
    height: 12px;

    fill: ${({theme:e})=>e.colors.neutral500};

    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`;const Se=(e,t)=>{if(!e)return;const n=e.invalidatesTags;Object.assign(e,{invalidatesTags:(s,a,o,i)=>[...(typeof n=="function"?n(s,a,o,i):n)??[],...t]})},yr=re.enhanceEndpoints({addTagTypes:["Release","ReleaseAction","EntriesInRelease","ReleaseSettings","Document","UpcomingReleasesList"],endpoints:{updateDocument(e){Se(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},deleteDocument(e){Se(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},deleteManyDocuments(e){Se(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},discardDocument(e){Se(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},createWorkflow(e){Se(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},updateWorkflow(e){Se(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},deleteWorkflow(e){Se(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])}}}).injectEndpoints({endpoints:e=>({getReleasesForEntry:e.query({query(t){return{url:"/content-releases/getByDocumentAttached",method:"GET",config:{params:t}}},providesTags:t=>t?[...t.data.map(({id:n})=>({type:"Release",id:n})),{type:"Release",id:"LIST"}]:[]}),getReleases:e.query({query({page:t,pageSize:n,filters:r}={page:1,pageSize:16,filters:{releasedAt:{$notNull:!1}}}){return{url:"/content-releases",method:"GET",config:{params:{page:t||1,pageSize:n||16,filters:r||{releasedAt:{$notNull:!1}}}}}},transformResponse(t,n,r){const a=r?.filters?.releasedAt?.$notNull==="true";return{...t,meta:{...t.meta,activeTab:a?"done":"pending"}}},providesTags:t=>t?[...t.data.map(({id:n})=>({type:"Release",id:n})),{type:"Release",id:"LIST"}]:[{type:"Release",id:"LIST"}]}),getRelease:e.query({query({id:t}){return{url:`/content-releases/${t}`,method:"GET"}},providesTags:(t,n,r)=>[{type:"Release",id:"LIST"},{type:"Release",id:r.id}]}),getReleaseActions:e.query({query({releaseId:t,...n}){return{url:`/content-releases/${t}/actions`,method:"GET",config:{params:n}}},providesTags:[{type:"ReleaseAction",id:"LIST"}]}),createRelease:e.mutation({query(t){return{url:"/content-releases",method:"POST",data:t}},invalidatesTags:[{type:"Release",id:"LIST"},"UpcomingReleasesList"]}),updateRelease:e.mutation({query({id:t,...n}){return{url:`/content-releases/${t}`,method:"PUT",data:n}},invalidatesTags:(t,n,r)=>[{type:"Release",id:r.id},"UpcomingReleasesList"]}),createReleaseAction:e.mutation({query({body:t,params:n}){return{url:`/content-releases/${n.releaseId}/actions`,method:"POST",data:t}},invalidatesTags:[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"},"UpcomingReleasesList"]}),createManyReleaseActions:e.mutation({query({body:t,params:n}){return{url:`/content-releases/${n.releaseId}/actions/bulk`,method:"POST",data:t}},invalidatesTags:[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"},{type:"EntriesInRelease"},"UpcomingReleasesList"]}),updateReleaseAction:e.mutation({query({body:t,params:n}){return{url:`/content-releases/${n.releaseId}/actions/${n.actionId}`,method:"PUT",data:t}},invalidatesTags:(t,n,r)=>[{type:"ReleaseAction",id:"LIST"},{type:"Release",id:"LIST"},{type:"Release",id:r.params.releaseId},"UpcomingReleasesList"],async onQueryStarted({body:t,params:n,query:r,actionPath:s},{dispatch:a,queryFulfilled:o}){const i={releaseId:n.releaseId,...r},l=a(yr.util.updateQueryData("getReleaseActions",i,u=>{const[p,T]=s,m=u.data[p][T];m&&(m.type=t.type)}));try{await o}catch{l.undo()}}}),deleteReleaseAction:e.mutation({query({params:t}){return{url:`/content-releases/${t.releaseId}/actions/${t.actionId}`,method:"DELETE"}},invalidatesTags:(t,n,r)=>[{type:"Release",id:"LIST"},{type:"Release",id:r.params.releaseId},{type:"ReleaseAction",id:"LIST"},{type:"EntriesInRelease"},"UpcomingReleasesList"]}),publishRelease:e.mutation({query({id:t}){return{url:`/content-releases/${t}/publish`,method:"POST"}},invalidatesTags:(t,n,r)=>[{type:"Release",id:r.id},{type:"Document",id:"ALL_LIST"},"UpcomingReleasesList"]}),deleteRelease:e.mutation({query({id:t}){return{url:`/content-releases/${t}`,method:"DELETE"}},invalidatesTags:()=>[{type:"Release",id:"LIST"},{type:"EntriesInRelease"},"UpcomingReleasesList"]}),getMappedEntriesInReleases:e.query({query(t){return{url:"/content-releases/mapEntriesToReleases",method:"GET",config:{params:t}}},transformResponse(t){return t.data},providesTags:[{type:"EntriesInRelease"}]}),getReleaseSettings:e.query({query:()=>"/content-releases/settings",providesTags:[{type:"ReleaseSettings"}]}),updateReleaseSettings:e.mutation({query(t){return{url:"/content-releases/settings",method:"PUT",data:t}},invalidatesTags:[{type:"ReleaseSettings"},"UpcomingReleasesList"]})})}),{useGetReleasesQuery:Fd,useGetReleasesForEntryQuery:Ud,useGetReleaseQuery:Gd,useGetReleaseActionsQuery:zd,useCreateReleaseMutation:Bd,useCreateReleaseActionMutation:Hd,useCreateManyReleaseActionsMutation:Zd,useUpdateReleaseMutation:Wd,useUpdateReleaseActionMutation:Vd,usePublishReleaseMutation:Qd,useDeleteReleaseActionMutation:Kd,useDeleteReleaseMutation:Yd,useGetMappedEntriesInReleasesQuery:Jd,useGetReleaseSettingsQuery:Xd,useUpdateReleaseSettingsMutation:el}=yr,Pn=e=>e==="publish"?1:0,On=e=>e==="publish"?0:1;c(zt.Root)`
  border-top-left-radius: ${({$actionType:e,theme:t})=>t.spaces[Pn(e)]};
  border-bottom-left-radius: ${({$actionType:e,theme:t})=>t.spaces[Pn(e)]};
  border-top-right-radius: ${({$actionType:e,theme:t})=>t.spaces[On(e)]};
  border-bottom-right-radius: ${({$actionType:e,theme:t})=>t.spaces[On(e)]};

  > label {
    color: inherit;
    padding: ${({theme:e})=>`${e.spaces[2]} ${e.spaces[3]}`};
    text-align: center;
    vertical-align: middle;
    text-transform: capitalize;
  }

  &[data-checked='true'] {
    color: ${({theme:e,$actionType:t})=>t==="publish"?e.colors.primary700:e.colors.danger600};
    background-color: ${({theme:e,$actionType:t})=>t==="publish"?e.colors.primary100:e.colors.danger100};
    border-color: ${({theme:e,$actionType:t})=>t==="publish"?e.colors.primary700:e.colors.danger600};
  }

  &[data-checked='false'] {
    border-left: ${({$actionType:e})=>e==="unpublish"&&"none"};
    border-right: ${({$actionType:e})=>e==="publish"&&"none"};
  }

  &[data-checked='false'][data-disabled='false']:hover {
    color: ${({theme:e})=>e.colors.neutral700};
    background-color: ${({theme:e})=>e.colors.neutral100};
    border-color: ${({theme:e})=>e.colors.neutral200};

    & > label {
      cursor: pointer;
    }
  }

  &[data-disabled='true'] {
    color: ${({theme:e})=>e.colors.neutral600};
    background-color: ${({theme:e})=>e.colors.neutral150};
    border-color: ${({theme:e})=>e.colors.neutral300};
  }
`;ce().shape({type:z().oneOf(["publish","unpublish"]).required(),releaseId:z().required()});c(bt.Item)`
  span,
  &:hover span {
    color: ${({theme:e})=>e.colors.neutral800};
  }

  svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;c(bt.Trigger)`
  & > span {
    display: flex;
  }
`;Xn.colors.primary600;const vr=re.enhanceEndpoints({addTagTypes:["ReviewWorkflow","ReviewWorkflowStages","Document","ContentTypeSettings"]}),Nn="single-types",ai=vr.enhanceEndpoints({addTagTypes:["RecentlyAssignedList","RecentDocumentList"]}).injectEndpoints({endpoints:e=>({getStages:e.query({query:({model:t,slug:n,id:r,params:s})=>({url:`/review-workflows/content-manager/${n}/${t}/${r}/stages`,method:"GET",config:{params:s}}),transformResponse:t=>({meta:t.meta??{workflowCount:0},stages:t.data??[]}),providesTags:["ReviewWorkflowStages"]}),updateStage:e.mutation({query:({model:t,slug:n,id:r,params:s,...a})=>({url:`/review-workflows/content-manager/${n}/${t}/${r}/stage`,method:"PUT",data:a,config:{params:s}}),transformResponse:t=>t.data,invalidatesTags:(t,n,{slug:r,id:s,model:a})=>[{type:"Document",id:r!==Nn?`${a}_${s}`:a},{type:"Document",id:`${a}_LIST`},"ReviewWorkflowStages"]}),updateAssignee:e.mutation({query:({model:t,slug:n,id:r,params:s,...a})=>({url:`/review-workflows/content-manager/${n}/${t}/${r}/assignee`,method:"PUT",data:a,config:{params:s}}),transformResponse:t=>t.data,invalidatesTags:(t,n,{slug:r,id:s,model:a})=>[{type:"Document",id:r!==Nn?`${a}_${s}`:a},{type:"Document",id:`${a}_LIST`},"RecentlyAssignedList"]}),getContentTypes:e.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:t=>t.data.reduce((n,r)=>(r.isDisplayed&&n[r.kind].push(r),n),{collectionType:[],singleType:[]})}),getRecentlyAssignedDocuments:e.query({query:()=>"/review-workflows/homepage/recently-assigned-documents",transformResponse:t=>t.data,providesTags:(t,n)=>["RecentlyAssignedList","RecentDocumentList"]})}),overrideExisting:!0}),{useGetStagesQuery:tl,useUpdateStageMutation:nl,useUpdateAssigneeMutation:rl,useGetContentTypesQuery:sl,useGetRecentlyAssignedDocumentsQuery:al}=ai;c.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:e})=>`-${e.spaces[7]}`};
  margin-top: ${({theme:e})=>`-${e.spaces[7]}`};
  width: 360px;
`;const oi={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"};Object.entries(oi).map(([e,t])=>({hex:Xn.colors[e].toUpperCase(),name:t}));const ii=vr.injectEndpoints({endpoints:e=>({getWorkflows:e.query({query:t=>({url:"/review-workflows/workflows",method:"GET",config:{params:t??{}}}),transformResponse:t=>({workflows:t.data,meta:"meta"in t?t.meta:void 0}),providesTags:t=>[...t?.workflows.map(({id:n})=>({type:"ReviewWorkflow",id:n}))??[],{type:"ReviewWorkflow",id:"LIST"}]}),createWorkflow:e.mutation({query:t=>({url:"/review-workflows/workflows",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags(t){return[{type:"ReviewWorkflow",id:"LIST"},"ReviewWorkflowStages",{type:"Document",id:"ALL_LIST"},{type:"ContentTypeSettings",id:"LIST"},...t?.contentTypes.map(n=>({type:"Document",id:`${n}_ALL_ITEMS`}))??[]]}}),updateWorkflow:e.mutation({query:({id:t,...n})=>({url:`/review-workflows/workflows/${t}`,method:"PUT",data:n}),transformResponse:t=>t.data,invalidatesTags:(t,n,r)=>[{type:"ReviewWorkflow",id:r.id},"ReviewWorkflowStages",{type:"Document",id:"ALL_LIST"},{type:"ContentTypeSettings",id:"LIST"},...t?.contentTypes.map(s=>({type:"Document",id:`${s}_ALL_ITEMS`}))??[]]}),deleteWorkflow:e.mutation({query:({id:t})=>({url:`/review-workflows/workflows/${t}`,method:"DELETE"}),transformResponse:t=>t.data,invalidatesTags:(t,n,r)=>[{type:"ReviewWorkflow",id:r.id},"ReviewWorkflowStages",{type:"Document",id:"ALL_LIST"},{type:"ContentTypeSettings",id:"LIST"}]})}),overrideExisting:!1}),{useGetWorkflowsQuery:ol,useCreateWorkflowMutation:il,useDeleteWorkflowMutation:dl,useUpdateWorkflowMutation:ll}=ii,qn=e=>`${je}.${e}`,di=()=>{const e=ws();return new URLSearchParams(e.search).get("plugins[i18n][locale]")};function cl({name:e,error:t,description:n,onChange:r,value:s,intlLabel:a,attribute:o}){const{get:i,post:l}=Aa(),{formatMessage:u}=_s(),[p,T]=k.useState([]),[m,g]=k.useState(s??null),[w,J]=k.useState([]),[X,ke]=k.useState([]),[Xt,en]=k.useState(""),[x,R]=k.useState(!1),{optionsRestrict:L}=o,G=di();k.useEffect(()=>{m&&m.fields&&R(!0)},[]);const A=_=>{if(!_||_.indexOf("|")===-1)return;const[U,E,M]=_.split("|");g({uid:U,id:E,value:_}),r({target:{name:e,type:"json",value:JSON.stringify({uid:U,id:E,value:_})}}),r({target:{name:e.replace(/teaser(?!.*teaser)/,"title"),type:"string",value:M}})},j=(_,U,E)=>{const M=U.find(ne=>ne.path?ne.path===E:!1),{fields:V}=m,Me={...V,[_]:M};g({...m,fields:Me}),r({target:{name:e,type:"json",value:JSON.stringify({...m,fields:Me})}})},O=()=>{m.fields&&x&&(g({...m,fields:null}),r({target:{name:e,type:"json",value:JSON.stringify({...m,fields:null})}})),R(!x)};k.useEffect(()=>{m&&q()},[m]);const q=k.useCallback(async()=>{if(!m||!m.value)return;const[_,U]=m.value.split("|"),E=(await l("/content-type-teaser/content-type-fields",{uid:_,id:U})).data;ke(E)},[m]),F=k.useCallback(async()=>{const _=(await i("/link/routes",s)).data;if(!_.data.routes)return;let U=_.data.routes[G];L&&L!=="all"&&(U=U.filter(E=>E.uid===L)),T(U)},[T]);return k.useEffect(()=>{F()},[]),p?d.jsxs(b,{spacing:1,children:[d.jsxs(S,{direction:"column",alignItems:"flex-start",children:[d.jsx(N,{fontWeight:"bold",children:u({id:qn("select")})}),d.jsx(N,{variant:"pi",children:u({id:qn("longDescription")})})]}),d.jsxs(b,{paddingTop:4,paddingBottom:4,children:[d.jsx(b,{style:{width:"85%"},children:d.jsx(nn,{value:m?m?.value:"",onChange:_=>A(_),onClear:()=>g(null),children:p.map((_,U)=>d.jsx(St,{value:`${_.uid}|${_.id}|${_.route} - ${_.title}`,textValue:_.title,children:d.jsxs(S,{alignItems:"center",justifyContent:"space-between",children:[_.title,d.jsxs(Ht,{padding:"0",marginRight:"2",children:[G," - ",_.uid]})]})},`${_.uid}-${U}`))})}),m&&d.jsx(b,{paddingTop:4,children:d.jsx(le,{onClick:()=>O(),children:u({id:`${je}.teaser.${x?"default":"custom"}`})})})]}),x&&d.jsxs(b,{spacing:1,paddingTop:4,children:[d.jsxs(S,{direction:"column",alignItems:"flex-start",children:[d.jsx(N,{fontWeight:"bold",children:u({id:`${je}.teaser.title`,defaultMessage:"Fields"})}),d.jsx(N,{variant:"pi",children:u({id:`${je}.teaser.description`,defaultMessage:"Link the teaser fields to the selected content type"})})]}),X&&Object.entries(X).map(([_,U])=>{const E=m?.fields?.hasOwnProperty(_)?m?.fields[_]?.path:null;return d.jsxs(b,{spacing:2,paddingTop:2,children:[d.jsx(N,{fontWeight:"bold",children:u({id:`${je}.teaser.${_}`,defaultMessage:_})}),d.jsx(nn,{value:E,onChange:M=>j(_,U,M),onClear:()=>{},label:u({id:`${je}.teaser.${_}`,defaultMessage:_}),children:_==="image"?U.map((M,V)=>d.jsx(St,{value:M.path,children:d.jsxs(S,{children:[d.jsx("img",{src:M.value.url,width:50,height:50}),d.jsx(N,{paddingLeft:4,children:M.value.name})]})},V)):U.map((M,V)=>d.jsx(St,{value:M.path,children:M.value.value},V))})]},_)})]})]}):d.jsx(d.Fragment,{})}export{cl as default};
