import React from 'react'
import './category.scss'


const category = [
  {
    id: 1,
    name: "Espresso-Based Coffees",
    src: "Espresso-coffee.jpg"
  },

  {
    id: 2,
    name: "Flavored & Specialty Coffees",
    src: "Flavored_and_specialty_coffee.jpg"
  },

  {
    id: 3,
    name: "Brewed & Black Coffees",
    src: "Black_coffee.jpg"
  },

  {
    id: 4,
    name: "Iced & Cold Coffees",
    src: "Iced_coffee.jpg"
  }
]

export default function Category() {
 
  return (
    <div id='category'  className="category-container">
      <div className="main-card">
        {category.map((cat) => (
          
          <div className="card" key={cat.id}>
            <div className="Espresso-Image">
              <img src = {`/Image/${cat.src}`}/>
            </div>
            <div className="Espresso-Name">
              <p>{cat.name}</p>
            </div>
          </div>
          ))}

      </div>

    </div>
  )
}
