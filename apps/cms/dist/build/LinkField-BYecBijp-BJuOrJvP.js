import{lC as ft,r as R,lE as Fe,sU as Ct,ak as wr,sV as _r,sW as kr,sX as Cr,j as i,sY as $r,sZ as Sr,cG as Ar,J as c,n as $,B as C,a7 as gt,e as N,v as we,L as Rr,N as zn,D as Bn,b_ as Hn,s_ as Er,y as Ir,aE as Mr,K as jr,at as me,aw as Lr,av as G,U as J,aG as Wt,a6 as Dr,a9 as Pr,s$ as Or,sF as yt,aQ as Nr,jC as qr,jD as Fr,qM as Ur,hK as V,ai as ge,qu as Ie,ch as Zn,t0 as Gr,c8 as zr,ca as Br,cL as Ce,sz as Hr,t1 as $t,sA as Zr,jr as vt,sL as Vr,t2 as Vn,t3 as Wn,t4 as Wr,dZ as Qr,t5 as Kr,si as Mt,sj as Yr,sk as nn,sl as Jr,sm as Xr,sn as es,so as ts,sp as ns,sq as rs,sr as ss,sQ as Qn,G as de,T as Qt,t6 as as,M as os,t7 as is,d as Kn,t8 as ds,t9 as ls,mb as cs,ta as us,tb as Yn,sI as Jn,cH as Xn,tc as ps,sO as ms,td as hs,te as fs,sG as er,sP as gs,tf as ys,tg as vs,th as Ts,ti as xs,tj as Kt,cD as bs,aW as ws,tk as _s,tl as ks,tm as tr,tn as nr,to as rn,tp as sn,_ as an,$ as Qe,Z as on}from"./strapi-BFIgV8L0.js";import{u as Cs}from"./index-DUSZU84N.js";function rr(e,t,n){if(n===void 0&&(n=Error),!e)throw new n(t)}var $s=function(e){console.error(e)},Ss=function(e){console.warn(e)},As={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:$s,onWarn:Ss};function Rs(e){rr(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}ft(ft({},As),{textComponent:R.Fragment});function dn(e,t){if(e===t)return!0;if(!e||!t)return!1;var n=Object.keys(e),r=Object.keys(t),s=n.length;if(r.length!==s)return!1;for(var a=0;a<s;a++){var o=n[a];if(e[o]!==t[o]||!Object.prototype.hasOwnProperty.call(t,o))return!1}return!0}var Yt=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=R.createContext(null)):R.createContext(null);Yt.Consumer;Yt.Provider;var Es=Yt;function St(){var e=R.useContext(Es);return Rs(e),e}var Nt;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Nt||(Nt={}));var qt;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(qt||(qt={}));function sr(e){var t=function(n){var r=St(),s=n.value,a=n.children,o=Fe(n,["value","children"]),d=typeof s=="string"?new Date(s||0):s,l=e==="formatDate"?r.formatDateToParts(d,o):r.formatTimeToParts(d,o);return a(l)};return t.displayName=qt[e],t}function st(e){var t=function(n){var r=St(),s=n.value,a=n.children,o=Fe(n,["value","children"]),d=r[e](s,o);if(typeof a=="function")return a(d);var l=r.textComponent||R.Fragment;return R.createElement(l,null,d)};return t.displayName=Nt[e],t}function Is(e,t){var n=e.values,r=Fe(e,["values"]),s=t.values,a=Fe(t,["values"]);return dn(s,n)&&dn(r,a)}function ar(e){var t=St(),n=t.formatMessage,r=t.textComponent,s=r===void 0?R.Fragment:r,a=e.id,o=e.description,d=e.defaultMessage,l=e.values,u=e.children,p=e.tagName,x=p===void 0?s:p,h=e.ignoreTag,g={id:a,description:o,defaultMessage:d},b=n(g,l,{ignoreTag:h});return typeof u=="function"?u(Array.isArray(b)?b:[b]):x?R.createElement(x,null,R.Children.toArray(b)):R.createElement(R.Fragment,null,b)}ar.displayName="FormattedMessage";var xe=R.memo(ar,Is);xe.displayName="MemoizedFormattedMessage";st("formatDate");st("formatTime");st("formatNumber");st("formatList");st("formatDisplayName");sr("formatDate");sr("formatTime");const Tt="5.6rem",Ms=e=>{let t=null;return document.cookie.split(";").forEach(r=>{const[s,a]=r.split("=").map(o=>o.trim());s===e&&(t=decodeURIComponent(a))}),t},js=(e,t,n)=>{let r="";document.cookie=`${e}=${encodeURIComponent(t)}; Path=/${r}`},Ls=e=>{document.cookie=`${e}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`},Oe={TOKEN:"jwtToken",STATUS:"isLoggedIn"},ln="STRAPI_THEME",Ds="strapi-admin-language",Ps=Ct({name:"admin",initialState:()=>({language:{locale:"en",localeNames:{en:"English"}},permissions:{},theme:{availableThemes:[],currentTheme:localStorage.getItem(ln)||"system"},token:null}),reducers:{setAppTheme(e,t){e.theme.currentTheme=t.payload,window.localStorage.setItem(ln,t.payload)},setAvailableThemes(e,t){e.theme.availableThemes=t.payload},setLocale(e,t){e.language.locale=t.payload,window.localStorage.setItem(Ds,t.payload),document.documentElement.setAttribute("lang",t.payload)},setToken(e,t){e.token=t.payload},login(e,t){const{token:n,persist:r}=t.payload;r?window.localStorage.setItem(Oe.TOKEN,JSON.stringify(n)):js(Oe.TOKEN,n),window.localStorage.setItem(Oe.STATUS,"true"),e.token=n},logout(e){e.token=null,Ls(Oe.TOKEN),window.localStorage.removeItem(Oe.TOKEN),window.localStorage.removeItem(Oe.STATUS)}}}),{setAppTheme:hi,setAvailableThemes:fi,setLocale:gi,setToken:yi,logout:Os,login:Ns}=Ps.actions,cn={TOKEN:"jwtToken"};class tt extends Error{constructor(t,n){super(t),this.name="FetchError",this.message=t,this.response=n,this.code=n?.data?.error?.status,this.status=n?.data?.error?.status,Error.captureStackTrace&&Error.captureStackTrace(this,tt)}}const qs=e=>e instanceof tt,Fs=()=>{const e=localStorage.getItem(cn.TOKEN);return e?JSON.parse(e):Ms(cn.TOKEN)??null},pt=(e={})=>{const t=window.strapi.backendURL,n={Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${Fs()}`},r=h=>h instanceof FormData,s=h=>h.charAt(0)!=="/"?`/${h}`:h,a=h=>new RegExp("^(?:[a-z+]+:)?//","i").test(h),o=h=>a(h)?h:s(h),d=async(h,g)=>{try{const b=await h.json();if(!h.ok&&b.error&&!g?.(h.status))throw new tt(b.error.message,{data:b});if(!h.ok&&!g?.(h.status))throw new tt("Unknown Server Error");return{data:b}}catch(b){if(b instanceof SyntaxError&&h.ok)return{data:[],status:h.status};throw b}},l=h=>g=>{if(h){if(typeof h=="string")return`${g}?${h}`;const b=_r.stringify(h,{encode:!1});return`${g}?${b}`}return g},u=h=>`${t}${h}`,p=h=>wr(o,u,l(h?.params));return{get:async(h,g)=>{const b=new Headers({...n,...g?.headers}),W=p(g),Q=await fetch(W(h),{signal:g?.signal??e.signal,method:"GET",headers:b});return d(Q,g?.validateStatus)},post:async(h,g,b)=>{const W=new Headers({...n,...b?.headers}),Q=p(b);r(g)&&W.delete("Content-Type");const Re=await fetch(Q(h),{signal:b?.signal??e.signal,method:"POST",headers:W,body:r(g)?g:JSON.stringify(g)});return d(Re,b?.validateStatus)},put:async(h,g,b)=>{const W=new Headers({...n,...b?.headers}),Q=p(b);r(g)&&W.delete("Content-Type");const Re=await fetch(Q(h),{signal:b?.signal??e.signal,method:"PUT",headers:W,body:r(g)?g:JSON.stringify(g)});return d(Re,b?.validateStatus)},del:async(h,g)=>{const b=new Headers({...n,...g?.headers}),W=p(g),Q=await fetch(W(h),{signal:g?.signal??e.signal,method:"DELETE",headers:b});return d(Q,g?.validateStatus)}}};let lt=null;const Us=e=>/^\/admin\/(login|logout|access-token)\b/.test(e),Gs=async(e,t)=>{const{signal:n,dispatch:r}=t,s=async a=>{const{get:o,post:d,del:l,put:u}=pt();if(typeof a=="string")return await o(a,{signal:n});const{url:p,method:x="GET",data:h,config:g}=a;return x==="POST"?d(p,h,{...g,signal:n}):x==="DELETE"?l(p,{...g,signal:n}):x==="PUT"?u(p,h,{...g,signal:n}):o(p,{...g,signal:n})};try{return{data:(await s(e)).data}}catch(a){if(qs(a)){if(a.status===401){const d=typeof e=="string"?e:e.url;if(!Us(d)){if(!lt){async function l(){const{post:u}=pt(),x=(await u("/admin/access-token"))?.data?.data?.token;if(!x)throw new Error("access_token_exchange_failed");const h=!!localStorage.getItem("jwtToken");return r(Ns({token:x,persist:h})),x}lt=l().finally(()=>{lt=null})}try{return await lt,{data:(await s(e)).data}}catch{try{const{post:u}=pt();await u("/admin/logout")}catch{}r(Os())}}}return typeof a.response?.data=="object"&&a.response?.data!==null&&"error"in a.response?.data?{data:void 0,error:a.response?.data.error}:{data:void 0,error:{name:"UnknownError",message:a.message,details:a.response,status:a.status}}}const o=a;return{data:void 0,error:{name:o.name,message:o.message,stack:o.stack}}}},zs=()=>Gs,oe=kr({reducerPath:"adminApi",baseQuery:zs(),tagTypes:["GuidedTourMeta","HomepageKeyStatistics","AIUsage"],endpoints:()=>({})}),Bs=oe.injectEndpoints({endpoints:e=>({getAIUsage:e.query({query:()=>({method:"GET",url:"/admin/ai-usage"}),providesTags:["AIUsage"]}),getAiToken:e.query({query:()=>({method:"GET",url:"/admin/ai-token"}),transformResponse(t){return t.data}})}),overrideExisting:!0}),{useGetAIUsageQuery:vi,useGetAiTokenQuery:Ti,useLazyGetAiTokenQuery:xi}=Bs;function Y(e,t){const n=Cr(t),r=a=>{const{children:o,...d}=a,l=R.useMemo(()=>d,Object.values(d));return i.jsx(n.Provider,{value:l,children:o})};function s(a,o,d){return $r(n,l=>{if(l)return o(l);if(d)throw new Error(`\`${a}\` must be used within \`${e}\``)})}return r.displayName=e+"Provider",[r,s]}Y("StrapiApp");const Hs=oe.enhanceEndpoints({addTagTypes:["User","Me","ProvidersOptions"]}).injectEndpoints({endpoints:e=>({getMe:e.query({query:()=>({method:"GET",url:"/admin/users/me"}),transformResponse(t){return t.data},providesTags:t=>t?["Me",{type:"User",id:t.id}]:["Me"]}),getMyPermissions:e.query({query:()=>({method:"GET",url:"/admin/users/me/permissions"}),transformResponse(t){return t.data}}),updateMe:e.mutation({query:t=>({method:"PUT",url:"/admin/users/me",data:t}),transformResponse(t){return t.data},invalidatesTags:["Me"]}),getAiToken:e.query({query:()=>({method:"GET",url:"/admin/users/me/ai-token"}),transformResponse(t){return t.data}}),checkPermissions:e.query({query:t=>({method:"POST",url:"/admin/permissions/check",data:t})}),login:e.mutation({query:t=>({method:"POST",url:"/admin/login",data:t}),transformResponse(t){return t.data},invalidatesTags:["Me"]}),logout:e.mutation({query:t=>({method:"POST",url:"/admin/logout",data:t})}),resetPassword:e.mutation({query:t=>({method:"POST",url:"/admin/reset-password",data:t}),transformResponse(t){return t.data}}),accessTokenExchange:e.mutation({query:t=>({method:"POST",url:"/admin/access-token",data:t}),transformResponse(t){return t.data}}),getRegistrationInfo:e.query({query:t=>({url:"/admin/registration-info",method:"GET",config:{params:{registrationToken:t}}}),transformResponse(t){return t.data}}),registerAdmin:e.mutation({query:t=>({method:"POST",url:"/admin/register-admin",data:t}),transformResponse(t){return t.data}}),registerUser:e.mutation({query:t=>({method:"POST",url:"/admin/register",data:t}),transformResponse(t){return t.data}}),forgotPassword:e.mutation({query:t=>({url:"/admin/forgot-password",method:"POST",data:t})}),isSSOLocked:e.query({query:()=>({url:"/admin/providers/isSSOLocked",method:"GET"}),transformResponse(t){return t.data}}),getProviders:e.query({query:()=>({url:"/admin/providers",method:"GET"})}),getProviderOptions:e.query({query:()=>({url:"/admin/providers/options",method:"GET"}),transformResponse(t){return t.data},providesTags:["ProvidersOptions"]}),updateProviderOptions:e.mutation({query:t=>({url:"/admin/providers/options",method:"PUT",data:t}),transformResponse(t){return t.data},invalidatesTags:["ProvidersOptions"]})}),overrideExisting:!0}),{useCheckPermissionsQuery:bi,useLazyCheckPermissionsQuery:wi,useGetMeQuery:_i,useLoginMutation:ki,useAccessTokenExchangeMutation:Ci,useLogoutMutation:$i,useUpdateMeMutation:Si,useResetPasswordMutation:Ai,useRegisterAdminMutation:Ri,useRegisterUserMutation:Ei,useGetRegistrationInfoQuery:Ii,useForgotPasswordMutation:Mi,useGetMyPermissionsQuery:ji,useGetAiTokenQuery:Li,useLazyGetAiTokenQuery:Di,useIsSSOLockedQuery:Pi,useGetProvidersQuery:Oi,useGetProviderOptionsQuery:Ni,useUpdateProviderOptionsMutation:qi}=Hs;Y("Auth");Y("History",{history:[],currentLocationIndex:0,currentLocation:"",canGoBack:!1,pushState:()=>{throw new Error("You must use the `HistoryProvider` to access the `pushState` function.")},goBack:()=>{throw new Error("You must use the `HistoryProvider` to access the `goBack` function.")}});function or(e){return new TextEncoder().encode(e).length}const un=e=>e&&e.startsWith("/")?`${window.strapi.backendURL}${e}`:e,Zs=oe.enhanceEndpoints({addTagTypes:["ProjectSettings","LicenseLimits","LicenseTrialTimeLeft"]}).injectEndpoints({endpoints:e=>({init:e.query({query:()=>({url:"/admin/init",method:"GET"}),transformResponse(t){return t.data},providesTags:["ProjectSettings"]}),information:e.query({query:()=>({url:"/admin/information",method:"GET"}),transformResponse(t){return t.data}}),telemetryProperties:e.query({query:()=>({url:"/admin/telemetry-properties",method:"GET",config:{validateStatus:t=>t<500}}),transformResponse(t){return t.data}}),projectSettings:e.query({query:()=>({url:"/admin/project-settings",method:"GET"}),providesTags:["ProjectSettings"],transformResponse(t){return{authLogo:t.authLogo?{name:t.authLogo.name,url:un(t.authLogo.url)}:void 0,menuLogo:t.menuLogo?{name:t.menuLogo.name,url:un(t.menuLogo.url)}:void 0}}}),updateProjectSettings:e.mutation({query:t=>({url:"/admin/project-settings",method:"POST",data:t,config:{headers:{"Content-Type":"multipart/form-data"}}}),invalidatesTags:["ProjectSettings"]}),getPlugins:e.query({query:()=>({url:"/admin/plugins",method:"GET"})}),getLicenseLimits:e.query({query:()=>({url:"/admin/license-limit-information",method:"GET"}),providesTags:["LicenseLimits"]}),getLicenseTrialTimeLeft:e.query({query:()=>({url:"/admin/license-trial-time-left",method:"GET"}),providesTags:["LicenseTrialTimeLeft"]}),getGuidedTourMeta:e.query({query:()=>({url:"/admin/guided-tour-meta",method:"GET"}),providesTags:["GuidedTourMeta"]})}),overrideExisting:!1}),{useInitQuery:Fi,useTelemetryPropertiesQuery:Ui,useInformationQuery:Gi,useProjectSettingsQuery:zi,useUpdateProjectSettingsMutation:Bi,useGetPluginsQuery:Hi,useGetLicenseLimitsQuery:Zi,useGetLicenseTrialTimeLeftQuery:Vi,useGetGuidedTourMetaQuery:ir}=Zs;function Vs(){const[e,t]=R.useState("desktop");return R.useEffect(()=>{const n=navigator.userAgent.toLowerCase();/mobile|iphone|ipod|android.*mobile|windows phone/.test(n)?t("mobile"):/ipad|tablet|android(?!.*mobile)/.test(n)?t("tablet"):t("desktop")},[]),e}const[Wi,Ws]=Y("AppInfo",{});var Qs={ADMIN_PATH:"/admin",STRAPI_ADMIN_BACKEND_URL:"/",STRAPI_TELEMETRY_DISABLED:"false"};const Ks=R.createContext({uuid:!1}),Ys=()=>{const e=Vs(),{uuid:t,telemetryProperties:n}=R.useContext(Ks),r=Ws("useTracking",a=>a.userId);return{trackUsage:R.useCallback(async(a,o)=>{try{if(t&&!window.strapi.telemetryDisabled)return await Sr.post(`${Qs.STRAPI_ANALYTICS_URL||"https://analytics.strapi.io"}/api/v2/track`,{event:a,userId:r,eventProperties:{...o},userProperties:{deviceType:e},groupProperties:{...n,projectId:t,projectType:window.strapi.projectType,aiLicenseKey:window.strapi.aiLicenseKey}},{headers:{"Content-Type":"application/json","X-Strapi-Event":a}})}catch{}return null},[n,r,t])}};Ar("ConfigurationContext");const De={contentTypeBuilder:{createSchema:"didCreateContentTypeSchema",addField:"didAddFieldToSchema"},contentManager:{createContent:"didCreateContent"},apiTokens:{copyToken:"didCopyApiToken"}},Ue=({tourName:e,displayedCurrentStep:t,displayedTourLength:n})=>{const r=ce("GuidedTourPopover",o=>o.state),s=t??r.tours[e].currentStep+1,a=n??Ge[e]._meta.displayedStepCount;return i.jsx(N,{variant:"omega",fontSize:"12px",children:i.jsx(xe,{id:"tours.stepCount",defaultMessage:"Step {currentStep} of {tourLength}",values:{currentStep:s,tourLength:a}})})},at=({onClick:e})=>i.jsx(we,{onClick:e,children:i.jsx(xe,{id:"tours.gotIt",defaultMessage:"Got it"})}),Jt=({showSkip:e,showPrevious:t,to:n,tourName:r,onNextStep:s,onPreviousStep:a})=>{const{trackUsage:o}=Ys(),d=ce("GuidedTourPopover",b=>b.dispatch),u=ce("GuidedTourPopover",b=>b.state).tours[r].currentStep+1,p=Ge[r]._meta.totalStepCount,x=()=>{o("didSkipGuidedTour",{name:r}),d({type:"skip_tour",payload:r})},h=()=>{u===p&&o("didCompleteGuidedTour",{name:r}),s?s():d({type:"next_step",payload:r})},g=()=>{a?a():d({type:"previous_step",payload:r})};return i.jsxs($,{gap:2,children:[e&&i.jsx(we,{variant:"tertiary",onClick:x,children:i.jsx(xe,{id:"tours.skip",defaultMessage:"Skip"})}),!e&&t&&i.jsx(we,{variant:"tertiary",onClick:g,children:i.jsx(xe,{id:"tours.previous",defaultMessage:"Previous"})}),n?i.jsx(Rr,{tag:zn,to:n,onClick:h,children:i.jsx(xe,{id:"tours.next",defaultMessage:"Next"})}):i.jsx(we,{onClick:h,children:i.jsx(xe,{id:"tours.next",defaultMessage:"Next"})})]})},Js=c($)`
  border-top: ${({theme:e})=>`1px solid ${e.colors.neutral150}`};
`,Xs=c(C)`
  p {
    margin-top: ${({theme:e})=>e.spaces[5]};
  }
  ul {
    list-style-type: disc;
    padding-left: ${({theme:e})=>e.spaces[4]};
  }
`,ea=c(gt.Arrow)`
  fill: ${({theme:e})=>e.colors.neutral0};
  transform: translateY(-16px) rotate(-90deg);
`,ta=e=>({Root:R.forwardRef(({withArrow:t=!0,...n},r)=>i.jsxs(gt.Content,{ref:r,"aria-labelledby":"guided-tour-title",side:"top",align:"center",style:{border:"none"},onClick:s=>s.stopPropagation(),...n,children:[t&&i.jsx(ea,{asChild:!0,children:i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"25",viewBox:"0 0 23 25",fill:"none",children:i.jsx("path",{d:"M11 24.5L1.82843 15.3284C0.266332 13.7663 0.26633 11.2337 1.82843 9.67157L11 0.5L23 12.5L11 24.5Z"})})}),i.jsx($,{width:"360px",direction:"column",alignItems:"start",children:n.children})]})),Title:t=>i.jsx(C,{paddingTop:5,paddingLeft:5,paddingRight:5,paddingBottom:1,width:"100%",children:"children"in t?t.children:i.jsx(N,{tag:"h1",id:"guided-tour-title",variant:"omega",fontWeight:"bold",children:i.jsx(xe,{id:t.id,defaultMessage:t.defaultMessage})})}),Content:t=>{const{formatMessage:n}=St();let r="";return"children"in t||(r=n({id:t.id,defaultMessage:t.defaultMessage})),i.jsx(C,{paddingBottom:5,paddingLeft:5,paddingRight:5,width:"100%",children:"children"in t?t.children:i.jsx(Xs,{children:i.jsx(N,{tag:"div",variant:"omega",dangerouslySetInnerHTML:{__html:r}})})})},Actions:({showStepCount:t=!0,showPrevious:n=!0,showSkip:r=!1,to:s,children:a,...o})=>i.jsx(Js,{width:"100%",padding:3,paddingLeft:5,justifyContent:t?"space-between":"flex-end",...o,children:a||i.jsxs(i.Fragment,{children:[t&&i.jsx(Ue,{tourName:e}),i.jsx(Jt,{tourName:e,showSkip:r,showPrevious:!r&&n,to:s})]})})}),na=({Step:e})=>i.jsxs(e.Root,{side:"top",sideOffset:32,withArrow:!1,children:[i.jsx(e.Title,{id:"tours.apiTokens.Introduction.title",defaultMessage:"Last but not least, API tokens"}),i.jsx(e.Content,{id:"tours.apiTokens.Introduction.content",defaultMessage:"Control API access with highly customizable permissions."}),i.jsx(e.Actions,{showSkip:!0})]}),ra=({Step:e})=>i.jsxs(e.Root,{side:"bottom",align:"end",children:[i.jsx(e.Title,{id:"tours.apiTokens.ManageAPIToken.title",defaultMessage:"Manage an API token"}),i.jsx(e.Content,{id:"tours.apiTokens.ManageAPIToken.content",defaultMessage:'Click the "Pencil" icon to view and update an existing API token.'}),i.jsx(e.Actions,{})]}),sa=({Step:e,dispatch:t})=>i.jsxs(e.Root,{side:"bottom",align:"end",children:[i.jsx(e.Title,{id:"tours.apiTokens.ViewAPIToken.title",defaultMessage:"View API token"}),i.jsx(e.Content,{id:"tours.apiTokens.ViewAPIToken.content",defaultMessage:'Click the "View token" button to see your API token.'}),i.jsxs(e.Actions,{children:[i.jsx(Ue,{tourName:"apiTokens"}),i.jsx(at,{onClick:()=>t({type:"next_step",payload:"apiTokens"})})]})]}),aa=({Step:e,dispatch:t})=>i.jsxs(e.Root,{side:"bottom",align:"start",sideOffset:-5,children:[i.jsx(e.Title,{id:"tours.apiTokens.CopyAPIToken.title",defaultMessage:"Copy your new API token"}),i.jsx(e.Content,{id:"tours.apiTokens.CopyAPIToken.content",defaultMessage:"Copy your API token",values:{spacer:i.jsx(C,{paddingTop:2}),a:n=>i.jsx(Bn,{isExternal:!0,href:"https://docs.strapi.io/cms/features/api-tokens#usage",children:n})}}),i.jsxs(e.Actions,{children:[i.jsx(Ue,{tourName:"apiTokens"}),i.jsx(at,{onClick:()=>t({type:"next_step",payload:"apiTokens"})})]})]}),oa=({Step:e})=>i.jsxs(e.Root,{side:"right",align:"start",children:[i.jsx(e.Title,{id:"tours.apiTokens.FinalStep.title",defaultMessage:"Congratulations, it's time to deploy your application!"}),i.jsx(e.Content,{id:"tours.apiTokens.FinalStep.content",defaultMessage:"Your application is ready to be deployed and its content to be shared with the world!"}),i.jsx(e.Actions,{showPrevious:!1,showStepCount:!1,to:"/"})]}),ia=[{name:"Introduction",content:na},{name:"ManageAPIToken",content:ra},{name:"ViewAPIToken",content:sa},{name:"CopyAPIToken",content:aa},{name:"Finish",content:oa,excludeFromStepCount:!0,when:e=>e.includes(De.apiTokens.copyToken)}],At=({isActionRequired:e=!1,...t})=>{const{collectionType:n}=Hn(),r=ce("ContentManagerActions",x=>x.state),s=ce("ContentManagerActions",x=>x.dispatch),a=n==="single-types",o=r.tours.contentManager.currentStep+1,d=a&&o>je.length?o-je.length:o,l=a?Ge.contentManager._meta.displayedStepCount-je.length:Ge.contentManager._meta.displayedStepCount,u=()=>{a&&r.tours.contentManager.currentStep===0?s({type:"go_to_step",payload:{tourName:"contentManager",step:je.length+1}}):s({type:"next_step",payload:"contentManager"})},p=()=>{a&&r.tours.contentManager.currentStep===je.length+1?s({type:"go_to_step",payload:{tourName:"contentManager",step:r.tours.contentManager.currentStep-je.length-1}}):s({type:"previous_step",payload:"contentManager"})};return e?i.jsxs(i.Fragment,{children:[i.jsx(Ue,{tourName:"contentManager",displayedCurrentStep:d,displayedTourLength:l}),i.jsx(at,{onClick:u})]}):i.jsxs(i.Fragment,{children:[i.jsx(Ue,{tourName:"contentManager",displayedCurrentStep:d,displayedTourLength:l}),i.jsx(Jt,{tourName:"contentManager",onNextStep:u,onPreviousStep:p,...t})]})},da=({Step:e})=>i.jsxs(e.Root,{side:"top",sideOffset:33,withArrow:!1,children:[i.jsx(e.Title,{id:"tours.contentManager.Introduction.title",defaultMessage:"Content manager"}),i.jsx(e.Content,{id:"tours.contentManager.Introduction.content",defaultMessage:"Create and manage content from your collection types and single types."}),i.jsx(e.Actions,{children:i.jsx(At,{showSkip:!0})})]}),la=({Step:e})=>i.jsxs(e.Root,{side:"bottom",align:"end",children:[i.jsx(e.Title,{id:"tours.contentManager.CreateNewEntry.title",defaultMessage:"Create new entry"}),i.jsx(e.Content,{id:"tours.contentManager.CreateNewEntry.content",defaultMessage:'Click the "Create new entry" button to create and publish a new entry for this collection type.'}),i.jsx(e.Actions,{children:i.jsx(At,{showPrevious:!0})})]}),ca=({Step:e})=>i.jsxs(e.Root,{sideOffset:-12,children:[i.jsx(e.Title,{id:"tours.contentManager.Fields.title",defaultMessage:"Fields"}),i.jsx(e.Content,{id:"tours.contentManager.Fields.content",defaultMessage:"First, fill in the fields you created in the Content-Type Builder."}),i.jsx(e.Actions,{children:i.jsx(At,{showPrevious:!0})})]}),ua=({Step:e})=>i.jsxs(e.Root,{side:"left",align:"center",children:[i.jsx(e.Title,{id:"tours.contentManager.Publish.title",defaultMessage:"Publish"}),i.jsx(e.Content,{id:"tours.contentManager.Publish.content",defaultMessage:'Then click the "Publish" button to make your content available through the content API.'}),i.jsx(e.Actions,{children:i.jsx(At,{isActionRequired:!0})})]}),pa=({Step:e})=>i.jsxs(e.Root,{side:"right",children:[i.jsx(e.Title,{id:"tours.contentManager.FinalStep.title",defaultMessage:"Time to setup API tokens!"}),i.jsx(e.Content,{id:"tours.contentManager.FinalStep.content",defaultMessage:"Now that you've created and published an entry, let's setup an API token to manage access to your content."}),i.jsx(e.Actions,{showStepCount:!1,showPrevious:!1,to:"/settings/api-tokens"})]}),je=[{name:"CreateNewEntry",content:la}],ma=[{name:"Introduction",when:e=>e.includes(De.contentTypeBuilder.createSchema),content:da},...je,{name:"Fields",content:ca},{name:"Publish",content:ua},{name:"Finish",content:pa,excludeFromStepCount:!0,when:e=>e.includes(De.contentManager.createContent)}],ha=()=>{const e=window.strapi.ai?.enabled!==!1;return!!window.strapi?.isEE&&e},Ae=({...e})=>{const t=ce("ContentTypeBuilderActions",u=>u.state),n=ce("ContentTypeBuilderActions",u=>u.dispatch),r=ha(),s=t.tours.contentTypeBuilder.currentStep+1,a=!r&&s>ie.length?s-ie.length:r&&s>Ne.length?s-Ne.length:s,o=r?Ge.contentTypeBuilder._meta.displayedStepCount-Ne.length:Ge.contentTypeBuilder._meta.displayedStepCount-ie.length,d=()=>{const u=t.tours.contentTypeBuilder.currentStep;if(!r&&u===0){const p=1+ie.length;n({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:p}})}else if(r&&u===ie.length){const p=1+ie.length+Ne.length;n({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:p}})}else n({type:"next_step",payload:"contentTypeBuilder"})},l=()=>{const u=t.tours.contentTypeBuilder.currentStep;!r&&u===1+ie.length?n({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:0}}):r&&u===1+ie.length+Ne.length?n({type:"go_to_step",payload:{tourName:"contentTypeBuilder",step:ie.length}}):n({type:"previous_step",payload:"contentTypeBuilder"})};return i.jsxs(i.Fragment,{children:[i.jsx(Ue,{tourName:"contentTypeBuilder",displayedCurrentStep:a,displayedTourLength:o}),e.children||i.jsx(Jt,{tourName:"contentTypeBuilder",onNextStep:d,onPreviousStep:l,...e})]})},fa=({Step:e})=>i.jsxs(e.Root,{sideOffset:33,withArrow:!1,children:[i.jsx(e.Title,{id:"tours.contentTypeBuilder.Introduction.title",defaultMessage:"Content-Type Builder"}),i.jsx(e.Content,{id:"tours.contentTypeBuilder.Introduction.content",defaultMessage:"Create and manage your content structure with collection types, single types and components."}),i.jsx(e.Actions,{children:i.jsx(Ae,{showSkip:!0})})]}),ga=({Step:e})=>i.jsxs(e.Root,{side:"left",children:[i.jsx(e.Title,{id:"tours.contentTypeBuilder.AIChat.title",defaultMessage:"Time to get started!"}),i.jsx(e.Content,{id:"tours.contentTypeBuilder.AIChat.content",defaultMessage:"<p>If you have any questions about the Content-Type Builder or Strapi ask them here.</p><p>Strapi AI can generate schemas tailored to your needs. Ask for exactly what you want, for example:<ul><li>Date picker</li><li>Email and password fields</li><li>Media of any type</li><li>UIDs</li></ul></p><p>Don’t be shy, try it out !</p>"}),i.jsx(e.Actions,{children:i.jsx(Ae,{showPrevious:!0})})]}),ya=({Step:e})=>i.jsxs(e.Root,{side:"right",sideOffset:16,children:[i.jsx(e.Title,{id:"tours.contentTypeBuilder.CollectionTypes.title",defaultMessage:"Collection Types"}),i.jsx(e.Content,{id:"tours.contentTypeBuilder.CollectionTypes.content",defaultMessage:"A content structure that can manage multiple entries, such as articles or products."}),i.jsx(e.Actions,{children:i.jsx(Ae,{showPrevious:!0})})]}),va=({Step:e})=>i.jsxs(e.Root,{side:"right",sideOffset:16,children:[i.jsx(e.Title,{id:"tours.contentTypeBuilder.SingleTypes.title",defaultMessage:"Single Types"}),i.jsx(e.Content,{id:"tours.contentTypeBuilder.SingleTypes.content",defaultMessage:"A content structure that can manage a single entry, such as a homepage or a header."}),i.jsx(e.Actions,{children:i.jsx(Ae,{showPrevious:!0})})]}),Ta=({Step:e})=>i.jsxs(e.Root,{side:"right",sideOffset:16,children:[i.jsx(e.Title,{id:"tours.contentTypeBuilder.Components.title",defaultMessage:"Components"}),i.jsx(e.Content,{id:"tours.contentTypeBuilder.Components.content",defaultMessage:"A reusable content structure that can be used across multiple content types, such as buttons, sliders or cards."}),i.jsx(e.Actions,{children:i.jsx(Ae,{showPrevious:!0})})]}),xa=({Step:e})=>i.jsxs(e.Root,{side:"right",sideOffset:16,children:[i.jsx(e.Title,{id:"tours.contentTypeBuilder.YourTurn.title",defaultMessage:"Your turn"}),i.jsx(e.Content,{id:"tours.contentTypeBuilder.YourTurn.content",defaultMessage:"Create a collection type or single type and configure it."}),i.jsx(e.Actions,{children:i.jsx(Ae,{showPrevious:!0})})]}),ba=({Step:e,dispatch:t})=>i.jsxs(e.Root,{side:"bottom",children:[i.jsx(e.Title,{id:"tours.contentTypeBuilder.AddFields.title",defaultMessage:"Don't forget to add a field to your content type"}),i.jsx(e.Content,{id:"tours.contentTypeBuilder.AddFields.content",defaultMessage:"Add the fields your content needs such as text, media and relations."}),i.jsx(e.Actions,{children:i.jsx(Ae,{showPrevious:!0,children:i.jsx(at,{onClick:()=>t({type:"next_step",payload:"contentTypeBuilder"})})})})]}),wa=({Step:e,dispatch:t})=>i.jsxs(e.Root,{side:"right",children:[i.jsx(e.Title,{id:"tours.contentTypeBuilder.Save.title",defaultMessage:"Save before you leave!"}),i.jsx(e.Content,{id:"tours.contentTypeBuilder.Save.content",defaultMessage:"Save the changes you made here before leaving this page."}),i.jsx(e.Actions,{children:i.jsx(Ae,{showPrevious:!0,children:i.jsx(at,{onClick:()=>{t({type:"remove_completed_action",payload:De.contentTypeBuilder.createSchema}),t({type:"next_step",payload:"contentTypeBuilder"})}})})})]}),_a=({Step:e})=>{const{data:t}=ir(),{"*":n}=Hn(),r=n?.split("/").pop(),s=r?t?.data?.schemas?.[r]:null,o=s?`/content-manager/${{collectionType:"collection-types",singleType:"single-types"}[s.kind]}/${s.uid}`:"/content-manager";return i.jsxs(e.Root,{side:"right",children:[i.jsx(e.Title,{id:"tours.contentTypeBuilder.Finish.title",defaultMessage:"First Step: Done! 🎉"}),i.jsx(e.Content,{id:"tours.contentTypeBuilder.Finish.content",defaultMessage:"You've built your first content type! Now head over to the Content Manager to start adding entries!"}),i.jsx(e.Actions,{showStepCount:!1,showPrevious:!1,to:o})]})},ie=[{name:"AIChat",content:ga}],Ne=[{name:"CollectionTypes",content:ya},{name:"SingleTypes",content:va},{name:"Components",content:Ta},{name:"YourTurn",content:xa},{name:"AddFields",content:ba}],ka=[{name:"Introduction",content:fa},...ie,...Ne,{name:"Save",when:e=>e.includes(De.contentTypeBuilder.addField),content:wa},{name:"Finish",content:_a,excludeFromStepCount:!0,when:e=>e.includes(De.contentTypeBuilder.createSchema)}],Ge={contentTypeBuilder:ct("contentTypeBuilder",ka),contentManager:ct("contentManager",ma),apiTokens:ct("apiTokens",ia),strapiCloud:ct("strapiCloud",[])},Ca=({children:e,...t})=>{const n=ce("TooltipWrapper",r=>r.state);return!n.enabled||n.hidden?e:i.jsx(Sa,{...t,children:e})},$a=c(C)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(50, 50, 77, 0.2);
  z-index: 10;
