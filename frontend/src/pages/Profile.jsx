import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { showSuccess } from '../utils/toast';

function Profile() {
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john.doe@example.com',
    bio: user?.bio || '',
    linkedin: user?.socialLinks?.linkedin || '',
    github: user?.socialLinks?.github || '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    // Simulate saving profile
    showSuccess('Profile updated successfully!');
    console.log('Saving profile data:', formData);
  };

  const styles = {
    container: { padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', background: '#f7fafc', minHeight: '100vh' },
    header: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '60px 40px', borderRadius: '20px', color: 'white', marginBottom: '40px', textAlign: 'center' },
    avatar: { width: '120px', height: '120px', borderRadius: '50%', background: 'white', color: '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '48px', margin: '0 auto 20px', border: '5px solid white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
    name: { fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' },
    email: { fontSize: '18px', opacity: 0.9 },
    grid: { display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '30px' },
    card: { background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '30px' },
    cardTitle: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' },
    stat: { display: 'flex', justifyContent: 'space-between', padding: '15px', background: '#f7fafc', borderRadius: '10px', marginBottom: '10px' },
    statLabel: { color: '#718096' },
    statValue: { fontWeight: 'bold', color: '#2d3748' },
    skill: { display: 'inline-block', padding: '8px 16px', background: '#667eea', color: 'white', borderRadius: '20px', marginRight: '10px', marginBottom: '10px', fontSize: '14px' },
    button: { 
      padding: '12px 24px', 
      background: '#667eea', 
      color: 'white', 
      border: 'none', 
      borderRadius: '10px', 
      cursor: 'pointer', 
      fontWeight: 'bold', 
      fontSize: '16px',
      transition: 'background 0.3s',
      minHeight: '44px',
    },
    inputGroup: { marginBottom: '20px' },
    label: { display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#2d3748' },
    input: { width: '100%', padding: '12px', border: '2px solid #e2e8f0', borderRadius: '10px', fontSize: '16px', boxSizing: 'border-box' },
  };

  return (
    <div style={styles.container}>
      <style>{`
        @media (max-width: 1024px) {
          .profile-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .profile-header { padding: 40px 20px !important; }
          .profile-name { font-size: 24px !important; }
          .profile-email { font-size: 16px !important; }
          .profile-avatar { width: 100px !important; height: 100px !important; font-size: 40px !important; }
        }
        @media (max-width: 480px) {
          .card { padding: 20px !important; }
          .stat { flex-direction: column !important; gap: 5px !important; }
        }
        .save-button:hover {
          background: #5568d3 !important;
        }
        input:focus, textarea:focus {
          outline: none;
          border-color: #667eea;
        }
      `}</style>

      <div style={styles.header} className="profile-header">
        <div style={styles.avatar} className="profile-avatar">👤</div>
        <h1 style={styles.name} className="profile-name">{formData.name}</h1>
        <p style={styles.email} className="profile-email">{formData.email}</p>
      </div>

      <div style={styles.grid} className="profile-grid">
        <div>
          <div style={styles.card} className="card">
            <h2 style={styles.cardTitle}>Stats</h2>
            <div style={styles.stat}>
              <span style={styles.statLabel}>Level</span>
              <span style={styles.statValue}>{user?.level || 12}</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statLabel}>Total XP</span>
              <span style={styles.statValue}>{user?.xp || 12203}</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statLabel}>Streak</span>
              <span style={styles.statValue}>{user?.streak || 30} days</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statLabel}>Courses Enrolled</span>
              <span style={styles.statValue}>{user?.enrolledCourses?.length || 12}</span>
            </div>
            <div style={styles.stat}>
              <span style={styles.statLabel}>Certificates</span>
              <span style={styles.statValue}>8</span>
            </div>
          </div>

          <div style={styles.card} className="card">
            <h2 style={styles.cardTitle}>Skills</h2>
            <div>
              <span style={styles.skill}>Python</span>
              <span style={styles.skill}>JavaScript</span>
              <span style={styles.skill}>Machine Learning</span>
              <span style={styles.skill}>React</span>
              <span style={styles.skill}>Node.js</span>
              <span style={styles.skill}>SQL</span>
            </div>
          </div>
        </div>

        <div>
          <div style={styles.card} className="card">
            <h2 style={styles.cardTitle}>Edit Profile</h2>
            <form onSubmit={handleSaveChanges}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name} 
                  onChange={handleInputChange}
                  style={styles.input} 
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email} 
                  onChange={handleInputChange}
                  style={styles.input} 
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Bio</label>
                <textarea 
                  rows="4" 
                  name="bio"
                  placeholder="Tell us about yourself..." 
                  value={formData.bio}
                  onChange={handleInputChange}
                  style={{...styles.input, resize: 'vertical'}}
                ></textarea>
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>LinkedIn</label>
                <input 
                  type="url" 
                  name="linkedin"
                  placeholder="https://linkedin.com/in/yourprofile" 
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  style={styles.input} 
                />
              </div>
              <div style={styles.inputGroup}>
                <label style={styles.label}>GitHub</label>
                <input 
                  type="url" 
                  name="github"
                  placeholder="https://github.com/yourusername" 
                  value={formData.github}
                  onChange={handleInputChange}
                  style={styles.input} 
                />
              </div>
              <button 
                type="submit"
                style={styles.button}
                className="save-button"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

