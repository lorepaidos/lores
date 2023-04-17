
class Animales {
    _color;
    _reproduccion;
    _clima;
    _alimentacion;


    constructor(color,reproduccion,clima,alimentacion){
    this._color        = color;
    this._reproduccion = reproduccion;
    this._clima        = clima;
    this._alimentacion = alimentacion;
}

get color(){
    return this._color;
}

get reproduccion(){
    return this._reproduccion;
}

get clima(){
    return this._clima;
}

get alimentacion(){
    return this._alimentacion;
}

set color(nuevoColor){
    this._color = nuevoColor;
}

set reproduccion(nuevaReproduccion){
    this._reproduccion = nuevaReproduccion;
 }

 set clima(nuevoClima){
    this._clima = nuevoClima;
}

set alimentacion(nuevaAlimentacion){
    this._alimentacion = nuevaAlimentacion;
}

toString(){
    return `Color: ${this._color}\nReproduccion: ${this._reproduccion}\nClima: ${this._clima} Alimentacion: ${this._alimentacion}`;
}

}