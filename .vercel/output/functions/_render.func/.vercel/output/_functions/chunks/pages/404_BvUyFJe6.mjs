/* empty css                                     */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderSlot, F as Fragment, h as renderHead } from '../astro_BvmcH-Yh.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$g = createAstro("https://www.veracines.es");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/diego.ramos/veracines-web/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$f = createAstro("https://www.veracines.es");
const $$ButtonUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$ButtonUp;
  return renderTemplate`${maybeRenderHead()}<div id="button-up" class="fixed bottom-2 right-2 opacity-0 transition-opacity"> <button id="scroll-to-top" aria-label="Volver al inicio de la página" class="group flex size-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-black/10 text-primary backdrop-blur hover:scale-105 hover:border-primary motion-safe:transition"> <svg aria-label="Subir al inicio de la página" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6 -rotate-45 group-hover:-rotate-90 group-hover:text-primary motion-safe:transition" width="20px"> <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path> </svg> </button> </div> `;
}, "/Users/diego.ramos/veracines-web/src/components/ButtonUp.astro", void 0);

const $$Astro$e = createAstro("https://www.veracines.es");
const $$DrawnXLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$DrawnXLogo;
  return renderTemplate`${maybeRenderHead()}<img src="/img/logo.png" class="w-16">`;
}, "/Users/diego.ramos/veracines-web/src/components/DrawnXLogo.astro", void 0);

const $$Astro$d = createAstro("https://www.veracines.es");
const $$Typography = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
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
    neutral: "text-neutral-300"
  };
  const classes = [
    variantClasses[variant],
    colorClasses[color],
    className
  ];
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": classes, ...props, "tabindex": "0" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/diego.ramos/veracines-web/src/components/Typography.astro", void 0);

const $$Astro$c = createAstro("https://www.veracines.es");
const $$FooterContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$FooterContent;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4 text-center md:flex-row lg:gap-6"> ${renderComponent($$result, "Typography", $$Typography, { "as": "span", "variant": "body", "color": "primary", "class:list": "text-center" }, { "default": ($$result2) => renderTemplate`
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Veracines <span aria-hidden="true" class="hidden md:inline">|</span><br aria-hidden="true" class="block md:hidden"> Todos los derechos reservados.
` })} </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/FooterContent.astro", void 0);

const MOBILE_MENU_CONTENT_ID = "menuMobileContent";

const $$Astro$b = createAstro("https://www.veracines.es");
const $$HamburgerButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
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

const $$Astro$a = createAstro("https://www.veracines.es");
const $$Instagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${maybeRenderHead()}<svg width="48" height="48" fill="none" viewBox="0 0 48 48"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de Instagram"> <path fill="currentColor" d="M24.016 9.242c4.8 0 5.392.03 7.262.093 1.745.094 2.712.374 3.335.623.842.312 1.434.717 2.057 1.34.623.624 1.029 1.216 1.34 2.058.25.623.53 1.59.624 3.335.093 1.901.093 2.462.093 7.262 0 4.8-.03 5.393-.093 7.263-.094 1.745-.374 2.711-.624 3.335-.311.841-.716 1.433-1.34 2.057-.623.623-1.215 1.028-2.057 1.34-.623.25-1.59.53-3.335.623-1.901.094-2.462.094-7.262.094-4.8 0-5.393-.031-7.263-.094-1.745-.093-2.711-.374-3.335-.623-.841-.312-1.434-.717-2.057-1.34-.623-.624-1.029-1.216-1.34-2.057-.25-.624-.53-1.59-.624-3.335-.093-1.902-.093-2.463-.093-7.263s.031-5.392.093-7.262c.094-1.745.374-2.712.624-3.335.311-.842.717-1.434 1.34-2.057.623-.624 1.216-1.029 2.057-1.34.624-.25 1.59-.53 3.335-.624 1.87-.062 2.463-.093 7.263-.093Zm0-3.242c-4.894 0-5.517.031-7.419.094-1.9.093-3.21.405-4.363.841a8.936 8.936 0 0 0-3.18 2.088 8.629 8.629 0 0 0-2.119 3.18c-.436 1.153-.748 2.462-.841 4.363C6.03 18.5 6 19.122 6 24.016c0 4.893.031 5.517.094 7.418.093 1.901.405 3.21.841 4.363a8.936 8.936 0 0 0 2.088 3.18 8.936 8.936 0 0 0 3.18 2.088c1.153.436 2.462.748 4.363.842C18.5 42 19.091 42 23.984 42c4.894 0 5.517-.031 7.419-.093 1.9-.094 3.21-.406 4.363-.842a8.936 8.936 0 0 0 3.18-2.088 8.938 8.938 0 0 0 2.088-3.18c.436-1.153.748-2.462.841-4.363.094-1.933.094-2.525.094-7.418 0-4.894-.031-5.517-.094-7.419-.093-1.9-.405-3.21-.841-4.363a8.937 8.937 0 0 0-2.088-3.18 8.936 8.936 0 0 0-3.18-2.088c-1.153-.436-2.462-.748-4.363-.841C29.5 6.03 28.909 6 24.016 6Z"></path><path fill="currentColor" d="M24.015 14.758a9.258 9.258 0 0 0 0 18.515 9.258 9.258 0 0 0 0-18.515Zm0 15.242A6.02 6.02 0 0 1 18 23.984a6.02 6.02 0 0 1 6.015-6.015c3.335 0 5.985 2.711 5.985 6.046A5.986 5.986 0 0 1 24.015 30ZM33.615 16.535a2.15 2.15 0 1 0 0-4.301 2.15 2.15 0 0 0 0 4.3Z"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/icons/instagram.astro", void 0);

const $$Astro$9 = createAstro("https://www.veracines.es");
const $$SocialButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$SocialButtons;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`${Astro2.props.class}`, "class:list")}> <ul class="flex flex-row items-center gap-x-6" aria-label="redes sociales y botón para alternar tema"> <li> <a target="_blank" rel="noopener" aria-label="Instagram de Veracines, se abrirá en una nueva pestaña" href="https://www.instagram.com/veracines.sl" class="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100"> ${renderComponent($$result, "InstagramIcon", $$Instagram, { "class": "text-primary transition-colors duration-300 hover:text-primary motion-reduce:duration-0" })} </a> </li> </ul> </nav>`;
}, "/Users/diego.ramos/veracines-web/src/components/SocialButtons.astro", void 0);

