import React from 'react';
import { useParams } from 'react-router-dom';
import { servicePages } from '../../content';
import ServicePage from '../../components/ServicePage';

const ServicePageFactory = () => {
  const { serviceSlug } = useParams();
  const data = servicePages[serviceSlug];

  if (!data) {
    return null;
  }

  return <ServicePage {...data} />;
};

export default ServicePageFactory;

