import { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
  // single "todo" - entered by the user in 1 go (whereas "todos" = [])
  const [todo, setTodo] = useState('') // try sometime with an empty object as todo = {}
  // use addTodo() here to add it
  const { addTodo } = useTodo()
  // button click - definition
  const add = (e) => {
    e.preventDefault() //nd the todo to the server/backend
    if (!todo) return // if user entered an empty "todo"
    // addTodo(todo)    // won't work - syntax in App.jsx
    // single "todo" (state above) entered as value to the key "todo"
    // "id" already entered in App.jsx - addTodo's body
    // addTodo({ todo: todo, completed: false }) // DESTRUCTURED form - values enter
    addTodo({ todo, completed: false }) // todo: todo = todo as per ES6
    setTodo('') // clear the text input on hte UI after Add gets clicked, to make the field ready for the next inpu
    // state change => re-render
  }

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
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
