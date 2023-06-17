import {useContext} from 'react'
import {ThemeContext} from '../contexts/themesContext'
import CustomButton from './customButton'

function ThemeSwitcher() {
  const {theme,setTheme} = useContext(ThemeContext) 

  const toggleTheme = () => {
    setTheme(state => state == 'light'? 'dark' : 'light')
  }
  return (
    <CustomButton 
      title= {theme}
      onClick= {toggleTheme}
    />
  )
}

export default ThemeSwitcher