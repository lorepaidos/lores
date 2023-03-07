// Función escrita de la forma tradicional o nominal
// function suma(numero1,numero2) {
//     let resultado=numero1+numero2;
//     return resultado;
// }

// Función escrita de la forma de función anónima
const suma=function (numero1,numero2) {
    return numero1+numero2;
}

let num1=2;
let num2=3;

let resultadoSuma=suma(num1,num2);


// let resultadoSuma=suma(suma(num1,num2),num3);

console.log(resultadoSuma);
console.log(`${resultadoSuma}`);
console.log(`El resultado de ${num1}+${num2} es igual a ${resultadoSuma}`);
