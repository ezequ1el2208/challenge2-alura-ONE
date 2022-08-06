export  {id,dibujarCircunferencia,dibujarLinea,dibujarExtremidades,obtener_random,limpiarPantalla};

function id(str){
    return document.getElementById(str);
};
//funcion generica para obtener un random en JS
function obtener_random (num_min, num_max){
    const amplitud_valores = num_max - num_min; //valor más alto - valor mas bajo del random 
    const valor_al_azar = Math.floor(Math.random()*amplitud_valores)+num_min; 
    return valor_al_azar;
};
let pincel;
const pantalla = document.getElementById("canvas");
if(pantalla) {
    pincel = pantalla.getContext("2d");
};
let color = '#0A3871';

function dibujarLinea(x,y,width,height){
    pincel.strokeStyle = color;
    pincel.lineWidth = 6;
    pincel.strokeRect(x,y,width,height);
};

function dibujarCircunferencia(x,y,radio,anguloInicio,anguloFin){
    pincel.beginPath();
    pincel.lineCap = 'round';
    pincel.lineWidth = 6;
    pincel.arc(x,y,radio,anguloInicio,anguloFin);
    pincel.strokeStyle = color;
    pincel.stroke();
};

function dibujarExtremidades (moveToX,moveToY,lineToX,lineToY){
    pincel.beginPath();
    pincel.lineWidth = 6;
    pincel.moveTo(moveToX,moveToY);
    pincel.lineTo(lineToX,lineToY);
    pincel.strokeStyle = color;
    pincel.stroke();
};
function limpiarPantalla(){
    pincel.clearRect(0, 0, 1200, 800);
};





