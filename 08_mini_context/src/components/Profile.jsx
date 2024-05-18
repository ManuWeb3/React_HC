import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
  const { user } = useContext(UserContext) // UserContext is connected to [user, setUser] state in UserContextProvider.jsx

  if (!user) return <div>Please Login</div>
  return (
    <>
      <div>Welcome {user.username}</div>
      {/* // data RECEIVED from user in UserContextProvider.jsx */}
    </>
  )
  // return <div>Welcome {user.username}</div> // also works in single line
}

export default Profile
