// Función escrita de la forma de función anónima
const resta=function (numero1,numero2) {
    return numero1-numero2;
}

let num1=2;
let num2=3;

let resultadoResta=resta(num1,num2);



console.log("Resta");
console.log(resultadoResta);

const multiplicacion=function (numero1,numero2) {
    return numero1*numero2;
}


let resultadoMultiplicacion=multiplicacion(num1,num2);



console.log("Multiplicacion");
console.log(resultadoMultiplicacion);

const division=function (numero1,numero2) {
    return numero1/numero2;
}


let resultadoDivision=division(num1,num2);

console.log("Division");
console.log(resultadoDivision);
