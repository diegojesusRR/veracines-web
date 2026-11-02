/**
 * Sirve las imágenes de Supabase Storage desde el dominio de la web:
 *   /imagenes/peliculas/<fichero>      → Veracines Storage/peliculas/<fichero>
 *   /imagenes/colaboraciones/<fichero> → Veracines Storage/colaboraciones/<fichero>
 *
 * La CDN de Netlify cachea la respuesta, así que Supabase solo recibe una petición
 * por imagen cada cierto tiempo. Si se reemplaza un cartel con el mismo nombre, el
 * cambio tarda como mucho un día en verse (s-maxage).
 */
import type { APIRoute } from "astro"

import { STORAGE_BUCKET } from "@/consts/storage"
import { isSupabaseConfigured } from "@/lib/supabase"

// Solo estas carpetas y nombres de fichero simples: nada de "..", barras extra ni otros buckets
const RUTA_VALIDA = /^(peliculas|colaboraciones)\/[\w.-]+\.(jpe?g|png|webp|avif)$/i

export const GET: APIRoute = async ({ params }) => {
	const ruta = params.ruta ?? ""
	if (!isSupabaseConfigured || !RUTA_VALIDA.test(ruta)) return new Response(null, { status: 404 })

	const [carpeta, fichero] = ruta.split("/")
	const origen = `${import.meta.env.SUPABASE_URL}/storage/v1/object/public/${encodeURIComponent(STORAGE_BUCKET)}/${carpeta}/${encodeURIComponent(fichero)}`

	const respuesta = await fetch(origen)
	if (!respuesta.ok || !respuesta.body) {
		return new Response(null, {
			status: respuesta.status === 400 || respuesta.status === 404 ? 404 : 502,
			headers: { "Cache-Control": "public, max-age=60" },
		})
	}

	return new Response(respuesta.body, {
		status: 200,
		headers: {
			"Content-Type": respuesta.headers.get("Content-Type") ?? "application/octet-stream",
			// Navegador: 1 h. CDN de Netlify: 1 día, y sigue sirviendo la copia mientras revalida.
			"Cache-Control": "public, max-age=3600",
			"Netlify-CDN-Cache-Control": "public, durable, s-maxage=86400, stale-while-revalidate=604800",
		},
	})
}

// HEAD (comprobadores de enlaces, crawlers): mismas cabeceras
export const HEAD = GET
