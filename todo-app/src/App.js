import React, { useState } from 'react'
import AddTodoForm from './components/AddNewItem'
import TodoList from './components/TodoList'

const App = () => {
  const [user, setUser] = useState(localStorage.getItem('user'))
  const [input, setInput] = useState('')

  const handleChange = (event) => {
    const input = event.target.value
    setInput(input)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('user', input)
    setUser(input)
  }

  return (
    <div
      className="container bg-white p-4 mt-5"
      style={{ maxWidth: '500px', borderRadius: '24px' }}
    >
      <h1 className="d-flex align-items-center justify-content-flex-start">
        {user ? (
          ''
        ) : (
          <form
            onSubmit={handleFormSubmit}
            className="form-inline mt-3 mb-3 d-flex"
          >
            <label>
              <input
                name="user"
                style={{ width: '130px' }}
                className="form-control mr-sm-2"
                placeholder="Who are you?"
                onChange={handleChange}
              />
            </label>
          </form>
        )}
        {user}'s Todo List
      </h1>
      <AddTodoForm />
      <TodoList />
    </div>
  )
}

export default App
