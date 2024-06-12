/* empty css                                     */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_BUDihmju.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './404_Tx7iyyIN.mjs';

const $$Astro = createAstro("https://www.veracines.es");
const $$LegalAdvice = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LegalAdvice;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Avido Legal de Veracines", "title": "Avido Legal - Veracines" })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/legal-advice.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/legal-advice.astro";
const $$url = "/legal-advice";

export { $$LegalAdvice as default, $$file as file, $$url as url };
