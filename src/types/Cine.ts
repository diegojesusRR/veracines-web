import type {Servicio} from "@/types/Servicio.ts";


export interface Cine {
    url: string
    nombre: string
    corto: string
    color: string
    image: string
    localizacion: {
        ubicacionKey: string,
        direccion: string,
        descripcion: string,
        codigoPostal: string,
        ciudad: string,
        provincia: string,
        adressCounty: string,
    }
    servicios: Servicio[],
    telefono: string,
    horaFijaProyeccion?: string,
    ventaOnline: boolean
    horario: {
        fechaInicio: string,
        fechaFin: string,
        diasSemana: string[],
        horarioApertura: string,
        horarioCierre: string,
    },
    images?: {
        url: string,
        caption: string,
        width: string,
        height: string,
    }[]
}
