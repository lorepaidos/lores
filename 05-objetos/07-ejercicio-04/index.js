const calculadora = {
    numero1: +prompt("Introduzca un numero"),
    numero2: +prompt("Introduzca otro numero"),
    suma: function () {
        return this.numero1 + this.numero2;
    },
    resta: function () {
        return this.numero1 - this.numero2;
    },
    multiplicacion: function () {
        return this.numero1 * this.numero2;
    },
    division: function () {
        return this.numero1 / this.numero2;
    }
}

console.log("SUMA");
console.log(calculadora.suma());
console.log(`El resultado de ${calculadora.numero1}+${calculadora.numero2} es igual a ${calculadora.suma()}`);

console.log("RESTA");
console.log(calculadora.resta());
console.log(`El resultado de ${calculadora.numero1}-${calculadora.numero2} es igual a ${calculadora.resta()}`);

console.log("MULTIPLICACION");
console.log(calculadora.multiplicacion());
console.log(`El resultado de ${calculadora.numero1}*${calculadora.numero2} es igual a ${calculadora.multiplicacion()}`);

console.log("DIVISION");
console.log(calculadora.division());
console.log(`El resultado de ${calculadora.numero1}/${calculadora.numero2} es igual a ${calculadora.division()}`);