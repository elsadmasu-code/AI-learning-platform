import { createSlice } from '@reduxjs/toolkit';

const paymentSlice = createSlice({
  name: 'payment',
  initialState: { payments: [], currentPayment: null },
  reducers: {
    setPayments: (state, action) => {
      state.payments = action.payload;
    },
    setCurrentPayment: (state, action) => {
      state.currentPayment = action.payload;
    },
  },
});

export const { setPayments, setCurrentPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
