import React, { useState } from 'react'

const AddTodoForm = () => {
  const [value, setValue] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <label className="sr-only">Name:</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mb-2">
        Add
      </button>
    </form>
  )
}

export default AddTodoForm
