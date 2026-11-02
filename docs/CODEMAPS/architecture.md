# Arquitectura

## Capas

```
┌─────────────────────────────────────────────────────────────┐
│ Netlify (adapter @astrojs/netlify, edgeMiddleware: true)    │
│  └─ Astro SSR (output: "server")                            │
│      ├─ pages/          rutas (file-based routing)          │
│      ├─ layouts/Layout  shell HTML común                    │
│      ├─ sections/ + components/   UI (.astro, sin framework)│
│      └─ consts/         "base de datos" estática en TS      │
├─────────────────────────────────────────────────────────────┤
│ Cliente: View Transitions, scripts <script> por componente, │
│ tema dark (localStorage), Cookiebot, Service Worker (PWA)   │
└─────────────────────────────────────────────────────────────┘
```

No hay islas de React, Vue ni otro framework: todo son componentes `.astro`, y la interactividad va en `<script>` (TS empaquetado por Vite) o `<script is:inline>`.

## Ciclo de una request

1. Netlify recibe la request y la función SSR de Astro resuelve la ruta en `src/pages/`.
2. La página lee `src/consts/*` (módulos ES ya evaluados; `GRUPOSPROYECCIONES` se calcula una vez por instancia de la función).
3. Los componentes filtran las sesiones con `new Date()` del servidor. **Toda la lógica de "próximas" depende de la hora del servidor**: los `Date` se crean en la zona horaria del runtime, no necesariamente en Europe/Madrid.
4. `Layout.astro` monta `<head>` (`SEO.astro`, `RichResults.astro`, el slot `head` con JSON-LD propio de la página), `Header`, el contenido, `Footer`, `Toast` y `ButtonUp`.
5. En el cliente:
   - Un script inline aplica la clase `dark` antes del primer paint (`localStorage.theme` o `prefers-color-scheme`).
   - `astro:before-swap` conserva el tema entre navegaciones de View Transitions.
   - `astro:after-swap` llama a `Cookiebot.runScripts()`.

## Configuración

| Fichero | Papel |
| --- | --- |
| `astro.config.ts` | Integraciones `tailwind`, `sitemap` y `auth`; adaptador Netlify; `inlineStylesheets: "always"`; `prefetch`; VitePWA con caché de imágenes y fuentes |
| `auth.config.js` | Auth.js con el proveedor Twitch y `session.user.id = token.sub`. **No lo usa ninguna página** |
| `tailwind.config.mjs` | `darkMode: "class"`; colores mapeados a variables CSS (`primary` = azul `#2e4390`, `secondary` = rojo `#dc3545`); variantes `any-hover` y `mobile`; breakpoints `xs` y `3xl` |
| `tsconfig.json` | `astro/tsconfigs/strict` y el alias `@/*` → `src/*` |
| `src/utils/seoConfig.ts` | `seoConfig.baseURL` (también lo usa `site` en Astro) y el `manifest` PWA |
| `vercel.json`, `.vercel/` | Restos de un despliegue anterior en Vercel. No los usa el adaptador actual |
| `.netlify/v1/config.json` | Salida generada: cabecera `immutable` para `/_astro/*` |

## Tematización

Variables en `:root` y `html.dark`, en `Layout.astro`:

- Los fondos y bordes de marca (`bg-primary`, `border-secondary`) **no cambian** en modo oscuro.
- Los textos `text-primary` y `text-secondary` se aclaran en dark (`#7b9ef0`, `#f97086`).
- Cada cine pone `--cine-color: var(--color-<color>)` en su página. En dark, los textos que usan ese color se mezclan con blanco (`color-mix`).
- `Layout` tiene dos `div` ocultos con `bg-primary` y `bg-secondary` para que Tailwind no purgue esas clases, que se generan de forma dinámica (`text-${cine.color}`).

## Build y salida

- `yarn build` ejecuta `astro build --remote` (el flag de Astro DB pide `ASTRO_DB_APP_TOKEN`; `db/` está vacío).
- `dist/` incluye `sw.js`, `workbox-*.js`, `registerSW.js` y `sitemap-*.xml`.
- `public/` se copia tal cual: imágenes, `robots.txt`, `manifest.webmanifest`, la verificación de Google y `add-to-calendar.{js,css}`.
