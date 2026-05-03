import React from 'react';
import { useSelector } from 'react-redux';

function Profile() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>My Profile</h1>
      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
        <h2>{user?.name || 'User Name'}</h2>
        <p>Email: {user?.email || 'user@example.com'}</p>
        <p>Role: {user?.role || 'student'}</p>
        <p>Level: {user?.level || 1}</p>
        <p>XP: {user?.xp || 0}</p>
        <p>Streak: {user?.streak || 0} days</p>
      </div>
      <button style={{ marginTop: '20px', padding: '10px 20px', background: '#2196F3', color: 'white', border: 'none', cursor: 'pointer' }}>
        Edit Profile
      </button>
    </div>
  );
}

export default Profile;
