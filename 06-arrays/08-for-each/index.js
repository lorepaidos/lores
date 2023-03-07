const miArray=["Daniel","Carlos","Ana","Maria"];

// Foreach recibe una funcion como argumento con 
// los siguientes argumentos:
// 1 - elem: El elemento actual que estamos recorriendo
// 2 - index: El indice de elemento actual
// 3 - array: El arreglo en su conjunto

// const forEachFunction=(elem,index,array) =>{
//     console.log(`Elemento actual: ${elem}`);
//     console.log(`Indice actual: ${index}`);
//     console.log(`Arreglo: ${array}`);
// }

// miArray.forEach(forEachFunction);
miArray.forEach((elem,index,array)=>{
    console.log(`Elemento actual: ${elem}`);
    console.log(`Indice actual: ${index}`);
    console.log(`Arreglo: ${array}`);
});