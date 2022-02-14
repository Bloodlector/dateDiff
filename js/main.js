import { printError, printREsult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import ItcTabs from './changeTab.js'
// import timerGo from './timer.js';
// import * as timerSec from './timer2.js';
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







    
