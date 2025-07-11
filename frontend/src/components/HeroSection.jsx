// src/components/HeroSection.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h2>Join CLAT Crash Course 2026</h2>
      <p>Live Mentorship | Daily Mocks | Doubt Solving</p>
      <button className="btn" onClick={() => navigate('/crash-course')}>
        Enroll Now
      </button>
    </section>
  );
};

export default HeroSection;
