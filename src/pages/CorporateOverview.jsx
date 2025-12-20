import React from 'react';
import AboutSidebar from '../components/AboutSidebar';
import PageTitle from '../components/PageTitle';

const CorporateOverview = () => {
  return (
    <>
      <PageTitle title="Corporate Overview" />
  <div className="service-details-page">
    <div className="auto-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="service-details">
            <div className="image">
              <img src="/assets/images/CorporateOverview.jpg" alt="Introduction" />
            </div>
            <div className="text-block">
              <h2>Corporate Overview</h2>
              <div className="text">
                <p>
                  We specialize in Oil &amp; Gas and Industrial Maintenance Services, encompassing Civil,
                  Mechanical, Electrical, Piping, Instrumentation, Telecommunications, and Industrial Painting etc.
                </p>
                <p>
                  Building upon this solid foundation, we have expanded our presence to the Kingdom of Saudi Arabia,
                  with our Head Office strategically located in Al-Khobar. As an ISO 9001:2015 certified organization,
                  we take pride in our steadfast commitment to quality, safety, and operational excellence, earning the
                  trust of numerous esteemed clients as their preferred partner.
                </p>
                <p>
                  Our senior leadership team extend extensive expertise and industry insight. Over the years, we have
                  consistently delivered superior value, exemplifying technical proficiency, reliability, and a strong
                  client-centric approach in every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <AboutSidebar />
        </div>
      </div>
    </div>
  </div>
  </>
);
};

export default CorporateOverview;

