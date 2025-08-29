import React from 'react'
import './category.scss'
import espressoCaffee from '../../Image/Espresso-coffee.jpg'
import specialCaffee from '../../Image/Flavored_and_specialty_coffee.jpg'
import blackCaffee from '../../Image/Black_coffee.jpg'
import iceCaffee from '../../Image/Iced_coffee.jpg'

export default function Category() {
  return (
    <div className="category-container">
      <div className="main-card">
        <div className="card-1">
          <div className="Espresso-Image">
            <img src={espressoCaffee} />
          </div>
          <div className="Espresso-Name">
            <p>Espresso-Based Coffees</p>
          </div>
        </div>
        <div className="card-2">
          <div className="SpecialCoffee-Image">
            <img src={specialCaffee} />
          </div>
          <div className="SpecialCoffee-Name">
          <p>Flavored & Specialty Coffees</p>
          </div>
        </div>
        <div className="card-3">
          <div className="BlackCoffee-Image">
            <img src={blackCaffee} />
          </div>
          <div className="BlackCoffee-Name">
          <p>Brewed & Black Coffees</p>
          </div>
        </div>
        <div className="card-4">
          <div className="IceCoffee-Image">
            <img src={iceCaffee} />
          </div>
          <div className="IceCoffee-Name">
          <p>Iced & Cold Coffees</p>
          </div>
        </div>
        {/* <div className="card-5"></div> */}
      </div>

    </div>
  )
}
