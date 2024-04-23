/* empty css                                     */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent } from '../astro_BvmcH-Yh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Action, M as Metadata, a as $$Layout } from './404_Bl7KV2qO.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro("https://www.veracines.es");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col place-items-center gap-4 lg:gap-9" data-astro-cid-shwxrd6l> <h1 class="sr-only bg-black/30" data-astro-cid-shwxrd6l>Veracines</h1> </section> `;
}, "/Users/diego.ramos/veracines-web/src/sections/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$PeliculaPrincipal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PeliculaPrincipal;
  return renderTemplate`${maybeRenderHead()}<div> <img src="/img/pelicula-principal.jpeg"> </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/peliculaPrincipal.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$ComprarEntradas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ComprarEntradas;
  return renderTemplate`${renderComponent($$result, "Action", $$Action, { "class": "w-full text-base", "as": "a", "aria-disabled": "false", "href": "https://kinetike.com:83/views/init.aspx?cine=REGIO", "target": "_blank", "rel": "noopener noreferrer", "aria-label": "Enlace a la venta de entradas" }, { "default": ($$result2) => renderTemplate`
Comprar entradas
` })}`;
}, "/Users/diego.ramos/veracines-web/src/components/ComprarEntradas.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata.home.description, "title": Metadata.home.title, "canonical": Metadata.home.canonical }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "ComprarEntradas", $$ComprarEntradas, {})} ${renderComponent($$result2, "PeliculaPrincipal", $$PeliculaPrincipal, {})} </main> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/index.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
