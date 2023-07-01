import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
            <h1>Samir Char</h1>
            <ul>
              <li><a href='#home'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#blog'>Blog</a></li>
              <li><a href='#contact'>Contact</a></li>
            </ul>
      </nav>
    </div>
  )
}
