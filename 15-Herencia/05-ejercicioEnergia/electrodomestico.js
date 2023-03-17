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
    _peso;

    constructor(precioBase,color,consumoEnergetico,peso){
        this._precioBase        = precioBase;
        this._color             = color;
        this._consumoEnergetico = consumoEnergetico;
        this._peso              = peso;
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

    set precioBase(nuevoPrecioBase){
        this._precioBase = nuevoPrecioBase;
    }

    set color(nuevoColor){
        this._color = nuevoColor;
    }

    set consumoEnergetico(nuevoConsumoEnergetico){
        this._precioBase = nuevoConsumoEnergetico;
    }

    set peso(nuevoPeso){
        this._peso = nuevoPeso;
    }

    toString(){
        return `Precio base: ${this._precioBase}\nColor: ${this._color}\nConsumo Energetico: ${this._consumoEnergetico}\nPeso: ${this.peso}`;
    }

    precioFinal(){
        let precioConsumo = 0;
        if (this._consumoEnergetico === "A"){
            precioConsumo = 100;
        }
        else if (this._consumoEnergetico === "B"){
            precioConsumo = 80;
        }
        else if (this._consumoEnergetico === "C"){
            precioConsumo = 60;
        }
        else if (this._consumoEnergetico === "D"){
            precioConsumo = 50;
        }
        else if (this._consumoEnergetico === "E"){
            precioConsumo = 30;
        }
        else if (this._consumoEnergetico === "F"){
            precioConsumo = 10;
        }

        let precioPeso = 0;
        if (this._peso <= 19){
            precioPeso = 10;
        }
        else if (this._peso <= 49){
            precioPeso = 50;
        }
        else if (this._peso <= 79){
            precioPeso = 80;
        }
        else{
            precioPeso = 100;
        }

        return this._precioBase + precioConsumo + precioPeso;

    }
}