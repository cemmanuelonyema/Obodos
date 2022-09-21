import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { CountryDetail } from './components/countries/countryDetail/CountryDetail';

import { Layout } from './Layout';
import { Details } from './pages/details/Details';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notfound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="details" element={<Details />} />
        <Route path="details/:name" element={<CountryDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
