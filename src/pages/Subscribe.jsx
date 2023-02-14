import React from "react";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="inner-subscribe">
        <h2>Subscribe Our Newsletter</h2>
        <p data-aos="fade-right">
          Subscribe to our newsletter and get a special 30% discount
        </p>
        <div className="input-div" data-aos="fade-left">
          <input type="email" placeholder="Enter email" />
          <button className="subscribe-btn"> Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
