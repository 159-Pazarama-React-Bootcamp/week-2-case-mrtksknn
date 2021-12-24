import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useSelector, useDispatch } from 'react-redux'
import { getTodosAsync } from '../redux/todoSlice'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos) // getting data from redux getTodosAsync

  useEffect(() => {
    dispatch(getTodosAsync())
  }, [dispatch]) // watch the dispatch action for rendering

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        // display all items
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
