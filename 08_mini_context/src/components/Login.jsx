import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { setUser } = useContext(UserContext) // UserContext is connected to [user,setUser] state in UserContextProvider.jsx
  const handleSubmit = (e) => {
    e.preventDefault()
    // No default beh. per MDN, but Hitesh quoted "Don't want any values to get sent to URL" - Is he correct? Are docs up-to-date?
    // ideally, no def. beh. for type="button"
    setUser({ username, password }) // data SENT to user in UserContextProvider.jsx
    // sets uname & pwd both as an object to the same single state var. "user" of UserContextProvider.jsx
  }
  return (
    <>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        placeholder="username"
        id="username"
        onChange={(e) => {
          setUsername(e.target.value)
          // state-handling using event-handler, else state is floating in the air UNHANDLED
        }}
        value={username}
      />
      <label htmlFor="password">Password: </label>
      <input
        type="text"
        placeholder="password"
        id="password"
        onChange={(e) => {
          setPassword(e.target.value)
          // state-handling using event-handler, else state is floating in the air UNHANDLED
        }}
        value={password}
      />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
    </>
  )
}

export default Login
