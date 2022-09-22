import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//axios config
const baseURL = 'https://restcountries.com/v3.1';
axios.create({
  baseURL,
});

//Async Thunks
export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    try {
      const res = await axios.get('/all');
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

export const getCountry = createAsyncThunk(
  'countries/getCountry',
  async (name) => {
    try {
      const res = await axios.get(`/name/${name}?fullText=true`);
      console.log(res.data);
      const { data } = res.data; // destructure data off the arr of res
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
);

//State
const initialState = {
  countries: [],
  country: {},
  status: 'idle', //  || succeeded || pending || failed
  darkMode: false,
  error: null,
};

//Reducer
export const countriesSlice = createSlice({
  name: 'countries',
  initialState,

  //immerjs,creates new state underneath
  reducers: {
    setMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
  extraReducers(builder) {
    builder
      //getCountries
      .addCase(getCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      })
      //getCountry
      .addCase(getCountry.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.country = action.payload;
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
      });
  },
});

export const selectCountries = (state) => state.countriesSlice;
export const { setMode, getCountries1, getCountry1 } = countriesSlice.actions;
export default countriesSlice.reducer;
