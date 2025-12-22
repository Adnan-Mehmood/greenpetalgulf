import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contactInfo, navLinks, socialLinks } from "../content";

import HiddenSidebar from "./HiddenSidebar";
import NavOverlay from "./NavOverlay";
import MobileMenuNav from "./MobileMenuNav";

const renderLink = (href, label) => {
  if (href && href.startsWith("/")) {
    return <Link to={href}>{label}</Link>;
  }
  return <a href={href ?? "#"}>{label}</a>;
};

const renderNavLinks = () =>
  navLinks.map((item) => (
    <li key={item.label} className={item.dropdown ? "dropdown" : undefined}>
      {renderLink(item.href, item.label)}
      {item.dropdown ? (
        <ul>
          {item.dropdown.map((child) => (
            <li key={child.label}>{renderLink(child.href, child.label)}</li>
          ))}
        </ul>
      ) : null}
    </li>
  ));

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // body class toggle (optional – agar CSS depend karti hai)
  // useEffect(() => {
  //   if (sidebarOpen) {
  //     document.body.classList.add("side-menu-visible");
  //   } else {
  //     document.body.classList.remove("side-menu-visible");
  //   }
  // }, [sidebarOpen]);

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.add("mobile-menu-visible");
    } else {
      document.body.classList.remove("mobile-menu-visible");
    }
  }, [mobileMenu]);

  const toggleDropdown = (menuIndex) => {
    if (openDropdown === menuIndex) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menuIndex);
    }
  };

  return (
    <header className="main-header header-style-one">
      <div className="header-top">
        <div className="auto-container">
          <div className="inner-container">
            <div className="left-column">
              <ul className="contact-info">
                <li>
                  <a href={`tel:${contactInfo.phone}`}>
                    <i className="fa fa-phone" />
                    {` ${contactInfo.phone}`}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${contactInfo.email}`}>
                    <i className="fa fa-envelope" />
                    {contactInfo.email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="right-column">
              <ul className="social-links">
                {socialLinks.map((social) => (
                  <li key={social.icon}>
                    <a href={social.href}>
                      <i className={social.icon} />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="get-quote-btn">
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header-upper">
        <div className="auto-container">
          <div className="inner-container">
            <div className="logo-box">
              <div className="logo">
                <a href="/">
                  <img
                    src="/assets/images/gpg_logo.png"
                    alt="Green Petals Gulf LLC"
                  />
                </a>
              </div>
            </div>
            <div className="right-column">
              <div className="nav-outer">
                <div
                  className="mobile-nav-toggler"
                  onClick={() => setMobileMenu(true)}
                >
                  <img
                    src="/assets/images/icon-bar-3.png"
                    alt="Navigation toggle"
                  />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation">{renderNavLinks()}</ul>
                  </div>
                </nav>
              </div>
              <div className="navbar-right-info">
                <div
                  className="side-menu-nav sidemenu-nav-toggler"
                  onClick={() => setSidebarOpen(true)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="/assets/images/icon-bar-3.png"
                    alt="Navigation toggle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky-header">
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              <div className="logo-box">
                <div className="logo">
                  <a href="/">
                    <img
                      src="/assets/images/gpg_logo.png"
                      alt="Green Petals Gulf LLC"
                    />
                  </a>
                </div>
              </div>
              <div className="right-column">
                <div className="nav-outer">
                  <div
                    className="mobile-nav-toggler"
                    onClick={() => setMobileMenu(true)}
                  >
                    <img
                      src="/assets/images/icon-bar-3.png"
                      alt="Navigation toggle"
                    />
                  </div>
                  <nav className="main-menu navbar-expand-md navbar-light" />
                </div>
                <div className="navbar-right-info">
                  <div className="side-menu-nav sidemenu-nav-toggler">
                    <img
                      src="/assets/images/icon-bar-3.png"
                      alt="Navigation toggle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        // className="mobile-menu"
        className={`mobile-menu ${mobileMenu ? "open" : ""}`}
      >
        <div className="menu-backdrop" onClick={() => setMobileMenu(false)} />
        <div className="close-btn">
          <span className="icon flaticon-remove" />
        </div>
        <MobileMenuNav
          toggleDropdown={toggleDropdown}
          openDropdown={openDropdown}
        />
      </div>

      <NavOverlay isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Hidden Sidebar */}
      <HiddenSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </header>
  );
};

export default Header;
