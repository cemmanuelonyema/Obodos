import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './slices/countriesSlice';

export const store = configureStore({
  reducer: {
    countriesSlice,
  },
});
