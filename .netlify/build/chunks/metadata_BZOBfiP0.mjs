import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot } from './astro/server_DJGT4-uI.mjs';
import 'kleur/colors';

const $$Astro = createAstro("https://www.veracines.es");
const $$Action = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Action;
  const { as: Tag, class: className, color, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class:list": [
    `inline-block rounded-lg skew-x-[-21deg] cursor-pointer border-2 border-${color ?? "primary"} text-center`,
    `font-semibold uppercase text-${color ?? "primary"}`,
    `px-5 py-2.5`,
    `before:absolute before:-inset-0.5 before:origin-right before:scale-x-0 before:bg-${color ?? "primary"}`,
    `hover:scale-110 hover:before:scale-x-100`,
    `aria-disabled:pointer-events-none aria-disabled:border-[#666] aria-disabled:bg-[#666] aria-disabled:text-[#111]`,
    `ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 motion-safe:hover:before:ease-out`,
    className
  ], ...props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<span${addAttribute(`inline-block skew-x-[21deg] text-xs`, "class")}>${renderSlot($$result2, $$slots["default"])}</span> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/components/Action.astro", void 0);

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

export { $$Action as $, Metadata as M };
