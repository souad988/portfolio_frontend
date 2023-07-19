import { useContext } from 'react';
import useCustomStyles from '../utils/customStyle';
import {styles} from '../styles/views/blog'
import { ThemeContext } from "../contexts/themesContext"

function Blog() {
  const {themeData} = useContext(ThemeContext) 
  console.log('theme from blog', themeData)
  const classes = useCustomStyles(styles(themeData));
  
  //const classes = useStyles()
  return (
    <div><h1 className={classes.root}>blog</h1></div>
  )
}

export default Blog