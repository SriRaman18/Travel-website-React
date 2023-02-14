import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-up">
        <div className="travel" data-aos="fade-down">
          <h2>Travel</h2>
          <p>Travel you choose the destination, we offer you the experience.</p>
          <div className="icons-div ">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <div className="about-div" data-aos="fade-down" data-aos-delay="100">
          <h2>About</h2>
          <a href="">About Us</a>
          <a href="">Features</a>
          <a href="">New & blog</a>
        </div>
        <div className="company" data-aos="fade-down" data-aos-delay="200">
          <h2>Company</h2>
          <a href="">Team</a>
          <a href="">Plans & pricing</a>
          <a href="">Become a member</a>
        </div>
        <div className="support" data-aos="fade-down" data-aos-delay="300">
          <h2>Support</h2>
          <a href="">FAQs</a>
          <a href="">Support Center</a>
          <a href="">Contact Us</a>
        </div>
      </div>
      <div className="footer-down">
        <p data-aos="fade-right" data-aos-offset="10">
          © 2023 Sri Raman. All rigths reserved.
        </p>
        <div data-aos="fade-left" data-aos-offset="10">
          <a href="">Terms & Agreements</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
