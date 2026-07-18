import "./style.css";

//Leer valor del html
const elementoMarcador = document.getElementById("marcador-turno");

function sumandoUno () {
    //Sumar 1 al valor
    if (elementoMarcador !== null && 
        elementoMarcador.textContent !== null &&
        elementoMarcador !== undefined) {
    const resultadoSuma = parseInt(elementoMarcador.textContent) + 1;
    // Mostrar resultado
    elementoMarcador.innerHTML = resultadoSuma.toString();
    }
}

function restandoUno () {

    //Restar 1 al valor
    if (elementoMarcador !== null && 
        elementoMarcador.textContent !== null &&
        elementoMarcador !== undefined) {
    const resultadoResta = parseInt(elementoMarcador.textContent) - 1;

    // Mostrar resultado
    elementoMarcador.innerHTML = resultadoResta.toString();
    }
}

function reiniciarCero () {

    //Reiniciar a cero
    const resultadoReinicio = 0;

    // Mostrar resultado
    if (elementoMarcador !== null && 
        elementoMarcador !== undefined) {
    elementoMarcador.innerHTML = resultadoReinicio.toString();
    }
}

function cambiarTurno () {

    //Leer turno del input
    const turno = (document.getElementById("Nuevo turno") as HTMLInputElement).value;

    //Convertir string a number
    const resultadoTurno = parseInt(turno);

    //Mostrar resultado
    if (elementoMarcador !== null && 
        elementoMarcador !== undefined) {
    elementoMarcador.innerHTML = resultadoTurno.toString();
    }
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

const botonNuevo = document.getElementById("Nuevo-turno") as HTMLInputElement;
if (botonNuevo) {
botonNuevo.addEventListener("click", cambiarTurno);
}


/*
const marcador = "99";
console.log(marcador.padStart(2, "0"));
*/