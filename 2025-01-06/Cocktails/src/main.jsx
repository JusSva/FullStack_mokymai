import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Details from './pages/Details.jsx'
import Glass from './pages/Glass.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element= {<App />} />
      <Route path="/drinks/:id" element= {<Details />} />
      <Route path="/glass/:glass" element={<Glass />}/>
      <Route path="*" element= {<h1>Toks puslapis Nerastas :/</h1>} />
    </Routes>
  </BrowserRouter>
  
)
