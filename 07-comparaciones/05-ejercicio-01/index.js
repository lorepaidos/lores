// Ejercicio
// Crear un codigo que nos diga si un número
// es par o impar

// Lectura de datos
const numeroUsuario = +prompt("Introduzca un numero");

// Primera forma de funcion esPar
// function esPar(numero) {
//     if (numero % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// Segunda forma de funcion esPar
// function esPar(numero) {
//     if (numero % 2 === 0) {
//         return true;
//     }
//     return false;
// }

// Tercera forma de funcion esPar
function esPar(numero) {
    return numero % 2 === 0
}

// isNaN es una funcion que nos dice si
// una variable es un numero o no
if (!isNaN(numeroUsuario)) {
    if (esPar(numeroUsuario)){
        console.log(`El numero ${numeroUsuario} es par`);
    }
    else{
        console.log(`El numero ${numeroUsuario} es impar`);
    }
} else {
    console.log("No ha introducido un numero");
}