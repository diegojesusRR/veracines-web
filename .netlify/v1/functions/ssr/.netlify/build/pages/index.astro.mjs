/* empty css                                       */
import { g as createComponent, m as maybeRenderHead, j as renderComponent, r as renderTemplate, f as createAstro, i as addAttribute, s as spreadAttributes, k as renderSlot, l as Fragment, u as unescapeHTML } from '../chunks/astro/server_DfvI8eY9.mjs';
import 'kleur/colors';
import { C as CINES, G as GRUPOSPROYECCIONES, a as $$Layout } from '../chunks/Layout_tgm-K7qw.mjs';
import { $ as $$Action, M as Metadata } from '../chunks/metadata_Dz0VPo5a.mjs';
/* empty css                                 */
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center gap-6 py-4 text-center"> <img src="/img/veracines-logo.png" alt="Logo de Veracines" class="w-36 lg:w-48" width="192" height="82" loading="eager" decoding="async" fetchpriority="high"> <div class="space-y-3 max-w-xl"> <h1 class="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
Cine de verano en<br> <span class="text-secondary">Vera, Almería</span> </h1> <p class="text-gray-600 text-base leading-relaxed">
Dos salas, una pasión. Vive el mejor cine al <strong>aire libre</strong> en el
<strong>Cine Terraza de Vera</strong> cada verano, o disfruta de la cartelera
            durante todo el año en el <strong>Cine Regio</strong>.
            Estrenos, películas para toda la familia y el mejor ambiente en plena
            provincia de Almería.
</p> </div> <!-- Pills de características --> <ul class="flex flex-wrap justify-center gap-2 text-md font-semibold" aria-label="Características"> <li class="flex items-center gap-1.5 bg-primary/8 text-primary rounded-full px-3 py-1.5"> <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m8.66-13l-.87.5M4.21 17.5l-.87.5M20.66 17.5l-.87-.5M4.21 6.5l-.87-.5M21 12h-1M4 12H3"></path> </svg>
Cine al aire libre
</li> <li class="flex items-center gap-1.5 bg-secondary/8 text-secondary rounded-full px-3 py-1.5"> <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg>
Todo el año
</li> <li class="flex items-center gap-1.5 bg-primary/8 text-primary rounded-full px-3 py-1.5"> <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0"></path> </svg>
Para toda la familia
</li> <li class="flex items-center gap-1.5 bg-secondary/8 text-secondary rounded-full px-3 py-1.5"> <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"></path> </svg>
Últimos estrenos
</li> </ul> <!-- CTAs --> <div class="flex flex-col sm:flex-row gap-3 mt-1"> ${renderComponent($$result, "Action", $$Action, { "as": "a", "href": "/cartelera-vera/", "color": "primary" }, { "default": ($$result2) => renderTemplate`
🌙 Cartelera Terraza Vera
` })} ${renderComponent($$result, "Action", $$Action, { "as": "a", "href": "/cartelera-regio/", "color": "secondary" }, { "default": ($$result2) => renderTemplate`
🎬 Cartelera Cine Regio
` })} </div> </section>`;
}, "/Users/diego.ramos/veracines-web/src/sections/Hero.astro", void 0);

const $$Astro$a = createAstro("https://www.veracines.es");
const $$UbicacionCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$UbicacionCard;
  const { cine } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="ubicacion-card rounded-2xl overflow-hidden shadow-lg bg-white transition-shadow hover:shadow-2xl"${addAttribute(`--cine-color: var(--color-${cine.color})`, "style")} data-astro-cid-ntj7ie3s> <!-- Franja superior de color --> <div class="ubicacion-header h-2 w-full" data-astro-cid-ntj7ie3s></div> <div class="flex flex-col lg:flex-row" data-astro-cid-ntj7ie3s> <!-- Info --> <div class="flex flex-col gap-4 p-6" data-astro-cid-ntj7ie3s> <!-- Título + botón debajo --> <div class="flex flex-col gap-3" data-astro-cid-ntj7ie3s> <div data-astro-cid-ntj7ie3s> <h4 class="ubicacion-title text-xl font-extrabold leading-tight mb-1" data-astro-cid-ntj7ie3s> ${cine.nombre} </h4> </div> ${renderComponent($$result, "Action", $$Action, { "class": "w-full sm:w-fit", "color": cine.color, "as": "a", "href": `/cartelera-${cine.url}/`, "aria-label": `Enlace a la cartelera de ${cine.nombre}`, "data-astro-cid-ntj7ie3s": true }, { "default": ($$result2) => renderTemplate`
