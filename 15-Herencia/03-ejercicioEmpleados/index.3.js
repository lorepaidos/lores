//Ejercicio 6
//Definir una clase empleado con los siguientes atributos:
//    • Nombre
//    • Edad
//    • Salario
//Crea sus constructores, getters, setters y toString

class Empleado{
    _nombre;
    _edad;
    _salario;

    constructor(nombre,edad,salario){
        this._nombre  = nombre;
        this._edad    = edad;
        this._salario = salario;
    }

    get nombre(){
        return this._nombre;
    }

    get edad(){
        return this._edad;
    }

    get salario(){
        return this._salario;
    }

    set nombre(nuevoNombre){
        this._nombre = nuevoNombre;
    }

    set edad(nuevaEdad){
        this._edad = nuevaEdad;
    }

    set salario(nuevoSalario){
        this._salario = nuevoSalario;
    }

    toString(){
        return `Nombre: ${this._nombre}\nEdad: ${this._edad}\nSalario: ${this._salario}`
    }
}

//Apartado B
//También tendremos una constante llamada PLUS, que tendrá un valor de 300€
//Tenemos dos tipos de empleados: repartidor y comercial.
//El comercial, aparte de los atributos anteriores, tiene uno más llamado comisión (double).
//El repartidor, aparte de los atributos de empleado, tiene otro llamado zona (String).
//Crea sus constructores, getters and setters y toString (piensa como aprovechar la herencia).
//Las clases tendrán un método llamado plus, que según en cada clase tendrá una implementación distinta. Este plus básicamente aumenta el salario del empleado.
//    • En comercial, si tiene más de 30 años y cobra una comisión de más de 200
//      euros, se le aplicara el plus.
//    • En repartidor, si tiene menos de 25 y reparte en la “zona 3”, este recibirá el plus.


class Comercial extends Empleado{
    #comision;

    constructor(nombre,edad,salario,comision){
        super(nombre,edad,salario);

        this.#comision = comision;
    }

    get comision(){
        return this.#comision;
    }

    set comision(nuevaComision){
        this.#comision = nuevaComision;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nComision: ${this.#comision}`;
    }

    plus(){
        const PLUS = 300;
        
        if (this._edad > 30 && this.#comision > 200){
            return this._salario + PLUS;
        }

        return this._salario;
    }
}

class Repartidor extends Empleado{
    #zona;

    constructor(nombre,edad,salario,zona){
        super(nombre,edad,salario);

        this.#zona = zona;
    }

    get zona(){
        return this.#zona;
    }

    set zona(nuevaZona){
        this.#zona = nuevaZona;
    }

    toString(){
        const texto = super.toString();
        return `${texto}\nZona: ${this.#zona}`;
    }

    plus(){
        const PLUS = 300;
        
        if (this._edad < 25 && this.#zona === "Zona 3"){
            return this._salario + PLUS;
        }

        return this._salario;
    }
}

const comercial = new Comercial("Daniel",28,1000,230);

console.log(comercial.toString());

console.log(comercial.plus());

const repartidor = new Repartidor("Daniel",22,1000,"zona 3");

console.log(repartidor.toString());

console.log(repartidor.plus());