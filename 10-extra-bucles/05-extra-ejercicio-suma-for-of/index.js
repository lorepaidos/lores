function sumar(numeros) {
    let suma = 0;

    for(const numero of numeros){
        suma = suma + numero;
    }

    return suma;
}

const numeros1 = [4,5,10];
const numeros2 = [4,5,10,8];

let resultado1 = sumar(numeros1);
let resultado2 = sumar(numeros2);

console.log(resultado1);
console.log(resultado2);