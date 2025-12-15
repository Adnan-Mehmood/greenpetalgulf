import { Link } from 'react-router-dom';
import {
  contactInfo,
  navLinks,
  socialLinks,
} from '../content';

const renderLink = (href, label) => {
  if (href && href.startsWith('/')) {
    return <Link to={href}>{label}</Link>;
  }
  return <a href={href ?? 'javascript:void(0)'}>{label}</a>;
};

const renderNavLinks = () =>
  navLinks.map((item) => (
    <li key={item.label} className={item.dropdown ? 'dropdown' : undefined}>
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

const Header = () => (
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
                <img src="/assets/images/gpg_logo.png" alt="Green Petals Gulf LLC" />
              </a>
            </div>
          </div>
          <div className="right-column">
            <div className="nav-outer">
              <div className="mobile-nav-toggler">
                <img src="/assets/images/icon-bar-3.png" alt="Navigation toggle" />
              </div>
              <nav className="main-menu navbar-expand-md navbar-light">
                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                  <ul className="navigation">{renderNavLinks()}</ul>
                </div>
              </nav>
            </div>
            <div className="navbar-right-info">
              <div className="side-menu-nav sidemenu-nav-toggler">
                <img src="/assets/images/icon-bar-3.png" alt="Navigation toggle" />
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
                  <img src="/assets/images/gpg_logo.png" alt="Green Petals Gulf LLC" />
                </a>
              </div>
            </div>
            <div className="right-column">
              <div className="nav-outer">
                <div className="mobile-nav-toggler">
                  <img src="/assets/images/icon-bar-3.png" alt="Navigation toggle" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light" />
              </div>
              <div className="navbar-right-info">
                <div className="side-menu-nav sidemenu-nav-toggler">
                  <img src="/assets/images/icon-bar-3.png" alt="Navigation toggle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mobile-menu">
      <div className="menu-backdrop" />
      <div className="close-btn">
        <span className="icon flaticon-remove" />
      </div>
      <nav className="menu-box">
        <div className="nav-logo">
          <a href="/">
            <img src="/assets/images/GPG-logo.png" alt="Green Petals Gulf LLC" />
          </a>
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
    </div>

    <div className="nav-overlay">
      <div className="cursor" />
      <div className="cursor-follower" />
    </div>
  </header>
);

export default Header;

