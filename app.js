let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 10;
while (numeroUsuario != numeroSecreto) {

    numeroUsuario = parseInt(prompt(`Adivina el número secreto entre 1 y ${numeroMaximoPosible}`));

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    }
    else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número es menor")
        } else {
            alert("El número es mayor")
        }
        intentos++;
        //palabraVeces = "veces";
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}

