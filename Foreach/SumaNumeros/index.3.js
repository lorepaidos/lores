const numero=[
{numero:13},
{numero:3}
];

let suma=0
numero.forEach((elem,index,array)=> {
suma=suma+elem.numero;
})

console.log(suma);