`,Sa=({children:e,content:t,tourName:n,step:r,when:s})=>{const{data:a}=ir(),o=ce("GuidedTourTooltip",g=>g.state),d=ce("GuidedTourTooltip",g=>g.dispatch),l=o.tours[n].currentStep===r,u=s?s(o.completedActions):!0,p=a?.data?.isFirstSuperAdminUser&&!o.tours[n].isCompleted&&l&&u;R.useEffect(()=>{if(!p)return;const g=window.getComputedStyle(document.body).overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=g}},[p]);const x=R.useMemo(()=>ta(n),[n]),h=Object.keys(a?.data?.schemas??{}).filter(g=>g.startsWith("api::")).length>0;return R.useEffect(()=>{h&&d({type:"set_completed_actions",payload:[De.contentTypeBuilder.createSchema]})},[d,h,r,n]),i.jsxs(i.Fragment,{children:[p&&i.jsx(Er,{children:i.jsx($a,{})}),i.jsxs(gt.Root,{open:p,children:[i.jsx(gt.Anchor,{children:e}),t({Step:x,state:o,dispatch:d})]})]})};function ct(e,t){return t.reduce((r,s,a)=>{const o=s.name;if(o in r)throw Error(`The tour: ${e} with step: ${s.name} has already been registered`);return r[o]=({children:d})=>i.jsx(Ca,{tourName:e,step:a,content:s.content,when:s.when,children:d}),s.excludeFromStepCount&&r._meta.displayedStepCount--,r},{_meta:{totalStepCount:t.length,displayedStepCount:t.length}})}const[Qi,ce]=Y("GuidedTour");Ir`
  body {
    background: ${({theme:e})=>e.colors.neutral100};
  }
`;new Mr({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});c(jr)`
  & > div:first-child {
    display: none;
  }

  & > button {
    display: none;
  }
`;c(N)`
  word-break: break-all;
  color: ${({theme:e})=>e.colors.danger600};
`;const Aa={S:180,M:250};c(C)`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({$size:e})=>`${Aa[e]}px`}, 1fr)
  );
  grid-gap: ${({theme:e})=>e.spaces[4]};
`;c(C)`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;

  ${({theme:e})=>e.breakpoints.medium} {
    grid-template-columns: ${({$hasSideNav:e})=>e?"auto 1fr":"1fr"};
  }
`;c($)`
  display: none;
  background: ${({theme:e})=>e.colors.neutral0};

  ${({theme:e})=>e.breakpoints.medium} {
    display: block;
    box-shadow: none;
    transform: none;
  }
`;c(C)`
  overflow-x: hidden;

  ${({theme:e})=>e.breakpoints.medium} {
    transform: none;
    width: auto;
  }
`;const pe="The Form Component has not been initialised, ensure you are using this hook within a Form component";Y("Form",{disabled:!1,errors:{},initialValues:{},isSubmitting:!1,modified:!1,addFieldRow:()=>{throw new Error(pe)},moveFieldRow:()=>{throw new Error(pe)},onChange:()=>{throw new Error(pe)},removeFieldRow:()=>{throw new Error(pe)},resetForm:()=>{throw new Error(pe)},setErrors:()=>{throw new Error(pe)},setValues:()=>{throw new Error(pe)},setSubmitting:()=>{throw new Error(pe)},validate:async()=>{throw new Error(pe)},values:{}});c.img`
  height: 7.2rem;
`;c(C)`
  margin: 0 auto;
  width: 100%;
  max-width: 55.2rem;
`;c($)`
  flex-direction: column;
`;const H={email:{id:"components.Input.error.validation.email"},lowercase:{id:"components.Input.error.validation.lowercase"},max:{id:"components.Input.error.validation.max"},min:{id:"components.Input.error.validation.min"},minLength:{id:"components.Input.error.validation.minLength"},required:{id:"components.Input.error.validation.required",defaultMessage:"This value is required."}};me().shape({email:G().nullable().email({id:H.email.id,defaultMessage:"Not a valid email"}).required(H.required),password:G().required(H.required).nullable(),rememberMe:Lr().nullable()});c(J.Root)`
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
`;[...Array(11).keys()];me().shape({firstname:G().trim().required(H.required).nullable(),lastname:G().nullable(),password:G().min(8,{id:H.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).test("max-bytes",{id:"components.Input.error.contain.maxBytes",defaultMessage:"Password must be less than 73 bytes"},function(e){return!e||typeof e!="string"?!0:or(e)<=72}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:H.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:G().required({id:H.required.id,defaultMessage:"Confirm password is required"}).oneOf([Wt("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}).nullable(),registrationToken:G().required({id:H.required.id,defaultMessage:"Registration token is required"})});me().shape({firstname:G().trim().required({id:H.required.id,defaultMessage:"Firstname is required"}).nullable(),lastname:G().nullable(),password:G().min(8,{id:H.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).test("max-bytes",{id:"components.Input.error.contain.maxBytes",defaultMessage:"Password must be less than 73 bytes"},function(e){return e?new TextEncoder().encode(e).length<=72:!0}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:H.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:G().required({id:H.required.id,defaultMessage:"Confirm password is required"}).nullable().oneOf([Wt("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}),email:G().email({id:H.email.id,defaultMessage:"Not a valid email"}).strict().lowercase({id:H.lowercase.id,defaultMessage:"Email must be lowercase"}).required({id:H.required.id,defaultMessage:"Email is required"}).nullable()});c.a`
  color: ${({theme:e})=>e.colors.primary600};
`;me().shape({password:G().min(8,{id:H.minLength.id,defaultMessage:"Password must be at least 8 characters",values:{min:8}}).test("required-byte-size",{id:"components.Input.error.contain.maxBytes",defaultMessage:"Password must be less than 73 bytes"},function(e){return!e||typeof e!="string"?!0:or(e)<=72}).matches(/[a-z]/,{message:{id:"components.Input.error.contain.lowercase",defaultMessage:"Password must contain at least 1 lowercase letter"}}).matches(/[A-Z]/,{message:{id:"components.Input.error.contain.uppercase",defaultMessage:"Password must contain at least 1 uppercase letter"}}).matches(/\d/,{message:{id:"components.Input.error.contain.number",defaultMessage:"Password must contain at least 1 number"}}).required({id:H.required.id,defaultMessage:"Password is required"}).nullable(),confirmPassword:G().required({id:H.required.id,defaultMessage:"Confirm password is required"}).oneOf([Wt("password"),null],{id:"components.Input.error.password.noMatch",defaultMessage:"Passwords must match"}).nullable()});oe.reducerPath+"",oe.reducer;c(Dr)`
  width: 24px;
  height: 24px;

  path {
    fill: ${({theme:e})=>e.colors.danger600};
  }
`;Y("Filters");Y("Pagination");Y("Table");c(Pr)`
  transform: ${({$isUp:e})=>`rotate(${e?"180":"0"}deg)`};
