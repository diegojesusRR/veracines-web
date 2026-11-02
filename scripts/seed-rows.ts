/**
 * Convierte src/consts en filas de las tablas de Supabase.
 * Lo usan scripts/seed-supabase.ts (vía API) y scripts/generate-seed-sql.ts (SQL).
 */
import { CINES } from "@/consts/cines"
import { PELICULAS } from "@/consts/peliculas"
import { GRUPOSPROYECCIONES } from "@/consts/proyecciones"

function fechaISO(fecha: Date) {
	return `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, "0")}-${String(fecha.getDate()).padStart(2, "0")}`
}

export const cineRows = CINES.map((cine, orden) => ({
	id: cine.url,
	nombre: cine.nombre,
	corto: cine.corto,
	color: cine.color,
	imagen: cine.image,
	telefono: cine.telefono,
	hora_fija_proyeccion: cine.horaFijaProyeccion ?? null,
	venta_online: cine.ventaOnline,
	url_venta_online: cine.urlVentaOnline ?? null,
	direccion: cine.localizacion.direccion,
	descripcion: cine.localizacion.descripcion,
	ciudad: cine.localizacion.ciudad,
	provincia: cine.localizacion.provincia,
	codigo_postal: cine.localizacion.codigoPostal,
	pais: cine.localizacion.adressCounty,
	maps_embed_key: cine.localizacion.ubicacionKey,
	temporada_inicio: cine.horario.fechaInicio.slice(5),
	temporada_fin: cine.horario.fechaFin.slice(5),
	dias_semana: cine.horario.diasSemana,
	hora_apertura: cine.horario.horarioApertura,
	hora_cierre: cine.horario.horarioCierre,
	orden,
}))

export const peliculaRows = PELICULAS.map((pelicula) => ({
	id: pelicula.id,
	nombre: pelicula.nombre,
	descripcion: pelicula.descripcion,
	imagen: pelicula.image,
	edad_recomendada: pelicula.edadRedomendada,
	video_url: pelicula.videoUrl ?? null,
}))

/** Grupos con película inexistente en PELICULAS se omiten (find(...)! devolvió undefined). */
export const omitidos = GRUPOSPROYECCIONES.filter((grupo) => !grupo.pelicula)

export const programacionRows = GRUPOSPROYECCIONES.filter((grupo) => grupo.pelicula).map((grupo) => ({
	programacion: {
		cine_id: grupo.cine.url,
		pelicula_id: grupo.pelicula.id,
		entradas_espanol: grupo.entradas?.espanol ?? null,
		entradas_vose: grupo.entradas?.vose ?? null,
		colaboracion_nombre: grupo.colaboracion?.nombre ?? null,
		colaboracion_logo: grupo.colaboracion?.logo ?? null,
	},
	// Sin duplicados: la tabla tiene unique (programacion_id, fecha, hora)
	sesiones: [
		...new Map(
			grupo.proyecciones.map((p) => {
				const fila = { fecha: fechaISO(p.fecha), hora: p.hora, vose: Boolean(p.vose) }
				return [`${fila.fecha} ${fila.hora}`, fila] as const
			}),
		).values(),
	],
}))
