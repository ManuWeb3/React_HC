// Syntax # 2 = 09_theme_switcher, NOT 08_mini_context
import { useContext, createContext } from 'react'

export const TodoContext = createContext({
  // in reality, it will be empty at the start
  todos: [
    {
      id: 1,
      todo: 'Todo Msg',
      completed: false,
    },
  ],
  // methods:
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},   // why not "completed" as param -later clear
})
// Wrapper = Provider
export const TodoContextProvider = TodoContext.Provider
// ES6+ format, not CJS
// Gives access to variables/methods inside TodoContext to all other components without prop-drill
export const useTodo = () => {
  console.log('Inside useTodod() hook')
  return useContext(TodoContext)
}
