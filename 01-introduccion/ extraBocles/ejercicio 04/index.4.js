// Array de productos
const productos = [
    {
        descripcion: "Patatas",
        cantidad: 4,
        precioUnidad: 0.50,
        IVA: 0.10
    },{
        descripcion: "Leche",
        cantidad: 10,
        precioUnidad: 0.90,
        IVA: 0.04
    },{
        descripcion: "Lomo",
        cantidad: 2,
        precioUnidad: 3.90,
        IVA: 0.04
    }
];

// Calcular el precio total de la factura
function calcularFactura(productos) {
    let totalFactura = 0;

    // for(let i=0;i<productos.length;i++){
    //     const producto = productos[i];
    //     totalFactura = totalFactura + (producto.cantidad*producto.precioUnidad*(1+producto.IVA))
    // }
    for (const producto of productos) {
        totalFactura = totalFactura + (producto.cantidad*producto.precioUnidad*(1+producto.IVA))
    }

    return totalFactura;
}

console.log(calcularFactura(productos));