import React from 'react'
import "./SubCategory.scss"
import backgroundImage from '../../Image/img-1.jpg'
import ammericonCoffe from '../../Image/Americon-coffe.jpeg'
import icedCoffe from '../../Image/Iced_coffee.jpg'
import cappuccinoCoffe from '../../Image/Cappuccino.jpeg'
import machaCoffe from '../../Image/Mocha.jpeg'


export default function SubCategory() {
    return (
        <div className="subCategory-container">
            <div className="banner">
                <img src={backgroundImage} />
            </div>
            <div className="title">
                <p>Espresso Coffe</p>
                <hr style={{ width: "95vw", color: "black", marginTop: "23px" }} />
                <div className="search">
                    <inputnpm ru
                        className="search"
                        type="text"
                        placeholder="Search..." />
                </div>
            </div>
            <div className="body">
                <div className="card-1">
                    <div className="Americon-Image">
                        <img src={ammericonCoffe} />
                    </div>
                    <div className="Americon-Name">
                        <p>Americon-Coffees</p>
                        <p style={{marginTop:"10px", color:"gray"}}>Rs. 890.00</p>
                    </div>
                </div>
                <div className="card-2">
                    <div className="Ice-Image">
                        <img src={icedCoffe} />
                    </div>
                    <div className="Ice-Name">
                        <p>Iced-Coffees</p>
                        <p style={{marginTop:"10px", color:"gray"}}>Rs. 1000.00</p>
                    </div>
                </div>
                <div className="card-3">
                    <div className="Cappuccino-Image">
                        <img src={cappuccinoCoffe} />
                    </div>
                    <div className="Cappuccino-Name">
                        <p>Cappuccino-Coffees</p>
                        <p style={{marginTop:"10px", color:"gray"}}>Rs. 650.00</p>
                    </div>
                </div>
                <div className="card-4">
                    <div className="Macha-Image">
                        <img src={machaCoffe} />
                    </div>
                    <div className="Macha-Name">
                        <p>Macha-Coffees</p>
                        <p style={{marginTop:"10px", color:"gray"}}>Rs. 780.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
