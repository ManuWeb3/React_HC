import React from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    // most of the appwrite APIs return PROMISES => logout().then = API.deleteSessions() inside async fn() logout()
    authService.logout().then(() => {
      dispatch(logout())
    })
  }
  return (
    <button
      className="inline-block px-6 py-2 duration-200 rounded-full hover:bg-blue-100"
      onClick={logoutHandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn
