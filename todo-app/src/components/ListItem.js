import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './ListItem.css'
import {
  deleteTodoAsync,
  toggleCompleteAsync,
  updateTodoAsync,
} from '../redux/todoSlice'

const ListItem = ({ id, title, completed }) => {
  const [isEditing, setIsEditting] = useState(false)
  const [editTask, setEditTask] = useState(title)
  const dispatch = useDispatch()

  const handleCompleteClick = () => {
    dispatch(toggleCompleteAsync({ id: id, isCompleted: !completed }))
  }

  const handleUpdateClick = () => {
    dispatch(updateTodoAsync({ id: id, content: editTask }))
  }

  const handleDeleteClick = () => {
    dispatch(deleteTodoAsync({ id: id }))
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    handleUpdateClick()
    setIsEditting(false)
  }

  return (
    <li
      key={id}
      className={`list-group-item ${completed && 'list-group-item-success'}`}
      style={{
        padding: '10px',
        marginBottom: '10px',
        border: 'none',
        color: '#8D4040',
        fontSize: '22px',
      }}
    >
      <div className="d-flex justify-content-between">
        {isEditing ? (
          <div key="editing">
            <form className="todo-edit-form" onSubmit={handleUpdate}>
              <input
                type="text"
                name="task"
                value={editTask}
                onChange={(e) => setEditTask(e.target.value)}
              />
            </form>
          </div>
        ) : (
          <span className=" d-flex align-items-center">
            <input
              type="checkbox"
              style={{ marginRight: '20px' }}
              checked={completed}
              onChange={handleCompleteClick}
            />
            <span onClick={() => setIsEditting(true)}>{title}</span>
          </span>
        )}
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default ListItem
