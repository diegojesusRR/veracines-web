/* empty css                                     */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, f as renderComponent, g as renderSlot, F as Fragment, h as renderHead } from '../astro_BvmcH-Yh.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                          */

const $$Astro$h = createAstro("https://www.veracines.es");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/diego.ramos/veracines-web/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$g = createAstro("https://www.veracines.es");
const $$ButtonUp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$ButtonUp;
  return renderTemplate`${maybeRenderHead()}<div id="button-up" class="fixed bottom-2 right-2 opacity-0 transition-opacity"> <button id="scroll-to-top" aria-label="Volver al inicio de la página" class="group flex size-12 cursor-default items-center justify-center rounded-lg border-2 border-primary bg-black/10 text-primary backdrop-blur hover:scale-105 hover:border-accent motion-safe:transition"> <svg aria-label="Subir al inicio de la página" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-6 w-6 -rotate-45 group-hover:-rotate-90 group-hover:text-accent motion-safe:transition" width="20px"> <path d="M14 5l7 7m0 0l-7 7m7-7H3" stroke-linejoin="round" stroke-linecap="round"></path> </svg> </button> </div> `;
}, "/Users/diego.ramos/veracines-web/src/components/ButtonUp.astro", void 0);

const $$Astro$f = createAstro("https://www.veracines.es");
const $$DrawnXLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$DrawnXLogo;
  return renderTemplate`${maybeRenderHead()}<img src="/img/logo.png" class="w-16">`;
}, "/Users/diego.ramos/veracines-web/src/components/DrawnXLogo.astro", void 0);

const $$Astro$e = createAstro("https://www.veracines.es");
const $$Typography = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
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
    primary: "text-accent",
    neutral: "text-neutral-300"
  };
  const classes = [
    variantClasses[variant],
    colorClasses[color],
    className
  ];
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": classes, ...props, "tabindex": "0" }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/diego.ramos/veracines-web/src/components/Typography.astro", void 0);

const $$Astro$d = createAstro("https://www.veracines.es");
const $$FooterContent = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$FooterContent;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4 text-center md:flex-row lg:gap-6"> ${renderComponent($$result, "Typography", $$Typography, { "as": "span", "variant": "body", "color": "primary", "class:list": "text-center" }, { "default": ($$result2) => renderTemplate`
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Veracines <span aria-hidden="true" class="hidden md:inline">|</span><br aria-hidden="true" class="block md:hidden"> Todos los derechos reservados.
` })} </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/FooterContent.astro", void 0);

const MOBILE_MENU_CONTENT_ID = "menuMobileContent";

const $$Astro$c = createAstro("https://www.veracines.es");
const $$HamburgerButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
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

const $$Astro$b = createAstro("https://www.veracines.es");
const $$Instagram = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Instagram;
  return renderTemplate`${maybeRenderHead()}<svg width="48" height="48" fill="none" viewBox="0 0 48 48"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de Instagram"> <path fill="currentColor" d="M24.016 9.242c4.8 0 5.392.03 7.262.093 1.745.094 2.712.374 3.335.623.842.312 1.434.717 2.057 1.34.623.624 1.029 1.216 1.34 2.058.25.623.53 1.59.624 3.335.093 1.901.093 2.462.093 7.262 0 4.8-.03 5.393-.093 7.263-.094 1.745-.374 2.711-.624 3.335-.311.841-.716 1.433-1.34 2.057-.623.623-1.215 1.028-2.057 1.34-.623.25-1.59.53-3.335.623-1.901.094-2.462.094-7.262.094-4.8 0-5.393-.031-7.263-.094-1.745-.093-2.711-.374-3.335-.623-.841-.312-1.434-.717-2.057-1.34-.623-.624-1.029-1.216-1.34-2.057-.25-.624-.53-1.59-.624-3.335-.093-1.902-.093-2.463-.093-7.263s.031-5.392.093-7.262c.094-1.745.374-2.712.624-3.335.311-.842.717-1.434 1.34-2.057.623-.624 1.216-1.029 2.057-1.34.624-.25 1.59-.53 3.335-.624 1.87-.062 2.463-.093 7.263-.093Zm0-3.242c-4.894 0-5.517.031-7.419.094-1.9.093-3.21.405-4.363.841a8.936 8.936 0 0 0-3.18 2.088 8.629 8.629 0 0 0-2.119 3.18c-.436 1.153-.748 2.462-.841 4.363C6.03 18.5 6 19.122 6 24.016c0 4.893.031 5.517.094 7.418.093 1.901.405 3.21.841 4.363a8.936 8.936 0 0 0 2.088 3.18 8.936 8.936 0 0 0 3.18 2.088c1.153.436 2.462.748 4.363.842C18.5 42 19.091 42 23.984 42c4.894 0 5.517-.031 7.419-.093 1.9-.094 3.21-.406 4.363-.842a8.936 8.936 0 0 0 3.18-2.088 8.938 8.938 0 0 0 2.088-3.18c.436-1.153.748-2.462.841-4.363.094-1.933.094-2.525.094-7.418 0-4.894-.031-5.517-.094-7.419-.093-1.9-.405-3.21-.841-4.363a8.937 8.937 0 0 0-2.088-3.18 8.936 8.936 0 0 0-3.18-2.088c-1.153-.436-2.462-.748-4.363-.841C29.5 6.03 28.909 6 24.016 6Z"></path><path fill="currentColor" d="M24.015 14.758a9.258 9.258 0 0 0 0 18.515 9.258 9.258 0 0 0 0-18.515Zm0 15.242A6.02 6.02 0 0 1 18 23.984a6.02 6.02 0 0 1 6.015-6.015c3.335 0 5.985 2.711 5.985 6.046A5.986 5.986 0 0 1 24.015 30ZM33.615 16.535a2.15 2.15 0 1 0 0-4.301 2.15 2.15 0 0 0 0 4.3Z"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/icons/instagram.astro", void 0);

