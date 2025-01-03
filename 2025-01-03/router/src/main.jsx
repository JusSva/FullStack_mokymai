import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './pages/Contacs'
import Team from './pages/Team'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Payment from './pages/Payment'
import Navigation from './components/Nav/Navigation'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <div className="container">
    <Navigation />
    <Routes>
      <Route path='/' element={ <Home />}/> {/* Home */}
      <Route path='/contacts' element={ <Contacts />}/> {/* Contact US */}
      <Route path='/payment' element={ <Payment />}/> {/* Payment */}
      <Route path='/pricing' element={ <Pricing />}/> {/* Pricing*/}
      <Route path='/team' element={ <Team />}/> {/* Meet the Team */}
    </Routes>
  </div>
  </BrowserRouter>
)
