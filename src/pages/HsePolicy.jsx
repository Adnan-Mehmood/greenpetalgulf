import AboutSidebar from '../components/AboutSidebar';
import PageTitle from '../components/PageTitle';

const HsePolicy = () => (
  <>
    <PageTitle title="HSE Policy" />
    <div className="service-details-page">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-details">
              <div className="image">
                <img src="/assets/images/HSE_Policy.jpg" alt="HSE Policy" />
              </div>
              <div className="text-block">
                <h2>HSE Policy</h2>
                <div className="text">
                  <p>
                    At Green Petals Gulf LLC, we are committed to providing a safe, healthy, and environmentally responsible
                    working environment across all our operations in mechanical, civil, marine, energy, industrial, and
                    consultancy sectors. Our goal is to prevent workplace injuries, protect the environment, and promote a
                    culture of safety and sustainability.
                  </p>
                  <p>Our HSE Policy is guided by the following principles:</p>
                  <ul className="list-styled pl-4">
                    <li>
                      <h5>Leadership Commitment:</h5>
                      <p>
                        Senior management leads by example, demonstrating commitment to HSE objectives and integrating safety
                        into all business decisions.
                      </p>
                    </li>
                    <li>
                      <h5>Compliance:</h5>
                      <p>
                        Adherence to all applicable local, national, and international HSE regulations, standards, and industry
                        best practices.
                      </p>
                    </li>
                    <li>
                      <h5>Risk Management:</h5>
                      <p>
                        Identifying, assessing, and mitigating potential risks to prevent accidents, incidents, and
                        environmental harm.
                      </p>
                    </li>
                    <li>
                      <h5>Continuous Improvement:</h5>
                      <p>
                        Regularly reviewing and improving HSE processes, systems, and performance to achieve excellence in
                        safety and environmental protection.
                      </p>
                    </li>
                    <li>
                      <h5>Employee Engagement:</h5>
                      <p>Providing training, resources, and support to empower employees to work safely and responsibly.</p>
                    </li>
                    <li>
                      <p>
                        Integrity and Accountability: Maintaining transparency, ethical practices, and accountability in all
                        business operations.
                      </p>
                    </li>
                    <li>
                      <h5>Incident Reporting and Investigation:</h5>
                      <p>
                        Prompt reporting, investigation, and corrective action for all HSE incidents to prevent recurrence.
                      </p>
                    </li>
                    <li>
                      <h5>Environmental Stewardship:</h5>
                      <p>
                        Minimizing the environmental impact of our operations through sustainable practices and responsible
                        resource management.
                      </p>
                    </li>
                    <li>
                      <h5>Culture of Safety:</h5>
                      <p>
                        Promoting awareness, accountability, and proactive participation in HSE initiatives across all levels of
                        the organization.
                      </p>
                    </li>
                  </ul>
                  <p className="mt-4 mb-0">
                    Green Petals Gulf LLC is dedicated to implementing and maintaining a robust HSE management system that
                    safeguards people, the environment, and assets, while fostering a culture of safety, health, and
                    sustainability in every aspect of our business.
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

export default HsePolicy;


