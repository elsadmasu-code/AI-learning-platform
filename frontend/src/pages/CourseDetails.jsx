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
      const { data } = await api.get(/courses/);
      dispatch(setSelectedCourse(data));
    };
    fetchCourse();
  }, [id, dispatch]);

  if (!selectedCourse) return <div>Loading...</div>;

  return (
    <div>
      <h1>{selectedCourse.title}</h1>
      <p>{selectedCourse.description}</p>
    </div>
  );
}

export default CourseDetails;
