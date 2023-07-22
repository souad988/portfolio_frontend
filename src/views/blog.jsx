import { useContext, useEffect } from 'react';
import useCustomStyles from '../utils/customStyle';
import {styles} from '../styles/views/blog'
import { ThemeContext } from "../contexts/themesContext"


  
function Blog() {
  const {themeData} = useContext(ThemeContext) 
  const classes = useCustomStyles(styles(themeData));
 /* console.log('theme from blog', themeData)
  let classes = 'loading'
  const setClasses = (theme)=>{
    classes = useCustomStyles(styles(themeData));
  }
  useEffect(() => {
    setClasses(themeData)
  }, [themeData])
  
  
  //const classes = useStyles()
  if(classes == 'loading'){
    return (<h1>loading</h1>)
  }*/
  return (
    <div><h1 className={classes.root}>blog</h1></div>
  )
}

export default Blog