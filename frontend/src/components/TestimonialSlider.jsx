import React, { useEffect, useState } from 'react';

const TestimonialSlider = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE}/testimonials`);
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error('Failed to load testimonials:', err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div className="card" key={i}>
            <img
              src={t.photoUrl}
              alt={t.studentName}
              width="60"
              height="60"
              style={{ borderRadius: '50%' }}
            />
            <h4>{t.studentName}</h4>
            <p>"{t.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSlider;