`;c($)`
  margin-right: ${({theme:e})=>e.spaces[6]};

  svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;c(N)`
  color: ${({theme:e})=>e.colors.neutral800};
  word-break: break-all;
`;const pn=c(Or)`
  width: 100%;
  height: calc(100dvh - ${Tt} - 1px);
  overflow: hidden;
  background-color: ${({theme:e})=>e.colors.neutral0};
  display: flex;
  flex-direction: column;
  border-right: 0;
  box-shadow: none;
  position: fixed;
  top: calc(${Tt} + 1px);
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
`,Ra=c(zn)`
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
`;c($)`
  flex: 0 0 ${Tt};
  height: ${Tt};
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
  ${Ra} > div {
    padding-left: 36px;
  }
`;c(C)`
  ${pn} {
    background-color: transparent;
    border-right: none;
  }

  ${({theme:e})=>e.breakpoints.medium} {
    ${pn} {
      top: 0;
    }
  }
`;c(yt)`
  background: linear-gradient(
    90deg,
    ${({theme:e})=>e.colors.primary600} 0%,
    ${({theme:e})=>e.colors.alternative600} 121.48%
  );
  padding: 0.4rem 1rem;
`;const Ea=()=>{const e=R.useRef(null);return e.current===null&&(e.current=new AbortController),R.useEffect(()=>()=>{e.current.abort()},[]),R.useMemo(()=>pt({signal:e.current.signal}),[])},Ia=oe.enhanceEndpoints({addTagTypes:["LicenseLimits","User","Role","RolePermissions"]}).injectEndpoints({endpoints:e=>({createUser:e.mutation({query:t=>({url:"/admin/users",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:["LicenseLimits",{type:"User",id:"LIST"},"HomepageKeyStatistics"]}),updateUser:e.mutation({query:({id:t,...n})=>({url:`/admin/users/${t}`,method:"PUT",data:n}),invalidatesTags:(t,n,{id:r})=>[{type:"User",id:r},{type:"User",id:"LIST"}]}),getUsers:e.query({query:({id:t,...n}={})=>({url:`/admin/users/${t??""}`,method:"GET",config:{params:n}}),transformResponse:t=>{let n=[];return t.data&&("results"in t.data?Array.isArray(t.data.results)&&(n=t.data.results):n=[t.data]),{users:n,pagination:"pagination"in t.data?t.data.pagination:null}},providesTags:(t,n,r)=>typeof r=="object"&&"id"in r?[{type:"User",id:r.id}]:[...t?.users.map(({id:s})=>({type:"User",id:s}))??[],{type:"User",id:"LIST"}]}),deleteManyUsers:e.mutation({query:t=>({url:"/admin/users/batch-delete",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:["LicenseLimits",{type:"User",id:"LIST"},"HomepageKeyStatistics"]}),createRole:e.mutation({query:t=>({url:"/admin/roles",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags:[{type:"Role",id:"LIST"}]}),getRoles:e.query({query:({id:t,...n}={})=>({url:`/admin/roles/${t??""}`,method:"GET",config:{params:n}}),transformResponse:t=>{let n=[];return t.data&&(Array.isArray(t.data)?n=t.data:n=[t.data]),n},providesTags:(t,n,r)=>typeof r=="object"&&"id"in r?[{type:"Role",id:r.id}]:[...t?.map(({id:s})=>({type:"Role",id:s}))??[],{type:"Role",id:"LIST"}]}),updateRole:e.mutation({query:({id:t,...n})=>({url:`/admin/roles/${t}`,method:"PUT",data:n}),transformResponse:t=>t.data,invalidatesTags:(t,n,{id:r})=>[{type:"Role",id:r}]}),getRolePermissions:e.query({query:({id:t,...n})=>({url:`/admin/roles/${t}/permissions`,method:"GET",config:{params:n}}),transformResponse:t=>t.data,providesTags:(t,n,{id:r})=>[{type:"RolePermissions",id:r}]}),updateRolePermissions:e.mutation({query:({id:t,...n})=>({url:`/admin/roles/${t}/permissions`,method:"PUT",data:n}),transformResponse:t=>t.data,invalidatesTags:(t,n,{id:r})=>[{type:"RolePermissions",id:r}]}),getRolePermissionLayout:e.query({query:t=>({url:"/admin/permissions",method:"GET",config:{params:t}}),transformResponse:t=>t.data})}),overrideExisting:!1}),{useCreateUserMutation:Ki,useGetUsersQuery:Yi,useUpdateUserMutation:Ji,useDeleteManyUsersMutation:Xi,useGetRolesQuery:ed,useCreateRoleMutation:td,useUpdateRoleMutation:nd,useGetRolePermissionsQuery:rd,useGetRolePermissionLayoutQuery:sd,useUpdateRolePermissionsMutation:ad}=Ia,Ma=oe.enhanceEndpoints({addTagTypes:["CountDocuments","HomepageLayout"]}).injectEndpoints({endpoints:e=>({getKeyStatistics:e.query({query:()=>"/admin/homepage/key-statistics",transformResponse:t=>t.data,providesTags:(t,n)=>["HomepageKeyStatistics"]}),getCountDocuments:e.query({query:()=>"/content-manager/homepage/count-documents",transformResponse:t=>t.data,providesTags:(t,n)=>["CountDocuments"]}),getHomepageLayout:e.query({query:()=>"/admin/homepage/layout",transformResponse:t=>t.data,providesTags:["HomepageLayout"]}),updateHomepageLayout:e.mutation({query:t=>({url:"/admin/homepage/layout",method:"PUT",data:t}),transformResponse:t=>t.data,invalidatesTags:["HomepageLayout"]})})}),{useGetKeyStatisticsQuery:od,useGetCountDocumentsQuery:id,useGetHomepageLayoutQuery:dd,useUpdateHomepageLayoutMutation:ld}=Ma;var P;(function(e){e.assertEqual=s=>{};function t(s){}e.assertIs=t;function n(s){throw new Error}e.assertNever=n,e.arrayToEnum=s=>{const a={};for(const o of s)a[o]=o;return a},e.getValidEnumValues=s=>{const a=e.objectKeys(s).filter(d=>typeof s[s[d]]!="number"),o={};for(const d of a)o[d]=s[d];return e.objectValues(o)},e.objectValues=s=>e.objectKeys(s).map(function(a){return s[a]}),e.objectKeys=typeof Object.keys=="function"?s=>Object.keys(s):s=>{const a=[];for(const o in s)Object.prototype.hasOwnProperty.call(s,o)&&a.push(o);return a},e.find=(s,a)=>{for(const o of s)if(a(o))return o},e.isInteger=typeof Number.isInteger=="function"?s=>Number.isInteger(s):s=>typeof s=="number"&&Number.isFinite(s)&&Math.floor(s)===s;function r(s,a=" | "){return s.map(o=>typeof o=="string"?`'${o}'`:o).join(a)}e.joinValues=r,e.jsonStringifyReplacer=(s,a)=>typeof a=="bigint"?a.toString():a})(P||(P={}));var mn;(function(e){e.mergeShapes=(t,n)=>({...t,...n})})(mn||(mn={}));const y=P.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),Te=e=>{switch(typeof e){case"undefined":return y.undefined;case"string":return y.string;case"number":return Number.isNaN(e)?y.nan:y.number;case"boolean":return y.boolean;case"function":return y.function;case"bigint":return y.bigint;case"symbol":return y.symbol;case"object":return Array.isArray(e)?y.array:e===null?y.null:e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?y.promise:typeof Map<"u"&&e instanceof Map?y.map:typeof Set<"u"&&e instanceof Set?y.set:typeof Date<"u"&&e instanceof Date?y.date:y.object;default:return y.unknown}},m=P.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);class he extends Error{get errors(){return this.issues}constructor(t){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};const n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=t}format(t){const n=t||function(a){return a.message},r={_errors:[]},s=a=>{for(const o of a.issues)if(o.code==="invalid_union")o.unionErrors.map(s);else if(o.code==="invalid_return_type")s(o.returnTypeError);else if(o.code==="invalid_arguments")s(o.argumentsError);else if(o.path.length===0)r._errors.push(n(o));else{let d=r,l=0;for(;l<o.path.length;){const u=o.path[l];l===o.path.length-1?(d[u]=d[u]||{_errors:[]},d[u]._errors.push(n(o))):d[u]=d[u]||{_errors:[]},d=d[u],l++}}};return s(this),r}static assert(t){if(!(t instanceof he))throw new Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,P.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(t=n=>n.message){const n={},r=[];for(const s of this.issues)s.path.length>0?(n[s.path[0]]=n[s.path[0]]||[],n[s.path[0]].push(t(s))):r.push(t(s));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}}he.create=e=>new he(e);const Ft=(e,t)=>{let n;switch(e.code){case m.invalid_type:e.received===y.undefined?n="Required":n=`Expected ${e.expected}, received ${e.received}`;break;case m.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,P.jsonStringifyReplacer)}`;break;case m.unrecognized_keys:n=`Unrecognized key(s) in object: ${P.joinValues(e.keys,", ")}`;break;case m.invalid_union:n="Invalid input";break;case m.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${P.joinValues(e.options)}`;break;case m.invalid_enum_value:n=`Invalid enum value. Expected ${P.joinValues(e.options)}, received '${e.received}'`;break;case m.invalid_arguments:n="Invalid function arguments";break;case m.invalid_return_type:n="Invalid function return type";break;case m.invalid_date:n="Invalid date";break;case m.invalid_string:typeof e.validation=="object"?"includes"in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:P.assertNever(e.validation):e.validation!=="regex"?n=`Invalid ${e.validation}`:n="Invalid";break;case m.too_small:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:n="Invalid input";break;case m.too_big:e.type==="array"?n=`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?n=`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?n=`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?n=`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?n=`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:n="Invalid input";break;case m.custom:n="Invalid input";break;case m.invalid_intersection_types:n="Intersection results could not be merged";break;case m.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case m.not_finite:n="Number must be finite";break;default:n=t.defaultError,P.assertNever(e)}return{message:n}};let ja=Ft;function La(){return ja}const Da=e=>{const{data:t,path:n,errorMaps:r,issueData:s}=e,a=[...n,...s.path||[]],o={...s,path:a};if(s.message!==void 0)return{...s,path:a,message:s.message};let d="";const l=r.filter(u=>!!u).slice().reverse();for(const u of l)d=u(o,{data:t,defaultError:d}).message;return{...s,path:a,message:d}};function f(e,t){const n=La(),r=Da({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===Ft?void 0:Ft].filter(s=>!!s)});e.common.issues.push(r)}class re{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(t,n){const r=[];for(const s of n){if(s.status==="aborted")return _;s.status==="dirty"&&t.dirty(),r.push(s.value)}return{status:t.value,value:r}}static async mergeObjectAsync(t,n){const r=[];for(const s of n){const a=await s.key,o=await s.value;r.push({key:a,value:o})}return re.mergeObjectSync(t,r)}static mergeObjectSync(t,n){const r={};for(const s of n){const{key:a,value:o}=s;if(a.status==="aborted"||o.status==="aborted")return _;a.status==="dirty"&&t.dirty(),o.status==="dirty"&&t.dirty(),a.value!=="__proto__"&&(typeof o.value<"u"||s.alwaysSet)&&(r[a.value]=o.value)}return{status:t.value,value:r}}}const _=Object.freeze({status:"aborted"}),Je=e=>({status:"dirty",value:e}),ae=e=>({status:"valid",value:e}),hn=e=>e.status==="aborted",fn=e=>e.status==="dirty",ze=e=>e.status==="valid",xt=e=>typeof Promise<"u"&&e instanceof Promise;var v;(function(e){e.errToObj=t=>typeof t=="string"?{message:t}:t||{},e.toString=t=>typeof t=="string"?t:t?.message})(v||(v={}));class $e{constructor(t,n,r,s){this._cachedPath=[],this.parent=t,this.data=n,this._path=r,this._key=s}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}}const gn=(e,t)=>{if(ze(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;const n=new he(e.common.issues);return this._error=n,this._error}}};function E(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:s}=e;if(t&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:s}:{errorMap:(o,d)=>{const{message:l}=e;return o.code==="invalid_enum_value"?{message:l??d.defaultError}:typeof d.data>"u"?{message:l??r??d.defaultError}:o.code!=="invalid_type"?{message:d.defaultError}:{message:l??n??d.defaultError}},description:s}}class j{get description(){return this._def.description}_getType(t){return Te(t.data)}_getOrReturnCtx(t,n){return n||{common:t.parent.common,data:t.data,parsedType:Te(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}_processInputParams(t){return{status:new re,ctx:{common:t.parent.common,data:t.data,parsedType:Te(t.data),schemaErrorMap:this._def.errorMap,path:t.path,parent:t.parent}}}_parseSync(t){const n=this._parse(t);if(xt(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(t){const n=this._parse(t);return Promise.resolve(n)}parse(t,n){const r=this.safeParse(t,n);if(r.success)return r.data;throw r.error}safeParse(t,n){const r={common:{issues:[],async:n?.async??!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Te(t)},s=this._parseSync({data:t,path:r.path,parent:r});return gn(r,s)}"~validate"(t){const n={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Te(t)};if(!this["~standard"].async)try{const r=this._parseSync({data:t,path:[],parent:n});return ze(r)?{value:r.value}:{issues:n.common.issues}}catch(r){r?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),n.common={issues:[],async:!0}}return this._parseAsync({data:t,path:[],parent:n}).then(r=>ze(r)?{value:r.value}:{issues:n.common.issues})}async parseAsync(t,n){const r=await this.safeParseAsync(t,n);if(r.success)return r.data;throw r.error}async safeParseAsync(t,n){const r={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:t,parsedType:Te(t)},s=this._parse({data:t,path:r.path,parent:r}),a=await(xt(s)?s:Promise.resolve(s));return gn(r,a)}refine(t,n){const r=s=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(s):n;return this._refinement((s,a)=>{const o=t(s),d=()=>a.addIssue({code:m.custom,...r(s)});return typeof Promise<"u"&&o instanceof Promise?o.then(l=>l?!0:(d(),!1)):o?!0:(d(),!1)})}refinement(t,n){return this._refinement((r,s)=>t(r)?!0:(s.addIssue(typeof n=="function"?n(r,s):n),!1))}_refinement(t){return new Ze({schema:this,typeName:k.ZodEffects,effect:{type:"refinement",refinement:t}})}superRefine(t){return this._refinement(t)}constructor(t){this.spa=this.safeParseAsync,this._def=t,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:n=>this["~validate"](n)}}optional(){return _e.create(this,this._def)}nullable(){return Ve.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return le.create(this)}promise(){return kt.create(this,this._def)}or(t){return wt.create([this,t],this._def)}and(t){return _t.create(this,t,this._def)}transform(t){return new Ze({...E(this._def),schema:this,typeName:k.ZodEffects,effect:{type:"transform",transform:t}})}default(t){const n=typeof t=="function"?t:()=>t;return new zt({...E(this._def),innerType:this,defaultValue:n,typeName:k.ZodDefault})}brand(){return new so({typeName:k.ZodBranded,type:this,...E(this._def)})}catch(t){const n=typeof t=="function"?t:()=>t;return new Bt({...E(this._def),innerType:this,catchValue:n,typeName:k.ZodCatch})}describe(t){const n=this.constructor;return new n({...this._def,description:t})}pipe(t){return Xt.create(this,t)}readonly(){return Ht.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const Pa=/^c[^\s-]{8,}$/i,Oa=/^[0-9a-z]+$/,Na=/^[0-9A-HJKMNP-TV-Z]{26}$/i,qa=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Fa=/^[a-z0-9_-]{21}$/i,Ua=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Ga=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,za=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Ba="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let jt;const Ha=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Za=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Va=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Wa=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Qa=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Ka=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,dr="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Ya=new RegExp(`^${dr}$`);function lr(e){let t="[0-5]\\d";e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`);const n=e.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`}function Ja(e){return new RegExp(`^${lr(e)}$`)}function Xa(e){let t=`${dr}T${lr(e)}`;const n=[];return n.push(e.local?"Z?":"Z"),e.offset&&n.push("([+-]\\d{2}:?\\d{2})"),t=`${t}(${n.join("|")})`,new RegExp(`^${t}$`)}function eo(e,t){return!!((t==="v4"||!t)&&Ha.test(e)||(t==="v6"||!t)&&Va.test(e))}function to(e,t){if(!Ua.test(e))return!1;try{const[n]=e.split("."),r=n.replace(/-/g,"+").replace(/_/g,"/").padEnd(n.length+(4-n.length%4)%4,"="),s=JSON.parse(atob(r));return!(typeof s!="object"||s===null||"typ"in s&&s?.typ!=="JWT"||!s.alg||t&&s.alg!==t)}catch{return!1}}function no(e,t){return!!((t==="v4"||!t)&&Za.test(e)||(t==="v6"||!t)&&Wa.test(e))}class be extends j{_parse(t){if(this._def.coerce&&(t.data=String(t.data)),this._getType(t)!==y.string){const a=this._getOrReturnCtx(t);return f(a,{code:m.invalid_type,expected:y.string,received:a.parsedType}),_}const r=new re;let s;for(const a of this._def.checks)if(a.kind==="min")t.data.length<a.value&&(s=this._getOrReturnCtx(t,s),f(s,{code:m.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="max")t.data.length>a.value&&(s=this._getOrReturnCtx(t,s),f(s,{code:m.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!1,message:a.message}),r.dirty());else if(a.kind==="length"){const o=t.data.length>a.value,d=t.data.length<a.value;(o||d)&&(s=this._getOrReturnCtx(t,s),o?f(s,{code:m.too_big,maximum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}):d&&f(s,{code:m.too_small,minimum:a.value,type:"string",inclusive:!0,exact:!0,message:a.message}),r.dirty())}else if(a.kind==="email")za.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"email",code:m.invalid_string,message:a.message}),r.dirty());else if(a.kind==="emoji")jt||(jt=new RegExp(Ba,"u")),jt.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"emoji",code:m.invalid_string,message:a.message}),r.dirty());else if(a.kind==="uuid")qa.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"uuid",code:m.invalid_string,message:a.message}),r.dirty());else if(a.kind==="nanoid")Fa.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"nanoid",code:m.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid")Pa.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"cuid",code:m.invalid_string,message:a.message}),r.dirty());else if(a.kind==="cuid2")Oa.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"cuid2",code:m.invalid_string,message:a.message}),r.dirty());else if(a.kind==="ulid")Na.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"ulid",code:m.invalid_string,message:a.message}),r.dirty());else if(a.kind==="url")try{new URL(t.data)}catch{s=this._getOrReturnCtx(t,s),f(s,{validation:"url",code:m.invalid_string,message:a.message}),r.dirty()}else a.kind==="regex"?(a.regex.lastIndex=0,a.regex.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"regex",code:m.invalid_string,message:a.message}),r.dirty())):a.kind==="trim"?t.data=t.data.trim():a.kind==="includes"?t.data.includes(a.value,a.position)||(s=this._getOrReturnCtx(t,s),f(s,{code:m.invalid_string,validation:{includes:a.value,position:a.position},message:a.message}),r.dirty()):a.kind==="toLowerCase"?t.data=t.data.toLowerCase():a.kind==="toUpperCase"?t.data=t.data.toUpperCase():a.kind==="startsWith"?t.data.startsWith(a.value)||(s=this._getOrReturnCtx(t,s),f(s,{code:m.invalid_string,validation:{startsWith:a.value},message:a.message}),r.dirty()):a.kind==="endsWith"?t.data.endsWith(a.value)||(s=this._getOrReturnCtx(t,s),f(s,{code:m.invalid_string,validation:{endsWith:a.value},message:a.message}),r.dirty()):a.kind==="datetime"?Xa(a).test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{code:m.invalid_string,validation:"datetime",message:a.message}),r.dirty()):a.kind==="date"?Ya.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{code:m.invalid_string,validation:"date",message:a.message}),r.dirty()):a.kind==="time"?Ja(a).test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{code:m.invalid_string,validation:"time",message:a.message}),r.dirty()):a.kind==="duration"?Ga.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"duration",code:m.invalid_string,message:a.message}),r.dirty()):a.kind==="ip"?eo(t.data,a.version)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"ip",code:m.invalid_string,message:a.message}),r.dirty()):a.kind==="jwt"?to(t.data,a.alg)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"jwt",code:m.invalid_string,message:a.message}),r.dirty()):a.kind==="cidr"?no(t.data,a.version)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"cidr",code:m.invalid_string,message:a.message}),r.dirty()):a.kind==="base64"?Qa.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"base64",code:m.invalid_string,message:a.message}),r.dirty()):a.kind==="base64url"?Ka.test(t.data)||(s=this._getOrReturnCtx(t,s),f(s,{validation:"base64url",code:m.invalid_string,message:a.message}),r.dirty()):P.assertNever(a);return{status:r.value,value:t.data}}_regex(t,n,r){return this.refinement(s=>t.test(s),{validation:n,code:m.invalid_string,...v.errToObj(r)})}_addCheck(t){return new be({...this._def,checks:[...this._def.checks,t]})}email(t){return this._addCheck({kind:"email",...v.errToObj(t)})}url(t){return this._addCheck({kind:"url",...v.errToObj(t)})}emoji(t){return this._addCheck({kind:"emoji",...v.errToObj(t)})}uuid(t){return this._addCheck({kind:"uuid",...v.errToObj(t)})}nanoid(t){return this._addCheck({kind:"nanoid",...v.errToObj(t)})}cuid(t){return this._addCheck({kind:"cuid",...v.errToObj(t)})}cuid2(t){return this._addCheck({kind:"cuid2",...v.errToObj(t)})}ulid(t){return this._addCheck({kind:"ulid",...v.errToObj(t)})}base64(t){return this._addCheck({kind:"base64",...v.errToObj(t)})}base64url(t){return this._addCheck({kind:"base64url",...v.errToObj(t)})}jwt(t){return this._addCheck({kind:"jwt",...v.errToObj(t)})}ip(t){return this._addCheck({kind:"ip",...v.errToObj(t)})}cidr(t){return this._addCheck({kind:"cidr",...v.errToObj(t)})}datetime(t){return typeof t=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:t}):this._addCheck({kind:"datetime",precision:typeof t?.precision>"u"?null:t?.precision,offset:t?.offset??!1,local:t?.local??!1,...v.errToObj(t?.message)})}date(t){return this._addCheck({kind:"date",message:t})}time(t){return typeof t=="string"?this._addCheck({kind:"time",precision:null,message:t}):this._addCheck({kind:"time",precision:typeof t?.precision>"u"?null:t?.precision,...v.errToObj(t?.message)})}duration(t){return this._addCheck({kind:"duration",...v.errToObj(t)})}regex(t,n){return this._addCheck({kind:"regex",regex:t,...v.errToObj(n)})}includes(t,n){return this._addCheck({kind:"includes",value:t,position:n?.position,...v.errToObj(n?.message)})}startsWith(t,n){return this._addCheck({kind:"startsWith",value:t,...v.errToObj(n)})}endsWith(t,n){return this._addCheck({kind:"endsWith",value:t,...v.errToObj(n)})}min(t,n){return this._addCheck({kind:"min",value:t,...v.errToObj(n)})}max(t,n){return this._addCheck({kind:"max",value:t,...v.errToObj(n)})}length(t,n){return this._addCheck({kind:"length",value:t,...v.errToObj(n)})}nonempty(t){return this.min(1,v.errToObj(t))}trim(){return new be({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new be({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new be({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(t=>t.kind==="datetime")}get isDate(){return!!this._def.checks.find(t=>t.kind==="date")}get isTime(){return!!this._def.checks.find(t=>t.kind==="time")}get isDuration(){return!!this._def.checks.find(t=>t.kind==="duration")}get isEmail(){return!!this._def.checks.find(t=>t.kind==="email")}get isURL(){return!!this._def.checks.find(t=>t.kind==="url")}get isEmoji(){return!!this._def.checks.find(t=>t.kind==="emoji")}get isUUID(){return!!this._def.checks.find(t=>t.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(t=>t.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(t=>t.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(t=>t.kind==="cuid2")}get isULID(){return!!this._def.checks.find(t=>t.kind==="ulid")}get isIP(){return!!this._def.checks.find(t=>t.kind==="ip")}get isCIDR(){return!!this._def.checks.find(t=>t.kind==="cidr")}get isBase64(){return!!this._def.checks.find(t=>t.kind==="base64")}get isBase64url(){return!!this._def.checks.find(t=>t.kind==="base64url")}get minLength(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxLength(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}be.create=e=>new be({checks:[],typeName:k.ZodString,coerce:e?.coerce??!1,...E(e)});function ro(e,t){const n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,s=n>r?n:r,a=Number.parseInt(e.toFixed(s).replace(".","")),o=Number.parseInt(t.toFixed(s).replace(".",""));return a%o/10**s}class Be extends j{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(t){if(this._def.coerce&&(t.data=Number(t.data)),this._getType(t)!==y.number){const a=this._getOrReturnCtx(t);return f(a,{code:m.invalid_type,expected:y.number,received:a.parsedType}),_}let r;const s=new re;for(const a of this._def.checks)a.kind==="int"?P.isInteger(t.data)||(r=this._getOrReturnCtx(t,r),f(r,{code:m.invalid_type,expected:"integer",received:"float",message:a.message}),s.dirty()):a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(r=this._getOrReturnCtx(t,r),f(r,{code:m.too_small,minimum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(r=this._getOrReturnCtx(t,r),f(r,{code:m.too_big,maximum:a.value,type:"number",inclusive:a.inclusive,exact:!1,message:a.message}),s.dirty()):a.kind==="multipleOf"?ro(t.data,a.value)!==0&&(r=this._getOrReturnCtx(t,r),f(r,{code:m.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):a.kind==="finite"?Number.isFinite(t.data)||(r=this._getOrReturnCtx(t,r),f(r,{code:m.not_finite,message:a.message}),s.dirty()):P.assertNever(a);return{status:s.value,value:t.data}}gte(t,n){return this.setLimit("min",t,!0,v.toString(n))}gt(t,n){return this.setLimit("min",t,!1,v.toString(n))}lte(t,n){return this.setLimit("max",t,!0,v.toString(n))}lt(t,n){return this.setLimit("max",t,!1,v.toString(n))}setLimit(t,n,r,s){return new Be({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:v.toString(s)}]})}_addCheck(t){return new Be({...this._def,checks:[...this._def.checks,t]})}int(t){return this._addCheck({kind:"int",message:v.toString(t)})}positive(t){return this._addCheck({kind:"min",value:0,inclusive:!1,message:v.toString(t)})}negative(t){return this._addCheck({kind:"max",value:0,inclusive:!1,message:v.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:0,inclusive:!0,message:v.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:0,inclusive:!0,message:v.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:v.toString(n)})}finite(t){return this._addCheck({kind:"finite",message:v.toString(t)})}safe(t){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:v.toString(t)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:v.toString(t)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}get isInt(){return!!this._def.checks.find(t=>t.kind==="int"||t.kind==="multipleOf"&&P.isInteger(t.value))}get isFinite(){let t=null,n=null;for(const r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(t===null||r.value<t)&&(t=r.value)}return Number.isFinite(n)&&Number.isFinite(t)}}Be.create=e=>new Be({checks:[],typeName:k.ZodNumber,coerce:e?.coerce||!1,...E(e)});class nt extends j{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(t){if(this._def.coerce)try{t.data=BigInt(t.data)}catch{return this._getInvalidInput(t)}if(this._getType(t)!==y.bigint)return this._getInvalidInput(t);let r;const s=new re;for(const a of this._def.checks)a.kind==="min"?(a.inclusive?t.data<a.value:t.data<=a.value)&&(r=this._getOrReturnCtx(t,r),f(r,{code:m.too_small,type:"bigint",minimum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="max"?(a.inclusive?t.data>a.value:t.data>=a.value)&&(r=this._getOrReturnCtx(t,r),f(r,{code:m.too_big,type:"bigint",maximum:a.value,inclusive:a.inclusive,message:a.message}),s.dirty()):a.kind==="multipleOf"?t.data%a.value!==BigInt(0)&&(r=this._getOrReturnCtx(t,r),f(r,{code:m.not_multiple_of,multipleOf:a.value,message:a.message}),s.dirty()):P.assertNever(a);return{status:s.value,value:t.data}}_getInvalidInput(t){const n=this._getOrReturnCtx(t);return f(n,{code:m.invalid_type,expected:y.bigint,received:n.parsedType}),_}gte(t,n){return this.setLimit("min",t,!0,v.toString(n))}gt(t,n){return this.setLimit("min",t,!1,v.toString(n))}lte(t,n){return this.setLimit("max",t,!0,v.toString(n))}lt(t,n){return this.setLimit("max",t,!1,v.toString(n))}setLimit(t,n,r,s){return new nt({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:v.toString(s)}]})}_addCheck(t){return new nt({...this._def,checks:[...this._def.checks,t]})}positive(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:v.toString(t)})}negative(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:v.toString(t)})}nonpositive(t){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:v.toString(t)})}nonnegative(t){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:v.toString(t)})}multipleOf(t,n){return this._addCheck({kind:"multipleOf",value:t,message:v.toString(n)})}get minValue(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t}get maxValue(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t}}nt.create=e=>new nt({checks:[],typeName:k.ZodBigInt,coerce:e?.coerce??!1,...E(e)});class Ut extends j{_parse(t){if(this._def.coerce&&(t.data=!!t.data),this._getType(t)!==y.boolean){const r=this._getOrReturnCtx(t);return f(r,{code:m.invalid_type,expected:y.boolean,received:r.parsedType}),_}return ae(t.data)}}Ut.create=e=>new Ut({typeName:k.ZodBoolean,coerce:e?.coerce||!1,...E(e)});class bt extends j{_parse(t){if(this._def.coerce&&(t.data=new Date(t.data)),this._getType(t)!==y.date){const a=this._getOrReturnCtx(t);return f(a,{code:m.invalid_type,expected:y.date,received:a.parsedType}),_}if(Number.isNaN(t.data.getTime())){const a=this._getOrReturnCtx(t);return f(a,{code:m.invalid_date}),_}const r=new re;let s;for(const a of this._def.checks)a.kind==="min"?t.data.getTime()<a.value&&(s=this._getOrReturnCtx(t,s),f(s,{code:m.too_small,message:a.message,inclusive:!0,exact:!1,minimum:a.value,type:"date"}),r.dirty()):a.kind==="max"?t.data.getTime()>a.value&&(s=this._getOrReturnCtx(t,s),f(s,{code:m.too_big,message:a.message,inclusive:!0,exact:!1,maximum:a.value,type:"date"}),r.dirty()):P.assertNever(a);return{status:r.value,value:new Date(t.data.getTime())}}_addCheck(t){return new bt({...this._def,checks:[...this._def.checks,t]})}min(t,n){return this._addCheck({kind:"min",value:t.getTime(),message:v.toString(n)})}max(t,n){return this._addCheck({kind:"max",value:t.getTime(),message:v.toString(n)})}get minDate(){let t=null;for(const n of this._def.checks)n.kind==="min"&&(t===null||n.value>t)&&(t=n.value);return t!=null?new Date(t):null}get maxDate(){let t=null;for(const n of this._def.checks)n.kind==="max"&&(t===null||n.value<t)&&(t=n.value);return t!=null?new Date(t):null}}bt.create=e=>new bt({checks:[],coerce:e?.coerce||!1,typeName:k.ZodDate,...E(e)});class yn extends j{_parse(t){if(this._getType(t)!==y.symbol){const r=this._getOrReturnCtx(t);return f(r,{code:m.invalid_type,expected:y.symbol,received:r.parsedType}),_}return ae(t.data)}}yn.create=e=>new yn({typeName:k.ZodSymbol,...E(e)});class vn extends j{_parse(t){if(this._getType(t)!==y.undefined){const r=this._getOrReturnCtx(t);return f(r,{code:m.invalid_type,expected:y.undefined,received:r.parsedType}),_}return ae(t.data)}}vn.create=e=>new vn({typeName:k.ZodUndefined,...E(e)});class Tn extends j{_parse(t){if(this._getType(t)!==y.null){const r=this._getOrReturnCtx(t);return f(r,{code:m.invalid_type,expected:y.null,received:r.parsedType}),_}return ae(t.data)}}Tn.create=e=>new Tn({typeName:k.ZodNull,...E(e)});class xn extends j{constructor(){super(...arguments),this._any=!0}_parse(t){return ae(t.data)}}xn.create=e=>new xn({typeName:k.ZodAny,...E(e)});class bn extends j{constructor(){super(...arguments),this._unknown=!0}_parse(t){return ae(t.data)}}bn.create=e=>new bn({typeName:k.ZodUnknown,...E(e)});class Se extends j{_parse(t){const n=this._getOrReturnCtx(t);return f(n,{code:m.invalid_type,expected:y.never,received:n.parsedType}),_}}Se.create=e=>new Se({typeName:k.ZodNever,...E(e)});class wn extends j{_parse(t){if(this._getType(t)!==y.undefined){const r=this._getOrReturnCtx(t);return f(r,{code:m.invalid_type,expected:y.void,received:r.parsedType}),_}return ae(t.data)}}wn.create=e=>new wn({typeName:k.ZodVoid,...E(e)});class le extends j{_parse(t){const{ctx:n,status:r}=this._processInputParams(t),s=this._def;if(n.parsedType!==y.array)return f(n,{code:m.invalid_type,expected:y.array,received:n.parsedType}),_;if(s.exactLength!==null){const o=n.data.length>s.exactLength.value,d=n.data.length<s.exactLength.value;(o||d)&&(f(n,{code:o?m.too_big:m.too_small,minimum:d?s.exactLength.value:void 0,maximum:o?s.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:s.exactLength.message}),r.dirty())}if(s.minLength!==null&&n.data.length<s.minLength.value&&(f(n,{code:m.too_small,minimum:s.minLength.value,type:"array",inclusive:!0,exact:!1,message:s.minLength.message}),r.dirty()),s.maxLength!==null&&n.data.length>s.maxLength.value&&(f(n,{code:m.too_big,maximum:s.maxLength.value,type:"array",inclusive:!0,exact:!1,message:s.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((o,d)=>s.type._parseAsync(new $e(n,o,n.path,d)))).then(o=>re.mergeArray(r,o));const a=[...n.data].map((o,d)=>s.type._parseSync(new $e(n,o,n.path,d)));return re.mergeArray(r,a)}get element(){return this._def.type}min(t,n){return new le({...this._def,minLength:{value:t,message:v.toString(n)}})}max(t,n){return new le({...this._def,maxLength:{value:t,message:v.toString(n)}})}length(t,n){return new le({...this._def,exactLength:{value:t,message:v.toString(n)}})}nonempty(t){return this.min(1,t)}}le.create=(e,t)=>new le({type:e,minLength:null,maxLength:null,exactLength:null,typeName:k.ZodArray,...E(t)});function qe(e){if(e instanceof B){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=_e.create(qe(r))}return new B({...e._def,shape:()=>t})}else return e instanceof le?new le({...e._def,type:qe(e.element)}):e instanceof _e?_e.create(qe(e.unwrap())):e instanceof Ve?Ve.create(qe(e.unwrap())):e instanceof Pe?Pe.create(e.items.map(t=>qe(t))):e}class B extends j{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const t=this._def.shape(),n=P.objectKeys(t);return this._cached={shape:t,keys:n},this._cached}_parse(t){if(this._getType(t)!==y.object){const u=this._getOrReturnCtx(t);return f(u,{code:m.invalid_type,expected:y.object,received:u.parsedType}),_}const{status:r,ctx:s}=this._processInputParams(t),{shape:a,keys:o}=this._getCached(),d=[];if(!(this._def.catchall instanceof Se&&this._def.unknownKeys==="strip"))for(const u in s.data)o.includes(u)||d.push(u);const l=[];for(const u of o){const p=a[u],x=s.data[u];l.push({key:{status:"valid",value:u},value:p._parse(new $e(s,x,s.path,u)),alwaysSet:u in s.data})}if(this._def.catchall instanceof Se){const u=this._def.unknownKeys;if(u==="passthrough")for(const p of d)l.push({key:{status:"valid",value:p},value:{status:"valid",value:s.data[p]}});else if(u==="strict")d.length>0&&(f(s,{code:m.unrecognized_keys,keys:d}),r.dirty());else if(u!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const u=this._def.catchall;for(const p of d){const x=s.data[p];l.push({key:{status:"valid",value:p},value:u._parse(new $e(s,x,s.path,p)),alwaysSet:p in s.data})}}return s.common.async?Promise.resolve().then(async()=>{const u=[];for(const p of l){const x=await p.key,h=await p.value;u.push({key:x,value:h,alwaysSet:p.alwaysSet})}return u}).then(u=>re.mergeObjectSync(r,u)):re.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(t){return v.errToObj,new B({...this._def,unknownKeys:"strict",...t!==void 0?{errorMap:(n,r)=>{const s=this._def.errorMap?.(n,r).message??r.defaultError;return n.code==="unrecognized_keys"?{message:v.errToObj(t).message??s}:{message:s}}}:{}})}strip(){return new B({...this._def,unknownKeys:"strip"})}passthrough(){return new B({...this._def,unknownKeys:"passthrough"})}extend(t){return new B({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new B({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:k.ZodObject})}setKey(t,n){return this.augment({[t]:n})}catchall(t){return new B({...this._def,catchall:t})}pick(t){const n={};for(const r of P.objectKeys(t))t[r]&&this.shape[r]&&(n[r]=this.shape[r]);return new B({...this._def,shape:()=>n})}omit(t){const n={};for(const r of P.objectKeys(this.shape))t[r]||(n[r]=this.shape[r]);return new B({...this._def,shape:()=>n})}deepPartial(){return qe(this)}partial(t){const n={};for(const r of P.objectKeys(this.shape)){const s=this.shape[r];t&&!t[r]?n[r]=s:n[r]=s.optional()}return new B({...this._def,shape:()=>n})}required(t){const n={};for(const r of P.objectKeys(this.shape))if(t&&!t[r])n[r]=this.shape[r];else{let a=this.shape[r];for(;a instanceof _e;)a=a._def.innerType;n[r]=a}return new B({...this._def,shape:()=>n})}keyof(){return cr(P.objectKeys(this.shape))}}B.create=(e,t)=>new B({shape:()=>e,unknownKeys:"strip",catchall:Se.create(),typeName:k.ZodObject,...E(t)});B.strictCreate=(e,t)=>new B({shape:()=>e,unknownKeys:"strict",catchall:Se.create(),typeName:k.ZodObject,...E(t)});B.lazycreate=(e,t)=>new B({shape:e,unknownKeys:"strip",catchall:Se.create(),typeName:k.ZodObject,...E(t)});class wt extends j{_parse(t){const{ctx:n}=this._processInputParams(t),r=this._def.options;function s(a){for(const d of a)if(d.result.status==="valid")return d.result;for(const d of a)if(d.result.status==="dirty")return n.common.issues.push(...d.ctx.common.issues),d.result;const o=a.map(d=>new he(d.ctx.common.issues));return f(n,{code:m.invalid_union,unionErrors:o}),_}if(n.common.async)return Promise.all(r.map(async a=>{const o={...n,common:{...n.common,issues:[]},parent:null};return{result:await a._parseAsync({data:n.data,path:n.path,parent:o}),ctx:o}})).then(s);{let a;const o=[];for(const l of r){const u={...n,common:{...n.common,issues:[]},parent:null},p=l._parseSync({data:n.data,path:n.path,parent:u});if(p.status==="valid")return p;p.status==="dirty"&&!a&&(a={result:p,ctx:u}),u.common.issues.length&&o.push(u.common.issues)}if(a)return n.common.issues.push(...a.ctx.common.issues),a.result;const d=o.map(l=>new he(l));return f(n,{code:m.invalid_union,unionErrors:d}),_}}get options(){return this._def.options}}wt.create=(e,t)=>new wt({options:e,typeName:k.ZodUnion,...E(t)});function Gt(e,t){const n=Te(e),r=Te(t);if(e===t)return{valid:!0,data:e};if(n===y.object&&r===y.object){const s=P.objectKeys(t),a=P.objectKeys(e).filter(d=>s.indexOf(d)!==-1),o={...e,...t};for(const d of a){const l=Gt(e[d],t[d]);if(!l.valid)return{valid:!1};o[d]=l.data}return{valid:!0,data:o}}else if(n===y.array&&r===y.array){if(e.length!==t.length)return{valid:!1};const s=[];for(let a=0;a<e.length;a++){const o=e[a],d=t[a],l=Gt(o,d);if(!l.valid)return{valid:!1};s.push(l.data)}return{valid:!0,data:s}}else return n===y.date&&r===y.date&&+e==+t?{valid:!0,data:e}:{valid:!1}}class _t extends j{_parse(t){const{status:n,ctx:r}=this._processInputParams(t),s=(a,o)=>{if(hn(a)||hn(o))return _;const d=Gt(a.value,o.value);return d.valid?((fn(a)||fn(o))&&n.dirty(),{status:n.value,value:d.data}):(f(r,{code:m.invalid_intersection_types}),_)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([a,o])=>s(a,o)):s(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}}_t.create=(e,t,n)=>new _t({left:e,right:t,typeName:k.ZodIntersection,...E(n)});class Pe extends j{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==y.array)return f(r,{code:m.invalid_type,expected:y.array,received:r.parsedType}),_;if(r.data.length<this._def.items.length)return f(r,{code:m.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),_;!this._def.rest&&r.data.length>this._def.items.length&&(f(r,{code:m.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());const a=[...r.data].map((o,d)=>{const l=this._def.items[d]||this._def.rest;return l?l._parse(new $e(r,o,r.path,d)):null}).filter(o=>!!o);return r.common.async?Promise.all(a).then(o=>re.mergeArray(n,o)):re.mergeArray(n,a)}get items(){return this._def.items}rest(t){return new Pe({...this._def,rest:t})}}Pe.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new Pe({items:e,typeName:k.ZodTuple,rest:null,...E(t)})};class _n extends j{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==y.map)return f(r,{code:m.invalid_type,expected:y.map,received:r.parsedType}),_;const s=this._def.keyType,a=this._def.valueType,o=[...r.data.entries()].map(([d,l],u)=>({key:s._parse(new $e(r,d,r.path,[u,"key"])),value:a._parse(new $e(r,l,r.path,[u,"value"]))}));if(r.common.async){const d=new Map;return Promise.resolve().then(async()=>{for(const l of o){const u=await l.key,p=await l.value;if(u.status==="aborted"||p.status==="aborted")return _;(u.status==="dirty"||p.status==="dirty")&&n.dirty(),d.set(u.value,p.value)}return{status:n.value,value:d}})}else{const d=new Map;for(const l of o){const u=l.key,p=l.value;if(u.status==="aborted"||p.status==="aborted")return _;(u.status==="dirty"||p.status==="dirty")&&n.dirty(),d.set(u.value,p.value)}return{status:n.value,value:d}}}}_n.create=(e,t,n)=>new _n({valueType:t,keyType:e,typeName:k.ZodMap,...E(n)});class rt extends j{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.parsedType!==y.set)return f(r,{code:m.invalid_type,expected:y.set,received:r.parsedType}),_;const s=this._def;s.minSize!==null&&r.data.size<s.minSize.value&&(f(r,{code:m.too_small,minimum:s.minSize.value,type:"set",inclusive:!0,exact:!1,message:s.minSize.message}),n.dirty()),s.maxSize!==null&&r.data.size>s.maxSize.value&&(f(r,{code:m.too_big,maximum:s.maxSize.value,type:"set",inclusive:!0,exact:!1,message:s.maxSize.message}),n.dirty());const a=this._def.valueType;function o(l){const u=new Set;for(const p of l){if(p.status==="aborted")return _;p.status==="dirty"&&n.dirty(),u.add(p.value)}return{status:n.value,value:u}}const d=[...r.data.values()].map((l,u)=>a._parse(new $e(r,l,r.path,u)));return r.common.async?Promise.all(d).then(l=>o(l)):o(d)}min(t,n){return new rt({...this._def,minSize:{value:t,message:v.toString(n)}})}max(t,n){return new rt({...this._def,maxSize:{value:t,message:v.toString(n)}})}size(t,n){return this.min(t,n).max(t,n)}nonempty(t){return this.min(1,t)}}rt.create=(e,t)=>new rt({valueType:e,minSize:null,maxSize:null,typeName:k.ZodSet,...E(t)});class kn extends j{get schema(){return this._def.getter()}_parse(t){const{ctx:n}=this._processInputParams(t);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}}kn.create=(e,t)=>new kn({getter:e,typeName:k.ZodLazy,...E(t)});class Cn extends j{_parse(t){if(t.data!==this._def.value){const n=this._getOrReturnCtx(t);return f(n,{received:n.data,code:m.invalid_literal,expected:this._def.value}),_}return{status:"valid",value:t.data}}get value(){return this._def.value}}Cn.create=(e,t)=>new Cn({value:e,typeName:k.ZodLiteral,...E(t)});function cr(e,t){return new He({values:e,typeName:k.ZodEnum,...E(t)})}class He extends j{_parse(t){if(typeof t.data!="string"){const n=this._getOrReturnCtx(t),r=this._def.values;return f(n,{expected:P.joinValues(r),received:n.parsedType,code:m.invalid_type}),_}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(t.data)){const n=this._getOrReturnCtx(t),r=this._def.values;return f(n,{received:n.data,code:m.invalid_enum_value,options:r}),_}return ae(t.data)}get options(){return this._def.values}get enum(){const t={};for(const n of this._def.values)t[n]=n;return t}get Values(){const t={};for(const n of this._def.values)t[n]=n;return t}get Enum(){const t={};for(const n of this._def.values)t[n]=n;return t}extract(t,n=this._def){return He.create(t,{...this._def,...n})}exclude(t,n=this._def){return He.create(this.options.filter(r=>!t.includes(r)),{...this._def,...n})}}He.create=cr;class $n extends j{_parse(t){const n=P.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(t);if(r.parsedType!==y.string&&r.parsedType!==y.number){const s=P.objectValues(n);return f(r,{expected:P.joinValues(s),received:r.parsedType,code:m.invalid_type}),_}if(this._cache||(this._cache=new Set(P.getValidEnumValues(this._def.values))),!this._cache.has(t.data)){const s=P.objectValues(n);return f(r,{received:r.data,code:m.invalid_enum_value,options:s}),_}return ae(t.data)}get enum(){return this._def.values}}$n.create=(e,t)=>new $n({values:e,typeName:k.ZodNativeEnum,...E(t)});class kt extends j{unwrap(){return this._def.type}_parse(t){const{ctx:n}=this._processInputParams(t);if(n.parsedType!==y.promise&&n.common.async===!1)return f(n,{code:m.invalid_type,expected:y.promise,received:n.parsedType}),_;const r=n.parsedType===y.promise?n.data:Promise.resolve(n.data);return ae(r.then(s=>this._def.type.parseAsync(s,{path:n.path,errorMap:n.common.contextualErrorMap})))}}kt.create=(e,t)=>new kt({type:e,typeName:k.ZodPromise,...E(t)});class Ze extends j{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===k.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(t){const{status:n,ctx:r}=this._processInputParams(t),s=this._def.effect||null,a={addIssue:o=>{f(r,o),o.fatal?n.abort():n.dirty()},get path(){return r.path}};if(a.addIssue=a.addIssue.bind(a),s.type==="preprocess"){const o=s.transform(r.data,a);if(r.common.async)return Promise.resolve(o).then(async d=>{if(n.value==="aborted")return _;const l=await this._def.schema._parseAsync({data:d,path:r.path,parent:r});return l.status==="aborted"?_:l.status==="dirty"||n.value==="dirty"?Je(l.value):l});{if(n.value==="aborted")return _;const d=this._def.schema._parseSync({data:o,path:r.path,parent:r});return d.status==="aborted"?_:d.status==="dirty"||n.value==="dirty"?Je(d.value):d}}if(s.type==="refinement"){const o=d=>{const l=s.refinement(d,a);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return d};if(r.common.async===!1){const d=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return d.status==="aborted"?_:(d.status==="dirty"&&n.dirty(),o(d.value),{status:n.value,value:d.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(d=>d.status==="aborted"?_:(d.status==="dirty"&&n.dirty(),o(d.value).then(()=>({status:n.value,value:d.value}))))}if(s.type==="transform")if(r.common.async===!1){const o=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!ze(o))return _;const d=s.transform(o.value,a);if(d instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:d}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(o=>ze(o)?Promise.resolve(s.transform(o.value,a)).then(d=>({status:n.value,value:d})):_);P.assertNever(s)}}Ze.create=(e,t,n)=>new Ze({schema:e,typeName:k.ZodEffects,effect:t,...E(n)});Ze.createWithPreprocess=(e,t,n)=>new Ze({schema:t,effect:{type:"preprocess",transform:e},typeName:k.ZodEffects,...E(n)});class _e extends j{_parse(t){return this._getType(t)===y.undefined?ae(void 0):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}_e.create=(e,t)=>new _e({innerType:e,typeName:k.ZodOptional,...E(t)});class Ve extends j{_parse(t){return this._getType(t)===y.null?ae(null):this._def.innerType._parse(t)}unwrap(){return this._def.innerType}}Ve.create=(e,t)=>new Ve({innerType:e,typeName:k.ZodNullable,...E(t)});class zt extends j{_parse(t){const{ctx:n}=this._processInputParams(t);let r=n.data;return n.parsedType===y.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}}zt.create=(e,t)=>new zt({innerType:e,typeName:k.ZodDefault,defaultValue:typeof t.default=="function"?t.default:()=>t.default,...E(t)});class Bt extends j{_parse(t){const{ctx:n}=this._processInputParams(t),r={...n,common:{...n.common,issues:[]}},s=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return xt(s)?s.then(a=>({status:"valid",value:a.status==="valid"?a.value:this._def.catchValue({get error(){return new he(r.common.issues)},input:r.data})})):{status:"valid",value:s.status==="valid"?s.value:this._def.catchValue({get error(){return new he(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}}Bt.create=(e,t)=>new Bt({innerType:e,typeName:k.ZodCatch,catchValue:typeof t.catch=="function"?t.catch:()=>t.catch,...E(t)});class Sn extends j{_parse(t){if(this._getType(t)!==y.nan){const r=this._getOrReturnCtx(t);return f(r,{code:m.invalid_type,expected:y.nan,received:r.parsedType}),_}return{status:"valid",value:t.data}}}Sn.create=e=>new Sn({typeName:k.ZodNaN,...E(e)});class so extends j{_parse(t){const{ctx:n}=this._processInputParams(t),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}}class Xt extends j{_parse(t){const{status:n,ctx:r}=this._processInputParams(t);if(r.common.async)return(async()=>{const a=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?_:a.status==="dirty"?(n.dirty(),Je(a.value)):this._def.out._parseAsync({data:a.value,path:r.path,parent:r})})();{const s=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return s.status==="aborted"?_:s.status==="dirty"?(n.dirty(),{status:"dirty",value:s.value}):this._def.out._parseSync({data:s.value,path:r.path,parent:r})}}static create(t,n){return new Xt({in:t,out:n,typeName:k.ZodPipeline})}}class Ht extends j{_parse(t){const n=this._def.innerType._parse(t),r=s=>(ze(s)&&(s.value=Object.freeze(s.value)),s);return xt(n)?n.then(s=>r(s)):r(n)}unwrap(){return this._def.innerType}}Ht.create=(e,t)=>new Ht({innerType:e,typeName:k.ZodReadonly,...E(t)});var k;(function(e){e.ZodString="ZodString",e.ZodNumber="ZodNumber",e.ZodNaN="ZodNaN",e.ZodBigInt="ZodBigInt",e.ZodBoolean="ZodBoolean",e.ZodDate="ZodDate",e.ZodSymbol="ZodSymbol",e.ZodUndefined="ZodUndefined",e.ZodNull="ZodNull",e.ZodAny="ZodAny",e.ZodUnknown="ZodUnknown",e.ZodNever="ZodNever",e.ZodVoid="ZodVoid",e.ZodArray="ZodArray",e.ZodObject="ZodObject",e.ZodUnion="ZodUnion",e.ZodDiscriminatedUnion="ZodDiscriminatedUnion",e.ZodIntersection="ZodIntersection",e.ZodTuple="ZodTuple",e.ZodRecord="ZodRecord",e.ZodMap="ZodMap",e.ZodSet="ZodSet",e.ZodFunction="ZodFunction",e.ZodLazy="ZodLazy",e.ZodLiteral="ZodLiteral",e.ZodEnum="ZodEnum",e.ZodEffects="ZodEffects",e.ZodNativeEnum="ZodNativeEnum",e.ZodOptional="ZodOptional",e.ZodNullable="ZodNullable",e.ZodDefault="ZodDefault",e.ZodCatch="ZodCatch",e.ZodPromise="ZodPromise",e.ZodBranded="ZodBranded",e.ZodPipeline="ZodPipeline",e.ZodReadonly="ZodReadonly"})(k||(k={}));const An=be.create,ao=Be.create,oo=Ut.create;Se.create;le.create;const io=B.create,lo=wt.create;_t.create;Pe.create;const co=He.create;kt.create;_e.create;Ve.create;io({dependsOn:An().min(1),operator:co(["is","isNot"]),value:lo([An(),ao(),oo()])});const mt=(e,t)=>{const n=t==null;return e==="oneToOne"&&n?"oneWay":e==="oneToMany"&&n?"manyWay":e},uo=e=>[...new Set(e)],Rn=e=>typeof e=="function",po=(e,t)=>{const n={past:[],future:[],current:Rn(e.initialState)?e.initialState():e.initialState},{limit:r=10}=t??{},s=t.stateSelector||(o=>o),a=Object.keys(e.reducers).reduce((o,d)=>{const l=e.reducers[d];if(!Rn(l))throw new Error("Reducer must be a function. prepapre not support in UndoRedo wrapper");return o[d]=(u,p)=>{const x=l(u.current,p);if(t.excludeActionsFromHistory?.includes(d)){x!==void 0&&(u.current=x);return}const h=Nr(u.current);u.past.push(s(h)),u.past.length>r&&u.past.shift(),u.future=[],x!==void 0&&(u.current=x)},o},{});return Ct({name:e.name,initialState:n,reducers:{...a,undo:o=>{if(o.past.length===0)return;const d=o.past.pop();d!==void 0&&(o.future=[o.current,...o.future],o.current={...o.current,...d})},redo:o=>{if(o.future.length===0)return;const d=o.future.shift();d!=null&&(o.past=[...o.past,o.current],o.current={...o.current,...d})},discardAll:o=>{t.discard?t.discard(o.current):o.current=n.current,o.past=[],o.future=[]},clearHistory:o=>{o.past=[],o.future=[]}}})},En={components:{},contentTypes:{},initialComponents:{},initialContentTypes:{},reservedNames:{models:[],attributes:[]},isLoading:!0},In=["oneWay","manyWay"],Mn=e=>e==="manyToOne"?"oneToMany":e==="oneToMany"?"manyToOne":e,ye=(e,t)=>e.attributes.findIndex(({name:n})=>n===t),se=(e,{forTarget:t,targetUid:n})=>t==="contentType"?e.contentTypes[n]:e.components[n],ne=(e,t)=>{switch(e.status){case"NEW":case"REMOVED":break;default:e.status=t}},ur=(e,t)=>e==="NEW"||e==="REMOVED"?e:t,Xe=(e,t)=>{e.status=ur(e.status,t)},Lt=e=>({...e,status:"NEW"}),jn=(e,t,n)=>{const r=e.attributes[t],s=ur(r.status,"CHANGED");e.attributes[t]={...n,status:s},ne(e,"CHANGED")},ut=(e,t)=>{e.attributes.push(t),ne(e,"CHANGED")},Ln=(e,t)=>{const n=e.attributes[t];ne(e,"CHANGED"),n.status==="NEW"?e.attributes.splice(t,1):Xe(n,"REMOVED")},mo=(e,t,n)=>{e.attributes[t]=n,ne(e,"CHANGED")},Ke=(e,t)=>{const n=e.attributes.findIndex(s=>s.name===t),r=e.attributes[n];ne(e,"CHANGED"),r.status==="NEW"?e.attributes.splice(n,1):Xe(r,"REMOVED")},Dn=(e,t)=>{Fr(e,t),ne(e,"CHANGED")};po({name:"data-manager",initialState:En,reducers:{init:(e,t)=>{const{components:n,contentTypes:r,reservedNames:s}=t.payload;e.components=n,e.initialComponents=n,e.initialContentTypes=r,e.contentTypes=r,e.reservedNames=s,e.isLoading=!1},createComponentSchema:(e,t)=>{const{uid:n,data:r,componentCategory:s}=t.payload,a={uid:n,status:"NEW",category:s,modelName:r.displayName,globalId:r.displayName,info:{icon:r.icon,displayName:r.displayName},attributes:[],modelType:"component"};e.components[n]=a},createSchema:(e,t)=>{const{uid:n,data:r}=t.payload,{displayName:s,singularName:a,pluralName:o,kind:d,draftAndPublish:l,pluginOptions:u}=r,p={uid:n,status:"NEW",visible:!0,modelType:"contentType",restrictRelationsTo:null,attributes:[],kind:d,modelName:s,globalId:s,options:{draftAndPublish:l},info:{displayName:s,singularName:a,pluralName:o},pluginOptions:u};e.contentTypes[n]=p},addAttribute:(e,t)=>{const{attributeToSet:n,forTarget:r,targetUid:s}=t.payload,a=se(e,{forTarget:r,targetUid:s}),o=Lt(qr(n,"createComponent"));if(o.type==="relation"){const d=o.target,l=o.targetAttribute||null,u=o.relation,p=mt(u,l);if(!["oneWay","manyWay"].includes(p)){const h=Lt({name:l,relation:Mn(p),target:a.uid,targetAttribute:o.name,type:"relation",private:o.private}),g=se(e,{forTarget:r,targetUid:d});ut(g,h)}}ut(a,o),ne(a,"CHANGED")},moveAttribute:(e,t)=>{const{forTarget:n,targetUid:r,from:s,to:a}=t.payload,o=se(e,{forTarget:n,targetUid:r}),d=o.attributes[s];o.attributes.splice(s,1),o.attributes.splice(a,0,d),ne(o,"CHANGED")},addCustomFieldAttribute:(e,t)=>{const{attributeToSet:n,forTarget:r,targetUid:s}=t.payload,a=se(e,{forTarget:r,targetUid:s});ut(a,Lt(n))},addCreatedComponentToDynamicZone:(e,t)=>{const{dynamicZoneTarget:n,componentsToAdd:r,forTarget:s,targetUid:a}=t.payload,o=se(e,{forTarget:s,targetUid:a}),d=ye(o,n),l=o.attributes[d];r.forEach(u=>{l.components.push(u)}),Xe(l,"CHANGED"),ne(o,"CHANGED")},changeDynamicZoneComponents:(e,t)=>{const{dynamicZoneTarget:n,newComponents:r,forTarget:s,targetUid:a}=t.payload,o=se(e,{forTarget:s,targetUid:a}),d=ye(o,n),l=o.attributes[d],u=l.components,p=uo([...u,...r]);ne(o,"CHANGED"),Xe(l,"CHANGED"),l.components=p},editAttribute:(e,t)=>{const{name:n,attributeToSet:r,forTarget:s,targetUid:a}=t.payload,o=se(e,{forTarget:s,targetUid:a}),d=ye(o,n);if(d===-1)return;const l=o.attributes[d];if(jn(o,d,r),l.type!==r.type||l.type!=="relation"||r.type!=="relation")return;const u=se(e,{forTarget:"contentType",targetUid:l.target}),p=se(e,{forTarget:"contentType",targetUid:r.target}),x=ye(u,l.targetAttribute??"");l.targetAttribute&&Ke(u,l.targetAttribute);const h=mt(r.relation,r.targetAttribute);if(!In.includes(h)){const b={name:r.targetAttribute,type:"relation",relation:Mn(r.relation),targetAttribute:r.name,target:o.uid,private:l.private??r.private,pluginOptions:l.pluginOptions??r.pluginOptions,status:"CHANGED"};x!==-1&&u.uid===p.uid?mo(p,x,b):ut(p,{...b,status:"NEW"})}},editCustomFieldAttribute:(e,t)=>{const{forTarget:n,targetUid:r,name:s,attributeToSet:a}=t.payload,o=s,d=se(e,{forTarget:n,targetUid:r}),l=ye(d,o);jn(d,l,a)},reloadPlugin:()=>En,removeComponentFromDynamicZone:(e,t)=>{const{dzName:n,componentToRemoveIndex:r,forTarget:s,targetUid:a}=t.payload,o=s==="contentType"?e.contentTypes[a]:e.components[a];if(!o)return;const d=ye(o,n),l=o.attributes[d];ne(o,"CHANGED"),Xe(l,"CHANGED"),l.components.splice(r,1)},removeField:(e,t)=>{const{forTarget:n,targetUid:r,attributeToRemoveName:s}=t.payload,a=se(e,{forTarget:n,targetUid:r}),o=ye(a,s),d=a.attributes[o];if(d.type==="relation"){const{target:l,relation:u,targetAttribute:p}=d,x=mt(u,p);if(!In.includes(x)&&p){const g=se(e,{forTarget:n,targetUid:l}),b=ye(g,p);Ln(g,b)}}a.attributes.forEach(l=>{l.type==="uid"&&l.targetField===s&&delete l.targetField}),Ln(a,o)},updateComponentSchema:(e,t)=>{const{data:n,uid:r}=t.payload,s=e.components[r];s&&Dn(s,{info:{displayName:n.displayName,icon:n.icon}})},updateComponentUid:(e,t)=>{const{newComponentUID:n,uid:r}=t.payload,s=e.components[r];if(!(!s||s.status!=="NEW")&&n!==r){const a={...s,uid:n};e.components[n]=a,delete e.components[r],Object.keys(e.contentTypes).forEach(o=>{const d=e.contentTypes[o];d.attributes.forEach(l=>{if(l.type==="dynamiczone"){const u=l.components.map(p=>p===r?n:p);l.components=u}}),d.attributes.forEach(l=>{l.type==="component"&&l.component===r&&(l.component=n)})}),Object.keys(e.components).forEach(o=>{e.components[o].attributes.forEach(l=>{l.type==="component"&&l.component===r&&(l.component=n)})})}},updateSchema:(e,t)=>{const{data:n,uid:r}=t.payload,{displayName:s,kind:a,draftAndPublish:o,pluginOptions:d}=n,l=e.contentTypes[r];l&&Dn(l,{info:{displayName:s},kind:a,options:{draftAndPublish:o},pluginOptions:d})},deleteComponent:(e,t)=>{const n=t.payload;e.components[n].status==="NEW"?delete e.components[n]:ne(e.components[n],"REMOVED"),Object.keys(e.contentTypes).forEach(r=>{const s=e.contentTypes[r];s.attributes.forEach(a=>{if(a.type==="dynamiczone"){const o=a.components.filter(d=>d!==n);a.components=o}}),s.attributes.forEach(a=>{a.type==="component"&&a.component===n&&Ke(s,a.name)})}),Object.keys(e.components).forEach(r=>{const s=e.components[r];s.attributes.forEach(a=>{a.type==="component"&&a.component===n&&Ke(s,a.name)})})},deleteContentType:(e,t)=>{const n=t.payload,r=e.contentTypes[n];r.status==="NEW"?delete e.contentTypes[n]:ne(r,"REMOVED"),Object.keys(e.components).forEach(s=>{const a=e.components[s];a.attributes.forEach(o=>{o.type==="relation"&&o.target===n&&Ke(a,o.name)})}),Object.keys(e.contentTypes).forEach(s=>{const a=e.contentTypes[s];a.attributes.forEach(o=>{o.type==="relation"&&o.target===n&&Ke(a,o.name)})})},applyChange(e,t){const{action:n,schema:r}=t.payload;switch(n){case"add":{const s=r.uid;r.modelType==="component"?e.components[s]=r:e.contentTypes[s]=r}break;case"update":{const s=r.uid;if(r.modelType==="component"){const a=e.components[s];e.components[s]={...r,status:a?.status==="NEW"?"NEW":r.status}}else{const a=e.contentTypes[s];e.contentTypes[s]={...r,status:a?.status==="NEW"?"NEW":r.status}}}break;case"delete":{const s=r.uid;if(r.modelType==="component"){if(!e.components[s])return;e.components[s]?.status==="NEW"?delete e.components[s]:e.components[s].status="REMOVED"}else{if(!e.contentTypes[s])return;e.contentTypes[s]?.status==="NEW"?delete e.contentTypes[s]:e.contentTypes[s].status="REMOVED"}break}}}}},{limit:50,excludeActionsFromHistory:["reloadPlugin","init"],stateSelector:e=>e?{components:e.components,contentTypes:e.contentTypes}:{},discard:e=>{e.components=e.initialComponents,e.contentTypes=e.initialContentTypes}});const Le=e=>Ur(e,{separator:"-"}),ho=(e,t)=>`${Le(t)}.${Le(e)}`,pr=(e,t)=>{if(t.items)return t.items.reduce(pr,e);if("defaultValue"in t){const{name:n,defaultValue:r}=t;e.push({name:n,defaultValue:r})}return e},Dt=e=>["manyToMany","oneToMany","manyWay"].includes(e)?2:1,Pn=e=>["manyToMany","manyToOne"].includes(e)?2:1,Ye={formErrors:{},modifiedData:{},initialData:{},componentToCreate:{},isCreatingComponentWhileAddingAField:!1};Ct({name:"formModal",initialState:Ye,reducers:{onChange:(e,t)=>{const{keys:n,value:r}=t.payload,s=e.modifiedData;if(!!s.default&&n.length===1&&n.includes("type")){const o=s.type;o&&["date","datetime","time"].includes(o)&&delete e.modifiedData.default}V(e,["modifiedData",...n],r)},onChangeRelationTarget:(e,t)=>{const{target:{oneThatIsCreatingARelationWithAnother:n,selectedContentTypeFriendlyName:r,targetContentTypeAllowedRelations:s,value:a}}=t.payload;let o=!1,d=null;V(e,["modifiedData","target"],a);const l=e.modifiedData;if(Array.isArray(s)){const h=mt(l.relation,l.targetAttribute);if(h&&!s.includes(h)){const g=s[0];o=!0,d=g,g==="oneWay"?V(e,["modifiedData","relation"],"oneToOne"):g==="manyWay"?V(e,["modifiedData","relation"],"oneToMany"):V(e,["modifiedData","relation"],g)}}let u;if(o&&d?u=Ie(ge(Le(r)),Dt(d)):u=Ie(ge(Le(r)),Dt(l.relation)),V(e,["modifiedData","name"],u),e.modifiedData.targetAttribute===null)return;if(o&&d&&["oneWay","manyWay"].includes(d)){V(e,["modifiedData","targetAttribute"],null);return}const x=Ie(ge(Le(n)),Pn(l.relation));V(e,["modifiedData","targetAttribute"],x)},onChangeRelationType:(e,t)=>{const{target:{oneThatIsCreatingARelationWithAnother:n,value:r}}=t.payload,s=e.modifiedData.name;if(!["oneWay","manyWay"].includes(r)){V(e,["modifiedData","relation"],r);const a=e.modifiedData.targetAttribute;V(e,["modifiedData","name"],Ie(ge(Le(s)),Dt(r))),V(e,["modifiedData","targetAttribute"],Ie(a||ge(Le(n)),Pn(r)));return}if(r==="oneWay"){V(e,["modifiedData","relation"],"oneToOne"),V(e,["modifiedData","targetAttribute"],null),V(e,["modifiedData","name"],Ie(ge(s),1));return}V(e,["modifiedData","relation"],"oneToMany"),V(e,["modifiedData","targetAttribute"],null),V(e,["modifiedData","name"],Ie(ge(s),2))},resetProps:()=>Ye,resetPropsAndSetFormForAddingAnExistingCompo:(e,t)=>{const{options:n={}}=t.payload;return{...Ye,modifiedData:{type:"component",repeatable:!0,...n}}},resetPropsAndSaveCurrentData:(e,t)=>{const{options:n={}}=t.payload,r=e.modifiedData.componentToCreate,s={displayName:r.displayName,type:"component",repeatable:!1,...n,component:ho(r.displayName,r.category)};return{...Ye,componentToCreate:r,modifiedData:s,isCreatingComponentWhileAddingAField:e.modifiedData.createComponent}},resetPropsAndSetTheFormForAddingACompoToADz:e=>{const n={...e.modifiedData,createComponent:!0,componentToCreate:{type:"component"}};return{...Ye,modifiedData:n}},setDataToEdit:(e,t)=>{const{data:n}=t.payload;e.modifiedData=n,e.initialData=n},setAttributeDataSchema:(e,t)=>{const{isEditing:n}=t.payload;if(n===!0){const{modifiedDataToSetForEditing:u}=t.payload;e.modifiedData=u,e.initialData=u;return}const{attributeType:r,nameToSetForRelation:s,targetUid:a,step:o,options:d={}}=t.payload;let l;r==="component"?o==="1"?l={type:"component",createComponent:!0,componentToCreate:{type:"component"}}:l={...d,type:"component",repeatable:!0}:r==="dynamiczone"?l={...d,type:"dynamiczone",components:[]}:r==="text"?l={...d,type:"string"}:r==="number"||r==="date"?l=d:r==="media"?l={allowedTypes:["images","files","videos","audios"],type:"media",multiple:!0,...d}:r==="enumeration"?l={...d,type:"enumeration",enum:[]}:r==="relation"?l={name:ge(s),relation:"oneToOne",targetAttribute:null,target:a,type:"relation"}:l={...d,type:r,default:null},e.modifiedData=l},setCustomFieldDataSchema:(e,t)=>{const{payload:n}=t;if(n.isEditing===!0){const{modifiedDataToSetForEditing:d}=t.payload;e.modifiedData=d,e.initialData=d;return}const{customField:r,options:s={}}=n;e.modifiedData={...s,type:r.type};const o=[...r?.options?.base||[],...r?.options?.advanced||[]].reduce(pr,[]);o.length&&o.forEach(({name:d,defaultValue:l})=>V(e.modifiedData,d,l))},setDynamicZoneDataSchema:(e,t)=>{const{attributeToEdit:n}=t.payload;e.modifiedData=n,e.initialData=n},setErrors:(e,t)=>{e.formErrors=t.payload.errors}}});var fo=function(e){console.error(e)},go=function(e){console.warn(e)},yo={formats:{},messages:{},timeZone:void 0,defaultLocale:"en",defaultFormats:{},fallbackOnEmptyString:!0,onError:fo,onWarn:go};const vo=Zn`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  `;c(Gr)`
  animation: ${vo} 1s infinite linear;
`;c($)`
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
`;c(C)`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    > path {
      fill: ${({theme:e})=>e.colors.primary600} !important;
    }
  }
`;const ve="single-types";Y("DocumentRBAC",{canCreate:!1,canCreateFields:[],canDelete:!1,canPublish:!1,canRead:!1,canReadFields:[],canUpdate:!1,canUpdateFields:[],canUserAction:()=>!1,isLoading:!1});const We=oe.enhanceEndpoints({addTagTypes:["ComponentConfiguration","ContentTypesConfiguration","ContentTypeSettings","Document","InitialData","HistoryVersion","Relations","UidAvailability","RecentDocumentList","GuidedTourMeta","CountDocuments","UpcomingReleasesList"]}),mr=We.injectEndpoints({overrideExisting:!0,endpoints:e=>({autoCloneDocument:e.mutation({query:({model:t,sourceId:n,params:r})=>({url:`/content-manager/collection-types/${t}/auto-clone/${n}`,method:"POST",config:{params:r}}),invalidatesTags:(t,n,{model:r})=>n?[]:[{type:"Document",id:`${r}_LIST`},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),cloneDocument:e.mutation({query:({model:t,sourceId:n,data:r,params:s})=>({url:`/content-manager/collection-types/${t}/clone/${n}`,method:"POST",data:r,config:{params:s}}),invalidatesTags:(t,n,{model:r})=>[{type:"Document",id:`${r}_LIST`},{type:"UidAvailability",id:r},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),createDocument:e.mutation({query:({model:t,data:n,params:r})=>({url:`/content-manager/collection-types/${t}`,method:"POST",data:n,config:{params:r}}),invalidatesTags:(t,n,{model:r})=>[{type:"Document",id:`${r}_LIST`},"Relations",{type:"UidAvailability",id:r},"RecentDocumentList","CountDocuments","UpcomingReleasesList"],transformResponse:(t,n,r)=>!("data"in t)&&r.model==="plugin::users-permissions.user"?{data:t,meta:{availableStatus:[],availableLocales:[]}}:t}),deleteDocument:e.mutation({query:({collectionType:t,model:n,documentId:r,params:s})=>({url:`/content-manager/${t}/${n}${t!==ve&&r?`/${r}`:""}`,method:"DELETE",config:{params:s}}),invalidatesTags:(t,n,{collectionType:r,model:s})=>[{type:"Document",id:r!==ve?`${s}_LIST`:s},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),deleteManyDocuments:e.mutation({query:({model:t,params:n,...r})=>({url:`/content-manager/collection-types/${t}/actions/bulkDelete`,method:"POST",data:r,config:{params:n}}),invalidatesTags:(t,n,{model:r})=>[{type:"Document",id:`${r}_LIST`},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),discardDocument:e.mutation({query:({collectionType:t,model:n,documentId:r,params:s})=>({url:r?`/content-manager/${t}/${n}/${r}/actions/discard`:`/content-manager/${t}/${n}/actions/discard`,method:"POST",config:{params:s}}),invalidatesTags:(t,n,{collectionType:r,model:s,documentId:a})=>[{type:"Document",id:r!==ve?`${s}_${a}`:s},{type:"Document",id:`${s}_LIST`},"Relations",{type:"UidAvailability",id:s},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),getAllDocuments:e.query({query:({model:t,params:n})=>({url:`/content-manager/collection-types/${t}`,method:"GET",config:{params:zr.stringify(n,{encode:!0})}}),providesTags:(t,n,r)=>[{type:"Document",id:"ALL_LIST"},{type:"Document",id:`${r.model}_LIST`},...t?.results.map(({documentId:s})=>({type:"Document",id:`${r.model}_${s}`}))??[]]}),getDraftRelationCount:e.query({query:({collectionType:t,model:n,documentId:r,params:s})=>({url:r?`/content-manager/${t}/${n}/${r}/actions/countDraftRelations`:`/content-manager/${t}/${n}/actions/countDraftRelations`,method:"GET",config:{params:s}})}),getDocument:e.query({queryFn:async({collectionType:t,model:n,documentId:r,params:s},a,o,d)=>{const l=await d({url:`/content-manager/${t}/${n}${r?`/${r}`:""}`,method:"GET",config:{params:s}});return l.error&&l.error.name==="NotFoundError"&&t===ve?{data:{document:void 0},error:void 0}:l},providesTags:(t,n,{collectionType:r,model:s,documentId:a})=>[{type:"Document",id:r!==ve?`${s}_${t&&"documentId"in t?t.documentId:a}`:s},{type:"Document",id:`${s}_ALL_ITEMS`}]}),getManyDraftRelationCount:e.query({query:({model:t,...n})=>({url:`/content-manager/collection-types/${t}/actions/countManyEntriesDraftRelations`,method:"GET",config:{params:n}}),transformResponse:t=>t.data}),publishDocument:e.mutation({query:({collectionType:t,model:n,documentId:r,params:s,data:a})=>({url:r?`/content-manager/${t}/${n}/${r}/actions/publish`:`/content-manager/${t}/${n}/actions/publish`,method:"POST",data:a,config:{params:s}}),invalidatesTags:(t,n,{collectionType:r,model:s,documentId:a})=>[{type:"Document",id:r!==ve?`${s}_${a}`:s},{type:"Document",id:`${s}_LIST`},"Relations","RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),publishManyDocuments:e.mutation({query:({model:t,params:n,...r})=>({url:`/content-manager/collection-types/${t}/actions/bulkPublish`,method:"POST",data:r,config:{params:n}}),invalidatesTags:(t,n,{model:r,documentIds:s})=>[...s.map(a=>({type:"Document",id:`${r}_${a}`})),"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),updateDocument:e.mutation({query:({collectionType:t,model:n,documentId:r,data:s,params:a})=>({url:`/content-manager/${t}/${n}${r?`/${r}`:""}`,method:"PUT",data:s,config:{params:a}}),invalidatesTags:(t,n,{collectionType:r,model:s,documentId:a})=>[{type:"Document",id:r!==ve?`${s}_${a}`:s},"Relations",{type:"UidAvailability",id:s},"RecentDocumentList","CountDocuments","UpcomingReleasesList"],async onQueryStarted({data:t,...n},{dispatch:r,queryFulfilled:s}){const a=r(mr.util.updateQueryData("getDocument",n,o=>{Object.assign(o.data,t)}));try{await s}catch{a.undo()}},transformResponse:(t,n,r)=>!("data"in t)&&r.model==="plugin::users-permissions.user"?{data:t,meta:{availableStatus:[],availableLocales:[]}}:t}),unpublishDocument:e.mutation({query:({collectionType:t,model:n,documentId:r,params:s,data:a})=>({url:r?`/content-manager/${t}/${n}/${r}/actions/unpublish`:`/content-manager/${t}/${n}/actions/unpublish`,method:"POST",data:a,config:{params:s}}),invalidatesTags:(t,n,{collectionType:r,model:s,documentId:a})=>[{type:"Document",id:r!==ve?`${s}_${a}`:s},"RecentDocumentList","CountDocuments","UpcomingReleasesList"]}),unpublishManyDocuments:e.mutation({query:({model:t,params:n,...r})=>({url:`/content-manager/collection-types/${t}/actions/bulkUnpublish`,method:"POST",data:r,config:{params:n}}),invalidatesTags:(t,n,{model:r,documentIds:s})=>[...s.map(a=>({type:"Document",id:`${r}_${a}`})),"RecentDocumentList","CountDocuments","UpcomingReleasesList"]})})}),{useAutoCloneDocumentMutation:cd,useCloneDocumentMutation:ud,useCreateDocumentMutation:pd,useDeleteDocumentMutation:md,useDeleteManyDocumentsMutation:hd,useDiscardDocumentMutation:fd,useGetAllDocumentsQuery:gd,useLazyGetDocumentQuery:yd,useGetDocumentQuery:vd,useLazyGetDraftRelationCountQuery:Td,useGetManyDraftRelationCountQuery:xd,usePublishDocumentMutation:bd,usePublishManyDocumentsMutation:wd,useUpdateDocumentMutation:_d,useUnpublishDocumentMutation:kd,useUnpublishManyDocumentsMutation:Cd}=mr,To=We.injectEndpoints({endpoints:e=>({getInitialData:e.query({query:()=>"/content-manager/init",transformResponse:t=>t.data,providesTags:["InitialData"]})})}),{useGetInitialDataQuery:$d}=To,xo=We.injectEndpoints({endpoints:e=>({getContentTypeConfiguration:e.query({query:t=>({url:`/content-manager/content-types/${t}/configuration`,method:"GET"}),transformResponse:t=>t.data,providesTags:(t,n,r)=>[{type:"ContentTypesConfiguration",id:r},{type:"ContentTypeSettings",id:"LIST"}]}),getAllContentTypeSettings:e.query({query:()=>"/content-manager/content-types-settings",transformResponse:t=>t.data,providesTags:[{type:"ContentTypeSettings",id:"LIST"}]}),updateContentTypeConfiguration:e.mutation({query:({uid:t,...n})=>({url:`/content-manager/content-types/${t}/configuration`,method:"PUT",data:n}),transformResponse:t=>t.data,invalidatesTags:(t,n,{uid:r})=>[{type:"ContentTypesConfiguration",id:r},{type:"ContentTypeSettings",id:"LIST"},{type:"InitialData"}]})})}),{useGetContentTypeConfigurationQuery:Sd,useGetAllContentTypeSettingsQuery:Ad,useUpdateContentTypeConfigurationMutation:Rd}=xo,bo=(e=!0)=>{const n=window.STRAPI_HIGHLIGHT_HOVER_COLOR??"#4945ff",r=window.STRAPI_HIGHLIGHT_ACTIVE_COLOR??"#7b79ff",s="strapi-preview-highlight-styles",a=300,o=window.STRAPI_DISABLE_STEGA_DECODING??!1,d="data-strapi-source",l="strapi-preview-overlay",u={STRAPI_FIELD_FOCUS:"strapiFieldFocus",STRAPI_FIELD_BLUR:"strapiFieldBlur",STRAPI_FIELD_CHANGE:"strapiFieldChange",STRAPI_FIELD_FOCUS_INTENT:"strapiFieldFocusIntent",STRAPI_FIELD_SINGLE_CLICK_HINT:"strapiFieldSingleClickHint"};if(!e)return{INTERNAL_EVENTS:u};const p=(w,I)=>{window.parent.postMessage({type:w,payload:I},"*")},x=w=>document.querySelectorAll(`[${d}*="path=${w}"]`),h=async()=>{if(o)return;const{vercelStegaDecode:w,vercelStegaClean:I}=await Br(()=>import("https://cdn.jsdelivr.net/npm/@vercel/stega@0.1.2/+esm"),[]),L=M=>{const D=Array.from(M.childNodes).filter(F=>F.nodeType===Node.TEXT_NODE),O=D.map(F=>F.textContent||"").join("");if(O)try{const F=w(O);F&&"strapiSource"in F&&(M.setAttribute(d,F.strapiSource),D.forEach(te=>{if(te.textContent){const S=I(te.textContent);S!==te.textContent&&(te.textContent=S)}}))}catch{}},U=document.querySelectorAll("*");Array.from(U).forEach(L);const A=new MutationObserver(M=>{M.forEach(D=>{D.type==="childList"&&D.addedNodes.forEach(O=>{if(O.nodeType===Node.ELEMENT_NODE){const F=O;L(F);const te=F.querySelectorAll("*");Array.from(te).forEach(L)}}),D.type==="characterData"&&D.target.parentElement&&L(D.target.parentElement)})});return A.observe(document,{childList:!0,subtree:!0,characterData:!0}),A},g=()=>{const w=document.getElementById(s);w&&w.remove();const I=document.createElement("style");return I.id=s,I.textContent=`
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
    `,document.head.appendChild(I),I},b=()=>{window.__strapi_previewCleanup?.(),document.getElementById(l)?.remove();const w=document.createElement("div");return w.id=l,w.style.cssText=`
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
    `,window.document.body.appendChild(w),w},W=w=>{const I=new Map,L=[],U=[],A=new Map;let M=null;const D=(T,q)=>{if(!q)return;const X=T.getBoundingClientRect();q.style.width=`${X.width+2*2}px`,q.style.height=`${X.height+2*2}px`,q.style.transform=`translate(${X.left-2}px, ${X.top-2}px)`},O=()=>{I.forEach((T,q)=>{D(q,T)})},F=T=>{if(I.has(T))return;const q=document.createElement("div");q.className="strapi-highlight";const X=Z=>{if(Z.__strapi_redispatched)return;Z.preventDefault(),Z.stopPropagation();const Ee=A.get(T);Ee&&(window.clearTimeout(Ee),A.delete(T));const dt=window.setTimeout(()=>{A.delete(T),p(u.STRAPI_FIELD_SINGLE_CLICK_HINT,null);const ue=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window,detail:1,button:Z.button,buttons:Z.buttons,clientX:Z.clientX,clientY:Z.clientY,ctrlKey:Z.ctrlKey,altKey:Z.altKey,shiftKey:Z.shiftKey,metaKey:Z.metaKey});ue.__strapi_redispatched=!0,T.dispatchEvent(ue)},a);A.set(T,dt)},fe=Z=>{Z.preventDefault(),Z.stopPropagation();const Ee=A.get(T);Ee&&(clearTimeout(Ee),A.delete(T));const dt=T.getAttribute(d);if(dt){const ue=T.getBoundingClientRect();p(u.STRAPI_FIELD_FOCUS_INTENT,{path:dt,position:{top:ue.top,left:ue.left,right:ue.right,bottom:ue.bottom,width:ue.width,height:ue.height}})}},ee=Z=>{Z.detail>=2&&Z.preventDefault()};q.addEventListener("click",X),q.addEventListener("dblclick",fe),q.addEventListener("mousedown",ee),L.push({element:q,type:"click",handler:X},{element:q,type:"dblclick",handler:fe},{element:q,type:"mousedown",handler:ee}),I.set(T,q),w.appendChild(q),D(T,q)},te=T=>{const q=I.get(T);if(!q)return;const X=A.get(T);X&&(window.clearTimeout(X),A.delete(T)),q.remove(),I.delete(T),L.filter(ee=>ee.element===q).forEach(({element:ee,type:Z,handler:Ee})=>{ee.removeEventListener(Z,Ee)}),L.splice(0,L.length,...L.filter(ee=>ee.element!==q))},S=window.document.querySelectorAll(`[${d}]`);return Array.from(S).forEach(T=>{T instanceof HTMLElement&&F(T)}),{get elements(){return Array.from(I.keys())},get highlights(){return Array.from(I.values())},updateAllHighlights:O,eventListeners:L,focusedHighlights:U,createHighlightForElement:F,removeHighlightForElement:te,setFocusedField:T=>{M=T},getFocusedField:()=>M,clearAllPendingClicks:()=>{A.forEach(T=>clearTimeout(T)),A.clear()}}},Q=w=>{const I=()=>{w.updateAllHighlights()},L=new Set;return L.add(window),w.elements.forEach(A=>{let M=A.parentElement;for(;M;){const D=window.getComputedStyle(M),O=D.overflow+D.overflowX+D.overflowY;(O.includes("scroll")||O.includes("auto"))&&L.add(M),M=M.parentElement}}),L.forEach(A=>{A===window?(window.addEventListener("scroll",I),window.addEventListener("resize",I)):A.addEventListener("scroll",I)}),{cleanup:()=>{L.forEach(A=>{A===window?(window.removeEventListener("scroll",I),window.removeEventListener("resize",I)):A.removeEventListener("scroll",I)})}}},Re=(w,I)=>{const L=new ResizeObserver(()=>{w.updateAllHighlights()}),U=M=>{L.observe(M)};w.elements.forEach(U),L.observe(document.documentElement);const A=new MutationObserver(M=>{M.forEach(D=>{if(D.type==="attributes"&&D.attributeName===d){const O=D.target;O.hasAttribute(d)?(w.createHighlightForElement(O),U(O)):w.removeHighlightForElement(O)}D.type==="childList"&&(D.addedNodes.forEach(O=>{if(O.nodeType===Node.ELEMENT_NODE){const F=O;F.hasAttribute(d)&&F instanceof HTMLElement&&(w.createHighlightForElement(F),U(F));const te=F.querySelectorAll(`[${d}]`);Array.from(te).forEach(S=>{S instanceof HTMLElement&&(w.createHighlightForElement(S),U(S))})}}),D.removedNodes.forEach(O=>{if(O.nodeType===Node.ELEMENT_NODE){const F=O;w.removeHighlightForElement(F)}}))})});return A.observe(document,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[d]}),{resizeObserver:L,highlightObserver:A,stegaObserver:I}},z=w=>{const I=U=>{if(U.data?.type){if(U.data.type===u.STRAPI_FIELD_CHANGE){const{field:A,value:M}=U.data.payload;if(!A)return;x(A).forEach(D=>{D instanceof HTMLElement&&(D.textContent=M||"")}),w.updateAllHighlights();return}if(U.data.type===u.STRAPI_FIELD_FOCUS){const{field:A}=U.data.payload;if(!A)return;w.focusedHighlights.forEach(M=>{M.classList.remove("strapi-highlight-focused")}),w.focusedHighlights.length=0,w.setFocusedField(A),x(A).forEach((M,D)=>{D===0&&M.scrollIntoView({behavior:"smooth",block:"center"});const O=w.highlights[Array.from(w.elements).indexOf(M)];O&&(O.classList.add("strapi-highlight-focused"),w.focusedHighlights.push(O))});return}if(U.data.type===u.STRAPI_FIELD_BLUR){const{field:A}=U.data.payload;if(A!==w.getFocusedField())return;w.focusedHighlights.forEach(M=>{M.classList.remove("strapi-highlight-focused")}),w.focusedHighlights.length=0,w.setFocusedField(null)}}};window.addEventListener("message",I);const L={element:window,type:"message",handler:I};return[...w.eventListeners,L]},It=(w,I,L,U,A)=>{window.__strapi_previewCleanup=()=>{I.resizeObserver.disconnect(),I.highlightObserver.disconnect(),I.stegaObserver?.disconnect(),L.cleanup(),A.clearAllPendingClicks(),U.forEach(({element:D,type:O,handler:F})=>{D.removeEventListener(O,F)});const M=document.getElementById(s);M&&M.remove(),w.remove()}};h().then(w=>{g();const I=b(),L=W(I),U=Re(L,w),A=Q(L),M=z(L);It(I,U,A,M,L)})},wo=bo(!1);wo.INTERNAL_EVENTS;Y("InputPopover");c.pre`
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
`;c($)`
  transition-property: box-shadow;
  transition-duration: 0.2s;
  ${e=>e.$isFocused&&Ce`
      box-shadow: ${e.theme.colors.primary600} 0px 0px 0px 3px;
    `}

  & > img {
    height: auto;
    // The max-height is decided with the design team, the 56px is the height of the toolbar
    max-height: calc(512px - 56px);
    max-width: 100%;
    object-fit: contain;
  }
`;c(C)`
  text-decoration: none;
`;c(we)`
  visibility: ${e=>e.$visible?"visible":"hidden"};
`;const hr=Ce`
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
  ${hr}
`;c.ul`
  list-style-type: ${e=>e.$listStyleType};
  ${hr}
`;c.blockquote.attrs({role:"blockquote"})`
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  border-left: ${({theme:e})=>`${e.spaces[1]} solid ${e.colors.neutral200}`};
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
  color: ${({theme:e})=>e.colors.neutral600};
`;const On={UPWARD:"upward",DOWNWARD:"downward"};c($)`
  &[aria-disabled='true'] {
    cursor: not-allowed;
    background: ${({theme:e})=>e.colors.neutral150};
  }
`;c(Hr)`
  background: ${({theme:e})=>e.colors.neutral150};
  width: 1px;
  height: 2.4rem;
  margin-left: 0.8rem;
  margin-right: 0.8rem;
`;c($)`
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
`;c(C)`
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
`;c($t.Item)`
  ${e=>e.isActive&&Ce`
      color: ${({theme:t})=>t.colors.primary600};
      font-weight: 600;
    `}

  svg {
    fill: ${({theme:e,isActive:t})=>t?e.colors.primary600:e.colors.neutral500};
  }
`;c(Zr)`
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
`;c(C)`
  position: ${({isOverDropTarget:e})=>e&&"relative"};
`;c(C)`
  position: absolute;
  right: 0;

  // Show drop placeholder 8px above or below the drop target
  ${({dragDirection:e,theme:t,placeholderMargin:n})=>Ce`
    top: ${e===On.UPWARD&&`-${t.spaces[n]}`};
    bottom: ${e===On.DOWNWARD&&`-${t.spaces[n]}`};
  `}
`;c($)`
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
`;c(vt)`
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
`;c($)`
  border: 1px solid
    ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};

  ${({theme:e,$hasError:t=!1})=>Ce`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    &:focus-within {
      border: 1px solid ${t?e.colors.danger600:e.colors.primary600};
      box-shadow: ${t?e.colors.danger600:e.colors.primary600} 0px 0px 0px 2px;
    }
  `}

  ${({theme:e,$disabled:t})=>t?Ce`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`;const Rt=Ce`
  font-size: inherit;
  color: inherit;
  line-height: inherit;
`;c(N).attrs({fontWeight:"bold"})`
  ${Rt}
`;c(N)`
  font-style: italic;
  ${Rt}
`;c(N).attrs({textDecoration:"underline"})`
  ${Rt}
`;c(N).attrs({textDecoration:"line-through"})`
  ${Rt}
`;c.code`
  background-color: ${({theme:e})=>e.colors.neutral150};
  border-radius: ${({theme:e})=>e.borderRadius};
  padding: ${({theme:e})=>`0 ${e.spaces[2]}`};
  font-family: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas,
    monospace;
  color: inherit;
`;Y("BlocksEditor");c(Vr)`
  background: ${({theme:e})=>e.colors.neutral200};
`;Y("ComponentContext",{id:void 0,level:-1,uid:void 0,type:void 0});c(Vn.Root)`
  border: 1px solid
    ${({theme:e,$error:t})=>t?e.colors.danger600:e.colors.neutral200};
`;c(Wn)`
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
`;c(C)`
  display: block;
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
`;c(Wr)`
  height: ${({theme:e})=>e.spaces[6]};
  width: ${({theme:e})=>e.spaces[6]};
  transform: ${({$isOpen:e})=>e?"rotate(45deg)":"rotate(0deg)"};

  > circle {
    fill: ${({theme:e,$hasError:t})=>t?e.colors.danger200:e.colors.neutral150};
  }
  > path {
    fill: ${({theme:e,$hasError:t})=>t?e.colors.danger600:e.colors.neutral500};
  }
`;c(we)`
  padding-left: ${({theme:e})=>e.spaces[3]};
  border-radius: 26px;
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  height: 5rem;
`;c(Vn.Content)`
  container-type: inline-size;
`;c(C)`
        display: grid;
        grid-template-columns: repeat(auto-fill, 100%);
        grid-gap: 4px;

        ${({theme:e})=>e.breakpoints.medium} {
          grid-template-columns: repeat(auto-fill, 14rem);
        }
      `;c($)`
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
`;c(C)`
  > div:first-child {
    box-shadow: ${({theme:e})=>e.shadows.tableShadow};
  }
`;c(C)`
  border-radius: 0 0 ${({theme:e})=>e.spaces[1]} ${({theme:e})=>e.spaces[1]};
`;c(C)`
  width: ${({theme:e})=>e.spaces[2]};
  height: ${({theme:e})=>e.spaces[4]};
`;c.span`
  display: block;
  background-color: ${({theme:e})=>e.colors.primary100};
  outline: 1px dashed ${({theme:e})=>e.colors.primary500};
  outline-offset: -1px;
  padding: ${({theme:e})=>e.spaces[6]};
`;c(C)`
  list-style: none;
  padding: 0;
  margin: 0;
`;Y("DynamicZone",{isInDynamicZone:!1});const _o=We.injectEndpoints({endpoints:e=>({getRelations:e.query({query:({model:t,id:n,targetField:r,params:s})=>({url:`/content-manager/relations/${t}/${n}/${r}`,method:"GET",config:{params:s}}),serializeQueryArgs:t=>{const{endpointName:n,queryArgs:r}=t;return{endpointName:n,model:r.model,id:r.id,targetField:r.targetField,locale:r.params?.locale,status:r.params?.status}},merge:(t,n)=>{t.pagination&&n.pagination&&(t.pagination.page<n.pagination.page?(t.results=[...Pt(n.results,t.results),...t.results],t.pagination=n.pagination):n.pagination.page===1&&(t.results=Pt(n.results),t.pagination=n.pagination))},forceRefetch({currentArg:t,previousArg:n}){return!t?.params&&!n?.params?!1:t?.params?.page!==n?.params?.page||t?.params?.pageSize!==n?.params?.pageSize},transformResponse:t=>"results"in t&&t.results?{...t,results:Pt(t.results.toReversed())}:t,providesTags:["Relations"]}),searchRelations:e.query({query:({model:t,targetField:n,params:r})=>({url:`/content-manager/relations/${t}/${n}`,method:"GET",config:{params:r}}),serializeQueryArgs:t=>{const{endpointName:n,queryArgs:r}=t;return{endpointName:n,model:r.model,targetField:r.targetField,_q:r.params?._q,idsToOmit:r.params?.idsToOmit,idsToInclude:r.params?.idsToInclude}},merge:(t,n)=>{if(t.pagination&&n.pagination)if(t.pagination.page<n.pagination.page){const r=t.results.map(a=>a.documentId),s=n.results.filter(a=>!r.includes(a.documentId));t.results.push(...s),t.pagination=n.pagination}else n.pagination.page===1&&(t.results=n.results,t.pagination=n.pagination)},forceRefetch({currentArg:t,previousArg:n}){return!t?.params&&!n?.params?!1:t?.params?.page!==n?.params?.page||t?.params?.pageSize!==n?.params?.pageSize},transformResponse:t=>t.results?{...t,results:t.results}:t})})}),Pt=(e,t=[])=>{const[n]=t.slice(0),r=Qr(null,n?.__temp_key__??null,e.length);return e.map((s,a)=>({...s,__temp_key__:r[a]}))},{useGetRelationsQuery:Ed,useLazySearchRelationsQuery:Id}=_o;c($)`
  & > div {
    width: 100%;
  }
`;c(C)`
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
`;c($)`
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
`;c(Bn)`
  display: block;

  & > span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }
`;const ko=We.injectEndpoints({endpoints:e=>({getDefaultUID:e.query({query:({params:t,...n})=>({url:"/content-manager/uid/generate",method:"POST",data:n,config:{params:t}}),transformResponse:t=>t.data}),generateUID:e.mutation({query:({params:t,...n})=>({url:"/content-manager/uid/generate",method:"POST",data:n,config:{params:t}}),transformResponse:t=>t.data}),getAvailability:e.query({query:({params:t,...n})=>({url:"/content-manager/uid/check-availability",method:"POST",data:n,config:{params:t}}),providesTags:(t,n,r)=>[{type:"UidAvailability",id:r.contentTypeUID}]})})}),{useGenerateUIDMutation:Md,useGetDefaultUIDQuery:jd,useGetAvailabilityQuery:Ld}=ko;c(J.Action)`
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
`;c($)`
  svg {
    height: 1.2rem;
    width: 1.2rem;

    path {
      fill: ${({theme:e,$available:t})=>t?e.colors.success600:e.colors.danger600};
    }
  }
`;const Co=Zn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;c($)`
  animation: ${Co} 2s infinite linear;
`;const et=new Kr({html:!0,xhtmlOut:!1,breaks:!0,langPrefix:"language-",linkify:!0,typographer:!0,highlight(e,t){if(t&&t!=="auto"&&Mt.getLanguage(t))return'<pre class="hljs language-'+et.utils.escapeHtml(t.toLowerCase())+'"><code>'+Mt.highlight(t,e,!0).value+"</code></pre>";if(t==="auto"){const n=Mt.highlightAuto(e);return'<pre class="hljs language-'+et.utils.escapeHtml(n.language)+'"><code>'+n.value+"</code></pre>"}return'<pre class="hljs"><code>'+et.utils.escapeHtml(e)+"</code></pre>"}}).use(Yr).use(nn,"warning").use(nn,"tip").use(Jr).use(Xr).use(es).use(ts).use(ns).use(rs).use(ss);et.renderer.rules.footnote_ref=(e,t,n,r,s)=>'<sup class="footnote-ref"><span>'+s.rules.footnote_caption?.(e,t,n,r,s)+"</span></sup>";et.renderer.rules.footnote_anchor=()=>' <span class="footnote-backref">↩︎</span>';c.div`
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
`;c(C)`
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
`;c(we)`
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
`;c(Qn)`
  margin-left: ${({theme:e})=>e.spaces[4]};
`;c(vt)`
  margin: ${({theme:e})=>`0 ${e.spaces[2]}`};
`;c(Qn)`
  margin-right: ${({theme:e})=>`${e.spaces[2]}`};
`;c(we)`
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
`;c(de.Root)`
  container-type: inline-size;
`;c(de.Item)`
        grid-column: span 12;
        ${({theme:e})=>e.breakpoints.medium} {
          ${({col:e})=>e&&`grid-column: span ${e};`}
        }
      `;c(Qt.Trigger)`
  text-transform: uppercase;
`;c(N)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;c(Qt.Trigger)`
  text-transform: uppercase;
`;c($)`
  border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
`;const $o=We.injectEndpoints({endpoints:e=>({getPreviewUrl:e.query({query({query:t,params:n}){return{url:`/content-manager/preview/url/${n.contentType}`,method:"GET",config:{params:t}}}})})}),{useGetPreviewUrlQuery:Dd}=$o;Y("PreviewPage");c(as)`
  will-change: transform;
  rotate: ${e=>e.$isSideEditorOpen?"0deg":"180deg"};
  transition: rotate 0.2s ease-in-out;
`;c(os.Content)`
  width: 90%;
  max-width: 100%;
  height: 90%;
  max-height: 100%;
`;Y("RelationModal");c(Wn)`
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
`;c(is)`
  width: 100%;
  table-layout: fixed;
  td:first-child {
    border-right: 1px solid ${({theme:e})=>e.colors.neutral150};
  }
  td:first-of-type {
    padding: ${({theme:e})=>e.spaces[4]};
  }
`;c(Kn)`
  path {
    fill: currentColor;
  }
`;c(ds)`
  path {
    fill: currentColor;
  }
`;const So={collectionTypeLinks:[],components:[],fieldSizes:{},models:[],singleTypeLinks:[],isLoading:!0},Ao=Ct({name:"app",initialState:So,reducers:{setInitialData(e,t){const{authorizedCollectionTypeLinks:n,authorizedSingleTypeLinks:r,components:s,contentTypeSchemas:a,fieldSizes:o}=t.payload;e.collectionTypeLinks=n.filter(({isDisplayed:d})=>d),e.singleTypeLinks=r.filter(({isDisplayed:d})=>d),e.components=s,e.models=a,e.fieldSizes=o,e.isLoading=!1}}}),{actions:Ro,reducer:Eo}=Ao,{setInitialData:Pd}=Ro;ls({app:Eo});var Io="@strapi/upload",Mo={name:Io};function jo(e){rr(e,"[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")}ft(ft({},yo),{textComponent:R.Fragment});var en=typeof window<"u"&&!window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__?window.__REACT_INTL_CONTEXT__||(window.__REACT_INTL_CONTEXT__=R.createContext(null)):R.createContext(null);en.Consumer;en.Provider;var Lo=en;function ot(){var e=R.useContext(Lo);return jo(e),e}var Zt;(function(e){e.formatDate="FormattedDate",e.formatTime="FormattedTime",e.formatNumber="FormattedNumber",e.formatList="FormattedList",e.formatDisplayName="FormattedDisplayName"})(Zt||(Zt={}));var Vt;(function(e){e.formatDate="FormattedDateParts",e.formatTime="FormattedTimeParts",e.formatNumber="FormattedNumberParts",e.formatList="FormattedListParts"})(Vt||(Vt={}));function fr(e){var t=function(n){var r=ot(),s=n.value,a=n.children,o=Fe(n,["value","children"]),d=typeof s=="string"?new Date(s||0):s,l=e==="formatDate"?r.formatDateToParts(d,o):r.formatTimeToParts(d,o);return a(l)};return t.displayName=Vt[e],t}function it(e){var t=function(n){var r=ot(),s=n.value,a=n.children,o=Fe(n,["value","children"]),d=r[e](s,o);if(typeof a=="function")return a(d);var l=r.textComponent||R.Fragment;return R.createElement(l,null,d)};return t.displayName=Zt[e],t}it("formatDate");it("formatTime");it("formatNumber");it("formatList");it("formatDisplayName");fr("formatDate");fr("formatTime");const Do=Mo.name.replace(/^@strapi\//i,""),ht=e=>`${Do}.${e}`;me().shape({urls:G().test({name:"isUrlValid",message:"${path}",test(e=""){const t=e.split(/\r?\n/);if(t.length===0)return this.createError({path:this.path,message:H.min.id});if(t.length>20)return this.createError({path:this.path,message:H.max.id});const n=t.filter(a=>{try{return new URL(a),!1}catch{return!0}}),r=n.length;if(r===0)return!0;const s=r>1?"form.upload-url.error.url.invalids":"form.upload-url.error.url.invalid";return this.createError({path:this.path,message:ht(s),params:{number:n.length}})}})});var ke;(function(e){e.Video="video",e.Image="image",e.Document="doc",e.Audio="audio"})(ke||(ke={}));var Nn;(function(e){e.Url="url",e.Computer="computer"})(Nn||(Nn={}));const Po=e=>e&&e[0]==="."?e.substring(1):e;c($)`
  align-self: flex-end;
  height: 2.2rem;
  width: 2.8rem;

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.colors.primary200};
  }
`;const Oo=c(C)`
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
`;c(Oo)`
  display: flex;
  background: none;
  border: none;

  svg {
    width: 0.9rem;
  }
`;const gr=e=>e&&e.startsWith("/")?`${window.strapi.backendURL}${e}`:e,No=(e,t=!0)=>{if(e.isLocal)return e.url;const n=t&&e?.formats?.thumbnail?.url||e.url;return gr(n)};c($)`
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
`;const qn=c($)`
  min-height: 26.4rem;
  border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>e.colors.neutral0} 0%,
    ${({theme:e})=>e.colors.neutral100} 121.48%
  );
