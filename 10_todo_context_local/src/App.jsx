import { useState, useEffect } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/index.js'
import { TodoForm, TodoItem } from './components'

// Assign values ot all context-variables+context-methods of TodoContext.js
function App() {
  console.log('Inside App.jsx')
  // todos below is all todos-array
  const [todos, setTodos] = useState([]) // default empty todos, only user can enter manually
  // individual todo below argument = 1 complete todo object (2 keys contained), from Todo-List-Item
  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      console.log(
        `App.jsx: Inside Context's addTodo(), value of { ...todo } arg. = ${{
          ...todo,
        }}`
      )
      return [{ id: Date.now(), ...todo }, ...prevTodos]
      // return [todo, ...prevTodos] // ALSO WORKS - simpler and intuitive syntax
      // ULTIMATELY, array = spread, object first destructure, then obj = spread
    }) // Date.now() = 1716233999535 in browser+node both
  }

  // will be called in TodoItem.jsx inside editTodo() of TodoItem.jsx
  const updateTodo = (id, todo) => {
    console.log('Inside updateTodo()')
    setTodos((prevTodosArr) =>
      prevTodosArr.map(
        (arrTodoEle) => (arrTodoEle.id === id ? todo : arrTodoEle)
        // MUST full/complete element (=todo object) return (not just 1 of its "keys" i.e. todo - message/title)
        // implicit array returned with new/edited "todo" -> state gets sets -> re-render UI
      )
    )
    return console.log('Done with Context-updateTodo()')
  }

  // filter(id !== id) => cheap operation = better
  const deleteTodo = (id) => {
    console.log('Inside deleteTodo()')
    setTodos((prevTodos) => prevTodos.filter((pTodo) => pTodo.id !== id))
  }

  // complete functionality here itself - just call in TodoItem.jsx
  const toggleComplete = (id) => {
    console.log('Inside toggleComplete()')
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

  // load any "todos" at initial render = useEffect()
  useEffect(() => {
    console.log('Inside useEffect: getItem()')
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      // they are NOT stored as array UTH, just that we initialized them and are storing them as array in our app
      setTodos(todos) // effect UI change - render @ intital render
    }
  }, []) // empty dep.[] will run only @ Initial Render and NOT @ later re-renders

  // whenever "todos" array change in my app, it'll definitely re-render UI with updated todos
  // BUT, I'd ALSO want it to get updated elsewhere as well = localStorage
  // bcz todos are stored in array BUT also in localStorage = keep in sync
  useEffect(() => {
    console.log('Inside useEffect: setItem()')
    localStorage.setItem('todos', JSON.stringify(todos)) // converts JS array -> "JSON string"
  }, [todos])

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
            <TodoForm />
          </div>
          <div className="border-white border-2 flex flex-wrap gap-y-3">
            {/*Loop "todos" (from context) and Add TodoItem here */}
            {/* todo argument below is 1 complete element of todos [array] */}
            {todos.map((todo1Object) => (
              <div key={todo1Object.id} className="w-full">
                <TodoItem todoProp={todo1Object} />
                {/* {todo} above is the complete single object with 3 keys */}
              </div>
            ))}
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

// addTodo() - explanatory comments
/*
add single/next/new todo (pref. @ the top = latest) to todos array = state
setTodos((prevTodos) => prevTodos.push(todo)) // try with push - appends @ end but @ start - try
setTodos((prevTodos) => [todo, ...prevTodos, ]) - USE by destructuring new "todo" object
... = spread, I believe, and contains "todoMsg + completed" - remiaining 2 "keys" out of which only 1 entered by user
ID and default completed: false IS NOT enetred by user
id - Date.now() already below + completed: false passed by us in TodoFomr.jsx while adding "todo"
"todo" local var. does NOT have an "id" key, hence no case of id: Date.now() getting overridden by ...todo's (non-existant) id
*/
