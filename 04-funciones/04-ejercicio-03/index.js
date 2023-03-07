// EJERCICIO FUNCIONES 03
// Pedir al usuario su año de nacimiento
// y calcular su edad

function calcularEdad(añoActual,fechaDeNacimiento) {
    console.log(`Su edad es ${añoActual-fechaDeNacimiento}`);
}

let fechaActual=Date.now().getFullYear();
let añoDeNacimiento=+prompt("Introduzca su año de nacimiento");

calcularEdad(fechaActual,añoDeNacimiento);