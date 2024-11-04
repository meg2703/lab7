// src/Courses.js
import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    { code: 'CSCI4140', name: 'Advanced Database Systems', semester: 'Fall 2024/2025' },
    { code: 'CSCI2691 / CSCI3691 / CSCI4691', name: 'Introductory Project', semester: 'Fall 2024/2025' },
    { code: 'CSCI3172', name: 'Web-Centric Computing', semester: 'Fall 2024/2025' },
    { code: 'CSCI3171', name: 'Network Computing', semester: 'Fall 2024/2025' },
    { code: 'MGMT2303', name: 'People, Work, Organizations: Micro Behavior', semester: 'Fall 2024/2025' },
  ];

  return (
    <div className="courses">
      <h2>Courses I’m Taking This Semester</h2>
      <ul className="course-list">
        {courses.map((course, index) => (
          <li key={index} className="course-item">
            <strong>{course.code}</strong>: {course.name} - <em>{course.semester}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
