const miArray=[4,6,9,10];

const miArrayPares=miArray.filter((elem,index,array)=>{
    return elem%2===0;
});

console.log(miArrayPares);


// const miArrayImpares=miArray.filter((elem,index,array)=>{
//     return elem%2!=1;
// });

const miArrayImpares=miArray.filter((elem,index,array)=>{
    return elem%2==1;
});

console.log(miArrayImpares);