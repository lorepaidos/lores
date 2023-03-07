let numeroUsuario1=prompt("Introduzca un numero");
let numeroUsuario2=prompt("Introduzca otro numero");

// Indendaciones
const numeros={
    numero1: +numeroUsuario1,
    numero2: +numeroUsuario2,
}

// const numeros1={
//     numero1: prompt("Introduzca un numero"),
//     numero2: prompt("Introduzca otro numero")
// }

numeros.suma            = numeros.numero1+numeros.numero2;
numeros.resta           = numeros.numero1-numeros.numero2;
numeros.multiplicacion  = numeros.numero1*numeros.numero2;
numeros.division        = numeros.numero1/numeros.numero2;


console.log(`El resultado de ${numeros.numero1}+${numeros.numero2} es igual a ${numeros.suma}`);
console.log(`El resultado de ${numeros.numero1}-${numeros.numero2} es igual a ${numeros.resta}`);
console.log(`El resultado de ${numeros.numero1}*${numeros.numero2} es igual a ${numeros.multiplicacion}`);
console.log(`El resultado de ${numeros.numero1}/${numeros.numero2} es igual a ${numeros.division}`);