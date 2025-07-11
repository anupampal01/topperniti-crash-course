import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CourseCard from '../components/CourseCard';
import { getCourses } from '../services/courseService';

const CoursePage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getCourses();
        setCourses(data);
      } catch (err) {
        console.error('Error fetching courses:', err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Our Courses</h2>
        <div className="course-grid">
          {courses.length === 0 ? (
            <p>No courses available yet.</p> // ✅ Fallback for empty course list
          ) : (
            courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CoursePage;
