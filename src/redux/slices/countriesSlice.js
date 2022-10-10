import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//axios config
const baseURL = 'https://restcountries.com/v2';
// const baseURL = 'https://restcountries.com/v3.1';
export const countryApi = axios.create({
  baseURL,
});

//Async Thunks
export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async (thunkApi) => {
    try {
      const res = await countryApi.get('/all');
      return res.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const getCountry = createAsyncThunk(
  'countries/getCountry',
  async (code, { rejectWithValue }) => {
    try {
      const res = await countryApi.get(`/alpha/${code}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message());
    }
  }
);

//State
const initialState = {
  countries: [
    {
      name: 'Nigeria',
      population: 12971846,
      capital: ['Abuja'],
      region: 'Africa',
    },
    {
      name: 'Peru',
      population: 12971846,
      capital: ['Leman'],
      region: 'Americas',
    },
    {
      name: 'Niger',
      population: 12971846,
      capital: ['lema'],
      region: 'Africa',
    },
    {
      name: 'China',
      population: 12971846,
      capital: ['yeman'],
      region: 'Asia',
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
      const theme = state.darkMode ? 'dark ' : 'light';
      localStorage.setItem('theme', theme);
    },
    filterCountries(state, action) {
      state.filtered = state.countries.filter((country) => {
        const regex = new RegExp(`${action.payload}`, 'gi');
        const name = country.name.match(regex);
        const region = country.region.match(regex);
        return name || region;
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
      .addCase(getCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      //getCountry
      .addCase(getCountry.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.country = action.payload;
      });
  },
});

export const { setMode, filterCountries, clearFiltered } =
  countriesSlice.actions;
export default countriesSlice.reducer;

//Selectors
export const selectCountries = (state) => state.countriesSlice;
