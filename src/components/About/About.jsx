import React from 'react';
import './About.css';
import AboutImg from '../../assets/img/lawyer-about.jpg'
import CivilImg from '../../assets/img/civilImg.png'
import EstateImg from '../../assets/img/estateImg.png'
import IntellImg from '../../assets/img/IntellectualImg.png'

const About = () => {
  return (
    <div className="about_container">
      <div className="content-container">
        <h1>
          Our Team of Skilled With <br />
          Extensive Knowledge.
        </h1>
        <p>
          Whether You Are Facing A Challenging Legal Dispute,
          <br /> Seeking Guidance In A Business Matter, We Are Here To Help.
        </p>
      </div>
      <div className="boxes">
        <div className="box">
          <img src={CivilImg} alt="" className='box-icons'/>
          <h2 className="box-title">Civil Litigation</h2>
          <p className="box-text">
            We Assist Individuals And Businesses In Safeguarding Their Creative
            Works
          </p>
        </div>
        <div className="box">
        <img src={EstateImg} alt="" className='box-icons'/>
          <h2 className="box-title">Estate Planning</h2>
          <p className="box-text">
            Your Wishes Are Honored With Our Through Estate Planning Services
          </p>
        </div>
        <div className="box">
        <img src={IntellImg} alt="" className='box-icons'/>
          <h2 className="box-title">Intellectual Property</h2>
          <p className="box-text">
            Businesses In Safeguarding Their Creative Works And Trade Secrets.
          </p>
        </div>
      </div>
      <h1>Your Trusted Legal Advisors</h1>
      <p className='second-text-info'>
        Our Team Of Skilled Attorneys Combines Legal Knowledge
        <br /> With A Commitment To Delivering Results.
      </p>
      <img src={AboutImg} alt="" className='about-image'/>
    </div>
  );
};

export default About;
