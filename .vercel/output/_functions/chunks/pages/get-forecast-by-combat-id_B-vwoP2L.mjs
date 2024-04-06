import { C as COMBATS } from './_combatId__DIDCq922.mjs';

const FORECASTS = [
  {
    combatId: "1",
    forecastData: [
      {
        boxerId: "agustin-51",
        forecast: 0.3,
        predictionsCount: 30
      },
      {
        boxerId: "carreraaa",
        forecast: 0.7,
        predictionsCount: 70
      }
    ]
  },
  {
    combatId: "2",
    forecastData: [
      {
        boxerId: "guanyar",
        forecast: 0.8,
        predictionsCount: 80
      },
      {
        boxerId: "la-cobra",
        forecast: 0.2,
        predictionsCount: 20
      }
    ]
  },
  {
    combatId: "4",
    forecastData: [
      {
        boxerId: "shelao",
        forecast: 0.9,
        predictionsCount: 90
      },
      {
        boxerId: "viruzz",
        forecast: 0.1,
        predictionsCount: 10
      }
    ]
  },
  {
    combatId: "6",
    forecastData: [
      {
        boxerId: "el-mariana",
        forecast: 0.6,
        predictionsCount: 60
      },
      {
        boxerId: "plex",
        forecast: 0.4,
        predictionsCount: 40
      }
    ]
  }
];

const prerender = false;
const GET = ({ url }) => {
  const combatId = url.searchParams.get("id");
  const combat = COMBATS.find((combat2) => combat2.id === combatId);
  if (!combat) {
    return new Response(JSON.stringify("Combat Not found"), { status: 404 });
  }
  const forecast = FORECASTS.find((forecast2) => forecast2.combatId === combatId);
  if (!forecast) {
    return new Response(JSON.stringify("Forecast Not found"), { status: 404 });
  }
  return new Response(JSON.stringify(forecast), {
    headers: {
      "content-type": "application/json"
    }
  });
};

const getForecastByCombatId_json = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	GET,
	prerender
}, Symbol.toStringTag, { value: 'Module' }));

export { FORECASTS as F, getForecastByCombatId_json as g };
