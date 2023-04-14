//Crear un clase hija o subclase motocicleta con los siguientes atributos:
//Motor (eléctrico o combustible)
//Modelo
//Marca
//Crear el constructor, getters, setters y toString

class Motocicleta extends Vehiculo{
    #motor;
    #modelo;
    #marca;

    constructor(numeroDeRuedas, numeroDeLuces, color, motor, modelo, marca){
        super(numeroDeRuedas, numeroDeLuces, color);

        this.#motor  = motor;
        this.#modelo = modelo;
        this.#marca  = marca;
    }

    get motor(){
        return this.#motor;
    }

    get modelo(){
        return this.#modelo;
    }

    get marca(){
        return this.#marca;
    }

    set motor(nuevoMotor){
        this.#motor = nuevoMotor;
    }

    set modelo(nuevoModelo){
        this.#modelo = nuevoModelo;
    }

    set marca(nuevaMarca){
        this.#marca = nuevaMarca;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nMotor: ${this.#motor}\nModelo: ${this.#modelo}\nMarca: ${this.#marca}`;
    }
}