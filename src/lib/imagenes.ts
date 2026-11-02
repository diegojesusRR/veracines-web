/**
 * URLs de carteles y logos.
 *
 * - Con Supabase configurado: /imagenes/<carpeta>/<fichero>, que sirve
 *   src/pages/imagenes/[...ruta].ts desde el bucket de Supabase Storage
 *   (se suben desde el panel, sin desplegar).
 * - Sin Supabase: ficheros de public/img (comportamiento anterior).
 * - Si el valor ya es una URL http(s), se usa tal cual.
 */
import { isSupabaseConfigured } from "@/lib/supabase"

/** Origen público para URLs absolutas (JSON-LD). Sin www: www.veracines.es redirige aquí. */
const ORIGEN = "https://veracines.es"

const esUrl = (valor: string) => /^https?:\/\//.test(valor)

/** Cartel de una película a partir de `Pelicula.image`. `absolute` para JSON-LD y meta tags. */
export function posterUrl(image: string, { absolute = false } = {}): string {
	if (esUrl(image)) return image
	const ruta = isSupabaseConfigured ? `/imagenes/peliculas/${encodeURIComponent(image)}` : `/img/peliculas/${image}`
	return absolute ? `${ORIGEN}${ruta}` : ruta
}

/** Logo de una colaboración. Las rutas que empiezan por "/" siguen sirviéndose desde public/. */
export function logoUrl(logo: string): string {
	if (esUrl(logo) || logo.startsWith("/")) return logo
	if (isSupabaseConfigured) return `/imagenes/colaboraciones/${encodeURIComponent(logo)}`
	return `/img/colaboraciones/${logo}`
}
