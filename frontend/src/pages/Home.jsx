import React from 'react';

function Home() {
  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    hero: {
      padding: '100px 20px',
      textAlign: 'center',
      color: 'white',
    },
    heroTitle: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    },
    heroSubtitle: {
      fontSize: '20px',
      marginBottom: '40px',
      opacity: 0.9,
    },
    buttonGroup: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    primaryButton: {
      padding: '15px 40px',
      fontSize: '18px',
      background: 'white',
      color: '#667eea',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      fontWeight: 'bold',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      transition: 'transform 0.3s',
    },
    secondaryButton: {
      padding: '15px 40px',
      fontSize: '18px',
      background: 'transparent',
      color: 'white',
      border: '2px solid white',
      borderRadius: '30px',
      cursor: 'pointer',
      fontWeight: 'bold',
      transition: 'transform 0.3s',
    },
    featuresSection: {
      padding: '80px 20px',
      background: 'white',
    },
    sectionTitle: {
      textAlign: 'center',
      fontSize: '36px',
      fontWeight: 'bold',
      marginBottom: '50px',
      color: '#2d3748',
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    featureCard: {
      padding: '30px',
      background: '#f7fafc',
      borderRadius: '15px',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
    },
    featureIcon: {
      fontSize: '48px',
      marginBottom: '20px',
    },
    featureTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#2d3748',
    },
    featureDescription: {
      color: '#718096',
      lineHeight: '1.6',
    },
    statsSection: {
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '40px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
    },
    statNumber: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    statLabel: {
      fontSize: '18px',
      opacity: 0.9,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1 style={styles.heroTitle}>Master Skills with AI-Powered Learning</h1>
        <p style={styles.heroSubtitle}>
          Learn in-demand skills with AI guidance and gamified challenges
        </p>
        <div style={styles.buttonGroup}>
          <button 
            style={styles.primaryButton}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Start Learning
          </button>
          <button 
            style={styles.secondaryButton}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            Explore Courses
          </button>
        </div>
      </div>

      <div style={styles.featuresSection}>
        <h2 style={styles.sectionTitle}>Why Choose AI Learning Platform?</h2>
        <div style={styles.featuresGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🤖</div>
            <h3 style={styles.featureTitle}>AI-Powered Learning</h3>
            <p style={styles.featureDescription}>
              Get personalized learning paths and real-time AI assistance tailored to your goals
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🤖</div>
            <h3 style={styles.featureTitle}>Gamification</h3>
            <p style={styles.featureDescription}>
              Earn XP, unlock achievements, and compete on leaderboards while learning
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🤖</div>
            <h3 style={styles.featureTitle}>Progress Tracking</h3>
            <p style={styles.featureDescription}>
              Monitor your learning journey with detailed analytics and insights
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🤖</div>
            <h3 style={styles.featureTitle}>Expert Instructors</h3>
            <p style={styles.featureDescription}>
              Learn from industry professionals with years of real-world experience
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🤖</div>
            <h3 style={styles.featureTitle}>Career Support</h3>
            <p style={styles.featureDescription}>
              Get job-ready with portfolio projects and career guidance
            </p>
          </div>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🤖</div>
            <h3 style={styles.featureTitle}>Certificates</h3>
            <p style={styles.featureDescription}>
              Earn recognized certificates to showcase your achievements
            </p>
          </div>
        </div>
      </div>

      <div style={styles.statsSection}>
        <h2 style={styles.sectionTitle}>Our Impact</h2>
        <div style={styles.statsGrid}>
          <div>
            <div style={styles.statNumber}>10,000+</div>
            <div style={styles.statLabel}>Active Learners</div>
          </div>
          <div>
            <div style={styles.statNumber}>500+</div>
            <div style={styles.statLabel}>Courses</div>
          </div>
          <div>
            <div style={styles.statNumber}>95%</div>
            <div style={styles.statLabel}>Success Rate</div>
          </div>
          <div>
            <div style={styles.statNumber}>50+</div>
            <div style={styles.statLabel}>Expert Instructors</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
