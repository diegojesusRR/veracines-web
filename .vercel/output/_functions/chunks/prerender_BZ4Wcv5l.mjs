/* empty css                        */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead, e as addAttribute, n as renderTransition, g as renderSlot, F as Fragment } from './astro_CCLsmAZA.mjs';
import 'kleur/colors';
import { $ as $$Typography, b as $$Action, B as BOXERS, a as $$Layout, c as $$Instagram } from './pages/404_B1kBpnNj.mjs';
/* empty css                        */
/* empty css                        */
import 'clsx';
import { C as COMBATS } from './pages/_combatId__DIDCq922.mjs';
import { F as FORECASTS } from './pages/get-forecast-by-combat-id_B-vwoP2L.mjs';
import { $ as $$Image } from './pages/generic_KVVjvbFm.mjs';

const $$Astro$o = createAstro("https://www.veracines.es");
const $$BoxerTitleName = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$BoxerTitleName;
  const { name } = Astro2.props;
  const splitName = name?.split(" ") ?? [];
  const lastName = splitName[splitName.length - 1];
  const firstNames = splitName.slice(0, splitName.length - 1).join(" ");
  return renderTemplate`${renderComponent($$result, "Typography", $$Typography, { "as": "h4", "variant": "boxer-title", "color": "primary", "class:list": "boxer-title -skew-y-6 text-center", "data-astro-cid-7bixuuji": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span class="flex flex-col" data-astro-cid-7bixuuji> <span class="text-4xl" data-astro-cid-7bixuuji>${firstNames?.toLocaleLowerCase()}</span> <span data-astro-cid-7bixuuji>${lastName?.toLocaleLowerCase()}</span> </span> ` })} `;
}, "/Users/diego.ramos/veracines-web/src/components/BoxerTitleName.astro", void 0);

const $$Astro$n = createAstro("https://www.veracines.es");
const $$BoxerBigImage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$BoxerBigImage;
  const { name, country, countryName, id, loading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<picture${addAttribute("boxer-photo aspect-[285/428] h-auto w-full max-w-[460px]", "class:list")} data-astro-cid-46y7hi3s${addAttribute(renderTransition($$result, "br4vf3em", "", "boxer-big-image"), "data-astro-transition-scope")}> <img decoding="async" class="aspect-[285/428] h-auto w-full object-contain"${addAttribute(`Fotograf\xEDa de ${name}`, "alt")}${addAttribute(`https://cdn.lavelada.dev/boxers/${id}-big.webp`, "src")} style="
			filter: drop-shadow(0 0 5px rgba(0, 0, 0, .5));
			mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
		"${addAttribute(loading, "loading")} data-astro-cid-46y7hi3s> </picture> <div class="absolute bottom-10 z-10 flex max-w-md flex-col items-center justify-center text-wrap md:-bottom-32" data-astro-cid-46y7hi3s${addAttribute(renderTransition($$result, "x2cdp2ce", "", "boxer-name"), "data-astro-transition-scope")}> ${renderComponent($$result, "BoxerTitleName", $$BoxerTitleName, { "name": name, "data-astro-cid-46y7hi3s": true })} <img decoding="async"${addAttribute("boxer-flag mask-flag pointer-events-none aspect-[3/2] h-auto w-28 object-contain object-center", "class:list")}${addAttribute(`Bandera de ${countryName}`, "alt")}${addAttribute(`https://cdn.lavelada.dev/flags/${country}.webp`, "src")}${addAttribute(loading, "loading")} data-astro-cid-46y7hi3s${addAttribute(renderTransition($$result, "er36ha3l", "", "boxer-flag"), "data-astro-transition-scope")}> </div> `;
}, "/Users/diego.ramos/veracines-web/src/components/BoxerBigImage.astro", "self");

const $$Astro$m = createAstro("https://www.veracines.es");
const $$ClipsModal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$ClipsModal;
  return renderTemplate`${maybeRenderHead()}<dialog class="clip-dialog items-center justify-center bg-transparent px-4 text-2xl text-white backdrop:bg-black/70 sm:px-0"> <div class="relative block w-[560px] overflow-hidden bg-transparent sm:w-[740px]"> <iframe class="yt-iframe block aspect-video h-full w-full overflow-hidden rounded bg-transparent" src="" title="Clips de la presentación de La Velada" allow="autoplay">
		</iframe> <button type="button" class="close-dialog fixed right-8 top-8 rounded bg-black/60 p-4 transition hover:scale-110 hover:bg-accent hover:text-black"> <svg class="size-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> </button> </div> </dialog> `;
}, "/Users/diego.ramos/veracines-web/src/components/ClipsModal.astro", void 0);

