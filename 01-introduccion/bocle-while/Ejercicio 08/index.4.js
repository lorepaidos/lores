// Ejercio 08
// Partiendo de un arreglo de numeros: [1,4,5,10]
// Calcular usando el bucle forof la suma
// de los elementos del mismo
// [1,4,5,10] => 20


const numeros = [1,4,5,10,45,5,6];
let suma      = 0;

for (const numero of numeros) {
    suma = suma + numero
}

console.log(`El valor de la suma es ${suma}`);