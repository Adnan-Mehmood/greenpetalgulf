import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PageTitle = ({ title, background = '/assets/images/bg-26.jpg' }) => (
  <section className="page-title" style={{ backgroundImage: `url(${background})` }}>
    <div className="auto-container">
      <div className="content-box">
        <div className="content-wrapper">
          <div className="title">
            <h1>{title}</h1>
          </div>
          <ul className="bread-crumb style-two">
            <li>
              <Link to="/">Home </Link>
            </li>
            <li className="active">{title}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default PageTitle;

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  background: PropTypes.string,
};