🎬 Ver cartelera
` })} </div> <p class="text-gray-600 text-sm leading-relaxed" data-astro-cid-ntj7ie3s> ${cine.localizacion.descripcion} </p> <!-- Mapa --> <div class="min-h-[220px] overflow-hidden" data-astro-cid-ntj7ie3s> <iframe class="w-full h-full min-h-[220px]"${addAttribute(`https://www.google.com/maps/embed?pb=${cine.localizacion.ubicacionKey}`, "src")} width="600" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"${addAttribute(`Mapa de ${cine.nombre}`, "title")} data-astro-cid-ntj7ie3s></iframe> </div> <!-- Detalles rápidos --> <ul class="flex flex-col gap-2 text-sm mt-auto" data-astro-cid-ntj7ie3s> <li class="flex items-start gap-2 text-gray-500" data-astro-cid-ntj7ie3s> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-ntj7ie3s> <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" data-astro-cid-ntj7ie3s></path> </svg> <span data-astro-cid-ntj7ie3s>${cine.localizacion.direccion}</span> </li> ${cine.horaFijaProyeccion && renderTemplate`<li class="flex items-center gap-2 text-gray-500" data-astro-cid-ntj7ie3s> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-ntj7ie3s> <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ntj7ie3s></path> </svg> <span data-astro-cid-ntj7ie3s>Proyecciones a las <strong data-astro-cid-ntj7ie3s>${cine.horaFijaProyeccion}h</strong></span> </li>`} <li class="flex items-center gap-2 text-gray-500" data-astro-cid-ntj7ie3s> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" data-astro-cid-ntj7ie3s> <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" data-astro-cid-ntj7ie3s></path> </svg> <span data-astro-cid-ntj7ie3s>Venta online: <strong data-astro-cid-ntj7ie3s>${cine.ventaOnline ? "Disponible" : "No disponible"}</strong></span> </li> </ul> </div> </div> </div> `;
}, "/Users/diego.ramos/veracines-web/src/components/UbicacionCard.astro", void 0);

const $$Ubicaciones = createComponent(($$result, $$props, $$slots) => {
  const regio = CINES.find((cine) => cine.url === "regio");
  const vera = CINES.find((cine) => cine.url === "vera");
  return renderTemplate`${maybeRenderHead()}<section id="ubicaciones" aria-labelledby="ubicaciones-titulo" class="flex flex-col gap-6"> <div class="text-center space-y-2"> <h2 id="ubicaciones-titulo" class="text-2xl font-extrabold text-primary">
Cines en Vera, Almería
</h2> <p class="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
Disfruta del mejor cine en Vera. Dos salas únicas con la mejor cartelera de películas
            para toda la familia en plena provincia de Almería.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"> ${renderComponent($$result, "UbicacionCard", $$UbicacionCard, { "cine": vera })} ${renderComponent($$result, "UbicacionCard", $$UbicacionCard, { "cine": regio })} </div>  </section>`;
}, "/Users/diego.ramos/veracines-web/src/components/ubicaciones.astro", void 0);

const CONTACTO = {
  telefono: {
    prefijo: "34",
    numero: "660 391 365"
  },
  email: "veracines@hotmail.es"
};

const $$Astro$9 = createAstro("https://www.veracines.es");
const $$Phone = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Phone;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/phone.astro", void 0);

