import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Sections from './components/sections/Sections';
import Services from './components/services/Services';
import Products from './components/products/Products';
import AboutUs from './components/about_us/AboutUs';
import Contact from './components/contact/Contact';

function App() {

  return (
    <>
    <BrowserRouter>
      <Nav />
      <div className='body-container'>
        <Routes>
          <Route path='/' element={ <Sections /> } />
          <Route path='/services' element={ <Services /> } />
          <Route path='/products' element={ <Products /> } />
          <Route path='/about-us' element={ <AboutUs /> } />
          <Route path='/contact' element={ <Contact /> } />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
