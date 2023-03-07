const miArray = ["Daniel", true, 45, "Carlos"];
console.log(miArray);

// Añadir al principio del arreglo/array los valores "Eva" y false
// miArray.unshift(false);
// miArray.unshift("Eva");
miArray.unshift("Eva",false);
console.log(miArray);

// Extraer el ultimo elemento del arreglo
let ultimoElemento=miArray.pop();
console.log("Ultimo elemento",ultimoElemento);
console.log(miArray);

// Añadir al inicio del arreglo pepito
miArray.unshift("pepito");
console.log(miArray);

// Extraer al final del arreglo
ultimoElemento=miArray.pop();
console.log("Ultimo elemento",ultimoElemento);
console.log(miArray);

// Extraer al inicio del arreglo
let primerElemento=miArray.shift();
console.log("Primer elemento",primerElemento);
console.log(miArray);

miArray[8]="Rosa";

console.log(miArray);