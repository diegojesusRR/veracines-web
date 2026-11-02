/**
 * URLs de carteles y logos.
 *
 * - Con Supabase configurado: bucket público STORAGE_BUCKET de Supabase Storage
 *   (se suben desde el panel, sin desplegar).
 * - Sin Supabase: ficheros de public/img (comportamiento anterior).
 * - Si el valor ya es una URL http(s), se usa tal cual.
 */
import { STORAGE_BUCKET } from "@/consts/storage"
import { isSupabaseConfigured } from "@/lib/supabase"
import { seoConfig } from "@/utils/seoConfig"

const storageBase = `${import.meta.env.SUPABASE_URL}/storage/v1/object/public/${encodeURIComponent(STORAGE_BUCKET)}`

const esUrl = (valor: string) => /^https?:\/\//.test(valor)

/** Cartel de una película a partir de `Pelicula.image`. `absolute` para JSON-LD y meta tags. */
export function posterUrl(image: string, { absolute = false } = {}): string {
	if (esUrl(image)) return image
	if (isSupabaseConfigured) return `${storageBase}/peliculas/${encodeURIComponent(image)}`
	return `${absolute ? seoConfig.baseURL : ""}/img/peliculas/${image}`
}

/** Logo de una colaboración. Las rutas que empiezan por "/" siguen sirviéndose desde public/. */
export function logoUrl(logo: string): string {
	if (esUrl(logo) || logo.startsWith("/")) return logo
	if (isSupabaseConfigured) return `${storageBase}/colaboraciones/${encodeURIComponent(logo)}`
	return `/img/colaboraciones/${logo}`
}
