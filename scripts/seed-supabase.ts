/**
 * Copia los datos de src/consts a Supabase (cines, películas, programaciones y sesiones).
 *
 *   yarn db:seed
 *
 * Necesita SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en .env. Cines y películas se
 * hacen con upsert (se puede repetir). Las programaciones solo se insertan si la
 * tabla está vacía, para no duplicarlas.
 */
import { createClient } from "@supabase/supabase-js"

import { CINES } from "@/consts/cines"
import { PELICULAS } from "@/consts/peliculas"
import { GRUPOSPROYECCIONES } from "@/consts/proyecciones"

const url = process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !serviceKey) {
	console.error("Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env")
	process.exit(1)
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } })

function fechaISO(fecha: Date) {
	return `${fecha.getFullYear()}-${String(fecha.getMonth() + 1).padStart(2, "0")}-${String(fecha.getDate()).padStart(2, "0")}`
}

async function check<T>(label: string, query: PromiseLike<{ data: T; error: { message: string } | null }>) {
	const { data, error } = await query
	if (error) throw new Error(`${label}: ${error.message}`)
	return data
}

async function main() {
	await check(
		"cines",
		db.from("cines").upsert(
			CINES.map((cine, orden) => ({
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
			})),
		),
	)
	console.log(`✔ ${CINES.length} cines`)

	await check(
		"peliculas",
		db.from("peliculas").upsert(
			PELICULAS.map((pelicula) => ({
				id: pelicula.id,
				nombre: pelicula.nombre,
				descripcion: pelicula.descripcion,
				imagen: pelicula.image,
				edad_recomendada: pelicula.edadRedomendada,
				video_url: pelicula.videoUrl ?? null,
			})),
		),
	)
	console.log(`✔ ${PELICULAS.length} películas`)

	const { count } = await db.from("programaciones").select("id", { count: "exact", head: true })
	if (count) {
		console.log(`· programaciones: la tabla ya tiene ${count} filas, no se insertan`)
		return
	}

	let sesiones = 0
	for (const grupo of GRUPOSPROYECCIONES) {
		if (!grupo.pelicula) {
			console.warn(`⚠ grupo ${grupo.grupo} de ${grupo.cine.url}: película inexistente, se omite`)
			continue
		}

		const [programacion] = await check(
			`programación ${grupo.cine.url}/${grupo.pelicula.id}`,
			db
				.from("programaciones")
				.insert({
					cine_id: grupo.cine.url,
					pelicula_id: grupo.pelicula.id,
					entradas_espanol: grupo.entradas?.espanol ?? null,
					entradas_vose: grupo.entradas?.vose ?? null,
					colaboracion_nombre: grupo.colaboracion?.nombre ?? null,
					colaboracion_logo: grupo.colaboracion?.logo ?? null,
				})
				.select("id"),
		)

		const filas = grupo.proyecciones.map((p) => ({
			programacion_id: programacion.id,
			fecha: fechaISO(p.fecha),
			hora: p.hora,
			vose: Boolean(p.vose),
		}))
		await check("sesiones", db.from("sesiones").upsert(filas, { onConflict: "programacion_id,fecha,hora" }))
		sesiones += filas.length
	}
	console.log(`✔ ${GRUPOSPROYECCIONES.length} programaciones, ${sesiones} sesiones`)
}

main().catch((error) => {
	console.error(error)
	process.exit(1)
})
