/* empty css                                     */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, s as spreadAttributes } from '../astro_BvmcH-Yh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Action, M as Metadata, $ as $$Layout } from './404_D3qMtfHr.mjs';
import 'clsx';
/* empty css                          */
import { C as CINES } from './_pelicula__cahLp4td.mjs';

const $$Astro$a = createAstro("https://www.veracines.es");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col place-items-center gap-4 lg:gap-3" data-astro-cid-shwxrd6l> <h1 class="sr-only bg-black/30" data-astro-cid-shwxrd6l>Veracines - Cines de verano en Vera y Garrucha</h1> <img src="/img/veracines-logo.png" alt="Veracines" class="w-48 lg:w-72" data-astro-cid-shwxrd6l> <h2${addAttribute(`text-center text-lg text-primary mb-5`, "class")} data-astro-cid-shwxrd6l>Disfruta de los mejores estrenos de cine durante todo el año en Veracines. Vive con nosotros la experiencia del cine de verano en nuestras terrazas de Vera y Garrucha, así como durante el resto del año en Cine Regio de Vera.</h2> </section> `;
}, "/Users/diego.ramos/veracines-web/src/sections/Hero.astro", void 0);

const $$Astro$9 = createAstro("https://www.veracines.es");
const $$UbicacionCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$UbicacionCard;
  const { cine } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col md:flex-row p-2 m-4 border-2 align-middle flex-grow bg-white bg-opacity-80`, "class")}> <div${addAttribute(`flex flex-col justify-around justify-center items-center p-5`, "class")}> <h4${addAttribute(`text-xl text-${cine.color} text-center font-bold underline mb-2`, "class")}>${cine.nombre}</h4> <p${addAttribute(`text-center text-${cine.color}`, "class")}>${cine.localizacion.descripcion}</p> ${renderComponent($$result, "Action", $$Action, { "class": `w-3/4 text-base md:text-xs`, "as": `a`, "aria-disabled": `false`, "href": `/cartelera-${cine.url}/`, "rel": `noopener noreferrer`, "aria-label": `Enlace a la cartelera de ${cine.nombre}` }, { "default": ($$result2) => renderTemplate`
Consultar cartelera
` })} </div> <div${addAttribute(`flex flex-col md:mt-2`, "class")}> <div${addAttribute(`border-4 border-primary`, "class")}> <iframe${addAttribute(`align-middle w-auto`, "class")}${addAttribute(`https://www.google.com/maps/embed?pb=${cine.localizacion.ubicacionKey}`, "src")}${addAttribute(`400`, "width")}${addAttribute(`250`, "height")}${addAttribute(`border:0;`, "style")}${addAttribute(``, "allowfullscreen")}${addAttribute(`lazy`, "loading")}${addAttribute(`no-referrer-when-downgrade`, "referrerpolicy")}></iframe> </div> <p${addAttribute(`text-center underline text-${cine.color} text-xs font-bold w-auto p-2`, "class")}>${cine.localizacion.direccion}</p> </div> </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/UbicacionCard.astro", void 0);

const $$Astro$8 = createAstro("https://www.veracines.es");
const $$Ubicaciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Ubicaciones;
  return renderTemplate`${maybeRenderHead()}<section> <h3 class="text-xl text-primary text-center font-bold">Puedes encontrarnos en:</h3> ${CINES.map((cine) => renderTemplate`${renderComponent($$result, "UbicacionCard", $$UbicacionCard, { "cine": cine })}`)} </section>`;
}, "/Users/diego.ramos/veracines-web/src/components/ubicaciones.astro", void 0);

const CONTACTO = {
  telefono: {
    prefijo: "34",
    numero: "660 391 365"
  },
  email: "veracines@hotmail.es"
};

