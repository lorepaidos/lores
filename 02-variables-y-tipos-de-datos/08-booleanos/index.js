// BOOLEANOS
let verdadero=true;
let falso=false;

// OPERACION OR ||
console.log("OPERACION OR");
console.log(`${verdadero || verdadero}`);
console.log(`${verdadero || falso}`);
console.log(`${falso || verdadero}`);
console.log(`${falso || falso}`);

console.log("OPERACION AND");
console.log(`${verdadero && verdadero}`);
console.log(`${verdadero && falso}`);
console.log(`${falso && verdadero}`);
console.log(`${falso && falso}`);

console.log("OPERACION NOT");
console.log(`${!verdadero}`);
console.log(`${!falso}`);

console.log(`${!!verdadero}`);
console.log(`${!!falso}`);