const $$Astro$8 = createAstro("https://www.veracines.es");
const $$Whatsapp = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Whatsapp;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} fill="currentColor" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/whatsapp.astro", void 0);

const $$Astro$7 = createAstro("https://www.veracines.es");
const $$Email = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Email;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM16 12V13.5C16 14.8807 17.1193 16 18.5 16V16C19.8807 16 21 14.8807 21 13.5V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/email.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const tel = `+${CONTACTO.telefono.prefijo}${CONTACTO.telefono.numero.replaceAll(" ", "")}`;
  const wa = `https://wa.me/${CONTACTO.telefono.prefijo}${CONTACTO.telefono.numero.replaceAll(" ", "")}`;
  return renderTemplate`${maybeRenderHead()}<section aria-labelledby="contacto-titulo"> <div class="text-center mb-6 space-y-2"> <h2 id="contacto-titulo" class="text-2xl font-extrabold text-primary">
¿Tienes alguna pregunta?
</h2> <p class="text-gray-500 text-sm max-w-sm mx-auto">
Estamos encantados de ayudarte. Elige el canal que prefieras.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3"> <a${addAttribute(`tel:${tel}`, "href")} class="contact-card group flex sm:flex-col items-center gap-4 sm:gap-3 rounded-2xl bg-white border border-gray-100 shadow-sm p-4 sm:p-6 sm:text-center transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-primary/30"${addAttribute(`Llamar al ${CONTACTO.telefono.numero}`, "aria-label")}> <div class="contact-icon text-primary shrink-0 transition-transform duration-200 group-hover:scale-110"> ${renderComponent($$result, "Phone", $$Phone, { "class": "w-8 h-8" })} </div> <div class="min-w-0"> <p class="text-sm font-bold text-gray-700">Teléfono</p> <p class="text-xs text-gray-400 truncate">${CONTACTO.telefono.numero}</p> </div> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300 group-hover:text-primary ml-auto sm:hidden transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path> </svg> </a> <a${addAttribute(wa, "href")} target="_blank" rel="noopener noreferrer" class="contact-card group flex sm:flex-col items-center gap-4 sm:gap-3 rounded-2xl bg-white border border-gray-100 shadow-sm p-4 sm:p-6 sm:text-center transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-green-300" aria-label="Contactar por WhatsApp"> <div class="contact-icon text-[#25D366] shrink-0 transition-transform duration-200 group-hover:scale-110"> ${renderComponent($$result, "Whatsapp", $$Whatsapp, { "class": "w-8 h-8" })} </div> <div class="min-w-0"> <p class="text-sm font-bold text-gray-700">WhatsApp</p> <p class="text-xs text-gray-400">${CONTACTO.telefono.numero}</p> </div> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300 group-hover:text-green-400 ml-auto sm:hidden transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path> </svg> </a> <a${addAttribute(`mailto:${CONTACTO.email}`, "href")} class="contact-card group flex sm:flex-col items-center gap-4 sm:gap-3 rounded-2xl bg-white border border-gray-100 shadow-sm p-4 sm:p-6 sm:text-center transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-primary/30"${addAttribute(`Enviar email a ${CONTACTO.email}`, "aria-label")}> <div class="contact-icon text-primary shrink-0 transition-transform duration-200 group-hover:scale-110"> ${renderComponent($$result, "Email", $$Email, { "class": "w-8 h-8" })} </div> <div class="min-w-0"> <p class="text-sm font-bold text-gray-700">Email</p> <p class="text-xs text-gray-400 truncate">${CONTACTO.email}</p> </div> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-300 group-hover:text-primary ml-auto sm:hidden transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path> </svg> </a> </div> </section>`;
}, "/Users/diego.ramos/veracines-web/src/components/contacto.astro", void 0);

