import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Country } from './components/countries/country/Country';

import { Layout } from './Layout';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notfound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="/:name" index element={<Country />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

// https://restcountries.com/v3.1/name/{name}
// https://restcountries.com/v3.1/name/peru
