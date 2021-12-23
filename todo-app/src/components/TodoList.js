import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  const todos = [
    {
      id: '0',
      isCompleted: false,
      content: 'Todo 1',
    },
    {
      id: '1',
      isCompleted: false,
      content: 'Todo 2',
    },
  ]

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          content={todo.content}
          isCompleted={todo.isCompleted}
        />
      ))}
    </ul>
  )
}

export default TodoList
