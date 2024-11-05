// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/Home';
import Student from './components/Student';
import Login from './components/Login';
import Register from './components/Register';
import Courses from './components/Courses';
import Faculty from './components/Faculty';
import Timetable from './components/Timetable';
import Sidebar from './components/sidebar';
import './App.css'; // Importing the main CSS file


const App = () => {
  return (
    <Router>
      <div className="app-layout">
        <ResponsiveAppBar/>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Student />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/timetable" element={<Timetable />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
