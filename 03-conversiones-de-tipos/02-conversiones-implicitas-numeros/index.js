// CONVERSIONES IMPLICITAS

// Si sumamos un numero y algo que no sea numero salvo los strings (booleanos, nulos e indefinidos)
// convierte lo que no sea numero a numero
const cadena="7";
const numero=8;
const verdadero=true;
const falso=false;
const nulo=null;
let indefinido;

// Sumas
// Si sumamos un numero y un booleano
// Convierte el booleano a numero segun lo siguiente:
// false => 0
// true => 1
console.log(`El resultado de ${numero} + ${verdadero} es igual a ${numero+verdadero}`);
console.log(`El resultado de ${numero} + ${falso} es igual a ${numero+falso}`);

// Si sumamos un numero y un valor nulo
// Convierte el nulo a un valor 0
console.log(`El resultado de ${numero} + ${nulo} es igual a ${numero+nulo}`);

// Si sumamos un numero y un valor undefined
// El valor undefined no es numero => NaN (Not a Number) No es un numero
console.log(`El resultado de ${numero} + ${indefinido} es igual a ${numero+indefinido}`);

// Resto de operaciones entre numeros y otro tipo de datos
// Convierte lo que no es a numero
console.log(`El resultado de ${numero} - ${cadena} es igual a ${numero-cadena}`);
console.log(`El resultado de ${numero} - ${verdadero} es igual a ${numero-verdadero}`);
console.log(`El resultado de ${numero} - ${falso} es igual a ${numero-falso}`);
console.log(`El resultado de ${numero} - ${nulo} es igual a ${numero-nulo}`);
console.log(`El resultado de ${numero} - ${indefinido} es igual a ${numero-indefinido}`);