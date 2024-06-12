// Major task here: @ app-mount -> if user logged in (will use AuthService) (also, check store for state of user-login), show posts else "login" msg showed
import React, { useState, useEffect } from 'react'
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/index'
import { login, logout } from './store/authSlice'

function App() {
  const [loading, setLoading] = useState(true) // For Conditional Rendering ALWAYS
  const dispatch = useDispatch()

  // refer FLOW in notes
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData)) // state up-to-date @ login
        } else {
          dispatch(logout()) // state up-to-date @ logout
        }
      })
      .finally(() => {
        setLoading(false)
      }) // add .catch() to take care of 'onRejected?' param of catch(), though not necessarily needed
  }, [])

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          TODO <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
