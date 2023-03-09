// Definir clase padre
class Animal{
    numeroOjos;
    colorPiel;

    constructor(numeroOjos,colorPiel){
        this.numeroOjos = numeroOjos;
        this.colorPiel  = colorPiel;
    }

    imprimir(){
        console.log(`Numeros de ojos: ${this.numeroOjos}\nColor piel: ${this.colorPiel}`);
    }
}

// Clases hijas
class Terrestre extends Animal{
    numeroPatas;

    constructor(numeroOjos,colorPiel,numeroPatas){
        super(numeroOjos,colorPiel);

        this.numeroPatas = numeroPatas;
    }

    // Sobreescritura de métodos
    imprimir(){
        super.imprimir();
        console.log(`Numero patas: ${this.numeroPatas}`);
    }
}


class Marino extends Animal{
    viveRio;

    constructor(numeroOjos,colorPiel,viveRio){
        super(numeroOjos,colorPiel);

        this.viveRio = viveRio;
    }

    // Sobreescritura de métodos
    imprimir(){
        super.imprimir();
        console.log(`Vive en el rio: ${this.viveRio}`);
    }
}

class Gato extends Terrestre{
    pelaje;

    constructor(colorPiel,pelaje){
        super(2,colorPiel,4);

        this.pelaje = pelaje;
    }

    imprimir(){
        super.imprimir();
        console.log(`Pelaje: ${this.pelaje}`);
    }
}

console.log("Perro");
const perro = new Terrestre(2,"marron",4);

perro.imprimir();


console.log("Salmon");
const salmon = new Marino(2,"rosado",true);

salmon.imprimir();

console.log("Gato persa");
const gatoPersa = new Gato("blanco","largo");

gatoPersa.imprimir();