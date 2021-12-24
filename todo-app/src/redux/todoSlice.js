import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todos',
  initialState: [
    { id: 1, isCompleted: false, content: 'todo 1' },
    { id: 2, isCompleted: true, content: 'todo 2' },
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
    toggleComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id)
      state[index].isCompleted = action.payload.isCompleted
    },
  },
})

export const { addTodo, toggleComplete } = todoSlice.actions

export default todoSlice.reducer
