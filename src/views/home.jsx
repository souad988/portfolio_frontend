import { useEffect, useState } from 'react';
import {getData, createProjectApi} from '../api/api'
import ThemeSwitcher from '../components/themeSwitcher';
import LanguageSwitcher from '../components/languageSwitcher';
import CustomButton from '../components/customButton';
import { useSelector} from 'react-redux'


function Home() {
    const [data, setData] = useState([]);
    const {theme , themeId} = useSelector(state => state.theme)
    const {language, languageId} = useSelector(state => state.language)
    console.log('home', theme, language)

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
  
    if(!language || !theme){
      return ('loading')
    }
    return (
  
      <div>
        <ThemeSwitcher />
        <LanguageSwitcher />
       
        <CustomButton title={'Create project'} onClick={createProject} />
        {data? Object.entries(data).map(([key,value]) => (
          <div key={`${key}-container`}> 
            <p key={key}>{language[key]}</p>
            <h3 key={`${key}-title`}>{value}</h3>
          </div> 
        )): 'no values '}
      </div>
    );
}

export default Home