import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAsync } from '../redux/todoSlice'

const AddNewItem = () => {
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(
      addTodoAsync({
        content: value,
      })
    )
  }

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3 d-flex">
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button type="submit" className="btn btn-primary mb-2">
        Submit
      </button>
    </form>
  )
}

export default AddNewItem
