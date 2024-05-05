import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// native/local fn() MyApp
function MyApp() {
  return <h3>Native/local MyApp is here</h3>
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
  },
  children: 'Click here to visit Google',
}

// first-time syntax??
const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Click here to visit Google
  </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <MyApp />
  // MyApp()
  // if fn. is being called like this (instead of <MyApp />), then it cannot be clubbed with <App />, <React.StrictMode />
  // reactElement // won't work
  anotherElement
)
