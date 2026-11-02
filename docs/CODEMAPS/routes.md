# Rutas

Todas las rutas son SSR (no hay `getStaticPaths`). Los parámetros dinámicos se resuelven con `getCine` y `getPelicula` (`src/data/cartelera.ts`).

| Ruta | Fichero | Datos | Componentes principales |
| --- | --- | --- | --- |
| `/` | `pages/index.astro` | `Metadata.home` | `Hero`, `ProximasProyeccionesCarousel`, `ubicaciones`, `Servicios`, `contacto`, `SEO/home` (en el slot `head`) |
| `/cartelera-vera`, `/cartelera-regio` | `pages/cartelera-[cine].astro` | `getCine(params.cine)` y `Metadata["cartelera-<url>"]` | `proyeccionesCine` → `proyeccionCard`; `SEO/cartelera`; `Action` (botón "Comprar entradas" si `ventaOnline`) |
| `/peliculas/:id` | `pages/peliculas/[pelicula].astro` | `getPelicula(params.pelicula)` | `PeliculaCard` → `ProyeccionesPelicula` (una por cada cine de `CINES`) |
| `/aviso-legal` | `pages/aviso-legal.astro` | Texto estático | Solo `Layout` |
| `/politica-privacidad` | `pages/politica-privacidad.astro` | Texto estático | Solo `Layout` |
| 404 | `pages/404.astro` | `Metadata.home` | `sections/Error` (importa `HeroLogo.astro`, que **no existe**) |

## Detalles por ruta

### `/cartelera-[cine]`

- Un slug desconocido devuelve `new Response("Cine no encontrado", { status: 404 })`. Es un JSON plano, no la página 404 maquetada.
- El color del cine llega a la página con `style="--cine-color: …"`.
- Avisos según el cine:
  - `ventaOnline: true`: tarjeta verde con un enlace a `cine.urlVentaOnline` (Kinetike para el Regio).
  - `ventaOnline: false`: aviso amarillo de "venta exclusiva en taquilla".
  - `horaFijaProyeccion`: aviso de hora fija, con taquilla 45 minutos antes.
- La cartelera de Vera sin sesiones, fuera de julio y agosto, muestra el banner "Fin de temporada".

### `/peliculas/[pelicula]`

- Un id desconocido devuelve `new Response("Pelicula Not found", { status: 404 })`.
- `canonical` = `www.veracines.com/peliculas/<id>`: falta el esquema y el dominio no es el bueno.
- Cualquier película de `PELICULAS` tiene página, aunque no tenga sesiones. En ese caso, cada cine muestra que no hay sesiones.

## Navegación

- `Header.astro` tiene la lista fija `pages`: Inicio, Terraza de Vera y Cine Regio. Marca la activa comparando con `Astro.url.pathname` (con y sin `/` final).
- `Hero.astro` lleva botones a `/cartelera-vera/` y `/cartelera-regio/`.
- `FooterContent.astro` enlaza a los legales con URL absoluta y `target="_blank"`.
- El menú móvil son `HamburgerButton` y `MOBILE_MENU_CONTENT_ID` (`consts/mobile-menu.ts`).
