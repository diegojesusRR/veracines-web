import { createRemoteDatabaseClient, asDrizzleTable } from '@astrojs/db/runtime';
import { NOW } from '@astrojs/db/dist/runtime/config.js';
import { g as getSession } from './__HFCGfhsa.mjs';
import { object, string, safeParse } from 'valibot';

const REY_DE_LA_PISTA_ID = "5-rey-de-la-pista";
const COMBATS = [
  {
    id: "1-agustin-51-vs-carreraaa",
    number: 1,
    boxers: ["carreraaa", "agustin-51"],
    titleSize: [1920, 1012]
  },
  {
    id: "2-guanyar-vs-la-cobra",
    number: 2,
    boxers: ["guanyar", "la-cobra"],
    titleSize: [1920, 927]
  },
  {
    id: "3-zeling-y-nissaxter-vs-alana-y-ama-blitz",
    number: 3,
    boxers: ["zeling", "nissaxter", "alana", "ama-blitz"],
    teams: ["zeling-nissaxter", "alana-ama-blitz"],
    titleSize: [1525, 1525]
  },
  {
    id: "4-viruzz-vs-shelao",
    number: 4,
    boxers: ["viruzz", "shelao"],
    titleSize: [1623, 1077]
  },
  {
    id: REY_DE_LA_PISTA_ID,
    number: 5,
    boxers: [
      "roberto-cein",
      "aldo-geo",
      "folagor",
      "karchez",
      "pelicanger",
      "peldanyos",
      "unicornio",
      "skain",
      "sezar-blue",
      "will"
    ],
    titleSize: [1185, 1139]
  },
  {
    id: "6-el-mariana-vs-plex",
    number: 6,
    boxers: ["plex", "el-mariana"],
    titleSize: [1920, 950]
  }
];

const db = await createRemoteDatabaseClient(process.env.ASTRO_STUDIO_APP_TOKEN, {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.veracines.es", "ASSETS_PREFIX": undefined}.ASTRO_STUDIO_REMOTE_DB_URL ?? "https://db.services.astro.build");
asDrizzleTable("VoteSelections", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "VoteSelections", "primaryKey": true } } }, "deprecated": false }, false);
const Votes = asDrizzleTable("Votes", { "columns": { "id": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "Votes", "primaryKey": true } }, "combatId": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "combatId", "collection": "Votes", "primaryKey": false, "optional": false } }, "userId": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "userId", "collection": "Votes", "primaryKey": false, "optional": false } }, "voteId": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "voteId", "collection": "Votes", "primaryKey": false, "optional": false, "references": { "type": "text", "schema": { "unique": false, "deprecated": false, "name": "id", "collection": "VoteSelections", "primaryKey": true } } } }, "votedAt": { "type": "date", "schema": { "optional": false, "unique": false, "deprecated": false, "name": "votedAt", "collection": "Votes" } } }, "deprecated": false }, false);

const VoteSchema = object({
  voteId: string()
});
const res = (body, { status, statusText, headers }) => new Response(body, { status, statusText, headers });
const POST = async ({ params, request }) => {
  const session = await getSession(request);
  if (!session || session?.user?.email == null) {
    return res("Unauthorized", { status: 401 });
  }
  const { combatId } = params;
  if (!combatId)
    return res("CombatId is required", { status: 400 });
  const combatData = COMBATS.find((c) => c.id === combatId);
  if (!combatData)
    return res("Combat not found", { status: 404 });
  const { success, output } = safeParse(VoteSchema, await request.json());
  if (!success)
    return res("Bad request", { status: 400 });
  const { voteId } = output;
  const userId = session.user.id;
  const votedAt = NOW;
  const newId = `${userId}-${combatId}`;
  const vote = { id: newId, userId, votedAt, voteId, combatId };
  try {
    await db.insert(Votes).values(vote).onConflictDoUpdate({
      target: Votes.id,
      set: {
        combatId,
        userId,
        voteId,
        votedAt
      }
    });
  } catch (error) {
    console.error(error);
    return res("Error inserting vote", { status: 500 });
  }
  return res("OK", { status: 200 });
};

const _combatId_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

export { COMBATS as C, REY_DE_LA_PISTA_ID as R, Votes as V, _combatId_ as _, db as d };
