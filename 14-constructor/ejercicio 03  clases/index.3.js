//Ejercicio 1
//Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).
//El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumpla lo anterior.
//Crea sus métodos get, set y toString.
//Tendrá dos métodos especiales:
//• ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.
//• retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.

class Cuenta {
    #titular;
    #cantidad;

    constructor(titular,cantidad){
        this.#titular=titular;
        this.#cantidad=cantidad;
    }

    get titular(){
        return this.#titular;
    }

    get cantidad (){
        return this,this.#cantidad;
    }

    set titular(nuevoTitular){
        this.#titular= nuevoTitular;
    }

    set cantidad(nuevaCantidad){
        this.#cantidad= nuevaCantidad;
    }
    // Método toString:
    // Devuelve la información de clase en forma de texto
    toString(){
        return `La cantidad de la cuenta es ${this.#cantidad} y el titular asociado es ${this.#titular}`;
    }
    ingresar(cantidadAIngresar){
        // Si la cantidad es positiva ingreso dicha cantidad
        // Actualizo la propiedad cantidad
        if (cantidadAIngresar > 0){
            this.#cantidad = this.#cantidad + cantidadAIngresar;
        }
        else{
            console.log("La cantidad no es valida");
        }
    }
    retirar(cantidadARetirar){
        // Calculo la cantidad que me queda en la cuenta
        const cantidadEnCuenta = this.#cantidad - cantidadARetirar;
        // Si lo que me queda en cuenta es positivo, retiro dicha cantidad
        if (cantidadEnCuenta > 0){
            this.#cantidad = cantidadEnCuenta;
        }
        // Si lo que me queda en cuenta es negativo lo pongo a 0
        else{
            this.#cantidad = 0;
        }
    }

}

// Instancio la clase
const cuentaDeDaniel = new Cuenta("Daniel",300);

console.log(cuentaDeDaniel.toString());

cuentaDeDaniel.ingresar(400);


console.log(`La cantidad actual es ${cuentaDeDaniel.cantidad}`);

cuentaDeDaniel.retirar(250);

console.log(`La cantidad actual es ${cuentaDeDaniel.cantidad}`);


cuentaDeDaniel.retirar(600);

console.log(`La cantidad actual es ${cuentaDeDaniel.cantidad}`);



