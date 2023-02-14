import React from "react";

import place1 from "../img/place1.jpg";
import place2 from "../img/place2.jpg";
import place3 from "../img/place3.jpg";
import place4 from "../img/place4.jpg";
import place5 from "../img/place5.jpg";

import { BsArrowRight } from "react-icons/bs";

const Places = () => {
  return (
    <div id="places" className="places">
      <h2>Choose Your Place</h2>
      <div className="places-images">
        <div className="places-image" data-aos="fade-down">
          <img src={place1} alt="place1" />
          <div className="places-text">
            <div className="div">
              <h2>Bali</h2>
              <p>Indonesia</p>
            </div>
            <h3>$2499</h3>
          </div>
          <div className="star-div">
            <i className="fa-regular fa-star"></i>
            <p>4.8</p>
          </div>
          <button className="arrow-btn">
            <BsArrowRight className="i" />
          </button>
        </div>
        <div className="places-image" data-aos="fade-down" data-aos-delay="100">
          <img src={place2} alt="place1" />
          <div className="places-text">
            <div className="div">
              <h2>Bora Bora</h2>
              <p>Polinesia</p>
            </div>
            <h3>$1599</h3>
          </div>
          <div className="star-div">
            <i className="fa-regular fa-star"></i>
            <p>5.0</p>
          </div>
          <button className="arrow-btn">
            <BsArrowRight className="i" />
          </button>
        </div>
        <div className="places-image" data-aos="fade-down" data-aos-delay="200">
          <img src={place3} alt="place1" />
          <div className="places-text">
            <div className="div">
              <h2>Hawaii</h2>
              <p>EE.UU</p>
            </div>
            <h3>$3499</h3>
          </div>
          <div className="star-div">
            <i className="fa-regular fa-star"></i>
            <p>4.9</p>
          </div>
          <button className="arrow-btn">
            <BsArrowRight className="i" />
          </button>
        </div>
        <div className="places-image" data-aos="fade-down" data-aos-delay="300">
          <img src={place4} alt="place1" />
          <div className="places-text">
            <div className="div">
              <h2>White haven</h2>
              <p>Australia</p>
            </div>
            <h3>$2499</h3>
          </div>
          <div className="star-div">
            <i className="fa-regular fa-star"></i>
            <p>5.0</p>
          </div>
          <button className="arrow-btn">
            <BsArrowRight className="i" />
          </button>
        </div>
        <div className="places-image" data-aos="fade-down" data-aos-delay="400">
          <img src={place5} alt="place1" />
          <div className="places-text">
            <div className="div">
              <h2>Hyar</h2>
              <p>Croacia</p>
            </div>
            <h3>$1999</h3>
          </div>
          <div className="star-div">
            <i className="fa-regular fa-star"></i>
            <p>4.9</p>
          </div>
          <button className="arrow-btn">
            <BsArrowRight className="i" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Places;
