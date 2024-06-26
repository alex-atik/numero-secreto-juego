//variables
let numeroMaxPosible = 100
let numeroUsuario = 0;
let numeroSecreto = Math.floor(Math.random()*numeroMaxPosible)+1;
let intentos = 1;
let maxIntentos = 7;
//let palabraVeces = "vez";
console.log (numeroSecreto);

while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt (prompt(`Adivina el número secreto del 1 al ${numeroMaxPosible}:`));

    console.log(numeroUsuario);
    /* 
    este código realiza la comparación
    */
    if (numeroUsuario == numeroSecreto){
        alert(`Has acertado el número secreto es: ${numeroSecreto}. Lo lograste en ${intentos} ${intentos == 1 ? "vez" : "veces" }`);
        } else {
            if (numeroUsuario > numeroSecreto) {
                alert("El número secreto es menor");
            } else {
                alert("El número secreto es mayor");
            }
            //Se ubica acá para registrar las veces que ha intentado "Sin acertar"//
           // intentos = intentos + 1; forma uno de contador
           //intentos += 1; forma dos de contador
           intentos ++;
            //palabraVeces = "veces";
            if (intentos > maxIntentos) {
                alert (`Llegaste a ${maxIntentos}, el límite de intentos`);
            }
            //alert("Intenta una vez más, hasta acertar");
        }
    }
