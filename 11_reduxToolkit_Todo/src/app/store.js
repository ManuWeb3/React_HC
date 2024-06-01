//step # 1
import { configureStore } from '@reduxjs/toolkit'
//step # 2
// "todoReducer" = automatically contains default-export "todoSlice.reducer"
import todoReducer from '../features/todo/todoSlice'
//step # 3: REGISTER reducers() with STORE
export const store = configureStore({
  reducer: todoReducer, // todoSlice.reducer = 3 reducers() got REGISTERED with this STORE
})