const $$Astro$l = createAstro("https://www.veracines.es");
const $$BoxerClips = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$BoxerClips;
  const { clips = [] } = Astro2.props;
  const hasClips = clips.length > 0;
  return renderTemplate`${hasClips && renderTemplate`${maybeRenderHead()}<section class="z-20 mt-2 md:mt-0">${renderComponent($$result, "ClipsModal", $$ClipsModal, {})}<div class="carousel flex select-none flex-row flex-nowrap transition duration-700 md:max-w-none md:!translate-x-0 md:flex-wrap md:place-content-center md:gap-4">${clips.map(({ text, url }, index) => renderTemplate`<button${addAttribute(url, "data-url")}${addAttribute(`clip-container group flex min-w-full max-w-[450px] flex-col justify-between  hover:saturate-150 md:min-w-0 ${index === 0 ? "block" : "hidden"} cursor-pointer md:block`, "class:list")} data-clip-item>${renderComponent($$result, "Typography", $$Typography, { "as": "h3", "variant": "atomic-quote", "color": "primary", "class:list": "flex flex-1 -skew-y-6 items-center justify-center text-pretty text-center transition group-hover:scale-110" }, { "default": ($$result2) => renderTemplate`
"${text.toLowerCase()}"
` })}<footer class="flex items-end justify-center pt-2 text-center">${renderComponent($$result, "Typography", $$Typography, { "as": "p", "variant": "small", "color": "neutral", "class:list": "text-center opacity-0 transition group-hover:text-white group-hover:opacity-100" }, { "default": ($$result2) => renderTemplate`
Ver clip
` })}</footer></button>`)}</div><div class="mx-auto flex max-w-60 items-center justify-between md:hidden"><button data-btn-prev class="transition hover:scale-125"><img class="size-16" src="https://cdn.lavelada.dev/ui/left-arrow.svg" alt="Izquierda"></button>${renderComponent($$result, "Typography", $$Typography, { "data-clip-index": true, "as": "p", "variant": "medium", "color": "white", "class:list": "uppercase" }, { "default": ($$result2) => renderTemplate`
Cita 1/${clips.length}` })}<button data-btn-next class="transition hover:scale-125"><img class="size-16 rotate-180" src="https://cdn.lavelada.dev/ui/left-arrow.svg" alt="Derecha"></button></div></section>`}`;
}, "/Users/diego.ramos/veracines-web/src/components/BoxerClips.astro", void 0);

const $$Astro$k = createAstro("https://www.veracines.es");
const $$BoxerDetailInfo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$BoxerDetailInfo;
  const { title, value, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-center text-white" data-astro-cid-2s3gnm6s> <div class="style flex flex-col items-start text-center" data-astro-cid-2s3gnm6s> <h4 class="font-atomic text-lg lowercase text-accent md:text-xl" data-astro-cid-2s3gnm6s>${title}</h4> <p class="text-xl font-bold md:text-4xl"${addAttribute(id, "id")} data-astro-cid-2s3gnm6s> ${value} </p> </div> </div> `;
}, "/Users/diego.ramos/veracines-web/src/components/BoxerDetailInfo.astro", void 0);

const $$Astro$j = createAstro("https://www.veracines.es");
const $$BoxerDetailInfoRival = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$BoxerDetailInfoRival;
  const { title, value, id } = Astro2.props;
  const isKingOfTheTrack = value[0].versus === "rey-de-la-pista";
  const isVersus = value[0].versus.length === 2;
  return renderTemplate`${maybeRenderHead()}<article class="flex justify-center text-white" data-astro-cid-yn5eldiq> <div${addAttribute(`flex w-full text-center flex-col items-center ${isKingOfTheTrack ? "md:-mt-10 p-5" : "pl-2.5 pr-2.5 pt-2"}`, "class:list")} data-astro-cid-yn5eldiq> <h4 data-astro-cid-yn5eldiq>${title}</h4> <div${addAttribute(isKingOfTheTrack ? ["grid grid-cols-3"] : [
    isVersus ? "grid grid-cols-2" : "flex w-full flex-row flex-wrap justify-center gap-x-2  md:justify-center md:text-center"
  ], "class:list")} data-astro-cid-yn5eldiq> ${value.map((item, index) => renderTemplate`<a${addAttribute([
    `${isVersus ? "mx-2  p-1" : ""}`,
    `${isKingOfTheTrack ? "p-1" : "boxer-link text-xl font-bold text-accent"}`
  ], "class:list")}${addAttribute(item.id, "href")}${addAttribute(`Visita la p\xE1gina del boxeador ${item.name}`, "title")}${addAttribute(id + (index + 1), "id")} data-astro-cid-yn5eldiq> ${!isKingOfTheTrack && renderTemplate`<div${addAttribute(`${isVersus ? "boxer-link-background w-32" : "boxer-link-background w-full"}`, "class:list")} data-astro-cid-yn5eldiq></div>`} <img${addAttribute(`https://cdn.lavelada.dev/boxers/${item.id}-small.webp`, "src")}${addAttribute(isKingOfTheTrack ? ["h-14 object-contain"] : ["boxer-image "], "class:list")}${addAttribute(`Foto en peque\xF1o del rival ${item.name}`, "alt")} style="mask-image: linear-gradient(to bottom, black 50%, transparent 100%);" data-astro-cid-yn5eldiq> <span${addAttribute([
    "font-atomic text-accent",
    { "text-[12px]": isKingOfTheTrack },
    { "text-xl": !isKingOfTheTrack }
  ], "class:list")} data-astro-cid-yn5eldiq> ${item.name.toLowerCase()} </span> </a>`)} </div> </div> </article> `;
}, "/Users/diego.ramos/veracines-web/src/components/BoxerDetailInfoRival.astro", void 0);

