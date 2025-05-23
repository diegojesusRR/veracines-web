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

const cineGarrucha = CINES.find(cine => cine.url === 'garrucha')!;
const gruposProyeccionesGarrucha: GrupoProyeccion[] = []

const cineVera = CINES.find(cine => cine.url === 'vera')!;
const gruposProyeccionesVera: GrupoProyeccion[] = []

const cineRegio = CINES.find(cine => cine.url === 'regio')!;
const gruposProyeccionesRegio: GrupoProyeccion[] = [
    {
        grupo: 1,
        cine: cineRegio,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'gladiator-2')!,
        proyecciones: [
            ...getProyecciones(new Date('2024-11-15'), new Date('2024-11-17'),  '17:30'),
            ...getProyecciones(new Date('2024-11-15'), new Date('2024-11-17'),  '20:30'),
            ...getProyecciones(new Date('2024-11-21'), new Date('2024-11-21'), '20:00', 'en'),
        ],
        entradas: {
            espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1133&cine=REGIO',
            vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1134&cine=REGIO'
        }
    },
    {
        grupo: 2,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'wicked')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2024-11-22'), new Date('2024-11-22'),  '20:00'),
            ...getProyecciones(new Date('2024-11-23'), new Date('2024-11-23'),  '17:30'),
            ...getProyecciones(new Date('2024-11-23'), new Date('2024-11-23'),  '20:30'),
            ...getProyecciones(new Date('2024-11-24'), new Date('2024-11-24'),  '17:30'),
            ...getProyecciones(new Date('2024-11-28'), new Date('2024-11-28'),  '20:00', 'en')
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 3,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'la-infiltrada')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2024-11-30'), new Date('2024-12-01'),  '18:00'),
            ...getProyecciones(new Date('2024-11-30'), new Date('2024-11-30'),  '20:30'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 4,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'gladiator-2')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2024-12-06'), new Date('2024-12-08'),  '17:30'),
            ...getProyecciones(new Date('2024-12-07'), new Date('2024-12-07'),  '20:30'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 4,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'vaiana-2')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2024-12-13'), new Date('2024-12-13'),  '19:00'),
            ...getProyecciones(new Date('2024-12-14'), new Date('2024-12-15'),  '17:00'),
            ...getProyecciones(new Date('2024-12-14'), new Date('2024-12-14'),  '19:00'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 5,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'mufasa')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2024-12-20'), new Date('2024-12-23'),  '18:00'),
            ...getProyecciones(new Date('2024-12-20'), new Date('2024-12-23'),  '20:30'),
            ...getProyecciones(new Date('2024-12-26'), new Date('2024-12-26'),  '18:00'),
            ...getProyecciones(new Date('2024-12-26'), new Date('2024-12-26'),  '20:30'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 6,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'sonic-3')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2024-12-27'), new Date('2024-12-30'),  '18:00'),
            ...getProyecciones(new Date('2024-12-27'), new Date('2024-12-30'),  '20:30'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 7,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'mufasa')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-01-02'), new Date('2025-01-04'),  '18:00'),
            ...getProyecciones(new Date('2025-01-04'), new Date('2025-01-04'),  '20:30'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 7,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'un-lio-de-millones')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-01-11'), new Date('2025-01-12'),  '18:00'),
            ...getProyecciones(new Date('2025-01-10'), new Date('2025-01-11'),  '20:00'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 8,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'conclave')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-01-17'), new Date('2025-01-17'),  '20:00'),
            ...getProyecciones(new Date('2025-01-18'), new Date('2025-01-19'),  '18:00'),
            ...getProyecciones(new Date('2025-01-18'), new Date('2025-01-18'),  '20:30'),
            ...getProyecciones(new Date('2025-01-23'), new Date('2025-01-23'),  '20:00', 'en'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 9,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'al-otro-barrio')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-01-25'), new Date('2025-01-26'),  '18:00'),
            ...getProyecciones(new Date('2025-01-24'), new Date('2025-01-25'),  '20:00'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 10,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'conclave')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-01-30'), new Date('2025-01-30'),  '20:00', 'en'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 11,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'the-brutalist')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-01-31'), new Date('2025-01-31'),  '20:00'),
            ...getProyecciones(new Date('2025-02-01'), new Date('2025-02-02'),  '18:00'),
            ...getProyecciones(new Date('2025-02-06'), new Date('2025-02-06'),  '20:00', 'en'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 13,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'mikaela')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-02-08'), new Date('2025-02-09'),  '18:00'),
            ...getProyecciones(new Date('2025-02-07'), new Date('2025-02-08'),  '20:00'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 14,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'polican')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-02-14'), new Date('2025-02-14'),  '19:00'),
            ...getProyecciones(new Date('2025-02-15'), new Date('2025-02-16'),  '18:00'),
            ...getProyecciones(new Date('2025-02-15'), new Date('2025-02-15'),  '20:00'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 14,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'bridget-jones')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-02-21'), new Date('2025-02-21'),  '20:00'),
            ...getProyecciones(new Date('2025-02-22'), new Date('2025-02-23'),  '18:00'),
            ...getProyecciones(new Date('2025-02-22'), new Date('2025-02-22'),  '20:30'),
            ...getProyecciones(new Date('2025-02-27'), new Date('2025-02-27'),  '20:00', 'en'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 15,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'capitan-america-un-mundo-nuevo')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-02-28'), new Date('2025-03-02'),  '18:00'),
            ...getProyecciones(new Date('2025-02-28'), new Date('2025-03-01'),  '20:30'),
            ...getProyecciones(new Date('2025-03-06'), new Date('2025-03-06'),  '20:00', 'en'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 16,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'paddington-aventura-en-la-selva')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-03-08'), new Date('2025-03-09'),  '18:00'),
            ...getProyecciones(new Date('2025-03-08'), new Date('2025-03-08'),  '20:00'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 17,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'a-complete-unknown')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-03-14'), new Date('2025-03-14'),  '20:00'),
            ...getProyecciones(new Date('2025-03-15'), new Date('2025-03-16'),  '18:00'),
            ...getProyecciones(new Date('2025-03-15'), new Date('2025-03-15'),  '20:30'),
            ...getProyecciones(new Date('2025-03-20'), new Date('2025-03-20'),  '20:00', 'en'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 18,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'wolfgang')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-03-22'), new Date('2025-03-23'),  '18:00'),
            ...getProyecciones(new Date('2025-03-21'), new Date('2025-03-22'),  '20:00'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 19,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'blancanieves')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-03-29'), new Date('2025-03-30'),  '18:00'),
            ...getProyecciones(new Date('2025-03-28'), new Date('2025-03-29'),  '20:00'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 20,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'a-working-man')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-04-04'), new Date('2025-04-04'),  '20:00'),
            ...getProyecciones(new Date('2025-04-05'), new Date('2025-04-05'),  '18:00'),
            ...getProyecciones(new Date('2025-04-05'), new Date('2025-04-05'),  '20:30'),
            ...getProyecciones(new Date('2025-04-06'), new Date('2025-04-06'),  '18:00'),

        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 21,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'tierra-de-nadie')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-04-12'), new Date('2025-04-13'),  '18:30'),
            ...getProyecciones(new Date('2025-04-12'), new Date('2025-04-12'),  '20:30'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 22,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'una-pelicula-de-minecraft')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-04-19'), new Date('2025-04-20'),  '18:30'),
            ...getProyecciones(new Date('2025-04-19'), new Date('2025-04-20'),  '20:30'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
    {
        grupo: 23,
        pelicula: PELICULAS.find(pelicula => pelicula.id === 'un-funeral-de-locos')!,
        cine: cineRegio,
        proyecciones: [
            ...getProyecciones(new Date('2025-04-26'), new Date('2025-04-27'),  '18:30'),
            ...getProyecciones(new Date('2025-04-25'), new Date('2025-04-26'),  '20:30'),
        ],
        // entradas: {
        //     espanol: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1135&cine=REGIO',
        //     vose: 'https://kinetike.com:83/views/sesionesFuturas.aspx?idPelicula=1136&cine=REGIO'
        // }
    },
]

export const GRUPOSPROYECCIONES: GrupoProyeccion[] = [
    ...gruposProyeccionesVera,
    ...gruposProyeccionesGarrucha,
    ...gruposProyeccionesRegio
]