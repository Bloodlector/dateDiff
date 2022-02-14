// import {Howl, Howler} from 'howler';

// Setup the new Howl.
// const sound = new Howl({
//   src: '/js/sound.mp3'
// });


let timerInput = document.getElementById("time"); // Берём строку
let buttonRun = document.getElementById("button");// Берём кнопку запуска
let timerShow = document.getElementById("timer"); // Берём блок для показа времени

let timeMinut = 60;
buttonRun.addEventListener('click', function() {
timeMinut = parseInt(timerInput.value) * 60;
})

let timer = setInterval(function () {
    let seconds = timeMinut%60 // Получаем секунды
    let minuts = timeMinut/60%60 // Получаем минуты
    let hour = timeMinut/60/60%60 // Получаем часы
    // Условие если время закончилось то...
    if (timeMinut <= 0) {
        // Таймер удаляется
        clearInterval(timer);
        // Выводит сообщение что время закончилось
        alert("Время закончилось");
                //   sound.play();
        
    } else { // Иначе
        // Создаём строку с выводом времени
        let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
        // Выводим строку в блок для показа таймера
        timerShow.innerHTML = strTimer;
    }
    --timeMinut; // Уменьшаем таймер
}, 1000)

// export * from "./timer2";
