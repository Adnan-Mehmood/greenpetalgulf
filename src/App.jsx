import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HiddenSidebar from './components/HiddenSidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CorporateOverview from './pages/CorporateOverview';
import VisionMission from './pages/VisionMission';
import CoreValues from './pages/CoreValues';
import HsePolicy from './pages/HsePolicy';
import QualityPolicy from './pages/QualityPolicy';
import ServicePageFactory from './pages/services/ServicePageFactory';
import BlogsIndex from './pages/blogs/BlogsIndex';
import BlogPageFactory from './pages/blogs/BlogPageFactory';
import ContactUs from './pages/ContactUs';

const App = () => (
  <div className="page-wrapper">
    <Header />
    <HiddenSidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/corporate-overview" element={<CorporateOverview />} />
      <Route path="/our-vision-mission" element={<VisionMission />} />
      <Route path="/core-values" element={<CoreValues />} />
      <Route path="/hse-policy" element={<HsePolicy />} />
      <Route path="/quality-policy" element={<QualityPolicy />} />
      <Route path="/services/:serviceSlug" element={<ServicePageFactory />} />
      <Route path="/blogs" element={<BlogsIndex />} />
      <Route path="/blogs/:blogSlug" element={<BlogPageFactory />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
    <Footer />
  </div>
);

export default App;

