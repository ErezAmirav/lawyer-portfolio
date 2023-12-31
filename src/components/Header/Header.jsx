import React from 'react';
import './Header.css';
import LawyerImg from '../../assets/img/lawyer-header.jpg';
import Reward1 from '../../assets/img/reward1.png';
import Reward2 from '../../assets/img/reward2.png';

const Header = () => {
  return (
    <header>
      <div className="header_container">
        <div className="content-container">
          <div className="text-container">
            <h1>
              Unbelievable Solutions <br />
              For All Legal Cases
            </h1>
            <div className="desktopIntro">
              <p className="intro">
                With a strong reputation for excellence and a track record of
                successful outcomes, we are here to protect your rights.
              </p>
              <button className="main-button header-btn">Call Now</button>
            </div>
            <p className="achiev">Our Achieved Awards</p>
            <div className="rewards">
              <img src={Reward1} alt="" className="reward reward1" />
              <img src={Reward2} alt="" className="reward reward2" />
            </div>
          </div>
          <div className="image-container">
            <img src={LawyerImg} alt="" className="header-image" />
          </div>
          <div className="text-container mobileIntro">
              <p className="intro">
                With a strong reputation for excellence and a track record of
                successful outcomes, we are here to protect your rights.
              </p>
              <button className="main-button header-btn">Call Now</button>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