const $$Astro$i = createAstro("https://www.veracines.es");
const $$BoxerSocialLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$BoxerSocialLink;
  const { href } = Astro2.props;
  return renderTemplate`${href && renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer" class="group relative inline-flex w-full items-center justify-center overflow-hidden bg-gradient-to-b from-white/20 to-transparent px-10 py-2 text-white mix-blend-screen transition odd:last:ml-[50%] md:odd:last:ml-0" data-astro-cid-znnxggcl>${renderSlot($$result, $$slots["default"])}<span class="absolute inset-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-0 transition-opacity duration-200 ease-in-out group-hover:h-[90%] group-hover:opacity-20 group-focus:h-[90%] group-focus:opacity-20" data-astro-cid-znnxggcl></span></a>`}`;
}, "/Users/diego.ramos/veracines-web/src/components/BoxerSocialLink.astro", void 0);

const $$Astro$h = createAstro("https://www.veracines.es");
const $$LiteYouTube = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$LiteYouTube;
  const {
    videoId,
    title = "Reproducir presentaci\xF3n de La Velada del A\xF1o",
    backgroundImage
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "lite-youtube", "lite-youtube", { "class": "rounded-lg", "videoid": videoId, "style": `background-image: url('${backgroundImage}')`, "tabindex": "0", "aria-label": "button" }, { "default": () => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`https://youtube.com/watch?v=${videoId}`, "href")} class="lty-playbtn"${addAttribute(title, "title")} role="button" tabindex="0"> <span class="lyt-visually-hidden">${title}</span> </a> ` })}  `;
}, "/Users/diego.ramos/veracines-web/src/components/LiteYouTube.astro", void 0);

const $$Astro$g = createAstro("https://www.veracines.es");
const $$SectionTitle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$SectionTitle;
  const { title, description, variant = "standar" } = Astro2.props;
  const variantSizes = {
    small: "mx-auto max-w-[250px] text-wrap",
    standar: ""
  };
  const classSize = variantSizes[variant];
  return renderTemplate`${renderComponent($$result, "Typography", $$Typography, { "as": "h3", "variant": "h3", "color": "white", "class:list": "text-center" }, { "default": ($$result2) => renderTemplate`${title}` })} ${renderComponent($$result, "Typography", $$Typography, { "as": "p", "variant": "body", "color": "neutral", "class:list": `mt-4 text-center ${classSize}` }, { "default": ($$result2) => renderTemplate`${description}` })}`;
}, "/Users/diego.ramos/veracines-web/src/components/SectionTitle.astro", void 0);

const $$Astro$f = createAstro("https://www.veracines.es");
const $$BoxerWorkout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$BoxerWorkout;
  const { workout = void 0 } = Astro2.props;
  const hasWorkout = workout !== void 0;
  return renderTemplate`${hasWorkout && renderTemplate`${maybeRenderHead()}<section class="mb-10 mt-20 md:my-44">${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Entrenamiento", "description": "Preparaci\xF3n para el combate" })}<div class="mt-10 pt-12">${renderComponent($$result, "LiteYouTube", $$LiteYouTube, { "videoId": workout.videoID, "backgroundImage": `https://cdn.lavelada.dev${workout.thumbnail}` })}</div></section>`}`;
}, "/Users/diego.ramos/veracines-web/src/components/BoxerWorkout.astro", void 0);

const $$Astro$e = createAstro("https://www.veracines.es");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Gallery;
  const IMAGES_TO_LOAD = 5;
  const { id, name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-44" data-astro-cid-twrlseeo> ${renderComponent($$result, "SectionTitle", $$SectionTitle, { "title": "Galer\xEDa de Fotos", "description": `Fotos de ${name}`, "data-astro-cid-twrlseeo": true })} <div id="boxer-gallery" class="relative mt-8 grid grid-cols-[1fr_0.5fr_0.5fr] gap-3" data-astro-cid-twrlseeo> ${Array.from({ length: IMAGES_TO_LOAD }).map((_, index) => renderTemplate`<a${addAttribute([
    " aspect-square transition hover:scale-105 hover:brightness-125",
    { "row-span-2": index === 0 }
  ], "class:list")}${addAttribute(`https://cdn.lavelada.dev/boxers/gallery/${id}/${index + 1}.webp`, "href")}${addAttribute(`Abrir imagen ${index} de la galer\xEDa de ${name}`, "title")} data-astro-cid-twrlseeo> <figure class="h-full w-full" data-astro-cid-twrlseeo> <picture class="block h-full w-full" data-astro-cid-twrlseeo> <img loading="lazy" decoding="async" class="aspect-square h-full w-full rounded object-cover object-top"${addAttribute(`Imagen de la galer\xEDa de fotos de ${name}`, "alt")}${addAttribute(`https://cdn.lavelada.dev/boxers/gallery/${id}/${index + 1}.webp`, "src")} data-astro-cid-twrlseeo> </picture> </figure> </a>`)} <dialog id="lightbox" class="h-auto max-h-[80%] w-auto max-w-[80%] items-center justify-center overflow-hidden bg-transparent backdrop:bg-black/70 lg:max-h-[90%] lg:w-full lg:max-w-[90%]" data-astro-cid-twrlseeo> <button type="button" class="fixed right-8 top-8 rounded bg-black/60 p-4 text-white transition hover:scale-110 hover:bg-accent hover:text-black" data-astro-cid-twrlseeo> <svg class="size-5" aria-hidden="true" fill="none" viewBox="0 0 14 14" data-astro-cid-twrlseeo> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-astro-cid-twrlseeo></path> </svg> </button> <div class="mx-auto flex h-full w-full items-center justify-center gap-5" data-astro-cid-twrlseeo> <div class="absolute h-full w-full bg-transparent" data-dialog-bg data-astro-cid-twrlseeo></div> <button data-btn-prev class="group z-10 hidden transition hover:scale-125 motion-reduce:transition-none motion-reduce:hover:scale-100 lg:block" data-astro-cid-twrlseeo> <img class="size-16 opacity-85 group-hover:opacity-100" src="https://cdn.lavelada.dev/ui/left-arrow.svg" alt="Imagen anterior" title="Ir a la imagen anterior" data-astro-cid-twrlseeo> </button> <img loading="lazy" decoding="async" class="boxer-gallery-img z-10 h-full rounded object-contain object-center"${addAttribute(`Imagen de la galer\xEDa de fotos de ${name}`, "alt")}${addAttribute(`https://cdn.lavelada.dev/boxers/gallery/${id}/1.webp`, "src")} data-astro-cid-twrlseeo> <button data-btn-next class="group z-10 hidden transition hover:scale-125 motion-reduce:transition-none motion-reduce:hover:scale-100 lg:block" data-astro-cid-twrlseeo> <img class="size-16 rotate-180 opacity-85 group-hover:opacity-100" src="https://cdn.lavelada.dev/ui/left-arrow.svg" alt="Imagen siguiente" title="Ir a la imagen siguiente" data-astro-cid-twrlseeo> </button> </div> </dialog> </div> </section>  `;
}, "/Users/diego.ramos/veracines-web/src/components/Boxers/Gallery.astro", void 0);

