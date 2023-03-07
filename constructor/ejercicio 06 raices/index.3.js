//Ejercicio 4
//Vamos a realizar una clase llamada Raices, donde representaremos
//los valores de una ecuación de 2º grado.
//Tendremos los 3 coeficientes como atributos, llamémosles a, b y c.
//Hay que insertar estos 3 valores para construir el objeto.
//Las operaciones que se podrán hacer son las siguientes:
//obtenerDiscriminante(): devuelve el valor del discriminante
//el discriminante tiene la siguiente formula, (b^2)-4*a*c
//tieneRaices(): devuelve un booleano indicando si tiene dos soluciones,
//para que esto ocurra, el discriminante debe ser mayor o igual que 0.
//tieneRaiz(): devuelve un booleano indicando si tiene una única solución, 
//para que esto ocurra, el discriminante debe ser igual que 0.
// obtenerRaices(): imprime las 2 posibles soluciones
// obtenerRaiz(): imprime única raíz, que será cuando solo tenga una solución posible
//calcular(): mostrara por consola las posibles soluciones que tiene nuestra ecuación,
// en caso de no existir solución, mostrarlo también.
//Formula ecuación 2º grado: (-b±√((b^2)-(4*a*c)))/(2*a)
//Solo varía el signo delante de -b


class Raices{
    #a;
    #b;
    #c;

    constructor(a,b,c){
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    obtenerDiscriminante(){
        const discriminante = (this.#b ** 2) - (4 * this.#a * this.#c);
        return discriminante;
    }

    tieneRaices(){
        // Con if - else
        // if (this.obtenerDiscriminante() > 0){
        //     return true;
        // }
        
        // return false;

        // Con Operador ternario
        // const resultado = this.obtenerDiscriminante() > 0 ? true : false;
        // return resultado;

        return this.obtenerDiscriminante() > 0;
    }

    tieneRaiz(){
        // Con if - else
        // if (this.obtenerDiscriminante() === 0){
        //     return true;
        // }
        
        // return false;

        // Con Operador ternario
        // const resultado = this.obtenerDiscriminante() === 0 ? true : false;
        // return resultado;

        return this.obtenerDiscriminante() === 0;
    }

    obtenerRaices(){
        const raiz              = Math.sqrt(this.obtenerDiscriminante());
        const resultadoDivision = (raiz / (2 * this.#a));
        
        const solucion1 = -this.#b + resultadoDivision;
        const solucion2 = -this.#b - resultadoDivision;

        console.log(solucion1);
        console.log(solucion2);
    }

    obtenerRaiz(){
        const raiz              = Math.sqrt(this.obtenerDiscriminante());
        const resultadoDivision = (raiz / (2 * this.#a));
        
        const solucion1 = -this.#b + resultadoDivision;

        console.log(solucion1);
    }

    calcular(){
        if (this.tieneRaices()){
            this.obtenerRaices();
        }
        else if (this.tieneRaiz()){
            this.obtenerRaiz();
        }
        else{
            console.log("La ecuacion no tiene solucion");
        }
    }
}


const ecuacion = new Raices(3,0,5);
ecuacion.calcular();


