import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Country } from './country/Country';
import { StyledCountries } from './StyledCountries.js';
import {
  getCountries,
  selectCountries,
} from '../../redux/slices/countriesSlice';

export const Countries = () => {
  //hooks
  const { countries, filtered, status } = useSelector(selectCountries);
  const dispatch = useDispatch();

  const renderCountries = filtered.length > 1 ? filtered : countries;

  //useEffect
  useEffect(() => {
    //Async Action
    dispatch(getCountries());
  }, []);

  const render = () => {
    if (status === 'loading' || 'idle') {
      return (
        <div className="container">
          <h2>Loading ......</h2>
        </div>
      );
    }

    if (status === 'succeeded' && filtered.length < 1) {
      return (
        <div className="container">
          <h2>No country matched</h2>
        </div>
      );
    }

    if (status === 'succeeded') {
      const renderCountries = filtered.length > 1 ? filtered : countries;
      return (
        <div className="container countries__container">
          {renderCountries?.map((country) => (
            <Country key={country.name.common} country={country} />
          ))}
        </div>
      );
    }
  };

  return (
    <StyledCountries>
      <div className="container countries__container">
        {renderCountries?.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </div>
    </StyledCountries>
  );
};
