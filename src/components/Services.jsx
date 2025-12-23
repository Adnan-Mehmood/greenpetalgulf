import React from 'react';
import { services } from '../content';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';

const Services = () => {
  const handleNavigation = useScrollToTop();

  return (
    <section className="services-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Services</div>
          <h2>Services We Provide</h2>
          <div className="text">
            Empowering industries through precision, safety, and certified quality services.
          </div>
        </div>
        <div className="row">
          {services.map((service) => (
            <div key={service.title} className="col-lg-4 col-md-6 service-block">
              <div className="inner-box">
                <div className="image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="lower-content">
                  <div className="icon">
                    <img src={service.icon} alt={service.title} />
                  </div>
                  <h4>{service.title}</h4>
                  <div className="text">
                    <p>{service.description}</p>
                  </div>
                  <div className="link">
                    <Link
                      to={service.link}
                      className="link-btn"
                      onClick={(event) => handleNavigation(event, service.link)}
                    >
                      <i className="fa-solid fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

