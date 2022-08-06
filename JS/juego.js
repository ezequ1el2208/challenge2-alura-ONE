import { id, dibujarCircunferencia, dibujarLinea, dibujarExtremidades, obtener_random, limpiarPantalla } from './funciones.js'
import { palabras } from "./guardar_palabra.js";

let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté

const espacioLetraError = id('letras_usadas');

//click en iniciar juego 
const btn = id('jugar');
const btn_letras = document.querySelectorAll("#letras button");

if (btn) {
    btn.addEventListener('click', iniciar)
};

function iniciar() {
    id('resultado').innerHTML = '';
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;
    limpiarPantalla();
    espacioLetraError.innerHTML = '';
    const parrafo = id('palabra_a_adivinar');
    parrafo.innerHTML = '';

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random(0, cant_palabras);

    palabrita = palabras[valor_al_azar];
    const cant_letras = palabrita.length;

    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled = false;
    };

    for (let i = 0; i < cant_letras; i++) {
        const span = document.createElement('span');
        parrafo.appendChild(span);
    };
};

/* click de adivinar letra */
for (let i = 0; i < btn_letras.length; i++) {
    btn_letras[i].addEventListener('click', click_letras);
};

function click_letras(event) {
    const spans = document.querySelectorAll('#palabra_a_adivinar span');
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;

    button.classList.remove('key');
    button.classList.add('noKey');

    const letra = button.innerHTML.toUpperCase();
    const palabra = palabrita.toUpperCase(); // .toUpperCase( )
    let acerto = false;

    for (let i = 0; i < palabra.length; i++) {
        if (letra == palabra[i]) {
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }
    if (acerto == false) {
        const span2 = document.createElement('span');
        espacioLetraError.appendChild(span2);
        span2.innerHTML = letra;
        cant_errores++;
    }
    if (cant_errores == 1) {
        dibujarLinea(600, 460, 294, 1);
        dibujarLinea(680, 100, 1, 360);
    }
    if (cant_errores == 2) {
        dibujarLinea(680, 100, 178, 1);
    }
    if (cant_errores == 3) {
        dibujarLinea(858, 100, 1, 45);
    }
    if (cant_errores == 4) {
        dibujarCircunferencia(858, 177, 32, 0, 2 * Math.PI);
    }
    if (cant_errores == 5) {
        dibujarLinea(858, 209, 1, 135);
    }
    if (cant_errores == 6) {
        dibujarExtremidades(859, 209, 823, 281);
        dibujarExtremidades(858, 209, 893, 281);
    }
    if (cant_errores == 7) {
        dibujarExtremidades(859, 344, 823, 416);
        dibujarExtremidades(858, 344, 893, 416);
        id('resultado').innerHTML = "Perdiste, la palabra era " + palabrita;
        game_over();

    } else if (cant_aciertos == palabrita.length) {
        id('resultado').innerHTML = "Ganaste!! Felicitaciones";
        game_over();
    }
};

/* fin del juego */
function game_over() {

    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled = true;
        btn_letras[i].classList.remove('noKey');
        btn_letras[i].classList.add('key');
    }
    btn.disabled = false;
};
