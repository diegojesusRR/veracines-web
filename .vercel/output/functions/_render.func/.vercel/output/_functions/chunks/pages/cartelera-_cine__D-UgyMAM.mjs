/* empty css                                     */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_BvmcH-Yh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { M as Metadata, $ as $$Layout } from './404_BvUyFJe6.mjs';
import { P as PROYECCIONES, a as PELICULAS, C as CINES } from './_pelicula__zgd8brnA.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$ProyeccionCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProyeccionCard;
  const { proyecciones, pelicula, cine } = Astro2.props;
  const DIASSEMANA = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const diasProyeccion = [...new Set(proyecciones.map((proyeccion) => proyeccion.fecha.getDate()))];
  return renderTemplate`${maybeRenderHead()}<div class="p-2 m-4 grid xs:grid-cols-1 md:grid-cols-4 grid-flow-row border-2 align-middle bg-white bg-opacity-8"> <h2${addAttribute(`text-xl col-span-3 text-white bg-${cine.color} text-center font-bold pb-2 pt-2 mr-1 ml-1`, "class")}>${pelicula.nombre}</h2> <div class="row-span-3 col-span-1 mr-1 ml-1"> <img${addAttribute(`w-full border-4 border-${cine.color}`, "class")}${addAttribute(`/img/peliculas/${pelicula.id}.jpeg`, "src")}${addAttribute(`Imagen de la pelicula: ${pelicula.nombre}`, "alt")}> <p${addAttribute(`text-center text-${cine.color} text-xs font-bold w-auto text-white p-2 bg-${cine.color}`, "class")}>${pelicula.edadRedomendada}</p> </div> <div${addAttribute(`col-span-3 flex flex-col-reverse md:flex-row flex-grow align xs:text-xl md:text-base`, "class")}> <div${addAttribute(`flex flex-col justify-around justify-left items-center p-2`, "class")}> <div class="flex flex-col align-left text-center"> <h3${addAttribute(`flex-1 text-${cine.color} font-bold underline mt-2`, "class")}>Proyecciones</h3> <ul${addAttribute(`flex-2 text-${cine.color} list-none list-inside`, "class")}> ${diasProyeccion.map((dia) => {
    const proyeccionesDia = proyecciones.filter((proyeccion) => proyeccion.fecha.getDate() === dia);
    const ultimaProyeccion = proyeccionesDia.length > 1 && proyeccionesDia.pop();
    return renderTemplate`<li> <span>${DIASSEMANA[proyeccionesDia[0].fecha.getDay()]} ${proyeccionesDia[0].fecha.getDate()}</span>
- ${proyeccionesDia.map((proyeccion) => proyeccion.hora).join(", ")}${ultimaProyeccion && ` y ${ultimaProyeccion.hora}`} </li>`;
  })} </ul> </div> <div class="relative flex h-2 w-full flex-col items-center m-4"> <div class=" absolute w-full items-center justify-between"> <div class="h-[2px] w-full rounded-l-[30%] border-t-0" style="background:linear-gradient(to right, transparent 2%, var(--color-primary) 15%, var(--color-primary) 83%, transparent 98%)"></div> </div> </div> <p${addAttribute(`text-center text-${cine.color} line-clamp-4`, "class")}>${pelicula.descripcion}</p> </div> </div></div>`;
}, "/Users/diego.ramos/veracines-web/src/components/proyeccionCard.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$ProyeccionesCine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProyeccionesCine;
  const { cine } = Astro2.props;
  const gruposProyecciones = [...new Set(PROYECCIONES.filter((proyeccion) => proyeccion.cineId === cine.url && proyeccion.fecha >= /* @__PURE__ */ new Date())?.map((x) => x.grupo))];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`proyecciones-${cine.url}`, "id")}> ${gruposProyecciones.length === 0 ? renderTemplate`<div${addAttribute(`p-2 m-4 align-middle text-${cine.color}`, "class")}> <p>Actualmente no hay proyecciones disponibles.</p> </div>` : gruposProyecciones.map((grupo) => {
    const proyecciones = PROYECCIONES.filter((proyeccion) => proyeccion.cineId === cine.url && proyeccion.grupo === grupo);
    const pelicula = PELICULAS.find((pelicula2) => pelicula2.id === proyecciones[0].peliculaId);
    return renderTemplate`${renderComponent($$result, "ProyeccionCard", $$ProyeccionCard, { "cine": cine, "proyecciones": proyecciones, "pelicula": pelicula })}`;
  })} </section>`;
}, "/Users/diego.ramos/veracines-web/src/components/proyeccionesCine.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const $$Carteleracine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carteleracine;
  const cine = CINES.find((cine2) => cine2.url === Astro2.params.cine);
  if (!cine) {
    return new Response(JSON.stringify("Cine Not found"), { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata[`cartelera-${cine.url}`].description, "title": Metadata[`cartelera-${cine.url}`].title, "canonical": Metadata[`cartelera-${cine.url}`].canonical }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1${addAttribute(`text-xl text-${cine.color} text-center font-bold`, "class")}>Cartelera de ${cine.nombre}</h1> <h2${addAttribute(`text-center text-lg text-${cine.color}`, "class")}>Próximas películas en ${cine.nombre}. Consulta nuestra programación.</h2> ${renderComponent($$result2, "ProyeccionesCine", $$ProyeccionesCine, { "cine": cine })} </main> ` })} <section></section>`;
}, "/Users/diego.ramos/veracines-web/src/pages/cartelera-[cine].astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/cartelera-[cine].astro";
const $$url = "/cartelera-[cine]";

export { $$Carteleracine as default, $$file as file, $$url as url };
