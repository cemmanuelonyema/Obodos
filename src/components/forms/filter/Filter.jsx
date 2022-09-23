import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { filterCountries } from '../../../redux/slices/countriesSlice';
import { StyledFilter } from './StyledFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (e) => dispatch(filterCountries(e.target.value));

  return (
    <StyledFilter className="select">
      <select name="label" onChange={handleChange}>
        <option>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <FiChevronDown className="icon" />
    </StyledFilter>
  );
};
