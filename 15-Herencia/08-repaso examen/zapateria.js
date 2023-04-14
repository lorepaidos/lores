class Zapateria extends Tienda{
    #numeroTotalDeZapatos;

    constructor(numeroDeEmpleados,superficie,direccion,nombre,numeroTotalDeZapatos){
        super(numeroDeEmpleados,superficie,direccion,nombre);

        this.#numeroTotalDeZapatos = numeroTotalDeZapatos;
    }

    get numeroTotalDeZapatos(){
        return this.#numeroTotalDeZapatos;
    }

    set numeroTotalDeZapatos(nuevoNumeroTotalDeZapatos){
        this.#numeroTotalDeZapatos = nuevoNumeroTotalDeZapatos;
    }
}