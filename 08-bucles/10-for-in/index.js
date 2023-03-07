// Definicion de objeto
const persona = {
    "nombre": "Daniel",
    "edad": 24
}

// Definicion de arreglo
// Un arreglo es un objeto
// Pero no todos los objetos son arreglos
const numeros = [2,5,7,10];
// *************** NO HACER ESTO *****************
numeros.titulo = "Numeros"

// {
//     "0":2,
//     "1":5,
//     "2":7,
//     "3":10,
//     "titulo":"Numeros"
// }

// Typeof nos dice el tipo de una variables
console.log(typeof numeros);

// FORIN
for (const i in numeros) {
    console.log(i);
}