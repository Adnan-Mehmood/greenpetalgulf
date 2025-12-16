import React from 'react';
import { Link } from 'react-router-dom';
import { blogPages, blogNavLinks } from '../../content';

const BlogsIndex = () => (
  <div className="auto-container" style={{ padding: '60px 0' }}>
    <div className="sec-title text-center">
      <div className="sub-title">Blogs</div>
      <h2>Latest Articles</h2>
    </div>
    <div className="row">
      {blogNavLinks.map((nav) => {
        const page = blogPages[nav.href.replace('/blogs/', '')];
        if (!page) return null;
        return (
          <div key={nav.href} className="col-lg-4 col-md-6 news-block">
            <div className="inner-box">
              <div className="image">
                <img src={page.mainImage} alt={page.title} />
              </div>
              <div className="lower-content">
                <h3>
                  <Link to={nav.href}>{page.title}</Link>
                </h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default BlogsIndex;

