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
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'padre-no-hay-mas-que-uno-5')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-06-27'), new Date('2025-07-01'),  '22:00'),
        ],
    },
    {
        grupo: 2,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'jurassic-world-el-renacer')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-07-02'), new Date('2025-07-07'),  '22:00'),
        ],
    },
    {
        grupo: 3,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'como-entrenar-a-tu-dragon-la-pelicula')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-07-08'), new Date('2025-07-10'),  '22:00'),
        ],
    },
]

const cineRegio = CINES.find(cine => cine.url === 'regio')!;
const gruposProyeccionesRegio: GrupoProyeccion[] = [
    {
        grupo: 1,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'lilo-y-stitch')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-06-27'), new Date('2025-07-01'),  '20:00'),
            ...getProyecciones(new Date('2025-06-27'), new Date('2025-07-01'),  '22:00'),

        ],
    },
    {
        grupo: 2,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'padre-no-hay-mas-que-uno-5')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-07-02'), new Date('2025-07-03'),  '20:00'),
            ...getProyecciones(new Date('2025-07-02'), new Date('2025-07-04'),  '22:00'),

        ],
    },
    {
        grupo: 2,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'f1-la-pelicula')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-07-05'), new Date('2025-07-09'),  '21:00'),
        ],
    },
]

export const GRUPOSPROYECCIONES: GrupoProyeccion[] = [
    ...gruposProyeccionesVera,
    //...gruposProyeccionesGarrucha,
    ...gruposProyeccionesRegio
]