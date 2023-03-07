const miArray=["Daniel","Carlos","Ana","Maria"];

// El método splice de los arreglos/arrays recibe
// los siguientes parametros:
// Primer parametro: El indice en el cual añade
// Segundo parametro: El numero de elementos a eliminar
// Siguientes parametros: Lo que queramos añadir
miArray.splice(1,0,"Angela","Rosa");
console.log(miArray);

// Estoy indicando que desde la posicion 2 (Rosa) 
// me elimine dos elementos (Rosa y Carlos)
// y añada Manuela
miArray.splice(2,2,"Manuela");
console.log(miArray);

// Si no indica lo que quiero añadir
// borra esos elementos
miArray.splice(3,1);
console.log(miArray);

// Esto es lo mismo que pop
// Elimina un elemento al final del arreglo
miArray.splice(miArray.length-1,1);
console.log(miArray);

// Esto es lo mismo que shift
// Elimina un elemento al inicio del arreglo
miArray.splice(0,1);
console.log(miArray);

// Esto es lo mismo que push
// Añade al final del arreglo
miArray.splice(miArray.length,0,"Eva Maria");
console.log(miArray);

// Esto es lo mismo que unshift
// Añade al principio del arreglo
miArray.splice(0,0,"Lorena");
console.log(miArray);