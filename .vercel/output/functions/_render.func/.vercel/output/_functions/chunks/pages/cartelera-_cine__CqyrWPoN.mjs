/* empty css                                     */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_BvmcH-Yh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { M as Metadata, $ as $$Layout } from './404_CgcowttU.mjs';
import 'clsx';

const CINES = [
  {
    url: "vera",
    nombre: "Cine Terraza de Verano de Vera",
    color: "primary",
    localizacion: {
      ubicacionKey: "!1m18!1m12!1m3!1d6352.183416503645!2d-1.8651944235623443!3d37.24553154246919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad505dc0deb95%3A0x20c4e16b3ec9e8ba!2sCine%20de%20Vera!5e0!3m2!1ses!2ses!4v1715622722058!5m2!1ses!2ses",
      direccion: "C. Antonio de Torres, 2, 04620 Vera, Almería",
      descripcion: "Situado junto al colegio Reyes Católicos, en la calle Antonio de Torres, el cine de verano de Vera es un lugar ideal para disfrutar de una película al aire libre en Vera."
    },
    servicios: []
  },
  {
    url: "garrucha",
    nombre: "Cine Tenis de Garrucha",
    "color": "primary",
    localizacion: {
      ubicacionKey: "!1m18!1m12!1m3!1d25418.563129508486!2d-1.8616586513771942!3d37.21636849263374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7b29f1d4fe4b9b%3A0xda525c0a7e7bc5d5!2sCine%20Tenis!5e0!3m2!1ses!2ses!4v1715623188288!5m2!1ses!2ses",
      direccion: "C. Tenis, 04630 Garrucha, Almería",
      descripcion: "Se encuentra junto a Mercadona en Garrucha, en la calle Tenis, el cine Tenis de Garrucha es un lugar ideal para disfrutar de una película al aire libre en Garrucha."
    },
    servicios: []
  },
  {
    url: "regio",
    nombre: "Cine Regio de Vera",
    color: "primary",
    localizacion: {
      ubicacionKey: "!1m18!1m12!1m3!1d3176.0496114881794!2d-1.8706054238921004!3d37.24653037212324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad503b6424b21%3A0xb294666e35a7e06c!2sC.%20Radio%20Nacional%2C%20s%2Fn%2C%2004620%20Vera%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1716051070703!5m2!1ses!2ses",
      direccion: "C. Radio Nacional, s/n, 04620 Vera, Almería",
      descripcion: "Situado en pleno centro de Vera, junto a la Plaza Mayor, en Cine Regio de Vera entre otorño y primavera podrás disfrutar de las mejores películas en un ambiente único."
    },
    servicios: []
  }
];

const proyeccionesGarrucha = [
  /*{
      grupo: 1,
      cineId: 'garrucha',
      peliculaId: 'garfield',
      fecha: new Date('2024-06-24'),
      hora: '22:00'
  },
  {
      grupo: 1,
      cineId: 'garrucha',
      peliculaId: 'garfield',
      fecha: new Date('2024-06-25'),
      hora: '22:00'
  },
  {
      grupo: 1,
      cineId: 'garrucha',
      peliculaId: 'garfield',
      fecha: new Date('2024-06-26'),
      hora: '20:00'
  },
  {
      grupo: 1,
      cineId: 'garrucha',
      peliculaId: 'garfield',
      fecha: new Date('2024-06-26'),
      hora: '22:00'
  },
  {
      grupo: 2,
      cineId: 'garrucha',
      peliculaId: 'deadpool-y-lobezno',
      fecha: new Date('2024-06-28'),
      hora: '22:00'
  },
  {
      grupo: 2,
      cineId: 'garrucha',
      peliculaId: 'deadpool-y-lobezno',
      fecha: new Date('2024-06-29'),
      hora: '22:00'
  },
  {
      grupo: 2,
      cineId: 'garrucha',
      peliculaId: 'deadpool-y-lobezno',
      fecha: new Date('2024-06-30'),
      hora: '22:00'
  },
  {
      grupo: 2,
      cineId: 'garrucha',
      peliculaId: 'deadpool-y-lobezno',
      fecha: new Date('2024-07-01'),
      hora: '22:00'
  },*/
];
const proyeccionesVera = [
  /*{
      grupo: 1,
      cineId: 'vera',
      peliculaId: 'garfield',
      fecha: new Date('2024-06-24'),
      hora: '22:00'
  },
  {
      grupo: 1,
      cineId: 'vera',
      peliculaId: 'garfield',
      fecha: new Date('2024-06-25'),
      hora: '22:00'
  },
  {
      grupo: 1,
      cineId: 'vera',
      peliculaId: 'garfield',
      fecha: new Date('2024-06-26'),
      hora: '22:00'
  },
  {
      grupo: 1,
      cineId: 'vera',
      peliculaId: 'garfield',
      fecha: new Date('2024-06-27'),
      hora: '22:00'
  },
  {
      grupo: 2,
      cineId: 'vera',
      peliculaId: 'deadpool-y-lobezno',
      fecha: new Date('2024-06-28'),
      hora: '22:00'
  },
  {
      grupo: 2,
      cineId: 'vera',
      peliculaId: 'deadpool-y-lobezno',
      fecha: new Date('2024-06-29'),
      hora: '22:00'
  },
  {
      grupo: 2,
      cineId: 'vera',
      peliculaId: 'deadpool-y-lobezno',
      fecha: new Date('2024-06-30'),
      hora: '22:00'
  },
  {
      grupo: 2,
      cineId: 'vera',
      peliculaId: 'deadpool-y-lobezno',
      fecha: new Date('2024-07-01'),
      hora: '22:00'
  },
  {
      grupo: 3,
      cineId: 'vera',
      peliculaId: 'bad-boys-ride-or-die',
      fecha: new Date('2024-07-02'),
      hora: '22:00'
  },
  {
      grupo: 3,
      cineId: 'vera',
      peliculaId: 'bad-boys-ride-or-die',
      fecha: new Date('2024-07-03'),
      hora: '22:00'
  },
  {
      grupo: 3,
      cineId: 'vera',
      peliculaId: 'bad-boys-ride-or-die',
      fecha: new Date('2024-07-04'),
      hora: '22:00'
  },*/
];
const proyeccionesRegio = [];
const PROYECCIONES = [
  ...proyeccionesVera,
  ...proyeccionesGarrucha,
  ...proyeccionesRegio
];

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

