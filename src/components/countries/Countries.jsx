import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Country } from './country/Country';
import { StyledCountries } from './StyledCountries.js';

export const Countries = () => {
  // const {countries} = useSelector(selectCountries)

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getCountries = async () => {
      const res = await axios.get('https://restcountries.com/v3.1/all');
      // console.log(res.data);
      setCountries(res.data);
    };
    getCountries();
  }, []);

  return (
    <StyledCountries>
      {' '}
      <div className="container countries__container">
        {countries?.map((country) => (
          <Country country={country} />
        ))}

        {/* <Country />
        <Country />
        <Country />
        <Country />
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
