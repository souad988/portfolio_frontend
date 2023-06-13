import { createContext , useState, useEffect} from "react";
import PropTypes from 'prop-types';


export const ThemeContext  = createContext()

const ThemeProvider = ({children}) =>{
  const [theme, setTheme] = useState('light')
  const [themeData, setThemeData] = useState()

  const getThemeObject = async(file)=>{
    fetch(`themes/${file}.json`).then(res => res.json()).then(data => {
      console.log('data after ',data)
      setThemeData(data)
    })
  }
  
  useEffect(() => {
    getThemeObject('light')
  }, [])
  
  useEffect(() => {
    console.log('theme up',theme)
    getThemeObject(theme)
  }, [theme])
  return (
    <ThemeContext.Provider value={{theme,setTheme,themeData,setThemeData}}>
        {children}
    </ThemeContext.Provider>
  )
}


export default ThemeProvider;

ThemeProvider.propTypes = {
    children: PropTypes.node
}