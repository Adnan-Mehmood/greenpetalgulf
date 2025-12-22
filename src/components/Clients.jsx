import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { clients } from "../content";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Clients = () => {
  return (
    <section className="client-focuse">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Client Focused</div>
          <h2>Our Clients</h2>
          {/* <div className="swiper clients-swiper">
            <div className="swiper-wrapper">
              {clients.concat(clients).map((logo, index) => (
                <div key={`${logo}-${index}`} className="swiper-slide">
                  <img src={logo} alt="Client" />
                </div>
              ))}
            </div>
          </div> */}

          <Swiper
            className="clients-swiper"
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={6}
            loop={true}
            preloadImages={false}
            centeredSlides={false}
            resistance={true}
            resistanceRatio={0.6}
            speed={1400}
            effect="slide"
            autoplay={{ delay: 1, disableOnInteraction: false }}
          >
            {clients.concat(clients).map((logo, index) => (
              <SwiperSlide key={`${logo}-${index}`}>
                <img src={logo} alt="Client" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Clients;
