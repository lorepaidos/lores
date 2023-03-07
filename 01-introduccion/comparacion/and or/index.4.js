const verdadero = true;
const falso     = false;

// OPERADOR AND (Y LÓGICO)
// Da como resultado verdadero (true)
// si todas las condiciones son verdaderas (true)
// en caso contrario da como resultado falso (false)
console.log("OPERADOR AND (&&)");
console.log(verdadero && verdadero);
console.log(verdadero && falso);
console.log(falso && verdadero);
console.log(falso && falso);

console.log(verdadero && verdadero && falso);

// OPERADOR OR (O LÓGICO)
// Da como resultado verdadero (true)
// si alguna de las condiciones es verdadera (true)
// en caso contrario da como resultado falso (false)
console.log("OPERADOR OR (||)");
console.log(verdadero || verdadero);
console.log(falso || verdadero);
console.log(verdadero || falso);
console.log(falso || falso);

console.log(verdadero || verdadero || falso);


// OPERADOR NOT (NEGACIÓN)
// Niega la condicion
console.log("OPERADOR NOT (!)");
console.log(!verdadero);
console.log(!falso);
console.log(!!falso);
console.log(!!verdadero);