import React from 'react'
import './Campus.css'
import dark_arrow from '../../assets/dark-arrow.png'

const campus = () => {
  return (
    <div className = 'Campus container'>
      <div className =  "Campus-text">
        <h1>Your Guide to the Best Bites on University of Toronto Campus </h1>
        <p>Whether you are a student, faculty, or visitor, you will find a variety of food options on campus. From the best coffee shops to the most affordable meal plans, we have you covered. </p> 
        <button className = 'btn'>Let's Munch!<img src = {dark_arrow} alt = "" /></button>
      </div>
    </div>
  )
}

export default campus
