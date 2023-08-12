import React from 'react'
import { useSelector } from 'react-redux'
import {styles} from '../styles/components/customButton'
import useCustomStyles from '../utils/customStyle';

function HeaderButton(props) {
    const {theme} = useSelector(state => state.theme) 
    const classes = useCustomStyles(styles(theme))
    // 
    const {title, onClick}  = {...props}
    if(theme){
      return (<button className={classes.primaryButton} onClick={onClick}>{title}</button>)
    }
    return (
      <button  onClick={onClick}>{title}</button>
    )
}

export default HeaderButton