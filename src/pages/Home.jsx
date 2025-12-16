import React from 'react';
import Banner from '../components/Banner';
import AboutSection from '../components/AboutSection';
import CallToAction from '../components/CallToAction';
import Services from '../components/Services';
import Certifications from '../components/Certifications';
import NewsSection from '../components/NewsSection';
import Clients from '../components/Clients';

const Home = () => (
  <>
    <Banner />
    <AboutSection />
    <CallToAction />
    <Services />
    <Certifications />
    <NewsSection />
    <Clients />
  </>
);

export default Home;

