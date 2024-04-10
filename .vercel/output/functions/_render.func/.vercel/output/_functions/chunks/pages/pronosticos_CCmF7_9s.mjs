/* empty css                         */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, e as addAttribute, n as renderTransition } from '../astro_CCLsmAZA.mjs';
import 'kleur/colors';
import { g as getSession } from './__HFCGfhsa.mjs';
import { $ as $$Typography, b as $$Action, a as $$Layout } from './404_B1kBpnNj.mjs';
import { $ as $$Image } from './generic_KVVjvbFm.mjs';
import { createRemoteDatabaseClient } from '@astrojs/db/runtime';
import { Votes, eq } from '@astrojs/db/dist/runtime/config.js';
import { C as COMBATS, R as REY_DE_LA_PISTA_ID } from './get-forecast-by-combat-id_BQMTJUyO.mjs';
/* empty css                                */
/* empty css                         */

const $$Astro$2 = createAstro("https://www.veracines.es");
const $$Intro = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Intro;
  return renderTemplate`${maybeRenderHead()}<section class="relative flex min-h-96 flex-row justify-between lg:min-h-min"> <div class="flex max-w-lg flex-col items-center justify-center px-10"> ${renderComponent($$result, "Typography", $$Typography, { "class": "mb-10 -skew-y-6 text-wrap text-center", "color": "primary", "as": "h1", "variant": "atomic-title" }, { "default": ($$result2) => renderTemplate`¡haz tu pronóstico!` })} ${renderComponent($$result, "Typography", $$Typography, { "as": "p", "color": "white", "variant": "body", "class": "mb-10" }, { "default": ($$result2) => renderTemplate`
Haz tu predicción de <strong>quién ganará cada combate de La Velada IV</strong>. Comparte tu
			pronóstico en redes sociales e invita a tus amigos a participar.
` })} ${renderComponent($$result, "Action", $$Action, { "id": "login", "class": "w-full text-sm md:text-base", "as": "button", "aria-label": "Iniciar sesi\xF3n de usuario" }, { "default": ($$result2) => renderTemplate`
¡Inicia sesión para participar!
` })} <small class="mt-2">Para participar, necesitas una cuenta de Twitch</small> </div> <aside class="absolute -z-10 opacity-20 lg:relative lg:opacity-100"> <img alt="Imagen de La Velada IV con todos los luchadores" src="https://cdn.lavelada.dev/pronostico-background.webp" style="mask-image: linear-gradient(black 80%, transparent);"> </aside> </section> `;
}, "/Users/diego.ramos/veracines-web/src/components/Pronosticos/Intro.astro", void 0);

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.veracines.es", "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");

