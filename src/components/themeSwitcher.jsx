import {useContext} from 'react'
import {ThemeContext} from '../contexts/themesContext'

function ThemeSwitcher() {
  const {theme,setTheme} = useContext(ThemeContext) 
  console.log('themeswitcher',theme)

  const toggleTheme = () => {
    setTheme(state => state == 'light'? 'dark' : 'light')
  }
  return (
    <button onClick={toggleTheme}>{theme}</button>
  )
}

export default ThemeSwitcher