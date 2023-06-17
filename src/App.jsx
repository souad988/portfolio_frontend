import { useEffect, useState, useContext} from 'react';
import {getData, createProjectApi} from './api/api'
import { LanguageContext } from './contexts/languagesContext';
import ThemeSwitcher from './components/themeSwitcher';
import LanguageSwitcher from './components/languageSwitcher';
import CustomButton from './components/customButton';

function App() {
  const [data, setData] = useState([]);
  const {language, setLanguage,languageData} = useContext(LanguageContext)
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

  
  return (

    <div>
      <ThemeSwitcher />
      <LanguageSwitcher />
     
      <CustomButton title={'Create project'} onClick={createProject} />
      {data? Object.values(data).map((item,index)=> (
        <p key={index}>{item}</p>
      )): 'no values '}
    </div>
  );
}

export default App;
