//Ejercicio 7
//Apartado A
//Crear una clase entregable
//Sus atributos son título, entregado y género
//Crear el constructor, getters, setters y toString
//Tiene los siguientes métodos:
//    • entregar(): cambia el atributo entregado a true.
//    • devolver(): cambia el atributo entregado a false.
//    • esEntregado(): devuelve el estado del atributo entregado.


class Entregable{
    _titulo;
    _entregado;
    _genero;

    constructor(titulo,entregado,genero){
        this._titulo    = titulo;
        this._entregado = entregado;
        this._genero    = genero;
    }

    get titulo(){
        return this._titulo;
    }

    get entregado(){
        return this._entregado;
    }

    get genero(){
        return this._genero;
    }

    set titulo(nuevotitulo){
        this._titulo = nuevotitulo;
    }

    set entregado(nuevaentrega){
        this._entregado = nuevaentrega;
    }

    set genero(nuevogenero){
        this._genero = nuevogenero;
    }

    toString(){
        return `Titulo: ${this._titulo}\nEntregado: ${this._entregado}\nGenero: ${this._genero}`
    }

    entregar(){
        this.entregado=true
        
    }

    devolver(){
        this.devolver= false
    }

    esentregado(){
        return this.esentregado
    }

}
const estado = new Entregable ('lore','esentregado','drama')
console.log(estado._entregado);


//Apartado B
//Crear las siguientes clases hijas
//Crearemos una clase llamada Serie con las siguientes características:
//Sus atributos son numero de temporadas y creador.
//Crear el constructor, getters, setters y toString
//Crearemos una clase Videojuego con las siguientes características:
//Sus atributos son horas estimadas y compañia.
//Crear el constructor, getters, setters y toString

