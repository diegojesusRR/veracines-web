# Componentes

Leyenda: 📜 = tiene `<script>` de cliente · 📦 = lee datos de `src/data/cartelera` · ⚠️ = huérfano o roto

## Shell (`layouts/` + `sections/`)

| Componente | Usado por | Notas |
| --- | --- | --- |
| `layouts/Layout.astro` 📜 | Todas las páginas | Props: `title`, `description`, `canonical?`, `image?`, `preload?`. Slot `head`. Incluye Cookiebot, el tema anti-flash, los estilos globales y las variables CSS |
| `sections/Hero.astro` | `index` | Presentación y CTA a las dos carteleras |
| `sections/Footer.astro` | `Layout` | `FooterContent` + `SocialButtons` |
| `sections/Error.astro` ⚠️ | `404` | Importa `@/components/HeroLogo.astro`, que no existe |
| `sections/Info.astro` ⚠️ | Nadie | Importa `TwitchLogo.astro`, que no existe. Resto de La Velada |

## Cabecera y navegación

| Componente | Dependencias | Notas |
| --- | --- | --- |
| `Header.astro` 📜 | `DrawnXLogo`, `FooterContent`, `HamburgerButton`, `SocialButtons`, `ThemeToggle`, `lib/dom-selector`, `consts/mobile-menu` | Navegación desktop y menú móvil |
| `HamburgerButton.astro` 📜 | `lib/dom-selector`, `consts/mobile-menu` | Abre y cierra el menú móvil |
| `ThemeToggle.astro` 📜 | — | Alterna `html.dark` y lo guarda en `localStorage.theme` |
| `ButtonUp.astro` 📜 | — | Botón de volver arriba |
| `SocialButtons.astro` | — | Instagram |
| `FooterContent.astro` | `Typography` | Enlaces a los legales |
| `DrawnXLogo.astro` | — | Logo heredado de La Velada (sigue en `Header`) |

## Cartelera (dominio)

| Componente | Props | 📦 Datos | Lógica |
| --- | --- | --- | --- |
| `ProximasProyeccionesCarousel.astro` 📜 | — | `GRUPOSPROYECCIONES` | Filtra las sesiones con `fecha >= now`, ordena por la primera sesión, agrupa por día (`"Vie 31"` → `["17:30h", "20:30h (V)"]`) y lo pinta como carrusel |
| `proyeccionesCine.astro` 📦 | `cine` | `GRUPOSPROYECCIONES` | Grupos del cine cuya **última** sesión es `>= now`. Gestiona el vacío y el banner de fin de temporada |
| `proyeccionCard.astro` | `proyecciones`, `pelicula`, `cine`, `entradas?`, `colaboracion?` | — | Tarjeta de un grupo: cartel, días y meses futuros, botones de entradas (español o VOSE) y logo de colaboración |
| `PeliculaCard.astro` 📜 | `pelicula` | `CINES` | Ficha: cartel, sinopsis, edad, tráiler (iframe de YouTube) y un `ProyeccionesPelicula` por cine |
| `ProyeccionesPelicula.astro` 📦 | `pelicula`, `cine` | `GRUPOSPROYECCIONES` | Sesiones de esa película en ese cine. Filtra por la **primera** sesión del grupo (ver data.md) |
| `ubicaciones.astro` 📦 | — | `CINES` | Lista de `UbicacionCard` |
| `UbicacionCard.astro` | `cine` | — | Dirección, descripción y embed de Google Maps (`ubicacionKey`) |
| `Ubicacion/UbicacionCard.astro` ⚠️ | — | — | Duplicado sin uso |
| `Servicios.astro` 📦 | — | `CINES` | Rejilla de servicios con iconos de `components/icons/*` |
| `Servicio.astro` | `label`, `aclaracion`, icono en el slot | — | Una celda |
| `contacto.astro` 📦 | — | `CONTACTO` | Teléfono, WhatsApp y email |

## SEO

| Componente | Dónde | Emite |
| --- | --- | --- |
| `SEO.astro` 📜 | `Layout` | Meta, Open Graph y Twitter; preload de las fuentes Jost y Atomic. `<RichResults />` está comentado |
| `RichResults.astro` 📜 📦 ⚠️ | Nadie (comentado en `SEO`) | JSON-LD con la `Organization` y un `ScreeningEvent` por grupo de proyecciones |
| `SEO/home.astro` 📜 📦 | Slot `head` de `index` | `MovieTheater` por cine (con `OpeningHoursSpecification`) + `Organization` |
| `SEO/cartelera.astro` 📜 📦 | Slot `head` de `cartelera-[cine]` | `@graph` con el `MovieTheater` y sus `ScreeningEvent` futuros (`priceRange` fijo: 5–7 €) |

## UI genérica

| Componente | Notas |
| --- | --- |
| `Action.astro` | Botón o enlace polimórfico (`as`) con `color` = `primary` o `secondary` |
| `Typography.astro` | Texto polimórfico con variantes |
| `SectionTitle.astro` ⚠️ | Sin uso |
| `ui/Toast.astro` 📜 | Monta `butterup` (`function/toast.ts`) y lo expone como `window.toast` (tipos en `components/global.d.ts`) |
| `icons/*.astro` | SVG inline: burguer, climatización, email, facebook, icecream, instagram, parking, phone, popcorn, projector, whatsapp |

## Utilidades (`lib/`, `function/`)

| Módulo | Uso |
| --- | --- |
| `lib/dom-selector.ts` | `$` y `$$`. Los usan `Header` y `HamburgerButton` |
| `lib/countdown.ts` ⚠️ | Sin uso |
| `function/toast.ts` | Copia de [butterup](https://github.com/dgtlss/butterup). La usa `ui/Toast` |
| `function/konami.ts` ⚠️, `function/miduCode.ts` ⚠️ | Easter eggs de La Velada sin uso |
