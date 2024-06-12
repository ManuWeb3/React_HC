import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice.js'

const store = configureStore({ reducer: { auth: authReducer } }) // 'reducer' can be an object to accomodate multiple k-v pairs for multiple slices: auth, posts, etc.
// assignemnt: add postSlice -> reducer: { auth: authReducer, post: postReducer} -> access state thru state.post.whatever

// 'auth' key is NOT reserved
export default store
