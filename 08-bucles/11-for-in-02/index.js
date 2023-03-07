const persona = {
    "nombre":"daniel",
    "edad":24,
    "ciudad de nacimiento": "Lalin",
    "sexo": "H"
}

// Notacion de punto de los objetos
console.log(persona.nombre);
// Notacion de corchete de los objetos
console.log(persona["nombre"]);

console.log(persona["ciudad de nacimiento"]);

console.log("FORIN");
console.log("----------------");
// FORIN
// Recorro las propiedades la persona
for(const propiedad in persona){
    console.log(persona[propiedad]);
}