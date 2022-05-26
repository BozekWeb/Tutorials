const ball = document.querySelector('.ball-img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const answers = ['Nie', 'Tak', 'Tego nie wiem', 'Czy napewno chcesz to wiedzieć?', 'To zależy..']

const shakeBall = () => {
	ball.classList.add('shake-animaton')
}

const checkInput = () => {
	ball.classList.remove('shake-animaton')

	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAnswer()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		answer.textContent = ''
		error.textContent = "Umieść '?' na końcu pytania"
	} else {
		answer.textContent = ''
		error.textContent = 'Wpisz pytanie!'
	}
}

const generateAnswer = () => {
	const number = Math.floor(Math.random() * answers.length)
	answer.innerHTML = `<span>Odpowiedź:</span> ${answers[number]}`
}

const showAnswer = () => {}

ball.addEventListener('click', shakeBall)
ball.addEventListener('animationend', checkInput)
