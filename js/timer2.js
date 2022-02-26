// import {Howl, Howler} from 'howler';

// Setup the new Howl.
// const sound = new Howl({
//   src: '/js/sound.mp3'
// });
// import {Howl, Howler} from 'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js'
// import play from './play.js'

let timerShow = document.getElementById("timer"); // Берём блок для показа времени
let timerInput = document.getElementById("time"); // Берём строку
let buttonRun = document.getElementById("button");// Берём кнопку запуска


function timer(timeMinut) {
    setInterval(function () {
    let seconds = +timeMinut%60 // Получаем секунды
    let minuts = +timeMinut/60%60 // Получаем минуты
    let hour = +timeMinut/60/60%60 // Получаем часы
    let audio = new Audio('/js/sound.mp3');

    buttonRun.addEventListener('click', ()=> {
        timeMinut = parseInt(timerInput.value) * 60;
        
        })
        // Условие если время закончилось то...
    if (timeMinut <= 0) {
        // Таймер удаляется
                audio.play();
                clearInterval(timer);
        // Выводит сообщение что время закончилось
               console.log("Время закончилось");
  } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    --timeMinut; // Уменьшаем таймер
    return
}, 1000)
}

export {timer};
