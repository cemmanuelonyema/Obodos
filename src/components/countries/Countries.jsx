import React from 'react';
import { useSelector } from 'react-redux';
import { Country } from './country/Country';
import { StyledCountries } from './StyledCountries.js';
import { selectCountries } from '../../redux/slices/countriesSlice';
import { Skeleton } from '../layout/skeleton/Skeleton';
import { useGetCountriesQuery } from '../../redux/slices/apiSlice';

export const Countries = () => {
  //hooks
  const { filtered } = useSelector(selectCountries);
  const { data, isLoading } = useGetCountriesQuery();

  //loading
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

  const renderData = filtered ? filtered : data;

  //jsx
  return (
    <StyledCountries>
      <div className="container countries__container">
        {filtered && filtered.length === 0 ? (
          <h4> No Contacts Matched</h4>
        ) : (
          renderData?.map((country, i) => <Country key={i} country={country} />)
        )}
      </div>
    </StyledCountries>
  );
};
