/*import React, { useState } from 'react';

const AddTodoForm = () => {
	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('user entered: ' + value);
	};

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;


*/
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAsync } from '../redux/todoSlice'

const AddTodoForm = () => {

	const [value, setValue] = useState("")
	const dispatch = useDispatch()
	const submit = (e) => {
		e.preventDefault()
		console.log(value);
		dispatch(
			addTodoAsync({
				title: value,
			}))
	}
	return <>
		<form onSubmit={submit} className="form-inline mt-3 mb-3">
			<label htmlFor="name" className="sr-only">name</label>
			<input type="text"
				name="title"
				className="form-control mb-2 mr-sm-2"
				placeholder="Add Todo...."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button type="submit" className='btn btn-primary mb-2'>ADD</button>
		</form>
	</>
}
export default AddTodoForm

