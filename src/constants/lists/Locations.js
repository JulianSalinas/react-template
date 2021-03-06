export default [
    {
        regex: "((biblio?t?e?c?a?)|(figueres)|(ferrer))",
        image: "biblioteca"
    },
    {
        regex: "(((labo?r?a?t?o?r?i?o?)|(aula)|(laimi?))\\s+b3(\\w|\\s|-)*10?)|((tierr\\w+)|(medi\\w+))",
        image: "tierra_media"
    },
    {
        regex: "((aula)|(edifi?c?i?o?)|(audito?r?i?o)|(labo?r?a?t?o?r?i?o?)|(laimi?))\\s+208",
        image: "laboratorio_208"
    },
    {
        regex: "((aula)|(edifi?c?i?o?)|(audito?r?i?o)|(labo?r?a?t?o?r?i?o?)|(laimi?))\\s+213",
        image: "laboratorio_213"
    },
    {
        regex: "(((labo?r?a?t?o?r?i?o?)|(laimi?))\\s+h)(\\w|\\s)+(rojo)",
        image: "laboratorio_h_rojo"
    },
    {
        regex: "(((labo?r?a?t?o?r?i?o?)|(laimi?))\\s+h)(\\w|\\s)+(azul)",
        image: "laboratorio_h_azul"
    },
    {
        regex: "(((labo?r?a?t?o?r?i?o?)|(laimi?))\\s+h)",
        image: "laboratorio_h"
    },
    {
        regex: "(centro)?(\\s|\\w|d)*artes?",
        image: "centro_artes"
    },
    {
        regex: "((cic)|(centro(\\w|\\s)+investigacion(\\w|\\s)+computacion))",
        image: "edificio_a5"
    },
    {
        regex: "((aula)|(edifi?c?i?o?)|(audito?r?i?o)|(labo?r?a?t?o?r?i?o?))?((\\w|\\s)+)?electron?i?c?a?",
        image: "edificio_electronica"
    },
    {
        regex: "(((aula)|(edifi?c?i?o?)|(audito?r?i?o)|(labo?r?a?t?o?r?i?o?))\\s+a4)|((escuela)?((\\w|\\s)+)?matem?a?t?i?c?a?)",
        image: "edificio_a4"
    },
    {
        regex: "((aula)|(edifi?c?i?o?)|(audito?r?i?o)|(labo?r?a?t?o?r?i?o?))\\s+a5",
        image: "edificio_a5"
    },
    {
        regex: "((aula)|(edifi?c?i?o?)|(audito?r?i?o)|(labo?r?a?t?o?r?i?o?))\\s+b1",
        image: "edificio_b1"
    },
    {
        regex: "((aula)|(edifi?c?i?o?)|(audito?r?i?o)|(labo?r?a?t?o?r?i?o?))\\s+c1",
        image: "edificio_c1"
    },
    {
        regex: "((aula)|(edifi?c?i?o?)|(audito?r?i?o)|(labo?r?a?t?o?r?i?o?))\\s+d",
        image: "edificio_d"
    },
    {
        regex: "((aula)|(edifi?c?i?o?)|(audito?r?i?o)|(labo?r?a?t?o?r?i?o?))\\s+f2?",
        image: "edificio_f2"
    },
    {
        regex: "((aula)|(edifi?c?i?o?)|(audito?r?i?o)|(labo?r?a?t?o?r?i?o?))\\s+b3?",
        image: "edificio_b3"
    },
    {
        regex: "((labo?r?a?t?o?r?i?o?)|(laimi?))\\s*1",
        image: "laimi_1"
    },
    {
        regex: "((labo?r?a?t?o?r?i?o?)|(laimi?))\\s*2",
        image: "laimi_2"
    },
    {
        regex: "(tecn?o?l?o?g?i?c?o?[\\s+]?)|(sede((\\w|\\s)+)?cartago)",
        image: "sede_cartago"
    }
]