const $$Astro$8 = createAstro("https://www.veracines.es");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
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

const $$Astro$7 = createAstro("https://www.veracines.es");
const $$KonamiCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$KonamiCode;
  return renderTemplate``;
}, "/Users/diego.ramos/veracines-web/src/components/KonamiCode.astro", void 0);

const jost = "/_astro/jost-latin-wght-normal.CfFW3YMY.woff2";

const atomic = "/fonts/atomic.woff2";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://www.veracines.es");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, preload, canonical, image = "/img/logo.jpg" } = Astro2.props;
  const canonicalURL = canonical ? `https://${canonical}` : `https://${Astro2.url.pathname}`;
  return renderTemplate(_a || (_a = __template(["<title>", '</title><meta charset="UTF-8"><meta name="description"', '><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin>', '<link rel="canonical"', '><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#d5ff00"><meta name="keywords" content="cine de verano, estreno, cine, peliculas, verano, vera, garrucha, almer\xEDa"><meta name="og:image"', '><meta name="og:title"', '><meta name="og:description"', '><meta name="og:url"', '><meta name="og:site_name" content="La Velada 4"><meta name="og:type" content="website"><meta name="og:locale" content="es_ES"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><link rel="icon" type="image/png" href="/img/logo.png"><meta name="msapplication-config" content="/browserconfig.xml"><script src="/registerSW.js"><\/script><link rel="manifest" href="/manifest.webmanifest">'])), title, addAttribute(description, "content"), addAttribute(atomic, "href"), addAttribute(jost, "href"), preload?.map(({ href, as, type, rel = "preload", crossorigin }) => renderTemplate`<link${addAttribute(rel, "rel")}${addAttribute(href, "href")}${addAttribute(as, "as")}${addAttribute(type, "type")}${addAttribute(crossorigin, "crossorigin")}>`), addAttribute(canonicalURL, "href"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"));
}, "/Users/diego.ramos/veracines-web/src/components/SEO.astro", void 0);

const $$Astro$5 = createAstro("https://www.veracines.es");
const $$Toast = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Toast;
  return renderTemplate` `;
}, "/Users/diego.ramos/veracines-web/src/components/ui/Toast.astro", void 0);

