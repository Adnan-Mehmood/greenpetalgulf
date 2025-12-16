import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { blogNavLinks } from '../content';

const BlogSidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="service-sidebar">
      <div className="widget category-widget">
        <ul>
          {blogNavLinks.map((item) => (
            <li key={item.href} className={pathname === item.href ? 'active' : undefined}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;

