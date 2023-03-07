
const personasArreglo=[
    {
        nombre:"Daniel",
        edad:45
    },{
        nombre:"Carlos",
        edad:35
    },{
        nombre:"Pepito",
        edad:55
    }
]

// Filtrar las personas mayores de 40 años
const personasMayores40=personasArreglo.filter((elem)=>{
    return elem.edad>40;
});

console.log(personasMayores40);

// Calcular la media de las edades de las personas
// mayores de 40
const personasEdades=personasMayores40.map((elem)=>{
    return elem.edad;
});

console.log(personasEdades);

// Con reduce calculo la suma de las edad
// y divido entre el total de elementos
const media=personasEdades.reduce((acum,valorActual)=>{
    return acum+valorActual;
})/personasEdades.length;

console.log(media);