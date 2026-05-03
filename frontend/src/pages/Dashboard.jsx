import React from 'react';

function Dashboard() {
  const styles = {
    container: { padding: '40px 20px', maxWidth: '1400px', margin: '0 auto', background: '#f7fafc', minHeight: '100vh' },
    header: { marginBottom: '40px' },
    title: { fontSize: '36px', fontWeight: 'bold', color: '#2d3748', marginBottom: '10px' },
    subtitle: { fontSize: '18px', color: '#718096' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '40px' },
    statCard: { background: 'white', padding: '25px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
    statValue: { fontSize: '36px', fontWeight: 'bold', marginBottom: '10px' },
    statLabel: { fontSize: '14px', color: '#718096' },
    mainGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' },
    card: { background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '30px' },
    cardTitle: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' },
    courseItem: { display: 'flex', gap: '20px', padding: '20px', background: '#f7fafc', borderRadius: '10px', marginBottom: '15px' },
    thumbnail: { width: '100px', height: '70px', borderRadius: '8px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px' },
    courseInfo: { flex: 1 },
    courseTitle: { fontWeight: 'bold', marginBottom: '5px', color: '#2d3748' },
    progress: { fontSize: '14px', color: '#718096', marginBottom: '10px' },
    progressBar: { width: '100%', height: '8px', background: '#e2e8f0', borderRadius: '10px', overflow: 'hidden' },
    progressFill: { height: '100%', background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', borderRadius: '10px' },
    achievement: { display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', background: '#f7fafc', borderRadius: '10px', marginBottom: '15px' },
    badge: { width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px' },
    leaderboardItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px', background: '#f7fafc', borderRadius: '10px', marginBottom: '10px' },
    rank: { width: '30px', height: '30px', borderRadius: '50%', background: '#667eea', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>My Dashboard</h1>
        <p style={styles.subtitle}>Track your learning progress and achievements</p>
      </div>

      <div style={styles.grid}>
        <div style={{...styles.statCard, borderLeft: '4px solid #667eea'}}>
          <div style={{...styles.statValue, color: '#667eea'}}>12,203</div>
          <div style={styles.statLabel}>Total XP</div>
        </div>
        <div style={{...styles.statCard, borderLeft: '4px solid #48bb78'}}>
          <div style={{...styles.statValue, color: '#48bb78'}}>Level 12</div>
          <div style={styles.statLabel}>Current Level</div>
        </div>
        <div style={{...styles.statCard, borderLeft: '4px solid #ed8936'}}>
          <div style={{...styles.statValue, color: '#ed8936'}}>30</div>
          <div style={styles.statLabel}>Day Streak</div>
        </div>
        <div style={{...styles.statCard, borderLeft: '4px solid #9f7aea'}}>
          <div style={{...styles.statValue, color: '#9f7aea'}}>8/12</div>
          <div style={styles.statLabel}>Courses Completed</div>
        </div>
      </div>

      <div style={styles.mainGrid}>
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Continue Learning</h2>
            <div style={styles.courseItem}>
              <div style={styles.thumbnail}>📚</div>
              <div style={styles.courseInfo}>
                <div style={styles.courseTitle}>AI & Machine Learning Bootcamp</div>
                <div style={styles.progress}>Module 3 of 8 � 45% Complete</div>
                <div style={styles.progressBar}>
                  <div style={{...styles.progressFill, width: '45%'}}></div>
                </div>
              </div>
            </div>
            <div style={styles.courseItem}>
              <div style={styles.thumbnail}>📚</div>
              <div style={styles.courseInfo}>
                <div style={styles.courseTitle}>Full Stack Web Development</div>
                <div style={styles.progress}>Module 6 of 10 � 60% Complete</div>
                <div style={styles.progressBar}>
                  <div style={{...styles.progressFill, width: '60%'}}></div>
                </div>
              </div>
            </div>
            <div style={styles.courseItem}>
              <div style={styles.thumbnail}>📚</div>
              <div style={styles.courseInfo}>
                <div style={styles.courseTitle}>Data Science with Python</div>
                <div style={styles.progress}>Module 2 of 7 � 28% Complete</div>
                <div style={styles.progressBar}>
                  <div style={{...styles.progressFill, width: '28%'}}></div>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Recent Achievements</h2>
            <div style={styles.achievement}>
              <div style={{...styles.badge, background: '#ffd700'}}>🏆</div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>First Course Completed</div>
                <div style={{ fontSize: '14px', color: '#718096' }}>Completed your first course</div>
              </div>
            </div>
            <div style={styles.achievement}>
              <div style={{...styles.badge, background: '#48bb78'}}>🔥</div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>30 Day Streak</div>
                <div style={{ fontSize: '14px', color: '#718096' }}>Learned for 30 consecutive days</div>
              </div>
            </div>
            <div style={styles.achievement}>
              <div style={{...styles.badge, background: '#667eea'}}>⭐</div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Level 12 Reached</div>
                <div style={{ fontSize: '14px', color: '#718096' }}>Earned 12,000+ XP</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Leaderboard</h2>
            <div style={styles.leaderboardItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{...styles.rank, background: '#ffd700'}}>1</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Sarah Chen</div>
                  <div style={{ fontSize: '14px', color: '#718096' }}>25,430 XP</div>
                </div>
              </div>
            </div>
            <div style={styles.leaderboardItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{...styles.rank, background: '#c0c0c0'}}>2</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Michael Brown</div>
                  <div style={{ fontSize: '14px', color: '#718096' }}>23,120 XP</div>
                </div>
              </div>
            </div>
            <div style={styles.leaderboardItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{...styles.rank, background: '#cd7f32'}}>3</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Emma Wilson</div>
                  <div style={{ fontSize: '14px', color: '#718096' }}>21,890 XP</div>
                </div>
              </div>
            </div>
            <div style={styles.leaderboardItem}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={styles.rank}>4</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>You</div>
                  <div style={{ fontSize: '14px', color: '#718096' }}>12,203 XP</div>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Daily Challenge</h2>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '48px', marginBottom: '15px' }}>🎯</div>
              <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Complete 3 Lessons Today</div>
              <div style={{ fontSize: '14px', color: '#718096', marginBottom: '20px' }}>Progress: 2/3</div>
              <div style={styles.progressBar}>
                <div style={{...styles.progressFill, width: '66%'}}></div>
              </div>
              <div style={{ marginTop: '15px', color: '#667eea', fontWeight: 'bold' }}>+250 XP Reward</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
