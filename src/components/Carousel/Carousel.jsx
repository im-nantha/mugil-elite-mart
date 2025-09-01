import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.scss"

function Carousel() {
  return (
    <section className="mugil_banner">
      <div className="mugil_banner__wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          speed={1000}
          loop
        >
          <SwiperSlide>
            <img className="mugil-banner-img" src="https://themesflat.co/html/vineta/images/slider/florist/slider-1.jpg" alt="Slide 1" />
            <div className="mugil-carousel-text-wrapper">
              <h1 >Fresh Blooms, Daily Joy</h1>
              <p>
                Fresh flowers, handpicked daily to brighten your every moment..
              </p>
              <a className="mugil-banner-button" href="/" data-discover="true">Know more</a>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <img className="mugil-banner-img" src="https://themesflat.co/html/vineta/images/slider/florist/slider-2.jpg" alt="Slide 2" />
            <div className="mugil-carousel-text-wrapper">
              <h1 >Bloom with us</h1>
              <p>Fresh flowers, handpicked daily to brighten your every moment..</p>
              <a className="mugil-banner-button" href="/" data-discover="true">Know more</a>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
}

export default Carousel;
