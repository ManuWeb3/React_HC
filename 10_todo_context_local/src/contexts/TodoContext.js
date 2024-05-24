// Syntax # 2 = 09_theme_switcher, NOT 08_mini_context
import { useContext, createContext } from 'react'

export const TodoContext = createContext({
  // in reality, it will be empty at the start
  // all comps. will get values of todos: from here only
  todos: [
    {
      id: 1,
      todo: 'Todo Msg', // NOT the same "todo" that's param to the context-methods below, scope {} limited here only
      completed: false,
    },
  ],
  // methods: will be defined in App.jsx
  // param=todo = single (and complete) Todo-array's list-item, NOT the same as "todo" key above
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}, // why not "completed" as param -later clear
})
// Wrapper = Provider
export const TodoContextProvider = TodoContext.Provider
// ES6+ format, not CJS
// Gives access to variables/methods inside TodoContext to all other components without prop-drill
export const useTodo = () => {
  // console.log('Inside useTodo() hook')
  return useContext(TodoContext)
}
