// step # 1
import { createSlice, nanoid } from '@reduxjs/toolkit' // nanoid = we won't use Date.now() for todo's "id" this time
// step # 2: what's going to be the initial value (= state) in slice
const initialState = {
  todos: [{ id: 1, text: 'Hello World' }], // array of individual todo-objects
} // can be any type (array, etc.)
// step # 3: create a Slice-object + reducer within
export const todoSlice = createSlice({
  name: 'todo', // name is reserved inside @redux/toolkit
  initialState,
  reducers: {}, // a property-key of slice
})
