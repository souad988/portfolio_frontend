import useCustomStyles from '../utils/customStyle';
import {styles} from '../styles/views/blog'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
  

function Blog() {
 
  const {theme, isLoading} = useSelector(state=> state.theme)
  const [classes, setClasses] = useState(useCustomStyles(styles(theme)))
  useEffect(() => {
    
  }, [isLoading])
  
  console.log('theme from blog', theme, isLoading)
  
  if(isLoading){
    return <h1>loading!!</h1>
  }
  return (
    <div><h1 className={classes.root}>blog</h1></div>
  )
}

export default Blog