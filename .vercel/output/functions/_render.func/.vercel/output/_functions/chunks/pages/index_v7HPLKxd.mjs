/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute, n as renderTransition } from '../astro_CCLsmAZA.mjs';
import 'kleur/colors';
import { $ as $$Image } from './generic_KVVjvbFm.mjs';
import { $ as $$Typography, a as $$Layout, b as $$Action } from './404_B1kBpnNj.mjs';
import { C as COMBATS, R as REY_DE_LA_PISTA_ID } from './get-forecast-by-combat-id_BQMTJUyO.mjs';
/* empty css                          */
/* empty css                         */
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro("https://www.veracines.es");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  const getCombatById = (id) => {
    return COMBATS.find((combat) => combat.id === id);
  };
  const getBoxerNames = (boxerIds) => {
    return boxerIds.map((boxerId) => `Boxeador ${boxerId}`);
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Todos los combates de la Velada IV", "title": "Combates de La Velada IV", "data-astro-cid-aggkkxhc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex min-h-screen flex-col items-center text-[#b4cd02]" data-astro-cid-aggkkxhc> <div class="mx-auto w-full max-w-4xl p-8" data-astro-cid-aggkkxhc> ${renderComponent($$result2, "Typography", $$Typography, { "class": "title mb-12 -skew-y-6 text-wrap text-center text-6xl", "color": "primary", "as": "h1", "variant": "atomic-title", "data-astro-cid-aggkkxhc": true }, { "default": ($$result3) => renderTemplate`
todos los<br data-astro-cid-aggkkxhc>combates
` })} <ul class="grid w-full grid-cols-4 gap-4" data-astro-cid-aggkkxhc> ${COMBATS.map((combat, index) => {
    const combatData = getCombatById(combat.id);
    if (!combatData)
      return null;
    const boxerNames = combatData ? getBoxerNames(combatData.boxers) : [];
    const isKingOfTheHill = combatData.id === REY_DE_LA_PISTA_ID;
    return renderTemplate`<li${addAttribute(["col-span-4 rounded-xl lg:col-span-2"], "class:list")} data-astro-cid-aggkkxhc> <a class="group relative inline-block aspect-square h-auto w-full transform-gpu transition-transform hover:scale-105 hover:saturate-150"${addAttribute(`/combates/${combat.id}`, "href")}${addAttribute(`Ir al combate ${combatData.number} de la Velada IV`, "title")} data-astro-cid-aggkkxhc> <img decoding="async"${addAttribute(index < 2 ? "eager" : "lazy", "loading")}${addAttribute([
      "absolute bottom-0  mx-auto h-auto w-full",
      { "group-hover:scale-115 z-20 md:z-10": isKingOfTheHill },
      { "z-10 group-hover:scale-105 ": !isKingOfTheHill }
    ], "class:list")}${addAttribute(`https://cdn.lavelada.dev/matches/combat-${combat.id}.webp`, "src")}${addAttribute(`Fotograf\xEDa del combate entre ${boxerNames.join(", ")}`, "alt")} style="mask-image: linear-gradient(black 90%, transparent 100%);" data-astro-cid-aggkkxhc> ${renderComponent($$result2, "Image", $$Image, { "width": combatData.titleSize[0], "height": combatData.titleSize[1], "loading": index < 2 ? "eager" : "lazy", "class:list": [
      "group-hover:saturate-15 absolute  left-1/2 h-auto max-h-[15rem] w-auto -translate-x-1/2 transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75",
      { "top-10 z-10 md:z-20": isKingOfTheHill },
      { "-bottom-20 z-20": !isKingOfTheHill }
    ], "src": `https://cdn.lavelada.dev/matches/title-${combat.id}.webp`, "alt": `Fotograf\xEDa del combate entre ${boxerNames.join(", ")}`, "data-astro-cid-aggkkxhc": true, "data-astro-transition-scope": renderTransition($$result2, "3zf7x5fr", "", `title-image-${combat.id}`) })} <div class="gradient-box absolute bottom-0 z-0 block h-2/5 w-full opacity-25 transition-opacity duration-300 ease-in-out group-hover:brightness-50 group-hover:filter" data-astro-cid-aggkkxhc></div> </a> </li>`;
  })} </ul> </div> </main> ` })} `;
}, "/Users/diego.ramos/veracines-web/src/pages/combates/index.astro", "self");

const $$file$1 = "/Users/diego.ramos/veracines-web/src/pages/combates/index.astro";
const $$url$1 = "/combates";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col place-items-center gap-4 lg:gap-9" data-astro-cid-shwxrd6l> <h1 class="sr-only bg-black/30" data-astro-cid-shwxrd6l>Veracines</h1> </section> `;
}, "/Users/diego.ramos/veracines-web/src/sections/Hero.astro", void 0);

const Metadata = {
  home: {
    title: "Veracines - Cines de Verano en Vera y Garrucha",
    description: "Cine de verano en Vera y Garrucha. Descubre las películas de estreno en Vera y Garrucha. Disvruta la experiencia del cine de verano en Veracines.",
    canonical: "www.veracines.es"
  },
  "cartelera-vera": {
    title: "Cartelera Veracines",
    description: "Cartelera del cine de verano en Vera. Descubre las películas de estreno en Vera. Disvruta la experiencia del cine de verano en Veracines.",
    canonical: "www.veracines.es/cartelera-vera"
  },
  "cartelera-garrucha": {
    title: "Cartelera Cines",
    description: "Cartelera de Cine Tenis de Garrucha. Descubre las películas de estreno en Garrucha. Disvruta la experiencia del cine de verano en Veracines.",
    canonical: "www.veracines.es/cartelera-cines"
  },
  "cartelera-regio": {
    title: "Cartelera Regio",
    description: "Cartelera del cine de invierno en Vera. Descubre las películas de estreno en Vera. Disvruta la experiencia del cine Regio en Veracines.",
    canonical: "www.veracines.es/cartelera-regio"
  }
};

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$PeliculaPrincipal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PeliculaPrincipal;
  return renderTemplate`${maybeRenderHead()}<div> ${renderComponent($$result, "Action", $$Action, { "class": "w-full text-base", "as": "a", "aria-disabled": "false", "href": "https://kinetike.com:83/views/init.aspx?cine=REGIO", "target": "_blank", "rel": "noopener noreferrer", "aria-label": "Enlace a la venta de entradas" }, { "default": ($$result2) => renderTemplate`
Comprar entradas
` })} <img src="/img/pelicula-principal.jpeg"> </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/peliculaPrincipal.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata.home.description, "title": Metadata.home.title, "canonical": Metadata.home.canonical }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "PeliculaPrincipal", $$PeliculaPrincipal, {})} </main> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/index.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
