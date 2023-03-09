//Ejercicio 2
//Nos piden hacer que gestionemos una serie de productos.
//Los productos tienen los siguientes atributos:
//  • Nombre
//  • Precio
//Tenemos dos tipos de productos:
//    • Perecedero: tiene un atributo llamado días a caducar
//    • No perecedero: tiene un atributo llamado tipo
//Crea sus constructores, getters, setters y toString.
//Tendremos una función llamada calcular, que según cada clase hará una cosa u otra, a esta función le 
//pasaremos un numero siendo la cantidad de productos
//    • En Producto, simplemente seria multiplicar el precio por la cantidad de productos pasados.
//    • En Perecedero, aparte de lo que hace producto, el precio se reducirá según los días a caducar:
//    • Si le queda 1 día para caducar, se reducirá 4 veces el precio final.
//    • Si le quedan 2 días para caducar, se reducirá 3 veces el precio final.
//    • Si le quedan 3 días para caducar, se reducirá a la mitad de su precio final.
//    • En NoPerecedero, hace lo mismo que en producto
//Crea una clase ejecutable y crea un array de productos y muestra el precio total de vender 5  productos de cada uno. 
//Crea tú mismo los elementos del array.


class Producto {
    #nombre;
    #precio;

    constructor(nombre,precio){
        this.#nombre = nombre
        this.#precio = precio
    }
    get nombre(){
        return this.#nombre;
    }

    get precio (){
        return this.#precio
    }

    set nombre(nuevonombre){
        this.#nombre = nuevonombre;
    }

    set precio(nuevoprecio){
        this.#precio = nuevoprecio;
    }   
    toString(){
        console.log(`el producto ${this.nombre}\nTiene un precio de : ${this.precio}`);
    }

   }

   class Perecedero extends Producto{
    #diasACalcular;
    constructor(nombre,precio,diasACalcular){
        super(nombre,precio);

        this.#diasACalcular= diasACalcular;
    }

    get diasACalcular (){
        return this.#diasACalcular
    }

    set diasACalcular(nuevoDiaACalcular){
        this.#diasACalcular = nuevoDiaACalcular;
    }
    toString(){
        super.toString();
        console.log(`los dias a caducar ${this.diasACalcular}`);
    }
    
}
class NoPerecedero extends Producto{
    #tipo;
    constructor(nombre,precio,tipo){
        super(nombre,precio);

        this.#tipo= tipo;
    }

    get tipo (){
        return this.#tipo
    }

    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }
    toString(){
        super.toString();
        console.log(`tipo ${this.#tipo}`);
    }

}
   