`,qo=R.forwardRef(({mime:e,url:t,name:n,...r},s)=>{const a=cs(),{formatMessage:o}=ot();return e.includes(ke.Image)?i.jsx("img",{ref:s,src:t,alt:n,...r}):e.includes(ke.Video)?i.jsx(us,{src:t,accentColor:a.colors.primary500}):e.includes(ke.Audio)?i.jsx(C,{margin:"5",children:i.jsx("audio",{controls:!0,src:t,ref:s,...r,children:n})}):e.includes("pdf")?i.jsx(qn,{width:"100%",justifyContent:"center",...r,children:i.jsxs($,{gap:2,direction:"column",alignItems:"center",children:[i.jsx(Yn,{"aria-label":n,fill:"neutral500",width:24,height:24}),i.jsx(N,{textColor:"neutral500",variant:"pi",children:o({id:"noPreview",defaultMessage:"No preview available"})})]})}):i.jsx(qn,{width:"100%",justifyContent:"center",...r,children:i.jsxs($,{gap:2,direction:"column",alignItems:"center",children:[i.jsx(Jn,{"aria-label":n,fill:"neutral500",width:24,height:24}),i.jsx(N,{textColor:"neutral500",variant:"pi",children:o({id:"noPreview",defaultMessage:"No preview available"})})]})})});qo.displayName="AssetPreview";c(C)`
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
`;c($)`
  height: 5.2rem;
  background-color: ${({$blurry:e})=>e?"rgba(33, 33, 52, 0.4)":void 0};
