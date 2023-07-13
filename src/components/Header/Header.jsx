import React from 'react';
import './Header.css';
import LawyerImg from '../../assets/img/lawyer-header.jpg';

const Header = () => {
  return (
    <div className="header_container">
      <div className="content-container">
        <div className="text-container">
          <h1>
            Unbelievable Solutions <br />
            For All Legal Cases
          </h1>
          <p className='intro'>
            With a strong reputation for excellence and a track record of
            successful outcomes, we are here to protect your rights.
          </p>
          <button className='header-btn'>Call Now</button>
          <p className='achiev'>Our Achieved Awards</p>
        </div>
        <div className="image-container">
          <img src={LawyerImg} alt="" className="header-image" />
        </div>
      </div>
    </div>
  );
};

export default Header;