const $$Astro$d = createAstro("https://www.veracines.es");
const $$Tiktok = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Tiktok;
  return renderTemplate`${maybeRenderHead()}<svg width="40" height="48px" viewBox="0 0 512 512" fill="currentColor"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de TikTok"><path d="M412.19 118.66a109.27 109.27 0 0 1-9.45-5.5 132.87 132.87 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56 68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52 161.79 161.79 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61Z"></path></svg>`;
}, "/Users/diego.ramos/veracines-web/src/icons/tiktok.astro", void 0);

const $$Astro$c = createAstro("https://www.veracines.es");
const $$Twitch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Twitch;
  return renderTemplate`${maybeRenderHead()}<svg width="36" height="48" viewBox="0 0 24 24" fill="currentColor"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de Twitch"> <path fill-rule="evenodd" d="M2.149 0 .537 4.119v16.836h5.731V24h3.224l3.045-3.045h4.657l6.269-6.269V0H2.149zm19.164 13.612-3.582 3.582H12l-3.045 3.045v-3.045H4.119V2.149h17.194v11.463zm-3.582-7.343v6.262h-2.149V6.269h2.149zm-5.731 0v6.262H9.851V6.269H12z" clip-rule="evenodd"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/icons/twitch.astro", void 0);

const $$Astro$b = createAstro("https://www.veracines.es");
const $$X = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${maybeRenderHead()}<svg width="35px" height="48px" viewBox="0 0 35 32"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de X"> <g> <path style=" stroke:none;fill-rule:nonzero;fill:currentColor;fill-opacity:1;" d="M 27.535156 0 L 32.898438 0 L 21.117188 13.578125 L 34.882812 32 L 24.078125 32 L 15.621094 20.804688 L 5.9375 32 L 0.570312 32 L 13.054688 17.476562 L -0.128906 0 L 10.941406 0 L 18.585938 10.226562 Z M 25.65625 28.8125 L 28.628906 28.8125 L 9.378906 3.070312 L 6.183594 3.070312 Z M 25.65625 28.8125 "></path> </g> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/icons/x.astro", void 0);

const $$Astro$a = createAstro("https://www.veracines.es");
const $$Youtube = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Youtube;
  return renderTemplate`${maybeRenderHead()}<svg width="46" height="48" viewBox="0 0 32 32" fill="currentColor"${addAttribute(Astro2.props.class, "class:list")} role="img" aria-label="Logotipo de YouTube"><path d="M12.932 20.459v-8.917l7.839 4.459zM30.368 8.735c-.354-1.301-1.354-2.307-2.625-2.663l-.027-.006c-3.193-.406-6.886-.638-10.634-.638-.381 0-.761.002-1.14.007L16 5.434c-.322-.004-.701-.007-1.082-.007-3.748 0-7.443.232-11.07.681l.434-.044c-1.297.363-2.297 1.368-2.644 2.643l-.006.026c-.4 2.109-.628 4.536-.628 7.016 0 .088 0 .176.001.263v-.014c0 .074-.001.162-.001.25 0 2.48.229 4.906.666 7.259l-.038-.244c.354 1.301 1.354 2.307 2.625 2.663l.027.006c3.193.406 6.886.638 10.634.638.38 0 .76-.002 1.14-.007l-.058.001c.322.004.702.007 1.082.007 3.749 0 7.443-.232 11.07-.681l-.434.044c1.298-.362 2.298-1.368 2.646-2.643l.006-.026c.399-2.109.627-4.536.627-7.015 0-.088 0-.176-.001-.263V16c0-.074.001-.162.001-.25 0-2.48-.229-4.906-.666-7.259l.038.244z"></path></svg>`;
}, "/Users/diego.ramos/veracines-web/src/icons/youtube.astro", void 0);

const COUNTRIES = {
  mx: {
    name: "México"
  },
  es: {
    name: "España"
  },
  do: {
    name: "República Dominicana"
  },
  ar: {
    name: "Argentina"
  },
  co: {
    name: "Colombia"
  },
  cl: {
    name: "Chile"
  }
};

const $$Astro$9 = createAstro("https://www.veracines.es");
const $$Combat = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Combat;
  const ordinals = {
    1: "Primer",
    2: "Segundo",
    3: "Tercer",
    4: "Cuarto",
    5: "Quinto",
    6: "Sexto"
  };
  const { combatNumber, combatId, boxers } = Astro2.props;
  const createCombatDisplay = (boxers2) => {
    const pairs = [];
    const seen = /* @__PURE__ */ new Set();
    boxers2.forEach((boxer) => {
      if (!seen.has(boxer.id)) {
        seen.add(boxer.id);
        const group = [boxer.name];
        if (boxer.allies) {
          boxer.allies.forEach((allyId) => {
            const ally = boxers2.find((b) => b.id === allyId);
            if (ally && !seen.has(allyId)) {
              seen.add(allyId);
              group.push(ally.name);
            }
          });
        }
        pairs.push(group.join(" x "));
      }
    });
    return pairs.join(" vs ");
  };
  const combatDisplay = createCombatDisplay(boxers);
  const combatData = COMBATS.find((combat) => combat.id === combatId);
  const boxerNames = combatData?.boxers ?? [];
  return renderTemplate`${maybeRenderHead()}<section class="mt-10 flex flex-col items-center gap-5 md:mt-40 md:gap-10 lg:gap-0"> <div${addAttribute(["relative flex w-full flex-col items-center justify-center py-20"], "class:list")}> <div class="absolute inset-0 -z-10 grid place-items-center opacity-20"> ${combatData ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": combatData.titleSize[0], "height": combatData.titleSize[1], "loading": "eager", "class": "inset-0 h-auto max-h-96 w-full max-w-80 scale-100 object-contain sm:scale-110 lg:max-w-3xl", "src": `https://cdn.lavelada.dev/matches/title-${combatId}.webp`, "alt": `Fotograf\xEDa del combate entre ${boxerNames.join(", ")}`, "data-astro-transition-scope": renderTransition($$result, "r2ijz6uy", "", `title-image-${combatId}`) })}` : renderTemplate`${renderComponent($$result, "Typography", $$Typography, { "as": "div", "variant": "atomic-title", "color": "primary", "tabindex": -1, "class:list": "text-center text-[20rem]" }, { "default": ($$result2) => renderTemplate`${combatNumber}` })}`} </div> <h2${addAttribute(["text-center text-4xl font-semibold uppercase text-white lg:text-6xl"], "class:list")}> ${ordinals[combatNumber]} combate
</h2> <div class="text-center lowercase"> ${combatDisplay.split(" vs ").map((group, groupIndex, groups) => renderTemplate`<span> ${group.split(" x ").map((name, nameIndex, names) => renderTemplate`<span> ${renderComponent($$result, "Typography", $$Typography, { "as": "span", "variant": "atomic-title", "color": "white" }, { "default": ($$result2) => renderTemplate`${name.trim()}` })} ${nameIndex < names.length - 1 && renderTemplate`${renderComponent($$result, "Typography", $$Typography, { "as": "span", "variant": "atomic-title", "color": "primary" }, { "default": ($$result2) => renderTemplate`${" x "}` })}`} </span>`)}  ${groupIndex < groups.length - 1 && renderTemplate`${renderComponent($$result, "Typography", $$Typography, { "as": "span", "variant": "atomic-title", "color": "primary", "class:list": ["lg:text-6xl"] }, { "default": ($$result2) => renderTemplate`${" vs "}` })}`} </span>`)} </div> </div> </section> <div> <a${addAttribute(["flex flex-col items-center justify-center text-2xl font-semibold text-accent"], "class:list")}${addAttribute(`/combates/${combatId}`, "href")} tabindex="0"> <span class="text-primary">Ver combate</span> </a> </div>`;
}, "/Users/diego.ramos/veracines-web/src/sections/Combat.astro", "self");

const $$Astro$8 = createAstro("https://www.veracines.es");
const $$ForecastBoxer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ForecastBoxer;
  const { image, imageAlt, boxerName, boxerHref, percentage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(boxerHref, "href")} class="group overflow-hidden transition-transform hover:scale-105"${addAttribute(`Ir a la p\xE1gina de ${boxerName}`, "aria-label")} data-astro-cid-nlcrimxt> <article data-astro-cid-nlcrimxt> <img decoding="async" class="image"${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} data-astro-cid-nlcrimxt> <h3 class="text-center text-2xl font-medium uppercase text-white transition-transform group-hover:scale-125 md:group-hover:scale-150" data-astro-cid-nlcrimxt> ${boxerName} </h3> <h4 class="mt-1 text-center text-6xl font-semibold text-accent transition-transform group-hover:scale-75" data-astro-cid-nlcrimxt> ${percentage}%
</h4> </article> </a> `;
}, "/Users/diego.ramos/veracines-web/src/components/ForecastBoxer.astro", void 0);

