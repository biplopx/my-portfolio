import React from 'react';
import { useState } from 'react';
import './Header.css';
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  console.log(isMenuOpen);
  return (
    <header>
      <div className="container">
        <h1 className='logo'>MBH</h1>
        <nav className={isMenuOpen ? "navbar menu-open" : "navbar"}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Skills</a></li>
            <li><a href="/">Projects</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Contact</a></li>
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