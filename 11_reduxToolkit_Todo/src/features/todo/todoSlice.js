// step # 1
import { createSlice, nanoid } from '@reduxjs/toolkit' // nanoid = we won't use Date.now() for todo's "id" this time
// step # 2: what's going to be the initial value (= state) in slice
// initialState = as good as useState('') initialization
const initialState = {
  todos: [{ id: 1, text: 'Hello World' }], // array of individual todo-objects
} // can be any type (array, etc.)
// step # 3: create a Slice-object (+ reducers within) -> 3-PART export todoSlice/reducer
// Part 1 EXPORT
// takes 3 keys
export const todoSlice = createSlice({
  name: 'todo', // name is reserved inside @redux/toolkit
  initialState,
  reducers: {
    // CONTRARY to ContextAPI = NOT only fn. declaration, but define their bodies

    // 1. ADD (@ end = push())
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // = action.payload, Not 'Hello World'
      }
      // intellisense knows about "todos" in state below from initialState's "todos" above
      // How initialState got related to state.todos below
      // it happens to be the 2nd key in todoSlice object
      state.todos.push(todo)
    }, // can supply a fn. ref. (not call) here which will be defiend above globally

    // 2. DELETE/REMOVE
    removeTodo: (state, action) => {
      // dispatch(removeTodo(todo.id)) in Todos.jsx
      state.todos = state.todos.filter((todo) => todo.id != action.payload) // check return value without using 'return'
      // override todos[] with the filtered array[]
    },

    // 3. EDIT
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text } // DESTRUCTURED, muts return full todo{}
          : todo
      )
    },

    // 4. TOGGLE (completed NOT yet added to {})
    toggleCompleted: (state, action) => {
      state.todos.map((todo) =>
        todo.id == action.payload.id
          ? { ...todo, completed: !action.payload.completed } // DESTRUCTURED, muts return full todo{}
          : todo
      )
    },
  }, // a property-key of "slice" that actually contains methods as values
})

// Part 2 EXPORT/reducers: INDIVIDUAL export FOR COMPONENTS (JSX)
// todoSlice = createD-Slice. .actions = reserved
// exported without any custom-defined hook (like useTodo()) unlike ContextAPI
// like we are making use of addTodo() in AddTodo.jsx & others in GetTodos.jsx (assignment)
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

// Part 3 EXPORT/reducer: COLLECTIVE export FOR STORE (store.js)
export default todoSlice.reducer
// register "reducer" (that's why .reducer) for STORE
