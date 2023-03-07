const miArray=[4,6,9,1];

const miArrayNumeros=miArray.map((elem,index,array)=>{
    return elem/2;
});

console.log(`Array original: `,miArray);
console.log(`Array convertido: `, miArrayNumeros);
