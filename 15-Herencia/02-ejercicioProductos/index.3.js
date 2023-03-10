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


// Los productos tienen los siguientes atributos:
// Nombre
// Precio
// Crear el método calcular
// Simplemente seria multiplicar el precio por la cantidad de productos pasados.
class Producto{
    // Definimos los atributos del producto
    #nombre;
    #precio;

    // Definimos el constructor
    constructor(nombre,precio){
        this.#nombre = nombre;
        this.#precio = precio;
    }

    // Definimos los getters
    get nombre(){
        return this.#nombre;
    }

    get precio(){
        return this.#precio;
    }

    // Definimos los setters
    set nombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }

    set precio(nuevoPrecio){
        this.#precio = nuevoPrecio;
    }

    // El método toString devuelve la informacion de los atributos
    // de la clase en producto en forma de texto
    toString(){
        return `Nombre: ${this.#nombre}\nPrecio: ${this.#precio}`;
    }

    // Método calcular
    // Simplemente seria multiplicar el precio por la cantidad de productos pasados.
    calcular(cantidad){
        return this.#precio*cantidad;
    }
}

// Perecedero: tiene un atributo llamado días a caducar
class Perecedero extends Producto{
    // Definimos los atributos de los productos perecederos
    #diasACaducar;

    // Definimos el constructor
    constructor(nombre,precio,diasACaducar){
        super(nombre,precio);

        this.diasACaducar = diasACaducar;
    }

    // Definimos los getters
    get diasACaducar(){
        return this.#diasACaducar;
    }

    // Definimos los setters
    set diasACaducar(nuevosDiasACaducar){
        this.#diasACaducar = nuevosDiasACaducar;
    }

    // El método toString devuelve la informacion de los atributos
    // de la clase en producto en forma de texto
    toString(){
        const texto = super.toString();
        return `${texto}\nDias a caducar: ${this.#diasACaducar}`; 
    }

    // En Perecedero, aparte de lo que hace producto, el precio se reducirá según los días a caducar:
    // Si le queda 1 día para caducar, se reducirá 4 veces el precio final.
    // Si le quedan 2 días para caducar, se reducirá 3 veces el precio final.
    // Si le quedan 3 días para caducar, se reducirá a la mitad de su precio final.
    calcular(cantidad){
        const precioBase = super.calcular(cantidad);

        if (this.#diasACaducar === 1){
            const precioFinal = precioBase/4;
            return precioFinal;
        }
        else if (this.#diasACaducar === 2){
            const precioFinal = precioBase/3;
            return precioFinal;
        }
        else if (this.#diasACaducar === 3){
            const precioFinal = precioBase/2;
            return precioFinal;
        }

        return precioBase;
    }
}

// No perecedero: tiene un atributo llamado tipo
class NoPerecedero extends Producto{
    // Definimos los atributos de los productos no perecederos
    #tipo;

    // Definimos el constructor
    constructor(nombre,precio,tipo){
        super(nombre,precio);

        this.#tipo = tipo;
    }

    // Definimos los getters
    get tipo(){
        return this.#tipo;
    }

    // Definimos los setters
    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }

    // El método toString devuelve la informacion de los atributos
    // de la clase en producto en forma de texto
    toString(){
        const texto = super.toString();
        return `${texto}\nTipo: ${this.#tipo}`; 
    }
}
const lechuga = new Perecedero("lechuga",0.90,6);

const factura = lechuga.calcular(5);

console.log(factura);
