import React from 'react'
import useCustomStyles from '../utils/customStyle';
import {styles} from '../styles/components/logo'
import { useSelector } from 'react-redux';

function Logo() {
    const {theme} = useSelector(state => state.theme)
    const classes = useCustomStyles(styles(theme));
  return (
    <div className={classes.container}>
     <span className={classes.capital}>S</span><span className={classes.lower}>ouad</span><span className={classes.capital}> E</span><span className={classes.lower}>l</span><span  className={classes.capital}> M</span><span className={classes.lower}>ansouri</span>
    </div>
  )
}

export default Logo