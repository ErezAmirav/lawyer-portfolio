import React from 'react';
import { useRef } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  const hideNavbar =()=>{

    navRef.current.classList.remove("responsive_nav")

  }


  return (
    <div className="nav-container">
      <nav className="nav" ref={navRef}>
        <h3 className="nav-title">Lawyers Inc.</h3>
        <ul>
          <li>
            <a href="#" onClick={hideNavbar}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={hideNavbar}>About</a>
          </li>
          <li>
            <a href="#reviews" onClick={hideNavbar}>Reviews</a>
          </li>
          <li>Contact</li>
        </ul>
        <button className='main-button nav-call-btn'>Call Now</button>
        <button
        className="nav-btn nav-close-btn"
        onClick={showNavbar}>
        <FaTimes />
      </button>
      </nav>
      <button
      className="nav-btn"
      onClick={showNavbar}>
      <FaBars />
    </button>
    </div>
  );
};

export default Navbar;
