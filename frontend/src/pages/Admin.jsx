import React from 'react';

function Admin() {
  const styles = {
    container: { padding: '40px 20px', maxWidth: '1400px', margin: '0 auto', background: '#f7fafc', minHeight: '100vh' },
    header: { marginBottom: '40px' },
    title: { fontSize: '36px', fontWeight: 'bold', color: '#2d3748', marginBottom: '10px' },
    subtitle: { fontSize: '18px', color: '#718096' },
    statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px', marginBottom: '40px' },
    statCard: { background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', borderLeft: '5px solid' },
    statValue: { fontSize: '42px', fontWeight: 'bold', marginBottom: '10px' },
    statLabel: { fontSize: '16px', color: '#718096', marginBottom: '10px' },
    statChange: { fontSize: '14px', fontWeight: 'bold' },
    mainGrid: { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px' },
    card: { background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '30px' },
    cardTitle: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' },
    table: { width: '100%', borderCollapse: 'collapse' },
    th: { textAlign: 'left', padding: '15px', borderBottom: '2px solid #e2e8f0', color: '#718096', fontWeight: 'bold' },
    td: { padding: '15px', borderBottom: '1px solid #e2e8f0' },
    badge: { padding: '5px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold' },
    activityItem: { display: 'flex', gap: '15px', padding: '15px', background: '#f7fafc', borderRadius: '10px', marginBottom: '10px' },
    activityIcon: { width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Admin Dashboard</h1>
        <p style={styles.subtitle}>Manage your platform and monitor performance</p>
      </div>

      <div style={styles.statsGrid}>
        <div style={{...styles.statCard, borderLeftColor: '#667eea'}}>
          <div style={{...styles.statValue, color: '#667eea'}}>12,340</div>
          <div style={styles.statLabel}>Total Users</div>
          <div style={{...styles.statChange, color: '#48bb78'}}>? 12% from last month</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#48bb78'}}>
          <div style={{...styles.statValue, color: '#48bb78'}}>567</div>
          <div style={styles.statLabel}>Total Courses</div>
          <div style={{...styles.statChange, color: '#48bb78'}}>? 8% from last month</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#ed8936'}}>
          <div style={{...styles.statValue, color: '#ed8936'}}>45,678</div>
          <div style={styles.statLabel}>Enrollments</div>
          <div style={{...styles.statChange, color: '#48bb78'}}>? 23% from last month</div>
        </div>
        <div style={{...styles.statCard, borderLeftColor: '#9f7aea'}}>
          <div style={{...styles.statValue, color: '#9f7aea'}}>$89,234</div>
          <div style={styles.statLabel}>Revenue</div>
          <div style={{...styles.statChange, color: '#48bb78'}}>? 15% from last month</div>
        </div>
      </div>

      <div style={styles.mainGrid}>
        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Recent Users</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Role</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Joined</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>Sarah Chen</td>
                  <td style={styles.td}>sarah@example.com</td>
                  <td style={styles.td}>Student</td>
                  <td style={styles.td}><span style={{...styles.badge, background: '#c6f6d5', color: '#22543d'}}>Active</span></td>
                  <td style={styles.td}>2 days ago</td>
                </tr>
                <tr>
                  <td style={styles.td}>Michael Brown</td>
                  <td style={styles.td}>michael@example.com</td>
                  <td style={styles.td}>Instructor</td>
                  <td style={styles.td}><span style={{...styles.badge, background: '#c6f6d5', color: '#22543d'}}>Active</span></td>
                  <td style={styles.td}>5 days ago</td>
                </tr>
                <tr>
                  <td style={styles.td}>Emma Wilson</td>
                  <td style={styles.td}>emma@example.com</td>
                  <td style={styles.td}>Student</td>
                  <td style={styles.td}><span style={{...styles.badge, background: '#fed7d7', color: '#742a2a'}}>Inactive</span></td>
                  <td style={styles.td}>1 week ago</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Top Courses</h2>
            <table style={styles.table}>
              <thead>
                <tr>
                  <th style={styles.th}>Course</th>
                  <th style={styles.th}>Instructor</th>
                  <th style={styles.th}>Enrollments</th>
                  <th style={styles.th}>Revenue</th>
                  <th style={styles.th}>Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={styles.td}>AI & Machine Learning</td>
                  <td style={styles.td}>Dr. Sarah Johnson</td>
                  <td style={styles.td}>2,345</td>
                  <td style={styles.td}>$117,250</td>
                  <td style={styles.td}>? 4.9</td>
                </tr>
                <tr>
                  <td style={styles.td}>Full Stack Development</td>
                  <td style={styles.td}>John Smith</td>
                  <td style={styles.td}>1,876</td>
                  <td style={styles.td}>$75,040</td>
                  <td style={styles.td}>? 4.8</td>
                </tr>
                <tr>
                  <td style={styles.td}>Data Science</td>
                  <td style={styles.td}>Emily Davis</td>
                  <td style={styles.td}>1,567</td>
                  <td style={styles.td}>$70,515</td>
                  <td style={styles.td}>? 4.7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Recent Activity</h2>
            <div style={styles.activityItem}>
              <div style={{...styles.activityIcon, background: '#e6fffa'}}>??</div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>New User Registered</div>
                <div style={{ fontSize: '14px', color: '#718096' }}>Sarah Chen joined the platform</div>
                <div style={{ fontSize: '12px', color: '#a0aec0', marginTop: '5px' }}>2 hours ago</div>
              </div>
            </div>
            <div style={styles.activityItem}>
              <div style={{...styles.activityIcon, background: '#fef5e7'}}>??</div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Course Published</div>
                <div style={{ fontSize: '14px', color: '#718096' }}>New course "Cloud Computing" added</div>
                <div style={{ fontSize: '12px', color: '#a0aec0', marginTop: '5px' }}>5 hours ago</div>
              </div>
            </div>
            <div style={styles.activityItem}>
              <div style={{...styles.activityIcon, background: '#fce4ec'}}>??</div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Payment Received</div>
                <div style={{ fontSize: '14px', color: '#718096' }}>$49.99 from Michael Brown</div>
                <div style={{ fontSize: '12px', color: '#a0aec0', marginTop: '5px' }}>1 day ago</div>
              </div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Quick Actions</h2>
            <button style={{ width: '100%', padding: '15px', background: '#667eea', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' }}>
              Add New Course
            </button>
            <button style={{ width: '100%', padding: '15px', background: '#48bb78', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '10px' }}>
              Manage Users
            </button>
            <button style={{ width: '100%', padding: '15px', background: '#ed8936', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
