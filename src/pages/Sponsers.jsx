import React from "react";

import sponser1 from "../img/sponsors1.png";
import sponser2 from "../img/sponsors2.png";
import sponser3 from "../img/sponsors3.png";
import sponser4 from "../img/sponsors4.png";
import sponser5 from "../img/sponsors5.png";

const Sponsers = () => {
  return (
    <div className="sponsers ">
      <div data-aos="fade-down">
        <img src={sponser1} alt="sponser1" />
      </div>
      <div data-aos="fade-down" data-aos-delay="100">
        <img src={sponser2} alt="sponser2" />
      </div>
      <div data-aos="fade-down" data-aos-delay="200">
        <img src={sponser3} alt="sponser3" />
      </div>
      <div data-aos="fade-down" data-aos-delay="300">
        <img src={sponser4} alt="sponser4" />
      </div>
      <div data-aos="fade-down" data-aos-delay="400">
        <img src={sponser5} alt="sponser5" />
      </div>
    </div>
  );
};

export default Sponsers;
