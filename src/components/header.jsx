import {Link }from 'react-router-dom'
import { HashLink as HashLink } from 'react-router-hash-link';
import useCustomStyles from '../utils/customStyle';
import {styles} from '../styles/components/header'
import {generalStyles} from '../styles/index'
import { useSelector } from 'react-redux'
import ThemeSwitcher from './themeSwitcher';
import LanguageSwitcher from './languageSwitcher';
import semlogo from '../assets/semlogo.png'
import clsx from 'clsx'
import Logo from './logo';

function Header() {
  const {theme} = useSelector(state => state.theme)
  const classes = useCustomStyles(styles(theme));
  const generalClasses = useCustomStyles(generalStyles(theme))
 
  return (
    <div className={classes.container} >
      <Logo />
      <div className={generalClasses.flex}>
      <ul className={clsx(generalClasses.flex, classes.menu)}>
        <li>
          <Link to='/blog'  className={classes.link} >Blog</Link>
        </li>
        <li>
          <Link to='/' className={classes.link} >Portfolio</Link>
        </li>
        <li>

          <HashLink to='/home#Contactme' className={classes.link} >Contact</HashLink>
        </li>
        <li>
          <HashLink to='/home#projects' className={classes.link} >Projects</HashLink>
        </li>
      </ul>  
      <div>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
      </div>
    </div>
  )
}

export default Header