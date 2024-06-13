/* empty css                                */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_BUDihmju.mjs';
import 'kleur/colors';
import { P as PROYECCIONES, C as CINES, a as PELICULAS, $ as $$Layout } from './404_u6tsmEBa.mjs';
import 'clsx';

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$ProyeccionesPelicula = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProyeccionesPelicula;
  const { pelicula, cine } = Astro2.props;
  const DIASSEMANA = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const grupoProyeccion = [...new Set(PROYECCIONES.filter((proyeccion) => proyeccion.cineId == cine.url && proyeccion.fecha >= /* @__PURE__ */ new Date())?.map((x) => x.grupo))].at(0);
  const proyecciones = PROYECCIONES.filter((proyeccion) => proyeccion.cineId == cine.url && proyeccion.grupo == grupoProyeccion);
  const diasProyeccion = [...new Set(proyecciones.map((proyeccion) => proyeccion.fecha.getDate()))];
  return renderTemplate`${proyecciones.length > 0 && renderTemplate`${maybeRenderHead()}<div class="flex flex-col align-left text-center mb-5"><h3${addAttribute(`flex-1 text-${cine.color} font-bold underline`, "class")}>Proyecciones ${cine.corto}</h3><ul${addAttribute(`flex-2 text-${cine.color} list-none list-inside`, "class")}>${diasProyeccion.map((dia) => {
    const proyeccionesDia = proyecciones.filter((proyeccion) => proyeccion.fecha.getDate() === dia);
    const ultimaProyeccion = proyeccionesDia.length > 1 && proyeccionesDia.pop();
    const diaText = `${DIASSEMANA[proyeccionesDia[0].fecha.getDay()]} ${proyeccionesDia[0].fecha.getDate()}`;
    return renderTemplate`<li><span>${diaText}</span><span> - ${proyeccionesDia.map((proyeccion) => proyeccion.hora).join(", ")}${ultimaProyeccion && ` y ${ultimaProyeccion.hora}`}</span></li>`;
  })}</ul></div>`}`;
}, "/Users/diego.ramos/veracines-web/src/components/ProyeccionesPelicula.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$PeliculaCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PeliculaCard;
  const { pelicula } = Astro2.props;
  const color = "primary";
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-3"> <div class="row-span-3 col-span-1 mr-1 ml-1"> <img${addAttribute(`w-full border-4 border-${color}`, "class")}${addAttribute(`/img/peliculas/${pelicula.id}.jpeg`, "src")}${addAttribute(`Imagen de la pelicula: ${pelicula.nombre}`, "alt")}> <p${addAttribute(`text-center text-${color} text-xs font-bold w-auto text-white p-2 bg-${color}`, "class")}>${pelicula.edadRedomendada}</p> </div> <div class="col-span-2 flex flex-col justify-between"> <div class="flex flex-col justify-around justify-left items-center p-2"> <div class="flex flex-col align-left text-center"> <h3${addAttribute(`flex-1 text-${color} font-bold underline mt-2`, "class")}>Sinopsis</h3> <p${addAttribute(`flex-2 text-${color} text-justify`, "class")}>${pelicula.descripcion}</p> </div> <div class="relative flex h-2 w-full flex-col items-center m-4"> <div class=" absolute w-full items-center justify-between"> <div class="h-[2px] w-full rounded-l-[30%] border-t-0" style="background:linear-gradient(to right, transparent 2%, var(--color-primary) 15%, var(--color-primary) 83%, transparent 98%)"></div> </div> </div> </div> <div${addAttribute(`col-span-3 flex flex-col-reverse md:flex-row flex-grow align xs:text-xl md:text-base`, "class")}> <div${addAttribute(`grid grid-cols-1 md:grid-cols-2 gap-4 justify-top justify-left items-center pl-2 pr-2`, "class")}> ${CINES.map((cine) => renderTemplate`${renderComponent($$result, "ProyeccionesPelicula", $$ProyeccionesPelicula, { "cine": cine, "pelicula": pelicula })}`)} </div> </div> </div> </div> <iframe class="w-full h-96"${addAttribute(pelicula.videoUrl, "src")}${addAttribute(`Trailer de la pelicula ${pelicula.nombre}`, "title")}></iframe>`;
}, "/Users/diego.ramos/veracines-web/src/components/PeliculaCard.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const $$pelicula = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$pelicula;
  const pelicula = PELICULAS.find((pelicula2) => pelicula2.id === Astro2.params.pelicula);
  if (!pelicula) {
    return new Response(JSON.stringify("Pelicula Not found"), { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": `${pelicula.nombre} en Veracines. Consulta nuestra programaci\xF3n en los cines de Vera y Garrucha.`, "title": `${pelicula.nombre} en cines de Vera y Garrucha - Veracines`, "canonical": `https://veracines.com/peliculas/${pelicula.id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h2${addAttribute(`text-xl col-span-3 text-white bg-primary text-center font-bold pb-2 pt-2 mr-1 ml-1`, "class")}>${pelicula.nombre}</h2> ${renderComponent($$result2, "PeliculaCard", $$PeliculaCard, { "pelicula": pelicula })} </main> ` })} <section></section>`;
}, "/Users/diego.ramos/veracines-web/src/pages/peliculas/[pelicula].astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/peliculas/[pelicula].astro";
const $$url = "/peliculas/[pelicula]";

export { $$pelicula as default, $$file as file, $$url as url };
