//import { palabras } from "./juego.js";
export var palabras = ['HOLA'];
var nuevasPalabras = JSON.parse(localStorage.getItem('palabras'));

let areaDeTexto = document.getElementById('nueva_palabra');
let btn_guardar = document.getElementById('botonguardar');
let btn_salir = document.getElementById('botoncancelar');
let btn_empezar = document.getElementById('botonempezar');
let noPermitido = new RegExp('[0-9a-zñáéíóúÑÁÉÍÓÚ~&@#%!¡¿?,._-})]');

if (nuevasPalabras) {
    palabras = nuevasPalabras;
};

if(areaDeTexto){
    areaDeTexto.addEventListener('input', () => {
        let input = areaDeTexto.value;
        if (input.match(noPermitido)) {
            alert('Ingresa solo letras mayusculas');
            areaDeTexto.value = input.slice(0, -1);
        } else if (input.length > 8) {
            alert('Guarda, maximo 8 letras');
            areaDeTexto.value = input.slice(0, -1);
        }
    });
}

if(btn_guardar){
    btn_guardar.addEventListener('click', () => {
        let nuevaPalabra = areaDeTexto.value;
        if (palabras.includes(nuevaPalabra)) {
            alert(nuevaPalabra + ' la palabra ya existe');
        } else if (nuevaPalabra.length < 3) {
            alert('Guarda el minimo de letras es 3');
        } else {
            palabras.push(nuevaPalabra);
            localStorage.setItem('palabras', JSON.stringify(palabras));
            alert(nuevaPalabra + ' palabra agregada');
    
        }
    });
}
