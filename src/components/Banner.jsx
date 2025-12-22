import React, {useRef} from 'react';
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { slides } from '../content';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";


const Banner = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="banner-section">
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={1}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.heading}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${slide.image})`,
          }}
        >
          <div className="content-outer">
            <div className="content-box">
              <div className="inner text-center">
                <h4>{slide.eyebrow}</h4>
                <div className="text">{slide.text}</div>
                <h1>{slide.heading}</h1>
                <div className="link-box">
                  <a href="contact-us.html" className="theme-btn style-two">
                    <span> Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
      
      <div className="banner-slider-nav">
        <div
          ref={prevRef}
          className="banner-slider-control banner-slider-button-prev"
        >
          <span>
            <i className="fa-solid fa-arrow-left" />
          </span>
        </div>

        <div
          ref={nextRef}
          className="banner-slider-control banner-slider-button-next"
        >
          <span>
            <i className="fa-solid fa-arrow-right" />
          </span>
        </div>
      </div>
    </Swiper>


    {/* <div className="swiper-container banner-slider">
      <div className="swiper-wrapper">
        {slides.map((slide) => (
          <div
            key={slide.heading}
            className="swiper-slide"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${slide.image})`,
            }}
          >
            <div className="content-outer">
              <div className="content-box">
                <div className="inner text-center">
                  <h4>{slide.eyebrow}</h4>
                  <div className="text">{slide.text}</div>
                  <h1>{slide.heading}</h1>
                  <div className="link-box">
                    <a href="contact-us.html" className="theme-btn style-two">
                      <span> Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="banner-slider-nav">
      <div className="banner-slider-control banner-slider-button-prev">
        <span>
          <i className="fa-solid fa-arrow-left" />
        </span>
      </div>
      <div className="banner-slider-control banner-slider-button-next">
        <span>
          <i className="fa-solid fa-arrow-left" />
        </span>
      </div>
    </div> */}
  </section>
  );
};

export default Banner;

