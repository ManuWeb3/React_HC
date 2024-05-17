import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const { userid } = useParams()
  // "userid" and <User /> gets associated here for the 2nd time and hence "userid" becomes accessible
  return (
    <div className="bg-gray-700 text-white text-3xl text-center p-4">
      User: {userid}
    </div>
  )
}

export default User
