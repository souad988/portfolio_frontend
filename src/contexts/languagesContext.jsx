import { createContext , useState, useEffect} from "react";
import PropTypes from 'prop-types';


export const LanguageContext = createContext()

const LanguageProvider = ({children}) =>{
  const [language, setLanguage] = useState('en')
  const [languageData, setLanguageData] = useState()

  const getLanguageObject = async(file)=>{
    fetch(`locales/${file}.json`).then(res => res.json()).then(data => {
      console.log('data after ',data)
      setLanguageData(data)
    })
  }
  
  useEffect(() => {
    getLanguageObject('en')
  }, [])
  
  useEffect(() => {
    console.log('language up',language)
    getLanguageObject(language)
  }, [language])
  return (
    <LanguageContext.Provider value={{language,setLanguage,languageData,setLanguageData}}>
        {children}
    </LanguageContext.Provider>
  )
}


export default LanguageProvider;

LanguageProvider.propTypes = {
    children: PropTypes.node
}