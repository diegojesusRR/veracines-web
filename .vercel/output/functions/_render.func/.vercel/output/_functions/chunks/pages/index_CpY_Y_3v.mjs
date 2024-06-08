/* empty css                                     */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_BvmcH-Yh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Action, M as Metadata, $ as $$Layout } from './404_BvUyFJe6.mjs';
import 'clsx';
/* empty css                          */
import { C as CINES } from './_pelicula__zgd8brnA.mjs';

const $$Astro$3 = createAstro("https://www.veracines.es");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col place-items-center gap-4 lg:gap-3" data-astro-cid-shwxrd6l> <h1 class="sr-only bg-black/30" data-astro-cid-shwxrd6l>Veracines</h1> <img src="/img/veracines-logo.png" alt="Veracines" class="w-48 lg:w-72" data-astro-cid-shwxrd6l> <h2${addAttribute(`text-center text-lg text-primary mb-5`, "class")} data-astro-cid-shwxrd6l>Disfruta de los mejores estrenos de cine durante todo el año en Veracines. Vive con nosotros la experiencia del cine de verano en nuestras terrazas de Vera y Garrucha, así como durante el resto del año en Cine Regio de Vera.</h2> </section> `;
}, "/Users/diego.ramos/veracines-web/src/sections/Hero.astro", void 0);

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$UbicacionCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$UbicacionCard;
  const { cine } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col md:flex-row p-2 m-4 border-2 align-middle flex-grow bg-white bg-opacity-80`, "class")}> <div${addAttribute(`flex flex-col justify-around justify-center items-center p-5`, "class")}> <h2${addAttribute(`text-xl text-${cine.color} text-center font-bold underline mb-2`, "class")}>${cine.nombre}</h2> <p${addAttribute(`text-center text-${cine.color}`, "class")}>${cine.localizacion.descripcion}</p> ${renderComponent($$result, "Action", $$Action, { "class": `w-3/4 text-base md:text-xs`, "as": `a`, "aria-disabled": `false`, "href": `/cartelera-${cine.url}/`, "rel": `noopener noreferrer`, "aria-label": `Enlace a la cartelera de ${cine.nombre}` }, { "default": ($$result2) => renderTemplate`
Consultar cartelera
` })} </div> <div${addAttribute(`flex flex-col md:mt-2`, "class")}> <div${addAttribute(`border-4 border-primary`, "class")}> <iframe${addAttribute(`align-middle w-auto`, "class")}${addAttribute(`https://www.google.com/maps/embed?pb=${cine.localizacion.ubicacionKey}`, "src")}${addAttribute(`400`, "width")}${addAttribute(`250`, "height")}${addAttribute(`border:0;`, "style")}${addAttribute(``, "allowfullscreen")}${addAttribute(`lazy`, "loading")}${addAttribute(`no-referrer-when-downgrade`, "referrerpolicy")}></iframe> </div> <p${addAttribute(`text-center underline text-${cine.color} text-xs font-bold w-auto p-2`, "class")}>${cine.localizacion.direccion}</p> </div> </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/UbicacionCard.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$Ubicaciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Ubicaciones;
  return renderTemplate`${maybeRenderHead()}<section> <h2 class="text-xl text-primary text-center font-bold">Puedes encontrarnos en:</h2> ${CINES.map((cine) => renderTemplate`${renderComponent($$result, "UbicacionCard", $$UbicacionCard, { "cine": cine })}`)} </section>`;
}, "/Users/diego.ramos/veracines-web/src/components/ubicaciones.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata.home.description, "title": Metadata.home.title, "canonical": Metadata.home.canonical }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Ubicaciones", $$Ubicaciones, {})} </main> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/index.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
