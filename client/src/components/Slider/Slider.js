import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = (props) => {
  const { contentSlides } = props;

  const slides = contentSlides.map((slide) => {
    return (
      <SwiperSlide>
        <div className="w-full img-banner">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url('${slide}')`,
              backgroundSize: "cover",
              backgroundPosition: "top center",
              backgroundRepeat: "no-repeat",
              // backgroundColor: "#8481b0",
              backgroundBlendMode: "fixed",
            }}
          >
            {/* <img src={slide} alt="hero banner"></img> */}
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-size": "30px",
          "--swiper-theme-color": "#4f46e5",
        }}
        spaceBetween={30}
        // cssMode={true}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // autoplay={false}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        /*  breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }} */
        className="heroSwiper"
      >
        {slides}
      </Swiper>
    </>
  );
};

export default Slider;
