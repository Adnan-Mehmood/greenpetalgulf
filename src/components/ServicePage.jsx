import React from 'react';
import PropTypes from 'prop-types';
import ServicesSidebar from './ServicesSidebar';

const ServicePage = ({ title, heroImage, mainImage, sections }) => (
  <>
    <section className="page-title" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="auto-container">
        <div className="content-box">
          <div className="content-wrapper">
            <div className="title">
              <h1>{title}</h1>
            </div>
            <ul className="bread-crumb style-two">
              <li>
                <a href="/">Home </a>
              </li>
              <li className="active">{title}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div className="service-details-page">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-details">
              <div className="image">
                <img src={mainImage} alt={title} />
              </div>
              {sections.map((section) => (
                <div className="text-block" key={section.heading}>
                  <h2>{section.heading}</h2>
                  <div className="text">
                    {section.intro ? <p>{section.intro}</p> : null}
                    {section.items ? (
                      <ul className="list-styled pl-4">
                        {section.items.map((item) => (
                          <li key={item}>
                            <p>{item}</p>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <ServicesSidebar />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default ServicePage;

ServicePage.propTypes = {
  title: PropTypes.string.isRequired,
  heroImage: PropTypes.string,
  mainImage: PropTypes.string,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      intro: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};

