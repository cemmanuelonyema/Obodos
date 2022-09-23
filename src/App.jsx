import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/GlobalStyles.js';

import { Layout } from './Layout';
import { Details } from './pages/details/Details';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notfound/NotFound';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCountries } from './redux/slices/countriesSlice.js';
import { darkTheme, lightTheme } from './styles/Theme.js';
import { GlobalStyles } from './styles/GlobalStyles.js';

export const App = () => {
  const { darkMode } = useSelector(selectCountries);

  return (
    <ThemeProvider theme={darkMode ? lightTheme : darkTheme}>
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
