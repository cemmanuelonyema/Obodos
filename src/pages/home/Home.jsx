import React from 'react';
import { Countries } from '../../components/countries/Countries';
import { Forms } from '../../components/forms/Forms';

export const Home = () => {
  return (
    <main>
      <Forms />
      <Countries />
    </main>
  );
};
