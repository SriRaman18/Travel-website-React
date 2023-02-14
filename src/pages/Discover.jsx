import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

// import required modules
import { EffectCards } from "swiper";

import discover1 from "../img/discover1.jpg";
import discover2 from "../img/discover2.jpg";
import discover3 from "../img/discover3.jpg";
import discover4 from "../img/discover4.jpg";

import experience1 from "../img/experience1.jpg";
import experience2 from "../img/experience2.jpg";

import video from "../video/video.mp4";

import { BsFillPauseCircleFill } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";

const Discover = () => {
  const [playing, setPlaying] = useState(false);

  function videohandle() {
    const video = document.getElementById("video-file");
    if (video.paused) {
      video.play();
      setPlaying(!playing);
    } else {
      video.pause();
      setPlaying(!playing);
    }
  }

  return (
    <div id="discover" className="discover-section fullsection">
      <div className="swiper-section">
        <p className="swiper-header">Discover the most attractive places</p>

        <Swiper
          effect={"cards"}
          loop={true}
          spaceBetween={32}
          grabCursor={true}
          // slidesPerView={"auto"}
          // coverflowEffect={{
          //   rotate: 0,
          //   depth: 100,
          // }}
          modules={[EffectCards]}
          className="swiper"
          data-aos="fade-down"
        >
          {/* <div className="swiper-wrapper"> */}
          {/* <div className="swiper-slide"> */}

          <SwiperSlide>
            <img src={discover1} alt="discover1" className="swiper-img" />
            <div className="div">
              <p>Bali</p>
              <small>24 tours available</small>
            </div>
          </SwiperSlide>
          {/* </div> */}
          <SwiperSlide>
            <img src={discover2} alt="discover2" className="swiper-img" />
            <div className="div">
              <p>Hawaii</p>
              <small>15 tours available</small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={discover3} alt="discover3" className="swiper-img" />
            <div className="div">
              <p>Hvar</p>
              <small>18 tours available</small>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src={discover4} alt="discover4" className="swiper-img" />
            <div className="div">
              <p>Whitehaven</p>
              <small>32 tours available</small>
            </div>
          </SwiperSlide>
          {/* </div> */}
        </Swiper>
      </div>
      <div className="experience-section">
        <p className="experience-header">
          With Our Experience <br />
          We Will Serve You
        </p>
        <div className="numbers-div">
          <div className="number" data-aos="fade-down">
            <h3>20</h3>
            <p>
              Year <br />
              Experience
            </p>
          </div>
          <div className="number" data-aos="fade-down" data-aos-delay="200">
            <h3>75</h3>
            <p>
              Complete <br />
              tours
            </p>
          </div>
          <div className="number" data-aos="fade-down" data-aos-delay="400">
            <h3>650+</h3>
            <p>
              Tourist <br />
              Destinations
            </p>
          </div>
        </div>
        <div className="experience-image ">
          <div
            className="img-container-two small-img-container-two"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <img src={experience2} alt="image1" className="small-img-two" />
          </div>
          <div
            className="img-container-two big-img-container-two"
            data-aos="fade-down"
          >
            <img src={experience1} alt="image2" className="big-img-two" />
          </div>
        </div>
      </div>
      <div className="experience-video">
        <h2>Video Tour</h2>
        <p data-aos="fade-right">
          Find out more with our video of the most beautiful and <br />
          pleasant places for you and your family.
        </p>
        <div className="video-container" data-aos="fade-left">
          {/* <ReactPlayer id="video-file" url="../video/video.mp4" controls /> */}
          <video id="video-file">
            <source src={video} type="video/mp4" />
          </video>
          <button
            className="btn video-btn"
            title={playing ? "pause" : "play"}
            onClick={videohandle}
          >
            {/* <i className="fa-regular fa-circle-play play-icon"></i> */}
            {playing ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discover;
