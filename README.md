# Relógio
 Digital clock
 
 ## Prerequisites
Use a recent browser. For example: Google Chrome, Mozilla Firefox, Opera, Microsoft Edge or Vivaldi.

## About

Digital clock

Files: index.html, style.css and script.js.

## Built With

- HTML5; 
- CSS3;
- JavaScript.

## Code Block
```
// ! Função para ativar o relógio

function runTheClock() {

    //! Object data
    var date = new Date();
    console.log(date);


    //! Obteção da hora, minutos e segundos
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    console.log('Horas: ' + hr + 'Minutos: ' + min + 'Segundos: ' + sec);

    //! Posição em graus
    // formula para o movimento (ser mais suave) do ponteiro das horas e acompanhar o dos minutos
    let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
    // formula para o movimento (ser mais suave) do ponteiro dos minutos e acompanhar o dos segundos
    let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
    let secPosition = sec * 360 / 60;


    //! Transformação dos graus em posição grafica
    PONTEIRO_HORAS.style.transform = 'rotate(' + hrPosition + 'deg)';
    PONTEIRO_MINUTOS.style.transform = 'rotate(' + minPosition + 'deg)';
    PONTEIRO_SEGUNDOS.style.transform = 'rotate(' + secPosition + 'deg)';

}


```

## Author

- **Júlio Lucas** - code and design.

