function saludar(nombre,apellidos) {
    // Devuelve el resultado
    return `Bienvenido a clase ${nombre}, ${apellidos}`;
    // Despues el return no se ejecute
    console.log("hola");
}

let resultado=saludar("Daniel","Meijomil");
console.log(resultado);