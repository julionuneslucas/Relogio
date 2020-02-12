const PONTEIRO_HORAS = document.querySelector('#hour');
const PONTEIRO_MINUTOS = document.querySelector('#minute');
const PONTEIRO_SEGUNDOS = document.querySelector('#second');


//! object data
var date = new Date();
console.log(date);


//! obteção da hora, minutos e segundos
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log('Horas: ' + hr + 'Minutos: ' + min + 'Segundos: ' + sec);

//! posição em graus
// formula para o movimento (ser mais suave) do ponteiro das horas e acompanhar o dos minutos
let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
// formula para o movimento (ser mais suave) do ponteiro dos minutos e acompanhar o dos segundos
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;


//! transformação dos graus em posição grafica
PONTEIRO_HORAS.style.transform = 'rotate(' + hrPosition + 'deg)';
PONTEIRO_MINUTOS.style.transform = 'rotate(' + minPosition + 'deg)';
PONTEIRO_SEGUNDOS.style.transform = 'rotate(' + secPosition + 'deg)';




