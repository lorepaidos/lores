const numeros=[
    {numero:13},
    {numero:3}
];

let suma=0;
numeros.forEach((elem,index,array)=>{
    suma=suma+elem.numero;
});

console.log(suma);