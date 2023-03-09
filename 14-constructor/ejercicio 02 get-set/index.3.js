// clases de animal y su atributo

class Animal{

    #especie;
    #color;
    #lugar;

  
    constructor(especie,color,lugar){
        this.#especie= especie;
        this.#color= color;
        this.#lugar= lugar;
    }



get especie(){
    return this.#especie;
}

get color(){
    return this.#color;
}

get lugar(){
    return this.#lugar;
}

set especie(nuevaEspecie){
    this.#especie = nuevaEspecie;
}

set color(nuevoColor){
    this.#color = nuevoColor;
}

set lugar(nuevaLugar){
    this.#lugar = nuevaLugar;

}
}
// instanciar un ibjeto 

const vaca   = new Animal("vacuno","negro","pradera");
const oveja  = new Animal("ovino","blanca","pradera");
const caballo= new Animal("equinio","marron","pradera");


//-----------------------vaca---------------------------------
console.log("-----------Animal vaca--------------");
console.log(vaca.especie);

vaca.especie = "vaca";

console.log(vaca.especie);
//
console.log(vaca.color);

vaca.color = "rosa";

console.log(vaca.color);
//
console.log(vaca.lugar);

vaca.lugar = "oceano";

console.log(vaca.lugar);

console.log("--------------Animal oveja-------------");

// --------------------oveja----------------------------
console.log(oveja.especie);

oveja.especie = "oveja";

console.log(oveja.especie);
//
console.log(oveja.color);

oveja.color = "verde";

console.log(oveja.color);
//
console.log(oveja.lugar);

vaca.lugar = "oceano";

console.log(vaca.lugar);

//--------------------caballo----------------------------

console.log("-------------Animal caballo----------------");

console.log(caballo.especie);

caballo.especie = "ovino";

console.log(caballo.especie);
//
console.log(caballo.color);

caballo.color = "azul";

console.log(caballo.color);
//
console.log(caballo.lugar);

caballo.lugar = "bosques";

console.log(caballo.lugar);