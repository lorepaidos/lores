class Acuaticos extends Animales{
    #tipoDeAgua;
    #tipoDeEsqueleto;

    constructor(color,reproduccion,clima,alimentacion,tipoDeAgua,tipoDeEsqueleto){
        super(color,reproduccion,clima,alimentacion);

        this.#tipoDeAgua      = tipoDeAgua;
        this.#tipoDeEsqueleto = tipoDeEsqueleto;
    }

    get tipoDeAgua(){
        return this.#tipoDeAgua;
    }

    get tipoDeEsqueleto(){
        return this.#tipoDeEsqueleto;
    }

    set tipoDeAgua(nuevoTipoDeAgua){
        this.#tipoDeAgua = nuevoTipoDeAgua;
    }

    set tipoDeEsqueleto(nuevoTipoDeEsqueleto){
        this.#tipoDeEsqueleto = nuevoTipoDeEsqueleto;
    }
}