const $$Astro$7 = createAstro("https://www.veracines.es");
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${maybeRenderHead()}<section> <h3 class="text-xl text-primary text-center font-bold">Contacta con nosotros</h3> <p${addAttribute(`text-center text-lg text-primary mt-5`, "class")}>Si necesitas mas información,  estaremos encantados de contestarte. Puedes ponerte en contacto con nosotros a través de nuestro teléfono <a${addAttribute(`tel:+${CONTACTO.telefono.prefijo}${CONTACTO.telefono.numero.replaceAll(" ", "")}`, "href")} class="font-bold" target="_blank">${CONTACTO.telefono.numero}</a>, nuestro <a class="font-bold"${addAttribute(`https://wa.me/${CONTACTO.telefono.prefijo}${CONTACTO.telefono.numero.replaceAll(" ", "")}`, "href")} target="_blank">WhatsApp</a> o a traves de nuestro email en <a${addAttribute(`mailto:${CONTACTO.email}`, "href")} class="font-bold" target="_blank">${CONTACTO.email}</a>.</p> </section>`;
}, "/Users/diego.ramos/veracines-web/src/components/contacto.astro", void 0);

const $$Astro$6 = createAstro("https://www.veracines.es");
const $$Burguer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Burguer;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} fill="#000000" viewBox="0 0 100 100" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="currentColor" stroke-width="3.1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_x31_"></g> <g id="_x32_"></g> <g id="_x33_"></g> <g id="_x34_"> <path d="M72.8,80.7H26.6c-5.9,0-10.7-4.8-10.7-10.7v-6c0-0.8,0.7-1.5,1.5-1.5h0.1c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,7,2.8 c3.3,0,5.6-1.1,6.6-2.1c0.9-1.1,2.3-1.7,3.9-1.7h2.9c1.5,0,2.9,0.6,3.9,1.7c0.9,1.1,3.3,2.1,6.6,2.1c3.2,0,5.6-1.1,6.6-2.1 c0.9-1.1,2.3-1.7,3.9-1.7h2.4c1.5,0,2.9,0.6,3.9,1.7c0.9,1.1,3.3,2.1,6.6,2.1c3.7,0,6.5-1.4,6.9-2.8c0.2-0.6,0.8-1,1.4-1H82 c0.8,0,1.5,0.7,1.5,1.5v6C83.5,75.9,78.7,80.7,72.8,80.7z M18.9,67.6V70c0,4.2,3.4,7.7,7.7,7.7h46.2c4.2,0,7.7-3.4,7.7-7.7v-2.8 c-1.8,1.3-4.5,2-7.5,2c-3.7,0-7.1-1.2-8.8-3.2c-0.3-0.4-0.9-0.6-1.6-0.6h-2.4c-0.6,0-1.2,0.2-1.6,0.6c-1.7,2-5.1,3.2-8.8,3.2 c-3.7,0-7.1-1.2-8.8-3.2c-0.3-0.4-0.9-0.6-1.6-0.6h-2.9c-0.6,0-1.2,0.2-1.6,0.6c-1.7,2-5.1,3.2-8.8,3.2 C23.2,69.3,20.8,68.7,18.9,67.6z M80.3,57.5H19.9c-3.9,0-7.1-3.3-7.1-7.4c0-2,0.7-3.8,2-5.2c1.4-1.4,3.1-2.2,5-2.2h41 c0.5,0,1,0.3,1.3,0.7l2.1,3.5l4.6-3.9c0.3-0.2,0.6-0.4,1-0.4h10.5c3.9,0,7.1,3.3,7.1,7.4c0,2-0.7,3.8-2,5.2 C84,56.7,82.2,57.5,80.3,57.5z M19.9,45.6c-1.1,0-2.1,0.4-2.9,1.3c-0.8,0.8-1.2,2-1.2,3.2c0,2.4,1.8,4.4,4.1,4.4h60.4 c1.1,0,2.1-0.4,2.9-1.3c0.8-0.8,1.2-2,1.2-3.2c0-2.4-1.8-4.4-4.1-4.4h-9.9l-5.5,4.7c-0.3,0.3-0.8,0.4-1.2,0.3 c-0.4-0.1-0.8-0.3-1-0.7L60,45.6H19.9z M63.9,50.7c-0.1,0-0.2,0-0.2,0c-0.4-0.1-0.8-0.3-1-0.7L60,45.6H20.1c-0.8,0-1.5-0.7-1.5-1.5 v-6.8c0-0.8,0.7-1.5,1.5-1.5h59.3c0.8,0,1.5,0.7,1.5,1.5v6.8c0,0.8-0.7,1.5-1.5,1.5h-9l-5.5,4.7C64.6,50.6,64.3,50.7,63.9,50.7z M21.6,42.6h39.2c0.5,0,1,0.3,1.3,0.7l2.1,3.5l4.6-3.9c0.3-0.2,0.6-0.4,1-0.4h8v-3.8H21.6V42.6z M61.9,41.3 M73,69.3 c-4.2,0-7.8-1.5-9.3-3.8H59c-1.5,2.3-5.1,3.8-9.3,3.8c-4.2,0-7.8-1.5-9.3-3.8h-5.2c-1.5,2.3-5.1,3.8-9.3,3.8c-4.4,0-8.1-1.6-9.4-4 c-2.3-0.7-3.9-2.8-3.9-5.2c0-2.5,1.8-4.7,4.2-5.3c0.2-0.1,0.4-0.1,0.6-0.1H82c3,0,5.4,2.4,5.4,5.4c0,2.9-2.3,5.3-5.1,5.4 C80.8,67.8,77.2,69.3,73,69.3z M58.1,62.5h6.5c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,7,2.8c3.7,0,6.5-1.4,6.9-2.8 c0.2-0.6,0.8-1,1.4-1H82c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4H17.8c-0.1,0-0.1,0-0.2,0c-1.2,0.2-2.1,1.2-2.1,2.4 s0.9,2.2,2.1,2.4c0.2,0,0.3,0.1,0.4,0.1c0.4,0.2,0.8,0.5,0.9,0.9c0.4,1.3,3.2,2.8,7,2.8c3.7,0,6.5-1.4,6.9-2.8c0.2-0.6,0.8-1,1.4-1 h7c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,6.9,2.8c3.7,0,6.5-1.4,6.9-2.8C56.9,62.9,57.4,62.5,58.1,62.5z M82,38.9H17.4 c-0.8,0-1.5-0.7-1.5-1.5v-1.8c0-9,7.3-16.3,16.3-16.3h34.9c9,0,16.3,7.3,16.3,16.3v1.8C83.5,38.2,82.8,38.9,82,38.9z M18.9,35.9 h61.6v-0.3c0-7.3-6-13.3-13.3-13.3H32.3c-7.3,0-13.3,6-13.3,13.3V35.9z M31.6,31.4l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1 c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4C30.9,31.8,31.3,31.6,31.6,31.4z M48.9,31.4 l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4 C48.2,31.8,48.6,31.6,48.9,31.4z M65.6,31.4l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8 c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4C64.9,31.8,65.3,31.6,65.6,31.4z"></path> </g> <g id="_x35_"></g> <g id="_x36_"></g> <g id="_x37_"></g> <g id="_x38_"></g> <g id="_x39_"></g> <g id="_x31_0"></g> <g id="_x31_1"></g> <g id="_x31_2"></g> <g id="_x31_3"></g> <g id="_x31_4"></g> <g id="_x31_5"></g> <g id="_x31_6"></g> <g id="_x31_7"></g> <g id="_x31_8"></g> <g id="_x31_9"></g> <g id="_x32_0"></g> <g id="_x32_1"></g> <g id="_x32_2"></g> <g id="_x32_3"></g> <g id="_x32_4"></g> </g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/burguer.astro", void 0);

const $$Astro$5 = createAstro("https://www.veracines.es");
const $$Popcorn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Popcorn;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"></path> <path d="M10 22 9 8"></path> <path d="m14 22 1-14"></path> <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/popcorn.astro", void 0);

const $$Astro$4 = createAstro("https://www.veracines.es");
const $$Icecream = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icecream;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"></path> <path d="M17 7A5 5 0 0 0 7 7"></path> <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/icecream.astro", void 0);

const $$Astro$3 = createAstro("https://www.veracines.es");
const $$Parking = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Parking;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5,22H19a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19A3,3,0,0,0,5,22ZM4,5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1ZM9,18a1,1,0,0,0,1-1V14h2a4,4,0,0,0,0-8H9A1,1,0,0,0,8,7V17A1,1,0,0,0,9,18ZM10,8h2a2,2,0,0,1,0,4H10Z"></path></g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/parking.astro", void 0);

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$Projector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projector;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 7 3 5"></path> <path d="M9 6V3"></path> <path d="m13 7 2-2"></path> <circle cx="9" cy="13" r="3"></circle> <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"></path> <path d="M16 16h2"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/projector.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Servicios;
  return renderTemplate`${maybeRenderHead()}<section class="w-full text-center"> <h3 class="text-xl text-primary text-center font-bold">Nuestros servicios</h3> <p class="text-center text-lg text-primary">
