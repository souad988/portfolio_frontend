import CustomButton from './customButton'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTheme } from '../store/reducers/themeReducer'

function ThemeSwitcher() {
  
  const dispatch = useDispatch()
  const {themeId} = useSelector(state => state.theme)

  const toggleTheme = () => {
    dispatch(fetchTheme(themeId == 'light'? 'dark' : 'light'))
  }
  return (
    <CustomButton 
      title= {themeId}
      onClick= {toggleTheme}
    />
  )
}

export default ThemeSwitcher