import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CyvmyPAB.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/_---auth_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/api/forecasts/get-forecast-by-combat-id.json.astro.mjs');
const _page4 = () => import('./pages/aviso-legal.astro.mjs');
const _page5 = () => import('./pages/peliculas/_pelicula_.astro.mjs');
const _page6 = () => import('./pages/politica-privacidad.astro.mjs');
const _page7 = () => import('./pages/cartelera-_cine_.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');


const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/auth-astro/src/api/[...auth].ts", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/api/forecasts/get-forecast-by-combat-id.json.ts", _page3],
    ["src/pages/aviso-legal.astro", _page4],
    ["src/pages/peliculas/[pelicula].astro", _page5],
    ["src/pages/politica-privacidad.astro", _page6],
    ["src/pages/cartelera-[cine].astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "ba3f367d-250f-40c4-aaac-581e2c685a32"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
