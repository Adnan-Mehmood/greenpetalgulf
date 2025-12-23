import React from 'react';
import { newsItems } from '../content';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';

const NewsSection = () => {
    const handleNavigation = useScrollToTop();
    return (
  <section className="news-section default-style">
    <div className="auto-container">
      <div className="sec-title text-center">
        <div className="sub-title">News &amp; Updates</div>
        <h2>Latest From Our Blog</h2>
      </div>
      <div className="row">
        {newsItems.map((item) => (
          <div key={item.title} className="col-lg-4 news-block">
            <div className="inner-box">
              <div className="image">
                <img src={item.image} alt={item.title} />
                <div className="overlay-two">
                  <Link to={item.image} className="lightbox-image" data-fancybox="gallery">
                    <span className="fa-solid fa-magnifying-glass-plus" />
                  </Link>
                  <Link to={item.link} onClick={(event) => handleNavigation(event, item.link)} className="link">
                    <span className="fa-solid fa-link" />
                  </Link>
                </div>
              </div>
              <div className="lower-content">
                <h3>
                  <Link to={item.link} onClick={(event) => handleNavigation(event, item.link)}>{item.title}</Link>
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    );
  };

export default NewsSection;

