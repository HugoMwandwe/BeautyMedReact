import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // We'll create this next

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          BeautyMed
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/salon" onClick={toggleMenu}>Salon</Link>
        </li>
        <li>
          <Link to="/doctor" onClick={toggleMenu}>Doctor</Link>
        </li>
        <li>
          <button className="login-button">Login</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 