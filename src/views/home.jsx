import { useEffect, useState, useContext} from 'react';
import {getData, createProjectApi} from '../api/api'
import { LanguageContext } from '../contexts/languagesContext';
import ThemeSwitcher from '../components/themeSwitcher';
import LanguageSwitcher from '../components/languageSwitcher';
import CustomButton from '../components/customButton';
import { ThemeContext } from '../contexts/themesContext';
function Home() {
    const [data, setData] = useState([]);
    const {language, languageData} = useContext(LanguageContext)
    const {themeData} = useContext(ThemeContext)
    console.log(language,languageData)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const apiData = await getData();
          setData(apiData);
        } catch (error) {
          console.log('data error', error);
        }
      };
      fetchData();
    }, []);
  
    const createProject = async()=>{
      const data = await createProjectApi()
      console.log(data)
      setData(data)
    }
  
    if(!languageData || !themeData){
      return ('loading')
    }
    return (
  
      <div>
        <ThemeSwitcher />
        <LanguageSwitcher />
       
        <CustomButton title={'Create project'} onClick={createProject} />
        {data? Object.entries(data).map(([key,value]) => (
          <div key={`${key}-container`}> 
            <p key={key}>{languageData[key]}</p>
            <h3 key={`${key}-title`}>{value}</h3>
          </div> 
        )): 'no values '}
      </div>
    );
}

export default Home