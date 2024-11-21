import { renderers } from "./renderers.mjs";
import { c as createExports } from "./chunks/entrypoint_Cng4gj7e.mjs";
import { manifest } from "./manifest_D2EFYW_z.mjs";
import "./_astro-internal_middleware.mjs";
const _page0 = () => import("./pages/_image.astro.mjs");
const _page1 = () => import("./pages/_id_.astro.mjs");
const _page2 = () => import("./pages/index.astro.mjs");
const pageMap = /* @__PURE__ */ new Map([
  ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
  ["src/pages/[id].astro", _page1],
  ["src/pages/index.astro", _page2]
]);
const serverIslandMap = /* @__PURE__ */ new Map();
const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  middleware: () => import("./_astro-internal_middleware.mjs")
});
const _args = {
  "middlewareSecret": "3d3015f7-fac4-4252-baa4-a6327cd078c3",
  "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
export {
  __astrojsSsrVirtualEntry as default,
  pageMap
};
