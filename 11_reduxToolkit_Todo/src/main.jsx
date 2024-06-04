import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux' // ALSO, needed here likewise ContextAPI as a WRAPPER
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // prop = store (not "value" unlike CotextAPI's Provider)
  <Provider store={store}>
    <App />
  </Provider>
)
