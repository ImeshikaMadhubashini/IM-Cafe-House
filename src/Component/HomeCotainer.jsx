import React from 'react'
import Home from '../pages/Home/Home'
import Introduction from '../pages/Introduction/Introduction'
import ImageSlider from '../pages/ImageSlider/ImageSlider'
import Category from '../pages/Category/Category'
import AboutUs from '../pages/AboutUs/AboutUs'
import Contact from '../pages/ContactUs/Contact'

export default function HomeCotainer() {
  return (
    <div>
    <Home/>
    <Introduction/>
    <ImageSlider/>
    <Category/>
    <AboutUs/>
    <Contact/>
    </div>
  )
}
