import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Country } from './country/Country';
import { StyledCountries } from './StyledCountries.js';
import {
  getCountries,
  selectCountries,
} from '../../redux/slices/countriesSlice';
import { Skeleton } from '../layout/skeleton/Skeleton';
import { useGetCountriesQuery } from '../../redux/slices/apiSlice';

export const Countries = () => {
  //hooks
  const { countries, filtered, status } = useSelector(selectCountries);
  const dispatch = useDispatch();

  //useEffect
  useEffect(() => {
    //Async Action
    // dispatch(getCountries());
    // useGetCountries();
  }, []);

  const { data, error, isLoading } = useGetCountriesQuery();
  console.log('data:', data);

  const renderCountries = filtered ? filtered : data;

  //loading
  //   if (status === 'loading') {
  if (isLoading) {
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
          //   data?.map((country, i) => <Country key={i} country={country} />)
          renderCountries?.map((country, i) => (
            <Country key={i} country={country} />
          ))
        )}
      </div>
    </StyledCountries>
  );
};
