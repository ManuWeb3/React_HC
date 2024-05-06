import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

// native/local fn() MyApp
function MyApp() {
  return <h3>Native/local MyApp is here</h3>
}

// raw JS, created by us in a raw-ish manner which does NOT match the real props generated from within a React fn.() that converts a React element to a tree
const rawReactElement = {
  type: 'a',
  props: {
    href: 'https://www.google.com',
    target: '_blank',
  },
  children: 'Click here to visit Google',
}

// an evaluated expression
const anotherVariable = ' hanjiiii'

// no more creating elements thru raw-ish JS, enter React.createElement()
const properReactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'click here to visit Google.com',
  anotherVariable
  // an EVALUATED EXPRESSION gets added like this under the hood in a JSX Reactelement in a component
)

// first-time syntax??
const anotherElement = (
  <a href="https://www.google.com" target="_blank">
    Click here to visit Google
  </a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  // <MyApp />
  // MyApp()
  // if fn. is being called like this (instead of <MyApp />), then it cannot be clubbed with <App />, <React.StrictMode />
  // reactElement // won't work because syntax is raw JS while .render() expects a JSX syntax
  // anotherElement // raw-ish
  properReactElement // no more error, works perfect as this time it's a proper JSX React element
  // as expected by the syntax of .render()
)
