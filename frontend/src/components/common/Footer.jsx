import React from 'react';

function Footer() {
  const styles = {
    footer: {
      background: '#2d3748',
      color: 'white',
      padding: '60px 20px 30px',
      marginTop: '80px',
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '40px',
      marginBottom: '40px',
    },
    section: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    title: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    link: {
      color: '#cbd5e0',
      textDecoration: 'none',
      transition: 'color 0.3s',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
    },
    divider: {
      height: '1px',
      background: '#4a5568',
      margin: '30px 0',
    },
    bottom: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '20px',
      fontSize: '14px',
      color: '#cbd5e0',
    },
    social: {
      display: 'flex',
      gap: '15px',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      background: '#4a5568',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background 0.3s',
      fontSize: '20px',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div style={styles.section}>
            <h3 style={styles.title}>?? AI Academy</h3>
            <p style={{ color: '#cbd5e0', lineHeight: '1.6' }}>
              Master skills with AI-powered learning. Join thousands of learners advancing their careers with our platform.
            </p>
            <div style={styles.social}>
              <div style={styles.socialIcon}>??</div>
              <div style={styles.socialIcon}>??</div>
              <div style={styles.socialIcon}>??</div>
              <div style={styles.socialIcon}>??</div>
            </div>
          </div>

          <div style={styles.section}>
            <h3 style={styles.title}>Quick Links</h3>
            <a href="/" style={styles.link}>Home</a>
            <a href="/courses" style={styles.link}>Courses</a>
            <a href="/dashboard" style={styles.link}>Dashboard</a>
            <a href="/profile" style={styles.link}>Profile</a>
            <a href="/admin" style={styles.link}>Admin</a>
          </div>

          <div style={styles.section}>
            <h3 style={styles.title}>Resources</h3>
            <a href="#" style={styles.link}>About Us</a>
            <a href="#" style={styles.link}>Blog</a>
            <a href="#" style={styles.link}>Help Center</a>
            <a href="#" style={styles.link}>Terms of Service</a>
            <a href="#" style={styles.link}>Privacy Policy</a>
          </div>

          <div style={styles.section}>
            <h3 style={styles.title}>Contact Developer</h3>
            <div style={{ color: '#cbd5e0', lineHeight: '1.8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span>??</span>
                <span>Elsabet Admasu</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <span>??</span>
                <a href="mailto:elsadmasu@gmail.com" style={{ color: '#cbd5e0', textDecoration: 'none' }}>
                  elsadmasu@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>??</span>
                <a href="tel:+251932454889" style={{ color: '#cbd5e0', textDecoration: 'none' }}>
                  +251 932 454 889
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.divider}></div>

        <div style={styles.bottom}>
          <div>
            © {new Date().getFullYear()} AI Learning Platform. All rights reserved.
          </div>
          <div>
            Developed with ?? by <strong>Elsabet Admasu</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
