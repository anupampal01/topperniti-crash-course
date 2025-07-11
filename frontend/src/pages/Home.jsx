import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CrashCourseBanner from '../components/CrashCourseBanner';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Navbar />
    <HeroSection />
    <CrashCourseBanner />
    <TestimonialSlider />
    <Footer />
  </>
);

export default Home;
