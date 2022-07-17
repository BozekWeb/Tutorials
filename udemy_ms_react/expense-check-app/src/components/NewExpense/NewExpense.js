import React, { useState } from 'react' //not needed
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = props => {
	const [isEditing, setIsEditing] = useState(false)

	const onSaveExpenseDataHandler = enterExpenseData => {
		const expenseData = {
			...enterExpenseData,
			id: Math.random().toString,
		}
		props.onAddExpense(expenseData)
		setIsEditing(false)
	}

	const startEditingHandler = () => {
		setIsEditing(true)
	}

	const stopEditingHandler = () => {
		setIsEditing(false)
	}

	return (
		<div className='new-expense'>
			{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
			{isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={onSaveExpenseDataHandler} />}
		</div>
	)
}

export default NewExpense
