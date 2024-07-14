import React from 'react'
import './navbar.css'
import plogo from "../../assets/spoonofsugar.png"

const navbar = () => {
  return (
    <nav>
      <img src = {plogo} alt = "logo" />
      <ul>
        <li>Home</li>
        <li>Where Can We Eat Next</li> 
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  )
}

export default navbar 
