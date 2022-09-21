import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Header } from './components/layout/header/Header';
import { Layout } from './layout';
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notfound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