const $$Astro$7 = createAstro("https://www.veracines.es");
const $$Velocimetro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Velocimetro;
  const { percentage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<canvas id="velocimeter" width="500px" height="260px" class="w-full md:w-[500px]"${addAttribute(percentage, "data-percentage")}></canvas> `;
}, "/Users/diego.ramos/veracines-web/src/components/Velocimetro.astro", void 0);

const $$Astro$6 = createAstro("https://www.veracines.es");
const $$Forecasts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Forecasts;
  const { count, boxers } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="forecastGrid mt-40 grid items-center gap-4 px-7" data-astro-cid-tbwjmgtr> ${renderComponent($$result, "ForecastBoxer", $$ForecastBoxer, { "image": `https://cdn.lavelada.dev/boxers/${boxers[0].id}-big.webp`, "imageAlt": `${boxers[0].name}`, "boxerName": boxers[0].name, "boxerHref": `/boxers/${boxers[0].id}`, "percentage": boxers[0].forecast * 100, "class:list": ["boxer1"], "data-astro-cid-tbwjmgtr": true })} <div class="pronostico flex flex-col items-center justify-center gap-4" data-astro-cid-tbwjmgtr> <h2 class="text-2xl font-medium uppercase text-white" data-astro-cid-tbwjmgtr>Pronóstico</h2> <p class="max-w-72 text-center text-xl text-primary" data-astro-cid-tbwjmgtr>
Probabilidad de victoria basada en ${count} predicciones
</p> ${renderComponent($$result, "Velocimetro", $$Velocimetro, { "percentage": boxers[1].forecast * 100, "data-astro-cid-tbwjmgtr": true })} </div> ${renderComponent($$result, "ForecastBoxer", $$ForecastBoxer, { "image": `https://cdn.lavelada.dev/boxers/${boxers[1].id}-big.webp`, "imageAlt": `${boxers[1].name}`, "boxerName": boxers[1].name, "boxerHref": `/boxers/${boxers[1].id}`, "percentage": boxers[1].forecast * 100, "class:list": ["boxer2"], "data-astro-cid-tbwjmgtr": true })} <div class="action flex w-full flex-col items-center justify-center" data-astro-cid-tbwjmgtr> ${renderComponent($$result, "Action", $$Action, { "class": "mt-20 w-full max-w-lg text-base uppercase", "as": "button", "id": "add-to-calendar", "aria-disabled": "true", "aria-label": "pr\xF3ximamente", "data-astro-cid-tbwjmgtr": true }, { "default": ($$result2) => renderTemplate`
Hacer pronóstico
` })} </div> </section> `;
}, "/Users/diego.ramos/veracines-web/src/sections/Forecasts.astro", void 0);

const $$Astro$5 = createAstro("https://www.veracines.es");
function getStaticPaths$1() {
  return BOXERS.map(({ id }) => {
    return { params: { id } };
  });
}
const prerender$1 = true;
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  const [boxer] = BOXERS.filter((boxer2) => boxer2.id === id);
  const combat = COMBATS.find((combat2) => combat2.boxers.includes(id));
  if (!combat) {
    return new Response(JSON.stringify("Combat not found"), { status: 404 });
  }
  const boxers = BOXERS.filter((boxer2) => combat.boxers.includes(boxer2.id));
  if (!boxers) {
    return new Response(JSON.stringify("Boxers not found"), { status: 404 });
  }
  const forecast = FORECASTS.find((forecast2) => forecast2.combatId === combat.id);
  const countryName = COUNTRIES[boxer.country];
  const boxersWithForecast = [];
  let forecastCount = 0;
  let rivals = [];
  if (typeof boxer.versus === "object") {
    for (const vs of boxer.versus) {
      rivals = rivals.concat(BOXERS.filter((rival) => rival.id === vs));
    }
  } else {
    rivals = boxers.filter((rival) => rival.id !== boxer.id);
  }
  if (forecast) {
    forecast.forecastData.forEach((forecastData) => {
      const boxer2 = boxers.find((boxer3) => boxer3.id === forecastData.boxerId);
      if (boxer2) {
        boxersWithForecast.push({ ...boxer2, forecast: forecastData.forecast });
        forecastCount += forecastData.predictionsCount;
      }
    });
  }
  const preloadBoxerImage = [
    {
      as: "image",
      href: `https://cdn.lavelada.dev/boxers/${id}-big.webp`,
      type: "image/webp",
      rel: "preload"
    }
  ];
  const rivalOrRivals = rivals.length > 1 ? "Rivales" : "Rival";
  const guardBoxer = boxer.guard === void 0 ? "Desconocida" : boxer.guard;
  const flagAlt = countryName === void 0 ? "un pa\xEDs" : countryName.name;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": `Informaci\xF3n del luchador ${boxer.name}`, "title": `${boxer.name} - Informaci\xF3n del boxeador de La Velada IV`, "preload": preloadBoxerImage }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="relative flex flex-col items-center justify-center"> <div class="flex w-full flex-col md:flex-row md:gap-10"> <div class="left-10 order-2 flex w-full flex-col md:absolute md:order-1 md:w-[300px] md:gap-y-20"> ${renderComponent($$result2, "BoxerClips", $$BoxerClips, { "clips": boxer.clips })} <div class="hidden md:block"> ${renderComponent($$result2, "BoxerDetailInfoRival", $$BoxerDetailInfoRival, { "title": rivalOrRivals, "value": rivals, "id": "boxer-rival-desk" })} </div> </div> <div class="flex w-full flex-col md:w-1/4 md:gap-y-20"></div> <div class="relative order-1 -mt-20 flex flex-col items-center justify-center md:order-2 md:w-1/2 lg:mx-4"> ${renderComponent($$result2, "BoxerBigImage", $$BoxerBigImage, { "id": id, "name": boxer.name, "country": boxer.country, "countryName": flagAlt, "loading": "eager" })} </div> <div class="order-3 mx-auto flex w-full max-w-[450px] flex-col md:w-auto md:max-w-none md:gap-y-20 lg:w-1/4"> ${renderComponent($$result2, "BoxerDetailInfo", $$BoxerDetailInfo, { "title": "Edad", "value": `${boxer.age} a\xF1os`, "id": "boxer-edad" })} ${renderComponent($$result2, "BoxerDetailInfo", $$BoxerDetailInfo, { "title": "Peso", "value": `${boxer.weight} kg`, "id": "boxer-peso" })} ${renderComponent($$result2, "BoxerDetailInfo", $$BoxerDetailInfo, { "title": "Altura", "value": `${boxer.height} m`, "id": "boxer-altura" })} ${renderComponent($$result2, "BoxerDetailInfo", $$BoxerDetailInfo, { "title": "Guardia", "value": guardBoxer, "id": "boxer-guardia" })} <div class="block md:hidden"> ${renderComponent($$result2, "BoxerDetailInfoRival", $$BoxerDetailInfoRival, { "title": rivalOrRivals, "value": rivals, "id": "boxer-rival-mobile" })} </div> </div> </div> </section> <section class="mt-20 md:mt-64"> ${renderComponent($$result2, "Typography", $$Typography, { "as": "h3", "variant": "h3", "color": "white", "class:list": "mb-12 text-center" }, { "default": ($$result3) => renderTemplate`