const $$Astro$6 = createAstro("https://www.veracines.es");
const $$Burguer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Burguer;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} fill="currentColor" viewBox="0 0 100 100" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" stroke="currentColor" stroke-width="3.1"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="_x31_"></g> <g id="_x32_"></g> <g id="_x33_"></g> <g id="_x34_"> <path d="M72.8,80.7H26.6c-5.9,0-10.7-4.8-10.7-10.7v-6c0-0.8,0.7-1.5,1.5-1.5h0.1c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,7,2.8 c3.3,0,5.6-1.1,6.6-2.1c0.9-1.1,2.3-1.7,3.9-1.7h2.9c1.5,0,2.9,0.6,3.9,1.7c0.9,1.1,3.3,2.1,6.6,2.1c3.2,0,5.6-1.1,6.6-2.1 c0.9-1.1,2.3-1.7,3.9-1.7h2.4c1.5,0,2.9,0.6,3.9,1.7c0.9,1.1,3.3,2.1,6.6,2.1c3.7,0,6.5-1.4,6.9-2.8c0.2-0.6,0.8-1,1.4-1H82 c0.8,0,1.5,0.7,1.5,1.5v6C83.5,75.9,78.7,80.7,72.8,80.7z M18.9,67.6V70c0,4.2,3.4,7.7,7.7,7.7h46.2c4.2,0,7.7-3.4,7.7-7.7v-2.8 c-1.8,1.3-4.5,2-7.5,2c-3.7,0-7.1-1.2-8.8-3.2c-0.3-0.4-0.9-0.6-1.6-0.6h-2.4c-0.6,0-1.2,0.2-1.6,0.6c-1.7,2-5.1,3.2-8.8,3.2 c-3.7,0-7.1-1.2-8.8-3.2c-0.3-0.4-0.9-0.6-1.6-0.6h-2.9c-0.6,0-1.2,0.2-1.6,0.6c-1.7,2-5.1,3.2-8.8,3.2 C23.2,69.3,20.8,68.7,18.9,67.6z M80.3,57.5H19.9c-3.9,0-7.1-3.3-7.1-7.4c0-2,0.7-3.8,2-5.2c1.4-1.4,3.1-2.2,5-2.2h41 c0.5,0,1,0.3,1.3,0.7l2.1,3.5l4.6-3.9c0.3-0.2,0.6-0.4,1-0.4h10.5c3.9,0,7.1,3.3,7.1,7.4c0,2-0.7,3.8-2,5.2 C84,56.7,82.2,57.5,80.3,57.5z M19.9,45.6c-1.1,0-2.1,0.4-2.9,1.3c-0.8,0.8-1.2,2-1.2,3.2c0,2.4,1.8,4.4,4.1,4.4h60.4 c1.1,0,2.1-0.4,2.9-1.3c0.8-0.8,1.2-2,1.2-3.2c0-2.4-1.8-4.4-4.1-4.4h-9.9l-5.5,4.7c-0.3,0.3-0.8,0.4-1.2,0.3 c-0.4-0.1-0.8-0.3-1-0.7L60,45.6H19.9z M63.9,50.7c-0.1,0-0.2,0-0.2,0c-0.4-0.1-0.8-0.3-1-0.7L60,45.6H20.1c-0.8,0-1.5-0.7-1.5-1.5 v-6.8c0-0.8,0.7-1.5,1.5-1.5h59.3c0.8,0,1.5,0.7,1.5,1.5v6.8c0,0.8-0.7,1.5-1.5,1.5h-9l-5.5,4.7C64.6,50.6,64.3,50.7,63.9,50.7z M21.6,42.6h39.2c0.5,0,1,0.3,1.3,0.7l2.1,3.5l4.6-3.9c0.3-0.2,0.6-0.4,1-0.4h8v-3.8H21.6V42.6z M61.9,41.3 M73,69.3 c-4.2,0-7.8-1.5-9.3-3.8H59c-1.5,2.3-5.1,3.8-9.3,3.8c-4.2,0-7.8-1.5-9.3-3.8h-5.2c-1.5,2.3-5.1,3.8-9.3,3.8c-4.4,0-8.1-1.6-9.4-4 c-2.3-0.7-3.9-2.8-3.9-5.2c0-2.5,1.8-4.7,4.2-5.3c0.2-0.1,0.4-0.1,0.6-0.1H82c3,0,5.4,2.4,5.4,5.4c0,2.9-2.3,5.3-5.1,5.4 C80.8,67.8,77.2,69.3,73,69.3z M58.1,62.5h6.5c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,7,2.8c3.7,0,6.5-1.4,6.9-2.8 c0.2-0.6,0.8-1,1.4-1H82c1.3,0,2.4-1.1,2.4-2.4c0-1.3-1.1-2.4-2.4-2.4H17.8c-0.1,0-0.1,0-0.2,0c-1.2,0.2-2.1,1.2-2.1,2.4 s0.9,2.2,2.1,2.4c0.2,0,0.3,0.1,0.4,0.1c0.4,0.2,0.8,0.5,0.9,0.9c0.4,1.3,3.2,2.8,7,2.8c3.7,0,6.5-1.4,6.9-2.8c0.2-0.6,0.8-1,1.4-1 h7c0.6,0,1.2,0.4,1.4,1c0.4,1.3,3.2,2.8,6.9,2.8c3.7,0,6.5-1.4,6.9-2.8C56.9,62.9,57.4,62.5,58.1,62.5z M82,38.9H17.4 c-0.8,0-1.5-0.7-1.5-1.5v-1.8c0-9,7.3-16.3,16.3-16.3h34.9c9,0,16.3,7.3,16.3,16.3v1.8C83.5,38.2,82.8,38.9,82,38.9z M18.9,35.9 h61.6v-0.3c0-7.3-6-13.3-13.3-13.3H32.3c-7.3,0-13.3,6-13.3,13.3V35.9z M31.6,31.4l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1 c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4C30.9,31.8,31.3,31.6,31.6,31.4z M48.9,31.4 l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4 C48.2,31.8,48.6,31.6,48.9,31.4z M65.6,31.4l3.8-3.8c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0l-3.8,3.8 c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4C64.9,31.8,65.3,31.6,65.6,31.4z"></path> </g> <g id="_x35_"></g> <g id="_x36_"></g> <g id="_x37_"></g> <g id="_x38_"></g> <g id="_x39_"></g> <g id="_x31_0"></g> <g id="_x31_1"></g> <g id="_x31_2"></g> <g id="_x31_3"></g> <g id="_x31_4"></g> <g id="_x31_5"></g> <g id="_x31_6"></g> <g id="_x31_7"></g> <g id="_x31_8"></g> <g id="_x31_9"></g> <g id="_x32_0"></g> <g id="_x32_1"></g> <g id="_x32_2"></g> <g id="_x32_3"></g> <g id="_x32_4"></g> </g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/burguer.astro", void 0);

