import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCourse } from '../features/courseSlice';
import api from '../services/api';

function CourseDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedCourse } = useSelector((state) => state.courses);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await api.get(`/courses/${id}`);
        dispatch(setSelectedCourse(data));
      } catch (error) {
        console.error('Error fetching course:', error);
      }
    };
    fetchCourse();
  }, [id, dispatch]);

  const styles = {
    container: { minHeight: '100vh', background: '#f7fafc' },
    hero: { background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '60px 20px' },
    heroContent: { maxWidth: '1200px', margin: '0 auto' },
    breadcrumb: { fontSize: '14px', marginBottom: '20px', opacity: 0.9 },
    title: { fontSize: '42px', fontWeight: 'bold', marginBottom: '15px' },
    subtitle: { fontSize: '18px', marginBottom: '30px', opacity: 0.9 },
    meta: { display: 'flex', gap: '30px', flexWrap: 'wrap' },
    metaItem: { display: 'flex', alignItems: 'center', gap: '8px' },
    content: { maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' },
    mainContent: { background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
    sidebar: { position: 'sticky', top: '100px', height: 'fit-content' },
    card: { background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px' },
    sectionTitle: { fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', color: '#2d3748' },
    price: { fontSize: '36px', fontWeight: 'bold', color: '#667eea', marginBottom: '20px' },
    enrollButton: { width: '100%', padding: '15px', background: '#667eea', color: 'white', border: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '15px' },
    feature: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px', color: '#4a5568' },
    curriculum: { marginTop: '30px' },
    module: { background: '#f7fafc', padding: '20px', borderRadius: '10px', marginBottom: '15px' },
    moduleTitle: { fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', color: '#2d3748' },
    lesson: { padding: '10px', borderLeft: '3px solid #667eea', paddingLeft: '15px', marginBottom: '10px', background: 'white', borderRadius: '5px' },
  };

  const sampleCourse = {
    title: 'AI & Machine Learning Bootcamp',
    description: 'Master artificial intelligence and machine learning from scratch. Build real-world projects and get job-ready skills.',
    price: 49.99,
    rating: 4.8,
    students: 12340,
    duration: '40 hours',
    level: 'Beginner',
    instructor: 'Dr. Sarah Johnson',
  };

  const course = selectedCourse || sampleCourse;

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.breadcrumb}>Home / Courses / {course.title}</div>
          <h1 style={styles.title}>{course.title}</h1>
          <p style={styles.subtitle}>{course.description}</p>
          <div style={styles.meta}>
            <div style={styles.metaItem}>⭐ {course.rating} Rating</div>
            <div style={styles.metaItem}>👥 {course.students} Students</div>
            <div style={styles.metaItem}>⏱️ {course.duration}</div>
            <div style={styles.metaItem}>📶 {course.level}</div>
          </div>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.mainContent}>
          <h2 style={styles.sectionTitle}>What You'll Learn</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '30px' }}>
            <div style={styles.feature}>? Build AI models from scratch</div>
            <div style={styles.feature}>? Master machine learning algorithms</div>
            <div style={styles.feature}>? Work with real datasets</div>
            <div style={styles.feature}>? Deploy ML models to production</div>
            <div style={styles.feature}>? Natural Language Processing</div>
            <div style={styles.feature}>? Computer Vision projects</div>
          </div>

          <div style={styles.curriculum}>
            <h2 style={styles.sectionTitle}>Course Curriculum</h2>
            <div style={styles.module}>
              <div style={styles.moduleTitle}>Module 1: Introduction to AI</div>
              <div style={styles.lesson}>▶️ What is Artificial Intelligence? (15 min)</div>
              <div style={styles.lesson}>▶️ History and Evolution of AI (20 min)</div>
              <div style={styles.lesson}>❓ Quiz: AI Fundamentals</div>
            </div>
            <div style={styles.module}>
              <div style={styles.moduleTitle}>Module 2: Machine Learning Basics</div>
              <div style={styles.lesson}>▶️ Introduction to ML (25 min)</div>
              <div style={styles.lesson}>▶️ Supervised vs Unsupervised Learning (30 min)</div>
              <div style={styles.lesson}>▶️ Hands-on: First ML Model</div>
            </div>
            <div style={styles.module}>
              <div style={styles.moduleTitle}>Module 3: Deep Learning</div>
              <div style={styles.lesson}>▶️ Neural Networks Explained (35 min)</div>
              <div style={styles.lesson}>▶️ Building Your First Neural Network (40 min)</div>
              <div style={styles.lesson}>▶️ Project: Image Classification</div>
            </div>
          </div>
        </div>

        <div style={styles.sidebar}>
          <div style={styles.card}>
            <div style={styles.price}>${course.price}</div>
            <button style={styles.enrollButton}>Enroll Now</button>
            <button style={{...styles.enrollButton, background: 'white', color: '#667eea', border: '2px solid #667eea'}}>Add to Wishlist</button>
            <div style={{ marginTop: '20px' }}>
              <div style={styles.feature}>? Lifetime access</div>
              <div style={styles.feature}>? Certificate of completion</div>
              <div style={styles.feature}>? 30-day money-back guarantee</div>
              <div style={styles.feature}>? Access on mobile and TV</div>
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '15px' }}>Instructor</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#667eea', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '24px' }}>👨‍🏫</div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>{course.instructor}</div>
                <div style={{ fontSize: '14px', color: '#718096' }}>AI Expert & Educator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
