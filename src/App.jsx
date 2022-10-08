import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/GlobalStyles.js';

import { Layout } from './Layout';
import { Details } from './pages/details/Details';
import { Home } from './pages/home/Home';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { selectCountries } from './redux/slices/countriesSlice.js';
import { darkTheme, lightTheme } from './styles/Theme.js';
import { GlobalStyles } from './styles/GlobalStyles.js';

export const App = () => {
  //hooks
  const { darkMode } = useSelector(selectCountries);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countries/:name" element={<Details />} />
          {/* Automatically redirect to home if no page matched*/}
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};
