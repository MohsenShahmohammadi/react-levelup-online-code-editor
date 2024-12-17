import React from "react";
import './Nav.css'

const Nav = () => {
  return (
    <>
      <nav className="nav-menu">
        <a href="/" className="nav-menu-item">
          Home
        </a>
        <a href="/" className="nav-menu-item">
          Features
        </a>
        <a href="/" className="nav-menu-item">
          Services
        </a>
        <a href="/" className="nav-menu-item">
          About us
        </a>
        <a href="/" className="nav-menu-item login">
          LOGIN
        </a>
      </nav>
    </>
  );
};

export default Nav;
