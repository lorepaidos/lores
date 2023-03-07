function edad(num1,num2) {
    let resultadoedad=num1-num2;
    console.log(`su edad es ${num1}-${num2} es igual a ${resultadoedad}`);
}

let numero1=+prompt(`introduzca su fecha de nacimiento`)
let numero2=+prompt (`introduzca año actual`)

edad(numero1,numero2)

