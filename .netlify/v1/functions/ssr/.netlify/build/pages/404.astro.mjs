/* empty css                                       */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent } from '../chunks/astro/server_DJGT4-uI.mjs';
import 'kleur/colors';
import { $ as $$Typography, a as $$Layout } from '../chunks/Layout_xKkacihe.mjs';
import { $ as $$Action, M as Metadata } from '../chunks/metadata_BZOBfiP0.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://www.veracines.es");
const $$Error = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Error;
  const { error, message, contextMessage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="m-auto flex w-full flex-wrap place-items-center items-center justify-center text-primary"> <div class="m-5 mt-16 text-center"> ${renderComponent($$result, "Typography", $$Typography, { "as": "h1", "variant": "h3", "color": "primary", "class:list": "mb-10 font-bold" }, { "default": ($$result2) => renderTemplate`
error ${error}` })} ${renderComponent($$result, "Typography", $$Typography, { "as": "h2", "variant": "h2", "color": "neutral", "class:list": "text-primary" }, { "default": ($$result2) => renderTemplate` <p>${message}</p> ` })} <p class="mt-5 max-w-80 text-xl">${contextMessage}</p> ${renderComponent($$result, "Action", $$Action, { "class": "mt-7 text-center", "href": "/", "aria-label": "Volver a la p\xE1gina principal", "as": "a" }, { "default": ($$result2) => renderTemplate`
Ir al inicio
` })} </div> </section>`;
}, "/Users/diego.ramos/veracines-web/src/sections/Error.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": Metadata.home.description, "title": Metadata.home.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Error", $$Error, { "error": "404", "message": "P\xE1gina no encontrada", "contextMessage": "La p\xE1gina que buscas no existe o ha sido movida." })} </main> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/404.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
