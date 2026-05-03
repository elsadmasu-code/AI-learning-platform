import React from 'react';

function Admin() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Admin Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        <div style={{ background: '#4CAF50', color: 'white', padding: '30px', borderRadius: '8px' }}>
          <h3>Total Users</h3>
          <p style={{ fontSize: '32px', margin: '10px 0' }}>1,234</p>
        </div>
        <div style={{ background: '#2196F3', color: 'white', padding: '30px', borderRadius: '8px' }}>
          <h3>Total Courses</h3>
          <p style={{ fontSize: '32px', margin: '10px 0' }}>56</p>
        </div>
        <div style={{ background: '#FF9800', color: 'white', padding: '30px', borderRadius: '8px' }}>
          <h3>Enrollments</h3>
          <p style={{ fontSize: '32px', margin: '10px 0' }}>3,456</p>
        </div>
        <div style={{ background: '#9C27B0', color: 'white', padding: '30px', borderRadius: '8px' }}>
          <h3>Revenue</h3>
          <p style={{ fontSize: '32px', margin: '10px 0' }}>$45,678</p>
        </div>
      </div>
    </div>
  );
}

export default Admin;
