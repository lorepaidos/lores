// Ejercicio 02
// Realizar un programa
// que pida al usuario un numero inicial
// y un numero final.
// Imprimir los numeros pares que 
// hay entre el numero inicial y el final
// 1 - 5 => 2 4
// 4 - 10 => 4 6 8 10

let numeroInicial = +prompt("Deme el numero inicial");
let numeroFinal   = +prompt("Deme el numero final, mayor que el inicial");

// Recorro desde el numero inicial
// hasta el final
while (numeroInicial <= numeroFinal) {
    // Solo imprimo si es par
    if (numeroInicial%2 === 0){
        console.log(numeroInicial);
    }
    numeroInicial++;
}
// Si es el numero es impar
// Se incrementa en uno
if (numeroInicial%2 === 1){
    numeroInicial++;
}

while (numeroInicial <= numeroFinal) {
    console.log(numeroInicial);
    numeroInicial = numeroInicial + 2;
}