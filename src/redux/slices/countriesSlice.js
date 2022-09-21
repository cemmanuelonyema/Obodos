import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1';
axios.create({
  baseURL,
});

const initialState = {
  countries: [],
  country: {},
  isLoading: true,
  darkMode: false,
};

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,

  //immerjs,creates new state underneath
  reducers: {
    setMode(state) {
      state.darkMode = !state.darkMode;
    },
    getCountries(state, action) {
      state.countries = action.payload;
      state.isLoading = false;
    },
    getCountry(state, action) {
      state.country = action.payload;
      state.isLoading = false;
    },
  },
});

export const selectCountries = (state) => state.countriesSlice;
export const { setMode, getCountries, getCountry } = countriesSlice.actions;
export default countriesSlice.reducer;

//Async Actions

// export const getCountries = createAsyncThunk('', async () => {
//   try {
//     const res = await axios.get('/all');
//     console.log(res.data);
//     return res.data;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// });

// export const getCountry = createAsyncThunk('', async () => {
//   try {
//     const res = await axios.get('/name/${name}?fullText=true');
//     console.log(res.data);
//     return res.data;
//   } catch (err) {
//     console.log(err);
//     return err;
//   }
// });
