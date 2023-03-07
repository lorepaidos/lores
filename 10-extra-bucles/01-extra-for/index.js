const numeros = [1,5,6,10];

// For tradicional
// Se forma de 3 partes:
// La primera el valor inicial
// La segunda condición durante la cual
// se va a ejecutar
// La tercera el incremento

// Recorremos el arreglo al derecho
for(let i = 0;i < numeros.length;i++){
    console.log(numeros[i]);
}

// Recorremos el arreglo al reves
for(let i = numeros.length - 1;i >= 0;i--){
    console.log(numeros[i]);
}