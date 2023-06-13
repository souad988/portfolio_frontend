import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LanguageProvider from './contexts/languagesContext.jsx'
import ThemeProvider from './contexts/themesContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <LanguageProvider >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LanguageProvider>  
)
