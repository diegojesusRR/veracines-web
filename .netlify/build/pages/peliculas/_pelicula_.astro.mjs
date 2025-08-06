/* empty css                                          */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../../chunks/astro/server_DJGT4-uI.mjs';
import 'kleur/colors';
import { G as GRUPOSPROYECCIONES, C as CINES, P as PELICULAS, a as $$Layout } from '../../chunks/Layout_03RL2Gkt.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$ProyeccionesPelicula = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProyeccionesPelicula;
  const { pelicula, cine } = Astro2.props;
  const DIASSEMANA = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const grupoProyeccion = GRUPOSPROYECCIONES.filter((grupo) => grupo.cine.url == cine.url && pelicula.id === grupo.pelicula.id && grupo.proyecciones[0].fecha >= /* @__PURE__ */ new Date());
  const proyecciones = grupoProyeccion[0]?.proyecciones;
  const diasProyeccion = [...new Set(proyecciones?.map((proyeccion) => `${proyeccion.fecha.getFullYear()}${proyeccion.fecha.getMonth()}${proyeccion.fecha.getDate()}`))].sort();
  return renderTemplate`${proyecciones && proyecciones.length > 0 && renderTemplate`${maybeRenderHead()}<div class="flex flex-col align-left text-center mb-5 justify-center"><h3${addAttribute(`flex-1 text-${cine.color} font-bold underline`, "class")}>Proyecciones ${cine.corto}</h3><ul${addAttribute(`flex-2 text-${cine.color} list-none list-inside`, "class")}>${diasProyeccion.sort().map((dia) => {
    const proyeccionesDia = proyecciones.filter((proyeccion) => `${proyeccion.fecha.getFullYear()}${proyeccion.fecha.getMonth()}${proyeccion.fecha.getDate()}` === dia);
    const ultimaProyeccion = proyeccionesDia.length > 1 && proyeccionesDia.pop();
    const diaText = `${DIASSEMANA[proyeccionesDia[0].fecha.getDay()]} ${proyeccionesDia[0].fecha.getDate()}`;
    return renderTemplate`<li><span>${diaText}</span><span> - ${proyeccionesDia.map((proyeccion) => `${proyeccion.hora}h ${proyeccion.vose ? " (VOSE)" : ""}`).join(", ")}${ultimaProyeccion && ` y ${ultimaProyeccion.hora}h ${ultimaProyeccion.vose ? " (VOSE)" : ""}`}</span></li>`;
  })}</ul></div>`}`;
}, "/Users/diego.ramos/veracines-web/src/components/ProyeccionesPelicula.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$PeliculaCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PeliculaCard;
  const { pelicula } = Astro2.props;
  const color = "primary";
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-3"> <div class="row-span-3 col-span-1 mr-1 ml-1"> <img${addAttribute(`w-full border-4 border-${color} rounded-lg`, "class")}${addAttribute(`/img/peliculas/${pelicula.image}`, "src")}${addAttribute(`Imagen de la pelicula: ${pelicula.nombre}`, "alt")}> <p${addAttribute(`text-center text-${color} text-xs font-bold w-auto text-white p-2 bg-${color} rounded-lg mt-2`, "class")}>${pelicula.edadRedomendada}</p> </div> <div class="col-span-2 flex flex-col justify-between"> <div class="flex flex-col justify-around justify-left items-center p-2"> <div class="flex flex-col align-left text-center"> <h3${addAttribute(`flex-1 text-${color} font-bold underline mt-2`, "class")}>Sinopsis</h3> <p${addAttribute(`flex-2 text-${color} text-justify`, "class")}>${pelicula.descripcion}</p> </div> <div class="relative flex h-2 w-full flex-col items-center m-4"> <div class=" absolute w-full items-center justify-between"> <div class="h-[2px] w-full rounded-l-[30%] border-t-0" style="background:linear-gradient(to right, transparent 2%, var(--color-primary) 15%, var(--color-primary) 83%, transparent 98%)"></div> </div> </div> </div> <div${addAttribute(`col-span-3 flex flex-col-reverse md:flex-row flex-grow align xs:text-xl md:text-base justify-center`, "class")}> <div${addAttribute(`grid grid-cols-1 md:grid-cols-2 gap-4 justify-top justify-left items-start pl-2 pr-2`, "class")}> ${CINES.map((cine) => renderTemplate`${renderComponent($$result, "ProyeccionesPelicula", $$ProyeccionesPelicula, { "cine": cine, "pelicula": pelicula })}`)} </div> </div> </div> </div> <iframe class="w-full h-96 rounded-lg"${addAttribute(pelicula.videoUrl, "src")}${addAttribute(`Trailer de la pelicula ${pelicula.nombre}`, "title")}></iframe>`;
}, "/Users/diego.ramos/veracines-web/src/components/PeliculaCard.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const $$pelicula = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$pelicula;
  const pelicula = PELICULAS.find((pelicula2) => pelicula2.id === Astro2.params.pelicula);
  if (!pelicula) {
    return new Response(JSON.stringify("Pelicula Not found"), { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": `${pelicula.nombre} en Veracines. Consulta nuestra programaci\xF3n en los cines de Vera y Garrucha.`, "title": `${pelicula.nombre} en cines de Vera y Garrucha - Veracines`, "canonical": `https://veracines.com/peliculas/${pelicula.id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h2${addAttribute(`text-xl col-span-3 text-white bg-primary text-center font-bold pb-2 pt-2 mr-1 ml-1 rounded-lg`, "class")}>${pelicula.nombre}</h2> ${renderComponent($$result2, "PeliculaCard", $$PeliculaCard, { "pelicula": pelicula })} </main> ` })} <section></section>`;
}, "/Users/diego.ramos/veracines-web/src/pages/peliculas/[pelicula].astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/peliculas/[pelicula].astro";
const $$url = "/peliculas/[pelicula]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$pelicula,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
