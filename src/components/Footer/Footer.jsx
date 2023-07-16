import React from 'react';
import './Footer.css';

import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { BiLogoFacebook, BiLogoTwitter } from 'react-icons/bi';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          <div className="sb__footer-links-div">
            <h4>Lawyers Inc.</h4>
            <a href="/lawyer-portfolio">
              <div className="reviewer-details">
                <FiPhoneCall className="footer-icon" />
                <p>
                  <p className="reviewer-name">Phone</p>
                  <p className="reviewer-company">(972) 5551245</p>
                </p>
              </div>
            </a>
            <a href="/lawyer-portfolio">
              <div className="reviewer-details">
                <HiOutlineMail className="footer-icon" />
                <p>
                  <p className="reviewer-name">Email</p>
                  <p className="reviewer-company">Lawyers@inc.com</p>
                </p>
              </div>
            </a>
            <a href="/lawyer-portfolio">
              <div className="reviewer-details">
                <SlLocationPin className="footer-icon" />
                <p>
                  <p className="reviewer-name">Address</p>
                  <p className="reviewer-company">
                    Heleni Hamalka 34, Jerusalem, Israel
                  </p>
                </p>
              </div>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Help</h4>
            <a href="/lawyer-portfolio">
              <p>Costumer Support</p>
            </a>
            <a href="/lawyer-portfolio">
              <p>Terms & Conditions</p>
            </a>
            <a href="/lawyer-portfolio">
              <p>Privacy Policy</p>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Social</h4>
            <a href="/lawyer-portfolio">
            <div className="social-link">
              <p>
                <PiInstagramLogoFill className="social-icon" />
                Instagram
              </p>
              </div>
            </a>
            <a href="/lawyer-portfolio">
            <div className="social-link">
              <p>
                <BiLogoFacebook className="social-icon" />
                Facebook
              </p>
              </div>
            </a>
            <a href="/lawyer-portfolio">
            <div className="social-link">
              <p>
                <BiLogoTwitter className="social-icon" />
                Twitter
              </p>
              </div>
            </a>
          </div>
          <div className="sb__footer-links-div">
            <h4>Subscribe To Our Newsletter</h4>
            <a href="/lawyer-portfolio">
              <p>
                The Latest Insights, Resources, Expert <br /> Opinions And
                Company News
              </p>
            </a>
            <div className="input-box">
              <input
                type="text"
                placeholder="Example@gmail.com"
                className="input-field"
              />
              <button className="input-btn">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
