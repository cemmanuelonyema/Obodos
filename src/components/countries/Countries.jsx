import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Country } from './country/Country';
import { StyledCountries } from './StyledCountries.js';
import {
  getCountries,
  selectCountries,
} from '../../redux/slices/countriesSlice';

export const Countries = () => {
  const { countries, filtered } = useSelector(selectCountries);
  const dispatch = useDispatch();
  //   const [countries, setCountries] = useState([]);

  useEffect(() => {
    // const getCountries = async () => {
    //   const res = await axios.get('https://restcountries.com/v3.1/all');
    //   // console.log(res.data);
    //   setCountries(res.data);
    // };
    // getCountries();

    //thunk
    dispatch(getCountries());
  }, []);

  const renderCountries = filtered.length > 1 ? filtered : countries;
  console.log(renderCountries);

  return (
    <StyledCountries>
      {' '}
      <div className="container countries__container">
        {renderCountries?.map((country) => (
          <Country key={country.name.common} country={country} />
        ))}
        {/* 
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        {/* 
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
        <Country /> */}
      </div>
    </StyledCountries>
  );
};
