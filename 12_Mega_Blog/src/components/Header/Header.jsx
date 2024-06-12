import React from 'react'
import { useSelector, useNavigate } from 'react-redux'

const Header = () => {
  // first, check whether user is logged in OR logged out
  const authStatus = useSelector((state) => {
    state.auth.status
  }) // unlike state.todos where there was only ONE SLICE = todoSlice
  const navigate = useNavigate()
  return <div>Header</div>
}

export default Header
