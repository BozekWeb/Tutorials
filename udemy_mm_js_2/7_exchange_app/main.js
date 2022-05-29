const currencyOne = document.querySelector('#currency-one')
const amountOne = document.querySelector('.amount-one')
const currencyTwo = document.querySelector('#currency-two')
const amountTwo = document.querySelector('.amount-two')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const fetchURL = 'https://v6.exchangerate-api.com/v6/d2023d098a6e7a032e74fd6b/latest/USD'

const calculate = () => {
	fetch(`https://v6.exchangerate-api.com/v6/d2023d098a6e7a032e74fd6b/latest/${currencyOne.value}`)
		.then(res => res.json())
		.then(data => {
			const currency1 = currencyOne.value
			const currency2 = currencyTwo.value
			const rate = data.conversion_rates[currency2]

			rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`

			amountTwo.value = (amountOne.value * rate).toFixed(2)
		})
}

const swap = () => {
	const oldValue = currencyOne.value
	currencyOne.value = currencyTwo.value
	currencyTwo.value = oldValue
	calculate()
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('input', calculate)
swapBtn.addEventListener('click', swap)

calculate()

// {result: 'success', documentation: 'https://www.exchangerate-api.com/docs', terms_of_use: 'https://www.exchangerate-api.com/terms', time_last_update_unix: 1653782401, time_last_update_utc: 'Sun, 29 May 2022 00:00:01 +0000', …}
// base_code: "USD"
// conversion_rates: {USD: 1, AED: 3.6725, AFN: 88.6211, ALL: 112.6093, AMD: 449.5142, …}
// documentation: "https://www.exchangerate-api.com/docs"
// result: "success"
// terms_of_use: "https://www.exchangerate-api.com/terms"
// time_last_update_unix: 1653782401
// time_last_update_utc: "Sun, 29 May 2022 00:00:01 +0000"
// time_next_update_unix: 1653868801
// time_next_update_utc: "Mon, 30 May 2022 00:00:01 +0000"
// [[Prototype]]: Object
