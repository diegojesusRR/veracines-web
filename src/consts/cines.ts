import type {Cine} from "@/types/Cine.ts";


export const CINES: Cine[] = [
    {
        url: "vera",
        nombre: "Cine Terraza de Verano de Vera",
        corto: "Vera",
        color: "primary",
        telefono: "+34660391365",
        image: `https://www.veracines.es/img/veracines-logo.png`,
        localizacion: {
            ubicacionKey: "!1m18!1m12!1m3!1d6352.183416503645!2d-1.8651944235623443!3d37.24553154246919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad505dc0deb95%3A0x20c4e16b3ec9e8ba!2sCine%20de%20Vera!5e0!3m2!1ses!2ses!4v1715622722058!5m2!1ses!2ses",
            direccion: "C. Antonio de Torres, 2, 04620 Vera, Almería",
            descripcion: "Situado junto al colegio Reyes Católicos, en la calle Antonio de Torres, el cine de verano de Vera es un lugar ideal para disfrutar de una película al aire libre en Vera.",
            ciudad: "Vera",
            provincia: "Almería",
            codigoPostal: "04620",
            adressCounty: "ES"
        },
        servicios: [],
        horaFijaProyeccion: "22:00",
        ventaOnline: false,
        horario: {
            fechaInicio: `${new Date().getFullYear()}-06-23`,
            fechaFin: `${new Date().getFullYear()}-09-10`,
            diasSemana: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            horarioApertura: "21:00",
            horarioCierre: "00:30",
        }
    },
    {
        url: "regio",
        nombre: "Cine Regio de Vera",
        corto: "Regio",
        color: "secondary",
        image: `https://www.veracines.es/img/veracines-logo.png`,
        localizacion: {
            ubicacionKey: "!1m18!1m12!1m3!1d3176.0496114881794!2d-1.8706054238921004!3d37.24653037212324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad503b6424b21%3A0xb294666e35a7e06c!2sC.%20Radio%20Nacional%2C%20s%2Fn%2C%2004620%20Vera%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1716051070703!5m2!1ses!2ses",
            direccion: "C. Radio Nacional, s/n, 04620 Vera, Almería",
            descripcion: "Situado en pleno centro de Vera, junto a la Plaza Mayor, en Cine Regio de Ver podrás disfrutar de las mejores películas durante todo el año en un ambiente único.",
            ciudad: "Vera",
            provincia: "Almería",
            codigoPostal: "04620",
            adressCounty: "ES"
        },
        servicios: [],
        telefono: "+34660391365",
        ventaOnline: true,
        horario: {
            fechaInicio: `${new Date().getFullYear()}-10-01`,
            fechaFin: `${new Date().getFullYear()+1}-05-01`,
            diasSemana: ["Friday", "Saturday", "Sunday"],
            horarioApertura: "17:30",
            horarioCierre: "22:30",
        }
    },
];

