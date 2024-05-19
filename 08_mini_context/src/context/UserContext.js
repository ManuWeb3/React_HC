import React from 'react' // YES, we're having React within JS for a use-case

const UserContext = React.createContext() // can be used with tags <> despite not being a typical JSX. Similar to TCP

export default UserContext
