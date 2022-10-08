import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Country } from './country/Country';
import { StyledCountries } from './StyledCountries.jsx';
import {
  getCountries,
  selectCountries,
} from '../../redux/slices/countriesSlice';
import { Skeleton } from '../layout/skeleton/Skeleton';

export const Countries = () => {
  //hooks
  const { countries, filtered, status } = useSelector(selectCountries);
  const dispatch = useDispatch();

  //useEffect
  useEffect(() => {
    //Async Action
    dispatch(getCountries());
  }, []);

  const renderCountries = filtered ? filtered : countries;

  //loading
  if (status === 'loading') {
    const load = [1, 2, 3, 4, 5, 6, 7, 8, , 9, 10, 11, 12];
    return (
      <StyledCountries>
        <div className="container countries__container">
          {load.map((x, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      </StyledCountries>
    );
  }

  //jsx
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
