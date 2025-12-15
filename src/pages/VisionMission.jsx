import AboutSidebar from '../components/AboutSidebar';

const VisionMission = () => (
  <div className="service-details-page">
    <div className="auto-container">
      <div className="row">
        <div className="col-lg-8">
          <div className="service-details">
            <div className="image">
              <img src="/assets/images/vision_Mission.jpg" alt="Our Vision and Mission" />
            </div>
            <div className="text-block">
              <h2>Our Vision &amp; Mission</h2>
              <div className="text">
                <h4>Mission</h4>
                <p>
                  To deliver high-quality, reliable, and sustainable services across diverse industries, empowering
                  clients to build, operate, and expand with confidence.
                </p>
                <h4>Vision</h4>
                <p>
                  To be a trusted leader across industries, recognized for delivering innovative, sustainable, and
                  high- impact solutions that drive growth, excellence, and positive change for businesses and
                  communities worldwide.
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
);

export default VisionMission;

