/**
 * Acceso a los datos de la cartelera.
 *
 * Si SUPABASE_URL y SUPABASE_ANON_KEY están definidas, lee de Supabase.
 * Si no, usa los arrays estáticos de src/consts (comportamiento anterior).
 * Las páginas y componentes solo deben importar desde aquí.
 */
import { CINES } from "@/consts/cines"
import { PELICULAS } from "@/consts/peliculas"
import { GRUPOSPROYECCIONES } from "@/consts/proyecciones"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import type { Cine } from "@/types/Cine"
import type { Pelicula } from "@/types/Pelicula"
import type { GrupoProyeccion, Proyeccion } from "@/types/Proyeccion"

// ─── Filas de la base de datos (ver supabase/migrations) ─────────────────────

interface CineRow {
	id: string
	nombre: string
	corto: string
	color: string
	imagen: string
	telefono: string
	hora_fija_proyeccion: string | null
	venta_online: boolean
	url_venta_online: string | null
	direccion: string
	descripcion: string
	ciudad: string
	provincia: string
	codigo_postal: string
	pais: string
	maps_embed_key: string
	temporada_inicio: string
	temporada_fin: string
	dias_semana: string[]
	hora_apertura: string
	hora_cierre: string
}

interface PeliculaRow {
	id: string
	nombre: string
	descripcion: string
	imagen: string
	edad_recomendada: string
	video_url: string | null
}

interface SesionRow {
	fecha: string
	hora: string
	vose: boolean
}

interface ProgramacionRow {
	id: number
	entradas_espanol: string | null
	entradas_vose: string | null
	colaboracion_nombre: string | null
	colaboracion_logo: string | null
	created_at: string
	cine: CineRow
	pelicula: PeliculaRow
	sesiones: SesionRow[]
}

// ─── Mapeo a los tipos de la app ─────────────────────────────────────────────

function toCine(row: CineRow): Cine {
	const year = new Date().getFullYear()
	const cruzaAnio = row.temporada_fin < row.temporada_inicio

	return {
		url: row.id,
		nombre: row.nombre,
		corto: row.corto,
		color: row.color,
		image: row.imagen,
		telefono: row.telefono,
		horaFijaProyeccion: row.hora_fija_proyeccion ?? undefined,
		ventaOnline: row.venta_online,
		urlVentaOnline: row.url_venta_online ?? undefined,
		localizacion: {
			ubicacionKey: row.maps_embed_key,
			direccion: row.direccion,
			descripcion: row.descripcion,
			ciudad: row.ciudad,
			provincia: row.provincia,
			codigoPostal: row.codigo_postal,
			adressCounty: row.pais,
		},
		servicios: [],
		horario: {
			fechaInicio: `${year}-${row.temporada_inicio}`,
			fechaFin: `${cruzaAnio ? year + 1 : year}-${row.temporada_fin}`,
			diasSemana: row.dias_semana,
			horarioApertura: row.hora_apertura,
			horarioCierre: row.hora_cierre,
		},
	}
}

function toPelicula(row: PeliculaRow): Pelicula {
	return {
		id: row.id,
		nombre: row.nombre,
		descripcion: row.descripcion,
		image: row.imagen,
		edadRedomendada: row.edad_recomendada,
		videoUrl: row.video_url ?? undefined,
	}
}

/** Igual que getProyecciones en consts: la sesión cuenta como futura hasta el final de su día. */
function toProyeccion(row: SesionRow): Proyeccion {
	const [y, m, d] = row.fecha.split("-").map(Number)
	return {
		fecha: new Date(y, m - 1, d, 23, 59, 59, 999),
		hora: row.hora,
		vose: row.vose ? "VOSE" : undefined,
	}
}

function toGrupo(row: ProgramacionRow): GrupoProyeccion {
	return {
		grupo: row.id,
		cine: toCine(row.cine),
		pelicula: toPelicula(row.pelicula),
		proyecciones: row.sesiones
			.map(toProyeccion)
			.sort((a, b) => a.fecha.getTime() - b.fecha.getTime()),
		entradas:
			row.entradas_espanol || row.entradas_vose
				? { espanol: row.entradas_espanol ?? undefined, vose: row.entradas_vose ?? undefined }
				: undefined,
		colaboracion: row.colaboracion_nombre
			? { nombre: row.colaboracion_nombre, logo: row.colaboracion_logo ?? undefined }
			: undefined,
		dateCreated: row.created_at,
	}
}

// ─── Caché en memoria ────────────────────────────────────────────────────────
// Una página renderiza varios componentes que piden lo mismo (carrusel, SEO,
// RichResults…). Cacheamos unos segundos por instancia de la función SSR.

const CACHE_TTL_MS = 60_000
const cache = new Map<string, { expires: number; value: Promise<unknown> }>()

function cached<T>(key: string, load: () => Promise<T>): Promise<T> {
	const hit = cache.get(key)
	if (hit && hit.expires > Date.now()) return hit.value as Promise<T>

	const value = load().catch((error) => {
		cache.delete(key)
		throw error
	})
	cache.set(key, { expires: Date.now() + CACHE_TTL_MS, value })
	return value
}

function hoyISO() {
	const d = new Date()
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
}

// ─── API pública ─────────────────────────────────────────────────────────────

export function getCines(): Promise<Cine[]> {
	if (!isSupabaseConfigured) return Promise.resolve(CINES)

	return cached("cines", async () => {
		const { data, error } = await supabase!
			.from("cines")
			.select("*")
			.eq("activo", true)
			.order("orden")
		if (error) throw new Error(`Supabase cines: ${error.message}`)
		return (data as CineRow[]).map(toCine)
	})
}

export async function getCine(url: string): Promise<Cine | undefined> {
	return (await getCines()).find((cine) => cine.url === url)
}

export async function getPelicula(id: string): Promise<Pelicula | undefined> {
	if (!isSupabaseConfigured) return PELICULAS.find((pelicula) => pelicula.id === id)

	return cached(`pelicula:${id}`, async () => {
		const { data, error } = await supabase!.from("peliculas").select("*").eq("id", id).maybeSingle()
		if (error) throw new Error(`Supabase pelicula ${id}: ${error.message}`)
		return data ? toPelicula(data as PeliculaRow) : undefined
	})
}

/**
 * Programaciones con sesiones desde hoy. Con Supabase solo se traen las sesiones
 * de hoy en adelante; los componentes siguen filtrando con `fecha >= now`.
 */
export function getGruposProyeccion(): Promise<GrupoProyeccion[]> {
	if (!isSupabaseConfigured) return Promise.resolve(GRUPOSPROYECCIONES)

	return cached("grupos", async () => {
		const { data, error } = await supabase!
			.from("programaciones")
			.select(
				"id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo, created_at," +
					" cine:cines!inner(*), pelicula:peliculas!inner(*), sesiones!inner(fecha, hora, vose)",
			)
			.gte("sesiones.fecha", hoyISO())
			.eq("cine.activo", true)
		if (error) throw new Error(`Supabase programaciones: ${error.message}`)
		return (data as unknown as ProgramacionRow[]).map(toGrupo)
	})
}
