import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import Navigation from './Component/Navigation/Navigation'
import AboutUs from './pages/AboutUs/AboutUs'
import Introduction from './pages/Introduction/Introduction'
import Category from './pages/Category/Category'
import ImageSlider from './pages/ImageSlider/ImageSlider'
import Footer from './pages/Footer/Footer'
import SubCategory from './pages/SubCategory/SubCategory'


function App() {
  

  return (
  <div className='container'>
    <Navigation/>
    <Home/>
    <Introduction/>
    <ImageSlider/>
    <Category/>
    <AboutUs/>
    <SubCategory/>
    <Footer/>
    
  </div>
  )
}

export default App
