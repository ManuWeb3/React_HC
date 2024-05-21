import { useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/index.js'

// Assign values ot all context-variables+context-methods of TodoContext.js
function App() {
  // todos below is all todos-array
  const [todos, setTodos] = useState([]) // default empty todos, only user can enter manually
  // individual todo, from Todo-List-Item
  const addTodo = (todo) => {
    // add single/next/new todo (pref. @ the top = latest) to todos array = state
    // setTodos((prevTodos) => prevTodos.push(todo)) // try with push - appends @ end but @ start - try
    // setTodos((prevTodos) => [todo, ...prevTodos, ]) - USE by destructuring new "todo" object
    // ... = spread, I believe, and contains "todoMsg + completed" - remiaining 2 "keys"
    setTodos((prevTodos) => {
      console.log({ ...todo })
      return [{ id: Date.now(), ...todo }, ...prevTodos]
      // ULTIMATELY, array = spread, object first destructure, then obj = spread
    }) // Date.now() = 1716233999535 in browser+node both
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodosArr) =>
      prevTodosArr.map(
        (arrTodoEle) => (arrTodoEle.id === id ? todo : arrTodoEle)
        // MUST full/complete element (=todo object) return (not just 1 of its "keys")
      )
    )
  }

  // filter(id !== id) => cheap operation = better
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((pTodo) => pTodo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map(
        (arrTodoEle) =>
          arrTodoEle.id === id
            ? { ...arrTodoEle, completed: !arrTodoEle.completed }
            : arrTodoEle
        // callback inside .map() MUST return a complete object to .map() so that .map() returns [objects{}]
        // Hence, (Ternary (?) !arrTodoEle.completed : arrTodoEle.completed) returns a single property = WRONG
      )
    )
  }

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="border-yellow-400 border-2 w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="border-green-400 border-2 mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="border-white border-2 flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App

/* filter(id === id) => expensive operation
  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      prevTodos.splice(
        prevTodos.indexOf(prevTodos.filter((todo) => todo.id === id)[0]),
        1
      )
      return prevTodos
      // spliced prevTodos[] = remaining array after splice() = state[] updated inside setState()
    })
  }
  */
/* 
  // === Shorthand version, below ===
const deleteTodo = (id) => {
  console.log(
    arr2.splice(arr2.indexOf(arr2.filter((element) => element.id === id)[0]), 1)
  )
}
 
// === detailed body definition ===
 const deleteTodo = (id) => {
  let filterEleArr = arr2.filter((element) => element.id === id)
  let delIndex = arr2.indexOf(filterEleArr[0])
  console.log(delIndex)
  console.log(arr2.splice(delIndex, 1))
}

// function call and test arr2
deleteTodo(4)
console.log(arr2)
*/
