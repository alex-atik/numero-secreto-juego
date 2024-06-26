let preguntaInicial = prompt("¿Qué día es hoy?");
if (preguntaInicial === "Sábado" || preguntaInicial === "Domingo") {
    alert ("Feliz fin de semana");
} else {
    alert("Feliz resto de semana");
}

let ingresarNumero = prompt("Escribe cualquier número");
if (ingresarNumero > 0) {
    alert("El Número es positivo");
} else if (ingresarNumero < 0) {
    alert("El Número es negativo");
} else {
    alert("El número es cero");
}