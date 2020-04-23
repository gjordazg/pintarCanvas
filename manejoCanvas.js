/*const links = document.querySelectorAll(".link");

links.forEach(x => x.addEventListener("click", mostrar));

const secciones = document.querySelectorAll(".col-100-33");
console.log(links[0].getAttribute("href"), secciones);




function mostrar(){
    
}
*/

//Primer Lienzo
const cajaLienzo_1 = document.getElementById("lienzo1");
const lienzo1 = cajaLienzo_1.getContext("2d");

//Botones
let pintar = document.getElementById("boton1");
pintar.addEventListener("click", pintarLineas);
let limpiar = document.getElementById("limpiar1");
limpiar.addEventListener("click", limpiarLienzo);


let colorPrimerLienzo;
let espacio;
let cantLineas;

function pintarLineas() {
    cantLineas = document.getElementById("numLineas").value;
    colorPrimerLienzo = document.getElementById("colorLinea").value;
    espacio = cajaLienzo_1.width/ cantLineas;
    esquinaDerechaSup()
    esquinaDerechaInf()
    esquinaIzquierdaInf();
    esquinaIzquierdaSup();
}

function esquinaIzquierdaInf(){
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


function esquinaIzquierdaSup(){
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


function esquinaDerechaInf(){
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


function esquinaDerechaSup(){
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
    lienzo1.beginPath();
    lienzo1.strokeStyle = colorPrimerLienzo;
    lienzo1.moveTo(Xi, Yi);
    lienzo1.lineTo(Xf, Yf);
    lienzo1.stroke();
    lienzo1.closePath();
}

function limpiarLienzo() {
    lienzo1.clearRect(0, 0, 300, 300);
}
