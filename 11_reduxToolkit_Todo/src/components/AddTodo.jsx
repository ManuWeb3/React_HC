import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {
  // only localized state needed, not context one, for this component -> useState()
  const [input, setInput] = useState('')
  const dispatch = useDispatch() // dispatch is a method
  // AddTodo.jsx makes use of E.H. addTodohandler() which in turn makes use of disptach() which eventually makes use of/calls addTodo() reducer
  const addTodoHandler = (e) => {
    e.preventDefault() // avoid the form from sending data to the backend @ submission
    dispatch(addTodo(input)) // "state" and "action" params of addTodo() gets its values from this "inpt" arg.
    // finalized (btn-clicked) "input" input by user = up-to-date 'state' after onChange() below
    setInput('') // clean the input field after btn is clicked, finally
  }

  return (
    <>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      </form>
    </>
  )
}

export default AddTodo