REDES SOCIALES
` })} <div class="m-auto grid w-10/12 grid-cols-2 gap-4 md:w-full md:grid-cols-5"> ${renderComponent($$result2, "BoxerSocialLink", $$BoxerSocialLink, { "href": boxer.socials.twitch }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Twitch", $$Twitch, {})} ` })} ${renderComponent($$result2, "BoxerSocialLink", $$BoxerSocialLink, { "href": boxer.socials.instagram }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Instagram", $$Instagram, {})} ` })} ${renderComponent($$result2, "BoxerSocialLink", $$BoxerSocialLink, { "href": boxer.socials.twitter }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "X", $$X, {})} ` })} ${renderComponent($$result2, "BoxerSocialLink", $$BoxerSocialLink, { "href": boxer.socials.youtube }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "YouTube", $$Youtube, {})} ` })} ${renderComponent($$result2, "BoxerSocialLink", $$BoxerSocialLink, { "href": boxer.socials.tiktok }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Tiktok", $$Tiktok, {})} ` })} </div> </section> ${boxer.workout && renderTemplate`${renderComponent($$result2, "BoxerWorkout", $$BoxerWorkout, { "workout": boxer.workout })}`} ${boxer.gallery && renderTemplate`${renderComponent($$result2, "BoxerGallery", $$Gallery, { "id": boxer.id, "name": boxer.name })}`} ${forecast && renderTemplate`${renderComponent($$result2, "Forecasts", $$Forecasts, { "count": forecastCount, "boxers": boxersWithForecast })}`} ${renderComponent($$result2, "CombatSection", $$Combat, { "combatId": combat.id, "combatNumber": combat.number, "boxers": boxers })} </main> ` })} `;
}, "/Users/diego.ramos/veracines-web/src/pages/boxers/[id].astro", void 0);

const $$file$1 = "/Users/diego.ramos/veracines-web/src/pages/boxers/[id].astro";
const $$url$1 = "/boxers/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id$1,
	file: $$file$1,
	getStaticPaths: getStaticPaths$1,
	prerender: prerender$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://www.veracines.es");
const $$BackgroundVideo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BackgroundVideo;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="fixed left-0 top-0 -z-10 aspect-video h-[100vh] w-screen"> <video autoplay muted loop class="aspect-video size-full overflow-hidden object-cover opacity-0 transition-opacity duration-500" style="mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 70%, transparent);" oncanplay="this.classList.add('opacity-70')"> <source type="video/mp4"${addAttribute(`https://cdn.lavelada.dev/${id}-corto.mp4`, "src")}> </video> </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/Combates/BackgroundVideo.astro", void 0);

