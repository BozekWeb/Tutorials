const settingsPanel = document.querySelector('.settings')
const eventName = document.querySelector('#event-name')
const eventDay = document.querySelector('#event-day')
const eventMonth = document.querySelector('#event-month')
const eventYear = document.querySelector('#event-year')
const eventImage = document.querySelector('#event-image')

const saveBtn = document.querySelector('.save')
const settingsBtn = document.querySelector('.settings-btn')

const eventText = document.querySelector('.event')
const imageSection = document.querySelector('.image-section')
const days = document.querySelector('.days-count')
const hours = document.querySelector('.hours-count')
const minutes = document.querySelector('.minutes-count')
const seconds = document.querySelector('.seconds-count')

let userTime

const setTime = () => {
	const currentTime = new Date()
	const result = userTime - currentTime
	const day = Math.floor(result / 1000 / 60 / 60 / 24)
	const hour = Math.floor(result / 1000 / 60 / 60) % 60
	const minute = Math.floor(result / 1000 / 60) % 60
	const second = Math.floor(result / 1000) % 60

	days.textContent = day
	hours.textContent = hour
	minutes.textContent = minute
	seconds.textContent = second
}

const appUpdate = () => {
	eventText.textContent = eventName.value
	imageSection.style.backgroundImage = `url('${eventImage.value}')`
	userTime = new Date(`${eventMonth.value} ${eventDay.value} ${eventYear.value}`)
	settingsPanel.classList.toggle('active')

	setTime()
}

saveBtn.addEventListener('click', appUpdate)

settingsBtn.addEventListener('click', () => {
	settingsPanel.classList.toggle('active')
})

appUpdate()
setInterval(setTime, 1000)
