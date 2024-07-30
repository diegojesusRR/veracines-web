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

    ...getProyecciones(new Date('2024-07-27'), new Date('2024-07-29'), 'gru-4-mi-villano-favorito', 9, '22:00', 'garrucha'),
    ...getProyecciones(new Date('2024-07-30'), new Date('2024-08-01'), 'deadpool-y-lobezno', 10, '22:00', 'garrucha'),
    ...getProyecciones(new Date('2024-08-02'), new Date('2024-08-05'), 'inside-out-2', 11, '22:00', 'garrucha'),
    ...getProyecciones(new Date('2024-08-06'), new Date('2024-08-08'), 'padre-no-hay-mas-que-uno-4', 12, '22:00', 'garrucha'),

    ...getProyecciones(new Date('2024-08-09'), new Date('2024-08-12'), 'la-trampa', 13, '22:00', 'garrucha'),
    ...getProyecciones(new Date('2024-08-13'), new Date('2024-08-15'), 'cuerpo-escombro', 14, '22:00', 'garrucha'),

];

const proyeccionesVera: Proyeccion[] = [
    ...getProyecciones(new Date('2024-06-28'), new Date('2024-07-01'),'el-reino-del-planeta-de-los-simios', 1, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-02'), new Date('2024-07-04'),'un-lugar-tranquilo-dia-1', 2, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-05'), new Date('2024-07-08'), 'gru-4-mi-villano-favorito', 3, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-09'), new Date('2024-07-11'), 'bad-boys-ride-or-die', 4, '22:00', 'vera'),

    ...getProyecciones(new Date('2024-07-12'), new Date('2024-07-15'), 'inside-out-2', 5, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-16'), new Date('2024-07-18'), 'fly-by-the-moon', 6, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-19'), new Date('2024-07-22'), 'padre-no-hay-mas-que-uno-4', 7, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-23'), new Date('2024-07-25'), 'twisters', 8, '22:00', 'vera'),

    ...getProyecciones(new Date('2024-07-26'), new Date('2024-07-29'), 'deadpool-y-lobezno', 9, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-07-30'), new Date('2024-08-01'), 'gru-4-mi-villano-favorito', 10, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-08-02'), new Date('2024-08-05'), 'padre-no-hay-mas-que-uno-4', 11, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-08-06'), new Date('2024-08-08'), 'inside-out-2', 12, '22:00', 'vera'),

    ...getProyecciones(new Date('2024-08-09'), new Date('2024-08-12'), 'cuerpo-escombro', 13, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-08-13'), new Date('2024-08-15'), 'la-trampa', 14, '22:00', 'vera'),
    ...getProyecciones(new Date('2024-08-16'), new Date('2024-08-19'), 'buffalo-kids', 15, '22:00', 'vera'),

];

const proyeccionesRegio: Proyeccion[] = [
    ];

export const PROYECCIONES: Proyeccion[] = [
     ...proyeccionesVera,
    ...proyeccionesGarrucha,
    ...proyeccionesRegio
]