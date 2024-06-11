import { createSlice } from '@reduxjs/toolkit'

// tracks whether a user is authenticated or not
// everytime this will be asked thru STORE
const initialState = {
  status: false, // default NOT authenticated
  userData: null, // default
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true // authenticated @ login
      state.userData = action.payload
    },
    logout: (state, action) => {
        state.status = false    // NOT authenticated ANYMORE @ logout
        state.userData = null   // 'action' actally not needed, so can emit from params
    },
  }, // login and logout as it's an auth service
})

export const { login, logout } = authSlice.actions // for individual components

export default authSlice.reducer // for main.jsx
