import { f as createAstro, g as createComponent, i as addAttribute, r as renderTemplate, m as maybeRenderHead, j as renderComponent, l as renderSlot, n as renderHead } from './astro/server_CE9mvu6d.mjs';
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

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" type="button" aria-label="Cambiar tema oscuro/claro" class="relative flex items-center justify-center w-9 h-9 rounded-full transition-colors duration-200
		   text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white
		   hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary"> <!-- Sol: visible en modo oscuro (para volver a claro) --> <svg id="theme-icon-light" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.66-13l-.87.5M4.21 17.5l-.87.5M20.66 17.5l-.87-.5M4.21 6.5l-.87-.5M21 12h-1M4 12H3m15.07-5.07l-.71.71M6.34 17.66l-.71.71M17.66 17.66l.71.71M6.34 6.34l.71-.71M12 8a4 4 0 100 8 4 4 0 000-8z"></path> </svg> <!-- Luna: visible en modo claro (para pasar a oscuro) --> <svg id="theme-icon-dark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" aria-hidden="true"> <path stroke-linecap="round" stroke-linejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"></path> </svg> </button> <!-- CSS global: los iconos se muestran/ocultan según html.dark,
     que ya está establecida antes del render por el script anti-flash. -->  `;
}, "/Users/diego.ramos/veracines-web/src/components/ThemeToggle.astro", void 0);

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const pages = [
    { name: "Inicio", href: "/" },
    { name: "Terraza de Vera", href: "/cartelera-vera" },
    { name: "Cine Regio", href: "/cartelera-regio" }
  ].map((page) => ({
    ...page,
    active: Astro2.url.pathname === page.href || Astro2.url.pathname === page.href + "/"
  }));
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 h-16 max-w-[100vw] lg:h-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-sm dark:shadow-gray-900/50" data-astro-cid-3ef6ksr2> <nav class="group flex h-full w-full items-center justify-between px-6 lg:justify-center lg:gap-1 max-w-5xl mx-auto" data-astro-cid-3ef6ksr2> <!-- Logo desktop --> <a href="/" class="hidden lg:flex items-center mr-8 shrink-0" aria-label="Veracines – Página principal" data-astro-cid-3ef6ksr2> <img src="/img/veracines-logo.png" alt="Veracines" class="h-10 w-auto" width="120" height="43" loading="eager" decoding="async" data-astro-cid-3ef6ksr2> </a> ${pages.map(({ disabled, name, href, active, soonDate }, key) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute([
    "nav-item relative hidden h-full select-none items-center justify-center px-5 xl:px-6 text-sm font-semibold uppercase tracking-wide lg:flex text-nowrap transition-colors duration-200",
    { "pointer-events-none opacity-50": disabled },
    { "text-primary": active },
    { "text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white": !active }
  ], "class:list")}${addAttribute(`nav-link-${key}`, "id")}${addAttribute(active ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> <span class="relative z-10" data-astro-cid-3ef6ksr2>${name}</span> ${active && renderTemplate`<span class="nav-active-pill" aria-hidden="true" data-astro-cid-3ef6ksr2></span>`} ${disabled && renderTemplate`<span class="absolute mt-8 text-xs text-primary" data-astro-cid-3ef6ksr2>${soonDate}</span>`} </a>`)} <!-- Logo móvil --> <a href="/" class="block lg:hidden" aria-label="Veracines – Página principal" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "DrawnXLogo", $$DrawnXLogo, { "class:list": "w-9", "data-astro-cid-3ef6ksr2": true })} </a> <div class="flex items-center gap-1 ml-auto lg:ml-4" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, { "class:list": "block lg:hidden", "id": "menuButton", "data-astro-cid-3ef6ksr2": true })} </div> <!-- Menú móvil: panel deslizante desde la derecha --> <div class="fixed inset-0 z-[888] lg:hidden"${addAttribute(MOBILE_MENU_CONTENT_ID, "id")} data-astro-cid-3ef6ksr2> <!-- Backdrop oscuro --> <div class="menu-backdrop absolute inset-0 bg-black/40" id="menuBackdrop" data-astro-cid-3ef6ksr2></div> <!-- Panel --> <div class="menu-panel absolute right-0 top-0 bottom-0 w-[80vw] max-w-xs bg-white dark:bg-gray-900 flex flex-col shadow-2xl" data-astro-cid-3ef6ksr2> <!-- Cabecera --> <div class="flex h-16 items-center justify-between px-5 border-b border-gray-100 dark:border-gray-800" data-astro-cid-3ef6ksr2> <img src="/img/veracines-logo.png" alt="Veracines" class="h-8 w-auto" width="100" height="36" loading="lazy" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, { "id": "innerMenuButton", "data-astro-cid-3ef6ksr2": true })} </div> <!-- Links con stagger --> <nav class="flex flex-col flex-1 overflow-y-auto py-4 px-3 gap-1" aria-label="Menú principal" data-astro-cid-3ef6ksr2> ${pages.map(({ disabled, name, href, active }, key) => renderTemplate`<a${addAttribute(href, "href")}${addAttribute([
    "menu-link flex items-center gap-3 rounded-xl px-4 py-3.5 text-base font-semibold transition-colors duration-150",
    `menu-link-${key}`,
    { "pointer-events-none opacity-40": disabled },
    { "bg-primary text-white shadow-sm": active },
    { "text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white": !active }
  ], "class:list")}${addAttribute(`--delay: ${key * 60}ms`, "style")}${addAttribute(`navmob-link-${key}`, "id")}${addAttribute(active ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${name} ${active && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-auto opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" data-astro-cid-3ef6ksr2> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-astro-cid-3ef6ksr2></path> </svg>`} </a>`)} </nav> <!-- Footer del panel --> <div class="border-t border-gray-100 dark:border-gray-800 p-5 flex flex-col gap-4" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "SocialButtons", $$SocialButtons, { "class": "flex items-center gap-3", "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "FooterContent", $$FooterContent, { "data-astro-cid-3ef6ksr2": true })} </div> </div> </div> </nav> <!-- Línea decorativa --> <div class="absolute bottom-0 left-0 right-0 h-[2px]" style="background:linear-gradient(to right, transparent 2%, var(--color-primary) 15%, var(--color-primary) 83%, transparent 98%)" data-astro-cid-3ef6ksr2></div> </header>  `;
}, "/Users/diego.ramos/veracines-web/src/components/Header.astro", void 0);

