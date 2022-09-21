import { configureStore } from '@reduxjs/toolkit';
import countriesSlice from './country/countriesSlice';

export const store = configureStore({
  reducer: {
    countries: countriesSlice,
  },
});
