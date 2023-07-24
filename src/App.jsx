import { useEffect } from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './views/home'
import Blog from './views/blog';
import Header from './components/header'
import { useDispatch, useSelector} from 'react-redux';

import {fetchTheme} from './store/reducers/themeReducer'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(fetchTheme('light'))
  }, [])
  
  const {theme} = useSelector(state => state.theme) 
  console.log('app.jsx theme',theme)
  return (
  <BrowserRouter>
   <Header />
   <Routes>
      
        <Route
          exact={true}
          path="/home"
          element={<Home />}
        />
        <Route
          exact={true}
          path="/"
          element={<Blog />}
        />
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
