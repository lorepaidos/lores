const numeros=[5,7,8];

let suma=0;
numeros.forEach((elem,index,array)=>{
    suma=suma+elem;
});

console.log(`El resultado de la suma es ${suma}`);