// Ejercion 05
// Pedirle al usuario un numero final y un numero inicial
// Usando el for tradicional imprimir los numeros desde el numero final
// hasta el inicial de 3 en 3
// final=40
// inicial=20
// 40 37 34 31 28 25 22

let numeroInicial = +prompt("Introduce el numero inicial");
let numeroFinal   = +prompt("Introduce el numero final");

for (let i = numeroFinal; i >= numeroInicial; i=i-3) {
    console.log(i);
}