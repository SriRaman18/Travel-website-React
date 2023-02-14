import React, { useEffect } from "react";

import about1 from "../img/about1.jpg";
import about2 from "../img/about2.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-text" data-aos="fade-right">
        <h2>More Information About The Best Beaches</h2>
        <p>
          You can find the most beautiful and pleasant places at the best prices
          with special discounts, you choose the place we will guide you all the
          way to wait, get your place now.
        </p>
        <button className="btn">Reserve a place</button>
      </div>

      <div className="about-image" data-aos="fade-left">
        <div className="small-img-container img-container">
          <img src={about1} alt="image1" className="small-img" />
        </div>
        <div className="big-img-container img-container">
          <img src={about2} alt="image2" className="big-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
