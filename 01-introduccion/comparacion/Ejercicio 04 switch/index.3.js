
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
if (!isNaN(numero1) && !isNaN(numero2)) 
   
    switch(operacion) {
        case 1:
        const suma = sumar(numero1,numero2);
        console.log(`El resultado de ${numero1} + ${numero2} es igual a ${suma}`);
        break;
     
        case 2: 
    
        const resta = restar(numero1,numero2);
        console.log(`El resultado de ${numero1} - ${numero2} es igual a ${resta}`);
        break;
    case 3: 
        const multiplicacion = multiplicar(numero1,numero2);
        console.log(`El resultado de ${numero1} * ${numero2} es igual a ${multiplicacion}`);
        break;
    case 4: 
        const division = dividir(numero1,numero2);
        console.log(`El resultado de ${numero1} / ${numero2} es igual a ${division}`);
        break;
    default: 
        console.log("Operacion no permitida");
    

break; 
    console.log("Alguno de los numeros no es correcto");
    }
