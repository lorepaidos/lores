//Crear una clase hija o subclase bicicleta con los siguientes atributos:
//Tipo
//Bocina
//Crear el constructor, getters, setters y toString

class Bicicleta extends Vehiculo{
    // Definición de atributos
    #tipo;
    #bocina;

    // Constructor
    constructor(numeroDeRuedas, numeroDeLuces, color, tipo, bocina){
        super(numeroDeRuedas, numeroDeLuces, color);

        this.#tipo   = tipo;
        this.#bocina = bocina;
    }

    // Definición de getters
    get tipo(){
        return this.#tipo;
    }

    get bocina(){
        return this.#bocina;
    }

    // Definición de setters
    set tipo(nuevoTipo){
        this.#tipo = nuevoTipo;
    }

    set bocina(nuevaBocina){
        this.#bocina = nuevaBocina;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nTipo: ${this.#tipo}\nBocina: ${this.#bocina}`;
    }
}