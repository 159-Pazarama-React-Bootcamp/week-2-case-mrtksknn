import React from 'react'

const TodoItem = ({ id, content, isCompleted }) => {
  const handleCheckboxClick = () => {}

  const handleDeleteClick = () => {}

  return (
    <li
      className={`list-group-item ${isCompleted && 'list-group-item-success'}`}
      key={id}
    >
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="mr-3"
            checked={isCompleted}
            onClick={handleCheckboxClick}
          />
          {content}
        </span>
        <button onClick={handleDeleteClick} className="btn btn-danger">
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
