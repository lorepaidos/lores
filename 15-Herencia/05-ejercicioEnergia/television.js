//Crearemos una subclase llamada Television con las siguientes características:
// Sus atributos son resolución (en pulgadas) y sintonizador TDT (booleano), 
//además de los atributos heredados.
//Crear el constructor, getters, setters y toString
// precioFinal(): si tiene una resolución mayor de 40 pulgadas,
// se incrementara el precio un 30% y si tiene un sintonizador TDT incorporado, aumentara 50 €. 
//Recuerda que las condiciones que hemos visto en la clase Electrodomestico también deben afectar al
// precio.


class Television extends Electrodomestico{
    _resolucion;
    _sintonizador
    

    constructor(precioBase,color,consumoEnergetico,peso,resolucion,_sintonizador){
        this._resolucion  = resolucion;
        this._sintonizador= sintonizador
       
    }

    get resolucion(){
        return this._resolucion;
    }


    get sintonizador(){
        return this._sintonizador;
    }


    set resolucion(nuevaResolucion){
        this._resolucion = nuevaResolucion;
    }

    set sintonizador(nuevaSintonizacion){
        this._sintonizador = nuevaSintonizacion;
    }

    
    toString(){
        return `Resolucion: ${this._resolucion}/nSintonozador: ${this._sintonizador}`
    }
}