import type {Proyeccion} from "@/types/Proyeccion.ts";


function getProyecciones(fechaInicio: Date, fechaFin: Date, pelicula: string, grupo: number, hora: string, cine: string): Proyeccion[] {
    //Array con los dias entre fecha inicio y fecha fin
    const dias = [];
    for (let d = fechaInicio; d <= fechaFin; d.setDate(d.getDate() + 1)) {
        dias.push(new Date(d));
    }

    return dias.map((fecha) => {
        return {
            grupo,
            cineId: cine,
            peliculaId: pelicula,
            fecha,
            hora
        }
    });
}

const proyeccionesGarrucha: Proyeccion[] = [
    ...getProyecciones(new Date('2024-06-28'), new Date('2024-07-01'),'un-lugar-tranquilo-dia-1', 1, '22:00', 'garrucha'),
    ...getProyecciones(new Date('2024-07-02'), new Date('2024-07-04'),'el-reino-del-planeta-de-los-simios', 2, '22:00', 'garrucha'),
    ...getProyecciones(new Date('2024-07-05'), new Date('2024-07-08'), 'bad-boys-ride-or-die', 3, '22:00', 'garrucha'),
    ...getProyecciones(new Date('2024-07-09'), new Date('2024-07-11'), 'gru-4-mi-villano-favorito', 4, '22:00', 'garrucha'),

    ...getProyecciones(new Date('2024-07-12'), new Date('2024-07-15'), 'fly-by-the-moon', 5, '22:00', 'garrucha'),
    ...getProyecciones(new Date('2024-07-16'), new Date('2024-07-18'), 'inside-out-2', 6, '22:00', 'garrucha'),
    ...getProyecciones(new Date('2024-07-19'), new Date('2024-07-22'), 'twisters', 7, '22:00', 'garrucha'),
    ...getProyecciones(new Date('2024-07-23'), new Date('2024-07-26'), 'padre-no-hay-mas-que-uno-4', 8, '22:00', 'garrucha'),

    ];

const proyeccionesVera: Proyeccion[] = [
    ...getProyecciones(new Date('2024-06-28'), new Date('2024-07-01'),'el-reino-del-planeta-de-los-simios', 1, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-02'), new Date('2024-07-04'),'un-lugar-tranquilo-dia-1', 2, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-05'), new Date('2024-07-08'), 'gru-4-mi-villano-favorito', 3, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-09'), new Date('2024-07-11'), 'bad-boys-ride-or-die', 4, '22:00', 'vera'),

    ...getProyecciones(new Date('2024-07-12'), new Date('2024-07-15'), 'inside-out-2', 5, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-16'), new Date('2024-07-18'), 'fly-by-the-moon', 6, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-19'), new Date('2024-07-22'), 'padre-no-hay-mas-que-uno-4', 7, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-23'), new Date('2024-07-26'), 'twisters', 8, '22:00', 'vera'),
];

const proyeccionesRegio: Proyeccion[] = [
    ];

export const PROYECCIONES: Proyeccion[] = [
     ...proyeccionesVera,
    ...proyeccionesGarrucha,
    ...proyeccionesRegio
]