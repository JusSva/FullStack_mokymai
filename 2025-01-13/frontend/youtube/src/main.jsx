import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import SingleVideo from './pages/SingleVideo.jsx'
import AddVideo from './pages/AddVideo.jsx'
import Admin from './pages/Admin.jsx'
import EditPost from './pages/EditPost.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    
    <div className="container">
      <Header />
      <Routes>
        <Route path ='/' element={<Home />}/>
        <Route path ='/:link' element={<SingleVideo />}/>
        <Route path ='/add' element={<AddVideo />}/>
        <Route path ='/admin' element={<Admin />}/>
        <Route path ='/edit/:id' element={<EditPost />}/>

        <Route path ='/*' element={<h1>Toks video nerastas :/</h1>}/>
      </Routes>
      <App />
    </div>
  </BrowserRouter>
)
