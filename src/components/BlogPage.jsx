import React from 'react';
import PropTypes from 'prop-types';
import BlogSidebar from './BlogSidebar';

const renderBlock = (block) => {
  switch (block.type) {
    case 'h3':
      return <h3 key={block.text}>{block.text}</h3>;
    case 'h4':
      return <h4 key={block.text}>{block.text}</h4>;
    case 'ul':
      return (
        <ul key={block.items[0]} className="list-styled pl-4">
          {block.items.map((item) => (
            <li key={item}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      );
    default:
      return <p key={block.text}>{block.text}</p>;
  }
};

const BlogPage = ({ title, heroImage, mainImage, blocks }) => (
  <>
    <section className="page-title" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="auto-container">
        <div className="content-box">
          <div className="content-wrapper">
            <div className="title">
              <h1>{title}</h1>
            </div>
            <ul className="bread-crumb style-two">
              <li>
                <a href="/">Home </a>
              </li>
              <li className="active">Blog Details</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div className="service-details-page">
      <div className="auto-container">
        <div className="row">
          <div className="col-lg-8">
            <div className="service-details">
              <div className="image">
                <img src={mainImage} alt={title} />
              </div>
              <div className="text-block">
                <h2>{title}</h2>
                <div className="text">{blocks.map(renderBlock)}</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default BlogPage;

BlogPage.propTypes = {
  title: PropTypes.string.isRequired,
  heroImage: PropTypes.string,
  mainImage: PropTypes.string,
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

