import { useContext } from "react"
import { ThemeContext } from "../contexts/themesContext"
function CustomButton(props) {
  const {themeData} = useContext(ThemeContext) 
  // 
  const {title, onClick}  = {...props}
  if(themeData){
    return (<button style={{backgroundColor: themeData.primaryColor, color: themeData.secondaryColor}} onClick={onClick}>{title}</button>)
  }
  return (
    <button  onClick={onClick}>{title}</button>
  )
}

export default CustomButton