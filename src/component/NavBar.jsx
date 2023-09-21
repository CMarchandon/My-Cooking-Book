import React, { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

      return (
        
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a href="/Home"><img id="logo" src="public/logo.svg"/></a>
              <button className={`navbar-toggler ${isOpen ? 'active' : ''}`} onClick={toggleNavbar}>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
            <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
              <ul className="navbar-links">
              <li id="new-recipe"><a href="/CreateRecipe">Add a new recipe</a></li>
                <li id="home-phone"><a href="/Home">Home</a></li>
                <li><a href="/Discover">Discover</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/MyProfil"><img src="public/assets/icons/user logo navabr.svg"/></a></li>
              </ul>
            </div>
          </div>
        </nav>
      );
      }