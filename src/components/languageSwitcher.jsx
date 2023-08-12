import CustomButton from './customButton'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLanguage } from '../store/reducers/languageReducer'
import HeaderButton from './headerButton'

function LanguageSwitcher() {
  
  const dispatch = useDispatch()
  const {languageId} = useSelector(state => state.language)

  const toggleLanguage= () => {
    dispatch(fetchLanguage(languageId == 'en'? 'fr' : 'en'))
  }
  return (
    <HeaderButton 
      title= {languageId}
      onClick= {toggleLanguage}
    />
  )
}

export default LanguageSwitcher