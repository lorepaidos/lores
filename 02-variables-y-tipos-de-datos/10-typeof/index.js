// OPERADOR typeof no indica el tipo de dato de una variable o constante
// Strings
let texto="Hoy es viernes";
console.log(`La variable texto tiene un valor de ${texto} y su tipo es ${typeof texto}`);

// Number
let numero=3;
console.log(`La variable numero tiene un valor de ${numero} y su tipo es ${typeof numero}`);

// String
numero="3";
console.log(`La variable numero tiene un valor de ${numero} y su tipo es ${typeof numero}`);

// Number
numero=+"3";
console.log(`La variable numero tiene un valor de ${numero} y su tipo es ${typeof numero}`);

// Number
numero=parseFloat("3");
console.log(`La variable numero tiene un valor de ${numero} y su tipo es ${typeof numero}`);

// NaN es un tipo especial de numero
numero=parseFloat("daniel");
console.log(`La variable numero tiene un valor de ${numero} y su tipo es ${typeof numero}`);

// Boolean
let verdadero=true;
console.log(`La variable verdadero tiene un valor de ${verdadero} y su tipo es ${typeof verdadero}`);

// Boolean
verdadero=!0;
console.log(`La variable verdadero tiene un valor de ${verdadero} y su tipo es ${typeof verdadero}`);

// Null => Object
let nulo=null;
console.log(`La variable nulo tiene un valor de ${nulo} y su tipo es ${typeof nulo}`);

let indefinido;
console.log(`La variable indefinido tiene un valor de ${indefinido} y su tipo es ${typeof indefinido}`);