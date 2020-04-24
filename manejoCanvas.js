/*const links = document.querySelectorAll(".link");

links.forEach(x => x.addEventListener("click", mostrar));

const secciones = document.querySelectorAll(".col-100-33");
console.log(links[0].getAttribute("href"), secciones);




function mostrar(){
    
}
*/

//Primer Lienzo
const cajaLienzo_1 = document.getElementById("lienzo1");
let lienzo = cajaLienzo_1.getContext("2d");

//Botones
let pintar = document.getElementById("boton1");
pintar.addEventListener("click", pintarLineas);
let limpiar = document.getElementById("limpiar1");
limpiar.addEventListener("click", limpiarLienzo);
let limpiar2 = document.getElementById("limpiar2");
limpiar2.addEventListener("click", limpiarLienzo);
let limpiar3 = document.getElementById("limpiar3");
limpiar3.addEventListener("click", limpiarLienzo);

let colorElegido;
let espacio;
let cantLineas;

function pintarLineas() {
    cantLineas = document.getElementById("numLineas").value;
    colorElegido = document.getElementById("colorLinea").value;
    espacio = cajaLienzo_1.width / cantLineas;
    esquinaDerechaSup()
    esquinaDerechaInf()
    esquinaIzquierdaInf();
    esquinaIzquierdaSup();
}

function esquinaIzquierdaInf() {
    let xInicial = 0,
        yInicial = 0,
        xFinal = xInicial + espacio,
        yFinal = cajaLienzo_1.width;

    for (let i = 0; i < cantLineas; i++) {
        dibujo(xInicial, yInicial, xFinal, yFinal);
        yInicial += espacio;
        xFinal += espacio;
    }
}


function esquinaIzquierdaSup() {
    let xInicial = 0,
        yInicial = cajaLienzo_1.width,
        xFinal = xInicial + espacio,
        yFinal = 0;

    for (let i = 0; i < cantLineas; i++) {
        dibujo(xInicial, yInicial, xFinal, yFinal);
        yInicial -= espacio;
        xFinal += espacio;
    }
}


function esquinaDerechaInf() {
    let xInicial = cajaLienzo_1.width,
        yInicial = 0,
        xFinal = xInicial - espacio,
        yFinal = cajaLienzo_1.width;

    for (let i = 0; i < cantLineas; i++) {
        dibujo(xInicial, yInicial, xFinal, yFinal);
        yInicial += espacio;
        xFinal -= espacio;
    }
}


function esquinaDerechaSup() {
    let xInicial = cajaLienzo_1.width,
        yInicial = cajaLienzo_1.width,
        xFinal = xInicial - espacio,
        yFinal = 0;

    for (let i = 0; i < cantLineas; i++) {
        dibujo(xInicial, yInicial, xFinal, yFinal);
        yInicial -= espacio;
        xFinal -= espacio;
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


//Segundo Lienzo
const cajaLienzo_2 = document.getElementById("lienzo2");

cajaLienzo_2.addEventListener("click", puntoInicial);

let xInicio;
let yInicio;

function puntoInicial(evento) {
    lienzo = cajaLienzo_2.getContext("2d");
    xInicio = evento.layerX;
    yInicio = evento.layerY;
    colorElegido = document.getElementById("colorDibujo").value;
    dibujo(xInicio - 1, yInicio, xInicio + 1, yInicio);
    dibujo(xInicio, yInicio - 1, xInicio, yInicio + 1);
    document.addEventListener("keydown", comenzarTrazo);
}

let sizeTrazo = 2;

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

let arriba = document.getElementById("up");
arriba.addEventListener("click", irHaciaArriba);

let abajo = document.getElementById("down");
abajo.addEventListener("click", irHaciaAbajo);

let izquierda = document.getElementById("left");
izquierda.addEventListener("click", irHaciaIzquierda);

let derecha = document.getElementById("right")
derecha.addEventListener("click", irHaciaDerecha);

//Tercer Lienzo
//const cajaLienzo_3 = document.getElementById("lienzo3");
//const lienzo3 = cajaLienzo_1.getContext("2d");
