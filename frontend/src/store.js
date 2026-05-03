import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import courseReducer from './features/courseSlice';
import userReducer from './features/userSlice';
import quizReducer from './features/quizSlice';
import paymentReducer from './features/paymentSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: courseReducer,
    user: userReducer,
    quiz: quizReducer,
    payment: paymentReducer,
  },
});

export default store;
