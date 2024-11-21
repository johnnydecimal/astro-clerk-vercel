import{c as f,d,e as P,f as A}from"./chunk-THYSZO52.CLstdkOK.js";function h(e){return!1}var v=e=>typeof atob<"u"&&typeof atob=="function"?atob(e):typeof global<"u"&&global.Buffer?new global.Buffer(e,"base64").toString():e,U=[".lcl.dev",".stg.dev",".lclstage.dev",".stgstage.dev",".dev.lclclerk.com",".stg.lclclerk.com",".accounts.lclclerk.com","accountsstage.dev","accounts.dev"],k="pk_live_",O="pk_test_";function p(e,r={}){if(e=e||"",!e||!M(e)){if(r.fatal)throw new Error("Publishable key not valid.");return null}const t=e.startsWith(k)?"production":"development";let n=v(e.split("_")[2]);return n=n.slice(0,-1),r.proxyUrl?n=r.proxyUrl:t!=="development"&&r.domain&&(n=`clerk.${r.domain}`),{instanceType:t,frontendApi:n}}function M(e){e=e||"";const r=e.startsWith(k)||e.startsWith(O),t=v(e.split("_")[2]||"").endsWith("$");return r&&t}function R(){const e=new Map;return{isDevOrStagingUrl:r=>{if(!r)return!1;const t=typeof r=="string"?r:r.hostname;let n=e.get(t);return n===void 0&&(n=U.some(i=>t.endsWith(i)),e.set(t,n)),n}}}function x(e){return e?I(e)||w(e):!0}function I(e){return/^http(s)?:\/\//.test(e||"")}function w(e){return e.startsWith("/")}function K(e){return e?w(e)?new URL(e,window.location.origin).toString():e:""}function T(e){if(!e)return"";let r;if(e.match(/^(clerk\.)+\w*$/))r=/(clerk\.)*(?=clerk\.)/;else{if(e.match(/\.clerk.accounts/))return e;r=/^(clerk\.)*/gi}return`clerk.${e.replace(r,"")}`}var $=(e,r="5.34.3")=>{if(e)return e;const t=L(r);return t?t==="snapshot"?"5.34.3":t:D(r)},L=e=>{var r;return(r=e.trim().replace(/^v/,"").match(/-(.+?)(\.|$)/))==null?void 0:r[1]},D=e=>e.trim().replace(/^v/,"").split(".")[0],J={firstDelay:125,maxDelay:0,timeMultiple:2,shouldRetry:()=>!0},N=async e=>new Promise(r=>setTimeout(r,e)),V=e=>{let r=0;const t=()=>{const n=e.firstDelay,i=e.timeMultiple,a=n*Math.pow(i,r);return Math.min(e.maxDelay||a,a)};return async()=>{await N(t()),r++}},F=async(e,r={})=>{let t=0;const{shouldRetry:n,firstDelay:i,maxDelay:a,timeMultiple:s}={...J,...r},u=V({firstDelay:i,maxDelay:a,timeMultiple:s});for(;;)try{return await e()}catch(c){if(t++,!n(c,t))throw c;await u()}},B="loadScript cannot be called when document does not exist",z="loadScript cannot be called without a src";async function W(e="",r){const{async:t,defer:n,beforeLoad:i,crossOrigin:a,nonce:s}=r||{};return F(()=>new Promise((c,l)=>{e||l(z),(!document||!document.body)&&l(B);const o=document.createElement("script");a&&o.setAttribute("crossorigin",a),o.async=t||!1,o.defer=n||!1,o.addEventListener("load",()=>{o.remove(),c(o)}),o.addEventListener("error",()=>{o.remove(),l()}),o.src=e,o.nonce=s,i?.(o),document.body.appendChild(o)}),{shouldRetry:(c,l)=>l<5})}var j=Object.freeze({InvalidProxyUrlErrorMessage:"The proxyUrl passed to Clerk is invalid. The expected value for proxyUrl is an absolute URL or a relative path with a leading '/'. (key={{url}})",InvalidPublishableKeyErrorMessage:"The publishableKey passed to Clerk is invalid. You can get your Publishable key at https://dashboard.clerk.com/last-active?path=api-keys. (key={{key}})",MissingPublishableKeyErrorMessage:"Missing publishableKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",MissingSecretKeyErrorMessage:"Missing secretKey. You can get your key at https://dashboard.clerk.com/last-active?path=api-keys.",MissingClerkProvider:"{{source}} can only be used within the <ClerkProvider /> component. Learn more: https://clerk.com/docs/components/clerk-provider"});function H({packageName:e,customMessages:r}){let t=e;const n={...j,...r};function i(a,s){if(!s)return`${t}: ${a}`;let u=a;const c=a.matchAll(/{{([a-zA-Z0-9-_]+)}}/g);for(const l of c){const o=(s[l[1]]||"").toString();u=u.replace(`{{${l[1]}}}`,o)}return`${t}: ${u}`}return{setPackageName({packageName:a}){return typeof a=="string"&&(t=a),this},setMessages({customMessages:a}){return Object.assign(n,a||{}),this},throwInvalidPublishableKeyError(a){throw new Error(i(n.InvalidPublishableKeyErrorMessage,a))},throwInvalidProxyUrl(a){throw new Error(i(n.InvalidProxyUrlErrorMessage,a))},throwMissingPublishableKeyError(){throw new Error(i(n.MissingPublishableKeyErrorMessage))},throwMissingSecretKeyError(){throw new Error(i(n.MissingSecretKeyErrorMessage))},throwMissingClerkProviderError(a){throw new Error(i(n.MissingClerkProvider,a))},throw(a){throw new Error(i(a))}}}var m="Clerk: Failed to load Clerk",{isDevOrStagingUrl:Y}=R(),S=H({packageName:"@clerk/shared"});function q(e){S.setPackageName({packageName:e})}var G=async e=>{const r=document.querySelector("script[data-clerk-js-script]");if(r)return new Promise((t,n)=>{r.addEventListener("load",()=>{t(r)}),r.addEventListener("error",()=>{n(m)})});if(!e?.publishableKey){S.throwMissingPublishableKeyError();return}return W(X(e),{async:!0,crossOrigin:"anonymous",nonce:e.nonce,beforeLoad:Q(e)}).catch(()=>{throw new Error(m)})},X=e=>{var r,t;const{clerkJSUrl:n,clerkJSVariant:i,clerkJSVersion:a,proxyUrl:s,domain:u,publishableKey:c}=e;if(n)return n;let l="";s&&x(s)?l=K(s).replace(/http(s)?:\/\//,""):u&&!Y(((r=p(c))==null?void 0:r.frontendApi)||"")?l=T(u):l=((t=p(c))==null?void 0:t.frontendApi)||"";const o=i?`${i.replace(/\.+$/,"")}.`:"",C=$(a);return`https://${l}/npm/@clerk/clerk-js@${C}/dist/clerk.${o}browser.js`},Z=e=>{const r={};return e.publishableKey&&(r["data-clerk-publishable-key"]=e.publishableKey),e.proxyUrl&&(r["data-clerk-proxy-url"]=e.proxyUrl),e.domain&&(r["data-clerk-domain"]=e.domain),e.nonce&&(r.nonce=e.nonce),r},Q=e=>r=>{const t=Z(e);for(const n in t)r.setAttribute(n,t[n])},E=()=>{["handleRedirectCallback"].forEach(r=>{document.querySelectorAll(`[data-clerk-function-id^="clerk-${r}"]`).forEach(n=>{const i=n.getAttribute("data-clerk-function-id"),a=window.__astro_clerk_function_props?.get(r)?.get(i)??{};f.get()?.[r]?.(a)})})},_=()=>{Object.entries({"organization-list":"mountOrganizationList","organization-profile":"mountOrganizationProfile","organization-switcher":"mountOrganizationSwitcher","user-button":"mountUserButton","user-profile":"mountUserProfile","sign-in":"mountSignIn","sign-up":"mountSignUp","google-one-tap":"openGoogleOneTap"}).forEach(([r,t])=>{document.querySelectorAll(`[data-clerk-id^="clerk-${r}"]`).forEach(i=>{const a=i.getAttribute("data-clerk-id"),s=window.__astro_clerk_component_props?.get(r)?.get(a);i&&f.get()?.[t](i,s)})})},ee=e=>{let r=!1;return t=>{if(r){const n=window.Clerk;return new Promise(i=>n?(n.loaded&&(_(),E()),i(n.loaded)):i(!1))}return r=!0,e(t)}},y;q("@clerk/astro");function g(e){return(r,t)=>{t?.__internal_metadata?.navigationType==="internal"?e(history.state,"",r):t?.windowNavigate(r)}}var re=ee(te);async function te(e){let r=window.Clerk;if(!r){if(await G(e),!window.Clerk)throw new Error("Failed to download latest ClerkJS. Contact support@clerk.com.");r=window.Clerk}return f.get()||f.set(r),y={routerPush:g(window.history.pushState.bind(window.history)),routerReplace:g(window.history.replaceState.bind(window.history)),...e},r.load(y).then(()=>{d.setKey("isLoaded",!0),P.notify(),_(),E(),r.addListener(t=>{d.setKey("client",t.client),d.setKey("user",t.user),d.setKey("session",t.session),d.setKey("organization",t.organization)})}).catch(()=>{})}var ne=e=>{const{signInUrl:r,signUpUrl:t,isSatellite:n,proxyUrl:i,domain:a,publishableKey:s,telemetry:u,...c}=e||{};return{signInUrl:r||void 0,signUpUrl:t||void 0,isSatellite:n||void 0,proxyUrl:i||void 0,domain:a||void 0,publishableKey:s||"pk_test_bGVuaWVudC1ob3VuZC04Mi5jbGVyay5hY2NvdW50cy5kZXYk",telemetry:u||{disabled:h(),debug:h()},...c}};function ae(e){async function r(t){const n=document.getElementById("__CLERK_ASTRO_DATA__");n&&A.set(JSON.parse(n.textContent||"{}"));const i=document.getElementById("__CLERK_ASTRO_SAFE_VARS__");let a={};i&&(a=JSON.parse(i.textContent||"{}")),await e(ne({...t,...a}))}return r}var b="data-astro-transition-persist",ie="data-emotion";function ce(e,r){e.deselectScripts(r),e.swapRootAttributes(r);const t=document.querySelectorAll(`style[${ie}]`);oe(r,Array.from(t));const n=e.saveFocus();e.swapBodyElement(r.body,document.body),n()}function oe(e,r){for(const t of Array.from(document.head.children)){const n=se(t,e);n?n.remove():r.includes(t)||t.remove()}document.head.append(...e.head.children)}function se(e,r){const t=e.getAttribute(b),n=t&&r.head.querySelector(`[${b}="${t}"]`);if(n)return n;if(e.matches("link[rel=stylesheet]")){const i=e.getAttribute("href");return r.head.querySelector(`link[rel=stylesheet][href="${i}"]`)}return null}var ue=ae(re);export{ue as r,ce as s};