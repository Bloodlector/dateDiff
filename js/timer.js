let timer = 0;
let timerInterval;
let ms = document.getElementById('ms');
let second = document.getElementById('second');
let minute = document.getElementById('minute');
let timerStart = document.getElementById('startTimer');
function stopTimer() {
  clearInterval(timerInterval);
  }
timerStart.addEventListener('click', function startTimer() {
  stopTimer();
  timerInterval = setInterval(function() {
  timer += 1/60;
  let msVal = Math.floor((timer - Math.floor(timer))*100);
  let secondVal = Math.floor(timer) - Math.floor(timer/60) * 60;
  let minuteVal = Math.floor(timer/60);
  ms.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
  second.innerHTML = secondVal < 10 ? "0" + secondVal.toString() : secondVal;
  minute.innerHTML = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal;
  }, 1000/60);
});

let timerStop = document.getElementById('stopTimer');
timerStop.addEventListener('click', function stopTimer() {
  clearInterval(timerInterval);
  });






// export default timerGo;