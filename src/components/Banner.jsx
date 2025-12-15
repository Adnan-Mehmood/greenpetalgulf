import { slides } from '../content';

const Banner = () => (
  <section className="banner-section">
    <div className="swiper-container banner-slider">
      <div className="swiper-wrapper">
        {slides.map((slide) => (
          <div
            key={slide.heading}
            className="swiper-slide"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${slide.image})`,
            }}>
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
    </div>
  </section>
);

export default Banner;

