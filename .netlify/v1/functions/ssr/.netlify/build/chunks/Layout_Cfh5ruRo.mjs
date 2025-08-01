import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, e as renderSlot, F as Fragment, u as unescapeHTML, f as renderHead } from './astro/server_DJGT4-uI.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                               */

const $$Astro$8 = createAstro("https://www.veracines.es");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/diego.ramos/veracines-web/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$ButtonUp = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="button-up" class="fixed bottom-2 right-2 opacity-0 transition-opacity"> <button id="scroll-to-top" aria-label="Volver al inicio de la página" class="group flex size-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-black/10 text-primary backdrop-blur hover:scale-105 hover:border-primary motion-safe:transition"> <svg aria-label="Subir al inicio de la página" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6 -rotate-45 group-hover:-rotate-90 group-hover:text-primary motion-safe:transition" width="20px"> <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path> </svg> </button> </div> `;
}, "/Users/diego.ramos/veracines-web/src/components/ButtonUp.astro", void 0);

const $$DrawnXLogo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<img src="/img/logo.png" class="w-16">`;
}, "/Users/diego.ramos/veracines-web/src/components/DrawnXLogo.astro", void 0);

const $$Astro$7 = createAstro("https://www.veracines.es");
const $$Typography = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Typography;
  const { as: Tag, class: className, variant, color, ...props } = Astro2.props;
  const variantClasses = {
    "h2": "text-lg font-medium uppercase lg:text-2xl",
    "h3": "text-2xl font-semibold uppercase",
    "atomic-title": "text-5xl font-atomic lowercase",
    "atomic-quote": "text-2xl font-atomic lowercase",
    "boxer-title": "text-6xl md:text-8xl font-atomic lowercase",
    "body": "text-xl",
    "medium": "text-md",
    "small": "text-sm",
    "big": "text-6xl uppercase",
    "bigger": "text-4xl sm:text-5xl md:text-7xl uppercase"
  };
  const colorClasses = {
    white: "text-white",
    black: "text-black",
    primary: "text-primary",
    secondary: "text-secondary",
    neutral: "text-neutral-300"
  };
  const classes = [
    variantClasses[variant],
    colorClasses[color],
    className
  ];
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": classes, ...props, "tabindex": "0" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/diego.ramos/veracines-web/src/components/Typography.astro", void 0);

const $$FooterContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4 text-center md:flex-row lg:gap-6"> ${renderComponent($$result, "Typography", $$Typography, { "as": "span", "variant": "body", "color": "primary", "class:list": "text-center" }, { "default": ($$result2) => renderTemplate`
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Veracines <span aria-hidden="true" class="hidden md:inline">|</span><br aria-hidden="true" class="block md:hidden"> Todos los derechos reservados.
` })} ${renderComponent($$result, "Typography", $$Typography, { "as": "span", "variant": "body", "color": "primary", "class:list": "text-center small" }, { "default": ($$result2) => renderTemplate` <a href="https://www.veracines.es/politica-privacidad" target="_blank" rel="noopener noreferrer" class="underline">Politica de Privacidad</a> <a href="https://www.veracines.es/aviso-legal" target="_blank" rel="noopener noreferrer" class="underline">Aviso Legal</a> ` })} </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/FooterContent.astro", void 0);

const MOBILE_MENU_CONTENT_ID = "menuMobileContent";

const $$Astro$6 = createAstro("https://www.veracines.es");
const $$HamburgerButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$HamburgerButton;
  const width = "w-6";
  const genericHamburgerLine = `h-[2px] ${width} bg-gray-300 transition ease transform duration-300`;
  return renderTemplate`${maybeRenderHead()}<button${addAttribute(Astro2.props.id, "id")} aria-expanded="false"${addAttribute(MOBILE_MENU_CONTENT_ID, "aria-controls")}${addAttribute([
    "hamburgerButton group relative flex h-[20px] flex-col items-center justify-between lg:hidden",
    width
  ], "class:list")} aria-label="Abrir menú de navegación"> <span${addAttribute(["group-[.open]:translate-y-2 group-[.open]:rotate-45", genericHamburgerLine], "class:list")}></span> <span${addAttribute(["group-[.open]:opacity-0", genericHamburgerLine], "class:list")}></span> <span${addAttribute(["group-[.open]:opacity-0", genericHamburgerLine], "class:list")}></span> <span${addAttribute([
    "group-[.open]:-translate-y-[0.6rem] group-[.open]:-rotate-45",
    genericHamburgerLine
  ], "class:list")}></span> </button> `;
}, "/Users/diego.ramos/veracines-web/src/components/HamburgerButton.astro", void 0);

const $$Astro$5 = createAstro("https://www.veracines.es");
const $$Instagram = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${maybeRenderHead()}<svg width="48" height="48" fill="none" viewBox="0 0 48 48"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de Instagram"> <path fill="currentColor" d="M24.016 9.242c4.8 0 5.392.03 7.262.093 1.745.094 2.712.374 3.335.623.842.312 1.434.717 2.057 1.34.623.624 1.029 1.216 1.34 2.058.25.623.53 1.59.624 3.335.093 1.901.093 2.462.093 7.262 0 4.8-.03 5.393-.093 7.263-.094 1.745-.374 2.711-.624 3.335-.311.841-.716 1.433-1.34 2.057-.623.623-1.215 1.028-2.057 1.34-.623.25-1.59.53-3.335.623-1.901.094-2.462.094-7.262.094-4.8 0-5.393-.031-7.263-.094-1.745-.093-2.711-.374-3.335-.623-.841-.312-1.434-.717-2.057-1.34-.623-.624-1.029-1.216-1.34-2.057-.25-.624-.53-1.59-.624-3.335-.093-1.902-.093-2.463-.093-7.263s.031-5.392.093-7.262c.094-1.745.374-2.712.624-3.335.311-.842.717-1.434 1.34-2.057.623-.624 1.216-1.029 2.057-1.34.624-.25 1.59-.53 3.335-.624 1.87-.062 2.463-.093 7.263-.093Zm0-3.242c-4.894 0-5.517.031-7.419.094-1.9.093-3.21.405-4.363.841a8.936 8.936 0 0 0-3.18 2.088 8.629 8.629 0 0 0-2.119 3.18c-.436 1.153-.748 2.462-.841 4.363C6.03 18.5 6 19.122 6 24.016c0 4.893.031 5.517.094 7.418.093 1.901.405 3.21.841 4.363a8.936 8.936 0 0 0 2.088 3.18 8.936 8.936 0 0 0 3.18 2.088c1.153.436 2.462.748 4.363.842C18.5 42 19.091 42 23.984 42c4.894 0 5.517-.031 7.419-.093 1.9-.094 3.21-.406 4.363-.842a8.936 8.936 0 0 0 3.18-2.088 8.938 8.938 0 0 0 2.088-3.18c.436-1.153.748-2.462.841-4.363.094-1.933.094-2.525.094-7.418 0-4.894-.031-5.517-.094-7.419-.093-1.9-.405-3.21-.841-4.363a8.937 8.937 0 0 0-2.088-3.18 8.936 8.936 0 0 0-3.18-2.088c-1.153-.436-2.462-.748-4.363-.841C29.5 6.03 28.909 6 24.016 6Z"></path><path fill="currentColor" d="M24.015 14.758a9.258 9.258 0 0 0 0 18.515 9.258 9.258 0 0 0 0-18.515Zm0 15.242A6.02 6.02 0 0 1 18 23.984a6.02 6.02 0 0 1 6.015-6.015c3.335 0 5.985 2.711 5.985 6.046A5.986 5.986 0 0 1 24.015 30ZM33.615 16.535a2.15 2.15 0 1 0 0-4.301 2.15 2.15 0 0 0 0 4.3Z"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/instagram.astro", void 0);

const $$Astro$4 = createAstro("https://www.veracines.es");
const $$Facebook = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Facebook;
  return renderTemplate`${maybeRenderHead()}<svg width="48" height="48" fill="none" viewBox="-5.5 0 32 32"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de Instagram"> <path fill="currentColor" d="M1.188 5.594h18.438c0.625 0 1.188 0.563 1.188 1.188v18.438c0 0.625-0.563 1.188-1.188 1.188h-18.438c-0.625 0-1.188-0.563-1.188-1.188v-18.438c0-0.625 0.563-1.188 1.188-1.188zM14.781 17.281h2.875l0.125-2.75h-3v-2.031c0-0.781 0.156-1.219 1.156-1.219h1.75l0.063-2.563s-0.781-0.125-1.906-0.125c-2.75 0-3.969 1.719-3.969 3.563v2.375h-2.031v2.75h2.031v7.625h2.906v-7.625z"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/facebook.astro", void 0);

