import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countries: [],
  country: {},
  isLoading: true,
  darkMode: false,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setMode } = countriesSlice.actions;
export default countriesSlice.reducer;
