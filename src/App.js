import React, { useState, useEffect } from "react";

import "./App.css";

import Nav from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";

import Discover from "./pages/Discover";

import Places from "./pages/Places";

import Subscribe from "./pages/Subscribe";

import Sponsers from "./pages/Sponsers.jsx";

import Footer from "./pages/Footer.jsx";

import Aos from "aos";

import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");

    // if (theme === "dark") {
    //   document.documentElement.setAttribute("data-theme", "dark");
    // } else {
    //   document.documentElement.setAttribute("data-theme", "light");
    // }
  };

  return (
    <div data-theme={theme} className="all-sections app">
      <Nav changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <About />
      <Discover />
      <Places />
      <Subscribe />
      <Sponsers />
      <Footer />
    </div>
  );
}

export default App;
