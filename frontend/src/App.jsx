import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import LessonPlayer from './pages/LessonPlayer';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
      <nav style={{ background: '#333', padding: '15px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</a>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
          <a href="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</a>
          <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</a>
          <a href="/register" style={{ color: 'white', textDecoration: 'none' }}>Register</a>
          <a href="/admin" style={{ color: 'white', textDecoration: 'none' }}>Admin</a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/lessons/:lessonId" element={<LessonPlayer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
