// Ejercio 07
// Partiendo de un arreglo de numeros: [1,4,5,10]
// Calcular usando el bucle for la suma
// de los elementos del mismo
// [1,4,5,10] => 20


const numeros = [1,4,5,10]

let suma      = 0;

for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];
}

console.log(`El valor de la suma es ${suma}`);

let media=  suma/numeros.length;

console.log(`El valor de la media es ${media}`);