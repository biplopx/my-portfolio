import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <header>
      <div className="container">
        <h1 className='logo'>MBH</h1>
        <nav className={isMenuOpen ? "navbar menu-open" : "navbar"}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/" >About</NavLink></li>
            <li><NavLink to="/">Skills</NavLink></li>
            <li><NavLink to="/">Projects</NavLink></li>
            <li><NavLink to="/">Blog</NavLink></li>
            <li><NavLink to="/">Contact</NavLink></li>
          </ul>
        </nav>
        <div className='menu-btn' onClick={() => { setMenuOpen(!isMenuOpen) }}>
          <i className={isMenuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
        </div>
      </div>
    </header>
  );
};

export default Header;