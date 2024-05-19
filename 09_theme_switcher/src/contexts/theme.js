// METHODOLOGY # 2: combined the works done across 2 files: UserContext.js and UCP.jsx into this 1 single file
import { createContext, useContext } from 'react'

// ThemeContext connected with 3 attributes likewise UserContext connected with state(user) and setState(setUser) in UCP.jsx
export const ThemeContext = createContext({
  themeMode: 'light',
  darkTheme: () => {},
  lightTheme: () => {},
  // passed var. and method similar to passing state var (user) and state method (setUser) in UCP.jsx
})

export const ThemeContextProvider = ThemeContext.Provider

// our custom hook = just another function (append "use")
export default function useTheme() {
  return useContext(ThemeContext)
  // either of the 3 entities above can be accessed/used anywhere by importing this useTheme(), without prop-drill
}
// useContext(input = created-Context = ThemeContext)
