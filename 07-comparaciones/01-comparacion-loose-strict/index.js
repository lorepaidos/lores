const texto     = "1";
const numero    = 1;
const numero_0    = 0;
const verdadero = true;
const falso     = false;

// Comparación loose == !=
// == compara si son iguales
// != compara si no son iguales (son distintos)
console.log("COMPARACIONES LOOSE");
console.log(texto==numero);
console.log(verdadero==numero);
console.log(numero_0!=falso);

// Comparación strict === !==
// === compara si son iguales
// !== compara si no son iguales (son distintos)
console.log("COMPARACIONES STRICT");
console.log(texto===numero);
console.log(verdadero===numero);
console.log(numero_0!==falso);
