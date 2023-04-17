//Definimos la sub clase (clase hija)
class Acuaticos extends Animales{

// Definimos los atributos de Acuaticos, estos son privados

    #tipoDeAgua;
    #tipoDeEsqueleto;

// Definicion de constructor 

    constructor(color,reproduccion,clima,alimentacion,tipoDeAgua,tipoDeEsqueleto){
        super(color,reproduccion,clima,alimentacion);

        this.#tipoDeAgua      = tipoDeAgua;
        this.#tipoDeEsqueleto = tipoDeEsqueleto;
    }
// Definimos getters (obtenemos los datos de las variables)

    get tipoDeAgua(){
        return this.#tipoDeAgua;
    }

    get tipoDeEsqueleto(){
        return this.#tipoDeEsqueleto;
    }
//Definimos setters (asignamos o cambiamos su valor.)

    set tipoDeAgua(nuevoTipoDeAgua){
        this.#tipoDeAgua = nuevoTipoDeAgua;
    }

    set tipoDeEsqueleto(nuevoTipoDeEsqueleto){
        this.#tipoDeEsqueleto = nuevoTipoDeEsqueleto;
    }
}