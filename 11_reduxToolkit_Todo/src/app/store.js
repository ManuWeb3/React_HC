//step # 1
import { configureStore } from '@reduxjs/toolkit'
//step # 2
// "todoReducer" = automatically contains default-export "todoSlice.reducer"
// can be more slices here like Login, Product, Auth, User
import todoReducer from '../features/todo/todoSlice'
//step # 3: REGISTER reducers() with this global/gereric/universal STORE
// ultimately, needs to be imported to main.jsx, that's why exported below
export const store = configureStore({
  reducer: todoReducer, // todoSlice.reducer = 3 reducers() got REGISTERED with this STORE
  // 'reducer' can be an object with multiple k-v pairs (like Mega Blog project)
})
