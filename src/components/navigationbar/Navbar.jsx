import React from 'react'
import './Navbar.css'
import plogo from "../../assets/logo-icon.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={plogo} alt="logo" className="navbar-logo" />
        <h1 className="navbar-title">UofT Food Finds</h1>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Where To Eat Next</li>
        <li className="navbar-item">About Us</li>
        <li className="navbar-item">Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;

