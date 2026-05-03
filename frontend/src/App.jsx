import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import LessonPlayer from './pages/LessonPlayer';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import GetStarted from './pages/GetStarted';
import Admin from './pages/Admin';
import Footer from './components/common/Footer';

function App() {
  const navStyle = {
    background: '#2d3748',
    padding: '15px 0',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const navContainer = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  };

  const logo = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const navLinks = {
    display: 'flex',
    gap: '30px',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s',
  };

  return (
    <div>
      <nav style={navStyle}>
        <div style={navContainer}>
          <Link to="/" style={logo}>🤖 AI Academy</Link>
          <div style={navLinks}>
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="/courses" style={linkStyle}>Courses</Link>
            <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
            <Link to="/profile" style={linkStyle}>Profile</Link>
            <Link to="/get-started" style={{...linkStyle, background: '#667eea', padding: '8px 20px', borderRadius: '20px'}}>Get Started</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/lessons/:lessonId" element={<LessonPlayer />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/login" element={<GetStarted />} />
        <Route path="/register" element={<GetStarted />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
