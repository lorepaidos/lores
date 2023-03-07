// Array de objetos
const personas = [
    {
        nombre: "Daniel",
        edad: 43
    },{
        nombre: "Carlos",
        edad: 23
    },{
        nombre: "Pepito",
        edad: 25
    }
];

// Utilizando bucles (while, for, forof) mostrar el nombre y la edad de cada persona

// Imprimir datos persona usando el forof
// Defino la función
function imprimirDatosPersonaForOf(datosPersonas) {
    console.log("*********************");
    console.log("Usando el bucle forof");

    for (const persona of datosPersonas){
        console.log(`La persona de nombre ${persona.nombre} tiene una edad de ${persona.edad} años`);
    }

    console.log("*********************");
}

// llamo a la funcion
imprimirDatosPersonaForOf(personas);

function imprimirDatosPersonaForTradicional(datosPersonas) {
    console.log("*********************");
    console.log("Usando el bucle for tradicional");
    for (let i = 0;i < datosPersonas.length;i++){
        const persona = datosPersonas[i];
        console.log(`La persona de nombre ${persona.nombre} tiene una edad de ${persona.edad} años`);
    }

    console.log("*********************");
}

imprimirDatosPersonaForTradicional(personas);

function imprimirDatosPersonaWhile(datosPersonas) {
    console.log("*********************");
    console.log("Usando el bucle while");

    let i = 0;
    while (i < datosPersonas.length) {
        const persona = datosPersonas[i];
        console.log(`La persona de nombre ${persona.nombre} tiene una edad de ${persona.edad} años`);
        i++;
    }

    console.log("*********************");
}

imprimirDatosPersonaWhile(personas);