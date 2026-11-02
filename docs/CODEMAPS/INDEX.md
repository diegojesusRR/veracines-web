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
- **Datos**: los componentes leen de `src/data/cartelera.ts`. Usa Supabase si está configurado y, si no, los arrays de `src/consts/`.
- En cada request, los componentes filtran los grupos de proyección con `new Date()` para mostrar solo lo que queda por venir.
- Hay 3 vistas de contenido: la home (carrusel de próximas), la cartelera de cada cine y la ficha de cada película.
- El SEO se hace con JSON-LD en `components/SEO/*`, más el sitemap. `RichResults.astro` existe pero está comentado en `SEO.astro`.

```
   Supabase (cines, peliculas, programaciones, sesiones)   src/consts (fallback)
                         └──────────────┬──────────────────────┘
                                        ▼
                 src/data/cartelera.ts: getCines · getCine · getPelicula · getGruposProyeccion
                                        ▼
 pages/index ──► ProximasProyeccionesCarousel, ubicaciones, Servicios, SEO/home
 pages/cartelera-[cine] ──► proyeccionesCine ──► proyeccionCard, SEO/cartelera
 pages/peliculas/[pelicula] ──► PeliculaCard ──► ProyeccionesPelicula (por cine)
```
