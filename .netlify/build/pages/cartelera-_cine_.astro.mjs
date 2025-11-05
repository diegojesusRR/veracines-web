/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_DJGT4-uI.mjs';
import 'kleur/colors';
import { G as GRUPOSPROYECCIONES, C as CINES, a as $$Layout } from '../chunks/Layout_BqNxlYH2.mjs';
import { $ as $$Action, M as Metadata } from '../chunks/metadata_aNZtV9fz.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$ProyeccionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProyeccionCard;
  const { proyecciones, pelicula, cine, entradas } = Astro2.props;
  const DIASSEMANA = ["Domingo", "Lunes", "Martes", "Mi\xE9rcoles", "Jueves", "Viernes", "S\xE1bado"];
  const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const diasProyeccion = [...new Set(proyecciones.map((proyeccion) => {
    const anio = proyeccion.fecha.getFullYear();
    const mes = proyeccion.fecha.getMonth();
    const dia = proyeccion.fecha.getDate();
    return +`${anio}${mes.toString().padStart(2, "0")}${dia.toString().padStart(2, "0")}`;
  }))];
  const mesesProyeccion = [...new Set(proyecciones.map((proyeccion) => proyeccion.fecha.getMonth()))];
  const entradasLink = entradas?.espanol ?? "";
  const entradasVoseLink = entradas?.vose ?? "";
  return renderTemplate`${maybeRenderHead()}<div class="p-4 m-4 grid grid-cols-1 md:grid-cols-3 gap-4 border-2 align-middle bg-white bg-opacity-90 rounded-2xl shadow-xl relative transition-transform md:hover:scale-105 md:[direction:rtl]"> <!-- Título --> <div class="flex flex-col justify-between md:col-span-3"> <h3${addAttribute(`text-2xl text-white bg-${cine.color} text-center font-extrabold pb-2 pt-2 rounded-lg mb-2 px-2 shadow`, "class")}> ${pelicula.nombre} </h3> </div> <!-- Imagen y edad recomendada --> <div class="flex flex-col items-center justify-center rounded-xl bg-gray-50 bg-opacity-80 p-2 md:col-span-1"> <img${addAttribute(`w-full max-w-[180px] border-4 border-${cine.color} rounded-xl shadow-md`, "class")}${addAttribute(`/img/peliculas/${pelicula.image}`, "src")}${addAttribute(`Imagen de la pel\xEDcula: ${pelicula.nombre}`, "alt")} loading="lazy"> <p${addAttribute(`text-center text-xs font-bold w-full text-white p-2 bg-${cine.color} mt-2 rounded-lg shadow`, "class")}> ${pelicula.edadRedomendada} </p> </div> <!-- Contenido principal --> <div class="justify-between md:col-span-2 items-center text-center"> <div class="gap-4 items-center justify-center w-full"> <div class="justify-center items-center"> <p${addAttribute(`text-${cine.color} font-bold underline mb-2`, "class")}>Proyecciones - ${mesesProyeccion.map((x) => MESES[x]).join(" y ")}</p> <ul${addAttribute(`text-${cine.color} list-none list-inside space-y-1`, "class")}> ${diasProyeccion.sort().map((diaProyeccion) => {
    const proyeccionesDia = proyecciones.filter((proyeccion) => {
      const anio = proyeccion.fecha.getFullYear();
      const mes = proyeccion.fecha.getMonth();
      const dia = proyeccion.fecha.getDate();
      return +`${anio}${mes.toString().padStart(2, "0")}${dia.toString().padStart(2, "0")}` == diaProyeccion;
    });
    const ultimaProyeccion = proyeccionesDia.length > 1 && proyeccionesDia.pop();
    return renderTemplate`<li class="flex items-center gap-2 justify-center"> <span class="font-semibold">${DIASSEMANA[proyeccionesDia[0].fecha.getDay()]} ${proyeccionesDia[0].fecha.getDate()}</span> <span>-</span> <span> ${proyeccionesDia.map((proyeccion) => `${proyeccion.hora}h${proyeccion.vose ? " (VOSE)" : ""}`).join(", ")} ${ultimaProyeccion && ` y ${ultimaProyeccion.hora}h${ultimaProyeccion.vose ? " (VOSE)" : ""}`} </span> </li>`;
  })} </ul> </div> <div class="flex flex-col justify-center items-center gap-2 min-w-[180px]"> ${entradasLink && proyecciones[proyecciones.length - 1].fecha >= /* @__PURE__ */ new Date() && renderTemplate`${renderComponent($$result, "Action", $$Action, { "as": "a", "class": `w-full sm:text-xs my-1 bg-${cine.color} text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-opacity-90 transition`, "aria-label": `Enlace a los tickets de ${cine.nombre} para la pel\xEDcula ${pelicula.nombre}`, "href": entradasLink, "color": cine.color, "target": "_blank" }, { "default": ($$result2) => renderTemplate`
🎟️ Comprar entradas
` })}`} ${entradasVoseLink && proyecciones[proyecciones.length - 1].fecha >= /* @__PURE__ */ new Date() && renderTemplate`${renderComponent($$result, "Action", $$Action, { "as": "a", "class": `w-full sm:text-xs bg-gray-800 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-opacity-90 transition`, "aria-label": `Enlace a la cartelera de ${cine.nombre} para la pel\xEDcula ${pelicula.nombre} en VOSE`, "href": entradasVoseLink, "color": cine.color, "target": "_blank" }, { "default": ($$result2) => renderTemplate`
🎟️ Entradas VOSE
` })}`} </div> </div> <div class="relative flex h-2 w-full flex-col items-center my-4"> <div class="absolute w-full items-center justify-between"> <div class="h-[2px] w-full rounded-l-[30%] border-t-0" style="background:linear-gradient(to right, transparent 2%, var(--color-primary) 15%, var(--color-primary) 83%, transparent 98%)"></div> </div> </div> <!-- Descripción --> <p${addAttribute(`text-center text-gray-700 line-clamp-4 mb-2`, "class")}>${pelicula.descripcion}</p> <!-- Botón Leer más --> ${renderComponent($$result, "Action", $$Action, { "as": "a", "href": `https://www.veracines.es/peliculas/${pelicula.id}`, "class": `block w-full text-center text-base mt-2 mb-2 font-bold underline bg-${cine.color} text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition`, "color": cine.color, "target": "_blank" }, { "default": ($$result2) => renderTemplate`
Leer más
` })} </div> </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/proyeccionCard.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$ProyeccionesCine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProyeccionesCine;
  const { cine } = Astro2.props;
  const proximasProyecciones = GRUPOSPROYECCIONES.filter((grupo) => {
    return grupo.cine.url === cine.url && grupo.proyecciones.reduce((a, b) => a.fecha > b.fecha ? a : b).fecha >= /* @__PURE__ */ new Date();
  });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`proyecciones-${cine.url}`, "id")}> ${proximasProyecciones.length === 0 ? renderTemplate`<div${addAttribute(`p-2 m-4 align-middle text-${cine.color}`, "class")}> <p>Actualmente no hay proyecciones disponibles.</p> </div>` : renderTemplate`<div> ${proximasProyecciones.filter((x) => x.cine.url === cine.url).map((grupo) => renderTemplate`${renderComponent($$result, "ProyeccionCard", $$ProyeccionCard, { "cine": cine, "entradas": grupo.entradas, "proyecciones": grupo.proyecciones, "pelicula": grupo.pelicula })}`)} </div>`} </section>`;
}, "/Users/diego.ramos/veracines-web/src/components/proyeccionesCine.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const $$Carteleracine = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carteleracine;
  const cine = CINES.find((cine2) => cine2.url === Astro2.params.cine);
  if (!cine) return new Response(JSON.stringify("Cine no encontrado"), { status: 404 });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata[`cartelera-${cine.url}`]?.description, "title": Metadata[`cartelera-${cine.url}`]?.title, "canonical": Metadata[`cartelera-${cine.url}`]?.canonical }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-3xl mx-auto px-4"> <section class="mb-8"> <h1${addAttribute(`text-3xl sm:text-4xl font-extrabold text-center text-${cine.color} mb-2 drop-shadow`, "class")}>
