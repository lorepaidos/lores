// CONVERSIONES EXPLICITAS A BOOLEAN
const cadena="Daniel";
const cadenaVacia="";
const numero1=0;
const numero2=10;
const nulo=null;
let indefinido;

// Cuando se convierte de forma explicita un texto a Boolean
// Todo se convierte a a true salvo una cadena que esta vacia
console.log(`Conversion de`, cadena,` a boolean:`, Boolean(cadena));
console.log(`Conversion de`, cadenaVacia,` a boolean:`, Boolean(cadenaVacia));

// Cuando se convierte de forma explicita un numero a Boolean
// Todo se convierte a a true salvo el numero 0
console.log(`Conversion de`, numero1,` a boolean:`, Boolean(numero1));
console.log(`Conversion de`, numero2,` a boolean:`, Boolean(numero2));

// Las conversiones de forma explicita de nulos e indefinidos
// son directamente a false
console.log(`Conversion de`, nulo,` a boolean:`, Boolean(nulo));
console.log(`Conversion de`, indefinido,` a boolean:`, Boolean(indefinido));