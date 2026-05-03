import { createSlice } from '@reduxjs/toolkit';

const quizSlice = createSlice({
  name: 'quiz',
  initialState: { currentQuiz: null, results: [] },
  reducers: {
    setCurrentQuiz: (state, action) => {
      state.currentQuiz = action.payload;
    },
    addResult: (state, action) => {
      state.results.push(action.payload);
    },
  },
});

export const { setCurrentQuiz, addResult } = quizSlice.actions;
export default quizSlice.reducer;
