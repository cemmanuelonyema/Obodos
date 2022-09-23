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
  const { countries, filtered } = useSelector(selectCountries);
  const dispatch = useDispatch();

  //useEffect
  useEffect(() => {
    //Async Action
    dispatch(getCountries());
  }, []);

  const renderCountries = filtered.length ? filtered : countries;

  return (
    <StyledCountries>
      {' '}
      <div className="container countries__container">
        {renderCountries?.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
      </div>
    </StyledCountries>
  );
};
