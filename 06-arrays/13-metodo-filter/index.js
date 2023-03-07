const miArray=["4","6","9","10"];

// Con map obtenemos un arreglo con la misma cantidad de valores
// Con reduce obtenemos un unico valor
// Con filter obtenemos un array filtrador

// Metodo filter
// Obtenemos un array filtrado a partir de una condición
// Recibe los siguientes argumentos:
// 1 - elem: El elemento actual que estamos recorriendo
// 2 - index: El indice de elemento actual
// 3 - array: El arreglo en su conjunto
const miArrayFiltrado=miArray.filter((elem,index,array)=>{
    return elem>7;
});

console.log('Array original',miArray);
console.log('Array filtrado',miArrayFiltrado);

const miArrayFiltrado2=miArray.filter((elem,index,array)=>{
    return elem===10;
});
console.log('Array original',miArray);
console.log('Array filtrado',miArrayFiltrado2);