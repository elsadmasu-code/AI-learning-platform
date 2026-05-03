import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses } from '../features/courseSlice';
import api from '../services/api';

function Courses() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get('/courses');
        dispatch(setCourses(data));
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, [dispatch]);

  const styles = {
    container: { padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' },
    header: { marginBottom: '40px' },
    title: { fontSize: '36px', fontWeight: 'bold', color: '#2d3748', marginBottom: '10px' },
    subtitle: { fontSize: '18px', color: '#718096' },
    filters: { display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' },
    filterButton: { padding: '10px 20px', background: '#f7fafc', border: '1px solid #e2e8f0', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.3s' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' },
    card: { background: 'white', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', transition: 'transform 0.3s' },
    thumbnail: { width: '100%', height: '200px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '48px' },
    cardContent: { padding: '20px' },
    courseTitle: { fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#2d3748' },
    courseDesc: { fontSize: '14px', color: '#718096', marginBottom: '15px', lineHeight: '1.6' },
    cardFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    price: { fontSize: '24px', fontWeight: 'bold', color: '#667eea' },
    enrollButton: { padding: '10px 20px', background: '#667eea', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold' },
    meta: { display: 'flex', gap: '15px', fontSize: '14px', color: '#718096', marginBottom: '15px' },
  };

  const sampleCourses = [
    { _id: '1', title: 'AI & Machine Learning Bootcamp', description: 'Master AI and ML from scratch with hands-on projects', price: 49.99, level: 'Beginner', students: 1234 },
    { _id: '2', title: 'Full Stack Web Development', description: 'Build modern web applications with MERN stack', price: 39.99, level: 'Intermediate', students: 2345 },
    { _id: '3', title: 'Data Science with Python', description: 'Learn data analysis, visualization, and machine learning', price: 44.99, level: 'Beginner', students: 1567 },
    { _id: '4', title: 'Cloud Computing with AWS', description: 'Master AWS services and cloud architecture', price: 54.99, level: 'Advanced', students: 987 },
    { _id: '5', title: 'Mobile App Development', description: 'Build iOS and Android apps with React Native', price: 42.99, level: 'Intermediate', students: 1876 },
    { _id: '6', title: 'Cybersecurity Fundamentals', description: 'Learn ethical hacking and security best practices', price: 49.99, level: 'Beginner', students: 1432 },
  ];

  const displayCourses = courses.length > 0 ? courses : sampleCourses;

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Explore Courses</h1>
        <p style={styles.subtitle}>Choose from over 500+ courses to advance your career</p>
      </div>
      
      <div style={styles.filters}>
        <button style={styles.filterButton}>All Courses</button>
        <button style={styles.filterButton}>Beginner</button>
        <button style={styles.filterButton}>Intermediate</button>
        <button style={styles.filterButton}>Advanced</button>
        <button style={styles.filterButton}>Free</button>
        <button style={styles.filterButton}>Popular</button>
      </div>

      <div style={styles.grid}>
        {displayCourses.map((course) => (
          <div key={course._id} style={styles.card} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            <div style={styles.thumbnail}>📚</div>
            <div style={styles.cardContent}>
              <h3 style={styles.courseTitle}>{course.title}</h3>
              <div style={styles.meta}>
                <span>⭐ 4.8</span>
                <span>👥 {course.students || 0} students</span>
                <span>📶 {course.level || 'All Levels'}</span>
              </div>
              <p style={styles.courseDesc}>{course.description}</p>
              <div style={styles.cardFooter}>
                <span style={styles.price}>${course.price || 0}</span>
                <button style={styles.enrollButton}>Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
