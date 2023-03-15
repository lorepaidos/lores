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
    _resolucion;
    _color;
    _consumoEnergetico;
    _peso

    constructor(precioBase,color,consumoEnergetico,peso){
        this._resolucion       = precioBase;
        this._color            = color;
        this._consumoEnergetico= consumoEnergetico;
        this._peso             = peso;
    }

    get carga(){
        return this._resolucion;
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

    set carga(nuevoprecioBase){
        this._resolucion = nuevoprecioBase;
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
        return `Precio Base: ${this._resolucion}\nColor: ${this._color}\nConsumo Energetico: 
        ${this._consumoEnergetico} Peso:${this._peso}`
    }

    precioFinal(){
        let precioConsumo;
        if (this.consumoEnergetico == A) {
            precioConsumo=100;
            }
        if (this.consumoEnergetico == B){
            precioConsumo= 80;
        }
        if (this.consumoEnergetico == C){
            precioConsumo= 60;
        }
        if (this.consumoEnergetico == D){
            precioConsumo= 50 ;
        }
        if (this.consumoEnergetico == E){
            precioConsumo= 30;
        }
        if (this.consumoEnergetico == F){
            precioConsumo= 10 ;
        }

        let precioPeso;
        if (this.peso <= 19){
            precioPeso= 10
        }
        if (this.peso >= 20 & 49){
            precioPeso=50
        }
        if (this.peso >= 50 & 79){
            precioPeso=80
        } 

        if (this.peso >= 80){
            precioPeso=100
        }
    }

}
