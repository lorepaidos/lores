// Ejercion 06
// Partiendo de un arreglo: [1,4,5,67,8,10]
// ["Daniel","Carlos","Pepito"]
// Mediante un for recorrer todos los elementos
// [1,4,5,67,8,10] => 1,4,5,67,8,10
// ["Daniel","Carlos","Pepito"] => "Daniel","Carlos","Pepito"

const numeros = [1,4,5,67,8,10]

// Imprimir al derecho
console.log("Imprimo al derecho");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}


// Imprimir al reves
console.log("Imprimo al reves");
for (let i = numeros.length-1; i >= 0; i--) {
    console.log(numeros[i]);   
}

// Reverse le da la vuelta al arreglo
console.log(numeros);
numeros.reverse();