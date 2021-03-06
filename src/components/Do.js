import React, { useState } from "react"
import uuid from "uuid/v4"

const initialTodos = [
  {
    id: uuid(),
    task: "Learn React",
    complete: true,
  },
  {
    id: uuid(),
    task: "Learn Firebase",
    complete: true,
  },
  {
    id: uuid(),
    task: "Learn GraphQL",
    complete: false,
  },
]

const Do = () => {
  const [todos, setTodos] = useState(initialTodos)
  const [task, setTask] = useState("")

  const handleChangeCheckbox = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: !todo.complete }
        } else {
          return todo
        }
      })
    )
  }

  const handleChangeInput = event => {
    setTask(event.target.value)
  }

  const handleSubmit = event => {
    if (task) {
      //  add new todo item
      console.log("the new task is: ", task)
      setTodos(todos.concat({ id: uuid(), task, complete: false }))
    }
    setTask("")
    event.preventDefault()
  }
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input
                style={{ marginRight: "10px" }}
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleChangeCheckbox(todo.id)}
              />
              {todo.task}
            </label>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleChangeInput} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
export default Do
