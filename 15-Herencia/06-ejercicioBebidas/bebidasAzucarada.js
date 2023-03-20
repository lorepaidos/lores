//Ejercicio 9
//Apartado A
//En un almacén se guardan un conjunto de  bebidas.
//De los bebidas nos interesa saber su identificador (cada uno tiene uno distinto), 
//cantidad de litros, precio y marca.
//Crear todos sus atributos, constructor, getters, setters y toString

class BebidaAzucarada extends Bebida{
    #porcentajeAzucar;
    #promocion;

    constructor(identificador,litros,precio,marca,porcentajeAzucar,promocion){
        super(identificador,litros,precio,marca);

        this.#porcentajeAzucar = porcentajeAzucar;
        this.#promocion = promocion;
    }

    get porcentajeAzucar(){
        return this.#porcentajeAzucar;
    }

    get promocion(){
        return this.#promocion;
    }
    
    get precio(){
        if (this.#promocion){
            // return this._precio - (this._precio * 0.1)
            return this._precio * 0.9;
        }
        else{
            return this._precio;
        }
    }

    set porcentajeAzucar(nuevoPorcentajeAzucar){
        this.#porcentajeAzucar = nuevoPorcentajeAzucar;
    }

    set promocion(nuevaPromocion){
        this.#promocion = nuevaPromocion;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nPorcentaje Azucar: ${this.#porcentajeAzucar}\nPromocion: ${this.#promocion}`;
    }
}