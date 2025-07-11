import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => (
  <>
    <Navbar />
    <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for doesn't exist.</p>
    </div>
    <Footer />
  </>
);

export default NotFound;
