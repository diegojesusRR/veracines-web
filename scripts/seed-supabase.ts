/**
 * Copia los datos de src/consts a Supabase (cines, películas, programaciones y sesiones).
 *
 *   yarn db:seed
 *
 * Necesita SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en .env. Cines y películas se
 * hacen con upsert (se puede repetir). Las programaciones solo se insertan si la
 * tabla está vacía, para no duplicarlas.
 *
 * Sin claves, usa `yarn db:seed:sql` y ejecuta supabase/seed.sql a mano.
 */
import { createClient } from "@supabase/supabase-js"

import { cineRows, omitidos, peliculaRows, programacionRows } from "./seed-rows"

const url = process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !serviceKey) {
	console.error("Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env")
	process.exit(1)
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } })

async function check<T>(label: string, query: PromiseLike<{ data: T; error: { message: string } | null }>) {
	const { data, error } = await query
	if (error) throw new Error(`${label}: ${error.message}`)
	return data
}

async function main() {
	await check("cines", db.from("cines").upsert(cineRows))
	console.log(`✔ ${cineRows.length} cines`)

	await check("peliculas", db.from("peliculas").upsert(peliculaRows))
	console.log(`✔ ${peliculaRows.length} películas`)

	const { count } = await db.from("programaciones").select("id", { count: "exact", head: true })
	if (count) {
		console.log(`· programaciones: la tabla ya tiene ${count} filas, no se insertan`)
		return
	}

	for (const grupo of omitidos) console.warn(`⚠ grupo ${grupo.grupo} de ${grupo.cine.url}: película inexistente, se omite`)

	let sesiones = 0
	for (const { programacion, sesiones: filas } of programacionRows) {
		const [{ id }] = await check(
			`programación ${programacion.cine_id}/${programacion.pelicula_id}`,
			db.from("programaciones").insert(programacion).select("id"),
		)
		await check("sesiones", db.from("sesiones").insert(filas.map((fila) => ({ ...fila, programacion_id: id }))))
		sesiones += filas.length
	}
	console.log(`✔ ${programacionRows.length} programaciones, ${sesiones} sesiones`)
}

main().catch((error) => {
	console.error(error)
	process.exit(1)
})
