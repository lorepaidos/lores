const IVA_GENERAL=1.21;
const IVA_REDUCIDO=1.10;

const producto1={
    precio: 15,
    cantidad:2,
    impuestos:IVA_GENERAL,
    calcularTotal:function(){
        return this.precio*this.cantidad*this.impuestos;
    }
}

const producto2={
    precio: 25,
    cantidad:3,
    impuestos:IVA_REDUCIDO,
    calcularTotal:function(){
        return this.precio*this.cantidad*this.impuestos;
}
}

const factura={
    producto1:producto1,
    producto2:producto2,
    calcularTotal:  () =>{
                const total1=producto1.calcularTotal();
                const total2=producto2.calcularTotal();
        return total1+total2;
            }
}
console.log(factura.calcularTotal());
