function sumar(numeros) {
    let suma      = 0;
    
    for(let i = 0;i < numeros.length;i++){
        suma = suma + numeros[i];
    }

    return suma;
}

const numeros1 = [4,5,10];
const numeros2 = [4,5,10,56];

let resultado1 = sumar(numeros1);
let resultado2 = sumar(numeros2);

console.log(resultado1);
console.log(resultado2);

console.log(resultado1 + resultado2);