// Ejercicio 2
// Realizar un programa que nos convierta una nota
// numérica en forma de texto
// 0 - 5  => Insuficiente
// 5 - 6  => Suficiente
// 6 - 7  => Bien
// 7 - 9  => Notable
// 9 - 10 => Sobresaliente
// 10     => Matricula
// En otros casos => La nota no esta el rango

// La nota pedirsela al usuario y comprobar que introduce un número

const nota = +prompt("Introduzca una nota");


if (!isNaN(nota)){
    if (nota<0 || nota>10){
        console.log("La nota introducida excede el rango 0 - 10");
    }
    else if (nota<5){
        console.log("Ha obtenido un insuficiente");
    }
    else if (nota<6){
        console.log("Ha obtenido un suficiente");
    }
    else if (nota<7){
        console.log("Ha obtenido un bien");
    }
    else if (nota<9){
        console.log("Ha obtenido un notable");
    }
    else if (nota<10){
        console.log("Ha obtenido un sobresaliente");
    }
    else if (nota===10){
        console.log("Ha obtenido una matricula de honor");
    }
}
    else{
    console.log("La nota introducida no es un número");
}