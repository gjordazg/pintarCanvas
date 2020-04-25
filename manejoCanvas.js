// Declaramos la variable para el color cuyo valor dependera de cada caso
let colorElegido;

//Obtenemos todos los botones "Limpiar" de DOM y les agregamos la funcionalidad para limpiar el lienzo
const limpiar = document.querySelectorAll(".limpiar");
limpiar.forEach(x => x.addEventListener("click", limpiarLienzo));


//Obtenemos el primer lienzo y declaramos unas variables especificas del primer caso
const cajaLienzo_1 = document.getElementById("lienzo1");
let lienzo = cajaLienzo_1.getContext("2d");

let espacio;
let cantLineas;
let formaDibujo;

//Obtenemos el boton para pintar las lineas
let pintar = document.getElementById("pintar");
pintar.addEventListener("click", pintarLineas);

function pintarLineas() {
    cantLineas = document.getElementById("numLineas").value;
    colorElegido = document.getElementById("colorLinea").value;
    formaDibujo = parseInt(document.getElementById("combobox").value);
    espacio = cajaLienzo_1.width / cantLineas;

    console.log(formaDibujo);
    switch (formaDibujo) {
        case 1:
            trazarLineas(0, 0, espacio, cajaLienzo_1.width, espacio);
            break;
        case 2:
            trazarLineas(0, cajaLienzo_1.width, espacio, 0, espacio);
            break;
        case 3:
            trazarLineas(cajaLienzo_1.width, 0, cajaLienzo_1.width - espacio, cajaLienzo_1.width, espacio);
            break;
        case 4:
            trazarLineas(cajaLienzo_1.width, cajaLienzo_1.width, cajaLienzo_1.width - espacio, 0, espacio);
            break;
        case 5:
            trazarLineas(0, 0, espacio, cajaLienzo_1.width, espacio);
            trazarLineas(0, cajaLienzo_1.width, espacio, 0, espacio);
            trazarLineas(cajaLienzo_1.width, 0, cajaLienzo_1.width - espacio, cajaLienzo_1.width, espacio);
            trazarLineas(cajaLienzo_1.width, cajaLienzo_1.width, cajaLienzo_1.width - espacio, 0, espacio);
            break;
        case 6:
            trazarLineas(0, cajaLienzo_1.width / 2, espacio / 2, cajaLienzo_1.width, espacio / 2);
            trazarLineas(0, cajaLienzo_1.width / 2, espacio / 2, 0, espacio / 2);
            trazarLineas(cajaLienzo_1.width, cajaLienzo_1.width / 2, cajaLienzo_1.width - espacio / 2, cajaLienzo_1.width, espacio / 2);
            trazarLineas(cajaLienzo_1.width, cajaLienzo_1.width / 2, cajaLienzo_1.width - espacio / 2, 0, espacio / 2);
            break;
        case 7:
            trazarLineas(cajaLienzo_1.width / 2, 0, cajaLienzo_1.width / 2 + espacio / 2, cajaLienzo_1.width, espacio);
            trazarLineas(cajaLienzo_1.width / 2, 0, cajaLienzo_1.width / 2 - espacio / 2, cajaLienzo_1.width, espacio);
            break;
        case 8:
            trazarLineas(cajaLienzo_1.width / 2, 0, cajaLienzo_1.width / 2 + espacio / 2, cajaLienzo_1.width / 2, espacio / 2);
            trazarLineas(cajaLienzo_1.width / 2, cajaLienzo_1.width, cajaLienzo_1.width / 2 + espacio / 2, cajaLienzo_1.width / 2, espacio / 2);
            trazarLineas(cajaLienzo_1.width / 2, 0, cajaLienzo_1.width / 2 - espacio / 2, cajaLienzo_1.width / 2, espacio / 2);
            trazarLineas(cajaLienzo_1.width / 2, cajaLienzo_1.width, cajaLienzo_1.width / 2 - espacio / 2, cajaLienzo_1.width / 2, espacio / 2);
            break;
        case 9:
            trazarLineas(0, 0, espacio / 2, cajaLienzo_1.width / 2, espacio / 2);
            trazarLineas(0, cajaLienzo_1.width, espacio / 2, cajaLienzo_1.width / 2, espacio / 2);
            trazarLineas(cajaLienzo_1.width / 2, cajaLienzo_1.width / 2, cajaLienzo_1.width / 2 - espacio / 2, 0, espacio / 2);
            trazarLineas(cajaLienzo_1.width / 2, cajaLienzo_1.width / 2, cajaLienzo_1.width / 2 - espacio / 2, cajaLienzo_1.width, espacio / 2);
            trazarLineas(cajaLienzo_1.width / 2, cajaLienzo_1.width / 2, cajaLienzo_1.width / 2 + espacio / 2, cajaLienzo_1.width, espacio / 2);
            trazarLineas(cajaLienzo_1.width, cajaLienzo_1.width, cajaLienzo_1.width - espacio / 2, cajaLienzo_1.width / 2, espacio / 2);
            trazarLineas(cajaLienzo_1.width / 2, cajaLienzo_1.width / 2, cajaLienzo_1.width / 2 + espacio / 2, 0, espacio / 2);
            trazarLineas(cajaLienzo_1.width, 0, cajaLienzo_1.width - espacio / 2, cajaLienzo_1.width / 2, espacio / 2);
            break;
        default:
    }
}

