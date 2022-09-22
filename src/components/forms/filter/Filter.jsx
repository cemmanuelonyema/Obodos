import React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import './filter.css';

export const Filter = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="select">
      <select name="label" onChange={handleChange}>
        <option>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <FiChevronDown className="icon" />
    </div>
  );
};

// https://restcountries.com/v3.1/all
