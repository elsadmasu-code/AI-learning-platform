import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCourses } from '../features/courseSlice';
import api from '../services/api';

function Courses() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { courses } = useSelector((state) => state.courses);
  const [activeFilter, setActiveFilter] = useState('All Courses');
  const [filteredCourses, setFilteredCourses] = useState([]);

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

  const sampleCourses = [
    { _id: '1', title: 'AI & Machine Learning Bootcamp', description: 'Master AI and ML from scratch with hands-on projects', price: 49.99, level: 'Beginner', students: 1234, isFree: false, isPopular: true },
    { _id: '2', title: 'Full Stack Web Development', description: 'Build modern web applications with MERN stack', price: 39.99, level: 'Intermediate', students: 2345, isFree: false, isPopular: true },
    { _id: '3', title: 'Data Science with Python', description: 'Learn data analysis, visualization, and machine learning', price: 44.99, level: 'Beginner', students: 1567, isFree: false, isPopular: false },
    { _id: '4', title: 'Cloud Computing with AWS', description: 'Master AWS services and cloud architecture', price: 54.99, level: 'Advanced', students: 987, isFree: false, isPopular: false },
    { _id: '5', title: 'Mobile App Development', description: 'Build iOS and Android apps with React Native', price: 42.99, level: 'Intermediate', students: 1876, isFree: false, isPopular: true },
    { _id: '6', title: 'Cybersecurity Fundamentals', description: 'Learn ethical hacking and security best practices', price: 0, level: 'Beginner', students: 1432, isFree: true, isPopular: false },
  ];

  const displayCourses = courses.length > 0 ? courses : sampleCourses;

  useEffect(() => {
    filterCourses(activeFilter);
  }, [displayCourses, activeFilter]);

  const filterCourses = (filter) => {
    let filtered = [...displayCourses];
    
    switch(filter) {
      case 'Beginner':
        filtered = displayCourses.filter(course => course.level === 'Beginner');
        break;
      case 'Intermediate':
        filtered = displayCourses.filter(course => course.level === 'Intermediate');
        break;
      case 'Advanced':
        filtered = displayCourses.filter(course => course.level === 'Advanced');
        break;
      case 'Free':
        filtered = displayCourses.filter(course => course.isFree || course.price === 0);
        break;
      case 'Popular':
        filtered = displayCourses.filter(course => course.isPopular || course.students > 1500);
        break;
      default:
        filtered = displayCourses;
    }
    
    setFilteredCourses(filtered);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  const styles = {
    container: { padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' },
    header: { marginBottom: '40px' },
    title: { fontSize: '36px', fontWeight: 'bold', color: '#2d3748', marginBottom: '10px' },
    subtitle: { fontSize: '18px', color: '#718096' },
    filters: { display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' },
    filterButton: { 
      padding: '10px 20px', 
      background: '#f7fafc', 
      border: '1px solid #e2e8f0', 
      borderRadius: '20px', 
      cursor: 'pointer', 
      transition: 'all 0.3s',
      fontSize: '14px',
      fontWeight: '500',
      minWidth: '44px',
      minHeight: '44px',
    },
    filterButtonActive: {
      background: '#667eea',
      color: 'white',
      border: '1px solid #667eea',
    },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' },
    card: { 
      background: 'white', 
      borderRadius: '15px', 
      overflow: 'hidden', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
      transition: 'transform 0.3s',
      cursor: 'pointer',
    },
    thumbnail: { width: '100%', height: '200px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '48px' },
    cardContent: { padding: '20px' },
    courseTitle: { fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#2d3748' },
    courseDesc: { fontSize: '14px', color: '#718096', marginBottom: '15px', lineHeight: '1.6' },
    cardFooter: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    price: { fontSize: '24px', fontWeight: 'bold', color: '#667eea' },
    enrollButton: { 
      padding: '10px 20px', 
      background: '#667eea', 
      color: 'white', 
      border: 'none', 
      borderRadius: '20px', 
      cursor: 'pointer', 
      fontWeight: 'bold',
      transition: 'background 0.3s',
      minWidth: '44px',
      minHeight: '44px',
    },
    meta: { display: 'flex', gap: '15px', fontSize: '14px', color: '#718096', marginBottom: '15px', flexWrap: 'wrap' },
  };

  return (
    <div style={styles.container}>
      <style>{`
        @media (max-width: 768px) {
          .courses-title { font-size: 28px !important; }
          .courses-subtitle { font-size: 16px !important; }
          .courses-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .filter-button { padding: 8px 16px !important; font-size: 13px !important; }
        }
        .enroll-button:hover {
          background: #5568d3 !important;
        }
        .filter-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.15);
        }
      `}</style>

      <div style={styles.header}>
        <h1 style={styles.title} className="courses-title">Explore Courses</h1>
        <p style={styles.subtitle} className="courses-subtitle">Choose from over 500+ courses to advance your career</p>
      </div>
      
      <div style={styles.filters}>
        {['All Courses', 'Beginner', 'Intermediate', 'Advanced', 'Free', 'Popular'].map((filter) => (
          <button 
            key={filter}
            className="filter-button"
            style={{
              ...styles.filterButton,
              ...(activeFilter === filter ? styles.filterButtonActive : {})
            }}
            onClick={() => handleFilterClick(filter)}
            onMouseOver={(e) => {
              if (activeFilter !== filter) {
                e.target.style.background = '#e2e8f0';
              }
            }}
            onMouseOut={(e) => {
              if (activeFilter !== filter) {
                e.target.style.background = '#f7fafc';
              }
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div style={styles.grid} className="courses-grid">
        {filteredCourses.map((course) => (
          <div 
            key={course._id} 
            style={styles.card} 
            onClick={() => handleCourseClick(course._id)}
            onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} 
            onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
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
                <span style={styles.price}>
                  {course.price === 0 || course.isFree ? 'Free' : `$${course.price}`}
                </span>
                <button 
                  className="enroll-button"
                  style={styles.enrollButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCourseClick(course._id);
                  }}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;

 