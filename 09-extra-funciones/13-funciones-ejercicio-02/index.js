// EJERCICIO FUNCIONES
// Realizar una función que calcule el máximo de un conjunto/arreglo de numeros
function maximo(arreglo) {
    // El primer maximo es el primer elemento del arreglo
    let max = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        // Encuentro un nuevo maximo
        if (arreglo[i] > max){
            // Actualizo el maximo
            max = arreglo[i];
        }
    }


    return max;
}

const numeros = [1,5,7,12,4];
const max = maximo(numeros)

console.log(`El maximo de ${numeros} es ${max}`);