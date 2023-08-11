import React,{useEffect} from 'react'
import useCustomStyles from '../utils/customStyle';
import {styles} from '../styles/components/project'
import {useDispatch ,useSelector } from 'react-redux'
import { fetchProjects } from '../store/reducers/projectReducer';
import {
  Tooltip,
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Fab,
  Typography,
} from '@mui/material';

function Project() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProjects())
  }, [])
  
  const {theme} = useSelector(state=>state.theme)
  const {projects} = useSelector(state=>state.projects)
  console.log('hello from project')
  console.log('projects',projects)
  const classes = useCustomStyles(styles(theme))
  const project = projects

  return (
  
    <Card className={classes.container}>
    <CardMedia  title={project.title}>
      <Tooltip
        title={'project'}
        placement="right-start"
        arrow
      >
      </Tooltip>
     
        <img
          className={classes.mediaImageStyle}
          src={project.image}
          alt={project.title}
        />

    </CardMedia>
    <CardActionArea >
      <CardContent
        
      >
        <Fab
         
          size="small"
          aria-label="save button"
        
        >
          "save"
        </Fab>
       
        <Typography
          variant="h5"
          component="h2"
        >
          {project.title}
        </Typography>
        <Box >
          <Typography
            variant="subtitle2"
            color="textSecondary"
            component="p"
          >
            {project.description}
          </Typography>
        </Box>
       
       
      </CardContent>
    </CardActionArea>
  </Card>
 
  )
}

export default Project