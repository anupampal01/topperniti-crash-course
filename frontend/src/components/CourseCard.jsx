import React from 'react';

const CourseCard = ({ course }) => (
  <div className="card">
    <h3>{course.title}</h3>
    <p>{course.overview}</p>
    <p><strong>Duration:</strong> {course.duration}</p>
    <p><strong>Eligibility:</strong> {course.eligibility}</p>
    <p><strong>Price:</strong> ₹{course.price}</p>
    <button className="btn">Know More</button>
  </div>
);

export default CourseCard;
