/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const MobileMenuNav = ({ toggleDropdown, openDropdown }) => {
  return (
    <nav className="menu-box">
      <div className="nav-logo">
        <a href="/">
          <img src="/assets/images/GPG-logo.png" alt="Green Petals Gulf LLC" />
        </a>
      </div>
      <div className="menu-outer">
        <div
          className="collapse navbar-collapse show clearfix"
          id="navbarSupportedContent"
        >
          <ul className="navigation">
            <li className="current">
              <a href="/">Home</a>
            </li>
            <li className="dropdown">
              <a href="#" onClick={() => toggleDropdown(1)}>
                About Us
              </a>
              <ul style={{ display: openDropdown === 1 ? "block" : "none" }}>
                <li>
                  <Link to="/corporate-overview">Corporate Overview</Link>
                </li>
                <li>
                  <Link to="/our-vision-mission">Our Vision & Mission</Link>
                </li>
                <li>
                  <Link to="/core-values">Core Values</Link>
                </li>
              </ul>
              <div
                // className="dropdown-btn"
                onClick={() => toggleDropdown(1)}
                className={`dropdown-btn ${openDropdown === 1 ? "open" : ""}`}
              >
                <span className="fa fa-angle-right"></span>
              </div>
            </li>

            <li className="dropdown">
              <a href="#" onClick={() => toggleDropdown(2)}>
                Services
              </a>
              <ul style={{ display: openDropdown === 2 ? "block" : "none" }}>
                <li>
                  <Link to="/services/industrial-services">
                    Industrial Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/fire-security-services">
                    Fire & Security Services
                  </Link>
                </li>
                <li>
                  <Link to="/services/environmental-green-services">
                    Environmental & Green Services
                  </Link>
                </li>
                <li>
                  <Link to="services/maintenance-operation">
                    Maintenance &amp; Operation (O&amp;M)
                  </Link>
                </li>
                <li>
                  <Link to="services/pipeline-welding-erection ">
                    Pipeline Welding &amp; Erection
                  </Link>
                </li>
                <li>
                  <Link to="services/hvac-services">HVAC Services</Link>
                </li>
                <li>
                  <Link to="services/equipment-skilled-workforce">
                    Equipment &amp; Skilled Workforce
                  </Link>
                </li>
                <li>
                  <Link to="services/professional-services">
                    Professional Services
                  </Link>
                </li>
              </ul>
              <div
                // className="dropdown-btn"
                onClick={() => toggleDropdown(2)}
                className={`dropdown-btn ${openDropdown === 2 ? "open" : ""}`}
              >
                <span className="fa fa-angle-right"></span>
              </div>
            </li>
            <li>
              <Link to="hse-policy">HSE Policy</Link>
            </li>
            <li>
              <Link to="quality-policy">Quality Policy</Link>
            </li>
            <li>
              <Link to="blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu-outer" />
      <div className="social-links">
        <ul className="clearfix">
          <li>
            <a href="#">
              <span className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-pinterest-p" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <span className="fab fa-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileMenuNav;