const $$Astro$a = createAstro("https://www.veracines.es");
const $$SocialButtons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$SocialButtons;
  return renderTemplate`${maybeRenderHead()}<nav${addAttribute(`${Astro2.props.class}`, "class:list")}> <ul class="flex flex-row items-center gap-x-6" aria-label="redes sociales y botón para alternar tema"> <li> <a target="_blank" rel="noopener" aria-label="Instagram de Veracines, se abrirá en una nueva pestaña" href="https://www.instagram.com/veracines.sl" class="inline-block any-hover:scale-125 any-hover:opacity-70 motion-safe:transition motion-reduce:any-hover:scale-100"> ${renderComponent($$result, "InstagramIcon", $$Instagram, { "class": "text-primary transition-colors duration-300 hover:text-accent motion-reduce:duration-0" })} </a> </li> </ul> </nav>`;
}, "/Users/diego.ramos/veracines-web/src/components/SocialButtons.astro", void 0);

const $$Astro$9 = createAstro("https://www.veracines.es");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Header;
  const pages = [
    { name: "P\xE1gina Principal", href: "/" },
    { name: "Cine Regio", href: "/cartelera-regio", disabled: true, soonDate: "En construcci\xF3n" },
    { name: "Terraza de verano de Vera", href: "/cartelera-vera", disabled: true, soonDate: "Proximamente" },
    { name: "Cine Tenis de Garrucha", href: "/cartelera-garrucha", disabled: true, soonDate: "Proximamente" }
  ].map((page) => ({
    ...page,
    active: Astro2.url.pathname === page.href
  }));
  return renderTemplate`${maybeRenderHead()}<header class="mb-10 h-16 max-w-[100vw] lg:h-24" data-astro-cid-3ef6ksr2> <nav class="group flex h-full w-full items-center justify-between px-10 lg:justify-center" data-astro-cid-3ef6ksr2> ${pages.map(({ disabled, name, href, active, soonDate }, key) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(href, "href")}${addAttribute([
    "nav-item relative hidden h-full select-none flex-col items-center justify-center gap-1 text-center text-xl uppercase  lg:flex lg:px-7 xl:px-10 text-nowrap",
    { "pointer-events-none": disabled },
    { "current-page text-accent": active },
    { "text-primary": !active }
  ], "class:list")}${addAttribute(`nav-link-${key}`, "id")} data-astro-cid-3ef6ksr2> <span class="z-10" data-astro-cid-3ef6ksr2>${name}</span> ${disabled ? renderTemplate`<span class="absolute mt-10 -skew-x-6 text-xs text-accent" data-astro-cid-3ef6ksr2>${soonDate}</span>` : renderTemplate`<div class="background absolute -z-10 h-full w-full" data-astro-cid-3ef6ksr2></div>`} </a> ${key === 1 && renderTemplate`<div${addAttribute("hidden w-64 lg:block", "class:list")} data-astro-cid-3ef6ksr2></div>`}` })}`)} <a href="/" class="block lg:hidden" data-astro-cid-3ef6ksr2>${renderComponent($$result, "DrawnXLogo", $$DrawnXLogo, { "class:list": "w-10", "data-astro-cid-3ef6ksr2": true })}</a> ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, { "class:list": "block lg:hidden", "id": "menuButton", "data-astro-cid-3ef6ksr2": true })} <div class="fixed inset-0 z-[888] flex w-screen flex-col items-center overflow-x-auto bg-white px-10 lg:hidden"${addAttribute(MOBILE_MENU_CONTENT_ID, "id")} data-astro-cid-3ef6ksr2> <aside class="flex min-h-16 w-full items-center justify-between" data-astro-cid-3ef6ksr2> <span class="text-xl font-semibold uppercase text-primary" data-astro-cid-3ef6ksr2>Menú</span> ${renderComponent($$result, "HamburgerButton", $$HamburgerButton, { "id": "innerMenuButton", "data-astro-cid-3ef6ksr2": true })} </aside> <div class="flex min-h-2 w-full items-center" data-astro-cid-3ef6ksr2> <hr class="h-[2px] w-full border-t-0" style="background:linear-gradient(to right, transparent 0%, white 50%, transparent 100%)" data-astro-cid-3ef6ksr2> </div> <nav class="flex w-full flex-col items-center gap-5" data-astro-cid-3ef6ksr2> <hr class="h-[2px] w-full border-t-0" style="background:linear-gradient(to right, transparent 0%, white 50%, transparent 100%)" data-astro-cid-3ef6ksr2> ${pages.map(({ disabled, name, href, active, soonDate }, key) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate` <a${addAttribute(href, "href")}${addAttribute([
    "relative flex flex-col items-center justify-center gap-2 text-xl capitalize",
    { "pointer-events-none": disabled },
    { "current-page-mob": active }
  ], "class:list")}${addAttribute(`navmob-link-${key}`, "id")} data-astro-cid-3ef6ksr2> <span class="z-10 uppercase text-primary" data-astro-cid-3ef6ksr2>${name}</span> ${disabled && renderTemplate`<span class="text-accent" data-astro-cid-3ef6ksr2>${soonDate}</span>`} </a> <hr class="h-[2px] w-full border-t-0" style="background:linear-gradient(to right, transparent 0%, white 50%, transparent 100%)" data-astro-cid-3ef6ksr2> ` })}`)} <nav class="my-4 flex flex-col gap-10" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "FooterContent", $$FooterContent, { "data-astro-cid-3ef6ksr2": true })} ${renderComponent($$result, "SocialButtons", $$SocialButtons, { "class": "flex items-center justify-center", "data-astro-cid-3ef6ksr2": true })} </nav> </nav> </div> </nav> <div class="relative flex h-2 w-full flex-col items-center" data-astro-cid-3ef6ksr2> <div class="gridBottomBarContainer absolute grid w-full items-center justify-between" data-astro-cid-3ef6ksr2> <div class="h-[2px] w-full rounded-l-[30%] border-t-0" style="background:linear-gradient(to right, transparent 3%, white 35%, white 100%)" data-astro-cid-3ef6ksr2></div> <div class="focus-within-ring -ml-[8px] -mr-[4px]" data-astro-cid-3ef6ksr2></div> <div class="h-[2px] w-full rounded-r-[30%] border-t-0 bg-white" style="background:linear-gradient(to left, transparent 3%, white 35%, white 100%);" data-astro-cid-3ef6ksr2></div> </div> </div> </header>  `;
}, "/Users/diego.ramos/veracines-web/src/components/Header.astro", void 0);

const $$Astro$8 = createAstro("https://www.veracines.es");
const $$KonamiCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$KonamiCode;
  return renderTemplate``;
}, "/Users/diego.ramos/veracines-web/src/components/KonamiCode.astro", void 0);

const jost = "/_astro/jost-latin-wght-normal.CfFW3YMY.woff2";

const atomic = "/fonts/atomic.woff2";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$7 = createAstro("https://www.veracines.es");
const $$SEO = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SEO;
  const { title, description, preload, canonical, image = "/img/logo.jpg" } = Astro2.props;
  const canonicalURL = canonical ? `https://${canonical}` : `https://${Astro2.url.pathname}`;
  return renderTemplate(_a || (_a = __template(["<title>", '</title><meta charset="UTF-8"><meta name="description"', '><link rel="preconnect" href="https://cdn.lavelada.dev"><link rel="preload"', ' as="font" type="font/woff2" crossorigin><link rel="preload"', ' as="font" type="font/woff2" crossorigin>', '<link rel="canonical"', '><meta name="viewport" content="width=device-width"><meta name="theme-color" content="#d5ff00"><meta name="keywords" content="cine de verano, estreno, cine, peliculas, verano, vera, garrucha, almer\xEDa"><meta name="og:image"', '><meta name="og:title"', '><meta name="og:description"', '><meta name="og:url"', '><meta name="og:site_name" content="La Velada 4"><meta name="og:type" content="website"><meta name="og:locale" content="es_ES"><meta name="robots" content="index, follow"><meta name="googlebot" content="index, follow"><link rel="icon" type="image/png" href="/img/logo.png"><meta name="msapplication-config" content="/browserconfig.xml"><script src="/registerSW.js"><\/script><link rel="manifest" href="/manifest.webmanifest">'])), title, addAttribute(description, "content"), addAttribute(atomic, "href"), addAttribute(jost, "href"), preload?.map(({ href, as, type, rel = "preload", crossorigin }) => renderTemplate`<link${addAttribute(rel, "rel")}${addAttribute(href, "href")}${addAttribute(as, "as")}${addAttribute(type, "type")}${addAttribute(crossorigin, "crossorigin")}>`), addAttribute(canonicalURL, "href"), addAttribute(new URL(image, Astro2.url), "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(Astro2.url, "content"));
}, "/Users/diego.ramos/veracines-web/src/components/SEO.astro", void 0);

