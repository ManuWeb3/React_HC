import { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
  console.log('Inside TodoForm.jsx')
  // "todoText" key of 1 single todo1Object is entered by the user (whereas "todos" = [] of complete todo-objects with all 3 keys)
  const [todoInput, setTodoInput] = useState('test') // try sometime with an empty object as todo = {}
  // use addTodo() here to add it
  const { addTodo } = useTodo()
  // button click - definition - add-Handler fn.()
  const add = (e) => {
    e.preventDefault() //DON'T send the todo to the server/backend
    console.log(`Inside EH: add(e), value of "todo" state is ${todoInput}`)
    if (!todoInput) return // if user entered an empty "todoInput->todoText key"
    // addTodo(todo)    // won't work - syntax in App.jsx
    // single "todo" (state above) is the key "todo" (saves the text user eneterd)
    // "id" already entered in App.jsx - addTodo's body
    // addTodo({ todo: todo, completed: false }) // DESTRUCTURED form - values enter
    addTodo({ todoText: todoInput, completed: false }) // "todo: todo = todo" as per ES6
    // addTodo({ id: Date.now(), todoText: todoInput, completed: false }) // ALSO WORKS - simpler and intuitive syntax
    setTodoInput('') // clear the text input on hte UI after Add gets clicked, to make the field ready for the next inpu
    // state change => re-render
    console.log("Done with TodoForm's add(e)")
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoInput}
        onChange={(e) => {
          console.log('Inside onChange()')
          console.log(`${e.target.value}`)
          return setTodoInput(e.target.value)
        }}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  )
}

export default TodoForm
