/* eslint-disable react/prop-types */
import React from "react";
import { contactInfo, footerAbout } from "../content";

 const currentYear = new Date().getFullYear();
const HiddenSidebar = ({ isOpen, onClose }) => {
  return (
    <section
      // className="hidden-sidebar close-sidebar"
      className={`hidden-sidebar ${isOpen ? "open" : "close"}`}
    >
      <div className="wrapper-box">
        <div className="content-wrapper">
          <div className="hidden-sidebar-close" onClick={onClose}>
            <span className="fa fa-times" />
          </div>
          <div className="text-widget sidebar-widget">
            <div className="logo">
              <a href="/">
                <img
                  src="/assets/images/GPG-logo.png"
                  alt="Green Petals Gulf LLC"
                />
              </a>
            </div>
            <div className="text" style={{ textAlign: "justify" }}>
              {footerAbout}
            </div>
          </div>

          <div className="brochure-widget widget">
            <h4 className="widget_title">Contact Us</h4>
            <div className="widget-content">
              <div className="single-brochure">
                <a href={`tel:${contactInfo.phone}`}>
                  <i className="flaticon-phone-call" />
                  {contactInfo.phone}
                </a>
              </div>
              <div className="single-brochure">
                <a href={`mailto:${contactInfo.email}`}>
                  <i className="flaticon-mail" />
                  {contactInfo.email}
                </a>
              </div>
              <div className="single-brochure">
                <a href="#">
                  <i className="flaticon-location-pointer" />
                  {contactInfo.address}
                </a>
              </div>
            </div>
          </div>
          <div className="copyright-text">
            © Copyright {currentYear}. All Rights Reserved by Green Petals Gulf LLC.
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiddenSidebar;
