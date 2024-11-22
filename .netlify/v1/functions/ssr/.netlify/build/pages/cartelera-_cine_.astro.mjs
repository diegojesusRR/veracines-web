import { G as GRUPOSPROYECCIONES, C as CINES, a as $$Layout } from '../chunks/Layout_JCyn4V_h.mjs';
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_DJGT4-uI.mjs';
import 'kleur/colors';
import { $ as $$Action, M as Metadata } from '../chunks/metadata_BZOBfiP0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$ProyeccionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProyeccionCard;
  const { proyecciones, pelicula, cine, entradas } = Astro2.props;
  const DIASSEMANA = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado"];
  const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const diasProyeccion = [...new Set(proyecciones.map((proyeccion) => proyeccion.fecha.getDate()))];
  const mesesProyeccion = [...new Set(proyecciones.map((proyeccion) => proyeccion.fecha.getMonth()))];
  const entradasLink = entradas?.espanol ?? "";
  const entradasVoseLink = entradas?.vose ?? "";
  return renderTemplate`${maybeRenderHead()}<div class="p-2 m-4 grid xs:grid-cols-1 md:grid-cols-4 grid-flow-row border-2 align-middle bg-white bg-opacity-8 rounded-lg relative"> <h3${addAttribute(`text-xl col-span-3 text-white bg-${cine.color} text-center font-bold pb-2 pt-2 mr-1 ml-1 rounded-lg mb-2 px-2`, "class")}> ${pelicula.nombre} </h3> <div class="row-span-3 col-span-1 mr-1 ml-1 rounded-lg"> <img${addAttribute(`w-full border-4 border-${cine.color} rounded-lg`, "class")}${addAttribute(`/img/peliculas/${pelicula.image}`, "src")}${addAttribute(`Imagen de la pel\xEDcula: ${pelicula.nombre}`, "alt")}> <p${addAttribute(`text-center text-${cine.color} text-xs font-bold w-auto text-white p-2 bg-${cine.color} mt-2 rounded-lg`, "class")}> ${pelicula.edadRedomendada} </p> </div> <div${addAttribute(`col-span-3 flex flex-col-reverse md:flex-row flex-grow align xs:text-xl md:text-base`, "class")}> <div${addAttribute(`flex flex-col justify-around items-center p-2`, "class")}> <div class="flex flex-col align-left text-center"> <p${addAttribute(`flex-1 text-${cine.color} font-bold underline mt-2`, "class")}>Proyecciones - ${mesesProyeccion.map((x) => MESES[x]).join(" y ")}</p> <ul${addAttribute(`flex-2 text-${cine.color} list-none list-inside`, "class")}> ${diasProyeccion.sort().map((dia) => {
    const proyeccionesDia = proyecciones.filter((proyeccion) => proyeccion.fecha.getDate() === dia);
    const ultimaProyeccion = proyeccionesDia.length > 1 && proyeccionesDia.pop();
    return renderTemplate`<li> <span>${DIASSEMANA[proyeccionesDia[0].fecha.getDay()]} ${proyeccionesDia[0].fecha.getDate()}</span>
