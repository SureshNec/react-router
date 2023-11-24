import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className='portfolio'>
      <h3>Portfolio</h3>
      <nav>
        <NavLink to='WebSite'>Website</NavLink>
        <NavLink to='GraphicDesign'>GraphicDesign</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}

export default Portfolio;
