import React from 'react';
import AboutSidebar from '../components/AboutSidebar';
import PageTitle from '../components/PageTitle';

const CoreValues = () => { 
  return (
    <>
           <PageTitle title="Core Values" />
  <div className="service-details-page">
    <div className="auto-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="service-details">
            <div className="image">
              <img src="/assets/images/image-intro.jpg" alt="Core Values" />
            </div>
            <div className="text-block">
              <h2>Core Values</h2>
              <div className="text">
                <ul>
                  <li>
                    <h5>Integrity:</h5>
                    <p>We act with honesty, transparency, and accountability in all our dealings.</p>
                  </li>
                  <li>
                    <h5>Innovation:</h5>
                    <p>We embrace creativity and forward-thinking solutions to drive progress and value.</p>
                  </li>
                  <li>
                    <h5>Excellence:</h5>
                    <p>We strive for the highest standards in quality, performance, and service delivery.</p>
                  </li>
                  <li>
                    <h5>Sustainability:</h5>
                    <p>
                      We are committed to environmentally responsible practices that benefit communities and the planet.
                    </p>
                  </li>
                  <li>
                    <h5>Collaboration:</h5>
                    <p>
                      We believe in teamwork, partnership, and building strong, long-term relationships with clients and
                      stakeholders.
                    </p>
                  </li>
                  <li>
                    <h5>Reliability:</h5>
                    <p>We deliver dependable and consistent solutions that our clients can trust.</p>
                  </li>
                </ul>
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
export default CoreValues;

