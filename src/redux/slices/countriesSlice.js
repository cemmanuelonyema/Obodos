import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//axios config
const baseURL = 'https://restcountries.com/v2';
// const baseURL = 'https://restcountries.com/v3.1';
export const countryApi = axios.create({
  baseURL,
});

//Async Thunks
export const filterCountry = createAsyncThunk(
  'countries/filterCountry',
  async (name, { rejectWithValue }) => {
    try {
      const res = await countryApi.get(`/name/${name}`);
      return res.data;
    } catch (err) {
      console.log(err.message);
      return rejectWithValue(err.message());
    }
  }
);
export const filterRegion = createAsyncThunk(
  'countries/filterRegion',
  async (value, { rejectWithValue }) => {
    try {
      const res = await countryApi.get(`/region/${value}`);
      //   const [data] = res.data; // destructure data off the arr of res
      return res.data;
    } catch (err) {
      console.log(err.message);
      return rejectWithValue(err.message());
    }
  }
);

//State
const initialState = {
  //   countries: [
  //     {
  //       name: 'Peru',
  //       population: 12971846,
  //       capital: ['Leman'],
  //       region: 'Americas',
  //     },
  //     {
  //       name: 'Peru',
  //       population: 12971846,
  //       capital: ['Leman'],
  //       region: 'Americas',
  //     },
  //     {
  //       name: 'Peru',
  //       population: 12971846,
  //       capital: ['Leman'],
  //       region: 'Americas',
  //     },
  //     {
  //       name: 'Peru',
  //       population: 12971846,
  //       capital: ['Leman'],
  //       region: 'Americas',
  //     },
  //   ],
  //   status: 'idle', //  || succeeded || pending || failed
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
    clearFiltered(state) {
      state.filtered = null;
    },
  },
  extraReducers(builder) {
    builder
      //filterCountry
      .addCase(filterCountry.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(filterCountry.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.log(action.payload);
      })
      .addCase(filterCountry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.filtered = action.payload;
        console.log(state.country);
      })
      //filterRegion
      .addCase(filterRegion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(filterRegion.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
        console.log(action.payload);
      })
      .addCase(filterRegion.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.filtered = action.payload;
        console.log(state.country);
      });
  },
});

export const { setMode, filterCountries, clearFiltered, filtered } =
  countriesSlice.actions;

export default countriesSlice.reducer;

//Selectors
export const selectCountries = (state) => state.countriesSlice;
// export const selectFilterCountries = (state, query) => state.cou;

// export const selectFiltered = createSelector(
//   [selectCountries],
//   (countries, payload) => {
//     countries.filter((country) => {
//       console.log('payload:', payload);
//       const regex = new RegExp(`${payload}`, 'gi');
//       const name = country.name.common.match(regex);
//       const region = country.region.match(regex);
//       return name || region;
//     });
//   }
// );
