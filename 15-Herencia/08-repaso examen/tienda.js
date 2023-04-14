//Crear una clase padre o superclase tienda que contenga los siguientes atributos:
//numero de empleados
//superficie
//dirección
//nombre
//Crear el constructor, getters y setters
//
//Crear una clase hija o subclase zapatería con los siguientes atributos:
//número total de zapatos
//Crear el constructor, getters, setters y toString
//
//Crear un clase hija o subclase libreria con los siguientes atributos:
//número total de libros
//numero total de revista
//Crear el constructor, getters y setters
//
//Instanciar una zapateria y una libreria

class Tienda {
    _numeroDeEmpleados;
    _superficie;
    _direccion;
    _nombre;


    constructor(numeroDeEmpleados,superficie,direccion,nombre){
    this._numeroDeEmpleados= numeroDeEmpleados;
    this._superficie       = superficie;
    this._direccion        = direccion;
    this._nombre           = nombre;
}

get numeroDeEmpleados(){
    return this._numeroDeEmpleados;
}

get superficie(){
    return this._superficie;
}

get direccion(){
    return this._direccion;
}

get nombre(){
    return this._nombre;
}

set numeroDeEmpleados(nuevoNumeroDeEmpleados){
    this._numeroDeEmpleados = nuevoNumeroDeEmpleados;
}

set superficie(nuevaSuperficie){
    this._superficie = nuevaSuperficie;
 }

 set direccion(nuevaDireccion){
    this._direccion = nuevaDireccion;
}

set nombre(nuevoNombre){
    this._nombre = nuevoNombre;
}

toString(){
    return `Numero de empleados: ${this._numeroDeEmpleados}\nSuperficie: ${this._superficie}\nDireccion: ${this._direccion} Nombre: ${this._nombre}`;
}

}