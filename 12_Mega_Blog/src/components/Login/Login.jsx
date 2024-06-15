// Login component comprising 2 components (specific) + 1 Logo (generic)
// 1. 2*<Input>s, 2. <Button>
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Button, Logo } from '../index'
// can import individual reducers into components
import { login as authLogin } from '../../store/authSlice' // state change @ login -> login reducer
import { authService } from '../../appwrite/auth' // login = WITHIN instance 'authService' -> auth's login() service = (reducer) action
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm() // both keywords
  const [error, setError] = useState('')
  // login() different than handleSubmit()
  // 3 login()s in action
  // 1. login: custom-defined - This App Specifically (for handleSubmit - global scope wala login)
  const login = async (data) => {
    setError('') // clear all @ login
    try {
      // session = EmailPasswordSession returned by login(data).
      // data = {email, password}
      // 2. login: from appwrite's service - Appwrite
      const session = await authService.login(data) // async method - returns promise as it has much to do with the DB UTH
      if (session) {
        // when user gets auth. @ login, userData becomes available to be returned by getCurrentUser() (account.get())
        const userData = await authService.getCurrentUser()
        if (userData) {
          // 3. login: reducer in store to change state - Redux
          dispatch(authLogin(userData))
          navigate('/') // after login, send user to Home Page, FINALLY
        }
        // called reducer-login() -> action.payload contains userData and assigns it to userData, status = true
        // state gets updated
      }
    } catch (error) {
      setError(error.message) // .message prop
    }
  }
  return (
    // Below: div -> div -> div -> span -> Logo
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don@apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email id"
              {...register('email', {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) ||
                    'Email Id must be valid.',
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter the Password"
              {...register('password', {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
