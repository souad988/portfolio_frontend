import {useContext} from 'react'
import { LanguageContext } from '../contexts/languagesContext'
import CustomButton from './customButton'

function LanguageSwitcher() {
  const {language, setLanguage} = useContext(LanguageContext) 

  const toggleLanguage= () => {
    setLanguage(state => state == 'en'? 'fr' : 'en')
  }
  return (
    <CustomButton 
      title= {language}
      onClick= {toggleLanguage}
    />
  )
}

export default LanguageSwitcher