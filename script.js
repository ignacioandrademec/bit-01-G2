"use strict"

// ! EJERCICIO ENTREGABLE: GESTIÓN DE CALIFICACIONES DE ESTUDIANTES
// ! José Ignacio Andrade Gutiérrez // Grupo 2

// TODO ---------------------------EJERCICIO 1: Estructura Inicial (Arrays)------------------

let estudiantes = [
    {
        nombre: "Jose Andrade",
        calificaciones: [9.3, 7.4, 8.1, 8.4, 9.9, 7.5, 8.9, 6.5, 9.1, 9.4]
    },
    {
        nombre: "Aurelio Cheverony",
        calificaciones: [7.8, 9.1, 6.4, 8.5, 9.9, 7.2, 6.8, 9.0, 8.3, 7.6]
    },
    {
        nombre: "Amadeus Mozart",
        calificaciones: [8.9, 7.7, 6.3, 9.8, 7.0, 8.4, 6.9, 9.2, 7.3, 8.1]
    },
    {
        nombre: "Clark Kent",
        calificaciones: [9.5, 6.8, 8.7, 7.9, 9.3, 8.0, 6.6, 7.1, 9.0, 8.2]
    },
    {
        nombre: "Peter Parker",
        calificaciones: [7.5, 9.7, 6.7, 8.6, 7.8, 9.2, 6.5, 8.9, 7.4, 9.1]
    }
];

// TODO -----------------------------EJERCICIO 2: Funciones Requeridas-------------------------

// ?  ------------------------------------------------- EJERCICIO 2.1 - mostrarEstudiantes:

function mostrarEstudiantes (arreglo){
    arreglo.forEach(function(alumno){
    console.log("2.1) Impresion de listado de Estudiantes", alumno);
});
}

mostrarEstudiantes(estudiantes);

// ? -------------------------------------------------- EJERCICIO 2.2 - calcularPromedio

// ? EJERCICIO 2.2.1 - creando un array de calificaciones
let calificacionesPorEstudiante = estudiantes.map(function(estudiante){
    return estudiante.calificaciones;
})

console.log("2.2.1) Array de Calificaciones por Estudiante: ", calificacionesPorEstudiante);

// ? EJERCICIO 2.2.2 - creando un array total de calificaciones:

let calificaciones1 = estudiantes[0].calificaciones;
let calificaciones2 = estudiantes[1].calificaciones;
let calificaciones3 = estudiantes[2].calificaciones;
let calificaciones4 = estudiantes[3].calificaciones;
let calificaciones5 = estudiantes[4].calificaciones;

// ? EJERCICIO 2.2.3 Usamos ahora el metodo contat para unir los arreglos:

let calificaciones = calificaciones1.concat(calificaciones2, calificaciones3, calificaciones4, calificaciones5);

console.log("2.2.3) Calificaciones totales: ", calificaciones);


// ? EJERCICIO 2.2.4 Procedemos a realizar la función para recibir calificaciones con el método reduce:

function calcularPromedio (array){
    let sumaCalificaciones = array.reduce(function(acomulador, puntuacionActual){
    return acomulador + puntuacionActual;
})
    let promedio = Math.round(sumaCalificaciones / array.length);

console.log("2.2.4) La suma de las calificaciones es: ", sumaCalificaciones);
console.log("2.2.4) El promedio de las calificaciones es: ", promedio);
}

calcularPromedio(calificaciones);

// ? ----------------------------------------------- EJERCICIO 2.3 - obtenerMejorCalificación

function obtenerMejorCalificacion (array){
    let maximaCalificacion = Math.max(...array);
    console.log(`2.3) La peor calificación en el curso fue de ${maximaCalificacion} sobre 10`);
}

obtenerMejorCalificacion(calificaciones);


// ? ----------------------------------------------- EJERCICIO 2.4 - obtenerPeorCalificación

function obtenerPeorCalificacion (array){
    let menorCalificacion = Math.min(...array);
    console.log(`2.4) La peor calificación en el curso fue de ${menorCalificacion} sobre 10`);
}

obtenerPeorCalificacion(calificaciones);


// ? -------------------------------------------------- EJERCICIO 2.5 - agregarCalificación


function agregarCalificacion (nombreEstudiante, nuevaCalificacion){
    let indexEstudiante = estudiantes.findIndex(function(name){
        return name.nombre === nombreEstudiante;
    });

    if (indexEstudiante === 0) {
        estudiantes[indexEstudiante].calificaciones.push(nuevaCalificacion);
        console.log(`2.5) Calificación agregada a ${estudiantes[0].nombre} exitosamente`);
    }else {
        console.log(`2.5) El estudiante ${estudiantes[0].nombre} No fue encontrado en el sistema`)
    }
    // if (indexEstudiante === 1) {
    //     estudiantes[indexEstudiante].calificaciones.push(nuevaCalificacion);
    //     console.log(`Calificación agregada a ${estudiantes[1].nombre} exitosamente`);
    // }else {
    //     console.log(`El estudiante ${estudiantes[1].nombre} No fue encontrado en el sistema`)
    // }
    // if (indexEstudiante === 2) {
    //     estudiantes[indexEstudiante].calificaciones.push(nuevaCalificacion);
    //     console.log(`Calificación agregada a ${estudiantes[2].nombre} exitosamente`);
    // }else {
    //     console.log(`El estudiante ${estudiantes[2].nombre} No fue encontrado en el sistema`)
    // }
    // if (indexEstudiante === 3) {
    //     estudiantes[indexEstudiante].calificaciones.push(nuevaCalificacion);
    //     console.log(`Calificación agregada a ${estudiantes[3].nombre} exitosamente`);
    // }else {
    //     console.log(`El estudiante ${estudiantes[3].nombre} No fue encontrado en el sistema`)
    // }
    // if (indexEstudiante === 4) {
    //     estudiantes[indexEstudiante].calificaciones.push(nuevaCalificacion);
    //     console.log(`Calificación agregada a ${estudiantes[4].nombre} exitosamente`);
    // }else {
    //     console.log(`El estudiante ${estudiantes[4].nombre} No fue encontrado en el sistema`)
    // }
}

agregarCalificacion ("Jose Andrade",9.5)

