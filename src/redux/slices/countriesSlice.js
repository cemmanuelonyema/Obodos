import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
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
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const getCountry = createAsyncThunk(
  'countries/getCountry',
  async (name, { rejectWithValue }) => {
    try {
      const res = await countryApi.get(`/name/${name}?fullText=true`);
      const [data] = res.data; // destructure data off the arr of res
      return data;
    } catch (err) {
      console.log(err.message);
      return rejectWithValue(err.message());
    }
  }
);
export const filterCountry = createAsyncThunk(
  'countries/filterCountry',
  async (name, { rejectWithValue }) => {
    try {
      const res = await countryApi.get(`/name/${name}`);
      //   const [data] = res.data; // destructure data off the arr of res
      return res.data;
    } catch (err) {
      console.log(err.message);
      return rejectWithValue(err.message());
    }
  }
);

export const getBorCountry = createAsyncThunk(
  'countries/getBorCountry',
  async (code, { rejectWithValue }) => {
    try {
      const res = await countryApi.get(`alpha/${code}`);
      console.log(res);
      const [data] = res.data; // destructure data off the arr of res
      return data;
    } catch (err) {
      console.log(err.message);
      return rejectWithValue(err.message());
    }
  }
);

//State
const initialState = {
  countries: [
    {
      name: 'Peru',
      population: 12971846,
      capital: ['Leman'],
      region: 'Americas',
    },
    {
      name: 'Peru',
      population: 12971846,
      capital: ['Leman'],
      region: 'Americas',
    },
    {
      name: 'Peru',
      population: 12971846,
      capital: ['Leman'],
      region: 'Americas',
    },
    {
      name: 'Peru',
      population: 12971846,
      capital: ['Leman'],
      region: 'Americas',
    },
  ],
  country: {},
  status: 'idle', //  || succeeded || pending || failed
  darkMode: false,
  //   filtered: null,
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
        console.log('payload:', action.payload);
        const regex = new RegExp(`${action.payload}`, 'gi');
        const name = country.name.common.match(regex);
        const region = country.region.match(regex);
        return name || region;
      });
      //   state.filtered = selectFiltered(action.payload);
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
        console.log(action.payload);
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        // console.log(action.payload);
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
        console.log(action.payload);
      })
      .addCase(getCountry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.country = action.payload;
        console.log(state.country);
      })
      //getBorCountry
      .addCase(getBorCountry.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getBorCountry.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        console.log(action.payload.message);
      })
      .addCase(getBorCountry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.country = action.payload;
        console.log(state.country);
      })
      //filterCountry
      .addCase(filterCountry.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(filterCountry.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.message;
        console.log(action.payload.message);
      })
      .addCase(filterCountry.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.filtered = action.payload;
        console.log(state.country);
      });
  },
});

export const { setMode, filterCountries, clearFiltered } =
  countriesSlice.actions;
export default countriesSlice.reducer;

//Selectors
export const selectCountries = (state) => state.countriesSlice;

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
