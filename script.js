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
        calificaciones: [7.8, 9.1, 6.4, 8.5, 2.6, 7.2, 6.8, 9.0, 8.3, 7.6]
    },
    {
        nombre: "Amadeus Mozart",
        calificaciones: [8.9, 7.7, 2.3, 9.8, 3.0, 1.4, 1.8, 9.2, 1.3, 8.1]
    },
    {
        nombre: "Clark Kent",
        calificaciones: [9.5, 1.8, 8.7, 5.9, 7.2, 4.0, 0.6, 7.1, 9.0, 1.2]
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
    return maximaCalificacion;

}

obtenerMejorCalificacion(calificaciones);


// ? ----------------------------------------------- EJERCICIO 2.4 - obtenerPeorCalificación

function obtenerPeorCalificacion (array){
    let menorCalificacion = Math.min(...array);
    console.log(`2.4) La peor calificación en el curso fue de ${menorCalificacion} sobre 10`);
    return menorCalificacion;
}

obtenerPeorCalificacion(calificaciones);


// ? -------------------------------------------------- EJERCICIO 2.5 - agregarCalificación


function agregarCalificacion (nombreEstudiante, nuevaCalificacion){
    let alumno = estudiantes.find(function(name){
        return name.nombre === nombreEstudiante;
    });

    if (alumno) {
        alumno.calificaciones.push(nuevaCalificacion);
        console.log(`2.5) Calificación agregada a ${alumno.nombre} exitosamente`);
    }else {
        console.log(`2.5) El estudiante ${nombreEstudiante} No fue encontrado en el sistema`)
    }
}

agregarCalificacion ("Jose Andrade",9.5)

// ? ---------------------------------------------- EJERCICIO 2.6 - eliminarultimaCalificación

function eliminarultimaCalificacion (nombreEstudiante){
    let alumno = estudiantes.find(function(name){
        return name.nombre === nombreEstudiante;
    });

    if (alumno || alumno !== estudiantes.nombre) {
        alumno.calificaciones.pop();
        console.log(`2.6) Calificación del alumno ${alumno.nombre} eliminada exitosamente`);
    }else {
        console.log(`2.6) El estudiante ${nombreEstudiante} No fue encontrado en el sistema`)
    }
}

eliminarultimaCalificacion ("Peter Parker")

// ? -------------------------------------------- EJERCICIO 2.7 - filtrarEstudiantesAprobados

let promedioMinimo = 6

function filtrarEstudiantesAprobados(promedioMinimo) {
    let filtro = estudiantes.filter(function(estudiante) {
        let suma = 0;
        for (let i = 0; i < estudiante.calificaciones.length; i++) {
            suma += estudiante.calificaciones[i];
        }

        let promedio = suma / estudiante.calificaciones.length;
        return promedio >= promedioMinimo;
    });

    if (filtro.length >= 1) {
        console.log("2.7) Los estudiantes Aprobados son:", filtro);
    } else {
        console.log("2.7) No hay estudiantes aprobados.");
    }
}

filtrarEstudiantesAprobados(promedioMinimo)

// ? ---------------------------------------- EJERCICIO 2.8 - ordenarEstudiantesporNombre

function ordenarEstudiantesporNombre (){
    estudiantes.sort(function(a,b){
        if (a.nombre < b.nombre) {
            return -1
        }

        if (a.nombre < b.nombre) {
            return 1
        }
        return 0;
    })
    console.log(" 2.8) Lista de Alumnos Alfabeticamente" ,estudiantes);
}

ordenarEstudiantesporNombre();

// ? ------------------------------------------- EJERCICIO 2.9 - GenerarReporteIndividual

function calcularPromedio(estudiantes) {
    let sumaCalificaciones = estudiantes.reduce(function(acomulador, puntuacionActual){
        return acomulador + puntuacionActual;
    });
    let promedio = Math.round(sumaCalificaciones / estudiantes.length);
    return promedio;
}


function generarReporteIndividual(nombreEstudiante) {
    let estudiante = estudiantes.find(function(alumno) {
        return alumno.nombre === nombreEstudiante;
    });

    if (estudiante) {
        let notas = estudiante.calificaciones;
        let promedio = calcularPromedio(notas);
        let mejor = obtenerMejorCalificacion(notas);
        let peor = obtenerPeorCalificacion(notas);

        console.log(`Nombre: ${estudiante.nombre}`);
        console.log(`Calificaciones: ${notas}`);
        console.log(`Promedio: ${promedio}`);
        console.log(`Nota más alta: ${mejor}`);
        console.log(`Nota más baja: ${peor}`);
    } else {
        console.log(`2.9) El estudiante ${nombreEstudiante} no fue encontrado en el sistema`);
    }
}

generarReporteIndividual("Jose Andrade");

// TODO -----------------------------EJERCICIO 3: Funcionalidad Principal -----------------



function iniciarGestionCalificaciones() {
    let continuar = true;

    while (continuar) {
        let opcion = prompt(
            "MENÚ DE GESTIÓN DE CALIFICACIONES " + 
            "\n1. Mostrar Estudiantes " +
            "2. Agregar Calificación " +
            "3. Generar Reporte Individual " +
            "4. Salir" +
            "Por favor, ingrese el número de la opción que desea: "
        );

        switch (opcion) {
            case "1":
                alert("Mostrando estudiantes... Revisa la consola.");
                mostrarEstudiantes(estudiantes);
                break;

            case "2":
                let nombreAgregar = prompt("Ingrese el nombre del estudiante:");
                let nuevaNota = parseFloat(prompt("Ingrese la nueva calificación (0.0 a 10.0):"));
                agregarCalificacion(nombreAgregar, nuevaNota);
                break;

            case "3":
                let nombreReporte = prompt("Ingrese el nombre del estudiante:");
                generarReporteIndividual(nombreReporte);
                break;

            case "4":
                alert("Gracias por usar el sistema de gestión de calificaciones.");
                continuar = false;
                break;

            default:
                alert("Opción no válida. Por favor, ingrese una opción del 1 al 4.");
        }
    }
}

iniciarGestionCalificaciones()

1