import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, isCompleted: false, content: 'todo 1' },
    { id: 2, isCompleted: false, content: 'todo 2' },
  ],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        isCompleted: false,
        content: action.payload.content,
      }
      state.push(newTodo)
    },
  },
})

export const { addTodo } = todoSlice.actions

export default todoSlice.reducer