`;c($)`
  z-index: 1;
  height: 5.2rem;
  position: absolute;
  background-color: rgba(33, 33, 52, 0.4);
  width: 100%;
`;c(yt)`
  span {
    color: inherit;
    font-weight: ${({theme:e})=>e.fontWeights.regular};
  }
`;c.div`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
`;c($t.Trigger)`
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
`;c($)`
  /* 80px are coming from the Tabs component that is not included in the ModalBody */
  min-height: ${()=>"calc(60dvh + 8rem)"};
`;me({name:G().required(),alternativeText:G(),caption:G(),folder:Xn()});me({name:G().required(),parent:me({label:G(),value:Xn().nullable(!0)}).nullable(!0)});const Fo=c.span`
  text-transform: uppercase;
`,yr=c(ps)`
  opacity: 0;
  z-index: 1;

  &:focus-within {
    opacity: 1;
  }
`,Uo=c.div`
  z-index: 1;
`,Go=c(ms)`
  cursor: pointer;

  &:hover {
    ${yr} {
      opacity: 1;
    }
  }
`,Et=({children:e,extension:t,isSelectable:n=!1,name:r,onSelect:s,onRemove:a,onEdit:o,selected:d=!1,subtitle:l="",variant:u="Image",className:p})=>{const{formatMessage:x}=ot(),h=b=>{o&&o(b)},g=b=>{b.stopPropagation()};return i.jsxs(Go,{className:p,role:"button",height:"100%",tabIndex:-1,onClick:h,children:[i.jsxs(hs,{children:[n&&i.jsx(Uo,{onClick:g,children:i.jsx(fs,{checked:d,onCheckedChange:s})}),(a||o)&&i.jsxs(yr,{onClick:g,position:"end",children:[a&&i.jsx(vt,{label:x({id:ht("control-card.remove-selection"),defaultMessage:"Remove from selection"}),onClick:a,children:i.jsx(er,{})}),o&&i.jsx(vt,{label:x({id:ht("control-card.edit"),defaultMessage:"Edit"}),onClick:o,children:i.jsx(Kn,{})})]}),e]}),i.jsxs(gs,{children:[i.jsxs(ys,{children:[i.jsx(C,{paddingTop:1,children:i.jsx(N,{tag:"h2",children:i.jsx(vs,{tag:"span",children:r})})}),i.jsxs(Ts,{children:[i.jsx(Fo,{children:t}),l]})]}),i.jsx($,{paddingTop:1,grow:1,children:i.jsx(xs,{children:x({id:ht(`settings.section.${u.toLowerCase()}.label`),defaultMessage:u})})})]})]})},zo=({url:e,alt:t})=>i.jsx(C,{children:i.jsx("audio",{controls:!0,src:e,children:t})}),Bo=c(C)`
  canvas,
  audio {
    display: block;
    max-width: 100%;
    max-height: ${({size:e})=>e==="M"?16.4:8.8}rem;
  }
