//Crear un clase hija o subclase Coche con los siguientes atributos:
//Motor (eléctrico o combustible)
//Modelo
//Marca
//Número de puertas
//Crear el constructor, getters, setters y toString

class Coche extends Vehiculo{
    #motor;
    #modelo;
    #marca;
    #numeroDePuertas;

    constructor(numeroDeRuedas, numeroDeLuces, color, motor, modelo, marca, numeroDePuertas){
        super(numeroDeRuedas, numeroDeLuces, color);

        this.#motor            = motor;
        this.#modelo           = modelo;
        this.#marca            = marca;
        this.#numeroDePuertas  = numeroDePuertas;
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

    get numeroDePuertas(){
        return this.#numeroDePuertas;
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

    set numeroDePuertas(nuevoNumeroDePuertas){
        this.#numeroDePuertas = nuevoNumeroDePuertas;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nMotor: ${this.#motor}\nModelo: ${this.#modelo}\nMarca: ${this.#marca}\nNumero de puertas: ${this.numeroDePuertas}`;
    }
}
