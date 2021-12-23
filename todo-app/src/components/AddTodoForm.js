import React, { useState } from 'react'

const AddTodoForm = () => {
  const [value, setValue] = useState('')

  return (
    <form>
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
