// Obtengo una referencia a un elemento HTML mediante el identificador
const botonAgregarAgua = document.getElementById("btnAgregarAgua");

// AddEventListener escucha cuando se produce un evento
// y recibe dos argumentos:
// El primero es el evento que quiero escuchar
// El segundo es la funcion con lo que quiero que haga
// al producirse el evento asociado
botonAgregarAgua.addEventListener("click",function() {
    const divAgregarAgua = document.createElement("div");
    divAgregarAgua.classList.add('formulario');
    document.body.appendChild(divAgregarAgua);
    
    
    const divIdentificador = document.createElement("div");
    divIdentificador.classList.add("fila-formulario");
    divAgregarAgua.appendChild(divIdentificador);
    
    const labelIdentificador     = document.createElement("label");
    labelIdentificador.innerHTML = "<b>Identificador</b>";
    labelIdentificador.classList.add("etiqueta-campo");
    divIdentificador.appendChild(labelIdentificador);


    const inputIdentificador = document.createElement("input");
    divIdentificador.appendChild(inputIdentificador);
    
    const divLitros = document.createElement("div");
    divLitros.classList.add("fila-formulario");
    divAgregarAgua.appendChild(divLitros);

    const labelLitros = document.createElement("label");
    labelLitros.innerHTML = "<b>Litros</b>";
    labelLitros.classList.add("etiqueta-campo");
    divLitros.appendChild(labelLitros);

    const inputLitros = document.createElement("input");
    divLitros.appendChild(inputLitros);

    const divPrecio = document.createElement("div");
    divPrecio.classList.add("fila-formulario");
    divAgregarAgua.appendChild(divPrecio);

    const labelPrecio = document.createElement("label");
    labelPrecio.innerHTML = "<b>Precio</b>";
    labelPrecio.classList.add("etiqueta-campo");
    divPrecio.appendChild(labelPrecio);

    const inputPrecio = document.createElement("input");
    divPrecio.appendChild(inputPrecio);

    const divMarca = document.createElement("div");
    divMarca.classList.add("fila-formulario");
    divAgregarAgua.appendChild(divMarca);

    const labelMarca = document.createElement("label");
    labelMarca.innerHTML = "<b>Marca</b>";
    labelMarca.classList.add("etiqueta-campo");
    divMarca.appendChild(labelMarca);

    const inputMarca = document.createElement("input");
    divMarca.appendChild(inputMarca);

    const divOrigen = document.createElement("div");
    divOrigen.classList.add("fila-formulario");
    divAgregarAgua.appendChild(divOrigen);

    const labelOrigen = document.createElement("label");
    labelOrigen.innerHTML = "<b>Origen</b>";
    labelOrigen.classList.add("etiqueta-campo");
    divOrigen.appendChild(labelOrigen);

    const inputOrigen = document.createElement("input");
    divOrigen.appendChild(inputOrigen);

    document.body.removeChild(botonAgregarAgua);

    const botonGuardar = document.createElement("button");
    botonGuardar.innerHTML = "<b>Guardar</b>";
    divAgregarAgua.appendChild(botonGuardar);
    

});