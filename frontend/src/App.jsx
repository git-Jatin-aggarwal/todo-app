import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/todos")
    .then(async(res)=>{
     const todo =  await res.json()

     setTodos(todo.todos)
    })
  },[])

  return (
    <div>

      <CreateTodo/>
      <Todos todos={[
        {
          title: "gym",
          description: "go to gym",
          completed: true

        }
      ]}/>
    </div>
  )
}

export default App
