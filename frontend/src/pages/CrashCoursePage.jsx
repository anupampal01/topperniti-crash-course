import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import CrashCourseBanner from '../components/CrashCourseBanner';
import InquiryForm from '../components/InquiryForm';
import Footer from '../components/Footer';
import VideoModal from '../components/VideoModal';
import { getVideos } from '../services/videoService';

const CrashCoursePage = () => {
  const [videos, setVideos] = useState([]);

  // Scroll to inquiry form if hash is present
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 200);
      }
    }
  }, []);

  // Fetch demo videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getVideos();
        setVideos(data);
      } catch (err) {
        console.error('Error fetching videos:', err);
      }
    };
    fetchVideos();
  }, []);

  return (
    <>
      <Navbar />
      <CrashCourseBanner />

      <section className="course-details">
        <h3>Course Features</h3>
        <ul>
          <li>✔️ 2 Live Classes per Subject</li>
          <li>✔️ Mock Tests & Analysis</li>
          <li>✔️ Personal Mentorship</li>
          <li>✔️ Rapid Revision Material</li>
          <li>✔️ Full Syllabus in 60 Days</li>
        </ul>
      </section>

      <section className="demo-videos">
        <h3>Demo Videos</h3>
        <div className="video-grid">
          {videos.length === 0 ? (
            <p>No demo videos found.</p> 
          ) : (
            videos.map((video) => (
              <VideoModal key={video._id} videoUrl={video.url} />
            ))
          )}
        </div>
      </section>

      <section id="inquiry-form">
        <h3>Register Your Interest</h3>
        <InquiryForm />
      </section>

      <Footer />
    </>
  );
};

export default CrashCoursePage;
