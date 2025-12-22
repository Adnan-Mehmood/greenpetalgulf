import React from "react";
import { certifications } from "../content";

import useFancybox from "./useFancybox";

const Certifications = () => {
  const [fancyboxRef] = useFancybox({
    // Your custom options
  });

  return (
    <section className="certification-section">
      <div className="auto-container">
        <div className="sec-title text-center">
          <div className="sub-title">Certification</div>
          <h2>ISO Certification</h2>
        </div>
        <div className="certification-wrap" ref={fancyboxRef}>
          <div className="row">
            {certifications.map((cert) => (
              <div key={cert.alt} className="col-lg-4 certification-block">
                <div className="certification-box">
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noreferrer"
                    data-fancybox="certification"
                  >
                    <img src={cert.image} alt={cert.alt} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
