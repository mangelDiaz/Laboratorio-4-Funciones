import "./style.css";

//Leer valor del html
const elementoMarcador = document.getElementById("marcador-turno");

function sumandoUno () {
    //Sumar 1 al valor
    const resultadoSuma = parseInt(elementoMarcador.textContent) + 1;
    // Mostrar resultado
    document.getElementById("marcador-turno").innerHTML = resultadoSuma;
}

function restandoUno () {
    //Restar 1 al valor
    const resultadoResta = parseInt(elementoMarcador.textContent) - 1;
    // Mostrar resultado
    document.getElementById("marcador-turno").innerHTML = resultadoResta;
}

function reiniciarCero () {
    //Reiniciar a cero
    const resultadoReinicio = 0;
    // Mostrar resultado
    document.getElementById("marcador-turno").innerHTML = resultadoReinicio;
}

function cambiarTurno () {
    //Leer turno del input
    const turno = document.getElementById("Nuevo turno").value;
    //Convertir string a number
    const resultadoTurno = parseInt(turno);
    //Mostrar resultado
    document.getElementById("marcador-turno").innerHTML = resultadoTurno;
}

const botonSumar = document.getElementById("sumar");
if (botonSumar) {
botonSumar.addEventListener("click", sumandoUno);
}

const botonRestar = document.getElementById("restar");
if (botonRestar) {
botonRestar.addEventListener("click", restandoUno);
}

const botonReiniciar = document.getElementById("reiniciar");
if (botonReiniciar) {
botonReiniciar.addEventListener("click", reiniciarCero);
}

const botonNuevo = document.getElementById("Nuevo-turno");
if (botonNuevo) {
botonNuevo.addEventListener("click", cambiarTurno);
}


/*
const marcador = "99";
console.log(marcador.padStart(2, "0"));
*/