import { useContext } from 'react';
import {Link }from 'react-router-dom'
import { HashLink as HashLink } from 'react-router-hash-link';
import useCustomStyles from '../utils/customStyle';
import {styles} from '../styles/components/header'
import { ThemeContext } from "../contexts/themesContext"

function Header() {
  const {themeData} = useContext(ThemeContext)
  //let classes = 'loading'
  const classes = useCustomStyles(styles(themeData));
 
  
  
  //const classes = useStyles()
 // if(classes == 'loading'){
   // return (<h1>loading</h1>)
  //}
  return (
    <div className={classes.container} >
      <Link to='/blog'  className={classes.link} >Blog</Link>
      <Link to='/' className={classes.link} >Portfolio</Link>
      <HashLink to='/home#Contactme' className={classes.link} >Contact</HashLink>
      <HashLink to='/home#projects' className={classes.link} >Projects</HashLink>
    </div>
  )
}

export default Header