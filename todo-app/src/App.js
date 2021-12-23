import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem/TodoItem'

const App = () => {
  const [todosData, setTodosData] = useState()

  // sendign request to mockapi with axios
  useEffect(() => {
    const getData = async () => {
      await axios
        .get('https://61c42343f1af4a0017d99378.mockapi.io/todos')
        .then((res) => {
          setTimeout(() => {
            // setting delay to getting data
            const { data } = res
            const newTdoosData = {}
            data.forEach((todos, index) => {
              newTdoosData[index + 1] = {
                id: index + 1,
                isCompleted: todos.isCompleted,
                content: todos.content,
              }
            })
            setTodosData(newTdoosData)
          }, 3000)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getData()
  }, [])

  // main function
  return (
    <>
      <div>
        {todosData ? (
          <div>
            {Object.keys(todosData).map((todoId) => (
              <TodoItem key={todoId} todoId={todoId} todosData={todosData} />
            ))}
          </div>
        ) : (
          // Bonus 1 showing user a spinner when getting todo datas
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
    </>
  )
}

export default App
