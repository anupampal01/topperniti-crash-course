// src/components/InquiryForm.jsx
import React, { useState } from 'react';

const InquiryForm = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_API_BASE}/inquiry`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    if (res.ok) {
      setStatus('Thank you! We will contact you soon.');
      setForm({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatus(data.error || 'Submission failed.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="inquiry-form">
      <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" type="email" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} required />
      <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} />
      <button type="submit" className="btn">Submit Inquiry</button>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default InquiryForm;
