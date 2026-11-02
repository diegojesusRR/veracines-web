import type {Cine} from "@/types/Cine.ts";
import type {Pelicula} from "@/types/Pelicula.ts";

export interface Proyeccion {
    fecha: Date
    hora: string
    vose?: string
}

export interface Colaboracion {
    nombre: string
    /** Fichero en Storage (imagenes/colaboraciones), ej: asprodalba.webp. Si empieza por "/", ruta en /public */
    logo?: string
}

export interface GrupoProyeccion {
    grupo: number
    cine: Cine
    pelicula: Pelicula,
    proyecciones: Proyeccion[]
    entradas?: {
        espanol?: string,
        vose?: string
    },
    dateCreated?: string,
    colaboracion?: Colaboracion
}