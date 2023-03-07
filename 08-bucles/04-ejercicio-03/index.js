// Ejercicio 03
// Realizar programa que nos diga si un numero 
// es primo o no

// Un numero es primo si es divisible por
// si mismo y por la unidad (1)
const numero      = 7;
let numeroInicial = 2;
let esPrimo = true;

// Recorro desde 2 hasta numero - 1 
while (numeroInicial < numero) {
    console.log(numeroInicial);
    // Si es encuentro un divisor no es primo
    // porque tiene mas dos divisores
    if (numero % numeroInicial === 0){
        console.log(`${numero} no es primo`);
        break;
    }
    numeroInicial++;
}

// Si llega al final del bucle es un numero primo
if (numeroInicial === numero){
    console.log(`${numero} es primo`);
}