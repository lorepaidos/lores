const numeros = [3,4,5,8,10];

// Usar el for tradicional cuando es necesario saber
// el indice del arreglo
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
// }

// Bucle forof
// Usar cuando no sea necesario usar 
// el indice, no se usa para recorrer los elementos
// pares del arreglo
// El forof funciona desde el principio
// hasta el final
for(const numero of numeros){
    console.log(numero);
}