import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';

//axios config
const baseURL = 'https://restcountries.com/v3.1';
export const countryApi = axios.create({
  baseURL,
});

//Async Thunks
export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async () => {
    try {
      const res = await countryApi.get('/all');
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
);

export const getCountry = createAsyncThunk(
  'countries/getCountry',
  async (name) => {
    try {
      const res = await countryApi.get(`/name/${name}?fullText=true`);
      const [data] = res.data; // destructure data off the arr of res
      return data;
    } catch (err) {
      console.log(err.message);
      return err.message();
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
  ],
  country: {},
  status: 'idle', //  || succeeded || pending || failed
  darkMode: false,
  filtered: [],
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
        const region = country.region.match(regex);
        return name || region;
      });
    },
    clearFiltered(state) {
      state.filtered = [];
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
        state.error = action.err.message;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.status = 'succeeded';
        state.countries = action.payload;
        console.log(state.countries);
      })
      //getCountry
      .addCase(getCountry.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCountry.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.err.message;
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.country = action.payload;
        console.log(state.country);
      });
  },
});

export const { setMode, filterCountries, clearFiltered } =
  countriesSlice.actions;
export default countriesSlice.reducer;

//Selectors
export const selectCountries = (state) => state.countriesSlice;
