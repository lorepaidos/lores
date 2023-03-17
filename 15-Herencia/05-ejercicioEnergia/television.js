//Crearemos una subclase llamada Television con las siguientes características:
// Sus atributos son resolución (en pulgadas) y sintonizador TDT (booleano), 
//además de los atributos heredados.
//Crear el constructor, getters, setters y toString
// precioFinal(): si tiene una resolución mayor de 40 pulgadas,
// se incrementara el precio un 30% y si tiene un sintonizador TDT incorporado, aumentara 50 €. 
//Recuerda que las condiciones que hemos visto en la clase Electrodomestico también deben afectar al
// precio.


class Television extends Electrodomestico{
    #resolucion;
    #tdt;

    constructor(precioBase,color,consumoEnergetico,peso,resolucion,tdt){
        super(precioBase,color,consumoEnergetico,peso);

        this.#resolucion = resolucion;
        this.#tdt        = tdt;
    }

    get resolucion(){
        return this.#resolucion;
    }

    get tdt(){
        return this.#tdt;
    }

    set resolucion(nuevaResolucion){
        this.#resolucion = nuevaResolucion;
    }

    set tdt(nuevoTDT){
        this.#tdt = nuevoTDT;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nResolucion: ${this.#resolucion}\nSintonizador TDT: ${this.#tdt}`;
    }

    precioFinal(){
        let precio = super.precioFinal();

        if (this.#tdt){
            precio = precio + 50;
        }

        if (this.#resolucion > 40){
            precio = precio + (this._precioBase * 0.3);
        }

        return precio;
    }
}