const Modal = props => {
	const cancelHandler = () => {
		console.log('cancelBtn')
		props.onCancel()
	}

	const confirmHandler = () => {
		console.log('confirmBtn')
		props.onCancel()
	}

	return (
		<div className='modal'>
			<p>Are you sure?</p>
			<button className='btn btn--alt' onClick={cancelHandler}>
				Cancel
			</button>
			<button className='btn' onClick={confirmHandler}>
				Confirm
			</button>
		</div>
	)
}

export default Modal
