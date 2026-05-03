import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'courses',
  initialState: { courses: [], selectedCourse: null },
  reducers: {
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    setSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
  },
});

export const { setCourses, setSelectedCourse } = courseSlice.actions;
export default courseSlice.reducer;
