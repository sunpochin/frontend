const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole')
  })

  let randomVal = Math.floor(Math.random() * 9)
  let randomSquare = squares[randomVal]
  console.log(
		'randomVal: ',
		randomVal,
		', randomSquare: ',
		randomSquare,
		', hitPosition: ',
		hitPosition
	);
  randomSquare.classList.add('mole')

  hitPosition = randomSquare.id

}

squares.forEach(square => {
  square.addEventListener('mouseup', () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result
      console.log('result: ', result);
    }
  })
})

function moveMole() {
	timerId = setInterval(randomSquare, 1500);
}
moveMole();
// randomSquare();

function countDown() {
 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

let countDownTimerId = setInterval(countDown, 1000)

