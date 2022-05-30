const button = document.querySelector('.btn')

const btnAnimation = e => {
	//pozycja klikana
	const top = e.clientY
	const left = e.clientX

	//pozycja przycisku
	const btnTopPosition = e.target.offsetTop
	const btnLeftPosition = e.target.offsetLeft

	const circle = document.createElement('span')
	circle.classList.add('circle')
	circle.style.top = top - btnTopPosition + 'px'
	circle.style.left = left - btnLeftPosition + 'px'

	e.target.appendChild(circle)

	setTimeout(() => {
		circle.remove()
	}, 500)
}

button.addEventListener('click', btnAnimation)
