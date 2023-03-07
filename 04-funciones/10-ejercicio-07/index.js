const numero=5;

// Función escrita de la forma tradicional o nominal
function tripleTradicional(numero1) {
    return numero1*3;
}

let resultadoTriple=tripleTradicional(numero);
console.log("FUNCIÓN TRADICIONAL O NOMINAL");
console.log(`El triple de ${numero} es igual a ${resultadoTriple}`);
console.log(resultadoTriple);

// Función escrita de la forma anonima
const tripleAnonima=function(numero1) {
    return numero1*3;
}

resultadoTriple=tripleAnonima(numero);
console.log("FUNCIÓN ANONIMA");
console.log(`El triple de ${numero} es igual a ${resultadoTriple}`);
console.log(resultadoTriple);

// Función escrita en forma de función de flecha
const tripleFlecha=(numero1) =>{
    return numero1*3;
}

resultadoTriple=tripleFlecha(numero);
console.log("FUNCIÓN DE FLECHA");
console.log(`El triple de ${numero} es igual a ${resultadoTriple}`);
console.log(resultadoTriple);

// Función escrita en forma de función de flecha simplificada
const tripleFlechaSimplificada=(numero1) => numero1*3;

resultadoTriple=tripleFlechaSimplificada(numero);
console.log("FUNCIÓN DE FLECHA SIMPLIFICADA");
console.log(`El triple de ${numero} es igual a ${resultadoTriple}`);
console.log(resultadoTriple);