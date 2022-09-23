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
  countries: [
    {
      name: {
        common: 'Peru',
      },
      population: 12971846,
      capital: ['Leman'],
      region: 'Americas',
    },
    {
      name: {
        common: 'USA',
      },
      population: 22971846,
      capital: ['Ama'],
      region: 'Europe',
    },
    {
      name: {
        common: 'Span',
      },
      population: 42971846,
      capital: ['Edu'],
      region: 'Americas',
    },
    {
      name: {
        common: 'Nigeria',
      },
      population: 629718467455,
      capital: ['Abuja'],
      region: 'Africa',
    },
  ],
  country: {},
  status: 'idle', //  || succeeded || pending || failed
  darkMode: false,
  filtered: null,
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
    filterCountries(state, action) {
      state.filtered = state.countries.filter((country) => {
        console.log('payload:', action.payload);
        const regex = new RegExp(`${action.payload}`, 'gi');
        const name = country.name.common.match(regex);
        const capital = country.capital[0].match(regex);
        const region = country.region.match(regex);
        return name || capital || region;
      });
    },
    clearFiltered(state) {
      state.filtered = null;
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
export const { setMode, filterCountries, clearFiltered } =
  countriesSlice.actions;
export default countriesSlice.reducer;
