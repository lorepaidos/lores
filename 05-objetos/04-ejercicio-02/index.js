const persona={
    nombre: "Daniel",
    apellidos: "Meijomil",
    edad:43
}

// Notacion de punto
console.log(persona.nombre);

// Notacion de corchete
console.log(persona["apellidos"]);

const nombrePropiedad=prompt("Deme el valor de la propiedad");

console.log(`El valor de la propiedad ${nombrePropiedad} es ${persona[nombrePropiedad]}`);