// Defino la funcion
function recorrerArreglo(lista) {
    for(let i = 0;i < lista.length;i++){
        console.log(lista[i]);
    }    
}

const numeros = [1,5,6,10];
const nombres = ["Daniel","Carlos","Pepito"];

recorrerArreglo(numeros);
recorrerArreglo(nombres);

const numerosReves = numeros.reverse();
recorrerArreglo(numerosReves);