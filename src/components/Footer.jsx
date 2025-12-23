import React from 'react';
import { Link } from 'react-router-dom';
import {
  contactInfo,
  footerAbout,
  socialLinks,
  usefulLinks,
} from '../content';
import useScrollToTop from '../../hooks/useScrollToTop';



const Footer = () => {
  const currentYear = new Date().getFullYear();
  const handleNavigation = useScrollToTop();
  const renderFooterLink = (href, label) =>
  href.startsWith('/') ? <Link to={href} onClick={(event) => handleNavigation(event, href)}>{label}</Link> : <Link to={href} onClick={(event) => handleNavigation(event, href)}>{label}</Link>;
  return (
    <>
      <footer className="main-footer">
        <div className="upper-box">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget about-widget">
                  <div className="logo">
                    <a href="/">
                      <img src="/assets/images/GPG-logo.png" alt="Green Petals Gulf LLC" />
                    </a>
                  </div>
                  <div className="text" style={{ textAlign: 'justify' }}>
                    {footerAbout}
                  </div>
                  <ul className="social-links">
                    {socialLinks.map((social) => (
                      <li key={social.icon}>
                        <Link to={social.href} >
                          <i className={social.icon} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                <div className="widget links-widget">
                  <h4 className="widget_title">Useful Links</h4>
                  <div className="widget-content">
                    <div className="row">
                      <div className="col-md-6">
                        <ul className="list">
                          {usefulLinks.slice(0, 3).map((item) => (
                            <li key={item.label}>{renderFooterLink(item.href, item.label)}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list">
                          {usefulLinks.slice(3).map((item) => (
                            <li key={item.label}>{renderFooterLink(item.href, item.label)}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="contact-widget widget">
                  <h4 className="widget_title">Get In Touch</h4>
                  <ul>
                    <li>
                      <i className="fa fa-map-marker-alt" />
                      {contactInfo.address}
                    </li>
                    <li>
                      <i className="fa fa-phone" />
                      {` ${contactInfo.phone}`}
                    </li>
                    <li>
                      <i className="fa fa-envelope" />
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="wrapper-box">
            <div className="row m-0 align-items-center justify-content-between">
              <div className="copyright-text">
                © Copyright {currentYear}. All Rights Reserved by Green Petals Gulf LLC.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;