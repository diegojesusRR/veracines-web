/* empty css                               */
import crypto from 'node:crypto';
import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderComponent, e as renderSlot, F as Fragment, u as unescapeHTML, f as renderHead } from './astro/server_DJGT4-uI.mjs';
import 'kleur/colors';
import 'clsx';

if (!globalThis.crypto) globalThis.crypto = crypto;
if (typeof globalThis.crypto.subtle === "undefined") globalThis.crypto.subtle = crypto.webcrypto.subtle;
if (typeof globalThis.crypto.randomUUID === "undefined") globalThis.crypto.randomUUID = crypto.randomUUID;

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
    { name: "Cine Tenis de Garrucha", href: "/cartelera-garrucha" },
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
    horaFijaProyeccion: "22:00"
  },
  {
    url: "garrucha",
    nombre: "Cine Tenis de Garrucha",
    corto: "Garrucha",
    "color": "primary",
    localizacion: {
      ubicacionKey: "!1m18!1m12!1m3!1d25418.563129508486!2d-1.8616586513771942!3d37.21636849263374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7b29f1d4fe4b9b%3A0xda525c0a7e7bc5d5!2sCine%20Tenis!5e0!3m2!1ses!2ses!4v1715623188288!5m2!1ses!2ses",
      direccion: "C. Tenis, 04630 Garrucha, Almería",
      descripcion: "Se encuentra junto a Mercadona en Garrucha, en la calle Tenis, el cine Tenis de Garrucha es un lugar ideal para disfrutar de una película al aire libre en Garrucha.",
      ciudad: "Garrucha",
      provincia: "Almería",
      codigoPostal: "04630",
      adressCounty: "ES"
    },
    servicios: [],
    horaFijaProyeccion: "22:00"
  },
  {
    url: "regio",
    nombre: "Cine Regio de Vera",
    corto: "Regio",
    color: "primary",
    localizacion: {
      ubicacionKey: "!1m18!1m12!1m3!1d3176.0496114881794!2d-1.8706054238921004!3d37.24653037212324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad503b6424b21%3A0xb294666e35a7e06c!2sC.%20Radio%20Nacional%2C%20s%2Fn%2C%2004620%20Vera%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1716051070703!5m2!1ses!2ses",
      direccion: "C. Radio Nacional, s/n, 04620 Vera, Almería",
      descripcion: "Situado en pleno centro de Vera, junto a la Plaza Mayor, en Cine Regio de Vera entre otorño y primavera podrás disfrutar de las mejores películas en un ambiente único.",
      ciudad: "Vera",
      provincia: "Almería",
      codigoPostal: "04620",
      adressCounty: "ES"
    },
    servicios: []
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
  }
];

function getProyecciones(fechaInicio, fechaFin, hora, vose) {
  const dias = [];
  for (let d = fechaInicio; d <= fechaFin; d.setDate(d.getDate() + 1)) {
    dias.push(new Date(d));
  }
  return dias.map((fecha) => {
    return {
      fecha,
      hora,
      vose
    };
  });
}
CINES.find((cine) => cine.url === "garrucha");
const gruposProyeccionesGarrucha = [];
CINES.find((cine) => cine.url === "vera");
const gruposProyeccionesVera = [];
const cineRegio = CINES.find((cine) => cine.url === "regio");
const gruposProyeccionesRegio = [
  {
    grupo: 1,
    cine: cineRegio,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "gladiator-2"),
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2024-11-15"), /* @__PURE__ */ new Date("2024-11-17"), "17:30"),
      ...getProyecciones(/* @__PURE__ */ new Date("2024-11-15"), /* @__PURE__ */ new Date("2024-11-17"), "20:30"),
      ...getProyecciones(/* @__PURE__ */ new Date("2024-11-21"), /* @__PURE__ */ new Date("2024-11-21"), "20:00", "en")
    ],
    entradas: {
      espanol: "https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1133&cine=REGIO",
      vose: "https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1134&cine=REGIO"
    }
  },
  {
    grupo: 2,
    pelicula: PELICULAS.find((pelicula) => pelicula.id === "wicked"),
    cine: cineRegio,
    proyecciones: [
      ...getProyecciones(/* @__PURE__ */ new Date("2024-11-22"), /* @__PURE__ */ new Date("2024-11-22"), "20:00"),
      ...getProyecciones(/* @__PURE__ */ new Date("2024-11-23"), /* @__PURE__ */ new Date("2024-11-23"), "17:30"),
      ...getProyecciones(/* @__PURE__ */ new Date("2024-11-23"), /* @__PURE__ */ new Date("2024-11-23"), "20:30"),
      ...getProyecciones(/* @__PURE__ */ new Date("2024-11-24"), /* @__PURE__ */ new Date("2024-11-24"), "17:30"),
      ...getProyecciones(/* @__PURE__ */ new Date("2024-11-28"), /* @__PURE__ */ new Date("2024-11-28"), "20:00", "en")
    ]
    // entradas: {
    //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
    //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
    // }
  }
];
const GRUPOSPROYECCIONES = [
  ...gruposProyeccionesVera,
  ...gruposProyeccionesGarrucha,
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
  const eventsSchema = GRUPOSPROYECCIONES.map((grupopProyeccion) => {
    return grupopProyeccion.proyecciones.map((proyeccion) => ({
      "@context": "https://schema.org",
      "@type": "ScreeningEvent",
      "name": `${grupopProyeccion.pelicula.nombre} en ${grupopProyeccion.cine.nombre}`,
      "startDate": `${proyeccion.fecha.getFullYear()}${proyeccion.fecha.getMonth()}${proyeccion.fecha.getDate()}T${grupopProyeccion.cine.horaFijaProyeccion ?? proyeccion.hora}`,
      "location": {
        "@type": "Place",
        "name": grupopProyeccion.cine.nombre,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": grupopProyeccion.cine.localizacion.direccion,
          "addressLocality": "Vera",
          "postalCode": "04620",
          "addressRegion": "Almer\xEDa",
          "addressCountry": "ES"
        }
      },
      "image": [`https://www.veracines.es/img/peliculas/${grupopProyeccion.pelicula.image}`],
      "description": grupopProyeccion.pelicula.descripcion,
      "workPresented": {
        "@type": "Movie",
        "name": grupopProyeccion.pelicula.nombre,
        "image": `https://www.veracines.es/img/peliculas/${grupopProyeccion.pelicula.image}`,
        "description": grupopProyeccion.pelicula.descripcion
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
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "preload": preload, "title": title })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="overflow-x-hidden selection:bg-primary [&_:focus-visible]:outline-none [&_:focus-visible]:ring-2 [&_:focus-visible]:ring-primary"> ${renderComponent($$result, "Header", $$Header, {})} <div class="mx-auto min-h-screen max-w-5xl px-2 pt-4 selection:bg-primary md:pt-6 lg:px-6 id=" main-content"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Toast", $$Toast, {})} </div> ${renderComponent($$result, "ButtonUp", $$ButtonUp, {})}  </body> </html>`;
}, "/Users/diego.ramos/veracines-web/src/layouts/Layout.astro", void 0);

export { $$Typography as $, CINES as C, GRUPOSPROYECCIONES as G, PELICULAS as P, $$Layout as a };
