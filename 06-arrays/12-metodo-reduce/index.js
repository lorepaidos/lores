const miArray=[4,6,9,10];

// Método reduce
// Sirve para a partir de un conjunto de valores
// generar un unico valor
// Recibe los siguientes argumentos
// 1 - acumulador La primera vez es el primer valor del arreglo
//     las siguientes el resultado de la iteración anterior
// 2 - valorActual La primera vez es el segundo valor del arreglo
//     las siguientes es el valor actual
// 3 - index es el indice actual
// 4 - array es todo el arreglo
const suma=miArray.reduce((acumulador,valorActual,index,array)=>{
    console.log(`acumulador:`, acumulador);
    console.log(`valorActual:`, valorActual);
    console.log(`index:`, index);
    console.log(`array:`, array);
    return acumulador+valorActual;
});

console.log(`Suma total:`,suma);