const PELICULAS = [
  {
    id: "garfield",
    nombre: "Garfield: La Pelicula",
    descripcion: "El mundialmente famoso Garfield, el gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su largamente perdido padre –el desaliñado gato callejero Vic– Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas y consentidas vidas al unirse a Vic en un hilarante y muy arriesgado atraco.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/w5OVkrlQdxg"
  },
  {
    id: "deadpool-y-lobezno",
    nombre: "Deadpool y Lobezno",
    descripcion: 'Tercera entrega de la saga "Deadpool", ahora integrada en el Universo Cinematográfico de Marvel (MCU) pero manteniendo su enfoque para adultos, con calificación R. En septiembre de 2022 se confirmó la aparición de Hugh Jackman como Lobezno, por primera vez desde "Logan".',
    edadRedomendada: "No recomendada menores 16 años",
    videoUrl: "https://www.youtube.com/embed/tTM5weeCFvQ"
  },
  {
    id: "bad-boys-ride-or-die",
    nombre: "Bad Boys: Ride or Die",
    descripcion: "Los policías más famosos del mundo regresan con su icónica mezcla de acción al límite y comedia escandalosa, pero esta vez con un giro inesperado: ¡Los mejores de Miami se dan a la fuga! Cuarta entrega de la saga 'Dos policías rebeldes'.",
    edadRedomendada: "No recomendada menores 16 años",
    videoUrl: "https://www.youtube.com/embed/LOZqqEXURzg"
  }
];

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$ProyeccionesCine = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProyeccionesCine;
  const { cine } = Astro2.props;
  const gruposProyecciones = [...new Set(PROYECCIONES.filter((proyeccion) => proyeccion.cineId === cine.url && proyeccion.fecha >= /* @__PURE__ */ new Date())?.map((x) => x.grupo))];
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`proyecciones-${cine.url}`, "id")}> ${gruposProyecciones.length === 0 ? renderTemplate`<p>Actualmente no hay proyecciones disponibles.</p>` : gruposProyecciones.map((grupo) => {
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata.home.description, "title": Metadata.home.title, "canonical": Metadata.home.canonical }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <h1${addAttribute(`text-xl text-${cine.color} text-center font-bold`, "class")}>Cartelera de ${cine.nombre}</h1> ${renderComponent($$result2, "ProyeccionesCine", $$ProyeccionesCine, { "cine": cine })} </main> ` })} <section></section>`;
}, "/Users/diego.ramos/veracines-web/src/pages/cartelera-[cine].astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/cartelera-[cine].astro";
const $$url = "/cartelera-[cine]";

const cartelera__cine_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Carteleracine,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { CINES as C, cartelera__cine_ as c };
