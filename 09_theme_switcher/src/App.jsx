import {useState, useEffect} from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import { Card, ThemeBtn } from './components'

function App() {
  const [themeMode, setThemeMode] = useState('light') // default = light

  // defining the functionality of both here will set their bodies in theme.js as well where they were originally left empty
  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }
  // useEffect has nothing to do with context, just a bsic code that should run to change theme
  // FLOW: ThemeBtn clicked -> setThemeMode sets state (themeMode) -> re-render App -> runs useEffect (dependency changed) after getting rendered -> themeMode re-set with new light/dark value -> Card's theme changed
  useEffect(() => {
    // "document" is accessible below as it gets injected finally in index.html when our app renders
    document.querySelector('html').classList.remove('light', 'dark') // clear = empty canvas all defaults/preset value
    document.querySelector('html').classList.add(themeMode) // add whatever is present in the themeMode value
  }, [themeMode])

  // We need to give ThemeBtn and Card an access to 3 ThemeContext's entities
  // Hence, wrap the below return with TCP
  // It's TCP (not .jsx) and despite this, it's used with tags <> below = that's how the syntax is
  // Still, we need to give values in "value" prop like we did for <UC.P value={{}}> in UCP.jsx
  return (
    <ThemeContextProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="border-2 border-pink-600 flex flex-wrap min-h-screen items-center">
        <div className="border-2 border-green-600 w-full">
          <div className="border-2 border-orange-400 w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="border-2 border-black w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  )
}

export default App
