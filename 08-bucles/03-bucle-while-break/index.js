let contador = 0;


// El bucle while se repite una cantidad de veces
// hasta que deja de cumplirse la condicion de entrada
// while (condicion){
// }
while (contador <= 10) {
    // contador=contador+1;
    console.log(`while ${contador}`);
    contador++;
    // Cuando contador vale 5
    // se rompe el bucle
    if (contador===5){
        break;
    }
}