import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { servicesNavLinks } from '../content';

const ServicesSidebar = () => {
  const { pathname } = useLocation();

  return (
    <aside className="service-sidebar">
      <div className="widget category-widget">
        <ul>
          {servicesNavLinks.map((item) => (
            <li key={item.href} className={pathname === item.href ? 'active' : undefined}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default ServicesSidebar;