const $$Astro$5 = createAstro("https://www.veracines.es");
const $$Popcorn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Popcorn;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"></path> <path d="M10 22 9 8"></path> <path d="m14 22 1-14"></path> <path d="M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/popcorn.astro", void 0);

const $$Astro$4 = createAstro("https://www.veracines.es");
const $$Icecream = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icecream;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"></path> <path d="M17 7A5 5 0 0 0 7 7"></path> <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/icecream.astro", void 0);

const $$Astro$3 = createAstro("https://www.veracines.es");
const $$Parking = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Parking;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M5,22H19a3,3,0,0,0,3-3V5a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V19A3,3,0,0,0,5,22ZM4,5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1ZM9,18a1,1,0,0,0,1-1V14h2a4,4,0,0,0,0-8H9A1,1,0,0,0,8,7V17A1,1,0,0,0,9,18ZM10,8h2a2,2,0,0,1,0,4H10Z"></path></g></svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/parking.astro", void 0);

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$Projector = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Projector;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M5 7 3 5"></path> <path d="M9 6V3"></path> <path d="m13 7 2-2"></path> <circle cx="9" cy="13" r="3"></circle> <path d="M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"></path> <path d="M16 16h2"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/projector.astro", void 0);

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$Servicio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Servicio;
  const { aclaracion, label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="servicio-card flex flex-col items-center gap-2 text-center" data-astro-cid-y3dd2xj4> <div class="servicio-inner w-full rounded-2xl bg-white border border-gray-100 shadow-sm p-4 sm:p-5
                flex flex-row items-center gap-4 sm:flex-col sm:gap-3
                transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-default" data-astro-cid-y3dd2xj4> <div class="servicio-icon text-primary shrink-0" data-astro-cid-y3dd2xj4> ${renderSlot($$result, $$slots["default"])} </div> <div class="flex flex-col gap-0.5 sm:items-center" data-astro-cid-y3dd2xj4> <p class="text-sm font-bold text-primary leading-tight sm:text-center text-left" data-astro-cid-y3dd2xj4>${label}</p> ${aclaracion && renderTemplate`<p class="text-gray-400 text-[11px] leading-snug text-left sm:text-center" data-astro-cid-y3dd2xj4>${aclaracion}</p>`} </div> </div> </div> `;
}, "/Users/diego.ramos/veracines-web/src/components/Servicio.astro", void 0);

