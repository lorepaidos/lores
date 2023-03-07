const IVA_GENERAL = 1.21;
const IVA_REDUCIDO = 1.10;

const producto1 = {
    precio: 15,
    cantidad: 2,
    impuestos: IVA_GENERAL,
    calcularTotal: function () {
        return this.precio * this.cantidad * this.impuestos;
    }
}

const producto2 = {
    precio: 25,
    cantidad: 3,
    impuestos: IVA_REDUCIDO,
    calcularTotal: function () {
        return this.precio * this.cantidad * this.impuestos;
    }
}

const factura = {
    producto1: producto1,
    producto2: producto2,
    calcularTotal: function(descuento) {
        const total1 = this.producto1.calcularTotal();
        const total2 = this.producto2.calcularTotal();

        return (total1 + total2)*descuento;
    }
}

console.log(factura.calcularTotal(0.8));

// const factura={
//     producto1,
//     producto2
// }