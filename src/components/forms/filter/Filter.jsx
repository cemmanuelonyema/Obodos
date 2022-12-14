import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { filterCountries } from '../../../redux/slices/countriesSlice';
import { StyledFilter } from './StyledFilter';

export const Filter = () => {
  const dispatch = useDispatch();
  //   const handleChange = (e) => dispatch(filterCountries(e.target.value));

  return (
    <StyledFilter>
      <select
        name="label"
        onChange={(e) => dispatch(filterCountries(e.target.value))}
      >
        <option>Filter by Region...</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>

      <FaChevronDown className="icon" />
    </StyledFilter>
  );
};
