// FUNCIONES
// Definicion de funcion tradicional
// function nombreDeLaFuncion(argumento1,argumento2,...){
//  cuerpo de la funcion
// }

// Orden
// 1 - Declaración de funciones
// 2 - Declaración de variables y constantes
// 3 - Resto de calculos y llamadas a funciones

function sumar(num1,num2) {
    return num1 + num2;
}

let resultado = sumar(3,5);
resultado     = sumar(resultado,4);

console.log(`El resultado de la suma de 3 + 5 + 4 es igual a ${resultado}`);