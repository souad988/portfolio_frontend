import CustomButton from './customButton'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTheme } from '../store/reducers/themeReducer'
import HeaderButton from './headerButton'

function ThemeSwitcher() {
  
  const dispatch = useDispatch()
  const {themeId} = useSelector(state => state.theme)

  const toggleTheme = () => {
    dispatch(fetchTheme(themeId == 'light'? 'dark' : 'light'))
  }
  return (
    <HeaderButton
      title= {themeId}
      onClick= {toggleTheme}
    />
  )
}

export default ThemeSwitcher