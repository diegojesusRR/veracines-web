import type {Servicio} from "@/types/Servicio.ts";


export interface Cine {
    url: string
    nombre: string
    color: string
    localizacion: {
        ubicacionKey: string,
        direccion: string,
        descripcion: string,
    }
    servicios: Servicio[]
}