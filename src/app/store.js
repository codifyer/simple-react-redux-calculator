import { configureStore } from '@reduxjs/toolkit';
import calcReducer from '../features/calc/calcSlice.js';

export const store = configureStore({
  reducer: {
    calc: calcReducer,
  },
});
