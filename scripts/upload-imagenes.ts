/**
 * Sube los carteles de public/img/peliculas (y los logos de public/img/colaboraciones)
 * al bucket STORAGE_BUCKET de Supabase Storage. Si un fichero ya existe, lo sobrescribe.
 *
 *   yarn storage:upload
 *
 * Necesita SUPABASE_URL y SUPABASE_SERVICE_ROLE_KEY en .env. Sin la service role
 * key, puedes arrastrar los ficheros en el panel: Storage → Veracines Storage.
 */
import { readdirSync, readFileSync } from "node:fs"
import { extname, join } from "node:path"

import { createClient } from "@supabase/supabase-js"

import { STORAGE_BUCKET } from "@/consts/storage"

const url = process.env.SUPABASE_URL
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!url || !serviceKey) {
	console.error("Faltan SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env")
	process.exit(1)
}

const db = createClient(url, serviceKey, { auth: { persistSession: false } })

const MIME: Record<string, string> = {
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".png": "image/png",
	".webp": "image/webp",
	".avif": "image/avif",
}

const CARPETAS = [
	{ local: "public/img/peliculas", destino: "peliculas" },
	{ local: "public/img/colaboraciones", destino: "colaboraciones" },
]

async function main() {
	let subidas = 0
	let fallos = 0

	for (const { local, destino } of CARPETAS) {
		const ficheros = readdirSync(local).filter((f) => MIME[extname(f).toLowerCase()])
		for (const fichero of ficheros) {
			const { error } = await db.storage
				.from(STORAGE_BUCKET)
				.upload(`${destino}/${fichero}`, readFileSync(join(local, fichero)), {
					contentType: MIME[extname(fichero).toLowerCase()],
					cacheControl: "31536000",
					upsert: true,
				})
			if (error) {
				fallos++
				console.error(`✖ ${destino}/${fichero}: ${error.message}`)
			} else {
				subidas++
			}
		}
		console.log(`✔ ${destino}: ${ficheros.length} ficheros procesados`)
	}

	console.log(`${subidas} subidas, ${fallos} fallos`)
	if (fallos) process.exit(1)
}

main()
