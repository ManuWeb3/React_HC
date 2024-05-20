import { useState, useEffect } from 'react'
import './App.css'
import { ThemeContextProvider } from './contexts/theme'
import { Card, ThemeBtn } from './components'

function App() {
  // the "themeMode" state below is anew and is the one that influences "themeMode" in useEffect()
  // different from the "themeMode" in <ThemeContextProvider>
  const [themeMode, setThemeMode] = useState('light') // default = light/dark

  // defining the functionality of both here will set their bodies in theme.js as well where they were originally left empty
  const lightTheme = () => {
    console.log('Inside lightTheme()')
    setThemeMode('light')
  }
  const darkTheme = () => {
    console.log('Inside darkTheme()')
    setThemeMode('dark')
  }
  // useEffect has nothing to do with context, just a bsic code that should run to change theme
  // FLOW: ThemeBtn clicked -> setThemeMode sets state (themeMode) -> re-render App -> runs useEffect (dependency changed) after getting rendered -> themeMode re-set with new light/dark value -> Card's theme changed
  // ACTUAL CHANGE IN THEME THRU INJECTION INTO HTML -> here using both React Hook useEffect() and conventional JS
  // without this, themeMode-change won't get INJECTED INTO HTML
  useEffect(() => {
    console.log('Inside useEffect() in App.jsx')
    // "document" is accessible below as it gets injected finally in index.html when our app renders
    document.querySelector('html').classList.remove('light', 'dark') // clear = empty canvas all defaults/preset value
    document.querySelector('html').classList.add(themeMode) // add whatever is present in the themeMode value
    // could have toggled but took no load of it
    // CLEANER code is - remove whatever old is (purana kya hai - no tension), add new.
    console.log('Done with useEffect() in App.jsx')
  }, [themeMode])

  // We need to give ThemeBtn and Card an access to 3 ThemeContext's entities
  // Hence, wrap the below return with TCP
  // It's TCP (not .jsx) and despite this, it's used with tags <> below = that's how the syntax is
  // Still, we need to give values in "value" prop like we did for <UC.P value={{}}> in UCP.jsx
  return (
    // "themeMode" below comes from theme.js' themeMode, NOT the one in state (setThemeMode) above right here
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
