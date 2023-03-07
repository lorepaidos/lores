// LOS TIPOS PRIMITIVOS SE PASAN POR VALOR
let edadPersona=56;

console.log(edadPersona);

edadPersona=45;

console.log(edadPersona);

// LOS OBJETOS SE PASAN POR REFERENCIA
const persona1={
    edad:34,
    nombre:"Daniel"
}

const persona2=persona1;
persona2.nombre="Carlos";

console.log(persona2);

console.log(persona1);

persona1.nombre="Lucia";

console.log(persona1);
console.log(persona2);