import { useSelector } from "react-redux"

function CustomButton(props) {
  const {theme} = useSelector(state => state.theme) 
  // 
  const {title, onClick}  = {...props}
  if(theme){
    return (<button style={{backgroundColor: theme.primaryColor, color: theme.secondaryColor}} onClick={onClick}>{title}</button>)
  }
  return (
    <button  onClick={onClick}>{title}</button>
  )
}

export default CustomButton