// Ejercicio 3
// Realizar una calculadora
// Realizar las siguientes funciones
// Suma de dos numeros
// Resta de dos numeros
// Division de dos numeros
// Multiplicacion de dos numeros

// Realizar un menu:
// Pedirle al usuario dos numeros y comprobar que 
// realmente sean numeros
// Pedirle al usuario la operación que quiere realizar
// 1 - Suma
// 2 - Resta
// 3 - Multiplicacion
// 4 - Division
// Otra opcion => error



function sumar(num1,num2) {
    return num1+num2;
}

function restar(num1,num2) {
    return num1-num2;
}

function multiplicar(num1,num2) {
    return num1*num2;
}

function dividir(num1,num2) {
    return num1/num2;
}

// Lectura de datos
const operacion = +prompt("Introduzca la operacion a realizar (1 - Suma, 2 - Resta, 3 - Multiplicacion, 4 - División)");
const numero1 = +prompt("Introduzca el primer numero");
const numero2 = +prompt("Introduzca el segundo numero");


// Comprobamos si los numeros son realmente numeros
if (!isNaN(numero1) && !isNaN(numero2)) {
    if (operacion === 1) {
        const suma = sumar(numero1,numero2);
        console.log(`El resultado de ${numero1} + ${numero2} es igual a ${suma}`);
    } else if (operacion === 2) {
        const resta = restar(numero1,numero2);
        console.log(`El resultado de ${numero1} - ${numero2} es igual a ${resta}`);
    } else if (operacion === 3) {
        const multiplicacion = multiplicar(numero1,numero2);
        console.log(`El resultado de ${numero1} * ${numero2} es igual a ${multiplicacion}`);
    } else if (operacion === 4) {
        const division = dividir(numero1,numero2);
        console.log(`El resultado de ${numero1} / ${numero2} es igual a ${division}`);
    } else {
        console.log("Operacion no permitida");
    }
} else {
    console.log("Alguno de los numeros no es correcto");
}