`,Ho=({name:e,url:t,size:n="M",selected:r=!1,...s})=>i.jsx(Et,{name:e,selected:r,...s,variant:"Audio",children:i.jsx(Kt,{size:n,children:i.jsx($,{alignItems:"center",children:i.jsx(Bo,{size:n,children:i.jsx(zo,{url:t,alt:e})})})})}),Zo=c($)`
  border-radius: ${({theme:e})=>e.borderRadius} ${({theme:e})=>e.borderRadius} 0 0;
  background: linear-gradient(
    180deg,
    ${({theme:e})=>e.colors.neutral0} 0%,
    ${({theme:e})=>e.colors.neutral100} 121.48%
  );
`,Vo=({name:e,extension:t,size:n="M",selected:r=!1,...s})=>{const{formatMessage:a}=ot();return i.jsx(Et,{name:e,extension:t,selected:r,...s,variant:"Doc",children:i.jsx(Zo,{width:"100%",height:n==="S"?"8.8rem":"16.4rem",justifyContent:"center",children:i.jsxs($,{gap:2,direction:"column",alignItems:"center",children:[t==="pdf"?i.jsx(Yn,{"aria-label":e,fill:"neutral500",width:24,height:24}):i.jsx(Jn,{"aria-label":e,fill:"neutral500",width:24,height:24}),i.jsx(N,{textColor:"neutral500",variant:"pi",children:a({id:"noPreview",defaultMessage:"No preview available"})})]})})})},Wo=({url:e,params:t})=>{if(e===void 0||typeof t!="object")return e;const n=new URL(e,window.strapi.backendURL);return Object.entries(t).forEach(([r,s])=>{s!=null&&n.searchParams.append(r,s)}),n.toString()},Qo=({height:e,width:t,thumbnail:n,size:r="M",alt:s,isUrlSigned:a,selected:o=!1,...d})=>{const l=a?n:Wo({url:n,params:{updatedAt:d.updatedAt}}),u=e&&t?` - ${t}✕${e}`:void 0;return i.jsx(Et,{...d,selected:o,subtitle:u,variant:"Image",children:i.jsx(Kt,{src:l,size:r,alt:s})})},Ot=e=>String(e).padStart(2,"0"),Ko=e=>{const t=bs({start:0,end:e*1e3});return`${Ot(t.hours)}:${Ot(t.minutes)}:${Ot(t.seconds)}`},Yo=3,Jo=({url:e,mime:t,onLoadDuration:n=()=>{},alt:r,...s})=>{const a=d=>{if(d.currentTarget.currentTime>0){const l=d.currentTarget,u=document.createElement("canvas");u.height=l.videoHeight,u.width=l.videoWidth,u.getContext("2d")?.drawImage(l,0,0,l.videoWidth,l.videoHeight),l.replaceWith(u),n&&n(l.duration)}},o=d=>{const l=d.currentTarget;l.readyState<Yo||l.play()};return i.jsxs(C,{tag:"figure",...s,children:[i.jsx("video",{muted:!0,onLoadedData:o,src:e,crossOrigin:"anonymous",onTimeUpdate:a,children:i.jsx("source",{type:t})}),i.jsx(ws,{tag:"figcaption",children:r})]},e)},Xo=c(C)`
  canvas,
  video {
    display: block;
    pointer-events: none;
    max-width: 100%;
    max-height: ${({size:e})=>e==="M"?16.4:8.8}rem;
  }
