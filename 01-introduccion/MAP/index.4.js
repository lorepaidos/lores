
const miArray=["4","6","9","10"]

const miArrayNumeros=miArray.map((elem,index,array)=>{
    return +elem;
});

console.log(`Array original: `,miArray);
console.log(`Array convertido: `, miArrayNumeros);