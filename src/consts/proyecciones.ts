import type {GrupoProyeccion, Proyeccion} from "@/types/Proyeccion.ts";
import {PELICULAS} from "@/consts/peliculas.ts";
import {CINES} from "@/consts/cines.ts";


function getProyecciones(fechaInicio: Date, fechaFin: Date, hora: string, vose?: string): Proyeccion[] {
    //Array con los dias entre fecha inicio y fecha fin
    const dias = [];
    for (let d = fechaInicio; d <= fechaFin; d.setDate(d.getDate() + 1)) {
        const fecha = new Date(d);
        fecha.setHours(23, 59, 59, 999);
        dias.push(fecha);
    }

    return dias.map((fecha) => {
        return {
            fecha,
            hora,
            vose
        }
    });
}

//const cineGarrucha = CINES.find(cine => cine.url === 'garrucha')!;
//const gruposProyeccionesGarrucha: GrupoProyeccion[] = []

const cineVera = CINES.find(cine => cine.url === 'vera')!;
const gruposProyeccionesVera: GrupoProyeccion[] = [
    {
        grupo: 1,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'michael')!,
        proyecciones: [
            ...getProyecciones(new Date('2026-06-26'), new Date('2026-06-27'), '22:00'),
        ],
    },
    {
        grupo: 2,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'torrente-presidente')!,
        proyecciones: [
            ...getProyecciones(new Date('2026-06-28'), new Date('2026-06-29'), '22:00'),
        ],
    },
    {
        grupo: 3,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'incontrolable')!,
        proyecciones: [
            ...getProyecciones(new Date('2026-06-30'), new Date('2026-06-30'), '22:00'),
        ],
    },
    {
        grupo: 4,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'minions-and-monsters')!,
        proyecciones: [
            ...getProyecciones(new Date('2026-07-01'), new Date('2026-07-06'), '22:00'),
        ],
    },
    {
        grupo: 5,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'el-dia-de-la-revelacion')!,
        proyecciones: [
            ...getProyecciones(new Date('2026-07-07'), new Date('2026-07-09'), '22:00'),
        ],
    },
    {
        grupo: 6,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'haciendo-amigos')!,
        proyecciones: [
            ...getProyecciones(new Date('2026-07-10'), new Date('2026-07-13'), '22:00'),
        ],
    },
    {
        grupo: 7,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'toy-story-5')!,
        proyecciones: [
            ...getProyecciones(new Date('2026-07-14'), new Date('2026-07-16'), '22:00'),
        ],
    },
    {
        grupo: 8,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'la-odisea')!,
        proyecciones: [
            ...getProyecciones(new Date('2026-07-17'), new Date('2026-07-20'), '22:00'),
        ],
    },
]

const cineRegio = CINES.find(cine => cine.url === 'regio')!;
const gruposProyeccionesRegio: GrupoProyeccion[] = [
]

export const GRUPOSPROYECCIONES: GrupoProyeccion[] = [
    ...gruposProyeccionesVera,
    //...gruposProyeccionesGarrucha,
    ...gruposProyeccionesRegio
]