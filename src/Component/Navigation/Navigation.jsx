import React from 'react'
import './Navigation.scss'
import { FaBars, FaTimes, FaCartPlus } from 'react-icons/fa'
// import { CgProfile } from 'react-icons/cg'
import logo from '../../Image/Logo.png'

export default function Navigation() {
  return (
    <div className='navigation-container'>
      <nav>
        <input type="checkbox" id='check' className='check'/>
        <label htmlFor='check'>
          <FaBars className='btn'/>
          <FaTimes className='cancel'/>
        </label>
        <div className='name'>
          <img src={logo}/>
          <h1>IM Cafe House</h1>
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/category">Category</a></li>
          <li><a href="/#contact">Contact Us</a></li>
          <li><a href="/#about">About</a></li>
          {/* <a href="/profile" style={{marginRight:"30px", marginLeft:"10px", color:"black"}}><CgProfile size={25} /></a>
          <a href="/cart" style={{marginRight:"30px", color:"black"}}><FaCartPlus size={25} /></a> */}
        </ul>
      </nav>
    </div>
  )
}

