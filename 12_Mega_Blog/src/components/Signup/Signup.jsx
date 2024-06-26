import React, { useState } from 'react'
import authService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'
import { register, handleSubmit } from 'react-hook-form'

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
  return (
    <div className="flex item-center justify-center">
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
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
          <Input
            label='Full Name: '
            placeholder='Enter your full name...'
            {...register('name'), {
              required: true,
            }}
          />       
          <Input
            label='Email: '
            type='email'
            placeholder='Enter your email...'
            {...register('email'), {
              required: true,
              validate: {
                matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || 'Enter a valid email address'
              }
            }}
          />       
          <Input
              label="Password: "
              type="password"
              placeholder="Enter the password..."
              {...register('password', {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>      
        </form>
      </div>
    </div>
  )
}

export default Signup
