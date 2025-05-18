import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CSqzlQAB.mjs';
import { manifest } from './manifest_BFuvS6Oj.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/endpointencuesta.astro.mjs');
const _page2 = () => import('./pages/iniciosesion.astro.mjs');
const _page3 = () => import('./pages/nosotros.astro.mjs');
const _page4 = () => import('./pages/registrate.astro.mjs');
const _page5 = () => import('./pages/tuscursos.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.13_@types+node@22.15.18_rollup@4.41.0_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/endpointEncuesta.ts", _page1],
    ["src/pages/InicioSesion.astro", _page2],
    ["src/pages/nosotros.astro", _page3],
    ["src/pages/registrate.astro", _page4],
    ["src/pages/tusCursos.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2289e697-9d9f-412e-9239-7dbb92563364",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
