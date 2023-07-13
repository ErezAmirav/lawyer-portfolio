import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <span className="nav-title">Lawyers Inc.</span>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button>Call Now</button>
      </nav>
    </div>
  );
};

export default Navbar;
