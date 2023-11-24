import "./Navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/Portfolio'>Portfolio</NavLink>
        <NavLink to='/About'>About</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