Además de una buena película al aire libre, disponemos de servicios como:
</p> <div class="grid grid-cols-1 gap-6 sm:grid-cols-4 lg:grid-cols-6 mt-5"> <div class="flex flex-col items-center gap-4 rounded-lg bg-white bg-opacity-70 border-2 p-6 text-center dark:bg-gray-800 sm:col-span-2"> ${renderComponent($$result, "Burguer", $$Burguer, { "class": "h-12 w-12 text-primary" })} <div class="grid gap-2"> <h3 class="text-xl text-primary font-semibold">Bocadillos y Hamburguesas</h3> <p class="text-gray-500 dark:text-gray-400">Disponemos de una carta de bocadillos y hamburguesas con precios realmente populares</p> </div> </div> <div class="flex flex-col items-center gap-4 rounded-lg bg-white bg-opacity-70 border-2 p-6 text-center dark:bg-gray-800 sm:col-span-2"> ${renderComponent($$result, "Popcorn", $$Popcorn, { "class": "h-12 w-12 text-primary" })} <div class="grid gap-2"> <h3 class="text-xl text-primary font-semibold">Palomitas</h3> <p class="text-gray-500 dark:text-gray-400">Indispensables en una sesión de cine</p> </div> </div> <div class="flex flex-col items-center gap-4 rounded-lg bg-white bg-opacity-70 border-2 p-6 text-center dark:bg-gray-800 sm:col-span-2"> ${renderComponent($$result, "Icecream", $$Icecream, { "class": "h-12 w-12 text-primary" })} <div class="grid gap-2"> <h3 class="text-xl text-primary font-semibold">Helados</h3> <p class="text-gray-500 dark:text-gray-400">Refrescate con nuestra selección de helados</p> </div> </div> <div class="flex flex-col items-center gap-4 rounded-lg bg-white bg-opacity-70 border-2 p-6 text-center dark:bg-gray-800 sm:col-span-2 lg:col-start-2"> ${renderComponent($$result, "Parking", $$Parking, { "class": "h-12 w-12 text-primary" })} <div class="grid gap-2"> <h3 class="text-xl text-primary font-semibold">Parking Gratuito</h3> <p class="text-gray-500 dark:text-gray-400">Disponemos de un amplio parking para facilitar tu llegada. (Solo disponible en ${CINES.find((x) => x.url === "vera").nombre})</p> </div> </div> <div class="flex flex-col items-center gap-4 rounded-lg bg-white bg-opacity-70 border-2 p-6 text-center dark:bg-gray-800 sm:col-span-2 md:col-start-2 lg:col-start-4"> ${renderComponent($$result, "Projector", $$Projector, { "class": "h-12 w-12 text-primary" })} <div class="grid gap-2"> <h3 class="text-xl text-primary font-semibold">Proyector 2K</h3> <p class="text-gray-500 dark:text-gray-400">Todas nuestras salas cuentan con proyectores con resolución 2K</p> </div> </div> </div> </section>`;
}, "/Users/diego.ramos/veracines-web/src/components/Servicios.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata.home.description, "title": Metadata.home.title, "canonical": Metadata.home.canonical }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${maybeRenderHead()}<main> <div class="grid gap-14"> ${renderComponent($$result2, "Ubicaciones", $$Ubicaciones, {})} ${renderComponent($$result2, "Servicios", $$Servicios, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} </div> </main> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/index.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, prerender, $$url as url };
