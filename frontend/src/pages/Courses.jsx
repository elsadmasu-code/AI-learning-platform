import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses } from '../features/courseSlice';
import api from '../services/api';

function Courses() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses);

  useEffect(() => {
    const fetchCourses = async () => {
      const { data } = await api.get('/courses');
      dispatch(setCourses(data));
    };
    fetchCourses();
  }, [dispatch]);

  return (
    <div>
      <h1>All Courses</h1>
      <div>
        {courses.map((course) => (
          <div key={course._id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