function trazarLineas(xInicial, yInicial, xFinal, yFinal, espacio) {

    for (let i = 0; i < cantLineas; i++) {
        dibujo(xInicial, yInicial, xFinal, yFinal);
        yInicial = yFinal - yInicial > 0 ? yInicial + espacio : yInicial - espacio;
        xFinal = xFinal - xInicial > 0 ? xFinal + espacio : xFinal - espacio;
    }
}

function dibujo(Xi, Yi, Xf, Yf) {
    lienzo.beginPath();
    lienzo.strokeStyle = colorElegido;
    lienzo.moveTo(Xi, Yi);
    lienzo.lineTo(Xf, Yf);
    lienzo.stroke();
    lienzo.closePath();
}

function limpiarLienzo() {
    lienzo.clearRect(0, 0, 300, 300);
}


//Obtenemos el segundo Lienzo y declaramos los puntos iniciales para iniciar el trazo y el largo de cada avance
const cajaLienzo_2 = document.getElementById("lienzo2");
cajaLienzo_2.addEventListener("click", puntoInicial);

let xInicio;
let yInicio;
let sizeTrazo = 2;

//Declaramos y asignamos funcionalidad a los botones del DOM para la direccion del trazo
let arriba = document.getElementById("up");
arriba.addEventListener("click", irHaciaArriba);

let abajo = document.getElementById("down");
abajo.addEventListener("click", irHaciaAbajo);

let izquierda = document.getElementById("left");
izquierda.addEventListener("click", irHaciaIzquierda);

let derecha = document.getElementById("right")
derecha.addEventListener("click", irHaciaDerecha);

function puntoInicial(evento) {
    lienzo = cajaLienzo_2.getContext("2d");
    xInicio = evento.layerX;
    yInicio = evento.layerY;
    colorElegido = document.getElementById("colorDibujo").value;
    dibujo(xInicio - 1, yInicio, xInicio + 1, yInicio);
    dibujo(xInicio, yInicio - 1, xInicio, yInicio + 1);
    document.addEventListener("keydown", comenzarTrazo);
}

function comenzarTrazo(event) {
    switch (event.keyCode) {
        case 37:
            irHaciaIzquierda();
            break;
        case 38:
            irHaciaArriba();
            break;
        case 39:
            irHaciaDerecha();
            break;
        case 40:
            irHaciaAbajo();
            break;
    }
}

function irHaciaIzquierda() {
    colorElegido = document.getElementById("colorDibujo").value;
    if (xInicio >= 2 && xInicio <= cajaLienzo_2.width) {
        dibujo(xInicio, yInicio, xInicio - sizeTrazo, yInicio);
        xInicio -= sizeTrazo;
    }
}

function irHaciaArriba() {
    colorElegido = document.getElementById("colorDibujo").value;
    if (yInicio >= 2 && yInicio <= cajaLienzo_2.width) {
        dibujo(xInicio, yInicio, xInicio, yInicio - sizeTrazo);
        yInicio -= sizeTrazo;
    }
}

function irHaciaDerecha() {
    colorElegido = document.getElementById("colorDibujo").value;
    if (xInicio >= 0 && xInicio <= cajaLienzo_2.width - 2) {
        dibujo(xInicio, yInicio, xInicio + sizeTrazo, yInicio);
        xInicio += sizeTrazo;
    }
}

function irHaciaAbajo() {
    colorElegido = document.getElementById("colorDibujo").value;
    if (yInicio >= 0 && yInicio <= cajaLienzo_2.width - 2) {
        dibujo(xInicio, yInicio, xInicio, yInicio + sizeTrazo);
        yInicio += sizeTrazo;
    }
}


//Obtenemos el tercer Lienzo
const cajaLienzo_3 = document.getElementById("lienzo3");
cajaLienzo_3.addEventListener("mousedown", iniciarTrazo);

function iniciarTrazo(evento) {
    lienzo = cajaLienzo_3.getContext("2d");
    xInicio = evento.layerX;
    yInicio = evento.layerY;
    colorElegido = document.getElementById("colorTrazo").value;
    lienzo.beginPath();
    lienzo.strokeStyle = colorElegido;
    lienzo.moveTo(xInicio, yInicio);
    cajaLienzo_3.addEventListener("mousemove", continuarTrazo);
}

function continuarTrazo(evento) {
    cajaLienzo_3.addEventListener("mouseup", finalizarTrazo);
    lienzo.lineTo(evento.layerX, evento.layerY);
    lienzo.stroke();
    xInicio = evento.layerX;
    yInicio = evento.layerY;
}

function finalizarTrazo(evento) {
    lienzo.closePath();
    cajaLienzo_3.removeEventListener("mousemove", continuarTrazo);
}
