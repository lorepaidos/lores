// FUNCIONES
// Definicion de funcion tradicional
// function nombreDeLaFuncion(argumento1,argumento2,...){
//  cuerpo de la funcion
// }

// Orden
// 1 - Declaración de funciones
// 2 - Declaración de variables y constantes
// 3 - Resto de calculos y llamadas a funciones


function saludar(){
    console.log(`Hola ${nombre}`);
    nombre = "Juan";
}

let nombre = "Pepe";
// Llamada a la función con argumentos
saludar();

console.log("Linea 15");
console.log(nombre);