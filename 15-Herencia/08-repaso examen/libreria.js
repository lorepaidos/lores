class Libreria extends Tienda{
    #numeroTotalDeLibros;
    #numeroTotalDeRevistas;

    constructor(numeroDeEmpleados,superficie,direccion,nombre,numeroTotalDeLibros,numeroTotalDeRevistas){
        super(numeroDeEmpleados,superficie,direccion,nombre);

        this.#numeroTotalDeLibros = numeroTotalDeLibros;
        this.#numeroTotalDeRevistas = numeroTotalDeRevistas;
    }

    get numeroTotalDeLibros(){
        return this.#numeroTotalDeLibros;
    }

    get numeroTotalDeRevistas(){
        return this.#numeroTotalDeRevistas;
    }

    set numeroTotalDeLibros(nuevoNumeroTotalDeLibros){
        this.#numeroTotalDeLibros = nuevoNumeroTotalDeLibros;
    }

    set numeroTotalDeRevistas(nuevoNumeroTotalDeRevistas){
        this.#numeroTotalDeRevistas = nuevoNumeroTotalDeRevistas;
    }
}