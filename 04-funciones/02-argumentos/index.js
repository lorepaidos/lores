// FUNCIONES TRADICIONALES

// De la forma tradicional una función se declara de la siguiente forma:
// funcion nombreDeLaFuncion(argumentos){
    // contenido de la función
// }
function saludar(nombre) {
    console.log(`Bienvenido ${nombre}`);
    nombre="Carlos";
}

// Llamada a la función
saludar("Alberto");
saludar("Andrea");
saludar();

let nombre="Daniel";

saludar(nombre);

console.log(nombre);