const $$Astro$3 = createAstro("https://www.veracines.es");
const $$SocialButtons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SocialButtons;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`${Astro2.props.class}`, "class:list")}> <div class="flex flex-row items-center gap-x-2" aria-label="redes sociales"> <div class="item"> <a target="_blank" rel="noopener" aria-label="Instagram de Veracines, se abrirá en una nueva pestaña" href="https://www.instagram.com/veracines.sl" class="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100"> ${renderComponent($$result, "Facebook", $$Facebook, { "class": "text-primary transition-colors duration-300 hover:text-primary motion-reduce:duration-0" })} </a> </div> <div class="item"> <a target="_blank" rel="noopener" aria-label="Instagram de Veracines, se abrirá en una nueva pestaña" href="https://www.instagram.com/veracines.sl" class="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100"> ${renderComponent($$result, "Instagram", $$Instagram, { "class": "text-primary transition-colors duration-300 hover:text-primary motion-reduce:duration-0" })} </a> </div> </div> </nav>`;
}, "/Users/diego.ramos/veracines-web/src/components/SocialButtons.astro", void 0);

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const pages = [
    { name: "P\xE1gina Principal", href: "/" },
    { name: "Terraza de verano de Vera", href: "/cartelera-vera" },
    //{ name: "Cine Tenis de Garrucha", href: "/cartelera-garrucha" },
    { name: "Cine Regio", href: "/cartelera-regio" }
  ].map((page) => ({
    ...page,
    active: Astro2.url.pathname === page.href
  }));
  return renderTemplate`${maybeRenderHead()}<header class="mb-10 h-16 max-w-[100vw] lg:h-24" data-astro-cid-3ef6ksr2> <nav class="group flex h-full w-full items-center justify-between px-10 lg:justify-center" data-astro-cid-3ef6ksr2> ${pages.map(({ disabled, name, href, active, soonDate }, key) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(href, "href")}${addAttribute([
    "nav-item relative hidden h-full select-none flex-col items-center justify-center gap-1 text-center text-xl uppercase  lg:flex lg:px-7 xl:px-10 text-nowrap",
    { "pointer-events-none": disabled },
    { "current-page text-primary": active },
    { "text-primary": !active }
  ], "class:list")}${addAttribute(`nav-link-${key}`, "id")} data-astro-cid-3ef6ksr2> <span class="z-10" data-astro-cid-3ef6ksr2>${name}</span> ${disabled ? renderTemplate`<span class="absolute mt-10 -skew-x-6 text-xs text-primary" data-astro-cid-3ef6ksr2>${soonDate}</span>` : renderTemplate`<div class="background absolute -z-10 h-full w-full" data-astro-cid-3ef6ksr2></div>`} </a> ` })}`)} <a href="/" class="block lg:hidden" data-astro-cid-3ef6ksr2>${renderComponent($$result, "DrawnXLogo", $$DrawnXLogo, { "class:list": "w-10", "data-astro-cid-3ef6ksr2": true })}</a> ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, { "class:list": "block lg:hidden", "id": "menuButton", "data-astro-cid-3ef6ksr2": true })} <div class="fixed inset-0 z-[888] flex w-screen flex-col items-center overflow-x-auto bg-white px-10 lg:hidden"${addAttribute(MOBILE_MENU_CONTENT_ID, "id")} data-astro-cid-3ef6ksr2> <aside class="flex min-h-16 w-full items-center justify-between" data-astro-cid-3ef6ksr2> <span class="text-xl font-semibold uppercase text-primary" data-astro-cid-3ef6ksr2>Menú</span> ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, { "id": "innerMenuButton", "data-astro-cid-3ef6ksr2": true })} </aside> <div class="flex min-h-2 w-full items-center" data-astro-cid-3ef6ksr2> <hr class="h-[2px] w-full border-t-0" style="background:linear-gradient(to right, transparent 0%, white 50%, transparent 100%)" data-astro-cid-3ef6ksr2> </div> <nav class="flex w-full flex-col items-center gap-5" data-astro-cid-3ef6ksr2> <hr class="h-[2px] w-full border-t-0" style="background:linear-gradient(to right, transparent 0%, white 50%, transparent 100%)" data-astro-cid-3ef6ksr2> ${pages.map(({ disabled, name, href, active, soonDate }, key) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(href, "href")}${addAttribute([
    "relative flex flex-col items-center justify-center gap-2 text-xl capitalize",
    { "pointer-events-none": disabled },
    { "current-page-mob": active }
  ], "class:list")}${addAttribute(`navmob-link-${key}`, "id")} data-astro-cid-3ef6ksr2> <span class="z-10 uppercase text-primary" data-astro-cid-3ef6ksr2>${name}</span> ${disabled && renderTemplate`<span class="text-primary" data-astro-cid-3ef6ksr2>${soonDate}</span>`} </a> <hr class="h-[2px] w-full border-t-0" style="background:linear-gradient(to right, transparent 0%, white 50%, transparent 100%)" data-astro-cid-3ef6ksr2> ` })}`)} <nav class="my-4 flex flex-col gap-10" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "FooterContent", $$FooterContent, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "SocialButtons", $$SocialButtons, { "class": "flex items-center justify-center", "data-astro-cid-3ef6ksr2": true })} </nav> </nav> </div> </nav> <div class="relative flex h-2 w-full flex-col items-center" data-astro-cid-3ef6ksr2> <div class=" absolute w-full items-center justify-between" data-astro-cid-3ef6ksr2> <div class="h-[2px] w-full rounded-l-[30%] border-t-0" style="background:linear-gradient(to right, transparent 2%, var(--color-primary) 15%, var(--color-primary) 83%, transparent 98%)" data-astro-cid-3ef6ksr2></div> </div> </div></header>  `;
}, "/Users/diego.ramos/veracines-web/src/components/Header.astro", void 0);

const jost = "/_astro/jost-latin-wght-normal.CfFW3YMY.woff2";

const atomic = "/fonts/atomic.woff2";

const CINES = [
  {
    url: "vera",
    nombre: "Cine Terraza de Verano de Vera",
    corto: "Vera",
    color: "primary",
    localizacion: {
      ubicacionKey: "!1m18!1m12!1m3!1d6352.183416503645!2d-1.8651944235623443!3d37.24553154246919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad505dc0deb95%3A0x20c4e16b3ec9e8ba!2sCine%20de%20Vera!5e0!3m2!1ses!2ses!4v1715622722058!5m2!1ses!2ses",
      direccion: "C. Antonio de Torres, 2, 04620 Vera, Almería",
      descripcion: "Situado junto al colegio Reyes Católicos, en la calle Antonio de Torres, el cine de verano de Vera es un lugar ideal para disfrutar de una película al aire libre en Vera.",
      ciudad: "Vera",
      provincia: "Almería",
      codigoPostal: "04620",
      adressCounty: "ES"
    },
    servicios: [],
    horaFijaProyeccion: "22:00",
    ventaOnline: false
  },
  // {
  //     url: "garrucha",
  //     nombre: "Cine Tenis de Garrucha",
  //     corto: "Garrucha",
  //     "color": "primary",
  //     localizacion: {
  //         ubicacionKey: "!1m18!1m12!1m3!1d25418.563129508486!2d-1.8616586513771942!3d37.21636849263374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7b29f1d4fe4b9b%3A0xda525c0a7e7bc5d5!2sCine%20Tenis!5e0!3m2!1ses!2ses!4v1715623188288!5m2!1ses!2ses",
  //         direccion: "C. Tenis, 04630 Garrucha, Almería",
  //         descripcion: "Se encuentra junto a Mercadona en Garrucha, en la calle Tenis, el cine Tenis de Garrucha es un lugar ideal para disfrutar de una película al aire libre en Garrucha.",
  //         ciudad: "Garrucha",
  //         provincia: "Almería",
  //         codigoPostal: "04630",
  //         adressCounty: "ES"
  //
  //     },
  //     servicios: [],
  //     horaFijaProyeccion: "22:00"
  // },
  {
    url: "regio",
    nombre: "Cine Regio de Vera",
    corto: "Regio",
    color: "secondary",
    localizacion: {
      ubicacionKey: "!1m18!1m12!1m3!1d3176.0496114881794!2d-1.8706054238921004!3d37.24653037212324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad503b6424b21%3A0xb294666e35a7e06c!2sC.%20Radio%20Nacional%2C%20s%2Fn%2C%2004620%20Vera%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1716051070703!5m2!1ses!2ses",
      direccion: "C. Radio Nacional, s/n, 04620 Vera, Almería",
      descripcion: "Situado en pleno centro de Vera, junto a la Plaza Mayor, en Cine Regio de Ver podrás disfrutar de las mejores películas durante todo el año en un ambiente único.",
      ciudad: "Vera",
      provincia: "Almería",
      codigoPostal: "04620",
      adressCounty: "ES"
    },
    servicios: [],
    ventaOnline: true
  }
];

const PELICULAS = [
  {
    id: "el-reino-del-planeta-de-los-simios",
    image: "el-reino-del-planeta-de-los-simios.jpeg",
    nombre: "El reino del planeta de los simios",
    descripcion: "Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en la sombra. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un angustioso viaje que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual. ",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/fWWrW_VLjws"
  },
  {
    id: "un-lugar-tranquilo-dia-1",
    image: "un-lugar-tranquilo-dia-1.jpeg",
    nombre: "Un Lugar Tranquilo: Dia 1",
    descripcion: "Una mujer llamada Sam trata de sobrevivir a una invasión en la ciudad de Nueva York por criaturas alienígenas sedientas de sangre con oídos ultrasónicos. Tercera entrega de la saga.",
    edadRedomendada: "Pendiente de Calificación",
    videoUrl: "https://www.youtube.com/embed/G0HL9dFjm5E"
  },
  {
    id: "gru-4-mi-villano-favorito",
    image: "gru-4-mi-villano-favorito.jpeg",
    nombre: "Gru 4. Mi villano favorito",
    descripcion: "Gru, Lucy y las niñas -Margo, Edith y Agnes- dan la bienvenida a un nuevo miembro en la familia: Gru Junior, que parece llegar con el propósito de ser un suplicio para su padre. Gru tendrá que enfrentarse en esta ocasión a su nueva némesis Maxime Le Mal y su sofisticada y malévola novia Valentina, lo que obligará a la familia a tener que darse a la fuga. Cuarta entrega de 'Gru, mi villano favorito'.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/zUFt9_WOoPc"
  },
  {
    id: "bad-boys-ride-or-die",
    image: "bad-boys-ride-or-die.jpeg",
    nombre: "Bad Boys: Ride or Die",
    descripcion: "Los policías más famosos del mundo regresan con su icónica mezcla de acción al límite y comedia escandalosa, pero esta vez con un giro inesperado: ¡Los mejores de Miami se dan a la fuga! Cuarta entrega de la saga 'Dos policías rebeldes'.",
    edadRedomendada: "No recomendada menores 16 años",
    videoUrl: "https://www.youtube.com/embed/LOZqqEXURzg"
  },
  {
    id: "inside-out-2",
    image: "inside-out-2.webp",
    nombre: "Inside Out 2",
    descripcion: "Secuela de 'Del revés (Inside Out)'. Riley tiene ahora 17 años y ha dejado de ser la niña de la película original. La historia se centrará en las emociones de un nuevo personaje, una niña de 12 años llamada Riley Anderson, que vive en Minnesota y que está pasando por un momento difícil en su vida.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/ahogVfXzqs4"
  },
  {
    id: "fly-by-the-moon",
    image: "fly-by-the-moon.jpg",
    nombre: "Fly by the Moon",
    descripcion: "Ambientada en el histórico alunizaje del Apolo 11, en 1969. Llamados para mejorar la imagen pública de la NASA, las chispas vuelan en todas las direcciones cuando la prodigio del marketing Kelly Jones (Johansson) causa estragos en la ya difícil tarea del director del lanzamiento Cole Davis (Tatum). Cuando la Casa Blanca considera que la misión es demasiado importante para fracasar, Jones recibe la orden de simular un alunizaje falso como respaldo, comenzando la verdadera cuenta atrás...",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/2Myr0oKRPUU"
  },
  {
    id: "padre-no-hay-mas-que-uno-4",
    image: "padre-no-hay-mas-que-uno-4.webp",
    nombre: "Padre no hay más que uno 4",
    descripcion: "¿Qué efecto tendría en unos padres que el mismo día que su hija mayor cumple 18 años su novio le proponga matrimonio y ella acepte de inmediato?",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/dPsUo_D-iO4"
  },
  {
    id: "twisters",
    image: "twisters.jpeg",
    nombre: "Twisters",
    descripcion: "Una actualización de la película de 1996 'Twister', centrada en un par de cazadores de tormentas que arriesgan sus vidas en un intento de probar un sistema experimental de alerta meteorológica.",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/gUBCmS1H8O4"
  },
  {
    id: "garfield",
    image: "garfield.jpeg",
    nombre: "Garfield: La Pelicula",
    descripcion: "El mundialmente famoso Garfield, el gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su largamente perdido padre –el desaliñado gato callejero Vic– Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas y consentidas vidas al unirse a Vic en un hilarante y muy arriesgado atraco.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/w5OVkrlQdxg"
  },
  {
    id: "deadpool-y-lobezno",
    image: "deadpool-y-lobezno.jpeg",
    nombre: "Deadpool y Lobezno",
    descripcion: 'Tercera entrega de la saga "Deadpool", ahora integrada en el Universo Cinematográfico de Marvel (MCU) pero manteniendo su enfoque para adultos, con calificación R. En septiembre de 2022 se confirmó la aparición de Hugh Jackman como Lobezno, por primera vez desde "Logan".',
    edadRedomendada: "No recomendada menores 16 años",
    videoUrl: "https://www.youtube.com/embed/tTM5weeCFvQ"
  },
  {
    id: "cuerpo-escombro",
    image: "cuerpo-escombro.jpg",
    nombre: "Cuerpo Escombro",
    descripcion: "Ante los problemas para encontrar trabajo y liado por su hermano Fermín, Javi se hace pasar por discapacitado para conseguir un puesto que necesita desesperadamente. Pero fingir parálisis cerebral es más complicado de lo que parece, sobre todo cuando se enamora de su jefa.",
    edadRedomendada: "No recomendada menores 7 años",
    videoUrl: "https://www.youtube.com/embed/l-W4M9QrhS8"
  },
  {
    id: "la-trampa",
    image: "la-trampa.jpg",
    nombre: "La Trampa",
    descripcion: "Un padre y su hija adolescente asisten a un concierto de música pop, donde se dan cuenta de que están en el centro de un oscuro y siniestro suceso.",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/v7BpWoDJDaI"
  },
  {
    id: "buffalo-kids",
    image: "buffalo-kids.jpg",
    nombre: "Buffalo Kids",
    descripcion: "Tom y Mary, dos hermanos huérfanos, desembarcan en Nueva York a finales del siglo XIX. Para reunirse con su tío, se aventuran como polizones en un tren por el Salvaje Oeste donde conocerán a Nick, un nuevo y extraordinario amigo que cambiará sus vidas para siempre. Juntos se embarcarán en un peligroso viaje, enfrentándose a malvados villanos, haciendo inesperados amigos y viviendo situaciones únicas.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/JyEU5-a4G44"
  },
  {
    id: "parpadea-dos-veces",
    image: "parpadea-dos-veces.jpg",
    nombre: "Parpadea dos veces",
    descripcion: "Cuando el magnate de la tecnología Slater King (Channing Tatum) conoce a la camarera Frida (Naomi Ackie) en su gala de recaudación de fondos, saltan chispas. Él la invita a acompañarle a él y a sus amigos a unas vacaciones de ensueño en su isla privada. Un auténtico paraíso. Las noches salvajes se mezclan con mañanas bañadas por el sol y todo el mundo se lo pasa en grande. Nadie quiere que el viaje termine, pero cuando empiezan a suceder cosas extrañas, Frida intuye que algo anda mal en ese lugar. Tendrá que descubrir la verdad si quiere salir viva de la fiesta.",
    edadRedomendada: "Pendiente de calificación",
    videoUrl: "https://www.youtube.com/embed/5yZOzi5h54U"
  },
  {
    id: "odio-el-verano",
    image: "odio-el-verano.jpg",
    nombre: "Odio el verano",
    descripcion: "Alonso (barrendero; Roberto Álamo) y Marisa (tarotista; Malena Alterio), Torres y Fátima (propietarios de una charcutería; Jordi Sánchez y María Botto) y Calatrava (cirujano estético; Julián López) y Vicky (influencer; Kira Miró) han reservado una casa aislada en Canarias para pasar las mejores vacaciones de su vida con sus respectivas familias. Lo que no saben es que, por un error de la agencia, han alquilado la misma casa. Ninguno está dispuesto a renunciar a ella y tampoco hay muchas alternativas, por lo que se ven obligados a compartir habitáculo durante todas sus vacaciones. Las patentes diferencias entre cada uno de sus miembros convierten esos días en un caótico cúmulo de divertidas y desmadradas situaciones. A pesar de ello, tienen que aprender a convivir y comprender a toda esa gente tan distinta... Y a ellos mismos.",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/eNkDXNfmzzs"
  },
  {
    id: "romper-el-circulo",
    image: "romper-el-circulo.jpg",
    nombre: "Romper el círculo",
    descripcion: "Lily Bloom (Blake Lively) es una mujer que se sobrepone a una infancia traumática para embarcarse en una nueva vida en Boston y perseguir su sueño de abrir su propio negocio. Un encuentro casual con el encantador neurocirujano Ryle Kincaid (Justin Baldoni) desata una intensa conexión entre ellos, pero al tiempo que ambos se enamoran profundamente, Lily comienza a ver en Ryle aspectos que le recuerdan la relación que tenían sus padres. Cuando el primer amor de Lily, Atlas Corrigan (Brandon Sklenar), repentinamente reaparece en su vida, su relación con Ryle da un vuelco, y Lily se da cuenta de que debe aprender a confiar en su propia fuerza para tomar una difícil elección para su futuro.",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/aT_IzP2eJaU"
  },
  {
    id: "alien-romulus",
    image: "alien-romulus.jpg",
    nombre: "Alien: Romulus",
    descripcion: "Mientras rebuscan en las profundidades de una estación espacial abandonada, un grupo de jóvenes colonizadores del espacio se encuentra cara a cara con la forma de vida más aterradora del universo.",
    edadRedomendada: "No recomendada menores 16 años",
    videoUrl: "https://www.youtube.com/embed/HCjuv9STNps"
  },
  {
    id: "gladiator-2",
    image: "gladiator-2.jpg",
    nombre: "Gladiator II",
    descripcion: "Años después de presenciar la muerte del admirado héroe Máximo a manos de su tío, Lucio (Paul Mescal) se ve forzado a entrar en el Coliseo tras ser testigo de la conquista de su hogar por parte de los tiránicos emperadores que dirigen Roma con puño de hierro. Con un corazón desbordante de furia y el futuro del imperio en juego, Lucio debe rememorar su pasado en busca de la fuerza y el honor que devuelvan al pueblo la gloria perdida de Roma.",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/HCjuv9STNps"
  },
  {
    id: "wicked",
    image: "wicked.jpg",
    nombre: "Wicked",
    descripcion: "La historia de cómo una mujer de piel verde esmeralda se convierte en la Malvada Bruja del Oeste; largometraje basado en el musical de Broadway.",
    edadRedomendada: "No recomendada menores 7 años",
    videoUrl: "https://www.youtube.com/embed/UNHQgy3jawI"
  },
  {
    id: "la-infiltrada",
    image: "la-infiltrada.jpg",
    nombre: "La infiltrada",
    descripcion: "Basada en la historia real de Aranzazu Berradre Marín, pseudónimo con el que se infiltró una agente de la Policía nacional en la banda terrorista ETA, durante 8 años. Cuando contaba apenas 20 años, la joven consiguió adentrarse en la izquierda abertzale, siendo la única mujer que convivió en un piso con dirigentes de ETA. Durante su infiltración se vio obligada a cortar totalmente lazos familiares, todo para poder desarticular el comando Donosti en un momento crucial en el que la banda declaraba falsamente estar en tregua. Es la historia de una mujer valiente, que cambió su vida para intentar salvar la de otros.\n",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/_eAYhtaEQGM"
  },
  {
    id: "vaiana-2",
    image: "vaiana-2.jpeg",
    nombre: "Vaiana 2",
    descripcion: 'Tras recibir una inesperada llamada de sus antepasados, Vaiana debe viajar a los lejanos mares de Oceanía y adentrarse en peligrosas aguas perdidas para vivir una aventura sin precedentes. Secuela de "Vaiana".\n',
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/O5lPAcMEKvE"
  },
  {
    id: "mufasa",
    image: "mufasa.jpg",
    nombre: "Mufasa: El Rey León",
    descripcion: "Rafiki debe transmitir la leyenda de Mufasa a la joven cachorro de león Kiara, hija de Simba y Nala, con Timón y Pumba aportando su estilo característico. La historia se cuenta en flashbacks y presenta a Mufasa como un cachorro huérfano, perdido y solo hasta que conoce a un simpático león llamado Taka, heredero de un linaje real. Este encuentro casual pone en marcha un viaje de un extraordinario grupo de inadaptados que buscan su destino. Y sus vínculos se pondrán a prueba mientras trabajan juntos para escapar de un enemigo amenazador y letal.\n",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/_mxeKCt4_Zs"
  },
  {
    id: "sonic-3",
    image: "sonic-3.jpg",
    nombre: "Sonic 3: La Película",
    descripcion: "Sonic, Knuckles y Tails se reúnen para enfrentarse a un nuevo y poderoso adversario, Shadow, un misterioso villano cuyos poderes no se parecen a nada de lo que nuestros héroes han conocido hasta ahora. Con sus facultades superadas en todos los sentidos, el Equipo Sonic tendrá que establecer una insólita alianza con la esperanza de detener a Shadow y proteger el planeta.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/2YJXP8CKrNE"
  },
  {
    id: "un-lio-de-millones",
    image: "un-lio-de-millones.jpg",
    nombre: "Un lío de millones",
    descripcion: "En un pueblo de la Sierra de Madrid, Bego (Gracia Olayo) y Agustín (Antonio Resines) viven una jubilación tranquila entre recetas, su huerto, la pelu y los juegos de cartas con los amigos. Pero desde que sus hijos, Miguel (Alberto Olmo) y Carla (Clara Lago), se independizaron para irse a vivir a la ciudad, el síndrome del nido vacío parece haberse instalado en el matrimonio, y empiezan a comprobar, con tristeza, que sus hijos se han empezado a olvidar de ellos. Para colmo, los muy sinvergüenzas no aparecen a la comida que Bego había preparado por el cumple de su hijo, y acto seguido anuncian que no irán a casa por Navidad, lo que lleva a sus padres a idear un arriesgado plan para que vuelvan a su lado: fingirán que han ganado la lotería y que son multimillonarios. Remake de la película francesa 'Mes Très Chers Enfants' de Alexandra Leclère.",
    edadRedomendada: "No recomendada menores 7 años",
    videoUrl: "https://www.youtube.com/embed/2kLLWjs6SoM"
  },
  {
    id: "conclave",
    image: "conclave.jpg",
    nombre: "Conclave",
    descripcion: "Tras la inesperada muerte del Sumo Pontífice, el cardenal Lawrence es designado como responsable para liderar uno de los rituales más secretos y antiguos del mundo: la elección de un nuevo Papa. Cuando los líderes más poderosos de la Iglesia Católica se reúnen en los salones del Vaticano, Lawrence se ve atrapado dentro de una compleja conspiración a la vez que descubre un secreto que podría sacudir los cimientos de la Iglesia.",
    edadRedomendada: "No recomendada menores 7 años",
    videoUrl: "https://www.youtube.com/embed/aMiOsqSkcYg"
  },
  {
    id: "al-otro-barrio",
    image: "al-otro-barrio.jpg",
    nombre: "Al otro barrio",
    descripcion: "Intentar engañar a Hacienda ha sido una opción demasiado tentadora para Andrés (Quim Gutiérrez), pero no contaba con que le acabaran pillando. Y eso es exactamente lo que le ha sucedido. Además de la multa millonaria que le ha caído encima, ahora debe trasladar sus oficinas al barrio de Los Caños, en el extrarradio más marginal de la capital, o eso le parece a él. Pero es que Andrés estaba aprovechándose de una jugosa subvención por tener allí su sede, sin que hubiese puesto jamás los pies en el barrio. A regañadientes, él y sus empleados se trasladan a Los Caños y aquello no es tan malo como esperaban... Es peor.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/1Sp7NbEf4HQ"
  },
  {
    id: "the-brutalist",
    image: "the-brutalist.jpg",
    nombre: "The Brutalist",
    descripcion: "Huyendo de la Europa de la posguerra, el visionario arquitecto László Toth llega a Estados Unidos para reconstruir su vida, su obra y su matrimonio con su esposa Erzsébet tras verse obligados a separarse durante la guerra a causa de los cambios de fronteras y regímenes. Solo y en un nuevo país totalmente desconocido para él, László se establece en Pensilvania, donde el adinerado y prominente empresario industrial Harrison Lee Van Buren reconoce su talento para la arquitectura. Pero amasar poder y forjarse un legado tiene su precio...",
    edadRedomendada: "No recomendada menores 16 años",
    videoUrl: "https://www.youtube.com/embed/vna5bN96xJg"
  },
  {
    id: "mikaela",
    image: "mikaela.jpg",
    nombre: "Mikaela",
    descripcion: "En la víspera del día de Reyes una tormenta de nieve sin precedentes asola España. En medio del caos de una autopista colapsada, un grupo de atracadores aprovecha la oportunidad para asaltar un furgón blindado. A escasos metros se encuentra Leo (Antonio Resines), un policía en las últimas que no tiene nada que perder. Con la ayuda inesperada de una joven (Natalia Azahara) tratarán de evitar que la banda huya con el botín en una persecución a contrarreloj en medio de la tempestad.",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/iAJcJqPY4zI"
  },
  {
    id: "polican",
    image: "polican.jpg",
    nombre: "Policán",
    descripcion: "Un fiel perro policía y su agente humano sufren graves heridas mientras cumplen con su deber, y solo se les puede salvar mediante una operación descabellada en la que ambos se fusionan en uno, convirtiéndose en Policán. El nuevo agente jura proteger y servir, pero también sabe buscar, sentarse y dar la patita. Policán acepta su nueva identidad y se esfuerza en complacer a su Jefe. Ahora debe detener las malvadas intenciones del supervillano felino Perico. El último plan de Perico es clonarse para crear al gatito Periquillo y disponer del doble de posibilidades para cometer fechorías. Pero las cosas se complicarán cuando Periquillo y Policán se hacen amigos inesperadamente. Adaptación del fenómeno literario de Dav Pilkey.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/86o3-BJ8YqU"
  },
  {
    id: "bridget-jones",
    image: "bridget-jones.jpg",
    nombre: "Bridget Jones: Loca por él",
    descripcion: "Bridget está sola después de enviudar hace cuatro años, cuando Mark murió durante una misión humanitaria en Sudán. Es la madre de Billy, de nueve años, y de Mabel, de cuatro, y se encuentra en una especie de limbo emocional mientras cuida a los niños con la ayuda de sus mejores amigos y de un antiguo amante, Daniel Cleaver. Presionada por su familia urbana, compuesta por Shazzer, Jude y Tom, su compañera de trabajo, Miranda, su madre y su ginecóloga, la Dra. Rawlings, se siente obligada a interesarse por la vida y el amor. Trabaja de nuevo e incluso prueba con una app de citas, a través de la cual conoce a un soñador bastante más joven que ella. Mujer trabajadora, ama de casa, madre y enamorada (a medias), Bridget se enfrenta al enjuiciamiento de las madres perfectas en el colegio, se preocupa por Billy, que no acaba de acostumbrarse a no tener un padre, y mantiene una extraña relación con el muy racional profesor de Ciencias de su hijo.\n",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/o6F5Mnm9sNM"
  },
  {
    id: "capitan-america-un-mundo-nuevo",
    image: "capitan-america-un-mundo-nuevo.webp",
    nombre: "Capitán América: Un mundo nuevo",
    descripcion: "Tras reunirse con el recién elegido presidente de Estados Unidos Thaddeus Ross (Harrison Ford), Sam se encuentra en medio de un incidente internacional. Debe descubrir la razón detrás de un nefasto complot global antes de que la verdadera mente maestra tenga al mundo entero viendo rojo. Cuarta película de la franquicia del Capitán América.",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/wl2I9HOovUQ"
  },
  {
    id: "paddington-aventura-en-la-selva",
    image: "paddington-aventura-en-la-selva.jpg",
    nombre: "Paddington: Aventura en la selva",
    descripcion: "Paddington y la familia Brown visitan a la tía Lucy en Perú, pero un misterio los envía a la selva amazónica y a las montañas peruanas.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/W0p9jThOHEU"
  },
  {
    id: "a-complete-unknown",
    image: "a-complete-unknown.jpg",
    nombre: "A Complete Unknown",
    descripcion: "Ambientada en la influyente escena musical de Nueva York de principios de los años 60, 'A Complete Unknown' cuenta la historia del meteórico ascenso del músico de Minnesota Bob Dylan, un cantante de folk de 19 años, hasta las salas de conciertos y lo más alto de las listas de éxitos. Las canciones y la mística de Dylan, de nombre Robert Allen Zimmerman, se convirtieron en un fenómeno mundial que culminó en 1965 con su transgresora actuación de rock eléctrico en el Newport Folk Festival.",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/5WGNuAR__NM"
  },
  {
    id: "wolfgang",
    image: "wolfgang.jpg",
    nombre: "Wolfgang (Extraordinario)",
    descripcion: "Wolfgang, un niño de diez años con un cociente intelectual de 152 y trastorno del espectro autista, se ve obligado a vivir con su padre, Carles, a quien no ha visto nunca, tras la repentina muerte de su madre. Carles afronta el reto con ganas y voluntad, pero Wolfgang no soporta su desorden ni su desorganización y lo considera un “bajocien” por su falta de intelecto. Así que, a escondidas, Wolfgang planea conseguir su sueño: entrar en la academia de música Grimald de París, donde estudió su madre, y convertirse en el mejor pianista del mundo. Cuando Carles lo descubre, debe decidir entre su gran oportunidad como actor o convertirse en el padre que necesita un niño como Wolfgang.",
    edadRedomendada: "No recomendada menores 7 años",
    videoUrl: "https://www.youtube.com/embed/Wm9o1N69WY0"
  },
  {
    id: "blancanieves",
    image: "blancanieves.avif",
    nombre: "Blancanieves",
    descripcion: "Una adaptación en acción real del clásico cuento de hadas sobre una hermosa joven princesa que, mientras es acosada por una reina celosa, busca refugio en la casa de siete enanos en la campiña alemana",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/Iqhf2jglRdc"
  },
  {
    id: "a-working-man",
    image: "a-working-man.jpg",
    nombre: "A Working Man",
    descripcion: 'Levon Cade ha dejado atrás su profesión para ser "honrado" y trabajar en la construcción. Quiere vivir una vida sencilla y ser un buen padre para su hija. Pero cuando Jenny, la hija adolescente de su jefe, desaparece, se ve obligado a volver a emplear las habilidades que le convirtieron en una figura legendaria en el oscuro mundo de las operaciones encubiertas. Su búsqueda de la universitaria desaparecida le lleva al corazón de una siniestra conspiración criminal que creará una reacción en cadena que amenazará su nueva forma de vida.',
    edadRedomendada: "No recomendada menores 16 años",
    videoUrl: "https://www.youtube.com/embed/gGOXUdcE6hk"
  },
  {
    id: "tierra-de-nadie",
    image: "tierra-de-nadie.jpg",
    nombre: "Tierra de nadie",
    descripcion: 'La historia de tres viejos amigos. Mateo "el Gallego", un heroico -a su pesar- guardia civil, Juan "el Antxale", un pescador convertido en narco por la mala suerte y el paro, y Benito "el Yeye", un resignado e inteligente depositario judicial siempre a medio camino entre la ley y la delincuencia. Tres amigos separados por un lugar, Cádiz, y un momento, el presente. Atrapados los tres entre el abandono de las instituciones, el violento e imparable ascenso del narco en la provincia y el peligroso aumento del descontento social. Tres amigos atrapados en un polvorín que pondrá a prueba su amistad. El traslado rutinario de un yate incautado a un peligroso cártel se convierte en una aventura entre la vida y la muerte.',
    edadRedomendada: "No recomendada menores 16 años",
    videoUrl: "https://www.youtube.com/embed/G_t2mTodCpk"
  },
  {
    id: "una-pelicula-de-minecraft",
    image: "una-pelicula-de-minecraft.jpg",
    nombre: "Una película de Minecraft",
    descripcion: 'Bienvenido al mundo de Minecraft, donde la creatividad no sólo ayuda a crear, sino que es esencial para la supervivencia. Cuatro inadaptados -Garrett "El Basurero" Garrison (Momoa), Henry (Hansen), Natalie (Myers) y Dawn (Brooks)- se encuentran luchando con problemas ordinarios cuando de repente se ven arrastrados a través de un misterioso portal al Mundo Exterior: un extraño país de las maravillas cúbico que se nutre de la imaginación. Para volver a casa, tendrán que dominar este mundo (y protegerlo de cosas malvadas como Piglins y Zombies, también) mientras se embarcan en una búsqueda mágica con un inesperado experto artesano, Steve (Black). Juntos, su aventura desafiará a los cinco a ser audaces y a volver a conectar con las cualidades que hacen que cada uno de ellos sea único y creativo... las mismas habilidades que necesitan para prosperar en el mundo real.',
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/yxrjSE8XddA"
  },
  {
    id: "un-funeral-de-locos",
    image: "un-funeral-de-locos.jpg",
    nombre: "Un funeral de locos",
    descripcion: "Los miembros de una familia acuden a despedir al patriarca, recién fallecido. Pero lo que debería ser un sentido velatorio se convierte en una reunión enloquecida cuando uno de los asistentes saca a la luz el secreto mejor guardado del difunto.",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/mI2j6-PyB1E"
  },
  {
    id: "padre-no-hay-mas-que-uno-5",
    image: "padre-no-hay-mas-que-uno-5.jpg",
    nombre: "Padre no hay más que uno 5: Nido repleto",
    descripcion: "Algunos padres experimentan la angustia del “nido vacío” cuando los hijos empiezan a abandonar el hogar. Javier, en cambio, sufre el trauma del “nido repleto”: nadie se va de casa.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/Os5EVDLcTx8"
  },
  {
    id: "jurassic-world-el-renacer",
    image: "jurassic-world-el-renacer.jpg",
    nombre: "Jurassic World: El renacer",
    descripcion: "Cinco años después de los acontecimientos de Jurassic World Dominion, la ecología del planeta Tierra ha demostrado ser insoportable para los dinosaurios. Los pocos que quedan viven en ambientes aislados en las regiones ecuatoriales, donde el clima se parece al que conocieron antaño. Las tres criaturas más grandes dentro de esta biosfera tropical tienen en su ADN la clave para fabricar un medicamento que aportará beneficios milagrosos a la raza humana. Zora Bennett, una experta en operaciones encubiertas, es contratada para dirigir a un equipo de especialistas en una misión secreta cuyo objetivo es conseguir el material genético. Pero la operación liderada por Zora se cruzará con una familia cuyo barco volcó por culpa de unos dinosaurios acuáticos y todos acabarán en una isla prohibida donde se ubicó hace años un centro de investigación ultrasecreto del Parque Jurásico. Allí, en un lugar poblado por dinosaurios de numerosas especies, se enfrentarán a un descubrimiento tan sorprendente como siniestro que lleva décadas escondido.",
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/1R3LTANp7hw"
  },
  {
    id: "como-entrenar-a-tu-dragon-la-pelicula",
    image: "como-entrenar-a-tu-dragon-la-pelicula.jpg",
    nombre: "Cómo entrenar a tu dragón",
    descripcion: "En la escarpada Isla Mema, donde vikingos y dragones han mantenido una amarga enemistad durante generaciones, Hipo es un muchacho diferente a los demás. El ingenioso y subestimado hijo del jefe Estoico el Inmenso desafía siglos de tradición haciéndose amigo de Desdentao, un temido dragón Furia Nocturna. Su insospechado vínculo desvelará la verdadera naturaleza de los dragones, poniendo a prueba los cimientos de la sociedad vikinga. En compañía de la feroz y ambiciosa Astrid y Bocón, el estrafalario herrero del pueblo, Hipo planta cara a un mundo dividido por el miedo y la incomprensión. Pero cuando surge una ancestral amenaza que pone en peligro tanto a vikingos como a dragones, la amistad de Hipo con Desdentao se convertirá en la clave para forjar un nuevo futuro. Juntos, deberán recorrer la delicada senda hacia la paz, volando más allá de los límites de sus mundos y redefiniendo para siempre el significado de ser un héroe y un líder.",
    edadRedomendada: "No recomendada menores 7 años",
    videoUrl: "https://www.youtube.com/embed/Os5EVDLcTx8"
  },
  {
    id: "lilo-y-stitch",
    image: "lilo-y-stitch.jpg",
    nombre: "Lilo y Stitch",
    descripcion: 'Remake en imagen real de "Lilo & Stitch". Narra la historia de una niña hawaiana solitaria y un extraterrestre fugitivo que la ayuda a recomponer su rota familia.',
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/HeTE7j9dcGg"
  },
  {
    id: "f1-la-pelicula",
    image: "f1-la-pelicula.jpeg",
    nombre: "F1: La película",
    descripcion: "Apodado “el más grande de todos los tiempos”, Sonny Hayes fue el fenómeno más prometedor de la Fórmula 1 en la década de 1990 hasta que un accidente en la pista casi acaba con su carrera. Treinta años después, es un piloto nómada a sueldo al que contacta su antiguo compañero de equipo Rubén Cervantes, propietario de un equipo de Fórmula 1 en apuros que está al borde de la quiebra. Rubén convence a Sonny para volver a la Fórmula 1 y tener una última oportunidad para salvar al equipo y ser el mejor del mundo. Su compañero será el novato Joshua Pearce, el piloto estrella del equipo que está decidido a imponer su propio ritmo.",
    edadRedomendada: "No recomendada menores 13 años",
    videoUrl: "https://www.youtube.com/embed/H4qYzIrxRds"
  },
  {
    id: "elio",
    image: "elio.jpg",
    nombre: "Elio",
    descripcion: "La historia de Elio, un niño de 11 años con una imaginación desbordante y una enorme obsesión por los extraterrestres, que lucha por encajar hasta que de repente es transportado al espacio y es identificado por error como el embajador galáctico de la Tierra.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/7CPDmA4nGo"
  },
  {
    id: "superman-2025",
    image: "superman-2025.jpg",
    nombre: "Superman",
    descripcion: 'Nueva película de Superman, escrita por James Gunn, que "no será una historia de origen". Con su estilo característico, Gunn aborda al superhéroe original en el recién imaginado universo DC con una singular mezcla de acción épica, humor y corazón, ofreciendo un Superman impulsado por la compasión y una creencia inherente en la bondad de la humanidad.',
    edadRedomendada: "No recomendada menores 13 años",
    videoUrl: "https://www.youtube.com/embed/_EjMNSH9-p4"
  },
  {
    id: "pitufos-2025",
    image: "pitufos-2025.jpg",
    nombre: "Pitufos",
    descripcion: "Película musical de animación centrada en las icónicas creaciones de Peyo. Cuando Papá Pitufo es secuestrado de forma misteriosa por los malvados brujos Razamel y Gargamel, Pitufina lleva a los Pitufos a una misión al mundo real para salvarle. Con la ayuda de nuevos amigos, los Pitufos deberán descubrir qué define su destino para salvar el universo.",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/jYtjerVhaSA"
  },
  {
    id: "los-4-fantasticos-primeros-pasos",
    image: "los-4-fantasticos-primeros-pasos.jpg",
    nombre: "Los Cuatro Fantásticos: Primeros pasos",
    descripcion: 'Ambientada en el vibrante telón de fondo de un mundo retro-futurista inspirado en los años 60, presenta a la Primera Familia de Marvel mientras se enfrentan a su desafío más terrorífico hasta la fecha. Obligados a equilibrar sus roles como héroes con la fortaleza de su vínculo familiar, deben defender la Tierra de un dios espacial voraz llamado Galactus y su enigmático Heraldo, Silver Surfer. Y si el plan de Galactus de devorar todo el planeta y a todos en él no fuera lo suficientemente malo, de repente se vuelve muy personal. Estreno de "Los 4 Fantásticos" en el MCU.',
    edadRedomendada: "No recomendada menores 7 años",
    videoUrl: "https://www.youtube.com/embed/BV0pwHEkU_I"
  },
  {
    id: "mision-imposible-sentencia-final",
    image: "mision-imposible-sentencia-final.jpg",
    nombre: "Misión imposible: Sentencia final",
    descripcion: 'El agente Ethan Hunt continúa su misión de impedir que Gabriel controle el tecnológicamente omnipotente programa de IA conocido como "la Entidad".',
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/mHV67lQviME"
  },
  {
    id: "los-tipos-malos-2",
    image: "los-tipos-malos-2.jpg",
    nombre: "Los tipos malos 2",
    descripcion: "Un genial equipo de animales que no respetan la ley, los ahora muy reformados Tipos Malos, se esfuerzan (mucho, muchísimo) en ser buenos, pero se ven envueltos involuntariamente en un golpe de envergadura mundial planeado por un inesperado grupo de criminales: las Tipas Malas.",
    edadRedomendada: "No recomendada menores 7 años",
    videoUrl: "https://www.youtube.com/embed/PnUcgVUuYjs"
  },
  {
    id: "karate-kid-leyendas",
    image: "karate-kid-leyendas.jpg",
    nombre: "Karate Kid: Leyendas",
    descripcion: 'Tras una tragedia familiar, el prodigio del kung fu Li Fong se ve obligado a abandonar su hogar en Pekín y trasladarse a Nueva York con su madre. Li lucha por dejar atrás su pasado mientras intenta encajar con sus nuevos compañeros de clase y, aunque no quiere pelear, los problemas parecen encontrarle en todas partes. Cuando un nuevo amigo necesita su ayuda, Li se presenta a una competición de kárate, pero sus habilidades no son suficientes. El profesor de kung fu de Li, el Sr. Han, pide ayuda al Karate Kid original, Daniel LaRusso, y Li aprende una nueva forma de luchar, fusionando sus dos estilos en uno solo para el enfrentamiento definitivo de artes marciales. Nueva película de la saga "Karate Kid", conectada al universo de "Cobra Kai".',
    edadRedomendada: "No recomendada menores 12 años",
    videoUrl: "https://www.youtube.com/embed/rL0Ec_v4zVw"
  },
  {
    id: "voy-a-pasarmelo-mejor",
    image: "voy-a-pasarmelo-mejor.jpg",
    nombre: "Voy a pasarmelo mejor",
    descripcion: "Es 1991 y los Pitus, al llegar el verano, se van de campamento. Al ritmo de las canciones más exitosas del año, cada uno de ellos se enamorará con la ilusión que sólo se tiene a los catorce y quince años.",
    edadRedomendada: "No recomendada menores 7 años",
    videoUrl: "https://www.youtube.com/embed/NfhooptQD0E"
  },
  {
    id: "se-lo-que-hicisteis-el-ultimo-verano",
    image: "se-lo-que-hicisteis-el-ultimo-verano.jpg",
    nombre: "Se lo que hicisteis el ultimo verano",
    descripcion: "Cuando cinco amigos provocan sin querer un accidente de coche mortal, encubren su implicación y hacen un pacto para mantenerlo en secreto en lugar de afrontar las consecuencias. Un año después, su pasado vuelve para atormentarlos y se ven obligados a enfrentarse a una aterradora verdad: alguien sabe lo que hicieron el último verano... y está empeñado en vengarse. A medida que los amigos son acechados uno a uno por un asesino, descubren que esto ya ha sucedido antes, y recurren a dos supervivientes de la legendaria Masacre de Southport de 1997 en busca de ayuda.",
    edadRedomendada: "No recomendada menores 16 años",
    videoUrl: "https://www.youtube.com/embed/UMmsBLH1cxw"
  },
  {
    id: "los-futbolisimos-2",
    image: "los-futbolisimos-2.webp",
    nombre: "Los futbolísimos 2. El misterio del tesoro pirata",
    descripcion: "Pakete y sus compañeros del Soto Alto FC forman una pandilla inseparable, pero el pacto de Los Futbolísimos peligra: una estafa inmobiliaria les ha dejado sin campo donde jugar y a su pueblo sumido en la ruina. Para seguir en la liga intercentros tendrán que ganar al equipo de Los Justos, unos rivales especialmente complicados, con una capitana un tanto “pirata” que les meterá en más de un lío: Se verán involucrados en el robo a un banco y el padre de Pakete verá peligrar su trabajo de policía. Para superar todo esto, Los Futbolísimos tendrán que agudizar su ingenio y permanecer más unidos que nunca…",
    edadRedomendada: "Todos los públicos",
    videoUrl: "https://www.youtube.com/embed/CAED02oRLjI"
  }
];

function getProyecciones(fechaInicio, fechaFin, hora, vose) {
  const dias = [];
  for (let d = fechaInicio; d <= fechaFin; d.setDate(d.getDate() + 1)) {
    const fecha = new Date(d);
    fecha.setHours(23, 59, 59, 999);
    dias.push(fecha);
  }
  return dias.map((fecha) => {
    return {
      fecha,
      hora,
      vose
    };
  });
}
const cineVera = CINES.find((cine) => cine.url === "vera");
const gruposProyeccionesVera = [
  {
    grupo: 1,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "padre-no-hay-mas-que-uno-5"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-06-27"), /* @__PURE__ */ new Date("2025-07-01"), "22:00")
    ]
  },
  {
    grupo: 2,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "jurassic-world-el-renacer"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-02"), /* @__PURE__ */ new Date("2025-07-07"), "22:00")
    ]
  },
  {
    grupo: 3,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "como-entrenar-a-tu-dragon-la-pelicula"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-08"), /* @__PURE__ */ new Date("2025-07-10"), "22:00")
    ]
  },
  {
    grupo: 4,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "elio"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-11"), /* @__PURE__ */ new Date("2025-07-14"), "22:00")
    ]
  },
  {
    grupo: 5,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "superman-2025"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-15"), /* @__PURE__ */ new Date("2025-07-17"), "22:00")
    ]
  },
  {
    grupo: 6,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "pitufos-2025"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-18"), /* @__PURE__ */ new Date("2025-07-21"), "22:00")
    ]
  },
  {
    grupo: 7,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "padre-no-hay-mas-que-uno-5"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-22"), /* @__PURE__ */ new Date("2025-07-24"), "22:00")
    ]
  },
  {
    grupo: 8,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "los-4-fantasticos-primeros-pasos"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-25"), /* @__PURE__ */ new Date("2025-07-28"), "22:00")
    ]
  },
  {
    grupo: 9,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "f1-la-pelicula"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-29"), /* @__PURE__ */ new Date("2025-07-31"), "22:00")
    ]
  },
  {
    grupo: 10,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "los-tipos-malos-2"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-08-01"), /* @__PURE__ */ new Date("2025-08-04"), "22:00")
    ]
  },
  {
    grupo: 11,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "jurassic-world-el-renacer"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-08-05"), /* @__PURE__ */ new Date("2025-08-07"), "22:00")
    ]
  },
  {
    grupo: 12,
    cine: cineVera,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "karate-kid-leyendas"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-08-08"), /* @__PURE__ */ new Date("2025-08-11"), "22:00")
    ]
  }
];
const cineRegio = CINES.find((cine) => cine.url === "regio");
const gruposProyeccionesRegio = [
  {
    grupo: 1,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "lilo-y-stitch"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-06-27"), /* @__PURE__ */ new Date("2025-07-01"), "20:00"),
      ...getProyecciones(/* @__PURE__ */ new Date("2025-06-27"), /* @__PURE__ */ new Date("2025-07-01"), "22:00")
    ]
  },
  {
    grupo: 2,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "padre-no-hay-mas-que-uno-5"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-02"), /* @__PURE__ */ new Date("2025-07-03"), "20:00"),
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-02"), /* @__PURE__ */ new Date("2025-07-04"), "22:00")
    ]
  },
  {
    grupo: 3,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "f1-la-pelicula"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-05"), /* @__PURE__ */ new Date("2025-07-09"), "21:00")
    ]
  },
  {
    grupo: 4,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "superman-2025"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-11"), /* @__PURE__ */ new Date("2025-07-14"), "21:00")
    ]
  },
  {
    grupo: 5,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "elio"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-15"), /* @__PURE__ */ new Date("2025-07-17"), "20:00"),
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-15"), /* @__PURE__ */ new Date("2025-07-17"), "22:00")
    ]
  },
  {
    grupo: 6,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "mision-imposible-sentencia-final"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-18"), /* @__PURE__ */ new Date("2025-07-21"), "21:00")
    ]
  },
  {
    grupo: 7,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "pitufos-2025"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-22"), /* @__PURE__ */ new Date("2025-07-24"), "20:00"),
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-22"), /* @__PURE__ */ new Date("2025-07-24"), "22:00")
    ]
  },
  {
    grupo: 8,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "voy-a-pasarmelo-mejor"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-25"), /* @__PURE__ */ new Date("2025-07-28"), "21:00")
    ]
  },
  {
    grupo: 9,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "los-4-fantasticos-primeros-pasos"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-07-29"), /* @__PURE__ */ new Date("2025-07-31"), "21:00")
    ]
  },
  {
    grupo: 10,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "se-lo-que-hicisteis-el-ultimo-verano"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-08-01"), /* @__PURE__ */ new Date("2025-08-04"), "21:00")
    ]
  },
  {
    grupo: 11,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "los-tipos-malos-2"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-08-05"), /* @__PURE__ */ new Date("2025-08-07"), "21:00")
    ]
  },
  {
    grupo: 12,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "los-futbolisimos-2"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-08-08"), /* @__PURE__ */ new Date("2025-08-11"), "21:00")
    ]
  },
  {
    grupo: 13,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "karate-kid-leyendas"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2025-08-12"), /* @__PURE__ */ new Date("2025-08-15"), "21:00")
    ]
  }
];
const GRUPOSPROYECCIONES = [
  ...gruposProyeccionesVera,
  //...gruposProyeccionesGarrucha,
  ...gruposProyeccionesRegio
];

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1, _b;
const $$RichResults = createComponent(($$result, $$props, $$slots) => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://veracines.es",
    "image": "/img/og.jpg",
    "sameAs": [
      "https://www.instagram.com/veracines.sl"
    ],
    "logo": "/img/logo.jpg",
    "name": "Veracines - Cines de verano en Vera y Garrucha",
    "alternateName": "Veracines - Salas al aire libre en Vera y Garrucha",
    "description": "Conoce "
  };
  const gruposProyeccionesProximas = GRUPOSPROYECCIONES.filter((grupoProyeccion) => {
    return grupoProyeccion.proyecciones.some((proyeccion) => {
      const fecha = new Date(proyeccion.fecha);
      return fecha >= /* @__PURE__ */ new Date();
    });
  });
  const eventsSchema = gruposProyeccionesProximas.map((grupoProyeccion) => {
    if (!grupoProyeccion.pelicula)
      console.log(grupoProyeccion);
    return grupoProyeccion.proyecciones.map((proyeccion) => ({
      "@context": "https://schema.org",
      "@type": "ScreeningEvent",
      "name": `${grupoProyeccion.pelicula.nombre} en ${grupoProyeccion.cine.nombre}`,
      "startDate": `${proyeccion.fecha.getFullYear()}${proyeccion.fecha.getMonth()}${proyeccion.fecha.getDate()}T${grupoProyeccion.cine.horaFijaProyeccion ?? proyeccion.hora}`,
      "location": {
        "@type": "Place",
        "name": grupoProyeccion.cine.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": grupoProyeccion.cine.localizacion.direccion,
          "addressLocality": "Vera",
          "postalCode": "04620",
          "addressRegion": "Almer\xEDa",
          "addressCountry": "ES"
        }
      },
      "image": [`https://www.veracines.es/img/peliculas/${grupoProyeccion.pelicula.image}`],
      "description": grupoProyeccion.pelicula.descripcion,
      "workPresented": {
        "@type": "Movie",
        "name": grupoProyeccion.pelicula.nombre,
        "image": `https://www.veracines.es/img/peliculas/${grupoProyeccion.pelicula.image}`,
        "description": grupoProyeccion.pelicula.descripcion
      }
    })).flat(1);
  });
  const FAQs = [
    {
      question: "\xBFSe puede pasar con comida y bebida en Veracines?",
      answer: "Si, se permite la entrada de comida y bebida, aunque el cine cuenta con todos los servicios para que no necesites traer nada."
    },
    CINES.filter((x) => x.horaFijaProyeccion).map((cine) => ({
      question: `\xBFA que hora empiezan las peliculas en ${cine.nombre}?`,
      answer: `En ${cine.nombre} todas las proyecciones comienzan a las ${cine.horaFijaProyeccion}`
    })),
    CINES.map((cine) => ({
      question: `\xBFDonde est\xE1 el ${cine.nombre}?`,
      answer: `El ${cine.nombre} est\xE1 en ${cine.localizacion}`
    })),
    CINES.map((cine) => ({
      question: `\xBFCuanto cuesta la entrada al ${cine.nombre}?`,
      answer: `La entrada al ${cine.nombre} cuesta 5,50\u20AC`
    }))
  ];
  const FAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      FAQs.map(({ answer, question }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": answer
        }
      }))
    ]
  };
  return renderTemplate(_b || (_b = __template$1(['<script type="application/ld+json">', "<\/script> ", '<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(organizationSchema)), eventsSchema && eventsSchema.length > 0 && renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(eventsSchema))), unescapeHTML(JSON.stringify(FAQSchema)));
}, "/Users/diego.ramos/veracines-web/src/components/RichResults.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://www.veracines.es");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, preload, canonical, image = "/img/logo.jpg" } = Astro2.props;
  const canonicalURL = canonical ? `https://${canonical}` : `https://${Astro2.url.pathname}`;
  return renderTemplate(_a || (_a = __template(["<title>", '</title><meta charset="UTF-8"><meta name="description"', '><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin>', '<link rel="canonical"', '><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#d5ff00"><meta name="keywords" content="cine de verano, estreno, cine, peliculas, verano, vera, garrucha, almer\xEDa"><meta name="og:image"', '><meta name="og:title"', '><meta name="og:description"', '><meta name="og:url"', '><meta name="og:site_name" content="Veracines"><meta name="og:type" content="website"><meta name="og:locale" content="es_ES"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><link rel="icon" type="image/png" href="/img/logo.png"><meta name="msapplication-config" content="/browserconfig.xml"><script src="/registerSW.js"><\/script><link rel="manifest" href="/manifest.webmanifest">', ""])), title, addAttribute(description, "content"), addAttribute(atomic, "href"), addAttribute(jost, "href"), preload?.map(({ href, as, type, rel = "preload", crossorigin }) => renderTemplate`<link${addAttribute(rel, "rel")}${addAttribute(href, "href")}${addAttribute(as, "as")}${addAttribute(type, "type")}${addAttribute(crossorigin, "crossorigin")}>`), addAttribute(canonicalURL, "href"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"), renderComponent($$result, "RichResults", $$RichResults, {}));
}, "/Users/diego.ramos/veracines-web/src/components/SEO.astro", void 0);

const $$Toast = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` `;
}, "/Users/diego.ramos/veracines-web/src/components/ui/Toast.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative mt-20 flex w-full flex-col place-items-center pb-20 pt-14 md:flex-row md:justify-between md:pt-16"> <hr class="absolute top-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"> ${renderComponent($$result, "FooterContent", $$FooterContent, {})} <hr aria-hidden="true" class="my-12 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:hidden"> ${renderComponent($$result, "SocialButtons", $$SocialButtons, {})} </footer>`;
}, "/Users/diego.ramos/veracines-web/src/sections/Footer.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, preload, canonical, image } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "preload": preload, "title": title })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="overflow-x-hidden selection:bg-primary [&_:focus-visible]:outline-none [&_:focus-visible]:ring-2 [&_:focus-visible]:ring-primary"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Toast", $$Toast, {})} <div class="bg-primary border-primary text-primary" style="display: none"></div> <div class="bg-secondary border-secondary text-secondary" style="display: none"></div> ${renderComponent($$result, "ButtonUp", $$ButtonUp, {})}  </body> </html>`;
}, "/Users/diego.ramos/veracines-web/src/layouts/Layout.astro", void 0);

export { $$Typography as $, CINES as C, GRUPOSPROYECCIONES as G, PELICULAS as P, $$Layout as a };
