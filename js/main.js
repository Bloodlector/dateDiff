import { printError, printREsult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import ItcTabs from './changeTab.js'
// import test from './test.js'
import {stopTimer, startTimer} from './timer.js';
import {timer} from './timer2.js';


new ItcTabs('.tabs');
const form = document.getElementById('datecalc')


form.onsubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target)

  const firsDate = formData.get('firstDate')
  const secondDate = formData.get('secondDate')

  if (!firsDate || !secondDate) {
    printError('Oooooopppsss - введите текст!!!!')
  } else {
    const dateDiff = getDateDiff(firsDate, secondDate)
    printREsult(dateDiff)
  }
}


document.getElementById('startTimer').addEventListener('click', () => startTimer());
document.getElementById('stopTimer').addEventListener('click', () => stopTimer());


document.getElementById('button')
.addEventListener('click', ()=> {
  let timeMinut = document.getElementById('time').value * 60;
  timer(timeMinut);
});



  



    
