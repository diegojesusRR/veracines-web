/* empty css                                     */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_BvmcH-Yh.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as $$Layout } from './404_BN4J_S75.mjs';

const $$Astro = createAstro("https://www.veracines.es");
const $$PrivacyPolicy = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PrivacyPolicy;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "description": "Pol\xEDtica de privacidad de La Velada IV ", "title": "Pol\xEDtica de privacidad - La Velada IV" })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/privacy-policy.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

export { $$PrivacyPolicy as default, $$file as file, $$url as url };