let numero=4;

function imprimir(numero1) {
    console.log("Dentro de la funcion imprimir");
    console.log(numero1);
    numero1=67;
    return numero1;
}

numero=imprimir(90);

console.log("Fuera de la función");
console.log(numero);
