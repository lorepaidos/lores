// Funcion anonima
// const division=function(numero1,numero2) {
//     return numero1/numero2;
// }

// Función division escrita en forma de funcion de flecha (arrow function)
const division = (numero1, numero2) => {
    return numero1 / numero2;
};

const resultadoDivision = division(4, 2);
console.log("División en función de flecha");
console.log(resultadoDivision);

// Función división escrita en forma de función de flecha (arrow function) resumida
const divisionFlechaSimplificada = (numero1, numero2) => numero1 / numero2;

const resultadoDivisionSimplificada = divisionFlechaSimplificada(4, 2);
console.log("División en función de flecha simplificada");
console.log(resultadoDivisionSimplificada);