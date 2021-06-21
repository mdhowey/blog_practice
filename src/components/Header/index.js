import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div className="headerContainer">
      <div className="col-30">
        Michael Howey
      </div>
      
      <ul className="col-70">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </div>   
  )

 }

export default Header