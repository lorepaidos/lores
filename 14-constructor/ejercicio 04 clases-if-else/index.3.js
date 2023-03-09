//Ejercicio 2
//Haz una clase llamada Persona que siga las siguientes condiciones:
//• Sus atributos son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura. No queremos que se accedan directamente a ellos.
//Definir:
//Constructor
//Getters
//Setters
//• Los métodos que se implementaran son:
//◦ calcularIMC(): calculara si la persona está en su peso ideal (peso en kg/(altura^2  en m)), 
//si esta fórmula devuelve un valor menor que 20, la función devuelve un -1, si devuelve un número 
//entre 20 y 25 (incluidos), significa que está por debajo de su peso ideal la función devuelve un 0
// y si devuelve un valor mayor que 25 significa que tiene sobrepeso, la función devuelve un 1. 
//Te recomiendo que uses constantes para devolver estos valores.
//◦ esMayorDeEdad(): indica si es mayor de edad, devuelve un booleano.
//◦ comprobarSexo(sexo): comprueba que el sexo introducido es correcto. 
//Si no es correcto, será H. No será visible al exterior.
//◦ toString(): devuelve toda la información del objeto.
//◦ generaDNI(): genera un número aleatorio de 8 cifras, genera a partir de este su número su letra
// correspondiente. Este método será invocado cuando se construya el objeto. Puedes dividir el método
// para que te sea más fácil. No será visible al exterior.

class Persona{
   #nombre;
   #edad;
   #dni;
   #sexo;
   #peso;
   #altura;

   // Definición de constructor
   constructor(nombre,edad,dni,sexo,peso,altura){
       this.#nombre = nombre;
       this.#edad   = edad;
       this.#dni    = this.#generaDNI();
       this.#comprobarSexo(sexo);
       this.#peso   = peso;
       this.#altura = altura;
   }

   // Definición de getters
   get nombre(){
       return this.#nombre;
   }

   get edad(){
       return this.#edad;
   }

   get dni(){
       return this.#dni;
   }

   get sexo(){
       return this.#sexo;
   }

   get altura(){
       return this.#altura;
   }

   get peso(){
       return this.#peso;
   }

   // Definición de setters
   set nombre(nuevoNombre) {
       this.#nombre = nuevoNombre;
   }

   set edad(nuevaEdad) {
       this.#edad = nuevaEdad;
   }

   set dni(nuevoDni) {
       this.#dni = nuevoDni;
   }

   set sexo(nuevoSexo) {
       this.#sexo = nuevoSexo;
   }

   set peso(nuevoPeso) {
       this.#peso = nuevoPeso;
   }

   set altura(nuevAltura) {
       this.#altura = nuevAltura;
   }

   // Definición de toString
   toString(){
       return `La persona tiene los siguientes datos:
       nombre: ${this.#nombre},
       edad: ${this.#edad},
       sexo: ${this.#sexo},
       dni: ${this.#dni},
       peso: ${this.#peso}
       altura: ${this.#altura}`;
   }

   esMayorDeEdad(){
       if (this.#edad >= 18){
           return true;
       }

       return false;
       // return this.#edad >= 18;
   }

   #comprobarSexo(sexo){
       if (sexo === "H" || sexo === "M"){
           this.#sexo = sexo;
       }
       else{
           this.#sexo = "H";
       }
   }

   calcularIMC(){
       const imc = this.peso/(this.altura^2);

       if (imc < 20){
           return -1;
       }
       else if (imc <= 25){
           return 0;
       }
       else if (imc > 25){
           return 1;
       }
   }
   #generaDNI(){
    let DNI = "";
    
    // Generamos un numero por cada posicion en total 8
    for (let i = 0; i < 8; i++) {
        // Genera un numero aleatorio entre 0 y 9
        const numeroAleatorio = parseInt(Math.random()*9);
        // const numeroAleatorio = Math.trunc(Math.random()*9);
        // Añado el numero al DNI
        DNI = DNI + numeroAleatorio
    }

    // Calculo de la letra del DNI
    const cadenaDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
    const restoDNI = DNI % 23;
    
    DNI = DNI + cadenaDNI[restoDNI]

    return DNI;

}
}

// Instancio la persona
const daniel = new Persona("Daniel",23,"2345","M",65,1.75);

console.log(daniel.toString());

console.log(daniel.esMayorDeEdad());

console.log(daniel.calcularIMC());