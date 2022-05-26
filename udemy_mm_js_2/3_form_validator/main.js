const username = document.querySelector('#username')
const password1 = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const allInput = document.querySelectorAll('input')

const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')

const popup = document.querySelector('.popup')
const closeBtn = document.querySelector('.close')

const showError = (input, msg) => {
	const formBox = input.parentElement
	const errorMsg = formBox.querySelector('.error-text')

	formBox.classList.add('error')
	errorMsg.textContent = msg
}

const clearError = input => {
	input.parentElement.classList.remove('error')
}

const checkForm = input => {
	input.forEach(el => {
		if (el.value === '') {
			showError(el, el.placeholder)
		} else {
			clearError(el)
		}
	})
}

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.replace(':', '')} posiada za mało znaków, minimum to: ${min}`
		)
	}
}

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, `Podane hasła nie są identyczne`)
	}
}

const checkMail = email => {
	const val =
		/^(([^<>()\[\]\\.,;:s@"]+(\.[^<>()\[\]\\.,;:s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (val.test(email.value)) {
		clearError(email)
	} else {
		showError(email, 'E-mail jest niepoprawny')
	}
}

const sendForm = () => {
	const err = 0

	allInput.forEach(el => {
		if (el.previousElementSibling.classList.contains('error')) err++
	})

	if (err === 0) {
		popup.classList.add('show-popup')
	}
}

sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm(allInput)
	checkLength(username, 8)
	checkLength(password1, 10)
	checkPassword(password1, password2)
	checkMail(email)

	sendForm()
})

clearBtn.addEventListener('click', e => {
	e.preventDefault()
	allInput.forEach(el => {
		el.value = ''
		clearError(el)
	})
})

closeBtn.addEventListener('click', e => {
	e.preventDefault()

	popup.classList.remove('show-popup')

	allInput.forEach(el => {
		el.value = ''
		clearError(el)
	})
})
