import React from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)
  // can make all API calls in useEffect() right here 
  // and make use of the data returned/extracted in all {children} comps. gloablly
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
