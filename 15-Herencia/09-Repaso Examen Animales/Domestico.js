class Domestico extends Animales{
    #dueño;
    #nuemeroDePatas

    constructor(color,reproduccion,clima,alimnetacion,dueño,numeroDePatas){
        super(color,reproduccion,clima,alimnetacion);

        this.#dueño          = dueño;
        this.#nuemeroDePatas = numeroDePatas;
    }

    get dueño(){
        return this.#dueño;
    }

    get numeroDePatas(){
        return this.#nuemeroDePatas;
    }

    set dueño(nuevoDueño){
        this.#dueño = nuevoDueño;
    }

    set numeroDePatas(nuevoNumeroDePatas){
        this.#nuemeroDePatas = nuevoNumeroDePatas;
    }
}