import {Link }from 'react-router-dom'
import { HashLink as HashLink } from 'react-router-hash-link';
import useCustomStyles from '../utils/customStyle';
import {styles} from '../styles/components/header'
import { useSelector } from 'react-redux'

function Header() {
  const {theme} = useSelector(state => state.theme)
  const classes = useCustomStyles(styles(theme));
 
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