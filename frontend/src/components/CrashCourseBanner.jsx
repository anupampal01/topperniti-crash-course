// src/components/CrashCourseBanner.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CrashCourseBanner = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/crash-course#inquiry-form'); 
  };

  return (
    <section className="crash">
      <h2>CLAT Crash Course 2026 - Limited Seats</h2>
      <p>₹4999 Only | Starts 1st August | Duration: 2 Months</p>
      <button className="btn" onClick={handleRegisterClick}>Register Now</button>
    </section>
  );
};

export default CrashCourseBanner;
