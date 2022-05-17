const sizeUpBtn = document.querySelector('.sizeUp')
const sizeDownBtn = document.querySelector('.sizeDown')
const colorBtn = document.querySelector('.color')
const text = document.querySelector('p')

fontSize = 36

const sizeUp = () => {
	fontSize += 4
	text.style.fontSize = fontSize + 'px'
}

const sizeDown = () => {
	if (fontSize <= 16) return

	fontSize -= 4
	text.style.fontSize = fontSize + 'px'
}

const randomColor = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	text.style.color = `rgb(${r}, ${g}, ${b})`
}

sizeUpBtn.addEventListener('click', sizeUp)
sizeDownBtn.addEventListener('click', sizeDown)
colorBtn.addEventListener('click', randomColor)
