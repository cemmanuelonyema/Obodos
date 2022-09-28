import React, { useEffect } from 'react';
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

  const renderCountries = filtered ? filtered : countries;

  return (
    <StyledCountries>
      <div className="container countries__container">
        {filtered && filtered.length === 0 ? (
          <h4> No Contacts Matched</h4>
        ) : (
          renderCountries?.map((country, i) => (
            <Country key={i} country={country} />
          ))
        )}
      </div>
    </StyledCountries>
  );
};
