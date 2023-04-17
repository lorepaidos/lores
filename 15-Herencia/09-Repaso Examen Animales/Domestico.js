//Definimos la sub clase (clase hija)
class Domestico extends Animales{
// Definimos los atributos de Domestico, estos son privados.

    #dueño;
    #nuemeroDePatas
// Definicion de constructor 

    constructor(color,reproduccion,clima,alimnetacion,dueño,numeroDePatas){
        super(color,reproduccion,clima,alimnetacion);

        this.#dueño          = dueño;
        this.#nuemeroDePatas = numeroDePatas;
    }
// Definimos getters (obtenemos los datos de las variables)

    get dueño(){
        return this.#dueño;
    }

    get numeroDePatas(){
        return this.#nuemeroDePatas;
    }
    
//Definimos setters (asignamos o cambiamos su valor.)

    set dueño(nuevoDueño){
        this.#dueño = nuevoDueño;
    }

    set numeroDePatas(nuevoNumeroDePatas){
        this.#nuemeroDePatas = nuevoNumeroDePatas;
    }
}