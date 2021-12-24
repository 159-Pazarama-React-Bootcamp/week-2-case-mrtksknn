import React from 'react'
import ListItem from './ListItem'
import { useSelector } from 'react-redux'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <ListItem
          key={todo.id}
          id={todo.id}
          title={todo.content}
          completed={todo.isCompleted}
        />
      ))}
    </ul>
  )
}

export default TodoList
