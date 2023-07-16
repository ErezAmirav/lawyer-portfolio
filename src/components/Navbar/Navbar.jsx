import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="nav">
        <span className="nav-title">Lawyers Inc.</span>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>Contact</li>
        </ul>
        <button className='main-button'>Call Now</button>
      </nav>
    </div>
  );
};

export default Navbar;
