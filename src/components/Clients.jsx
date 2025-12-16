import React from 'react';
import { clients } from '../content';

const Clients = () => (
  <section className="client-focuse">
    <div className="auto-container">
      <div className="sec-title text-center">
        <div className="sub-title">Client Focused</div>
        <h2>Our Clients</h2>
        <div className="swiper clients-swiper">
          <div className="swiper-wrapper">
            {clients.concat(clients).map((logo, index) => (
              <div key={`${logo}-${index}`} className="swiper-slide">
                <img src={logo} alt="Client" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Clients;

