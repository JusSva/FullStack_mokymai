import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Admin from './components/Admin.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path = "/admin" element = {<Admin />}/>
    </Routes>
    <App />
  </BrowserRouter>
  
)
