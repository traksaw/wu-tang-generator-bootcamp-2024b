//PREP
const firstName = ['Gentleman', 'Amateur', 'Arrogant', 'Tricky', 'Lucky', 'X-cessive', 'Respected', 'Childish','Triumphant','Inspecktah']
const lastName = ['Lover', 'Watcher', 'Bastard', 'God', 'the Chef','Wizard', 'Leader', 'Gabmbino','Fighter','Master']
//when the button is clicked, we will generate a wutang name
document.querySelector('#wuTangBtn').addEventListener('click', wuTangForever);

function wuTangForever() {
  // will loop through each radio button once button is pressed to turn off the radio selections
  const radios = document.querySelectorAll('input[type=radio]');
  let l = radios.length;
  for (let i = 0; i < l; i++){
    radios[i].checked = radios[i].defaultChecked;

  }
  //hold onto all the answer radios
  const answerZero = document.querySelector('#answerZero')
  const answerOne = document.querySelector('#answerOne')
  const answerTwo = document.querySelector('#answerTwo')
  const answerThree = document.querySelector('#answerThree')
  const answerFour = document.querySelector('#answerFour')
  const answerFive = document.querySelector('#answerFive')
  const answerSix = document.querySelector('#answerSix')
  const answerSeven = document.querySelector('#answerSeven')
  const answerEight = document.querySelector('#answerEight')
  const answerNine = document.querySelector('#answerNine')

//these values are all strings, so we need to make them into numbers

const a = Number(answerZero.value)
const b = Number(answerOne.value)
const c = Number(answerTwo.value)
const d = Number(answerThree.value)
const e = Number(answerFour.value)
const f = Number(answerFive.value)
const g = Number(answerSix.value)
const h = Number(answerSeven.value)
const i = Number(answerEight.value)
const j = Number(answerNine.value)

// console.log(answerZero)

const nameNumbs = a+b+c+d+e+f+g+h+i+j
 
//check which inputs are being selected, needs to be added to total amount to randomize


//make a function that creates a randomizer for arrays from values of answers selected
function getMeANewName () {
    const result = document.querySelector('#placeToResult')
    const lastRandom = Math.floor((Math.random() * nameNumbs)/5)
    const firstRandom = Math.floor((Math.random() * nameNumbs)/5)
    console.log(firstRandom,lastRandom)
    //insert the result into the p
    result.innerText = `${firstName[firstRandom]} ${lastName[lastRandom]}`
}
//call the function to make it happen
getMeANewName()

}