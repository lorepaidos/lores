const miArray=[4,6,9,10];

// Metodo filter
// Obtenemos un array filtrado a partir de una condición
// Recibe los siguientes argumentos:
// 1 - elem: El elemento actual que estamos recorriendo
// 2 - index: El indice de elemento actual
// 3 - array: El arreglo en su conjunto
const miArrayFiltrado=miArray.filter((elem,index,array)=>{
    return elem%2==0;
});

console.log('Array original',miArray);
console.log('Array filtrado',miArrayFiltrado);

