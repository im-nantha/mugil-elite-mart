import React from "react";
import "./DoubleBanner.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import kanban from "../../assets/images/banners/kanban-door-banner.jpg";
import kanb1 from "../../assets/images/banners/left-kanban.png";
import kanblogo from "../../assets/images/banners/kanb-logo.png";
import kanb2 from "../../assets/images/banners/right-kanban.png";
import kanb3 from "../../assets/images/banners/kanb-3.jpg";
import kanb4 from "../../assets/images/banners/kanb-4.jpg";
import kanb5 from "../../assets/images/banners/kanb-5.jpg";

const DoubleBanner = () => {
  return (
    <div className="hero-banner">
      <div className="sbc-title">
        <h2 className="text-center">In collab with Kan B</h2>
      </div>

      <div className="kanban-banner w-100 d-flex">
        <a href="/mugil-elite-mart/products#doors" className="left" title="click here!">
          <img src={kanban} alt="banner" className="hero-banner__img" loading="lazy" />
          <div className="kanb-logo">
            <img src={kanblogo} alt="kanb logo" className="w-100 h-100 rounded-0" />
          </div>
        </a>

        <div className="right">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            speed={1000}
            loop
          >
            <SwiperSlide>
              <img className="mugil-banner-img" src={kanb1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mugil-banner-img" src={kanb2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mugil-banner-img" src={kanb3} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mugil-banner-img" src={kanb4} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="mugil-banner-img" src={kanb5} alt="Slide 2" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DoubleBanner;
