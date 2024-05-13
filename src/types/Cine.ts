import type {Servicio} from "@/types/Servicio.ts";


export interface Cine {
    url: string
    nombre: string
    ubicacion: string
    direccion: string
    servicios: Servicio[]
}
