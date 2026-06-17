/* empty css                                          */
import { f as createAstro, g as createComponent, m as maybeRenderHead, i as addAttribute, r as renderTemplate, j as renderComponent } from '../../chunks/astro/server_DfvI8eY9.mjs';
import 'kleur/colors';
import { G as GRUPOSPROYECCIONES, C as CINES, P as PELICULAS, a as $$Layout } from '../../chunks/Layout_4_2uclTh.mjs';
import 'clsx';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$ProyeccionesPelicula = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProyeccionesPelicula;
  const { pelicula, cine } = Astro2.props;
  const DIASSEMANA = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
  const grupoProyeccion = GRUPOSPROYECCIONES.filter(
    (grupo) => grupo.cine.url == cine.url && pelicula.id === grupo.pelicula.id && grupo.proyecciones[0].fecha >= /* @__PURE__ */ new Date()
  );
  const proyecciones = grupoProyeccion[0]?.proyecciones ?? [];
  const diasProyeccion = [...new Set(proyecciones.map(
    (p) => `${p.fecha.getFullYear()}${p.fecha.getMonth().toString().padStart(2, "0")}${p.fecha.getDate().toString().padStart(2, "0")}`
  ))].sort();
  return renderTemplate`${maybeRenderHead()}<div class="rounded-2xl border-2 bg-white bg-opacity-90 shadow-lg overflow-hidden cine-card"${addAttribute(`--cine-color: var(--color-${cine.color})`, "style")} data-astro-cid-autajkkl> <div class="cine-card__header px-4 py-2.5 flex items-center justify-between gap-2" data-astro-cid-autajkkl> <h3 class="text-white text-sm font-extrabold truncate" data-astro-cid-autajkkl>${cine.nombre}</h3> <a${addAttribute(`/cartelera-${cine.url}`, "href")} class="text-white/90 text-[11px] font-semibold whitespace-nowrap flex items-center gap-1 hover:text-white transition-colors" data-astro-cid-autajkkl>
Ver cartelera
<svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" data-astro-cid-autajkkl> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-astro-cid-autajkkl></path> </svg> </a> </div> ${proyecciones.length === 0 ? renderTemplate`<div class="p-4 text-center" data-astro-cid-autajkkl> <p class="text-sm text-gray-600" data-astro-cid-autajkkl>Sin proyecciones disponibles en este cine.</p> </div>` : renderTemplate`<div class="p-3 grid grid-cols-1 gap-2" data-astro-cid-autajkkl> ${diasProyeccion.map((dia) => {
    const proyeccionesDia = proyecciones.filter(
      (p) => `${p.fecha.getFullYear()}${p.fecha.getMonth().toString().padStart(2, "0")}${p.fecha.getDate().toString().padStart(2, "0")}` === dia
    );
    const diaLabel = `${DIASSEMANA[proyeccionesDia[0].fecha.getDay()]} ${proyeccionesDia[0].fecha.getDate()}`;
    const horas = proyeccionesDia.map((p) => `${p.hora}h${p.vose ? " (VOSE)" : ""}`).join(", ");
    return renderTemplate`<div class="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-center" data-astro-cid-autajkkl> <p class="cine-card__day text-xs font-extrabold" data-astro-cid-autajkkl>${diaLabel}</p> <p class="text-xs text-gray-700 mt-0.5 leading-relaxed" data-astro-cid-autajkkl>${horas}</p> </div>`;
  })} </div>`} </div> `;
}, "/Users/diego.ramos/veracines-web/src/components/ProyeccionesPelicula.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$PeliculaCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PeliculaCard;
  const { pelicula } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="space-y-5"> <!-- Hero: fondo difuminado + póster + edad recomendada --> <div class="relative rounded-2xl overflow-hidden shadow-2xl min-h-[180px]"> <img${addAttribute(`/img/peliculas/${pelicula.image}`, "src")} alt="" aria-hidden="true" loading="lazy" decoding="async" width="1200" height="675" class="absolute inset-0 w-full h-full object-cover scale-110 blur-md brightness-[0.25]"> <div class="relative z-10 flex flex-col sm:flex-row items-center sm:items-end justify-between gap-5 p-6"> <div class="flex flex-col items-center sm:items-start gap-2 sm:self-stretch sm:justify-end"> <h1 class="text-left text-white text-2xl sm:text-3xl font-extrabold leading-tight text-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"> ${pelicula.nombre} </h1> <span class="inline-flex items-center gap-1.5 text-xs font-bold bg-white/15 backdrop-blur-sm text-white border border-white/20 rounded-full px-4 py-1.5 text-center"> ${pelicula.edadRedomendada} </span> </div> <img class="w-46 sm:w-44 rounded-xl border-4 border-white/30 shadow-2xl object-cover flex-shrink-0"${addAttribute(`/img/peliculas/${pelicula.image}`, "src")}${addAttribute(`Cartel de ${pelicula.nombre}`, "alt")} loading="eager" fetchpriority="high" decoding="async" width="300" height="450"> </div> </div> <!-- Sinopsis --> <section class="bg-white/85 backdrop-blur rounded-2xl shadow p-5 sm:p-6"> <h2 class="text-primary font-bold text-lg mb-3 flex items-center gap-2">
📖 Sinopsis
</h2> <p class="text-gray-700 leading-relaxed text-justify">${pelicula.descripcion}</p> </section> <!-- Próximas proyecciones --> <section class="bg-white/85 backdrop-blur rounded-2xl shadow p-5 sm:p-6"> <h2 class="text-primary font-bold text-lg mb-4 flex items-center gap-2">
🎬 Próximas proyecciones
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4"> ${CINES.map((cine) => renderTemplate`${renderComponent($$result, "ProyeccionesPelicula", $$ProyeccionesPelicula, { "cine": cine, "pelicula": pelicula })}`)} </div> </section> <!-- Tráiler --> <section class="rounded-2xl overflow-hidden shadow-xl"> <div class="bg-gray-900 px-5 py-3 flex items-center gap-2"> <h2 class="text-white font-bold text-base flex items-center gap-2">
🎥 Tráiler oficial
</h2> </div> <div class="aspect-video bg-black"> <iframe class="w-full h-full"${addAttribute(pelicula.videoUrl, "src")}${addAttribute(`Tr\xE1iler de ${pelicula.nombre}`, "title")} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div> </section> </article>`;
}, "/Users/diego.ramos/veracines-web/src/components/PeliculaCard.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const $$pelicula = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$pelicula;
  const pelicula = PELICULAS.find((pelicula2) => pelicula2.id === Astro2.params.pelicula);
  if (!pelicula) {
    return new Response(JSON.stringify("Pelicula Not found"), { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": `${pelicula.nombre} en Veracines. Consulta nuestra programaci\xF3n en los cines de Vera y Garrucha.`, "title": `${pelicula.nombre} en cines de Vera y Garrucha - Veracines`, "canonical": `www.veracines.com/peliculas/${pelicula.id}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-4xl mx-auto px-4 py-6"> <nav class="mb-5" aria-label="Navegación de vuelta"> <a href="/" class="inline-flex items-center gap-1 text-sm text-primary hover:underline font-semibold transition-opacity hover:opacity-75">
← Inicio
</a> <span class="text-gray-400 mx-2">/</span> <span class="text-sm text-gray-500 truncate max-w-[200px] inline-block align-middle">${pelicula.nombre}</span> </nav> ${renderComponent($$result2, "PeliculaCard", $$PeliculaCard, { "pelicula": pelicula })} </main> ` })}`;
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
