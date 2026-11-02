/**
 * Genera supabase/seed.sql a partir de src/consts, para ejecutarlo en DataGrip
 * o en el SQL Editor de Supabase sin necesitar claves.
 *
 *   yarn db:seed:sql
 *
 * Cines y películas se insertan con upsert. Las programaciones solo si la tabla
 * está vacía: si no, la transacción entera se aborta.
 */
import { writeFileSync } from "node:fs"

import { cineRows, omitidos, peliculaRows, programacionRows } from "./seed-rows"

type Valor = string | number | boolean | null | string[]

function sql(valor: Valor): string {
	if (valor === null) return "null"
	if (typeof valor === "boolean" || typeof valor === "number") return String(valor)
	if (Array.isArray(valor)) return `array[${valor.map(sql).join(", ")}]::text[]`
	return `'${valor.replaceAll("'", "''")}'`
}

function insert(tabla: string, filas: Record<string, Valor>[], conflicto?: string) {
	const columnas = Object.keys(filas[0])
	const valores = filas.map((fila) => `    (${columnas.map((c) => sql(fila[c])).join(", ")})`).join(",\n")
	const upsert = conflicto
		? `\non conflict (${conflicto}) do update set\n    ${columnas
				.filter((c) => c !== conflicto)
				.map((c) => `${c} = excluded.${c}`)
				.join(",\n    ")}`
		: ""
	return `insert into public.${tabla} (${columnas.join(", ")}) values\n${valores}${upsert};`
}

const programaciones = programacionRows.map(({ programacion, sesiones }) => {
	const columnas = Object.keys(programacion) as (keyof typeof programacion)[]
	return `with p as (
    insert into public.programaciones (${columnas.join(", ")})
    values (${columnas.map((c) => sql(programacion[c])).join(", ")})
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
${sesiones.map((s) => `    (${sql(s.fecha)}, ${sql(s.hora)}, ${sql(s.vose)})`).join(",\n")}
) as s (fecha, hora, vose);`
})

const salida = `-- Generado por scripts/generate-seed-sql.ts a partir de src/consts. No editar a mano.
-- ${cineRows.length} cines, ${peliculaRows.length} películas, ${programacionRows.length} programaciones.

begin;

do $$
begin
    if exists (select 1 from public.programaciones) then
        raise exception 'programaciones ya tiene datos: este seed solo se aplica sobre tablas vacías';
    end if;
end $$;

${insert("cines", cineRows, "id")}

${insert("peliculas", peliculaRows, "id")}

${programaciones.join("\n\n")}

commit;
`

writeFileSync("supabase/seed.sql", salida)
console.log(
	`✔ supabase/seed.sql: ${cineRows.length} cines, ${peliculaRows.length} películas, ${programacionRows.length} programaciones`,
)
for (const grupo of omitidos) console.warn(`⚠ grupo ${grupo.grupo} de ${grupo.cine.url}: película inexistente, omitido`)