`,ei=({name:e,url:t,mime:n,size:r="M",selected:s=!1,...a})=>{const[o,d]=R.useState(),l=o&&Ko(o);return i.jsxs(Et,{selected:s,name:e,...a,variant:"Video",children:[i.jsx(Kt,{size:r,children:i.jsx(Xo,{size:r,children:i.jsx(Jo,{url:t,mime:n,onLoadDuration:d,alt:e})})}),i.jsx(_s,{children:l||"..."})]})},ti=({asset:e,isSelected:t=!1,onSelect:n,onEdit:r,onRemove:s,size:a="M",local:o=!1,className:d})=>{const l=n?()=>n(e):void 0,u={id:e.id,isSelectable:e.isSelectable,extension:Po(e.ext),name:e.name,url:o?e.url:No(e,!0),mime:e.mime,onEdit:r?()=>r(e):void 0,onSelect:l,onRemove:s?()=>s(e):void 0,selected:t,size:a,className:d};return e.mime?.includes(ke.Video)?i.jsx(ei,{...u}):e.mime?.includes(ke.Image)?i.jsx(Qo,{alt:e.alternativeText||e.name,height:e.height,thumbnail:gr(e?.formats?.thumbnail?.url||e.url),width:e.width,updatedAt:e.updatedAt,isUrlSigned:e?.isUrlSigned||!1,...u}):e.mime?.includes(ke.Audio)?i.jsx(Ho,{...u}):i.jsx(Vo,{...u})};c(ti)`
  && {
    cursor: inherit;
  }
