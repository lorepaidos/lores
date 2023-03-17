//APARTADO B
//Crearemos una subclase llamada Lavadora con las siguientes características:
//Su atributo es carga, además de los atributos heredados.
//Crear el constructor, getters, setters y toString
//
//precioFinal():, si tiene una carga mayor de 30 kg, aumentara el precio 50 €, sino es así no se 
//incrementara el precio. Llama al método padre y añade el código necesario. 
//Recuerda que las condiciones que hemos visto en la clase Electrodomestico también deben afectar al 
//precio.
//


class Lavadora extends Electrodomestico{
    #carga;

    constructor(precioBase,color,consumoEnergetico,peso,carga){
        super(precioBase,color,consumoEnergetico,peso);
        
        this.#carga = carga;
    }

    get carga(){
        return this.#carga;
    }

    set carga(nuevaCarga){
        this.#carga = nuevaCarga;
    }

    toString(){
        const texto = super.toString();
        // return `${super.toString()}\nCarga: ${this.#carga}`;
        return `${texto}\nCarga: ${this.#carga}`;
    }

    precioFinal(){
        let precio = super.precioFinal();

        if (this.#carga > 30){
            precio = precio + 50;
        }

        return precio;
    }
}