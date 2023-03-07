// CONVERSIONES IMPLICITAS

// Si sumamos un texto y algo que no sea texto (numeros, booleanos, nulos e indefinidos)
// convierte lo que no sea texto a texto
const cadena="7";
const numero=8;
const condicion=true;
const nulo=null;
let indefinido;

// Sumas
console.log(`El resultado de ${numero} + ${cadena} es igual a ${numero+cadena}`);
console.log(`El resultado de ${cadena} + ${condicion} es igual a ${cadena+condicion}`);
console.log(`El resultado de ${cadena} + ${nulo} es igual a ${cadena+nulo}`);
console.log(`El resultado de ${cadena} + ${indefinido} es igual a ${cadena+indefinido}`);