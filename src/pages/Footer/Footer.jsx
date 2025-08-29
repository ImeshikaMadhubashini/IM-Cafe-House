import React from 'react'
import './Footer.scss'
import { IoCallSharp } from "react-icons/io5";
import { SiWhatsapp } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

export default function footer() {
  return (
    <div className="footr-container">
        <div className="top">
          <div className="contact-icon">
          <IoCallSharp className="call"/>
        <SiWhatsapp  className="whatsapp"/>
        <AiOutlineMail className="email"/>
          </div>
        
        <div className="contact-details">
          <p>Mobile number: 0134566789</p>
          <p>WhatsApp Number: 0134566789</p>
          <p>Email: im123@gmail.com</p>
        </div>
        <h2>IM Cafe House</h2>  
          <p>@Copyright Imeshika Madhubashini</p> 
        
        </div>
        {/* <div className="bottom">
          <h2>IM Cafe House</h2>  
          <p>@Copyright Imeshika Madhubashini</p>  
        </div> */}
    </div>
  )
}
