import React, { useState, useEffect } from 'react';
import './Reviews.css';
import { BsStarFill } from 'react-icons/bs';
import YcImg from '../../assets/img/Clients/yc.png';
import OlImg from '../../assets/img/Clients/ol.png';
import RtImg from '../../assets/img/Clients/rt.png';
import OiImg from '../../assets/img/Clients/oi.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Reviews = () => {
  const [spaceBet, setSpaceBet] = useState(50);
  const [slidePer, setSlidePer] = useState(4);
  const updateSlider = () => {
    if (window.innerWidth >= 768) {
      setSpaceBet(50);
      setSlidePer(4);
    } else {
      setSpaceBet(5);
      setSlidePer(1);
    }
  };

  useEffect(() => {
    updateSlider();
    window.addEventListener('resize', updateSlider);
    return () => {
      window.removeEventListener('resize', updateSlider);
    };
  }, []);

  return (
    <section id="reviews">
      <div className="reviews_container">
        <h1>What My Clients Are Saying</h1>
        <p className="reviews-title-text">
          With Our Client-Centered Approach, We Provide Personalized Legal
          Strategies Tailored
          <br /> To Achieve The Best Possible Outcomes For You.
        </p>

        <div className="reviews">
          <Swiper spaceBetween={spaceBet} slidesPerView={slidePer}>
            <SwiperSlide>
              <div className="review">
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <p className="review-text">
                  "I Couldn't Be Happier With The Exceptional Legal
                  Representation I Received From Lawyers Inc."
                </p>
                <div className="reviewer-details">
                  <img src={YcImg} alt="" />
                  <span>
                    <p className="reviewer-name">Yossi Cohen</p>
                    <p className="reviewer-company">CEO Universal</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review">
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <p className="review-text">
                  "Their Corporate Law Expertise And Attention To Detail Helped
                  Us Navigate Complex Legal Matters With Ease."
                </p>
                <div className="reviewer-details">
                  <img src={OlImg} alt="" />
                  <span>
                    <p className="reviewer-name">Or Levy</p>
                    <p className="reviewer-company">CEO Terra</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review">
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />

                <p className="review-text">
                  "Their Team Of Family Law Attorneys Not Only Possessed A Deep
                  Understanding Of The Law."
                </p>
                <div className="reviewer-details">
                  <img src={RtImg} alt="" />
                  <span>
                    <p className="reviewer-name">Ron Ten</p>
                    <p className="reviewer-company">CEO Lala</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="review">
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />
                <BsStarFill className="star-icon" />

                <p className="review-text">
                  "I Cannot Thank Them Enough For Their Exceptional Service,
                  Their Team Was Truly Cared About Our Success."
                </p>
                <div className="reviewer-details">
                  <img src={OiImg} alt="" />
                  <span>
                    <p className="reviewer-name">Ofira Insky</p>
                    <p className="reviewer-company">CEO Universal</p>
                  </span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
