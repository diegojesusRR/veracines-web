import type {Proyeccion} from "@/types/Proyeccion.ts";

const proyeccionesGarrucha: Proyeccion[] = [
    /*{
        grupo: 1,
        cineId: 'garrucha',
        peliculaId: 'garfield',
        fecha: new Date('2024-06-24'),
        hora: '22:00'
    },
    {
        grupo: 1,
        cineId: 'garrucha',
        peliculaId: 'garfield',
        fecha: new Date('2024-06-25'),
        hora: '22:00'
    },
    {
        grupo: 1,
        cineId: 'garrucha',
        peliculaId: 'garfield',
        fecha: new Date('2024-06-26'),
        hora: '20:00'
    },
    {
        grupo: 1,
        cineId: 'garrucha',
        peliculaId: 'garfield',
        fecha: new Date('2024-06-26'),
        hora: '22:00'
    },
    {
        grupo: 2,
        cineId: 'garrucha',
        peliculaId: 'deadpool-y-lobezno',
        fecha: new Date('2024-06-28'),
        hora: '22:00'
    },
    {
        grupo: 2,
        cineId: 'garrucha',
        peliculaId: 'deadpool-y-lobezno',
        fecha: new Date('2024-06-29'),
        hora: '22:00'
    },
    {
        grupo: 2,
        cineId: 'garrucha',
        peliculaId: 'deadpool-y-lobezno',
        fecha: new Date('2024-06-30'),
        hora: '22:00'
    },
    {
        grupo: 2,
        cineId: 'garrucha',
        peliculaId: 'deadpool-y-lobezno',
        fecha: new Date('2024-07-01'),
        hora: '22:00'
    },*/
    ];

const proyeccionesVera: Proyeccion[] = [
    /*{
        grupo: 1,
        cineId: 'vera',
        peliculaId: 'garfield',
        fecha: new Date('2024-06-24'),
        hora: '22:00'
    },
    {
        grupo: 1,
        cineId: 'vera',
        peliculaId: 'garfield',
        fecha: new Date('2024-06-25'),
        hora: '22:00'
    },
    {
        grupo: 1,
        cineId: 'vera',
        peliculaId: 'garfield',
        fecha: new Date('2024-06-26'),
        hora: '22:00'
    },
    {
        grupo: 1,
        cineId: 'vera',
        peliculaId: 'garfield',
        fecha: new Date('2024-06-27'),
        hora: '22:00'
    },
    {
        grupo: 2,
        cineId: 'vera',
        peliculaId: 'deadpool-y-lobezno',
        fecha: new Date('2024-06-28'),
        hora: '22:00'
    },
    {
        grupo: 2,
        cineId: 'vera',
        peliculaId: 'deadpool-y-lobezno',
        fecha: new Date('2024-06-29'),
        hora: '22:00'
    },
    {
        grupo: 2,
        cineId: 'vera',
        peliculaId: 'deadpool-y-lobezno',
        fecha: new Date('2024-06-30'),
        hora: '22:00'
    },
    {
        grupo: 2,
        cineId: 'vera',
        peliculaId: 'deadpool-y-lobezno',
        fecha: new Date('2024-07-01'),
        hora: '22:00'
    },
    {
        grupo: 3,
        cineId: 'vera',
        peliculaId: 'bad-boys-ride-or-die',
        fecha: new Date('2024-07-02'),
        hora: '22:00'
    },
    {
        grupo: 3,
        cineId: 'vera',
        peliculaId: 'bad-boys-ride-or-die',
        fecha: new Date('2024-07-03'),
        hora: '22:00'
    },
    {
        grupo: 3,
        cineId: 'vera',
        peliculaId: 'bad-boys-ride-or-die',
        fecha: new Date('2024-07-04'),
        hora: '22:00'
    },*/
];

const proyeccionesRegio: Proyeccion[] = [
    ];

export const PROYECCIONES: Proyeccion[] = [
    ...proyeccionesVera,
    ...proyeccionesGarrucha,
    ...proyeccionesRegio
]