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
    console.log("Impresion de listado de Estudiantes", alumno);
});
}

mostrarEstudiantes(estudiantes);

// ? -------------------------------------------------- EJERCICIO 2.2 - calcularPromedio

// ? EJERCICIO 2.2.1 - creando un array de calificaciones
let calificacionesPorEstudiante = estudiantes.map(function(estudiante){
    return estudiante.calificaciones;
})

console.log("Array de Calificaciones por Estudiante: ", calificacionesPorEstudiante);

// ? EJERCICIO 2.2.2 - creando un array total de calificaciones:

let calificaciones1 = estudiantes[0].calificaciones;
let calificaciones2 = estudiantes[1].calificaciones;
let calificaciones3 = estudiantes[2].calificaciones;
let calificaciones4 = estudiantes[3].calificaciones;
let calificaciones5 = estudiantes[4].calificaciones;

// ? EJERCICIO 2.2.3 Usamos ahora el metodo contat para unir los arreglos:

let calificaciones = calificaciones1.concat(calificaciones2, calificaciones3, calificaciones4, calificaciones5);

console.log("Calificaciones totales: ", calificaciones);


// ? EJERCICIO 2.2.4 Procedemos a realizar la función para recibir calificaciones con el método reduce:

function calcularPromedio (array){
    let sumaCalificaciones = array.reduce(function(acomulador, puntuacionActual){
    return acomulador + puntuacionActual;
})
    let promedio = sumaCalificaciones / array.length;

console.log("La suma de las calificaciones es: ", sumaCalificaciones);
console.log("El promedio de las calificaciones es: ", promedio);
}

calcularPromedio(calificaciones);

