import { useEffect, useState, useContext} from 'react';
import {getData, createProjectApi} from './api/api'
import { LanguageContext } from './contexts/languagesContext';

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

  const toggleLanguage = ()=>{
    setLanguage(state=>{
      return state == 'en' ? 'fr' : 'en'
    })
  }
  return (

    <div>
      <button onClick={toggleLanguage}>{language}</button>
      <button onClick={()=>createProject()}>Create project</button>
      {data? Object.values(data).map((item,index)=> (
        <p key={index}>{item}</p>
      )): 'no values '}
    </div>
  );
}

export default App;
