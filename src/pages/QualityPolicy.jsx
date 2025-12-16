import React from 'react';
import AboutSidebar from '../components/AboutSidebar';
import PageTitle from '../components/PageTitle';

const QualityPolicy = () => (
  <>
    <PageTitle title="Quality Policy" />
    <div className="service-details-page">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-details">
              <div className="image">
                <img src="/assets/images/quality_policy.jpg" alt="Quality Policy" />
              </div>
              <div className="text-block">
                <h2>Quality Policy</h2>
                <div className="text">
                  <p>
                    At Green Petals Gulf LLC, we are committed to delivering exceptional services across mechanical, civil,
                    marine, energy, industrial, and consultancy sectors. Our objective is to achieve excellence in every
                    project, ensuring that our solutions meet or exceed client expectations while complying with all applicable
                    regulatory and industry standards.
                  </p>
                  <p>Our Quality Policy is guided by the following principles:</p>
                  <ul className="list-styled pl-4">
                    <li>
                      <p>
                        Customer Focus: Understanding client needs and consistently delivering services that fulfill their
                        expectations.
                      </p>
                    </li>
                    <li>
                      <p>
                        Compliance and Standards: Adhering to all local, national, and international regulations, codes, and
                        best practices.
                      </p>
                    </li>
                    <li>
                      <p>
                        Continuous Improvement: Promoting a culture of continuous improvement in processes, systems, and
                        workforce capabilities to enhance efficiency and effectiveness.
                      </p>
                    </li>
                    <li>
                      <p>Skilled Workforce: Ensuring our personnel are competent, trained, and motivated to deliver high-quality outcomes.</p>
                    </li>
                    <li>
                      <p>
                        Innovation and Sustainability: Employing innovative solutions and sustainable practices to create value
                        while minimizing environmental impact.
                      </p>
                    </li>
                    <li>
                      <p>
                        Integrity and Accountability: Maintaining transparency, ethical practices, and accountability in all
                        business operations.
                      </p>
                    </li>
                    <li>
                      <p>
                        Risk Management: Identifying, assessing, and mitigating risks to ensure safe, reliable, and timely
                        delivery of services.
                      </p>
                    </li>
                  </ul>
                  <p className="mt-4 mb-0">
                    Green Petals Gulf LLC is dedicated to maintaining a robust Quality Management System (QMS) that supports
                    consistent quality performance, customer satisfaction, and the long-term growth of the organization.
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

export default QualityPolicy;


