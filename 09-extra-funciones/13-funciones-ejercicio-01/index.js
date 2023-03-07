// EJERCICIO FUNCIONES
// Realizar la suma de los elementos de un arreglo. Hacer una funcion para cada caso que use:
// 1 - Bucle while
// 2 - Bucle for
// 3 - Bucle forof
// 4 - Bucle forin
// 5 - Usando reduce
// suma([1,4,5,6]) = 16
const numerosArreglo = [1,4,5,6];

// Funcion suma echa usando el bucle while
function sumaWhile(arreglo){
    // Variable usada para realizar la suma
    let suma = 0;
    // Variable usada como indice del arreglo
    let contador = 0;

    // Recorro el arreglo
    while (contador < arreglo.length) {
        // Actualizo el valor de suma
        suma = suma + arreglo[contador];
        // Incremento en el contador
        contador++;
    }

    return suma;
}

let resultado = sumaWhile(numerosArreglo);
console.log("Bucle while");
console.log(resultado);

// Funcion suma echa usando el bucle for
function sumaFor(arreglo){
    // Variable usada para realizar la suma
    let suma = 0;

    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i];
    }

    return suma;
}

resultado = sumaFor(numerosArreglo);
console.log("Bucle for");
console.log(resultado);

// Funcion suma echa usando el bucle forof
function sumaForOf(arreglo){
    // Variable usada para realizar la suma
    let suma = 0;

    for (const numero of arreglo) {
        suma = suma + numero;
    }

    return suma;
}

resultado = sumaForOf(numerosArreglo);
console.log("Bucle forof");
console.log(resultado);

// Funcion suma echa usando el bucle forin
function sumaForIn(arreglo){
    // Variable usada para realizar la suma
    let suma = 0;

    for (const i in arreglo) {
        suma = suma + arreglo[i];
    }

    return suma;
}

resultado = sumaForIn(numerosArreglo);
console.log("Bucle forin");
console.log(resultado);

// Funcion suma echa usando reduce
function sumaReduce(arreglo){
    // Variable usada para realizar la suma
    let suma = arreglo.reduce((acumulador,numero)=>{
        return acumulador + numero;
    });

    return suma;
}

resultado = sumaReduce(numerosArreglo);
console.log("Bucle reduce");
console.log(resultado);