Cartelera de ${cine.nombre} </h1> <h2${addAttribute(`text-center text-lg sm:text-xl text-${cine.color} mb-4`, "class")}>
Próximas películas en ${cine.nombre}. Consulta nuestra programación.
</h2> ${cine.ventaOnline ? renderTemplate`${renderComponent($$result2, "Action", $$Action, { "as": "a", "class": `block w-full mx-auto text-center text-base sm:text-sm my-2 bg-${cine.color} text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-opacity-90 transition`, "aria-label": `Enlace a todos los tickets disponibles de ${cine.nombre}`, "color": cine.color, "href": "https://kinetike.com:83/views/init.aspx?cine=REGIO" }, { "default": ($$result3) => renderTemplate`
🎟️ Comprar entradas online
` })}` : renderTemplate`<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded mb-4 text-center"> <p class="font-semibold">Entradas solo en taquilla</p> <p class="text-sm"> ${cine.nombre} cuenta con asientos no numerados, por lo que no es posible realizar venta online.<br>
La venta de entradas se realizará exclusivamente en taquilla, el mismo día de la proyección, hasta completar aforo.<br> <span class="font-bold">¡Te recomendamos venir con antelación para asegurarte tu plaza!</span> </p> </div>`} ${cine.horaFijaProyeccion && renderTemplate`<div${addAttribute(`flex items-center justify-center mb-4`, "class")}> <span${addAttribute(`inline-block bg-${cine.color} bg-opacity-90 text-white text-base sm:text-lg rounded-lg px-5 py-3 shadow`, "class")}>
🕒 Todas las funciones de hoy empiezan a las <b>${cine.horaFijaProyeccion}</b>. La taquilla abre 45 minutos antes de la primera proyección.
</span> </div>`} </section> <section> ${renderComponent($$result2, "ProyeccionesCine", $$ProyeccionesCine, { "cine": cine })} </section> </main> ` })}`;
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
