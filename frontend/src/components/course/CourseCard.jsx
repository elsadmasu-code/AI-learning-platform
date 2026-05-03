import React from 'react';

function CourseCard({ course }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', background: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div style={{ background: '#3498db', height: '150px', borderRadius: '4px', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
        Course Thumbnail
      </div>
      <h3>{course?.title || 'Course Title'}</h3>
      <p style={{ color: '#666', fontSize: '14px' }}>{course?.description || 'Course description goes here...'}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
        <span style={{ color: '#27ae60', fontWeight: 'bold' }}>${course?.price || '0'}</span>
        <button style={{ padding: '8px 16px', background: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default CourseCard;
