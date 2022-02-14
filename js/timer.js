let timer = 0;
let timerInterval;
let ms = document.getElementById('ms');
let second = document.getElementById('second');
let minute = document.getElementById('minute');
let timerStart = document.getElementById('vpered');
function sanovka() {
  clearInterval(timerInterval);
  }
timerStart.addEventListener('click', function vpered() {
  sanovka();
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

let timerStop = document.getElementById('sanovka');
timerStop.addEventListener('click', function sanovka() {
  clearInterval(timerInterval);
  });






// export default timerGo;