const jost = "/_astro/jost-latin-wght-normal.CfFW3YMY.woff2";

const atomic = "/fonts/atomic.woff2";

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("https://www.veracines.es");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, preload, canonical, image = "/img/logo.jpg" } = Astro2.props;
  const canonicalURL = canonical ? `https://${canonical}` : `https://${Astro2.url.pathname}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<title>", '</title><meta charset="UTF-8"><meta name="description"', '><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin>', '<link rel="canonical"', '><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#d5ff00"><meta name="keywords" content="cine de verano, estreno, cine, peliculas, verano, vera, garrucha, almer\xEDa"><meta name="og:image"', '><meta name="og:title"', '><meta name="og:description"', '><meta name="og:url"', '><meta name="og:site_name" content="Veracines"><meta name="og:type" content="website"><meta name="og:locale" content="es_ES"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><link rel="icon" type="image/png" href="/img/logo.png"><meta name="msapplication-config" content="/browserconfig.xml"><script src="/registerSW.js"><\/script><link rel="manifest" href="/manifest.webmanifest"><!--<RichResults />-->'])), title, addAttribute(description, "content"), addAttribute(atomic, "href"), addAttribute(jost, "href"), preload?.map(({ href, as, type, rel = "preload", crossorigin }) => renderTemplate`<link${addAttribute(rel, "rel")}${addAttribute(href, "href")}${addAttribute(as, "as")}${addAttribute(type, "type")}${addAttribute(crossorigin, "crossorigin")}>`), addAttribute(canonicalURL, "href"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"));
}, "/Users/diego.ramos/veracines-web/src/components/SEO.astro", void 0);

const $$Toast = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate` `;
}, "/Users/diego.ramos/veracines-web/src/components/ui/Toast.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="relative mt-20 flex w-full flex-col place-items-center pb-20 pt-14 md:flex-row md:justify-between md:pt-16"> <hr class="absolute top-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"> ${renderComponent($$result, "FooterContent", $$FooterContent, {})} <hr aria-hidden="true" class="my-12 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:hidden"> ${renderComponent($$result, "SocialButtons", $$SocialButtons, {})} </footer>`;
}, "/Users/diego.ramos/veracines-web/src/sections/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.veracines.es");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, preload, canonical, image } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><!-- Anti-flash dark mode: aplica la clase antes del primer paint --><script>\n			;(function () {\n				const stored = localStorage.getItem("theme")\n				const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches\n				if (stored === "dark" || (!stored && prefersDark)) {\n					document.documentElement.classList.add("dark")\n				}\n			})()\n		<\/script><!-- Persistir tema en navegaciones con View Transitions --><script>\n			document.addEventListener("astro:before-swap", function (e) {\n				const isDark = document.documentElement.classList.contains("dark")\n				if (isDark) {\n					e.newDocument.documentElement.classList.add("dark")\n				} else {\n					e.newDocument.documentElement.classList.remove("dark")\n				}\n			})\n		<\/script><script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="c4820152-a570-4c39-b715-fbc8a232cbf9" data-blockingmode="auto" type="text/javascript"><\/script>', "", "", "", '</head> <body class="overflow-x-hidden selection:bg-primary [&_:focus-visible]:outline-none [&_:focus-visible]:ring-2 [&_:focus-visible]:ring-primary"> ', " ", " ", " ", ' <div class="bg-primary border-primary text-primary" style="display: none"></div> <div class="bg-secondary border-secondary text-secondary" style="display: none"></div> ', "  </body> </html>"])), renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "preload": preload, "title": title }), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderSlot($$result, $$slots["head"]), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Toast", $$Toast, {}), renderComponent($$result, "ButtonUp", $$ButtonUp, {}));
}, "/Users/diego.ramos/veracines-web/src/layouts/Layout.astro", void 0);

export { $$Typography as $, $$Layout as a };
