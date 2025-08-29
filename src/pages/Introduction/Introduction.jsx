import React from 'react'
import "./Introduction.scss"

export default function Introduction() {
  return (
    <div className="introduction-container">
        <div className="main-card">
        <div className="top">
            <h1>What We Do</h1>
            <p>IM Cafe House-Your go-to destination for a wide variety of delicious coffees. Sip, savor, and enjoy the perfect brew!</p>
        </div>
        <div className="bottom">
            <div className="card-1">
                <h2>Our Offerings</h2>
                <p>At IM Cafe House, we offer rich espressos and refreshing iced blends, crafted with premium beans to delight every coffee lover and provide a satisfying experience with every cup.</p>
            </div>
            <div className="card-2">
                <h2>Why Choose Us?</h2>
                <p>At IM Cafe House, we deliver premium coffee with expertly crafted blends, a cozy ambiance, and friendly service. Every sip is a delightful experience. Discover your favorite brew today!</p>
            </div>
            <div className="card-3">
                <h2>Our Commitment</h2>
                <p>
At IM Cafe House, we’re committed to delivering quality, ensuring freshness, and crafting a memorable coffee experience. Every cup is made with care to bring joy to every coffee lover.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