const $$Astro$4 = createAstro("https://www.veracines.es");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="relative mt-20 flex w-full flex-col place-items-center pb-20 pt-14 md:flex-row md:justify-between md:pt-16"> <hr class="absolute top-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"> ${renderComponent($$result, "FooterContent", $$FooterContent, {})} <hr aria-hidden="true" class="my-12 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:hidden"> ${renderComponent($$result, "SocialButtons", $$SocialButtons, {})} </footer>`;
}, "/Users/diego.ramos/veracines-web/src/sections/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://www.veracines.es");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, preload, canonical, image } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "preload": preload, "title": title })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="overflow-x-hidden selection:bg-primary [&_:focus-visible]:outline-none [&_:focus-visible]:ring-2 [&_:focus-visible]:ring-primary"> ${renderComponent($$result, "Header", $$Header, {})} <div class="mx-auto min-h-screen max-w-5xl px-2 pt-4 selection:bg-primary md:pt-6 lg:px-6 id=" main-content"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "KonamiCode", $$KonamiCode, {})} ${renderComponent($$result, "Toast", $$Toast, {})} </div> ${renderComponent($$result, "ButtonUp", $$ButtonUp, {})}  </body> </html>`;
}, "/Users/diego.ramos/veracines-web/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$Action = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Action;
  const { as: Tag, class: className, color, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    `inline-block skew-x-[-21deg] cursor-pointer border-2 border-${color ?? "primary"} text-center`,
    `font-semibold uppercase text-${color ?? "primary"}`,
    `px-5 py-2.5`,
    `before:absolute before:-inset-0.5 before:origin-right before:scale-x-0 before:bg-${color ?? "primary"}`,
    `hover:scale-110 hover:before:bg-${color ?? "primary"} hover:text-white hover:before:origin-left hover:before:scale-x-100`,
    `aria-disabled:pointer-events-none aria-disabled:border-[#666] aria-disabled:bg-[#666] aria-disabled:text-[#111]`,
    `ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 motion-safe:hover:before:ease-out`,
    className
  ], ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span${addAttribute(`inline-block skew-x-[21deg] text-xs`, "class")}>${renderSlot($$result2, $$slots["default"])}</span> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/components/Action.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$Error = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Error;
  const { error, message, contextMessage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="m-auto flex w-full flex-wrap place-items-center items-center justify-center text-primary"> <div class="m-5 mt-16 text-center"> ${renderComponent($$result, "Typography", $$Typography, { "as": "h1", "variant": "h3", "color": "primary", "class:list": "mb-10 font-bold" }, { "default": ($$result2) => renderTemplate`
error ${error}` })} ${renderComponent($$result, "Typography", $$Typography, { "as": "h2", "variant": "h2", "color": "neutral", "class:list": "text-primary" }, { "default": ($$result2) => renderTemplate` <p>${message}</p> ` })} <p class="mt-5 max-w-80 text-xl">${contextMessage}</p> ${renderComponent($$result, "Action", $$Action, { "class": "mt-7 text-center", "href": "/", "aria-label": "Volver a la p\xE1gina principal", "as": "a" }, { "default": ($$result2) => renderTemplate`
Ir al inicio
` })} </div> </section>`;
}, "/Users/diego.ramos/veracines-web/src/sections/Error.astro", void 0);

const Metadata = {
  home: {
    title: "Cines de Verano en Vera y Garrucha - Veracines",
    description: "Cine de verano en Vera y Garrucha. Descubre las películas de estreno en Vera y Garrucha. Disvruta la experiencia del cine de verano en Veracines.",
    canonical: "https://www.veracines.es"
  },
  "cartelera-vera": {
    title: "Cartelera Cine Terraza de Verano de Vera - Veracines",
    description: "Cartelera del cine de verano en Vera. Descubre las películas de estreno en Vera. Disvruta la experiencia del cine de verano en Veracines.",
    canonical: "https://www.veracines.es/cartelera-vera/"
  },
  "cartelera-garrucha": {
    title: "Cartelera Cine Tenis de Garrucha - Veracines",
    description: "Cartelera de Cine Tenis de Garrucha. Descubre las películas de estreno en Garrucha. Disvruta la experiencia del cine de verano en Veracines.",
    canonical: "https://www.veracines.es/cartelera-garrucha/"
  },
  "cartelera-regio": {
    title: "Cartelera Cine Regio de Vera - Veracines",
    description: "Cartelera del cine Regio de invierno en Vera. Descubre las películas de estreno en Vera. Disvruta la experiencia del cine Regio en Veracines.",
    canonical: "https://www.veracines.es/cartelera-regio/"
  }
};

const $$Astro = createAstro("https://www.veracines.es");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata.home.description, "title": Metadata.home.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Error", $$Error, { "error": "404", "message": "P\xE1gina no encontrada", "contextMessage": "La p\xE1gina que buscas no existe o ha sido movida." })} </main> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/404.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, Metadata as M, _404 as _, $$Action as a };
