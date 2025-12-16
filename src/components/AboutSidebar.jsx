import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { aboutNavLinks } from '../content';

const AboutSidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="service-sidebar">
      <div className="widget category-widget">
        <ul>
          {aboutNavLinks.map((item) => (
            <li key={item.href} className={pathname === item.href ? 'active' : undefined}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default AboutSidebar;

