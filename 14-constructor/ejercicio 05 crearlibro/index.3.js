//Ejercicio 3 
//Crear una clase Libro que contenga los siguientes atributos:
//  • ISBN
//  • Titulo
//  • Autor
//  • Número de páginas
//Crear sus respectivos métodos get y set correspondientes para cada atributo. Crear el método 
//toString() para mostrar la información relativa al libro con el siguiente formato:
//“El libro con ISBN creado por el autor tiene páginas”
//Crear 2 objetos Libro (los valores que se quieran) y mostrarlos por pantalla.
//Por último, indicar cuál de los 2 tiene más páginas

class Libro{
    #isbn;
    #titulo;
    #autor;
    #paginas;

    constructor(isbn,titulo,autor,paginas){
        this.#isbn    = isbn;
        this.#titulo  = titulo;
        this.#autor   = autor;
        this.#paginas = paginas;
    }

    get isbn(){
        return this.#isbn;
    }

    get titulo(){
        return this.#titulo;
    }

    get autor(){
        return this.#autor;
    }

    get paginas(){
        return this.#paginas;
    }

    set isbn(nuevoIsbn){
        this.#isbn = nuevoIsbn;
    }

    set titulo(nuevoTitulo){
        this.#titulo = nuevoTitulo;
    }

    set autor(nuevoAutor){
        this.#autor = nuevoAutor;
    }
    
    set paginas(nuevoNumeroDePaginas){
        this.#paginas = nuevoNumeroDePaginas;
    }

    toString(){
        return `El libro ${this.#titulo} con ISBN ${this.#isbn} creado por el autor ${this.#autor} tiene ${this.#paginas} páginas`;
    }
}

// Crear dos libros
const libro1 = new Libro("2345","El quijote","Cervantes",450);
const libro2 = new Libro("2245","El Lazarillo","Anonimo",450);

console.log(libro1.toString());
console.log(libro2.toString());

function libroConMasPaginas(libro1,libro2) {
    if (libro1.paginas > libro2.paginas){
        return `El libro mas grande es ${libro1.toString()}`;
    }
    else if (libro2.paginas > libro1.paginas){
        return `El libro mas grande es ${libro2.toString()}`;
    }
    else{
        return "Los dos libros son iguales";
    }
}

console.log(libroConMasPaginas(libro1,libro2));
