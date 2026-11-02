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

Hay dependencias configuradas que hoy no se usan: `auth-astro` con el proveedor Twitch y `@astrojs/vercel`. Ver [Deuda técnica](#deuda-técnica).

## Puesta en marcha

Requisitos: Node 22 (`.nvmrc`; `@supabase/supabase-js` lo exige) y Yarn.

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
| `yarn build` | `astro build` |
| `yarn preview` | Sirve el build local |
| `yarn check` | `astro check` + `tsc --noEmit` |
| `yarn lint` / `yarn lint:fix` | ESLint sobre `.astro`, `.ts`, `.js` y `.tsx` |
| `yarn format` / `yarn format:check` | Prettier sobre `src/` |
| `yarn db:seed` | Copia `src/consts/` a Supabase por API (necesita la service role key) |
| `yarn db:seed:sql` | Genera `supabase/seed.sql` desde `src/consts/`, para ejecutarlo sin claves |
| `yarn storage:upload` | Sube `public/img/peliculas` y `public/img/colaboraciones` al bucket `Veracines Storage` (necesita la service role key) |

### Variables de entorno

| Variable | Uso |
| --- | --- |
| `SUPABASE_URL`, `SUPABASE_ANON_KEY` | Lectura de la base de datos. Sin ellas, la web usa `src/consts/` |
| `SUPABASE_SERVICE_ROLE_KEY` | Solo para `yarn db:seed`. No la pongas en Netlify |
| `TWITCH_CLIENT_ID`, `TWITCH_CLIENT_SECRET` | Las lee `auth.config.js`. No se usan en ninguna página |

## Estructura

```
src/
├── pages/        Rutas: home, cartelera-[cine], peliculas/[pelicula], legales, 404
├── layouts/      Layout.astro: <head>, SEO, tema claro/oscuro, Cookiebot, Header y Footer
├── sections/     Bloques de página grandes: Hero, Footer, Error
├── components/   Componentes de UI, SEO (JSON-LD), iconos y toasts
├── data/         cartelera.ts: única puerta de acceso a cines, películas y sesiones
├── consts/       Datos estáticos (fallback sin Supabase) y metadatos SEO
├── types/        Interfaces TypeScript (Cine, Pelicula, Proyeccion…)
├── lib/          Cliente de Supabase, utilidades de DOM ($, $$) y countdown
├── function/     Toasts (butterup) y restos de easter eggs
└── utils/        seoConfig: URL base, SEO por defecto y manifest PWA
public/
└── img/peliculas/  Carteles de las películas (se referencian por nombre de fichero)
```

El mapa detallado de módulos, rutas y flujo de datos está en [`docs/CODEMAPS/`](docs/CODEMAPS/INDEX.md).

## Cómo se gestiona la cartelera

Los componentes leen los datos a través de `src/data/cartelera.ts`, que tiene dos fuentes:

- **Supabase**, si están definidas `SUPABASE_URL` y `SUPABASE_ANON_KEY`. Ver [Base de datos (Supabase)](#base-de-datos-supabase).
- **`src/consts/`**, si no lo están. Así funcionaba la web hasta ahora: cada cambio de cartelera es un commit y un despliegue.

Los pasos de abajo describen la gestión con `src/consts/`. Con Supabase, lo mismo se hace en las tablas `peliculas`, `programaciones` y `sesiones` (el cartel sigue en `public/img/peliculas`).

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

## Base de datos (Supabase)

### Esquema

`supabase/migrations/20261102000000_init.sql` crea cuatro tablas, con lectura pública por RLS y escritura solo con la service role:

| Tabla | Equivale a | Clave |
| --- | --- | --- |
| `cines` | `Cine` | `id` = slug de URL (`vera`, `regio`) |
| `peliculas` | `Pelicula` | `id` = slug de `/peliculas/<id>` |
| `programaciones` | `GrupoProyeccion` | Película en un cine, con enlaces de entradas y colaboración |
| `sesiones` | `Proyeccion` | `fecha` (`date`), `hora` (`'HH:MM'`) y `vose` |

La temporada de cada cine se guarda sin año (`'MM-DD'`). Si el fin es anterior al inicio, cruza de año, como el Regio.

### Puesta en marcha

1. En el panel de Supabase, abre **SQL Editor** y ejecuta la migración. También puedes usar `supabase db push` con la CLI.
2. Copia `.env.example` a `.env` y rellena `SUPABASE_URL`, `SUPABASE_ANON_KEY` y `SUPABASE_SERVICE_ROLE_KEY` (Project Settings → API).
3. Carga los datos actuales. Hay dos formas:
   - **Sin claves:** genera `supabase/seed.sql` y ejecútalo en DataGrip o en el SQL Editor. Si `programaciones` ya tiene datos, aborta la transacción entera.

     ```bash
     yarn db:seed:sql
     ```

   - **Por API:** con la service role key en `.env`. Cines y películas se cargan con upsert, así que el script se puede repetir. Las programaciones solo se insertan si la tabla está vacía.

     ```bash
     yarn db:seed
     ```
4. En Netlify, añade solo `SUPABASE_URL` y `SUPABASE_ANON_KEY` y despliega.

### Cómo se lee

- `src/data/cartelera.ts` expone `getCines`, `getCine`, `getPelicula` y `getGruposProyeccion`, y devuelve los mismos tipos que `src/consts`.
- Las sesiones se piden desde hoy en adelante.
- Los resultados se cachean 60 s por instancia de la función SSR, porque varios componentes piden lo mismo en una página.
- Si Supabase devuelve un error, la página falla: no vuelve a `src/consts`, para no enseñar una cartelera vieja.

### Imágenes (Supabase Storage)

Los carteles y logos se guardan en el bucket público `Veracines Storage` (nombre en `src/consts/storage.ts`; equivale a `supabase/migrations/20261102010000_storage.sql`). Admite JPEG, PNG, WebP y AVIF, de hasta 10 MB.

| Carpeta del bucket | Columna | Valor |
| --- | --- | --- |
| `peliculas/` | `peliculas.imagen` | Nombre del fichero, p. ej. `mi-pelicula.jpg` |
| `colaboraciones/` | `programaciones.colaboracion_logo` | Nombre del fichero, p. ej. `asprodalba.webp` |

**Para añadir un cartel sin desplegar:** en Supabase, abre **Storage → Veracines Storage → peliculas** y sube el fichero. Después pon ese mismo nombre en `peliculas.imagen`.

`src/lib/imagenes.ts` (`posterUrl` y `logoUrl`) construye las URLs:
- Si el valor ya es una URL `http(s)`, la usa tal cual.
- Si Supabase está configurado, apunta a Storage.
- Si no, apunta a `public/img/`.

Los ficheros de `public/img/peliculas` se mantienen como reserva para cuando no hay Supabase.

## Despliegue

El adaptador activo es **Netlify** (`astro.config.ts`), con salida SSR y edge middleware. El sitemap se genera en el build y `site` sale de `seoConfig.baseURL` (`https://www.veracines.es`).

## Deuda técnica

Lo detectado al analizar el proyecto (noviembre de 2026):

- **Token antiguo en el historial de git**: commits anteriores incluyen un `.env` con `ASTRO_DB_APP_TOKEN` (de Astro Studio). El proyecto ya no usa Astro DB y `.env` ya no se versiona, pero ese valor sigue en el historial.
- **`sections/Error.astro` importa `@/components/HeroLogo.astro`, que no existe**, y la usa `pages/404.astro`. `sections/Info.astro` importa `TwitchLogo.astro`, que tampoco existe, aunque `Info` no se usa.
- **Restos del proyecto base** ([la-velada-web-oficial](https://github.com/midudev/la-velada-web-oficial)): los tipos `Boxer`, `Combat`, `Forecast` y `Sponsors`, `function/miduCode.ts`, `function/konami.ts`, `lib/countdown.ts`, `components/DrawnXLogo.astro`, imágenes de `public/img` (`lvda.webp`, `flags/`, `sponsors/`…) y la configuración de Auth con Twitch.
- **Adaptadores mezclados**: se usa Netlify, pero siguen `vercel.json` (Node 18), `@astrojs/vercel` y `@vercel/analytics`. Además, el `globDirectory` de Workbox apunta a `.vercel/output/static`: en local precachea una salida antigua de Vercel, y en un build limpio (CI de Netlify) el precache queda vacío.
- **Metadatos duplicados**: `consts/metadata.ts` (el que usan las páginas) y `utils/seoConfig.ts` tienen títulos distintos. Los `canonical` de `consts/metadata.ts` no llevan `https://`, y el de las películas usa `veracines.com` en vez de `veracines.es`.
- **Filtros de "próximas" inconsistentes**: `ProyeccionesPelicula.astro` decide con la *primera* fecha del grupo (`proyecciones[0].fecha >= now`). Así, un grupo que ya empezó no sale en la ficha de la película aunque le queden sesiones. `proyeccionesCine.astro` decide con la *última* fecha.
- **Duplicados sin uso**: `components/Ubicacion/UbicacionCard.astro` (se usa `components/UbicacionCard.astro`), `SectionTitle.astro` y `sections/Info.astro`.
- **"Fin de temporada" hardcodeado**: `proyeccionesCine.astro` muestra el banner de fin de temporada en Vera cuando no hay sesiones y el mes no es julio ni agosto.
