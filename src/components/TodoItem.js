/* import React from 'react';

const TodoItem = ({ id, title, completed }) => {
	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed}></input>
					{title}
				</span>
				<button className='btn btn-danger'>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;
*/

import React from 'react'
import { toggleComplete, deleteTodo } from '../redux/todoSlice'
import { useDispatch } from 'react-redux'
import { toggleCompleteAsync } from '../redux/todoSlice'
import { deleteTodoAsync } from '../redux/todoSlice'

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch()

	const clickHandler = () => {
		dispatch(toggleCompleteAsync({
			id: id, completed: !completed
		}))

	}
	const clickDeleteHandler = () => {
		dispatch(deleteTodoAsync({
			id, completed
		}))
	}
	return (
		<>
			<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
				<div className="d-flex justify-content-between">
					<span className="d-flex align-items-center">
						<input type="checkbox" checked={completed} className="mr-3" onClick={clickHandler} />
						{title}
					</span>
					<button className="btn btn-danger" onClick={clickDeleteHandler}>Delete</button>
				</div>
			</li>
		</>
	)


}
export default TodoItem
