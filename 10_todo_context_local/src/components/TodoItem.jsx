import { useTodo } from '../contexts'
import { useState } from 'react'

// {todo} arg. below contains 1 full todo object with 3 keys passed into it from App.jsx
// that's why todo.todo is made possible to access the todoMsg
function TodoItem({ todoProp }) {
  // FIRST things first, bring 3 fns.() using Context bcz all 3 remaining fns. will be used here
  console.log('Inside TodoItem.jsx')
  const { updateTodo, deleteTodo, toggleComplete } = useTodo()

  // 1. EDIT

  const [isTodoEditable, setIsTodoEditable] = useState(false) // default = non-editable
  // when "edit" clicked -> edit the msg BUT firsat get that msg = todo key
  const [todoMsg, setTodoMsg] = useState(todoProp.todoText) // default = empty todoMsg
  // todo.todo = all 3 keys of original "todos" object are passed into destructured {todo} above as argument from App.jsx-loop
  const editTodo = () => {
    // updateTodo(todo.id, todo) // won't work because here todo is the one that's apassed as arg. = old one, NOT new
    // bcz new one has todoMsg = todo.todo
    // todo.id = same, can pass as an arg. as-is BUT update todo: todoMsg
    updateTodo(todoProp.id, { ...todoProp, todoText: todoMsg }) // updated here itself - POWER of Destructuring
    console.log('Done with editTodo()')
    setIsTodoEditable(false)
  }

  // 2. Toggle -
  // complete functionality in App.jsx itself - just call in TodoItem.jsx
  // call toggleCompleted() when checked
  const toggleCompleted = () => {
    toggleComplete(todoProp.id)
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todoProp.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]' // bg-changes = fn(.completed)
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todoProp.completed}
        onChange={toggleCompleted} // could have written fn.() inline here
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg 
        ${isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'} 
        ${todoProp.completed ? 'line-through' : ''}`} // strikethrough = fn(.completed)
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todoProp.completed) return // still an active ToDo = editable, else return
          console.log(isTodoEditable)
          if (isTodoEditable) {
            console.log('inside if')
            // additional check
            editTodo()
            // setIsTodoEditable((prev) => !prev)
          } else setIsTodoEditable((prev) => !prev) // else, make it true = editable, if not before
        }}
        disabled={todoProp.completed} // disabled (true) when it's completed else enabled = disabled is false if NOT completed
      >
        {isTodoEditable ? '📁' : '✏️'}
        {/* logo appears as a function of "can we edit the todo" -> button clicked -> state updating -> UI changes */}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todoProp.id)} // could have made a separate fn.() that calls deleteTodo() within
      >
        ❌
      </button>
    </div>
  )
}

export default TodoItem
