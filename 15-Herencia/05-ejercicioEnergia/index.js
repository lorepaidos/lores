const electrodomestico = new Electrodomestico(340,"Rojo","J",24);

console.log(electrodomestico.toString());

console.log(`El precio final es de: ${electrodomestico.precioFinal()}`);

const lavadora = new Lavadora(340,"Rojo","B",24,45);

console.log(lavadora.toString());

console.log(`El precio final es de: ${lavadora.precioFinal()}`);

const television = new Television(340,"Rojo","B",24,45,true);

console.log(television.toString());

console.log(`El precio final es de: ${television.precioFinal()}`);

const electrodomesticos = [];

electrodomesticos.push(electrodomestico,lavadora,television);

console.log(electrodomesticos);


// Sumar todos los electrodomesticos
let sumaTotal = 0;
// for (let i = 0;i < electrodomesticos.length;i++){
//     // let electrodomestico = electrodomesticos[i];
//     sumaTotal = sumaTotal + electrodomesticos[i].precioFinal();
// }

for (const electrodomestico of electrodomesticos) {
    sumaTotal = sumaTotal + electrodomestico.precioFinal();
}



console.log(`El total es: ${sumaTotal}`);
    
