function suma(numero1,numero2) {
    let resultado=numero1+numero2;
    return resultado;
}

let num1=+prompt("Introduzca un numero");
let num2=+prompt("Introduzca otro numero");
let num3=+prompt("Introduzca otro numero");

let resultadoSuma=suma(num1,num2);
resultadoSuma=suma(resultadoSuma,num3);

// let resultadoSuma=suma(suma(num1,num2),num3);

console.log(resultadoSuma);
console.log(`${resultadoSuma}`);
console.log(`El resultado de ${num1}+${num2}+${num3} es igual a ${resultadoSuma}`);
