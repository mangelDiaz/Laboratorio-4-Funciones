import "./style.css";

//Leer valor del html
const elementoMarcador = document.getElementById("marcador-turno");


function sumandoUno () {
    //Sumar 1 al valor
    if (elementoMarcador instanceof HTMLHeadingElement &&
        elementoMarcador !== null && 
        elementoMarcador.textContent !== null &&
        elementoMarcador !== undefined) {
        
        const numeroActual = parseInt(elementoMarcador.textContent);

        if (numeroActual < 99) {
        const resultadoSuma = numeroActual + 1;   
        // Mostrar resultado
        elementoMarcador.innerHTML = resultadoSuma.toString().padStart(2, "0");
        }
    }
}

function restandoUno () {

    //Restar 1 al valor
    if (elementoMarcador instanceof HTMLHeadingElement &&
        elementoMarcador !== null && 
        elementoMarcador.textContent !== null &&
        elementoMarcador !== undefined) {
            
        const numeroActual = parseInt(elementoMarcador.textContent);

        if (numeroActual > 0) {
        const resultadoResta = numeroActual - 1;
        // Mostrar resultado
        elementoMarcador.innerHTML = resultadoResta.toString().padStart(2, "0");
        }
    }
}

function reiniciarCero () {

    //Reiniciar a cero
    const resultadoReinicio = 0;

    // Mostrar resultado
    if (elementoMarcador instanceof HTMLHeadingElement &&
        elementoMarcador !== null && 
        elementoMarcador !== undefined) {
    elementoMarcador.innerHTML = resultadoReinicio.toString().padStart(2, "0");
    }
}

function cambiarTurno () {

    //Leer turno del input
    const inputTurno = document.getElementById("Input-turno");
    
    //Hace comproación del input HTML
    if (inputTurno instanceof HTMLInputElement) {
        
        //Extraer valor en string
        const turno = inputTurno.value;

        //Convertir string a number
        const resultadoTurno = parseInt(turno);

        //Mostrar resultado
        if (elementoMarcador instanceof HTMLHeadingElement &&
            elementoMarcador !== null && 
            elementoMarcador !== undefined &&
            resultadoTurno >= 0 &&
            resultadoTurno <= 99) {
        elementoMarcador.innerHTML = resultadoTurno.toString().padStart(2, "0");
        } else {
            alert("Introduce un número entre 0 y 99");
        }
    }
} 

const botonSumar = document.getElementById("sumar");
if (botonSumar instanceof HTMLButtonElement) {
botonSumar.addEventListener("click", sumandoUno);
}

const botonRestar = document.getElementById("restar");
if (botonRestar instanceof HTMLButtonElement) {
botonRestar.addEventListener("click", restandoUno);
}

const botonReiniciar = document.getElementById("reiniciar");
if (botonReiniciar instanceof HTMLButtonElement) {
botonReiniciar.addEventListener("click", reiniciarCero);
}

const botonNuevo = document.getElementById("Nuevo-turno");
if (botonNuevo instanceof HTMLButtonElement) {
botonNuevo.addEventListener("click", cambiarTurno);
}