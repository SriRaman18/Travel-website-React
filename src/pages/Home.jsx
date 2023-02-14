import React from "react";

import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="inner-home" data-aos="fade-down">
        <h4>Discover your place</h4>
        <p className="title">
          Explore The <br />
          Best
          <span className="color-title">
            Beautiful <br />
            Beaches
          </span>
        </p>
        <button className="btn">Explore</button>
        <div
          className="social-icons"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <BsTwitter className="i" />
          <BsInstagram className="i" />
          <BsFacebook className="i" />
          <BsYoutube className="i" />
        </div>
      </div>
    </div>
  );
};

export default Home;
