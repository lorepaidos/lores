//Ejercicio 8
//Apartado A
//Crearemos una superclase llamada Electrodomestico con las siguientes características:
//Sus atributos son precio base, color, consumo energético (letras entre A y F) y peso.
//Crear getters, setters y toString
//Crear los siguientes métodos:
//precioFinal(): según el consumo energético, aumentara su precio, y según su tamaño, también.
//
//
//LETRA                                                                   
//PRECIO                                               
//A
//100€
//B
//80€
//C
//60€
//D
//50€
//E
//30€
//F
//10€
//
//
//TAMAÑO
//PRECIO
//Entre 0 y 19 kg
//10€
//Entre 20 y 49 kg
//50€
//Entre 50 y 79 kg
//80€
//Mayor que 80 kg
//100€



class Electrodomestico{
    _precioBase;
    _color;
    _consumoEnergetico;
    _peso

    constructor(precioBase,color,consumoEnergetico,peso){
        this._precioBase       = precioBase;
        this._color            = color;
        this._consumoEnergetico= consumoEnergetico;
        this._peso             = peso;
    }

    get precioBase(){
        return this._precioBase;
    }

    get color(){
        return this._color;
    }

    get consumoEnergetico(){
        return this._consumoEnergetico;
    }

    get peso(){
        return this._peso;
    }

    set precioBase(nuevoprecioBase){
        this._precioBase = nuevoprecioBase;
    }

    set color(nuevoColor){
        this._color = nuevoColor;
    }

    set consumoEnergetico(nuevoConsumoenergetico){
        this._consumoEnergetico = nuevoConsumoenergetico;
    }

    set peso(nuevoPeso){
        this._peso = nuevoPeso;
    }

    toString(){
        return `Precio Base: ${this._precioBase}\nColor: ${this._color}\nConsumo Energetico: 
        ${this._consumoEnergetico} Peso:${this._peso}`
    }

    precioFinal(){
        if (this.consumoEnergetico == A) {
            return 100;
            }
        if (this.consumoEnergetico == B){
            return 80;
        }
        if (this.consumoEnergetico == C){
            return 60;
        }
        if (this.consumoEnergetico == D){
            return 50 ;
        }
        if (this.consumoEnergetico == E){
            return 30;
        }
        if (this.consumoEnergetico == F){
            return 10 ;
        }

        if (this.peso )
    }

}
