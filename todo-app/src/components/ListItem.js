import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleComplete, deleteTodo } from '../redux/todoSlice'

const ListItem = ({ id, title, completed }) => {
  const dispatch = useDispatch()

  const handleCompleteClick = () => {
    dispatch(toggleComplete({ id: id, isCompleted: !completed }))
  }

  const handleDeleteClick = () => {
    dispatch(deleteTodo({ id: id }))
  }

  return (
    <li
      key={id}
      className={`list-group-item ${completed && 'list-group-item-success'}`}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={completed}
            onChange={handleCompleteClick}
          />
          {title}
        </span>
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default ListItem
