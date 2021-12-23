import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [todosData, setTodosData] = useState({})

  useEffect(() => {
    const getData = async () => {
      await axios
        .get('https://61c42343f1af4a0017d99378.mockapi.io/todos')
        .then((res) => {
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
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getData()
  }, [])

  const getTodos = (todoId) => {
    const { content } = todosData[todoId]

    return (
      <div key={todoId}>
        <li>{content}</li>
      </div>
    )
  }

  return (
    <>
      <div>
        {todosData ? (
          <div>{Object.keys(todosData).map((todoId) => getTodos(todoId))}</div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  )
}

export default App
