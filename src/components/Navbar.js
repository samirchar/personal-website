import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";
import AOS from 'aos';

export default function Navbar() {

  const [sectionList,setsectionList] = useState(
    [
      { "id":1, "title": "Home", "link": "#Home" },
      {"id":2, "title": "About", "link": "#About" },
      {"id":3, "title": "Publications", "link": "#Publications" },
      {"id":4, "title": "Projects", "link": "#Projects" },
      {"id":5, "title": "Outreach", "link": "#Outreach" },
      {"id":6, "title": "Contact", "link": "#Contact" }
    ]
  )

  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);

  // Helper to handle nav link clicks
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };
  

  return (
    <nav>
      <div className='container nav__container'>
        <h1>Samir Char</h1>
        {/* Desktop nav menu */}
        <ul className='nav__menu nav__menu--desktop'>
          {sectionList.map((section) => (
            <li key={section.id}>
              <a href={section.link} onClick={e => handleNavClick(e, section.link.substring(1))}>{section.title}</a>
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
        <div className='nav__menu__centered'>
          <ul className='nav__menu__list'>
            {sectionList.map((section) => (
              <li key={section.id}>  
                <a href={section.link} onClick={e => handleNavClick(e, section.link.substring(1))}>{section.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <button className='nav__menu__close' aria-label='Close menu' onClick={() => setMenuOpen(false)}>&times;</button>
      </div>
    </nav>
  )
}
