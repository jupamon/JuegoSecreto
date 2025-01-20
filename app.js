
let numeroSecreto = 0;
let intentos = 0;
let listaNummerosSorteados = [];
let nummeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Adivinaste en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * nummeroMaximo) + 1;
    //Si ya sorteamos todos los números posibles
    if (listaNummerosSorteados.length === nummeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles.");
    //Si el número generado esta incluido en la lista
    if (listaNummerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNummerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}


function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Adivina el número secreto que está entre 1 y ${nummeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limppiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //generar nuevo número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();


