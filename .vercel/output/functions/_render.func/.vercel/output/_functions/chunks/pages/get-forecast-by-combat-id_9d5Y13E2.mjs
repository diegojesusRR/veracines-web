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

export { GET, prerender };