- ${proyeccionesDia.map((proyeccion) => `${proyeccion.hora} ${proyeccion.vose ? " (VOSE)" : ""}`).join(", ")} ${ultimaProyeccion && ` y ${ultimaProyeccion.hora} ${ultimaProyeccion.vose ? " (VOSE)" : ""}`} </li>`;
  })} </ul> </div> ${entradasLink && proyecciones[proyecciones.length - 1].fecha >= /* @__PURE__ */ new Date() && renderTemplate`${renderComponent($$result, "Action", $$Action, { "as": "a", "class": `w-3/4 sm:text-xs my-1`, "aria-label": `Enlace a los tickets de ${cine.nombre} para la pel\xEDcula ${pelicula.nombre}`, "href": entradasLink, "color": cine.color, "target": "_blank" }, { "default": ($$result2) => renderTemplate`
Comprar entradas
` })}`} ${entradasVoseLink && proyecciones[proyecciones.length - 1].fecha >= /* @__PURE__ */ new Date() && renderTemplate`${renderComponent($$result, "Action", $$Action, { "as": "a", "class": `w-3/4 sm:text-xs`, "aria-label": `Enlace a la cartelera de ${cine.nombre} para la pel\xEDcula ${pelicula.nombre} en VOSE`, "href": entradasVoseLink, "color": cine.color, "target": "_blank" }, { "default": ($$result2) => renderTemplate`
Comprar entradas VOSE
` })}`} <div class="relative flex h-2 w-full flex-col items-center m-4"> <div class="absolute w-full items-center justify-between"> <div class="h-[2px] w-full rounded-l-[30%] border-t-0" style="background:linear-gradient(to right, transparent 2%, var(--color-primary) 15%, var(--color-primary) 83%, transparent 98%)"></div> </div> </div> <p${addAttribute(`text-center text-${cine.color} line-clamp-4`, "class")}>${pelicula.descripcion}</p> <a${addAttribute(`https://www.veracines.es/peliculas/${pelicula.id}`, "href")}${addAttribute(`text-right text-${cine.color} mt-4 mb-2 font-bold`, "class")}>Leer mas</a> </div> </div> </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/proyeccionCard.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$ProyeccionesCine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProyeccionesCine;
  const { cine } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`proyecciones-${cine.url}`, "id")}> ${GRUPOSPROYECCIONES.length === 0 ? renderTemplate`<div${addAttribute(`p-2 m-4 align-middle text-${cine.color}`, "class")}> <p>Actualmente no hay proyecciones disponibles.</p> </div>` : renderTemplate`<div> ${renderComponent($$result, "Action", $$Action, { "as": "a", "class": `w-full sm:text-xs my-1`, "aria-label": `Enlace a todos los tickets disponibles de ${cine.nombre}`, "color": cine.color, "href": "https://kinetike.com:83/views/init.aspx?cine=REGIO" }, { "default": ($$result2) => renderTemplate`Encuentra tus entradas aquí
` })} ${GRUPOSPROYECCIONES.filter((x) => x.cine.url === cine.url).map((grupo) => renderTemplate`${renderComponent($$result, "ProyeccionCard", $$ProyeccionCard, { "cine": cine, "entradas": grupo.entradas, "proyecciones": grupo.proyecciones, "pelicula": grupo.pelicula })}`)} </div>`})
    }
</section>`;
}, "/Users/diego.ramos/veracines-web/src/components/proyeccionesCine.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const $$Carteleracine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carteleracine;
  const cine = CINES.find((cine2) => cine2.url === Astro2.params.cine);
  if (!cine) {
    return new Response(JSON.stringify("Cine Not found"), { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata[`cartelera-${cine.url}`].description, "title": Metadata[`cartelera-${cine.url}`].title, "canonical": Metadata[`cartelera-${cine.url}`].canonical }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1${addAttribute(`text-xl text-${cine.color} text-center font-bold`, "class")}>Cartelera de ${cine.nombre}</h1> <h2${addAttribute(`text-center text-lg text-${cine.color}`, "class")}>Próximas películas en ${cine.nombre}. Consulta nuestra programación.</h2> ${cine.horaFijaProyeccion ? renderTemplate`<p${addAttribute(`text-center text-sm text-white mt-2 border-2 rounded-lg text-center p-2 w-5/6 m-auto bg-${cine.color} bg-opacity-80`, "class")}>En ${cine.nombre} todas las proyecciones comenzarán a las ${cine.horaFijaProyeccion}. La taquilla estará disponible 45 minutos antes del inicio de la proyección</p>` : null} ${renderComponent($$result2, "ProyeccionesCine", $$ProyeccionesCine, { "cine": cine })} </main> ` })} <section></section>`;
}, "/Users/diego.ramos/veracines-web/src/pages/cartelera-[cine].astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/cartelera-[cine].astro";
const $$url = "/cartelera-[cine]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Carteleracine,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
