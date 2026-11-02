# Modelo de datos

Los componentes piden los datos a `src/data/cartelera.ts`, que lee de una de estas dos fuentes:

| Fuente | Cuándo | Cambiar la cartelera |
| --- | --- | --- |
| Supabase | `SUPABASE_URL` y `SUPABASE_ANON_KEY` definidas | Editar las tablas. No hace falta desplegar (caché de 60 s) |
| `src/consts/` | Sin esas variables | Editar los `.ts` y desplegar |

## Tablas de Supabase

Ver `supabase/migrations/20261102000000_init.sql`.

```
cines (id = slug) ◄──┐
                     ├── programaciones (id) ◄── sesiones (programacion_id, fecha, hora, vose)
peliculas (id = slug) ◄┘
```

| Tabla → tipo | Diferencias de mapeo (`src/data/cartelera.ts`) |
| --- | --- |
| `cines` → `Cine` | `id` → `url`. `temporada_inicio` y `temporada_fin` (`MM-DD`) → `horario.fechaInicio` y `fechaFin` con el año en curso; si fin < inicio, el fin va al año siguiente. `maps_embed_key` → `localizacion.ubicacionKey`. `servicios` siempre `[]` |
| `peliculas` → `Pelicula` | `imagen` → `image`, `edad_recomendada` → `edadRedomendada` |
| `programaciones` → `GrupoProyeccion` | `id` → `grupo`. Columnas `entradas_*` → `entradas`, `colaboracion_*` → `colaboracion` |
| `sesiones` → `Proyeccion` | `fecha` → `Date` local a las 23:59:59.999 (igual que `getProyecciones`). `vose: true` → `"VOSE"` |

Con Supabase solo se traen sesiones desde hoy (`sesiones!inner` + `gte`). Por eso el problema de `ProyeccionesPelicula` descrito abajo solo ocurre con `src/consts`.

## Entidades

```
Cine (types/Cine.ts)                 Pelicula (types/Pelicula.ts)
├─ url        slug de ruta y clave   ├─ id              slug de /peliculas/:id
├─ nombre, corto                     ├─ image           fichero en public/img/peliculas
├─ color      "primary"|"secondary"  ├─ nombre, descripcion
├─ telefono, image                   ├─ edadRedomendada  (sic)
├─ localizacion{direccion, ciudad,   └─ videoUrl?        embed de YouTube
│   provincia, codigoPostal,
│   adressCounty, ubicacionKey, descripcion}
├─ servicios: Servicio[]   (hoy, vacío en ambos cines)
├─ horaFijaProyeccion?
├─ ventaOnline: boolean
├─ horario{fechaInicio, fechaFin, diasSemana[], horarioApertura, horarioCierre}
└─ images?[]

GrupoProyeccion (types/Proyeccion.ts)
├─ grupo: number          etiqueta informativa (puede repetirse)
├─ cine: Cine             referencia al objeto de CINES
├─ pelicula: Pelicula     PELICULAS.find(...)!
├─ proyecciones: Proyeccion[]  ── { fecha: Date, hora: string, vose?: string }
├─ entradas?{espanol?, vose?}  URLs de compra
├─ colaboracion?{nombre, logo?}
└─ dateCreated?
```

## Ficheros

| Fichero | Exporta | Contenido actual |
| --- | --- | --- |
| `consts/cines.ts` | `CINES: Cine[]` | `vera` (verano, del 23 de junio al 10 de septiembre, todos los días, 22:00, sin venta online) y `regio` (del 1 de octubre al 1 de mayo, de viernes a domingo, venta online). Las fechas del horario usan el año en curso (`new Date().getFullYear()`) |
| `consts/peliculas.ts` | `PELICULAS: Pelicula[]` | 96 películas, de 2024 hasta hoy. No se borran: son el catálogo de `/peliculas/:id` |
| `consts/proyecciones.ts` | `GRUPOSPROYECCIONES` | `gruposProyeccionesVera` (temporada 2026: 21 grupos, del 26 de junio al 30 de agosto) + `gruposProyeccionesRegio`. Garrucha está comentado |
| `consts/metadata.ts` | `Metadata` | `title`, `description` y `canonical` de `home`, `cartelera-vera` y `cartelera-regio`. **Es la que usan las páginas** |
| `utils/seoConfig.ts` | `seoConfig`, `manifest` | Otra copia de `Metadata` (privada) para la URL base, el SEO por defecto y el manifest PWA |
| `consts/contacto.ts` | `CONTACTO` | Teléfono y email |
| `consts/mobile-menu.ts` | `MOBILE_MENU_CONTENT_ID` | Id del DOM del menú móvil |

## Generación de sesiones

```ts
getProyecciones(fechaInicio, fechaFin, hora, vose?)
```

- Recorre los días de `fechaInicio` a `fechaFin`, ambos incluidos (muta `fechaInicio`).
- Cada `fecha` se fija a las **23:59:59.999 hora local** del runtime. La `hora` se guarda aparte, como texto, y solo sirve para mostrarla.
- Como consecuencia, una sesión cuenta como futura hasta el final de su día, aunque ya haya pasado su hora.
- `new Date('2026-07-01')` se interpreta en UTC y luego se ajusta en hora local. En un runtime con UTC negativo, el primer día se iría al anterior. Netlify corre en UTC, así que hoy funciona bien.

## Filtros de "próximas" (en cada request)

| Dónde | Criterio de grupo visible | Sesiones mostradas |
| --- | --- | --- |
| `ProximasProyeccionesCarousel` | Tiene alguna sesión `>= now` | Solo las futuras, agrupadas por día |
| `proyeccionesCine` | **Última** sesión `>= now` y mismo cine | `proyeccionCard` vuelve a filtrar `>= now` |
| `ProyeccionesPelicula` | **Primera** sesión `>= now`, mismo cine y misma película | Todas las del grupo |
| `SEO/cartelera` | Alguna sesión `>= now` y mismo cine | `startDate` y `endDate` = primera y última futuras |
| `RichResults` (sin uso) | (todas) | Un `ScreeningEvent` por grupo |

⚠️ El criterio de `ProyeccionesPelicula` no coincide con el resto. Un grupo que empezó ayer y acaba mañana sale en la cartelera y en el carrusel, pero **no** en la ficha de la película.

## Assets ligados a los datos

- `public/img/peliculas/<Pelicula.image>`: cartel (98 ficheros).
- `public/img/colaboraciones/`: logos de `colaboracion.logo`.
- `Cine.image` apunta a `https://www.veracines.es/img/veracines-logo.png` (URL absoluta).
