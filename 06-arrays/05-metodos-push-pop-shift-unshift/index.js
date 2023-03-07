const miArray=["Daniel","Ana","Lucia","Pepito"];

console.log("Arreglo inicial");
console.log(miArray);

// PUSH: AÑADE UN ELEMENTO AL FINAL DEL ARREGLO (EN LA ULTIMA POSICIÓN)
miArray.push("Maria");
console.log(miArray);

// POP: EXTRAE/ELIMINAR EL ELEMENTO AL FINAL DEL ARREGLO (EN LA ULTIMA POSICIÓN)
const ultimoElemento=miArray.pop();
console.log("ultimoElemento");
console.log(ultimoElemento);
console.log("Array");
console.log(miArray);

// UNSHIFT: AÑADE UN ELEMENTO AL INICIO DEL ARRAY
miArray.unshift("Pepe");
console.log("miArray");
console.log(miArray);

// SHIFT: EXTRAE EL PRIMER ELEMENTO DEL ARREGLO
const primerElemento=miArray.shift();
console.log("primerElemento");
console.log(primerElemento);
console.log(miArray);