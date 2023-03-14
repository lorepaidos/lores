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
        this_entregado=true;
        
    }

    devolver(){
        this_devolver= false;
    }

    esentregado(){
        return this.entregado;
    }

}



//Apartado B
//Crear las siguientes clases hijas
//Crearemos una clase llamada Serie con las siguientes características:
//Sus atributos son numero de temporadas y creador.
//Crear el constructor, getters, setters y toString
//Crearemos una clase Videojuego con las siguientes características:
//Sus atributos son horas estimadas y compañia.
//Crear el constructor, getters, setters y toString

class Serie extends Entregable{
    #numeroDeTemporadas;
    #creador;

    constructor(titulo,entregado,genero,numeroDeTemporadas,creador){
        super(titulo,entregado,genero);
        
        this.#numeroDeTemporadas = numeroDeTemporadas;
        this.#creador            = creador;
    }

    get numeroDeTemporadas(){
        return this.#numeroDeTemporadas;
    }

    get creador(){
        return this.#creador;
    }

    set numeroDeTemporadas(nuevoNumeroDeTemporadas){
        this.#numeroDeTemporadas = nuevoNumeroDeTemporadas;
    }

    set creador(nuevoCreador){
        this.#creador = nuevoCreador;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nNumero de temporadas: ${this.#numeroDeTemporadas}\nCreador: ${this.#creador}`
    }
}

class Videojuego extends Entregable{
    #horasEstimadas;
    #companhia;

    constructor(titulo,entregado,genero,horasEstimadas,companhia){
        super(titulo,entregado,genero);
        
        this.#horasEstimadas = horasEstimadas;
        this.#companhia      = companhia;
    }

    get horasEstimadas(){
        return this.#horasEstimadas;
    }

    get companhia(){
        return this.#companhia;
    }

    set horasEstimadas(nuevaHorasEstimadas){
        this.#horasEstimadas = nuevaHorasEstimadas;
    }

    set companhia(nuevaCompanhia){
        this.#companhia = nuevaCompanhia;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nHoras estimadas: ${this.#horasEstimadas}\nCompanhia: ${this.#companhia}`
    }
}

const serie = new Serie("friends",false,"Comedia",10,"Anonimo");

console.log(serie.toString());

serie.entregar();

console.log(serie.toString());

serie.devolver();

console.log(serie.toString());

const videojuego = new Videojuego("COD",false,"Batalla",100,"Activision");

console.log(videojuego.toString());

videojuego.entregar();

console.log(videojuego.toString());

videojuego.devolver();

console.log(videojuego.toString());