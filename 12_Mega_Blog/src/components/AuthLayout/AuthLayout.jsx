import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom' // whether redirect user to Login page or Home page

export default function Protected({ children, authentication = true }) {
  // default = authentication true -> show protected routes, if user is authenticated
  const [loader, setLoader] = useState(true) // = 'loading'
  // NOT necessarily needed as we can solely rely upon authStatus of store.js in our app
  const navigate = useNavigate()
  // check authStatus from store.js (DON'T believe solely on what user sent)
  const authStatus = useSelector((state) => state.auth.status)
  // check whether user is still authenticated at this point in time + when all we need to check = []
  useEffect(() => {
    if (authentication && authStatus !== authentication) {
      navigate('/login')
    } else if (!authentication && authStatus !== authentication) {
      navigate('/')
    }
    setLoader(false) // always false at every execution of useEffect()
    // more clarity after complete workflow
  }, [authStatus, navigate, authentication])
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

/*
Simple and alternative code for if-else struct:
if(authStatus) {
    navigate("/")
}
else {
    navigate("/login")
}
*/
