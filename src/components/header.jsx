import {Link }from 'react-router-dom'
import { HashLink as HashLink } from 'react-router-hash-link';

function Header() {
  return (
    <div>
      <Link to='/blog'>Blog</Link>
      <Link to='/'>Portfolio</Link>
      <HashLink to='/home#Contactme'>Contact</HashLink>
      <HashLink to='/home#projects'>Projects</HashLink>
    </div>
  )
}

export default Header