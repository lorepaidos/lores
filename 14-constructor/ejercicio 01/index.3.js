// Definicion de una clase Persona
class Persona{
    // Definición de atributos
    #nombre;
    #apellidos;
    #edad;

    // Método constructor
    // Se llama cuando se inicializa un objeto de dicha clase
    constructor(nombre,apellidos,edad){
        this.#nombre     = nombre;
        this.#apellidos  = apellidos;
        this.#edad       = edad;
    }

    // Definición de getter
    get nombre(){
        return this.#nombre;
    }

    get apellidos(){
        return this.#apellidos;
    }

    get edad(){
        return this.#edad;
    }

    // Definición de setter
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }
    
    set apellidos(nuevoApellido){
        this.#apellidos = nuevoApellido;
    }

    set edad(nuevaEdad){
        this.#edad = nuevaEdad;
    }

    // Resto de métodos
    imprimirPersona(){
        console.log(`Nombre: ${this.#nombre}`);
        console.log(`Apellidos: ${this.#apellidos}`);
        console.log(`Edad: ${this.#edad}`);
    }
}

// Instanciar un objeto (crear una instancia de esa clase)
const pepePerez   = new Persona("Pepe","Perez",45);
const pablo       = new Persona("Pablo","Gonzalez",30);

console.log(pepePerez.nombre);

pepePerez.nombre = "Daniel";

console.log(pepePerez.nombre);
