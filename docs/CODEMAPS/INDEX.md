# Codemaps: Veracines

Mapas del código de `veracines-web`, al día a 2026-11-02 (rama `feature/Djramos_BD`).

| Mapa | Contenido |
| --- | --- |
| [architecture.md](architecture.md) | Visión general, ciclo de una request, build y despliegue |
| [routes.md](routes.md) | Rutas y qué componentes y datos usa cada página |
| [components.md](components.md) | Inventario de componentes, dependencias y scripts de cliente |
| [data.md](data.md) | Modelo de datos (`consts/` + `types/`) y cómo se filtra la cartelera |

## Resumen en 30 segundos

- Astro 4 en **SSR** (`output: "server"`) sobre **Netlify**.
- **Sin base de datos ni CMS**: cines, películas y sesiones son arrays TypeScript en `src/consts/`.
- En cada request, los componentes filtran `GRUPOSPROYECCIONES` con `new Date()` para mostrar solo lo que queda por venir.
- Hay 3 vistas de contenido: la home (carrusel de próximas), la cartelera de cada cine y la ficha de cada película.
- El SEO se hace con JSON-LD en `components/SEO/*` y `RichResults.astro`, más el sitemap.

```
            ┌──────────────── src/consts ────────────────┐
            │  cines.ts ──► proyecciones.ts ◄── peliculas.ts
            │                   │ GRUPOSPROYECCIONES      │
            └───────────────────┼─────────────────────────┘
                                ▼
 pages/index ──► ProximasProyeccionesCarousel, ubicaciones, Servicios, SEO/home
 pages/cartelera-[cine] ──► proyeccionesCine ──► proyeccionCard, SEO/cartelera
 pages/peliculas/[pelicula] ──► PeliculaCard ──► ProyeccionesPelicula (por cine)
 layouts/Layout ──► SEO ──► RichResults (JSON-LD de todas las sesiones)
```
