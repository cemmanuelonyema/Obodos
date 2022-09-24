import React, { Fragment, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/GlobalStyles.js';

import { Layout } from './Layout';
import { Details } from './pages/details/Details';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notfound/NotFound';
import { ThemeProvider } from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { selectCountries, setMode } from './redux/slices/countriesSlice.js';
import { darkTheme, lightTheme } from './styles/Theme.js';
import { GlobalStyles } from './styles/GlobalStyles.js';

export const App = () => {
  //hooks
  const { darkMode } = useSelector(selectCountries);
  const dispatch = useDispatch();

  // set theme according to user default setting
  //   useEffect(() => {
  //     const savedTheme = localStorage.getItem('theme');
  //     console.log(savedTheme);
  //     const prefersDark =
  //       window.matchMedia &&
  //       window.matchMedia('(prefers-color-scheme: dark)').matches;
  //     if (prefersDark) {
  //       dispatch(setMode());
  //     }
  //   }, []);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
