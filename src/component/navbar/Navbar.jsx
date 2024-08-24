import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.jpg'
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li>MEN</li>
        <li>WOMEN</li>
        <li>KIDS</li>
        <li>HOME & LIVING</li>
        <li>
          <label htmlFor="input">
            <i class="bi bi-search">
              <input
                className="input"
                type="text"
                placeholder="Search for Product"
                name="name"
              />
            </i>
          </label>
        </li>
        <li>Profile</li>
        <li>Bag</li>
      </ul>
    </div>
  );
}

export default Navbar
