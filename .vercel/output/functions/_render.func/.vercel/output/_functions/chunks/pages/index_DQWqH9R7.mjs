/* empty css                                */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, s as spreadAttributes, g as renderSlot } from '../astro_BUDihmju.mjs';
import 'kleur/colors';
import { b as $$Action, C as CINES, M as Metadata, $ as $$Layout } from './404_u6tsmEBa.mjs';
import 'clsx';
/* empty css                          */

const $$Astro$e = createAstro("https://www.veracines.es");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col place-items-center gap-4 lg:gap-3" data-astro-cid-shwxrd6l> <h1 class="sr-only bg-black/30" data-astro-cid-shwxrd6l>Veracines - Cines de verano en Vera y Garrucha</h1> <img src="/img/veracines-logo.png" alt="Veracines" class="w-48 lg:w-72" data-astro-cid-shwxrd6l> <h2${addAttribute(`text-center text-lg text-primary mb-5`, "class")} data-astro-cid-shwxrd6l>Disfruta de los mejores estrenos de cine durante todo el año en Veracines. Vive con nosotros la experiencia del cine de verano en nuestras terrazas de Vera y Garrucha, así como durante el resto del año en Cine Regio de Vera.</h2> </section> `;
}, "/Users/diego.ramos/veracines-web/src/sections/Hero.astro", void 0);

const $$Astro$d = createAstro("https://www.veracines.es");
const $$UbicacionCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$UbicacionCard;
  const { cine } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col sm:flex-row p-2 m-4 rounded-lg bg-white bg-opacity-70 border-2 align-middle flex-grow bg-white bg-opacity-80`, "class")}> <div${addAttribute(`flex flex-col justify-around justify-center items-center p-5`, "class")}> <h4${addAttribute(`text-xl text-${cine.color} text-center font-bold underline mb-2`, "class")}>${cine.nombre}</h4> <p${addAttribute(`text-center text-${cine.color}`, "class")}>${cine.localizacion.descripcion}</p> ${renderComponent($$result, "Action", $$Action, { "class": `w-3/4 text-base md:text-xs`, "as": `a`, "aria-disabled": `false`, "href": `/cartelera-${cine.url}/`, "rel": `noopener noreferrer`, "aria-label": `Enlace a la cartelera de ${cine.nombre}` }, { "default": ($$result2) => renderTemplate`
Consultar cartelera
` })} </div> <div${addAttribute(`flex flex-col md:mt-2`, "class")}> <div${addAttribute(`border-4 border-primary rounded-lg m-auto`, "class")}> <iframe${addAttribute(`align-middle w-auto rounded-lg`, "class")}${addAttribute(`https://www.google.com/maps/embed?pb=${cine.localizacion.ubicacionKey}`, "src")}${addAttribute(`400`, "width")}${addAttribute(`250`, "height")}${addAttribute(`border:0;`, "style")}${addAttribute(``, "allowfullscreen")}${addAttribute(`lazy`, "loading")}${addAttribute(`no-referrer-when-downgrade`, "referrerpolicy")}></iframe> </div> <p${addAttribute(`text-center underline text-${cine.color} text-xs font-bold w-auto p-2`, "class")}>${cine.localizacion.direccion}</p> </div> </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/UbicacionCard.astro", void 0);

const $$Astro$c = createAstro("https://www.veracines.es");
const $$Ubicaciones = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
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

const $$Astro$b = createAstro("https://www.veracines.es");
const $$Phone = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Phone;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/phone.astro", void 0);

const $$Astro$a = createAstro("https://www.veracines.es");
const $$Whatsapp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/whatsapp.astro", void 0);

const $$Astro$9 = createAstro("https://www.veracines.es");
const $$Email = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Email;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/email.astro", void 0);

