/* empty css                                       */
import { f as createAstro, g as createComponent, m as maybeRenderHead, i as addAttribute, r as renderTemplate, j as renderComponent } from '../chunks/astro/server_DfvI8eY9.mjs';
import 'kleur/colors';
import { G as GRUPOSPROYECCIONES, C as CINES, a as $$Layout } from '../chunks/Layout_4_2uclTh.mjs';
import { $ as $$Action, M as Metadata } from '../chunks/metadata_Dz0VPo5a.mjs';
/* empty css                                            */
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$ProyeccionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProyeccionCard;
  const { proyecciones, pelicula, cine, entradas } = Astro2.props;
  const DIASSEMANA = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  const MESES = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const proyeccionesFuturas = proyecciones.filter((p) => p.fecha >= /* @__PURE__ */ new Date());
  const diasProyeccion = [...new Set(proyeccionesFuturas.map((p) => {
    const anio = p.fecha.getFullYear();
    const mes = p.fecha.getMonth();
    const dia = p.fecha.getDate();
    return +`${anio}${mes.toString().padStart(2, "0")}${dia.toString().padStart(2, "0")}`;
  }))];
  const mesesProyeccion = [...new Set(proyeccionesFuturas.map((p) => p.fecha.getMonth()))];
  const entradasLink = entradas?.espanol ?? "";
  const entradasVoseLink = entradas?.vose ?? "";
  const tieneProyecciones = proyeccionesFuturas.length > 0;
  return renderTemplate`${maybeRenderHead()}<article class="m-4 rounded-2xl overflow-hidden shadow-xl bg-white/90 backdrop-blur space-y-4"${addAttribute(`--cine-color: var(--color-${cine.color})`, "style")} data-astro-cid-3vwqciy3> <div class="relative min-h-[240px] overflow-hidden" data-astro-cid-3vwqciy3> <img${addAttribute(`/img/peliculas/${pelicula.image}`, "src")} alt="" aria-hidden="true" loading="lazy" decoding="async" width="1200" height="675" class="absolute inset-0 w-full h-full object-cover scale-110 blur-md brightness-[0.3]" data-astro-cid-3vwqciy3> <div class="relative z-10 min-h-[240px] p-4 sm:p-5 grid grid-cols-[1fr_144px] gap-3 sm:gap-4 items-stretch" data-astro-cid-3vwqciy3> <div class="min-w-0 flex flex-col justify-between" data-astro-cid-3vwqciy3> <span class="inline-flex items-center justify-center text-[11px] font-bold bg-white/15 backdrop-blur-sm text-white border border-white/20 rounded-full px-3 py-1 max-w-full sm:max-w-fit overflow-hidden" data-astro-cid-3vwqciy3> <span class="edad-badge whitespace-nowrap" data-astro-cid-3vwqciy3>${pelicula.edadRedomendada}</span> </span> <h3 class="text-white text-2xl sm:text-3xl font-extrabold leading-tight drop-shadow" data-astro-cid-3vwqciy3> ${pelicula.nombre} </h3> </div> <div class="self-stretch" data-astro-cid-3vwqciy3> <img class="h-full w-full rounded-xl border-4 border-white/30 shadow-2xl object-cover"${addAttribute(`/img/peliculas/${pelicula.image}`, "src")}${addAttribute(`Cartel de ${pelicula.nombre}`, "alt")} loading="lazy" decoding="async" width="300" height="450" data-astro-cid-3vwqciy3> </div> </div> </div> <section class="px-4 sm:px-5" data-astro-cid-3vwqciy3> <h4 class="proyeccion-title font-bold text-base mb-2" data-astro-cid-3vwqciy3>
Proyecciones ${mesesProyeccion.length > 0 ? `- ${mesesProyeccion.map((x) => MESES[x]).join(" y ")}` : ""} </h4> ${!tieneProyecciones ? renderTemplate`<div class="sin-proyecciones p-3 rounded-lg" data-astro-cid-3vwqciy3> <p class="font-semibold" data-astro-cid-3vwqciy3>Actualmente no hay proyecciones disponibles.</p> </div>` : renderTemplate`<div class="grid grid-cols-2 lg:grid-cols-4 gap-2" data-astro-cid-3vwqciy3> ${diasProyeccion.sort().map((diaProyeccion) => {
    const proyeccionesDia = proyeccionesFuturas.filter((p) => {
      const anio = p.fecha.getFullYear();
      const mes = p.fecha.getMonth();
      const dia = p.fecha.getDate();
      return +`${anio}${mes.toString().padStart(2, "0")}${dia.toString().padStart(2, "0")}` === diaProyeccion;
    });
    const diaLabel = `${DIASSEMANA[proyeccionesDia[0].fecha.getDay()]} ${proyeccionesDia[0].fecha.getDate()}`;
    const horas = proyeccionesDia.map((p) => `${p.hora}h${p.vose ? " (VOSE)" : ""}`).join(", ");
    return renderTemplate`<div class="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center" data-astro-cid-3vwqciy3> <p class="dia-label font-bold text-md leading-tight" data-astro-cid-3vwqciy3>${diaLabel}</p> <p class="text-sm text-gray-700 mt-1 leading-tight" data-astro-cid-3vwqciy3>${horas}</p> </div>`;
  })} </div>`} </section> <section class="px-4 sm:px-5 pb-4" data-astro-cid-3vwqciy3> <div class="mb-4" data-astro-cid-3vwqciy3> <span class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5" data-astro-cid-3vwqciy3> <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" data-astro-cid-3vwqciy3> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" data-astro-cid-3vwqciy3></path> </svg>
Sinopsis
</span> <p class="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-1.5" data-astro-cid-3vwqciy3> ${pelicula.descripcion} </p> </div> <div class="flex flex-col sm:flex-row gap-2" data-astro-cid-3vwqciy3> ${renderComponent($$result, "Action", $$Action, { "as": "a", "href": `/peliculas/${pelicula.id}`, "class": "flex-1 justify-center", "color": cine.color, "target": "_blank", "data-astro-cid-3vwqciy3": true }, { "default": ($$result2) => renderTemplate`
Leer más
` })} ${entradasLink && tieneProyecciones && renderTemplate`${renderComponent($$result, "Action", $$Action, { "as": "a", "class": "flex-1 justify-center", "aria-label": `Enlace a los tickets de ${cine.nombre} para la pelicula ${pelicula.nombre}`, "href": entradasLink, "color": cine.color, "target": "_blank", "data-astro-cid-3vwqciy3": true }, { "default": ($$result2) => renderTemplate`
Entradas
` })}`} ${entradasVoseLink && tieneProyecciones && renderTemplate`${renderComponent($$result, "Action", $$Action, { "as": "a", "class": "flex-1 justify-center", "aria-label": `Enlace a la cartelera de ${cine.nombre} para la pelicula ${pelicula.nombre} en VOSE`, "href": entradasVoseLink, "color": "secondary", "target": "_blank", "data-astro-cid-3vwqciy3": true }, { "default": ($$result2) => renderTemplate`
VOSE
` })}`} </div> </section> </article>   `;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata[`cartelera-${cine.url}`]?.description, "title": Metadata[`cartelera-${cine.url}`]?.title, "canonical": Metadata[`cartelera-${cine.url}`]?.canonical, "data-astro-cid-atfez4uf": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-6"${addAttribute(`--cine-color: var(--color-${cine.color})`, "style")} data-astro-cid-atfez4uf> <!-- Miga de pan --> <nav class="mb-5" aria-label="Miga de pan" data-astro-cid-atfez4uf> <a href="/" class="inline-flex items-center gap-1 text-sm text-primary hover:underline font-semibold transition-opacity hover:opacity-75" data-astro-cid-atfez4uf>
← Inicio
</a> <span class="text-gray-400 mx-2" data-astro-cid-atfez4uf>/</span> <span class="text-sm text-gray-500 truncate max-w-[200px] inline-block align-middle" data-astro-cid-atfez4uf>${cine.nombre}</span> </nav> <section class="mb-8" data-astro-cid-atfez4uf> <h1 class="cartelera-title text-3xl sm:text-4xl font-extrabold text-center mb-2 drop-shadow" data-astro-cid-atfez4uf>
Cartelera de ${cine.nombre} </h1> <h2 class="cartelera-subtitle text-center text-lg sm:text-xl mb-4" data-astro-cid-atfez4uf>
Próximas películas en ${cine.nombre}. Consulta nuestra programación.
</h2> ${cine.ventaOnline ? renderTemplate`${renderComponent($$result2, "Action", $$Action, { "as": "a", "class": "block w-full mx-auto text-center my-2", "aria-label": `Enlace a todos los tickets disponibles de ${cine.nombre}`, "color": cine.color, "href": "https://kinetike.com:83/views/init.aspx?cine=REGIO", "data-astro-cid-atfez4uf": true }, { "default": ($$result3) => renderTemplate`
🎟️ Comprar entradas online
` })}` : renderTemplate`<div class="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded mb-4 text-center" data-astro-cid-atfez4uf> <p class="font-semibold" data-astro-cid-atfez4uf>Entradas solo en taquilla</p> <p class="text-sm" data-astro-cid-atfez4uf> ${cine.nombre} cuenta con asientos no numerados, por lo que no es posible realizar venta online.<br data-astro-cid-atfez4uf>
La venta de entradas se realizará exclusivamente en taquilla, el mismo día de la proyección, hasta completar aforo.<br data-astro-cid-atfez4uf> <span class="font-bold" data-astro-cid-atfez4uf>¡Te recomendamos venir con antelación para asegurarte tu plaza!</span> </p> </div>`} ${cine.horaFijaProyeccion && renderTemplate`<div class="flex items-center justify-center mb-4" data-astro-cid-atfez4uf> <span class="hora-badge inline-block text-white text-base sm:text-lg rounded-lg px-5 py-3 shadow" data-astro-cid-atfez4uf>
🕒 Todas las funciones de hoy empiezan a las <b data-astro-cid-atfez4uf>${cine.horaFijaProyeccion}</b>. La taquilla abre 45 minutos antes de la primera proyección.
</span> </div>`} </section> <section data-astro-cid-atfez4uf> ${renderComponent($$result2, "ProyeccionesCine", $$ProyeccionesCine, { "cine": cine, "data-astro-cid-atfez4uf": true })} </section> </main> ` })} `;
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