`;c(C)`
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
`;c(ks)`
  path {
    fill: currentColor;
  }
`;const ni=c(C)`
  display: none;
`;c(C)`
  &:hover,
  &:focus-within {
    ${ni} {
      display: ${({$isCardActions:e})=>e?"block":""};
    }
  }
`;c($)`
  user-select: none;
`;const ri=c(C)`
  &:focus {
    outline: 2px solid ${({theme:e})=>e.colors.primary600};
    outline-offset: -2px;
  }
`;c(ri)`
  text-decoration: none;
`;c(C)`
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
`;const vr=Ce`
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
`,tn=c.button`
  ${vr}
`,si=c.div`
  ${vr}
`;tn.defaultProps={type:"button"};c(tn)`
  color: ${({theme:e,$active:t})=>t?e.colors.primary700:e.colors.neutral800};
  background: ${({theme:e,$active:t})=>t?e.colors.neutral0:void 0};

  &:hover {
    box-shadow: ${({theme:e})=>e.shadows.filterShadow};
  }
`;c(tn)`
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
`;c(si)`
  color: ${({theme:e})=>e.colors.neutral800};
`;c(N)`
  max-width: 100%;
`;c(C)`
  svg {
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`;c($)`
  /* 80px are coming from the Tabs component that is not included in the ModalBody */
  min-height: ${()=>"calc(60dvh + 8rem)"};
`;c(Qt.Root)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;c($)`
  flex-direction: column;
`;c.div`
  font-size: 6rem;

  svg path {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`;c(C)`
  border-style: dashed;
`;c(C)`
  opacity: 0;
  cursor: pointer;
`;c.div`
  height: 8.8rem;
  width: 100%;
`;c.span`
  text-transform: uppercase;
`;c($)`
  background: linear-gradient(180deg, #ffffff 0%, #f6f6f9 121.48%);
`;c(C)`
  canvas,
  video {
    max-width: 100%;
    height: 124px;
  }
`;c(C)`
  canvas,
  audio {
    max-width: 100%;
  }
`;c(N)`
  align-items: center;
`;c(N)`
  text-align: center;
`;const Tr=oe.enhanceEndpoints({addTagTypes:["Locale","KeyStatistics"]}),ai=Tr.injectEndpoints({endpoints:e=>({createLocale:e.mutation({query:t=>({url:"/i18n/locales",method:"POST",data:t}),invalidatesTags:[{type:"Locale",id:"LIST"},"HomepageKeyStatistics"]}),deleteLocale:e.mutation({query:t=>({url:`/i18n/locales/${t}`,method:"DELETE"}),invalidatesTags:(t,n,r)=>[{type:"Locale",id:r},"HomepageKeyStatistics"]}),getLocales:e.query({query:()=>"/i18n/locales",providesTags:t=>[{type:"Locale",id:"LIST"},...Array.isArray(t)?t.map(n=>({type:"Locale",id:n.id})):[]]}),getDefaultLocales:e.query({query:()=>"/i18n/iso-locales"}),updateLocale:e.mutation({query:({id:t,...n})=>({url:`/i18n/locales/${t}`,method:"PUT",data:n}),invalidatesTags:(t,n,{id:r})=>[{type:"Locale",id:r}]})})}),{useCreateLocaleMutation:Od,useDeleteLocaleMutation:Nd,useGetLocalesQuery:qd,useGetDefaultLocalesQuery:Fd,useUpdateLocaleMutation:Ud}=ai,oi=Tr.injectEndpoints({overrideExisting:!0,endpoints:e=>({getManyDraftRelationCount:e.query({query:({model:t,...n})=>({url:`/content-manager/collection-types/${t}/actions/countManyEntriesDraftRelations`,method:"GET",config:{params:n}}),transformResponse:t=>t.data})})}),{useGetManyDraftRelationCountQuery:Gd}=oi;c(er)`
  path {
    fill: currentColor;
  }
`;c($)`
  svg {
    width: 12px;
    height: 12px;

    fill: ${({theme:e})=>e.colors.neutral500};

    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`;const Me=(e,t)=>{if(!e)return;const n=e.invalidatesTags;Object.assign(e,{invalidatesTags:(s,a,o,d)=>[...(typeof n=="function"?n(s,a,o,d):n)??[],...t]})},xr=oe.enhanceEndpoints({addTagTypes:["Release","ReleaseAction","EntriesInRelease","ReleaseSettings","Document","UpcomingReleasesList"],endpoints:{updateDocument(e){Me(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},deleteDocument(e){Me(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},deleteManyDocuments(e){Me(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},discardDocument(e){Me(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},createWorkflow(e){Me(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},updateWorkflow(e){Me(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])},deleteWorkflow(e){Me(e,[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"}])}}}).injectEndpoints({endpoints:e=>({getReleasesForEntry:e.query({query(t){return{url:"/content-releases/getByDocumentAttached",method:"GET",config:{params:t}}},providesTags:t=>t?[...t.data.map(({id:n})=>({type:"Release",id:n})),{type:"Release",id:"LIST"}]:[]}),getReleases:e.query({query({page:t,pageSize:n,filters:r}={page:1,pageSize:16,filters:{releasedAt:{$notNull:!1}}}){return{url:"/content-releases",method:"GET",config:{params:{page:t||1,pageSize:n||16,filters:r||{releasedAt:{$notNull:!1}}}}}},transformResponse(t,n,r){const a=r?.filters?.releasedAt?.$notNull==="true";return{...t,meta:{...t.meta,activeTab:a?"done":"pending"}}},providesTags:t=>t?[...t.data.map(({id:n})=>({type:"Release",id:n})),{type:"Release",id:"LIST"}]:[{type:"Release",id:"LIST"}]}),getRelease:e.query({query({id:t}){return{url:`/content-releases/${t}`,method:"GET"}},providesTags:(t,n,r)=>[{type:"Release",id:"LIST"},{type:"Release",id:r.id}]}),getReleaseActions:e.query({query({releaseId:t,...n}){return{url:`/content-releases/${t}/actions`,method:"GET",config:{params:n}}},providesTags:[{type:"ReleaseAction",id:"LIST"}]}),createRelease:e.mutation({query(t){return{url:"/content-releases",method:"POST",data:t}},invalidatesTags:[{type:"Release",id:"LIST"},"UpcomingReleasesList"]}),updateRelease:e.mutation({query({id:t,...n}){return{url:`/content-releases/${t}`,method:"PUT",data:n}},invalidatesTags:(t,n,r)=>[{type:"Release",id:r.id},"UpcomingReleasesList"]}),createReleaseAction:e.mutation({query({body:t,params:n}){return{url:`/content-releases/${n.releaseId}/actions`,method:"POST",data:t}},invalidatesTags:[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"},"UpcomingReleasesList"]}),createManyReleaseActions:e.mutation({query({body:t,params:n}){return{url:`/content-releases/${n.releaseId}/actions/bulk`,method:"POST",data:t}},invalidatesTags:[{type:"Release",id:"LIST"},{type:"ReleaseAction",id:"LIST"},{type:"EntriesInRelease"},"UpcomingReleasesList"]}),updateReleaseAction:e.mutation({query({body:t,params:n}){return{url:`/content-releases/${n.releaseId}/actions/${n.actionId}`,method:"PUT",data:t}},invalidatesTags:(t,n,r)=>[{type:"ReleaseAction",id:"LIST"},{type:"Release",id:"LIST"},{type:"Release",id:r.params.releaseId},"UpcomingReleasesList"],async onQueryStarted({body:t,params:n,query:r,actionPath:s},{dispatch:a,queryFulfilled:o}){const d={releaseId:n.releaseId,...r},l=a(xr.util.updateQueryData("getReleaseActions",d,u=>{const[p,x]=s,h=u.data[p][x];h&&(h.type=t.type)}));try{await o}catch{l.undo()}}}),deleteReleaseAction:e.mutation({query({params:t}){return{url:`/content-releases/${t.releaseId}/actions/${t.actionId}`,method:"DELETE"}},invalidatesTags:(t,n,r)=>[{type:"Release",id:"LIST"},{type:"Release",id:r.params.releaseId},{type:"ReleaseAction",id:"LIST"},{type:"EntriesInRelease"},"UpcomingReleasesList"]}),publishRelease:e.mutation({query({id:t}){return{url:`/content-releases/${t}/publish`,method:"POST"}},invalidatesTags:(t,n,r)=>[{type:"Release",id:r.id},{type:"Document",id:"ALL_LIST"},"UpcomingReleasesList"]}),deleteRelease:e.mutation({query({id:t}){return{url:`/content-releases/${t}`,method:"DELETE"}},invalidatesTags:()=>[{type:"Release",id:"LIST"},{type:"EntriesInRelease"},"UpcomingReleasesList"]}),getMappedEntriesInReleases:e.query({query(t){return{url:"/content-releases/mapEntriesToReleases",method:"GET",config:{params:t}}},transformResponse(t){return t.data},providesTags:[{type:"EntriesInRelease"}]}),getReleaseSettings:e.query({query:()=>"/content-releases/settings",providesTags:[{type:"ReleaseSettings"}]}),updateReleaseSettings:e.mutation({query(t){return{url:"/content-releases/settings",method:"PUT",data:t}},invalidatesTags:[{type:"ReleaseSettings"},"UpcomingReleasesList"]})})}),{useGetReleasesQuery:zd,useGetReleasesForEntryQuery:Bd,useGetReleaseQuery:Hd,useGetReleaseActionsQuery:Zd,useCreateReleaseMutation:Vd,useCreateReleaseActionMutation:Wd,useCreateManyReleaseActionsMutation:Qd,useUpdateReleaseMutation:Kd,useUpdateReleaseActionMutation:Yd,usePublishReleaseMutation:Jd,useDeleteReleaseActionMutation:Xd,useDeleteReleaseMutation:el,useGetMappedEntriesInReleasesQuery:tl,useGetReleaseSettingsQuery:nl,useUpdateReleaseSettingsMutation:rl}=xr,Fn=e=>e==="publish"?1:0,Un=e=>e==="publish"?0:1;c(J.Root)`
  border-top-left-radius: ${({$actionType:e,theme:t})=>t.spaces[Fn(e)]};
  border-bottom-left-radius: ${({$actionType:e,theme:t})=>t.spaces[Fn(e)]};
  border-top-right-radius: ${({$actionType:e,theme:t})=>t.spaces[Un(e)]};
  border-bottom-right-radius: ${({$actionType:e,theme:t})=>t.spaces[Un(e)]};

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
`;me().shape({type:G().oneOf(["publish","unpublish"]).required(),releaseId:G().required()});c($t.Item)`
  span,
  &:hover span {
    color: ${({theme:e})=>e.colors.neutral800};
  }

  svg path,
  &:hover svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`;c($t.Trigger)`
  & > span {
    display: flex;
  }
`;tr.colors.primary600;const br=oe.enhanceEndpoints({addTagTypes:["ReviewWorkflow","ReviewWorkflowStages","Document","ContentTypeSettings"]}),Gn="single-types",ii=br.enhanceEndpoints({addTagTypes:["RecentlyAssignedList","RecentDocumentList"]}).injectEndpoints({endpoints:e=>({getStages:e.query({query:({model:t,slug:n,id:r,params:s})=>({url:`/review-workflows/content-manager/${n}/${t}/${r}/stages`,method:"GET",config:{params:s}}),transformResponse:t=>({meta:t.meta??{workflowCount:0},stages:t.data??[]}),providesTags:["ReviewWorkflowStages"]}),updateStage:e.mutation({query:({model:t,slug:n,id:r,params:s,...a})=>({url:`/review-workflows/content-manager/${n}/${t}/${r}/stage`,method:"PUT",data:a,config:{params:s}}),transformResponse:t=>t.data,invalidatesTags:(t,n,{slug:r,id:s,model:a})=>[{type:"Document",id:r!==Gn?`${a}_${s}`:a},{type:"Document",id:`${a}_LIST`},"ReviewWorkflowStages"]}),updateAssignee:e.mutation({query:({model:t,slug:n,id:r,params:s,...a})=>({url:`/review-workflows/content-manager/${n}/${t}/${r}/assignee`,method:"PUT",data:a,config:{params:s}}),transformResponse:t=>t.data,invalidatesTags:(t,n,{slug:r,id:s,model:a})=>[{type:"Document",id:r!==Gn?`${a}_${s}`:a},{type:"Document",id:`${a}_LIST`},"RecentlyAssignedList"]}),getContentTypes:e.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:t=>t.data.reduce((n,r)=>(r.isDisplayed&&n[r.kind].push(r),n),{collectionType:[],singleType:[]})}),getRecentlyAssignedDocuments:e.query({query:()=>"/review-workflows/homepage/recently-assigned-documents",transformResponse:t=>t.data,providesTags:(t,n)=>["RecentlyAssignedList","RecentDocumentList"]})}),overrideExisting:!0}),{useGetStagesQuery:sl,useUpdateStageMutation:al,useUpdateAssigneeMutation:ol,useGetContentTypesQuery:il,useGetRecentlyAssignedDocumentsQuery:dl}=ii;c.img`
  // Margin top|right reverse the padding of ModalBody
  margin-right: ${({theme:e})=>`-${e.spaces[7]}`};
  margin-top: ${({theme:e})=>`-${e.spaces[7]}`};
  width: 360px;
`;const di={primary600:"Blue",primary200:"Lilac",alternative600:"Violet",alternative200:"Lavender",success600:"Green",success200:"Pale Green",danger500:"Cherry",danger200:"Pink",warning600:"Orange",warning200:"Yellow",secondary600:"Teal",secondary200:"Baby Blue",neutral400:"Gray",neutral0:"White"};Object.entries(di).map(([e,t])=>({hex:tr.colors[e].toUpperCase(),name:t}));const li=br.injectEndpoints({endpoints:e=>({getWorkflows:e.query({query:t=>({url:"/review-workflows/workflows",method:"GET",config:{params:t??{}}}),transformResponse:t=>({workflows:t.data,meta:"meta"in t?t.meta:void 0}),providesTags:t=>[...t?.workflows.map(({id:n})=>({type:"ReviewWorkflow",id:n}))??[],{type:"ReviewWorkflow",id:"LIST"}]}),createWorkflow:e.mutation({query:t=>({url:"/review-workflows/workflows",method:"POST",data:t}),transformResponse:t=>t.data,invalidatesTags(t){return[{type:"ReviewWorkflow",id:"LIST"},"ReviewWorkflowStages",{type:"Document",id:"ALL_LIST"},{type:"ContentTypeSettings",id:"LIST"},...t?.contentTypes.map(n=>({type:"Document",id:`${n}_ALL_ITEMS`}))??[]]}}),updateWorkflow:e.mutation({query:({id:t,...n})=>({url:`/review-workflows/workflows/${t}`,method:"PUT",data:n}),transformResponse:t=>t.data,invalidatesTags:(t,n,r)=>[{type:"ReviewWorkflow",id:r.id},"ReviewWorkflowStages",{type:"Document",id:"ALL_LIST"},{type:"ContentTypeSettings",id:"LIST"},...t?.contentTypes.map(s=>({type:"Document",id:`${s}_ALL_ITEMS`}))??[]]}),deleteWorkflow:e.mutation({query:({id:t})=>({url:`/review-workflows/workflows/${t}`,method:"DELETE"}),transformResponse:t=>t.data,invalidatesTags:(t,n,r)=>[{type:"ReviewWorkflow",id:r.id},"ReviewWorkflowStages",{type:"Document",id:"ALL_LIST"},{type:"ContentTypeSettings",id:"LIST"}]})}),overrideExisting:!1}),{useGetWorkflowsQuery:ll,useCreateWorkflowMutation:cl,useDeleteWorkflowMutation:ul,useUpdateWorkflowMutation:pl}=li,K=e=>`${nr}.${e}`,ci=()=>{const{get:e}=Ea();return{fetchRoutes:async n=>{try{return(await e(`/${nr}/routes?${n}`)).data}catch(r){throw console.error("Error fetching routes:",r),r}}}},ui=(e,t)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)}},ml=({value:e,name:t,onChange:n,attribute:r,intlLabel:s,hint:a,description:o,rawError:d,...l})=>{const{formatMessage:u}=Cs(),[p,x]=R.useState(null),{fetchRoutes:h}=ci(),[g,b]=R.useState(!1),[W,Q]=R.useState({}),Re={type:"internal",target:"self",link:{id:void 0,uid:void 0,kind:void 0,slug:void 0}},[z,It]=R.useState(e??Re);R.useEffect(()=>{(async()=>{if(!(!e||!z||!z.type&&z.type!=="internal")&&z?.type==="internal"){const{id:T,uid:q,kind:X,slug:fe}=z?.link;try{const ee=await h(`slug=${fe}`);Q(ee.data?ee.data.routes:{}),x(`${q}|${T}|${X}|${fe}`)}catch(ee){console.log(ee),console.error("Error fetching routes on load:",ee)}}})()},[]);const w=R.useCallback(S=>{It(S),n({target:{name:t,type:"json",value:JSON.stringify(S)}})},[n]),I=S=>{S==="internal"?w({target:z?.target||"self",type:"internal",link:{}}):S==="external"?(b(!1),x(null),Q({}),w({target:z?.target||"self",type:"external",link:""})):(b(!1),x(null),Q({}),w({target:z?.target||"self",type:"custom",link:"/"}))},L=()=>{w({target:z?.target||"self",type:"internal",link:{}}),x(null),Q({}),b(!1)},U=ui(async S=>{if(S.length<1){x(null),b(!1),Q({});return}b(!0),x(S),console.log("Fetching routes for:",S);try{const T=await h(`title=${S}`);Q(T.data?T.data.routes:{})}catch(T){console.error("Failed to fetch routes:",T)}finally{b(!1)}},300),A=S=>{if(!S)return;const[T,q,X,fe]=S.split("|");w({...z,type:"internal",link:{uid:T,id:Number(q),kind:X,slug:fe}})},M=S=>{w({...z,target:S})},D=(S,T)=>{const q=S.target.value;w({...z,type:T,link:q})},O=u({id:K("title"),defaultMessage:"Link"}),F=u({id:K("noOptions"),defaultMessage:"Zoek naar een pagina - (Nog) geen resultaten"}),te=u({id:K("hint")});return r.options?.format==="path"?i.jsx(C,{children:i.jsxs(de.Root,{children:[i.jsx(de.Item,{col:12,paddingBottom:2,children:i.jsxs($,{direction:"column",alignItems:"flex-start",gap:2,children:[i.jsx(N,{variant:"pi",fontWeight:"bold",children:O}),i.jsx(N,{variant:"pi",children:te})]})}),i.jsx(de.Item,{col:12,children:i.jsxs(J.Root,{error:!!d,name:"link",required:!0,hint:u({id:K("link.internal")}),style:{width:"100%"},children:[i.jsx(rn,{loading:g,placeholder:u({id:K("link.placeholder")}),value:p||"",onChange:A,onTextValueChange:S=>U(S),onClear:L,style:{width:"100%"},children:W&&Object.entries(W).map(S=>S[1].map(T=>i.jsx(sn,{value:`${T.uid}|${T.id}|${T.kind}|${T.slug}`,textValue:T.title,children:i.jsxs($,{alignItems:"center",justifyContent:"space-between",children:[T.title,i.jsxs(yt,{padding:"0",marginRight:"2",children:[S[0]," - ",T.uid]})]})},T.uid)))}),i.jsx(J.Hint,{})]})})]})}):i.jsx($,{spacing:2,children:i.jsxs(C,{children:[i.jsx(de.Root,{children:i.jsx(de.Item,{col:12,paddingBottom:2,children:i.jsxs($,{direction:"column",alignItems:"flex-start",gap:2,children:[i.jsx(N,{variant:"pi",fontWeight:"bold",children:O}),i.jsx(N,{variant:"pi",children:te})]})})}),i.jsxs(de.Root,{gap:"2",style:{alignItems:"flex-start"},children:[i.jsx(de.Item,{col:12,children:i.jsxs($,{gap:4,direction:"row",alignItems:"flex-start",style:{width:"100%"},children:[i.jsxs(J.Root,{error:!!d,required:!1,name:"type",hint:u({id:K("type")}),style:{width:"100%"},children:[i.jsxs(an,{required:!0,label:"Type",placeholder:"Type",value:z?.type,onChange:I,children:[i.jsx(Qe,{value:"internal",children:u({id:K("target.internal")})}),i.jsx(Qe,{value:"custom",children:u({id:K("target.custom")})}),i.jsx(Qe,{value:"external",children:u({id:K("target.external")})})]}),i.jsx(J.Hint,{})]}),i.jsxs(J.Root,{error:!!d,name:"target",required:!0,hint:u({id:K("target")}),style:{width:"100%"},children:[i.jsxs(an,{required:!0,label:"Target",placeholder:"Type",value:z?.target??"self",onChange:M,children:[i.jsxs(Qe,{value:"self",children:[" ",u({id:K("target.self")})]}),i.jsx(Qe,{value:"blank",children:u({id:K("target.blank")})})]}),i.jsx(J.Hint,{})]})]})}),i.jsx(de.Item,{col:12,m:12,s:12,children:z?.type==="internal"?i.jsxs(J.Root,{error:!!d,name:"link",required:!0,hint:u({id:K("link.internal")}),style:{width:"100%"},children:[i.jsx(rn,{loading:g,placeholder:u({id:K("link.placeholder")}),value:p||"",onChange:A,onTextValueChange:S=>U(S),onClear:L,noOptionsMessage:()=>F,children:W&&Object.entries(W).map(S=>S[1].map(T=>i.jsx(sn,{value:`${T.uid}|${T.id}|${T.kind}|${T.slug}`,textValue:T.title,children:i.jsxs($,{alignItems:"center",justifyContent:"space-between",children:[T.title,i.jsxs(yt,{padding:"0",marginRight:"2",children:[S[0]," - ",T.uid]})]})},T.uid)))}),i.jsx(J.Hint,{})]}):z?.type==="external"?i.jsxs(J.Root,{error:!!d,name:"link",required:!0,hint:u({id:K("link.external")}),paddingBottom:2,style:{width:"100%"},children:[i.jsx(on,{onChange:S=>D(S,"external"),value:z?.link,label:"Link",placeholder:"https://"}),i.jsx(J.Hint,{})]}):i.jsxs(J.Root,{error:!!d,name:"link",required:!0,hint:u({id:K("link.custom")}),paddingBottom:2,style:{width:"100%"},children:[i.jsx(on,{onChange:S=>D(S,"custom"),value:z?.link,label:"Link",placeholder:"/"}),i.jsx(J.Hint,{})]})})]})]})})};export{ml as default};
