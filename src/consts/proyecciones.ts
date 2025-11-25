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
    {
        grupo: 4,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'elio')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-07-11'), new Date('2025-07-14'),  '22:00'),
        ],
    },
    {
        grupo: 5,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'superman-2025')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-07-15'), new Date('2025-07-17'),  '22:00'),
        ],
    },
    {
        grupo: 6,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'pitufos-2025')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-07-18'), new Date('2025-07-21'),  '22:00'),
        ],
    },
    {
        grupo: 7,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'padre-no-hay-mas-que-uno-5')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-07-22'), new Date('2025-07-24'),  '22:00'),
        ],
    },
    {
        grupo: 8,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'los-4-fantasticos-primeros-pasos')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-07-25'), new Date('2025-07-28'),  '22:00'),
        ],
    },
    {
        grupo: 9,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'f1-la-pelicula')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-07-29'), new Date('2025-07-31'),  '22:00'),
        ],
    },
    {
        grupo: 10,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'los-tipos-malos-2')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-01'), new Date('2025-08-04'),  '22:00'),
        ],
    },
    {
        grupo: 11,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'jurassic-world-el-renacer')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-05'), new Date('2025-08-07'),  '22:00'),
        ],
    },
    {
        grupo: 12,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'karate-kid-leyendas')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-08'), new Date('2025-08-11'),  '22:00'),
        ],
    },
    {
        grupo: 13,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'padre-no-hay-mas-que-uno-5')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-12'), new Date('2025-08-13'),  '22:00'),
        ],
    },
    {
        grupo: 14,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'materialistas')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-14'), new Date('2025-08-17'),  '22:00'),
        ],
    },
    {
        grupo: 15,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'los-4-fantasticos-primeros-pasos')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-18'), new Date('2025-08-19'),  '22:00'),
        ],
    },
    {
        grupo: 16,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'los-tipos-malos-2')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-20'), new Date('2025-08-21'),  '22:00'),
        ],
    },
    {
        grupo: 17,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'jurassic-world-el-renacer')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-22'), new Date('2025-08-23'),  '22:00'),
        ],
    },
    {
        grupo: 18,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'f1-la-pelicula')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-24'), new Date('2025-08-25'),  '22:00'),
        ],
    },
    {
        grupo: 19,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'weapons')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-26'), new Date('2025-08-28'),  '22:00'),
        ],
    },
    {
        grupo: 19,
        cine: cineVera,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'sin-cobertura')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-08-29'), new Date('2025-09-01'),  '22:00'),
        ],
    },
]

const cineRegio = CINES.find(cine => cine.url === 'regio')!;
const gruposProyeccionesRegio: GrupoProyeccion[] = [
    {
        grupo: 1,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'el-cautivo')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-10-31'), new Date('2025-10-31'),  '20:00'),
            ...getProyecciones(new Date('2025-11-01'), new Date('2025-11-02'),  '18:00'),
            ...getProyecciones(new Date('2025-11-01'), new Date('2025-11-01'),  '20:30'),
        ],
    },
    {
        grupo: 2,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'la-cena')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-11-07'), new Date('2025-11-08'),  '20:00'),
            ...getProyecciones(new Date('2025-11-08'), new Date('2025-11-09'),  '18:00'),
        ],
    },
    {
        grupo: 3,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'los-domingos')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-11-14'), new Date('2025-11-14'),  '20:00'),
            ...getProyecciones(new Date('2025-11-15'), new Date('2025-11-16'),  '18:00'),
            ...getProyecciones(new Date('2025-11-15'), new Date('2025-11-15'),  '20:30'),
        ],
    },
    {
        grupo: 4,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'downton-abbey-el-gran-final')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-11-21'), new Date('2025-11-21'),  '20:00'),
            ...getProyecciones(new Date('2025-11-22'), new Date('2025-11-23'),  '18:00'),
            ...getProyecciones(new Date('2025-11-22'), new Date('2025-11-22'),  '20:30'),
            ...getProyecciones(new Date('2025-11-27'), new Date('2025-11-27'),  '20:00', 'VOSE'),
        ],
    },
    {
        grupo: 5,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'ahora-me-ves-3')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-11-28'), new Date('2025-11-28'),  '20:00'),
            ...getProyecciones(new Date('2025-11-29'), new Date('2025-11-30'),  '18:00'),
            ...getProyecciones(new Date('2025-11-29'), new Date('2025-11-29'),  '20:30'),
            ...getProyecciones(new Date('2025-12-04'), new Date('2025-12-04'),  '20:00', 'VOSE'),
        ],
    },
    {
        grupo: 5,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'wicked-2')!,
        proyecciones: [
            ...getProyecciones(new Date('2025-12-05'), new Date('2025-12-05'),  '20:00'),
            ...getProyecciones(new Date('2025-12-06'), new Date('2025-12-08'),  '18:00'),
            ...getProyecciones(new Date('2025-12-06'), new Date('2025-12-06'),  '20:30'),
            ...getProyecciones(new Date('2025-12-11'), new Date('2025-12-11'),  '20:00', 'VOSE'),
        ],
    },
]

export const GRUPOSPROYECCIONES: GrupoProyeccion[] = [
    ...gruposProyeccionesVera,
    //...gruposProyeccionesGarrucha,
    ...gruposProyeccionesRegio
]