import React from 'react'

const TodoItem = ({ todoId, todosData }) => {
  console.log(todosData)
  return (
    <>
      <li key={todoId}>{todosData[todoId].content}</li>
    </>
  )
}

export default TodoItem