const $$Astro = createAstro("https://www.veracines.es");
const $$Climatizacion = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Climatizacion;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="2"></circle> <path d="M12 4a4 4 0 0 1 4 4 2 2 0 0 1-2 2h-1"></path> <path d="M12 20a4 4 0 0 1-4-4 2 2 0 0 1 2-2h1"></path> <path d="M4 12a4 4 0 0 1 4-4 2 2 0 0 1 2 2v1"></path> <path d="M20 12a4 4 0 0 1-4 4 2 2 0 0 1-2-2v-1"></path> </svg>`;
}, "/Users/diego.ramos/veracines-web/src/components/icons/climatizacion.astro", void 0);

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const vera = CINES.find((x) => x.url === "vera");
  const regio = CINES.find((x) => x.url === "regio");
  return renderTemplate`${maybeRenderHead()}<section class="w-full" aria-labelledby="servicios-titulo"> <div class="text-center mb-6 space-y-2"> <h2 id="servicios-titulo" class="text-2xl font-extrabold text-primary">
Todo lo que necesitas
</h2> <p class="text-gray-500 text-sm max-w-md mx-auto">
Más que una película — bocatería, palomitas, helados y todo el confort
            para que solo te preocupes de disfrutar.
</p> </div> <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"> ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Proyector 2K" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Projector", $$Projector, {})} ` })} ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Palomitas" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Popcorn", $$Popcorn, {})} ` })} ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Helados" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Icecream", $$Icecream, {})} ` })} ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Bocadillos y Hamburguesas", "aclaracion": `Solo en ${vera?.nombre}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Burguer", $$Burguer, {})} ` })} ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Parking Gratuito", "aclaracion": `Solo en ${vera?.nombre}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Parking", $$Parking, {})} ` })} ${renderComponent($$result, "Servicio", $$Servicio, { "label": "Climatizaci\xF3n", "aclaracion": `Solo en ${regio?.nombre}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Climatizacion", $$Climatizacion, {})} ` })} </div> </section>`;
}, "/Users/diego.ramos/veracines-web/src/components/Servicios.astro", void 0);

