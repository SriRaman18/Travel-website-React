import React, { useState, useEffect } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

const Nav = ({ changeTheme, currentTheme }) => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const [scroll, setScroll] = useState(false);

  function scrollHeader() {
    if (this.scrollY >= 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }

  window.addEventListener("scroll", scrollHeader);

  return (
    <div className={scroll ? "nav scrolled" : "nav"} id="#">
      <div className="logo">
        <p>Travel</p>
      </div>
      <div className="menu-btn" onClick={() => setShowSideNavbar(true)}>
        {/* <i className="fa-solid fa-bars"></i> */}

        <GiHamburgerMenu />
      </div>
      <div className={showSideNavbar ? "sub-menu show" : "sub-menu"}>
        <div className="close-btn" onClick={() => setShowSideNavbar(false)}>
          <MdClose />
        </div>
        <ul className="ul">
          <div className="li">
            <a href="#home" className="a-li a-home">
              HOME
            </a>
          </div>

          <div className="li">
            <a href="#about" className="a-li a-about">
              ABOUT
            </a>
          </div>

          <div className="li">
            <a href="#discover" className="a-li a-discover">
              DISCOVER
            </a>
          </div>
          <div className="li">
            <a href="#places" className="a-li a-places">
              PLACES
            </a>
          </div>
        </ul>
        <div className="icon">
          <div className="mode">
            {currentTheme === "dark" ? "Light Mode" : "Dark Mode"}
          </div>

          <div className="moon-sun" onClick={changeTheme}>
            {currentTheme === "dark" ? (
              <ImSun className="sun" />
            ) : (
              <BsFillMoonFill className="moon" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
