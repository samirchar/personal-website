import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const [sectionList,setsectionList] = useState(
    [
      { "id":1, "title": "Home", "link": "#Home" },
      {"id":2, "title": "About", "link": "#About" },
      {"id":3, "title": "Publications", "link": "#Publications" },
      {"id":4, "title": "Projects", "link": "#Projects" },
      {"id":5, "title": "Blog", "link": "#Blog" },
      {"id":6, "title": "Contact", "link": "#Contact" }
    ]
  )

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);

  return (
    <nav>
      <div className='container nav__container'>
        <h1>Samir Char</h1>
        {/* Desktop nav menu */}
        <ul className='nav__menu nav__menu--desktop'>
          {sectionList.map((section) => (
            <li key={section.id}>
              <a href={section.link}>{section.title}</a>
            </li>
          ))}
        </ul>
        {/* Hamburger for mobile/tablet */}
        <button className={`nav__hamburger${menuOpen ? ' nav__hamburger--hide' : ''}`} aria-label='Toggle menu' onClick={handleMenuToggle}>
          <span className='nav__hamburger-bar'></span>
          <span className='nav__hamburger-bar'></span>
          <span className='nav__hamburger-bar'></span>
        </button>
      </div>
      {/* Overlay and sidebar menu for mobile/tablet */}
      <div className={`nav__overlay${menuOpen ? ' nav__overlay--open' : ''}`} onClick={() => setMenuOpen(false)}></div>
      <div className={`nav__menu nav__menu--mobile${menuOpen ? ' nav__menu--open' : ''}`}>
        <div className='nav__menu__logo'>
          <span style={{fontSize: '2.5rem', color: '#fff', fontWeight: 700}}>SC</span>
        </div>
        <button className='nav__menu__close' aria-label='Close menu' onClick={() => setMenuOpen(false)}>&times;</button>
        <ul className='nav__menu__list'>
          {sectionList.map((section) => (
            <li key={section.id}>  
              <a href={section.link}>{section.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