const $$Astro$3 = createAstro("https://www.veracines.es");
const $$CombatFeatureCountry = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CombatFeatureCountry;
  const { boxer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<td class="py-3 font-semibold"> <span class="flex items-center justify-center"> <img decoding="async"${addAttribute("pointer-events-none aspect-[3/2] h-8 w-auto object-contain object-center", "class:list")}${addAttribute(`Bandera de ${boxer.countryName}`, "alt")}${addAttribute(`https://cdn.lavelada.dev/flags/${boxer.country}.webp`, "src")}> ${boxer.countryName} </span> </td>`;
}, "/Users/diego.ramos/veracines-web/src/components/Combates/CombatFeatureCountry.astro", void 0);

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$CombatFeatureName = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CombatFeatureName;
  const { boxer, isKingOfTheTrack } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<td class="py-3 font-semibold"> <div class="-mt-10"> <a${addAttribute([
    `${isKingOfTheTrack ? "p-1" : "text-xl font-bold text-accent transition hover:scale-110 hover:saturate-[150%]"}`
  ], "class:list")}${addAttribute(`/boxers/${boxer.id}`, "href")}${addAttribute(`Visita la p\xE1gina del boxeador ${boxer.name}`, "title")}> <img${addAttribute(`https://cdn.lavelada.dev/boxers/${boxer.id}-small.webp`, "src")}${addAttribute(isKingOfTheTrack ? ["h-14 object-contain"] : ["mx-auto aspect-square h-32 object-contain"], "class:list")}${addAttribute(`Foto en peque\xF1o del rival ${boxer.name}`, "alt")} style="
					filter: drop-shadow(0 0 5px rgba(0, 0, 0, .5));
					mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
				"> <span${addAttribute([
    "font-atomic text-accent",
    { "text-[12px]": isKingOfTheTrack },
    { "text-xl": !isKingOfTheTrack }
  ], "class:list")}> ${boxer.name.toLowerCase()} </span> </a> </div> </td>`;
}, "/Users/diego.ramos/veracines-web/src/components/Combates/CombatFeatureName.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$CombatFeatures = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CombatFeatures;
  const relevantBoxerData = Object.entries({
    name: {
      label: ""
    },
    country: {
      label: "Pa\xEDs",
      concat: void 0
    },
    weight: {
      label: "Peso",
      concat: "kg"
    },
    height: {
      label: "Altura",
      concat: "m"
    },
    // guard: {
    // 	label: "Guardia",
    // 	concat: undefined,
    // },
    // reach: {
    // 	label: "Alcance",
    // 	concat: "cm",
    // },
    age: {
      label: "Edad",
      concat: "a\xF1os"
    }
  });
  const { boxerIds } = Astro2.props;
  const boxers = boxerIds.map((id) => BOXERS.find((boxer) => boxer.id === id));
  const middleIndex = boxers.length / 2;
  return renderTemplate`${maybeRenderHead()}<section class="pt-40"> ${renderComponent($$result, "Typography", $$Typography, { "as": "h2", "variant": "h2", "color": "white", "class:list": "text-center" }, { "default": ($$result2) => renderTemplate`
Características
` })} ${renderComponent($$result, "Typography", $$Typography, { "as": "p", "variant": "body", "color": "neutral", "class:list": "mx-auto mt-4 text-wrap text-center" }, { "default": ($$result2) => renderTemplate`
Datos relevantes de cada contrincante
` })} <table class="mt-10 w-full text-center text-white lg:text-lg"> <tbody> ${relevantBoxerData.map(([key, { label, concat }]) => renderTemplate`<tr class="mb-10 bg-gradient-to-b from-black/0 via-transparent/40 to-transparent/40 p-4"> ${boxers.map((boxer, index) => {
    if (boxer == null)
      return null;
    return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${key === "country" && renderTemplate`${renderComponent($$result2, "CombatFeatureCountry", $$CombatFeatureCountry, { "boxer": boxer })}`}${key === "name" && renderTemplate`${renderComponent($$result2, "CombatFeatureName", $$CombatFeatureName, { "boxer": boxer })}`}${!["country", "name"].includes(key) && renderTemplate`<td class="py-3 font-semibold"> ${boxer[key]} ${concat} </td>`}${index === middleIndex - 1 && renderTemplate`<td class="text-primary">${label}</td>`}` })}`;
  })} </tr>`)} </tbody> </table> </section>`;
}, "/Users/diego.ramos/veracines-web/src/sections/CombatFeatures.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const getStaticPaths = () => {
  return COMBATS.map((combat) => ({
    params: { id: combat.id }
  }));
};
const prerender = true;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const getCombatById = (id2) => {
    return COMBATS.find((combat) => combat.id === id2);
  };
  const getBoxerNames = (boxerIds) => {
    return boxerIds.map((boxerId) => boxerId);
  };
  const { id } = Astro2.params;
  const combatData = getCombatById(id);
  const boxerNames = combatData ? getBoxerNames(combatData.boxers) : [];
  if (!combatData) {
    return {
      status: 404
    };
  }
  const formatter = new Intl.ListFormat("es", {
    style: "short",
    type: "conjunction"
  });
  const formattedBoxerNames = formatter.format(boxerNames);
  const [imageWidth, imageHeight] = combatData.titleSize;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Combate n\xFAmero ${combatData.number} de La Velada IV`, "description": `Combate entre ${formattedBoxerNames}`, "image": `https://cdn.lavelada.dev/matches/og-${id}-min.jpg` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "BackgroundVideo", $$BackgroundVideo, { "id": id })} ${maybeRenderHead()}<main class="pointer-events-none md:-mt-12"> <div class="relative flex h-[60vh] w-full items-center justify-center md:h-[76vh]"> ${renderComponent($$result2, "Image", $$Image, { "width": imageWidth, "height": imageHeight, "loading": "eager", "class": "inset-0 h-auto max-h-96 w-full max-w-80 scale-100 object-contain sm:scale-110 lg:max-w-3xl", "src": `https://cdn.lavelada.dev/matches/title-${id}.webp`, "alt": `Fotograf\xEDa del combate entre ${boxerNames.join(", ")}`, "data-astro-transition-scope": renderTransition($$result2, "47izhcmn", "", `title-image-${id}`) })} </div> <div class="pointer-events-auto"> ${combatData.boxers.length <= 4 && renderTemplate`${renderComponent($$result2, "CombatFeatures", $$CombatFeatures, { "boxerIds": combatData.boxers })}`} </div> </main> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/combates/[id].astro", "self");

const $$file = "/Users/diego.ramos/veracines-web/src/pages/combates/[id].astro";
const $$url = "/combates/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _id_$1 as _, _id_ as a };
