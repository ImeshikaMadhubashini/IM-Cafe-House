import React from 'react'
import "./AboutUs.scss"
import backgroundImage from '../../Image/AboutUS.jpg'

export default function AboutUs() {
  return (
    <div className="about-container">
      <div className="title">
        <p>About Us</p>
        <hr style={{ width: "85vw", color: "black", marginTop: "173px" }} />
      </div>
      <div className="body">
        <div className="left">

          <img src={backgroundImage} />
        </div>
        <div className="right">
          <p>
            
            Welcome to IM Cafe House, where every cup tells a story!<br/><br/>

            Nestled in the heart of our community, IM Cafe House is more than just a coffee shop—it's a haven for coffee enthusiasts and a meeting place for friends and families. We take pride in serving the finest blends of coffee, each crafted with love and care to deliver an unforgettable experience. <br/><br/>

            At IM Cafe House, we believe that coffee is an art form. That’s why we source the highest quality beans from around the world, roast them to perfection, and brew them with precision. Whether you’re in the mood for a strong espresso, a creamy cappuccino, or a refreshing iced latte, our skilled baristas are here to make your coffee dreams come true.<br/><br/>

            But we're not just about coffee. Our menu also features an array of delightful pastries, hearty sandwiches, and indulgent desserts, all made fresh with locally sourced ingredients.

            IM Cafe House is a space for relaxation, creativity, and connection. With its warm ambiance, comfortable seating, and free Wi-Fi, it’s the perfect place to work, unwind, or catch up with loved ones.

            Come and experience the magic of IM Cafe House, where coffee meets community. We look forward to welcoming you soon!</p>
        </div>
      </div>

    </div>
  )
}
