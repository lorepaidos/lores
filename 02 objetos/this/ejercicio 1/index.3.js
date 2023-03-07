// crear un objeto que tenga dos numeros y aplicarle las operaciones matematicas

const numero1= 2;
const numero2= 3;

const total= {
    numero1,
    numero2,
    suma:function() {
        return this.numero1+this.numero2
                }
    ,
//RESTA
    resta:function() {
        return this.numero1-this.numero2
    }
,
//MULTIPLICACION
    multiplicacion: function() {
        return this.numero1*this.numero2
    }
,

//DIVISION
    division: function() {
        return this.numero1/this.numero2
    }
}
console.log(total.suma());
console.log(total.resta());
console.log(total.multiplicacion());
console.log(total.division());