const $$Astro$6 = createAstro("https://www.veracines.es");
const $$Toast = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Toast;
  return renderTemplate` `;
}, "/Users/diego.ramos/veracines-web/src/components/ui/Toast.astro", void 0);

const $$Astro$5 = createAstro("https://www.veracines.es");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="relative mt-20 flex w-full flex-col place-items-center pb-20 pt-14 md:flex-row md:justify-between md:pt-16"> <hr class="absolute top-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9"> ${renderComponent($$result, "FooterContent", $$FooterContent, {})} <hr aria-hidden="true" class="my-12 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:hidden"> ${renderComponent($$result, "SocialButtons", $$SocialButtons, {})} </footer>`;
}, "/Users/diego.ramos/veracines-web/src/sections/Footer.astro", void 0);

const $$Astro$4 = createAstro("https://www.veracines.es");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, preload, canonical, image } = Astro2.props;
  return renderTemplate`<html lang="es"> <head>${renderComponent($$result, "SEO", $$SEO, { "canonical": canonical, "description": description, "image": image, "preload": preload, "title": title })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="overflow-x-hidden selection:bg-primary selection:text-secondary [&_:focus-visible]:outline-none [&_:focus-visible]:ring-2 [&_:focus-visible]:ring-primary"> ${renderComponent($$result, "Header", $$Header, {})} <div class="mx-auto min-h-screen max-w-6xl px-2 pt-16 selection:bg-primary selection:text-secondary md:pt-20 lg:px-10" id="main-content"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "KonamiCode", $$KonamiCode, {})} ${renderComponent($$result, "Toast", $$Toast, {})} <!-----------------------------
     \`    \`\`               \`
      \`\`  _ \`      \`       \`\`
     \`   |_| \`  \`\` \`\`    \`  \`
    \`\`  -___-_\` \`   \` --------------
  \`\`   /      )      | This is fine |\`
 \`____/| (0) (0)_()  |/-------------  \`
/|   | |   ^____)      \`\`      \`\`
||   |_|    \\_//     Uɔ\`\`\`\`   \`\` \`\`
||    || |    |    ========\`  \`\`  \`\`
||    || |    |      ||     \`\`   \`
||     \\\\_\\   |\\     ||   \`\`\`    \`
=========||====||    ||  \`\`       \`
  || ||   \\Ɔ || \\Ɔ   ||   \`\`    \`\`
  || ||      ||      ||  \`     \`\`
---------------------------------> </div> ${renderComponent($$result, "ButtonUp", $$ButtonUp, {})}  </body> </html>`;
}, "/Users/diego.ramos/veracines-web/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro("https://www.veracines.es");
const $$Action = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Action;
  const { as: Tag, class: className, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    "inline-block skew-x-[-21deg] cursor-pointer border-2 border-primary text-center",
    "font-semibold uppercase",
    "px-5 py-2.5",
    "before:absolute before:-inset-0.5 before:origin-right before:scale-x-0 before:bg-primary",
    "hover:scale-110 hover:text-white hover:before:origin-left hover:before:scale-x-100",
    "aria-disabled:pointer-events-none aria-disabled:border-[#666] aria-disabled:bg-[#666] aria-disabled:text-[#111]",
    "ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 motion-safe:hover:before:ease-out",
    className
  ], ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="inline-block skew-x-[21deg]">${renderSlot($$result2, $$slots["default"])}</span> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/components/Action.astro", void 0);

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$HeroLogo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HeroLogo;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(Astro2.props.class, "class:list")} width="800" height="679" fill="none" viewBox="0 0 800 679" role="img" aria-label="Logotipo de La Velada 4"> <symbol${addAttribute(id, "id")}> <path fill="currentColor" stroke="currentColor" d="M363.933 2.427h13.752c-.194 22.247-.391 44.491-.585 66.738 3.93-.33 7.865-.584 11.804-.759-.015 3.17-.031 6.337-.044 9.507a260.26 260.26 0 0 0-25.908 2.608zm27.126 75.386c5.26-25.343 10.382-50.319 15.354-75.383h14.68c5.195 25.3 10.53 50.99 15.956 77.529a262.327 262.327 0 0 0-13.035-1.44 19513.85 19513.85 0 0 1-10.089-58.489 7672.546 7672.546 0 0 1-9.582 57.565"></path> <path fill="currentColor" stroke="currentColor" d="M188.451 584.028V415.951c9.227-.036 18.453-.08 27.68-.116 9.563-.035 17.024 1.67 22.347 4.955 5.332 3.286 9.094 8.276 11.303 14.98 2.2 6.714 3.247 15.203 3.14 25.583-.177 17.875-.354 35.741-.541 53.617-.106 10.629-1.33 19.686-3.646 27.34-2.324 7.646-6.104 13.951-11.329 19.012-5.225 5.062-12.34 9.111-21.301 12.237a557 557 0 0 0-27.662 10.46zm20.831-28.362c2.12-.675 4.249-1.332 6.379-1.98 4.826-1.475 8.295-3.632 10.406-6.501 2.111-2.868 3.416-6.526 3.93-10.993.506-4.466.79-9.839.843-16.143l.452-58.554c.045-6.171-.248-11.117-.896-14.856-.647-3.738-2.022-6.438-4.125-8.116-2.111-1.669-5.527-2.424-10.247-2.193-2.067.098-4.143.195-6.21.302-.177 39.675-.346 79.359-.523 119.034zm49.779 4.848c.505-48.271 1.011-96.55 1.525-144.821 16.431-.044 32.861-.089 49.291-.115l-.186 17.262c-9.29.213-18.576.462-27.857.746l-.452 40.199c7.301-.675 14.611-1.288 21.93-1.838l-.186 17.227a950.984 950.984 0 0 0-21.948 2.388c-.178 15.416-.346 30.822-.515 46.238a634.993 634.993 0 0 1 28.256-4.751c-.062 5.639-.115 11.277-.177 16.925a557 557 0 0 0-49.681 10.558zm56.956-11.704c.452-44.416.905-88.824 1.348-133.241 7.151-.009 14.31-.018 21.461-.036-.32 37.997-.63 75.994-.95 113.982 9.59-.944 19.2-1.667 28.824-2.167l-.08 16.117a558 558 0 0 0-50.612 5.345zm102.76-6.02a546.992 546.992 0 0 0-20.538-.311c7.994-42.348 15.836-84.5 23.528-126.972 7.638 0 15.268 0 22.906.017 8.109 42.943 16.342 86.525 24.672 131.262a568.993 568.993 0 0 0-20.156-2.149c-5.287-33.441-10.513-66.474-15.676-99.259a17809.8 17809.8 0 0 1-14.727 97.412zm57.985 4.973c-.426-44.071-.852-88.132-1.269-132.203 4.977 0 9.954.018 14.931.027 9.794 25.582 19.633 52.071 29.454 79.9-.302-26.613-.594-53.225-.896-79.838 5.9.018 11.79.026 17.69.044.516 48.04 1.028 96.08 1.535 144.12a564.02 564.02 0 0 0-14.168-3.419c-9.883-30.209-19.802-58.873-29.694-86.454.293 26.897.577 53.794.87 80.691a561.983 561.983 0 0 0-18.453-2.868m101.9 26.124c-8.127-2.779-14.665-6.837-19.562-12.192-4.906-5.354-8.455-11.846-10.638-19.598-2.183-7.752-3.326-16.481-3.433-26.337l-.559-54.62c-.106-9.848.879-18.212 2.928-25.201 2.049-6.988 5.527-12.343 10.415-16.117 4.888-3.765 11.498-5.727 19.811-5.736 8.507 0 15.206 2.007 20.094 6.234 4.879 4.217 8.419 10.424 10.584 18.585 2.173 8.152 3.247 17.999 3.247 29.339v63.082c0 11.206-1.065 20.619-3.159 28.06-2.093 7.451-5.5 12.459-10.211 15.061-4.72 2.619-11.205 2.291-19.517-.56m-.134-20.983c3.505 1.039 6.078.799 7.719-.79 1.641-1.59 2.741-4.138 3.291-7.655.55-3.516.816-7.459.799-11.81-.107-24.57-.222-49.141-.329-73.702-.017-4.476-.328-8.525-.922-12.121-.595-3.595-1.74-6.448-3.434-8.56-1.694-2.114-4.329-3.233-7.895-3.384-3.38-.15-5.918.738-7.639 2.611-1.721 1.873-2.857 4.484-3.407 7.832-.55 3.348-.807 7.149-.771 11.402.186 23.354.381 46.708.567 70.07.036 4.131.329 8.018.879 11.66.55 3.64 1.694 6.704 3.424 9.19 1.73 2.493 4.303 4.246 7.718 5.257M48.803 425.212C33.163 323.299 17.069 214.752 0 98.009h41.156c10.734 78.16 21.14 152.91 31.37 224.713 11.01-77.797 22.276-152.565 33.668-224.713h42.095c-18.532 97.394-36.977 199.947-54.933 309.24a887.007 887.007 0 0 0-44.553 17.954zm102.583-37.259 4.418-289.944h106.823l-.452 34.08c-20.157.427-40.304.942-60.425 1.564-.417 26.621-.825 53.234-1.242 79.856 15.862-1.563 31.76-2.94 47.685-4.129-.16 11.348-.319 22.687-.47 34.036a1558.978 1558.978 0 0 0-47.756 5.39c-.479 30.618-.949 61.235-1.429 91.844a989.994 989.994 0 0 1 61.676-10.7c-.142 11.135-.293 22.279-.435 33.414a881.001 881.001 0 0 0-108.384 24.589zm116.706-25.894 3.327-264.05h46.496c-.657 75.22-1.322 150.433-1.978 225.654a1014.998 1014.998 0 0 1 39.913-2.566c-.053 10.717-.106 21.427-.151 32.144a880.001 880.001 0 0 0-87.598 8.818zm139.959-9.892a882.002 882.002 0 0 0-44.917.737c17.787-85.69 35.105-170.137 51.917-254.886h49.636c17.566 85.548 35.602 172.41 53.949 262.141a886.994 886.994 0 0 0-44.074-4.866c-11.587-66.688-22.969-132.452-34.112-197.763-10.566 65.072-21.363 129.788-32.399 194.637m118.454 9.093-3.22-263.251h49.849c20.733 0 36.968 3.037 48.688 9.457 11.728 6.393 20.147 16.41 25.266 30.014 5.119 13.595 7.834 30.91 8.145 51.636l1.596 107.01c.32 21.223-1.872 38.326-6.565 51.059-4.693 12.761-12.677 20.859-24.015 24.562-11.338 3.73-27.023 2.975-47.162-1.225a885 885 0 0 0-52.6-9.271zm46.78-26.329c1.34.24 2.679.48 4.028.72 10.797 1.953 18.471 1.482 23.048-1.705 4.569-3.179 7.32-8.64 8.251-16.366.932-7.734 1.304-17.369 1.127-28.886-.559-35.697-1.118-71.385-1.668-107.082-.178-11.286-1.056-20.432-2.626-27.394-1.579-6.97-4.702-12.139-9.36-15.495-4.666-3.357-12.136-5.16-22.409-5.426-1.118-.026-2.236-.062-3.354-.088l2.981 201.731zm122.881 68.499a879 879 0 0 0-43.196-14.19c15.428-92.012 30.803-188.572 46.496-291.24h49.637A10360.005 10360.005 0 0 1 800 448.238a874.997 874.997 0 0 0-40.952-19.571 14400.99 14400.99 0 0 0-33.712-256.6c-9.901 80.131-19.58 157.092-29.179 231.363zm-178.648 2.46c-2.608 0-4.933-.862-6.955-2.593a976.906 976.906 0 0 1-5.802-4.982c-1.837-1.589-3.771-2.388-5.802-2.388-2.032 0-3.265.728-3.984 2.175-.727 1.457-1.091 3.561-1.091 6.332h-10.149c0-4.982.364-9.44 1.091-13.382.728-3.943 2.005-7.06 3.841-9.342 1.836-2.282 4.303-3.428 7.391-3.428 2.413 0 4.586.8 6.52 2.389a669.125 669.125 0 0 1 5.722 4.769c1.881 1.589 3.842 2.388 5.873 2.388 1.642 0 2.831-.692 3.549-2.078.728-1.385 1.091-3.454 1.091-6.224h9.573c0 4.289-.24 8.435-.728 12.449-.488 4.014-1.526 7.335-3.114 9.963-1.595 2.629-3.94 3.943-7.035 3.943zM406.29 587.948l7.193 3.538c2.103 1.03 3.312 3.31 3.032 5.632l-4.599 36.65-11.018-41.99-17.591-2.395 1.538 4.966-26.617 7.953 6.339 3.365c2.551 1.361 4.158 4.025 4.135 6.902l-.11 45.003a23.68 23.68 0 0 1-6.672 16.382l-2.912 3.016 31.365-9.472-2.083.124c-2.109.151-3.894-1.524-3.912-3.638l-.486-55.658a3.19 3.19 0 0 1 1.797-2.917l2.244-1.086 18.129 58.541 21.824-6.505c-1.812-.138-3.067-.925-3.889-1.755-.966-.979-1.382-2.526-1.148-3.889l10.076-57.079a26.1 26.1 0 0 1 3.958-9.916l4.119-6.233-34.703 10.452z"></path> </symbol> ${Astro2.props.noEffect && renderTemplate`<use href="#hero-logo-header" class="text-[#f1ffaa]/70 blur-xl md:blur-md"></use>`} <use href="#hero-logo-header"${addAttribute(Astro2.props.noEffect ? "text-white" : "text-primary", "class:list")}></use> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/HeroLogo.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$Error = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Error;
  const { error, message, contextMessage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="m-auto flex w-full flex-wrap place-items-center items-center justify-center text-primary"> <a href="/"> ${renderComponent($$result, "HeroLogo", $$HeroLogo, { "class": "m-5 h-auto w-[300px] overflow-visible text-primary animate-duration-0 md:w-[500px]", "disableAnimation": true })} </a> <div class="m-5 mt-16 text-center"> ${renderComponent($$result, "Typography", $$Typography, { "as": "h1", "variant": "atomic-title", "color": "primary", "class:list": "mb-10 font-bold" }, { "default": ($$result2) => renderTemplate`
error ${error}` })} ${renderComponent($$result, "Typography", $$Typography, { "as": "h2", "variant": "h2", "color": "neutral", "class:list": "text-white" }, { "default": ($$result2) => renderTemplate` <p>${message}</p> ` })} <p class="mt-5 max-w-80 text-xl">${contextMessage}</p> ${renderComponent($$result, "Action", $$Action, { "class": "mt-7 text-center", "href": "/", "aria-label": "volver a la p\xE1gina principal", "as": "a" }, { "default": ($$result2) => renderTemplate`
Ir al inicio
` })} </div> </section>`;
}, "/Users/diego.ramos/veracines-web/src/sections/Error.astro", void 0);

const Metadata = {
  home: {
    title: "Veracines - Cines de Verano en Vera y Garrucha",
    description: "Cine de verano en Vera y Garrucha. Descubre las películas de estreno en Vera y Garrucha. Disvruta la experiencia del cine de verano en Veracines.",
    canonical: "www.veracines.es"
  },
  "cartelera-vera": {
    title: "Cartelera Veracines",
    description: "Cartelera del cine de verano en Vera. Descubre las películas de estreno en Vera. Disvruta la experiencia del cine de verano en Veracines.",
    canonical: "www.veracines.es/cartelera-vera"
  },
  "cartelera-garrucha": {
    title: "Cartelera Cines",
    description: "Cartelera de Cine Tenis de Garrucha. Descubre las películas de estreno en Garrucha. Disvruta la experiencia del cine de verano en Veracines.",
    canonical: "www.veracines.es/cartelera-cines"
  },
  "cartelera-regio": {
    title: "Cartelera Regio",
    description: "Cartelera del cine de invierno en Vera. Descubre las películas de estreno en Vera. Disvruta la experiencia del cine Regio en Veracines.",
    canonical: "www.veracines.es/cartelera-regio"
  }
};

const $$Astro = createAstro("https://www.veracines.es");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata.home.description, "title": Metadata.home.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Error", $$Error, { "error": "404", "message": "P\xE1gina no encontrada", "contextMessage": "\xA1Hola! Lo sentimos, pero no pudimos encontrar lo que buscabas. Verifica que la direcci\xF3n URL sea correcta." })} </main> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/404.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Action as $, Metadata as M, _404 as _, $$Layout as a };
