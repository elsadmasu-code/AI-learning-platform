import React, { useState } from 'react';
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const navLinksMobile = {
    display: mobileMenuOpen ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '20px',
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    background: '#2d3748',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s',
    padding: '5px 10px',
    borderRadius: '5px',
  };

  const activeLinkStyle = {
    ...linkStyle,
    background: 'rgba(102, 126, 234, 0.3)',
  };

  const hamburger = {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    cursor: 'pointer',
    padding: '5px',
  };

  const hamburgerLine = {
    width: '25px',
    height: '3px',
    background: 'white',
    borderRadius: '2px',
    transition: 'all 0.3s',
  };

  return (
    <div>
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-nav { display: ${mobileMenuOpen ? 'flex' : 'none'} !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
      
      <nav style={navStyle}>
        <div style={navContainer}>
          <Link to="/" style={logo}>🤖 AI Academy</Link>
          
          <div className="hamburger" style={hamburger} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div style={hamburgerLine}></div>
            <div style={hamburgerLine}></div>
            <div style={hamburgerLine}></div>
          </div>

          <div className="desktop-nav" style={navLinks}>
            <NavLink 
              to="/" 
              style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            >
              Home
            </NavLink>
            <NavLink 
              to="/courses" 
              style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            >
              Courses
            </NavLink>
            <NavLink 
              to="/dashboard" 
              style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            >
              Dashboard
            </NavLink>
            <NavLink 
              to="/profile" 
              style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            >
              Profile
            </NavLink>
            <Link 
              to="/get-started" 
              style={{...linkStyle, background: '#667eea', padding: '8px 20px', borderRadius: '20px'}}
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mobile-nav" style={navLinksMobile}>
          <NavLink 
            to="/" 
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink 
            to="/courses" 
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            onClick={() => setMobileMenuOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink 
            to="/dashboard" 
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </NavLink>
          <NavLink 
            to="/profile" 
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            onClick={() => setMobileMenuOpen(false)}
          >
            Profile
          </NavLink>
          <Link 
            to="/get-started" 
            style={{...linkStyle, background: '#667eea', padding: '8px 20px', borderRadius: '20px', textAlign: 'center'}}
            onClick={() => setMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </nav>

      <ToastContainer />

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
