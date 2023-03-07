// EJERCICIO FUNCIONES 01
// Pedir al usuario su nombre y su edad
// e imprimirlo por pantalla usando funciones

let nombre=prompt("Introduzca su nombre: ");
let edad=prompt("Introduzca su edad: ");

function imprimirNombreEdad(nombre,edad){
    console.log(`La persona ${nombre} tiene ${edad} años.`);
}

imprimirNombreEdad(nombre,edad);