const $$Astro$1 = createAstro("https://www.veracines.es");
const $$Vote = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Vote;
  const getCombatById = (id) => {
    return COMBATS.find((combat) => combat.id === id);
  };
  const getBoxerNames = (boxerIds) => {
    return boxerIds.map((boxerId) => `Boxeador ${boxerId}`);
  };
  const createImgRoute = (combateNumber, slug) => {
    return `https://cdn.lavelada.dev/boxers/vote/vote-${combateNumber}-${slug}.webp`;
  };
  const { user } = Astro2.props;
  const userId = user.id;
  const votes = await db.select({ combatId: Votes.combatId, voteId: Votes.voteId }).from(Votes).where(eq(Votes.userId, userId));
  const userVotes = {};
  votes.forEach((vote) => {
    userVotes[vote.combatId] = vote.voteId;
  });
  return renderTemplate`${maybeRenderHead()}<section class="w-full" data-astro-cid-ovmyrw2r> ${renderComponent($$result, "Typography", $$Typography, { "class": "mb-8 text-center", "color": "white", "as": "h1", "variant": "atomic-title", "data-astro-cid-ovmyrw2r": true }, { "default": ($$result2) => renderTemplate`¡haz tu pronóstico!` })} ${renderComponent($$result, "Typography", $$Typography, { "class": "mb-2 text-center", "color": "white", "as": "p", "variant": "medium", "data-astro-cid-ovmyrw2r": true }, { "default": ($$result2) => renderTemplate`Vota tus ganadores para cada combate haciendo clic encima de cada uno` })} <div class="flex items-center justify-center gap-4" data-astro-cid-ovmyrw2r> <img class="size-12 rounded-full"${addAttribute(user.image, "src")}${addAttribute(`Avatar del usuario ${user.name}`, "alt")} data-astro-cid-ovmyrw2r> <div class="flex flex-col justify-center" data-astro-cid-ovmyrw2r> <h4 class="text-lg font-bold" data-astro-cid-ovmyrw2r>${user.name}</h4> <button id="logout" class="text-sm font-light text-yellow-300" data-astro-cid-ovmyrw2r>Cerrar sesión</button> </div> </div> <ul class="flex flex-col items-center justify-center" data-astro-cid-ovmyrw2r> ${COMBATS.map((combat, index) => {
    const combatData = getCombatById(combat.id);
    if (!combatData)
      return null;
    const boxerNames = combatData ? getBoxerNames(combatData.boxers) : [];
    const isKingOfTheHill = combatData.id === REY_DE_LA_PISTA_ID;
    if (isKingOfTheHill) {
      return renderTemplate`<li class="not-completed relative flex w-full max-w-3xl flex-col justify-center md:justify-between" data-astro-cid-ovmyrw2r> ${renderComponent($$result, "Image", $$Image, { "width": combatData.titleSize[0], "height": combatData.titleSize[1], "loading": "lazy", "class:list": ["pointer-events-none m-auto -mb-20 h-auto w-48 md:inset-0 md:w-64"], "src": `https://cdn.lavelada.dev/matches/title-${combat.id}.webp`, "alt": `Fotograf\xEDa del combate entre ${boxerNames.join(", ")}`, "style": "mask-image: linear-gradient(black 50%, transparent)", "data-astro-cid-ovmyrw2r": true, "data-astro-transition-scope": renderTransition($$result, "2gyryil6", "", `title-image-${combat.id}`) })} <ul class="grid grid-cols-5 gap-x-4" data-astro-cid-ovmyrw2r> ${combatData.boxers.map((boxer) => renderTemplate`<button${addAttribute([
        "vote-team king-team group relative max-w-60 saturate-0 transition hover:scale-110 hover:saturate-100",
        { "is-voted": userVotes[combatData.id] === boxer }
      ], "class:list")}${addAttribute(combatData.id, "data-combat-id")}${addAttribute(boxer, "data-vote-id")} data-astro-cid-ovmyrw2r> <div class="relative h-auto text-xs" data-astro-cid-ovmyrw2r> <img class="h-auto max-h-96 w-full object-contain"${addAttribute(`https://cdn.lavelada.dev/boxers/${boxer}-small.webp`, "src")}${addAttribute(`Fotograf\xEDa de ${boxer.replaceAll("-", " ")}`, "alt")} style="mask-image: linear-gradient(black 80%, transparent)" data-astro-cid-ovmyrw2r> <span class="to-vote-text small" data-astro-cid-ovmyrw2r>${boxer.replaceAll("-", " ")}</span> <span class="already-voted-text small" data-astro-cid-ovmyrw2r>¡tu voto!</span> </div> </button>`)} </ul> </li>`;
    }
    const { teams, boxers } = combatData;
    const [slug1, slug2] = teams ?? boxers;
    const [image1, image2] = [
      { alt: slug1.replaceAll("-", " "), src: createImgRoute(combatData.number, slug1) },
      { alt: slug2.replaceAll("-", " "), src: createImgRoute(combatData.number, slug2) }
    ];
    return renderTemplate`<li class="not-completed relative flex h-96 w-full max-w-3xl flex-row justify-center md:justify-between" data-astro-cid-ovmyrw2r> <button${addAttribute([
      "vote-team group relative max-w-60 saturate-0 transition hover:scale-110 hover:saturate-100",
      { "is-voted": userVotes[combatData.id] === slug1 }
    ], "class:list")}${addAttribute(combatData.id, "data-combat-id")}${addAttribute(slug1, "data-vote-id")} data-astro-cid-ovmyrw2r> <div class="relative h-auto" data-astro-cid-ovmyrw2r> <img class="h-auto max-h-96 w-full object-contain"${addAttribute(image1.src, "src")}${addAttribute(`Fotograf\xEDa de ${image1.alt}`, "alt")} style="mask-image: linear-gradient(black 80%, transparent)" data-astro-cid-ovmyrw2r> <span class="to-vote-text" data-astro-cid-ovmyrw2r>¡voto a ${image1.alt}!</span> <span class="already-voted-text" data-astro-cid-ovmyrw2r>¡tu voto!</span> </div> </button> ${renderComponent($$result, "Image", $$Image, { "width": combatData.titleSize[0], "height": combatData.titleSize[1], "loading": index < 2 ? "eager" : "lazy", "class:list": [
      "pointer-events-none absolute inset-x-0 bottom-20 z-10 m-auto h-auto w-48 md:inset-0 md:w-80"
    ], "src": `https://cdn.lavelada.dev/matches/title-${combat.id}.webp`, "alt": `Fotograf\xEDa del combate entre ${boxerNames.join(", ")}`, "data-astro-cid-ovmyrw2r": true, "data-astro-transition-scope": renderTransition($$result, "5ewk6gtr", "", `title-image-${combat.id}`) })} <button${addAttribute([
      "vote-team group relative max-w-60 saturate-0 transition hover:scale-110 hover:saturate-100",
      { "is-voted": userVotes[combatData.id] === slug2 }
    ], "class:list")}${addAttribute(combatData.id, "data-combat-id")}${addAttribute(slug2, "data-vote-id")} data-astro-cid-ovmyrw2r> <div class="relative h-auto" data-astro-cid-ovmyrw2r> <img class="h-auto max-h-96 w-full object-contain"${addAttribute(image2.src, "src")}${addAttribute(`Fotograf\xEDa de ${image2.alt}`, "alt")} style="mask-image: linear-gradient(black 80%, transparent)" data-astro-cid-ovmyrw2r> <span class="to-vote-text" data-astro-cid-ovmyrw2r>¡voto a ${image2.alt}!</span> <span class="already-voted-text" data-astro-cid-ovmyrw2r>¡tu voto!</span> </div> </button> </li>`;
  })} </ul> </section>   `;
}, "/Users/diego.ramos/veracines-web/src/components/Pronosticos/Vote.astro", "self");

const $$Astro = createAstro("https://www.veracines.es");
const $$Pronosticos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pronosticos;
  const session = await getSession(Astro2.request);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pronostica los ganadores de La Velada IV", "description": "\xA1Participa votando a los boxeadores que crees que ganar\xE1n sus combates!" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col items-center justify-center text-white"> ${session === null ? renderTemplate`${renderComponent($$result2, "Intro", $$Intro, {})}` : renderTemplate`${renderComponent($$result2, "Vote", $$Vote, { "user": session.user })}`} </main> ` })}`;
}, "/Users/diego.ramos/veracines-web/src/pages/pronosticos.astro", void 0);

const $$file = "/Users/diego.ramos/veracines-web/src/pages/pronosticos.astro";
const $$url = "/pronosticos";

export { $$Pronosticos as default, $$file as file, $$url as url };
