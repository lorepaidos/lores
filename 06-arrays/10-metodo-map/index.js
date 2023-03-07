const miArray=["4","6","9","10"];

// Metodo map
// Transforma cada elemento del arreglo

// Map recibe una funcion como argumento con 
// los siguientes argumentos:
// 1 - elem: El elemento actual que estamos recorriendo
// 2 - index: El indice de elemento actual
// 3 - array: El arreglo en su conjunto
const miArray2=miArray.map((elem,index,array)=>{
    return elem*2;
});

// const miArray2=miArray.map((elem,index,array)=> elem*2);

console.log(miArray);
console.log(miArray2);