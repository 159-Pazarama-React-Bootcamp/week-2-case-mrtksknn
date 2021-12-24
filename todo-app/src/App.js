import React from 'react'
import AddTodoForm from './components/AddNewItem'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>Mert's Todo List</h1>
      <AddTodoForm />
      <TodoList />
    </div>
  )
}

export default App
