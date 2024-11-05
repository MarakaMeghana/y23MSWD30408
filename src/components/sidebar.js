// src/Components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>KLU ERP</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/academic-registration">Academic Registration</Link></li>
          <li><Link to="/attendance-register">Attendance Register</Link></li>
          <li><Link to="/career-choice">Career Choice</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/counselling-diary">Counselling Diary</Link></li>
          <li><Link to="/clubs">Clubs/Activities</Link></li>
          <li><Link to="/exam-section">Exam Section</Link></li>
          <li><Link to="/feedback">Feedback</Link></li>
          <li><Link to="/fee-payments">Fee Payments</Link></li>
          <li><Link to="/hostel-management">Hostel Management</Link></li>
          <li><Link to="/hallticket">Hallticket</Link></li>
          <li><Link to="/infrastructure">Infrastructure Related</Link></li>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/cgpa">My CGPA</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
