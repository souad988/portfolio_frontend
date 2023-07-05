import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './views/home'
import Blog from './views/blog';
import Header from './components/header'

function App() {
  
  return (
  <BrowserRouter>
   <Header />
   <Routes>
      
      <Route
          exact={true}
          path="/"
          element={<Home />}
        />
        <Route
          exact={true}
          path="/blog"
          element={<Blog />}
        />
   
   </Routes>
   </BrowserRouter>
  );
}

export default App;
