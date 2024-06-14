import React from 'react'
import React, { useState } from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // create(): custom fn.()
  const create = async (data) => {
    setError('')
    try {
      // returned: 'User' (complete JSON obj. in Docs)
      const userData = await authService.createAccount(data)
      if (userData) {
        // AGAIN returned: 'User' (complete JSON obj. in Docs)
        const userData = await authService.getCurrentUser()
        if (userData) {
          // After successful signup, DIRECTLY we authenticated user thru change in state.status thru authLogin(userData) below
          // hence, navigate to homepage DIRECTLY
          dispatch(authLogin(userData)) // state up-to-date after an action taken by Service
          navigate('/')
        }
      }
    } catch (error) {
      setError(error.message)
    }
  }
  return <div>Signup</div>
}

export default Signup
