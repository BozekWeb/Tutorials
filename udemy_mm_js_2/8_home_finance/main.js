const incomeArea = document.querySelector('.income-area')
const expensesArea = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
const addTransactionPanel = document.querySelector('.add-transaction-panel')

const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const categorySelect = document.querySelector('#category')

const addTransactionBtn = document.querySelector('.add-transaction')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtn = document.querySelector('.delete')
const deleteAllBtn = document.querySelector('.delete-all')

const lightBtn = document.querySelector('.light')
const darkBtn = document.querySelector('.dark')


let root = document.documentElement
let ID = 0
let categoryIcon
let selectedCategory
let moneyArr = [0]

const managePanel = () => {
	if (addTransactionPanel.style.display === 'flex') {
		addTransactionPanel.style.display = 'none'
		nameInput.value = ''
		amountInput.value = ''
		categorySelect.selectedIndex = 0
	} else {
		addTransactionPanel.style.display = 'flex'
	}
}

const checkForm = () => {
	if (nameInput.value !== '' && amountInput.value !== '' && categorySelect.value !== 'none') {
		createNewTransaction()
		managePanel()
	} else {
		alert('Wypełnij wszystkie pola!')
	}
}

const createNewTransaction = () => {
	const newTransaction = document.createElement('div')
	newTransaction.classList.add('transaction')
	newTransaction.setAttribute('id', ID)

	selectCategory()
	checkCategory(selectedCategory)

	newTransaction.innerHTML = `
		<p class="transaction-name">${categoryIcon} ${nameInput.value}</p>
		<p class="transaction-amount">${amountInput.value} zł <button class="delete" onclick='deleteTransaction(${ID})'><i class="fas fa-times"></i></button>
		</p>
	`

	if (selectedCategory.includes('+')) {
		newTransaction.classList.add('income')
		incomeArea.appendChild(newTransaction)
		moneyArr.push(parseFloat(amountInput.value))
	} else {
		newTransaction.classList.add('expense')
		expensesArea.appendChild(newTransaction)
		moneyArr.push(parseFloat(-amountInput.value))
	}

	updateWallet(moneyArr)
	ID++
}

const deleteTransaction = id => {
	const transactionToDelete = document.getElementById(id)
	const transactionAmount = parseFloat(transactionToDelete.childNodes[3].innerText)
	const indexOfTransaction = moneyArr.indexOf(transactionAmount)
	moneyArr.splice(indexOfTransaction, 1)

	transactionToDelete.classList.contains('income')
		? incomeArea.removeChild(transactionToDelete)
		: expensesArea.removeChild(transactionToDelete)

	updateWallet(moneyArr)
}

const selectCategory = () => {
	selectedCategory = categorySelect.options[categorySelect.selectedIndex].text
}

const deleteAllTransaction = () => {
	incomeArea.innerHTML = '<h3>Przychód:</h3>'
	expensesArea.innerHTML = '<h3>Wydatki:</h3>'
	availableMoney.textContent = '0zł'
	moneyArr = [0]
}

const checkCategory = transaction => {
	switch (transaction) {
		case '[ + ] Przychód':
			categoryIcon = '<i class="fas fa-money-bill-wave"></i>'
			break

		case '[ - ] Zakupy':
			categoryIcon = '<i class="fas fa-cart-arrow-down"></i>'
			break

		case '[ - ] Jedzenie':
			categoryIcon = '<i class="fas fa-hamburger"></i>'
			break

		case '[ - ] Kino':
			categoryIcon = '<i class="fas fa-film"></i>'
			break
	}
}

const updateWallet = money => {
	const newMoney = money.reduce((a, b) => a + b)
	availableMoney.textContent = `${newMoney}zł`
}

const changeStyleToLight = () => {
	root.style.setProperty('--first-color', '#F9F9F9')
	root.style.setProperty('--second-color', '#14161F')
	root.style.setProperty(' --border-color', 'rgba(0, 0, 0, .2)')
}

const changeStyleToDark = () => {
	root.style.setProperty('--first-color', '#14161F')
	root.style.setProperty('--second-color', '#F9F9F9')
	root.style.setProperty(' --border-color', 'rgba(255, 255, 255, .4)')
}

addTransactionBtn.addEventListener('click', managePanel)
cancelBtn.addEventListener('click', managePanel)
saveBtn.addEventListener('click', checkForm)
deleteAllBtn.addEventListener('click', deleteAllTransaction)
lightBtn.addEventListener('click', changeStyleToLight)
darkBtn.addEventListener('click', changeStyleToDark)
