// EJERCICIO FUNCIONES 02
// Pedir al usuario tres valores
// Y realizar las funciones que:
// sumen tres valores
// resten tres valores
// multipliquen tres valores
// dividan dos valores

//let numero1=10,
//    numero2=10,
//    numero3=20;

function suma(num1,num2,num3) {
    let resultadoSuma=num1+num2+num3;
    console.log(`El resultado de ${num1}+${num2}+${num3} es igual a ${resultadoSuma}`);
}

function resta(num1,num2,num3) {
    let resultadoResta=num1-num2-num3;
    console.log(`El resultado de ${num1}-${num2}-${num3} es igual a ${resultadoResta}`);
}

function multiplicacion(num1,num2,num3) {
    let resultadoMultiplicacion=num1*num2*num3;
    console.log(`El resultado de ${num1}*${num2}*${num3} es igual a ${resultadoMultiplicacion}`);
}

function dividir(num1,num2) {
    let resultadoDivision=num1/num2;
    console.log(`El resultado de ${num1}/${num2} es igual a ${resultadoDivision}`);
}

let numero1=+prompt("Introduzca el primer numero");
let numero2=+prompt("Introduzca el segundo numero");
let numero3=+prompt("Introduzca el tercer numero");

suma(numero1,numero2,numero3);
resta(numero1,numero2,numero3);
multiplicacion(numero1,numero2,numero3);
dividir(numero1,numero2);