// Pedimos los datos al usuario
let numero1Texto=+prompt("Introduzca el primer numero:");
let numero2Texto=+prompt("Introduzca el segundo numero:");
let sumaSimple=numero1Texto+numero2Texto;

console.log(`El resultado (simple) de ${numero1Texto}+${numero2Texto} es igual a ${sumaSimple}`);



// Convierto los numeros en forma de texto a numero
// parseInt convierte el numero en forma de texto a entero
let numero1Entero=parseInt(numero1Texto);
let numero2Entero=parseInt(numero2Texto);
let sumaEntero=numero1Entero+numero2Entero;
let restaEntero=numero1Entero-numero2Entero;
let multiplicacionEntero=numero1Entero*numero2Entero;
let divisionEntero=numero1Entero/numero2Entero;

console.log(`El resultado de ${numero1Entero}+${numero2Entero} es igual a ${sumaEntero}`);
console.log(`El resultado de ${numero1Entero}-${numero2Entero} es igual a ${restaEntero}`);
console.log(`El resultado de ${numero1Entero}*${numero2Entero} es igual a ${multiplicacionEntero}`);
console.log(`El resultado de ${numero1Entero}/${numero2Entero} es igual a ${divisionEntero}`);

// parseFloat convierte el numero en forma de texto a decimal
let numero1Decimal=parseFloat(numero1Texto);
let numero2Decimal=parseFloat(numero2Texto);
let sumaDecimal=numero1Decimal+numero2Decimal;
let restaDecimal=numero1Decimal-numero2Decimal;
let multiplicacionDecimal=numero1Decimal*numero2Decimal;
let divisionDecimal=numero1Decimal/numero2Decimal;

console.log(`El resultado de ${numero1Decimal}+${numero2Decimal} es igual a ${sumaDecimal}`);
console.log(`El resultado de ${numero1Decimal}-${numero2Decimal} es igual a ${restaDecimal}`);
console.log(`El resultado de ${numero1Decimal}*${numero2Decimal} es igual a ${multiplicacionDecimal}`);
console.log(`El resultado de ${numero1Decimal}/${numero2Decimal} es igual a ${divisionDecimal}`);