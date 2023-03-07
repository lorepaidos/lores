const numero = {
    paso: +prompt("Introduzca un numero"),
    aumentar: function (incremento) {
        this.paso = this.paso + incremento;
    },
    disminuir: function (incremento) {
        this.paso = this.paso - incremento;
    }
}

console.log(numero.paso);

let aumento=+prompt("Deme la cantidad a aumentar")

numero.aumentar(aumento);

console.log(numero.paso);