const $$ProximasProyeccionesCarousel = createComponent(($$result, $$props, $$slots) => {
  const DIASSEMANA = ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"];
  const now = /* @__PURE__ */ new Date();
  const grupos = GRUPOSPROYECCIONES.map((g) => ({
    ...g,
    proximasProyecciones: g.proyecciones.filter((p) => p.fecha >= now).sort((a, b) => a.fecha.getTime() - b.fecha.getTime())
  })).filter((g) => g.proximasProyecciones.length > 0).sort(
    (a, b) => a.proximasProyecciones[0].fecha.getTime() - b.proximasProyecciones[0].fecha.getTime()
  ).map((g) => {
    const diasMap = /* @__PURE__ */ new Map();
    g.proximasProyecciones.forEach((p) => {
      const key = `${p.fecha.getFullYear()}${String(p.fecha.getMonth()).padStart(2, "0")}${String(p.fecha.getDate()).padStart(2, "0")}`;
      if (!diasMap.has(key)) {
        diasMap.set(key, {
          label: `${DIASSEMANA[p.fecha.getDay()]} ${p.fecha.getDate()}`,
          horas: []
        });
      }
      diasMap.get(key).horas.push(`${p.hora}h${p.vose ? " (V)" : ""}`);
    });
    const dias = [...diasMap.entries()].sort((a, b) => a[0].localeCompare(b[0])).map(([, v]) => v);
    return { ...g, dias };
  });
  return renderTemplate`${grupos.length > 0 && renderTemplate`${maybeRenderHead()}<section aria-labelledby="carousel-titulo" class="w-full overflow-x-clip" data-astro-cid-glrkoo2e><div class="flex items-center justify-between mb-4" data-astro-cid-glrkoo2e><h2 id="carousel-titulo" class="text-2xl font-extrabold text-primary" data-astro-cid-glrkoo2e>
Próximas proyecciones
</h2><div class="flex gap-2" data-astro-cid-glrkoo2e><button id="carousel-prev" aria-label="Anterior" class="carousel-btn" data-astro-cid-glrkoo2e><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" data-astro-cid-glrkoo2e><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" data-astro-cid-glrkoo2e></path></svg></button><button id="carousel-next" aria-label="Siguiente" class="carousel-btn" data-astro-cid-glrkoo2e><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" data-astro-cid-glrkoo2e><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-astro-cid-glrkoo2e></path></svg></button></div></div><!-- Viewport --><div class="w-full sm:max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-xl" data-astro-cid-glrkoo2e><div id="carousel-viewport" class="relative w-full" data-astro-cid-glrkoo2e><div id="carousel-track" class="flex" style="width: 100%; transition: transform 0.35s cubic-bezier(0.25, 1, 0.5, 1); will-change: transform;" data-astro-cid-glrkoo2e>${grupos.map(({ cine, pelicula, dias }, i) => renderTemplate`<a${addAttribute(`/peliculas/${pelicula.id}`, "href")} class="carousel-slide block overflow-hidden"${addAttribute(`--cine-color: var(--color-${cine.color}); flex: 0 0 100%; max-width: 100%;`, "style")}${addAttribute(i !== 0, "aria-hidden")} data-astro-cid-glrkoo2e><!-- MOBILE: imagen de fondo + info superpuesta --><div class="relative sm:hidden aspect-[2/3]" data-astro-cid-glrkoo2e><img${addAttribute(`/img/peliculas/${pelicula.image}`, "src")}${addAttribute(`Cartel de ${pelicula.nombre}`, "alt")} class="absolute inset-0 w-full h-full object-cover object-top"${addAttribute(i === 0 ? "eager" : "lazy", "loading")} decoding="async" width="400" height="600"${addAttribute(pelicula.id, "data-poster-id")} data-astro-cid-glrkoo2e><div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" data-astro-cid-glrkoo2e></div><div class="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-3" data-astro-cid-glrkoo2e><div data-astro-cid-glrkoo2e><span class="inline-block cine-badge text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-2" data-astro-cid-glrkoo2e>${cine.nombre}</span><h3 class="text-white text-2xl font-extrabold leading-tight drop-shadow" data-astro-cid-glrkoo2e>${pelicula.nombre}</h3></div><div class="grid grid-cols-3 gap-1.5" data-astro-cid-glrkoo2e>${dias.slice(0, 6).map((dia) => renderTemplate`<div class="rounded-lg bg-white/15 backdrop-blur-sm border border-white/20 px-2 py-1.5 text-center" data-astro-cid-glrkoo2e><p class="text-white text-[11px] font-bold leading-tight" data-astro-cid-glrkoo2e>${dia.label}</p><p class="text-white/70 text-[10px] mt-0.5" data-astro-cid-glrkoo2e>${dia.horas.join(", ")}</p></div>`)}</div></div></div><!-- DESKTOP: info izquierda + póster derecha --><div class="hidden sm:flex relative h-[320px] overflow-hidden w-full max-w-full rounded-2xl" data-astro-cid-glrkoo2e><img${addAttribute(`/img/peliculas/${pelicula.image}`, "src")} alt="" aria-hidden="true" class="absolute inset-0 w-full h-full object-cover scale-110 blur-lg brightness-[0.25]"${addAttribute(i === 0 ? "eager" : "lazy", "loading")} decoding="async" width="800" height="450" data-astro-cid-glrkoo2e><div class="relative z-10 flex items-center justify-between gap-8 p-8 w-full" data-astro-cid-glrkoo2e><!-- Info izquierda --><div class="flex flex-col gap-4 flex-1 min-w-0" data-astro-cid-glrkoo2e><div data-astro-cid-glrkoo2e><span class="inline-block cine-badge text-white text-[10px] font-bold px-2.5 py-1 rounded-full mb-3" data-astro-cid-glrkoo2e>${cine.nombre}</span><h3 class="text-white text-3xl font-extrabold leading-tight drop-shadow" data-astro-cid-glrkoo2e>${pelicula.nombre}</h3><p class="text-white/50 text-xs mt-1" data-astro-cid-glrkoo2e>${pelicula.edadRedomendada}</p></div><!-- Grid de días --><div class="grid grid-cols-3 gap-2" data-astro-cid-glrkoo2e>${dias.slice(0, 6).map((dia) => renderTemplate`<div class="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-2 text-center" data-astro-cid-glrkoo2e><p class="text-white text-xs font-bold leading-tight" data-astro-cid-glrkoo2e>${dia.label}</p><p class="text-white/60 text-[11px] mt-0.5" data-astro-cid-glrkoo2e>${dia.horas.join(", ")}</p></div>`)}</div></div><!-- Póster derecha --><div class="shrink-0 w-44" data-astro-cid-glrkoo2e><img${addAttribute(`/img/peliculas/${pelicula.image}`, "src")}${addAttribute(`Cartel de ${pelicula.nombre}`, "alt")} class="w-full rounded-xl border-4 border-white/30 shadow-2xl object-cover"${addAttribute(i === 0 ? "eager" : "lazy", "loading")} decoding="async" width="176" height="264"${addAttribute(pelicula.id, "data-poster-id")} data-astro-cid-glrkoo2e></div></div></div></a>`)}</div></div></div><!-- Dots --><div id="carousel-dots" class="flex justify-center items-center gap-3 mt-4" role="tablist" data-astro-cid-glrkoo2e></div></section>`}`;
}, "/Users/diego.ramos/veracines-web/src/components/ProximasProyeccionesCarousel.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const schemaOrg = CINES.map((cine) => ({
    "@type": "MovieTheater",
    "name": cine.nombre,
    "url": `https://www.veracines.es/cartelera-${cine.url}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": cine.localizacion.direccion,
      "addressLocality": cine.localizacion.ciudad,
      "addressRegion": cine.localizacion.provincia,
      "postalCode": cine.localizacion.codigoPostal,
      "addressCountry": cine.localizacion.adressCounty
    },
    "openingHoursSpecification": cine.horaFijaProyeccion ? [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": cine.horaFijaProyeccion,
      "closes": "23:59"
    }] : void 0
  }));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata.home.description, "title": Metadata.home.title, "canonical": Metadata.home.canonical }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<main class="max-w-3xl mx-auto px-4"> <div class="grid gap-14"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ProximasProyeccionesCarousel", $$ProximasProyeccionesCarousel, {})} ${renderComponent($$result2, "Ubicaciones", $$Ubicaciones, {})} ${renderComponent($$result2, "Servicios", $$Servicios, {})} ${renderComponent($$result2, "Contacto", $$Contacto, {})} </div> </main> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@graph": schemaOrg
  }))) })}` })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/index.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
