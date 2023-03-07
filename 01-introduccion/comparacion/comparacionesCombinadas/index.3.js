const verdadero = true;
const falso     = false;

console.log("OPERACIONES COMBINADAS");
console.log(!(verdadero && verdadero));
console.log(!(verdadero && falso));
console.log(!(falso && verdadero));
console.log(!(falso && falso));

console.log(!verdadero && verdadero);
console.log(!verdadero && falso);
console.log(!falso && verdadero);
console.log(!falso && falso);

console.log(!(verdadero || verdadero));
console.log(!(verdadero || falso));
console.log(!(falso || verdadero));
console.log(!(falso || falso));

console.log(!verdadero || verdadero);
console.log(!verdadero || falso);
console.log(!falso || verdadero);
console.log(!falso || falso);

console.log((verdadero && falso) || (verdadero && verdadero));
console.log(!(verdadero && falso) && (verdadero && verdadero));
console.log(!((verdadero && falso) && (verdadero && verdadero)));