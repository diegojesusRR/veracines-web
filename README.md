# Veracines

Web oficial de **Veracines** ([www.veracines.es](https://www.veracines.es)): cartelera de los cines de Vera (Almería).

- **Cine Terraza de Verano de Vera** (`/cartelera-vera`): cine de verano al aire libre, de junio a septiembre. Sesión única a las 22:00 y venta solo en taquilla.
- **Cine Regio de Vera** (`/cartelera-regio`): cine de invierno, de octubre a mayo, abierto de viernes a domingo, con venta online (Kinetike).

La web muestra las próximas proyecciones, la ficha de cada película con su tráiler, las ubicaciones, los servicios y el contacto. También genera datos estructurados (Schema.org) para SEO.

## Stack

| Área | Tecnología |
| --- | --- |
| Framework | [Astro 4](https://astro.build) con `output: "server"` (SSR) y View Transitions |
| Estilos | Tailwind CSS 3, PostCSS (`postcss-nesting`, `postcss-import`), LightningCSS para minificar |
| Tipografía | Jost Variable (`@fontsource-variable`) y Atomic (`public/fonts`) |
| Despliegue | Netlify (`@astrojs/netlify` con edge middleware) |
| PWA | `vite-plugin-pwa` (Workbox, `autoUpdate`) |
| SEO | `@astrojs/sitemap` y JSON-LD (`MovieTheater`, `ScreeningEvent`, `Organization`) |
| Cookies | Cookiebot (cargado en `Layout.astro`) |
| Calidad | ESLint (`@antfu/eslint-config` y `eslint-plugin-astro`), Prettier y Husky |

Hay dependencias configuradas que hoy no se usan: `auth-astro` con el proveedor Twitch, `@astrojs/db` y `@astrojs/vercel`. Ver [Deuda técnica](#deuda-técnica).

## Puesta en marcha

Requisitos: Node 20 (`.nvmrc`) y Yarn.

```bash
nvm use
```

```bash
yarn install
```

```bash
yarn dev
```

La web queda en `http://localhost:4321`.

### Scripts

| Script | Qué hace |
| --- | --- |
| `yarn dev` / `yarn start` | Servidor de desarrollo |
| `yarn build` | `astro build --remote` (el flag `--remote` viene de Astro DB) |
| `yarn preview` | Sirve el build local |
| `yarn check` | `astro check` + `tsc --noEmit` |
| `yarn lint` / `yarn lint:fix` | ESLint sobre `.astro`, `.ts`, `.js` y `.tsx` |
| `yarn format` / `yarn format:check` | Prettier sobre `src/` |

### Variables de entorno

| Variable | Uso |
| --- | --- |
| `ASTRO_DB_APP_TOKEN` | Token de Astro DB (lo exige `build --remote`) |
| `TWITCH_CLIENT_ID`, `TWITCH_CLIENT_SECRET` | Las lee `auth.config.js`. No se usan en ninguna página |

## Estructura

```
src/
├── pages/        Rutas: home, cartelera-[cine], peliculas/[pelicula], legales, 404
├── layouts/      Layout.astro: <head>, SEO, tema claro/oscuro, Cookiebot, Header y Footer
├── sections/     Bloques de página grandes: Hero, Footer, Error
├── components/   Componentes de UI, SEO (JSON-LD), iconos y toasts
├── consts/       Los "datos" de la web: cines, películas, proyecciones, metadatos SEO
├── types/        Interfaces TypeScript (Cine, Pelicula, Proyeccion…)
├── lib/          Utilidades de DOM ($, $$) y countdown
├── function/     Toasts (butterup) y restos de easter eggs
└── utils/        seoConfig: URL base, SEO por defecto y manifest PWA
public/
└── img/peliculas/  Carteles de las películas (se referencian por nombre de fichero)
```

El mapa detallado de módulos, rutas y flujo de datos está en [`docs/CODEMAPS/`](docs/CODEMAPS/INDEX.md).

## Cómo se gestiona la cartelera

No hay CMS ni base de datos. **Toda la programación vive en TypeScript**, dentro de `src/consts/`, y cada cambio de cartelera es un commit y un despliegue.

### Añadir una película nueva

1. Copia el cartel a `public/img/peliculas/<slug>.jpg` (también vale `.jpeg` o `.webp`).
2. Añade la entrada en `src/consts/peliculas.ts`:

   ```ts
   {
       id: "mi-pelicula",              // slug: también es la URL /peliculas/mi-pelicula
       image: "mi-pelicula.jpg",       // nombre del fichero en public/img/peliculas
       nombre: "Mi película",
       descripcion: "Sinopsis…",
       edadRedomendada: "Todos los públicos",
       videoUrl: "https://www.youtube.com/embed/XXXX", // opcional: tráiler
   }
   ```

### Programar proyecciones

En `src/consts/proyecciones.ts`, añade un `GrupoProyeccion` al array del cine que toque (`gruposProyeccionesVera` o `gruposProyeccionesRegio`):

```ts
{
    grupo: 22,
    cine: cineVera,
    pelicula: PELICULAS.find(p => p.id === 'mi-pelicula')!,
    proyecciones: [
        // Una sesión diaria a las 22:00, del 1 al 3 de julio (ambos incluidos)
        ...getProyecciones(new Date('2026-07-01'), new Date('2026-07-03'), '22:00'),
    ],
    entradas: { espanol: 'https://…', vose: 'https://…' }, // opcional: enlaces de compra
    colaboracion: { nombre: 'Asprodalba', logo: '/img/colaboraciones/x.webp' }, // opcional
}
```

- `getProyecciones(inicio, fin, hora, vose?)` genera una sesión por día. Cada fecha se guarda a las **23:59:59**, así que la sesión sigue apareciendo como "próxima" durante todo ese día.
- Para varias horas el mismo día, concatena varias llamadas (mira el Cine Regio).
- Si el `id` de la película no existe en `PELICULAS`, el `!` oculta el error de tipos y la página falla al renderizar. Comprueba que el slug coincide.
- Las proyecciones pasadas se filtran solas en cada request (SSR). No hace falta borrarlas.

### Datos de los cines

`src/consts/cines.ts` define cada cine: slug de URL, nombre, color de marca (`primary` o `secondary`), dirección, embed de Google Maps, horario de temporada (para el JSON-LD), venta online y hora fija. Para añadir un cine:

1. Añade la entrada en `CINES`.
2. Añade sus metadatos SEO en `src/consts/metadata.ts` con la clave `cartelera-<url>`.
3. Añade su grupo de proyecciones en `proyecciones.ts` y mételo en `GRUPOSPROYECCIONES`.
4. Añade el enlace en `Header.astro` (`pages`) y, si quieres, en `Hero.astro`.

## Despliegue

El adaptador activo es **Netlify** (`astro.config.ts`), con salida SSR y edge middleware. El sitemap se genera en el build y `site` sale de `seoConfig.baseURL` (`https://www.veracines.es`).

## Deuda técnica

Lo detectado al analizar el proyecto (noviembre de 2026):

- **`.env` está versionado** y contiene `ASTRO_DB_APP_TOKEN`. Rota el token, añade un `.gitignore` y saca `.env` del repo.
- **Falta `.gitignore`**: están versionados `node_modules/` (unos 40k ficheros), `dist/`, `.vercel/`, `.astro/`, `.netlify/`, `.idea/` y `.DS_Store`.
- **`sections/Error.astro` importa `@/components/HeroLogo.astro`, que no existe**, y la usa `pages/404.astro`. `sections/Info.astro` importa `TwitchLogo.astro`, que tampoco existe, aunque `Info` no se usa.
- **Restos del proyecto base** ([la-velada-web-oficial](https://github.com/midudev/la-velada-web-oficial)): los tipos `Boxer`, `Combat`, `Forecast` y `Sponsors`, `function/miduCode.ts`, `function/konami.ts`, `lib/countdown.ts`, `components/DrawnXLogo.astro`, imágenes de `public/img` (`lvda.webp`, `flags/`, `sponsors/`…) y la configuración de Auth con Twitch.
- **Adaptadores mezclados**: se usa Netlify, pero siguen `vercel.json` (Node 18), `@astrojs/vercel` y `@vercel/analytics`. Además, el `globDirectory` de Workbox apunta a `.vercel/output/static`, así que en Netlify es probable que el precache del service worker quede vacío.
- **Metadatos duplicados**: `consts/metadata.ts` (el que usan las páginas) y `utils/seoConfig.ts` tienen títulos distintos. Los `canonical` de `consts/metadata.ts` no llevan `https://`, y el de las películas usa `veracines.com` en vez de `veracines.es`.
- **Filtros de "próximas" inconsistentes**: `ProyeccionesPelicula.astro` decide con la *primera* fecha del grupo (`proyecciones[0].fecha >= now`). Así, un grupo que ya empezó no sale en la ficha de la película aunque le queden sesiones. `proyeccionesCine.astro` decide con la *última* fecha.
- **Duplicados sin uso**: `components/Ubicacion/UbicacionCard.astro` (se usa `components/UbicacionCard.astro`), `SectionTitle.astro` y `sections/Info.astro`.
- **"Fin de temporada" hardcodeado**: `proyeccionesCine.astro` muestra el banner de fin de temporada en Vera cuando no hay sesiones y el mes no es julio ni agosto.
