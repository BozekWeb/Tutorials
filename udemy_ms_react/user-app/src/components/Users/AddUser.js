import React, { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import styles from './AddUser.module.css'

const AddUser = props => {
	const [enteredUsename, setEnteredUsername] = useState('')
	const [enteredAge, setEnteredAge] = useState('')
	const [error, setError] = useState('')

	const addUserHandler = event => {
		event.preventDefault()

		if (enteredUsename.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non-empty values).',
			})
			return
		} else if (+enteredAge < 1) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid age (> 0).',
			})
			return
		}

		props.onAddUser(enteredUsename, enteredAge)
		setEnteredUsername('')
		setEnteredAge('')
	}

	const usernameChangeHandler = event => {
		setEnteredUsername(event.target.value)
	}

	const ageChangeHandler = event => {
		setEnteredAge(event.target.value)
	}

	const errorHandler = () => {
		setError(null)
	}

	return (
		<div>
			{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor='username'>Username</label>
					<input id='username' value={enteredUsename} type='text' onChange={usernameChangeHandler}></input>
					<label htmlFor='age'>Age (years)</label>
					<input id='age' value={enteredAge} type='number' onChange={ageChangeHandler}></input>
					<Button type='submit'>Add User</Button>
				</form>
			</Card>
		</div>
	)
}

export default AddUser
