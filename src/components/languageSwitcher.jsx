import CustomButton from './customButton'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLanguage } from '../store/reducers/languageReducer'

function LanguageSwitcher() {
  
  const dispatch = useDispatch()
  const {languageId} = useSelector(state => state.language)

  const toggleLanguage= () => {
    dispatch(fetchLanguage(languageId == 'en'? 'fr' : 'en'))
  }
  return (
    <CustomButton 
      title= {languageId}
      onClick= {toggleLanguage}
    />
  )
}

export default LanguageSwitcher