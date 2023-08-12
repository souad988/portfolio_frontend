import React from 'react'
import { Grid } from '@mui/material'
import {styles} from '../styles/components/project'
import {generalStyles} from '../styles/index'
import { useSelector } from 'react-redux'
import useCustomStyles from '../utils/customStyle';
import Project from './project'
import clsx from 'clsx'


function Projects() {
  const {theme} = useSelector(state=>state.theme)
  const classes = useCustomStyles(styles(theme))
  const generalClasses = useCustomStyles(generalStyles(theme))
  return (
    <Grid className={clsx(classes.projectsContainer, generalClasses.flex) }  >
    <Project />
    <Project />
    <Project />
    </Grid>
  )
}

export default Projects