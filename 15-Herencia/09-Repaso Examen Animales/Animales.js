// Definimos la Super clase (clase pabre)

class Animales {

// Definimos los atributos de Animales
//Tenemos dos atributos publicos y dos protegidos
     color;
     reproduccion;
    _clima;
    _alimentacion;

// Definicion de constructor 
// Se llama cuando se inicializa un objeto de dicha clase

    constructor(color,reproduccion,clima,alimentacion){
    this.color         = color;
    this.reproduccion  = reproduccion;
    this._clima        = clima;
    this._alimentacion = alimentacion;
}


// Definimos getters (obtenemos los datos de las variables)
get clima(){
    return this._clima;
}

get alimentacion(){
    return this._alimentacion;
}
//Definimos setters (asignamos o cambiamos su valor.)

 set clima(nuevoClima){
    this._clima = nuevoClima;
}

set alimentacion(nuevaAlimentacion){
    this._alimentacion = nuevaAlimentacion;
}

//  toString
// Devuelve la información de clase en forma de texto

toString(){
    return `Color: ${this.color}\nReproduccion: ${this.reproduccion}\nClima: ${this._clima} Alimentacion: ${this._alimentacion}`;
}

}