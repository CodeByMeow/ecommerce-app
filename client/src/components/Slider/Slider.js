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

const Slider = () => {
  const contentSlides = [
    "/assets/banner/apple_banner.jpeg",
    "/assets/banner/oppo_banner.jpeg",
    "/assets/banner/samsung_zflip3_carousel_colorcombokv_ex_pc.jpeg",
  ];

  const slides = contentSlides.map((slide) => {
    return (
      <SwiperSlide>
        <div
          className="w-full img-banner"
          style={{
            backgroundImage: `url('${slide}')`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          {/* <img src={slide} alt="hero banner"></img> */}
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
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
