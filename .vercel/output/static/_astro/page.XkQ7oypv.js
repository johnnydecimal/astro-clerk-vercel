import{s as w,r as d}from"./index.9Ve-SeCY.js";import"./chunk-THYSZO52.CLstdkOK.js";const h="modulepreload",E=function(a){return"/"+a},m={},y=function(l,e,o){let c=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),t=s?.nonce||s?.getAttribute("nonce");c=Promise.allSettled(e.map(n=>{if(n=E(n),n in m)return;m[n]=!0;const i=n.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${p}`))return;const r=document.createElement("link");if(r.rel=i?"stylesheet":h,i||(r.as="script"),r.crossOrigin="",r.href=n,t&&r.setAttribute("nonce",t),document.head.appendChild(r),i)return new Promise((f,v)=>{r.addEventListener("load",f),r.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${n}`)))})}))}function u(s){const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=s,window.dispatchEvent(t),!t.defaultPrevented)throw s}return c.then(s=>{for(const t of s||[])t.status==="rejected"&&u(t.reason);return l().catch(u)})},k=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]');if(k()){const{navigate:a,swapFunctions:l}=await y(async()=>{const{navigate:e,swapFunctions:o}=await import("./client.CHLTc0Tl.js");return{navigate:e,swapFunctions:o}},[]);document.addEventListener("astro:before-swap",e=>{const o=document.querySelector("#clerk-components");if(o){const c=o.cloneNode(!0);e.newDocument.body.appendChild(c)}e.swap=()=>w(l,e.newDocument)}),document.addEventListener("astro:page-load",async e=>{await d({sdkMetadata:{version:"1.4.13",name:"@clerk/astro",environment:"production"},routerPush:a,routerReplace:o=>a(o,{history:"replace"})})})}else await d({sdkMetadata:{version:"1.4.13",name:"@clerk/astro",environment:"production"}});
