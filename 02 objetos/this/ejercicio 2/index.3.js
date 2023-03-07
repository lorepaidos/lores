// crear un  objeto de 1 un numero y hacer un metodo de incrementar 
const numero= {
    paso:+prompt ("introduzca numero"),
    aumentar: function (incremento) {
        this.paso=this.paso+incremento;

    },  
    disminuir:function (incremento) {
        this.paso= this.paso-incremento
    }           
}
console.log (numero.paso);

let aumento=+prompt ("dime la cantidad a aumnetar")
numero.aumentar(aumento)
console.log(numero.paso)

