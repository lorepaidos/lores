const nombres = ["Daniel","Carlos","Manolo"];

// Imprimir valor con un for tradicional
for(let i=0;i<nombres.length;i++){
    console.log(`El nombre de la posicion ${i} es ${nombres[i]}`);
}


// Imprimir valores con forof
// Con forof no se trabaja con indices
for(const nombre of nombres){
    console.log(nombre);
}