const $$Astro$8 = createAstro("https://www.veracines.es");
const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${maybeRenderHead()}<section> <h3 class="text-xl text-primary text-center font-bold">Contacta con nosotros</h3> <p${addAttribute(`text-center text-lg text-primary mt-5`, "class")}>Si necesitas mas información,  estaremos encantados de contestarte. Puedes ponerte en contacto con nosotros a través de nuestro teléfono <a${addAttribute(`tel:+${CONTACTO.telefono.prefijo}${CONTACTO.telefono.numero.replaceAll(" ", "")}`, "href")} class="font-bold" target="_blank">${CONTACTO.telefono.numero}</a>, nuestro <a class="font-bold"${addAttribute(`https://wa.me/${CONTACTO.telefono.prefijo}${CONTACTO.telefono.numero.replaceAll(" ", "")}`, "href")} target="_blank">WhatsApp</a> o a traves de nuestro email en <a${addAttribute(`mailto:${CONTACTO.email}`, "href")} class="font-bold" target="_blank">${CONTACTO.email}</a>.</p> <div class="grid grid-cols-6 gap-6 mt-5 "> <div class="flex flex-col items-center gap-4 text-center col-span-2"> <div class="relative rounded-lg bg-white bg-opacity-70 border-2 text-center p-6 flex flex-col items-center min-h-32 w-full"> ${renderComponent($$result, "Phone", $$Phone, { "class": "h-12 w-12 text-primary" })} <div class="grid gap-2"> <h3 class="text-xl text-primary font-semibold">Teléfono</h3> </div> <a class="absolute w-full h-full"${addAttribute(`tel:+${CONTACTO.telefono.prefijo}${CONTACTO.telefono.numero.replaceAll(" ", "")}`, "href")} target="_blank"></a> </div> </div> <div class="flex flex-col items-center gap-4 text-center col-span-2"> <div class="relative rounded-lg bg-white bg-opacity-70 border-2 text-center p-6 flex flex-col items-center min-h-32 w-full"> ${renderComponent($$result, "Whatsapp", $$Whatsapp, { "class": "h-12 w-12 text-primary" })} <div class="grid gap-2"> <h3 class="text-xl text-primary font-semibold">Whatsapp</h3> </div> <a class="absolute w-full h-full"${addAttribute(`https://wa.me/${CONTACTO.telefono.prefijo}${CONTACTO.telefono.numero.replaceAll(" ", "")}`, "href")} target="_blank"></a> </div> </div> <div class="flex flex-col items-center gap-4 text-center col-span-2"> <div class="relative rounded-lg bg-white bg-opacity-70 border-2 text-center p-6 flex flex-col items-center min-h-32 w-full"> ${renderComponent($$result, "Email", $$Email, { "class": "h-12 w-12 text-primary" })} <div class="grid gap-2"> <h3 class="text-xl text-primary font-semibold">Email</h3> </div> <a class="absolute w-full h-full"${addAttribute(`mailto:${CONTACTO.email}`, "href")} target="_blank"></a> </div> </div> </div> </section>`;
}, "/Users/diego.ramos/veracines-web/src/components/contacto.astro", void 0);

const $$Astro$7 = createAstro("https://www.veracines.es");
const $$Burguer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Burguer;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} fill="currentColor" viewBox="0 0 100 100" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="currentColor" stroke-width="3.1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_x31_"></g> <g id="_x32_"></g> <g id="_x33_"></g> <g id="_x34_"> <path d="M72.8,80.7H26.6c-5.9,0-10.7-4.8-10.7-10.7v-6c0-0.8,0.7-1.5,1.5-1.5h0.1c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,7,2.8 c3.3,0,5.6-1.1,6.6-2.1c0.9-1.1,2.3-1.7,3.9-1.7h2.9c1.5,0,2.9,0.6,3.9,1.7c0.9,1.1,3.3,2.1,6.6,2.1c3.2,0,5.6-1.1,6.6-2.1 c0.9-1.1,2.3-1.7,3.9-1.7h2.4c1.5,0,2.9,0.6,3.9,1.7c0.9,1.1,3.3,2.1,6.6,2.1c3.7,0,6.5-1.4,6.9-2.8c0.2-0.6,0.8-1,1.4-1H82 c0.8,0,1.5,0.7,1.5,1.5v6C83.5,75.9,78.7,80.7,72.8,80.7z M18.9,67.6V70c0,4.2,3.4,7.7,7.7,7.7h46.2c4.2,0,7.7-3.4,7.7-7.7v-2.8 c-1.8,1.3-4.5,2-7.5,2c-3.7,0-7.1-1.2-8.8-3.2c-0.3-0.4-0.9-0.6-1.6-0.6h-2.4c-0.6,0-1.2,0.2-1.6,0.6c-1.7,2-5.1,3.2-8.8,3.2 c-3.7,0-7.1-1.2-8.8-3.2c-0.3-0.4-0.9-0.6-1.6-0.6h-2.9c-0.6,0-1.2,0.2-1.6,0.6c-1.7,2-5.1,3.2-8.8,3.2 C23.2,69.3,20.8,68.7,18.9,67.6z M80.3,57.5H19.9c-3.9,0-7.1-3.3-7.1-7.4c0-2,0.7-3.8,2-5.2c1.4-1.4,3.1-2.2,5-2.2h41 c0.5,0,1,0.3,1.3,0.7l2.1,3.5l4.6-3.9c0.3-0.2,0.6-0.4,1-0.4h10.5c3.9,0,7.1,3.3,7.1,7.4c0,2-0.7,3.8-2,5.2 C84,56.7,82.2,57.5,80.3,57.5z M19.9,45.6c-1.1,0-2.1,0.4-2.9,1.3c-0.8,0.8-1.2,2-1.2,3.2c0,2.4,1.8,4.4,4.1,4.4h60.4 c1.1,0,2.1-0.4,2.9-1.3c0.8-0.8,1.2-2,1.2-3.2c0-2.4-1.8-4.4-4.1-4.4h-9.9l-5.5,4.7c-0.3,0.3-0.8,0.4-1.2,0.3 c-0.4-0.1-0.8-0.3-1-0.7L60,45.6H19.9z M63.9,50.7c-0.1,0-0.2,0-0.2,0c-0.4-0.1-0.8-0.3-1-0.7L60,45.6H20.1c-0.8,0-1.5-0.7-1.5-1.5 v-6.8c0-0.8,0.7-1.5,1.5-1.5h59.3c0.8,0,1.5,0.7,1.5,1.5v6.8c0,0.8-0.7,1.5-1.5,1.5h-9l-5.5,4.7C64.6,50.6,64.3,50.7,63.9,50.7z M21.6,42.6h39.2c0.5,0,1,0.3,1.3,0.7l2.1,3.5l4.6-3.9c0.3-0.2,0.6-0.4,1-0.4h8v-3.8H21.6V42.6z M61.9,41.3 M73,69.3 c-4.2,0-7.8-1.5-9.3-3.8H59c-1.5,2.3-5.1,3.8-9.3,3.8c-4.2,0-7.8-1.5-9.3-3.8h-5.2c-1.5,2.3-5.1,3.8-9.3,3.8c-4.4,0-8.1-1.6-9.4-4 c-2.3-0.7-3.9-2.8-3.9-5.2c0-2.5,1.8-4.7,4.2-5.3c0.2-0.1,0.4-0.1,0.6-0.1H82c3,0,5.4,2.4,5.4,5.4c0,2.9-2.3,5.3-5.1,5.4 C80.8,67.8,77.2,69.3,73,69.3z M58.1,62.5h6.5c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,7,2.8c3.7,0,6.5-1.4,6.9-2.8 c0.2-0.6,0.8-1,1.4-1H82c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4H17.8c-0.1,0-0.1,0-0.2,0c-1.2,0.2-2.1,1.2-2.1,2.4 s0.9,2.2,2.1,2.4c0.2,0,0.3,0.1,0.4,0.1c0.4,0.2,0.8,0.5,0.9,0.9c0.4,1.3,3.2,2.8,7,2.8c3.7,0,6.5-1.4,6.9-2.8c0.2-0.6,0.8-1,1.4-1 h7c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,6.9,2.8c3.7,0,6.5-1.4,6.9-2.8C56.9,62.9,57.4,62.5,58.1,62.5z M82,38.9H17.4 c-0.8,0-1.5-0.7-1.5-1.5v-1.8c0-9,7.3-16.3,16.3-16.3h34.9c9,0,16.3,7.3,16.3,16.3v1.8C83.5,38.2,82.8,38.9,82,38.9z M18.9,35.9 h61.6v-0.3c0-7.3-6-13.3-13.3-13.3H32.3c-7.3,0-13.3,6-13.3,13.3V35.9z M31.6,31.4l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1 c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4C30.9,31.8,31.3,31.6,31.6,31.4z M48.9,31.4 l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4 C48.2,31.8,48.6,31.6,48.9,31.4z M65.6,31.4l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8 c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4C64.9,31.8,65.3,31.6,65.6,31.4z"></path> </g> <g id="_x35_"></g> <g id="_x36_"></g> <g id="_x37_"></g> <g id="_x38_"></g> <g id="_x39_"></g> <g id="_x31_0"></g> <g id="_x31_1"></g> <g id="_x31_2"></g> <g id="_x31_3"></g> <g id="_x31_4"></g> <g id="_x31_5"></g> <g id="_x31_6"></g> <g id="_x31_7"></g> <g id="_x31_8"></g> <g id="_x31_9"></g> <g id="_x32_0"></g> <g id="_x32_1"></g> <g id="_x32_2"></g> <g id="_x32_3"></g> <g id="_x32_4"></g> </g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/burguer.astro", void 0);

const $$Astro$6 = createAstro("https://www.veracines.es");
const $$Popcorn = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Popcorn;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"></path> <path d="M10 22 9 8"></path> <path d="m14 22 1-14"></path> <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/popcorn.astro", void 0);

const $$Astro$5 = createAstro("https://www.veracines.es");
const $$Icecream = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icecream;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"></path> <path d="M17 7A5 5 0 0 0 7 7"></path> <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/icecream.astro", void 0);

const $$Astro$4 = createAstro("https://www.veracines.es");
const $$Parking = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Parking;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5,22H19a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19A3,3,0,0,0,5,22ZM4,5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1ZM9,18a1,1,0,0,0,1-1V14h2a4,4,0,0,0,0-8H9A1,1,0,0,0,8,7V17A1,1,0,0,0,9,18ZM10,8h2a2,2,0,0,1,0,4H10Z"></path></g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/parking.astro", void 0);

const $$Astro$3 = createAstro("https://www.veracines.es");
const $$Projector = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Projector;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 7 3 5"></path> <path d="M9 6V3"></path> <path d="m13 7 2-2"></path> <circle cx="9" cy="13" r="3"></circle> <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"></path> <path d="M16 16h2"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/projector.astro", void 0);

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$Servicio = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Servicio;
  const { aclaracion, clasesExtra, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`flex flex-col items-center gap-4 text-center col-span-2 ${clasesExtra}`, "class")}> <div class="rounded-lg bg-white bg-opacity-70 border-2 text-center p-6 flex flex-col items-center min-h-40 w-full"> ${renderSlot($$result, $$slots["default"])} <div class="grid gap-2"> <h3 class="text-xl text-primary font-semibold">${label}</h3> <!--<p class="text-gray-500">Disponemos de un amplio parking para facilitar tu llegada. (Solo disponible en {CINES.find(x => x.url==='vera').nombre})</p>--> </div> </div> ${aclaracion && renderTemplate`<p class="text-gray-500 text-xs">${aclaracion}</p>`} </div>`;
}, "/Users/diego.ramos/veracines-web/src/components/Servicio.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Servicios;
  return renderTemplate`${maybeRenderHead()}<section class="w-full text-center"> <h3 class="text-xl text-primary text-center font-bold">Nuestros servicios</h3> <p class="text-center text-lg text-primary">
Además de una buena película al aire libre, disponemos de servicios como:
</p> <div class="grid grid-cols-4 gap-6 sm:grid-cols-6 lg:grid-cols-10 mt-5 "> ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Bocadillos y Hamburguesas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Burguer", $$Burguer, { "class": "h-12 w-12 text-primary" })} ` })} ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Palomitas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Popcorn", $$Popcorn, { "class": "h-12 w-12 text-primary" })} ` })} ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Helados" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icecream", $$Icecream, { "class": "h-12 w-12 text-primary" })} ` })} ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Proyector 2K", "clasesExtra": "sm:col-start-2 lg:col-start-auto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Projector", $$Projector, { "class": "h-12 w-12 text-primary" })} ` })} ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Parking Gratuito", "aclaracion": `Solo disponible en ${CINES.find((x) => x.url === "vera").nombre}`, "clasesExtra": "col-start-2 sm:col-start-auto" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Parking", $$Parking, { "class": "h-12 w-12 text-primary" })} ` })} </div> </section>`;
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
