import React from 'react';

function Navbar() {
  return (
    <nav style={{ background: '#2c3e50', padding: '15px 0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        <h2 style={{ color: 'white', margin: 0 }}>AI Learning Platform</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a>
          <a href="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</a>
          <a href="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
          <a href="/profile" style={{ color: 'white', textDecoration: 'none' }}>Profile</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
