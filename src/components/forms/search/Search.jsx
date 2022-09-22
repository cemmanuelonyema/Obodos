import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import './search.css';
import { useDispatch } from 'react-redux';
import {
  filterCountries,
  clearFiltered,
} from '../../../redux/slices/countriesSlice';

export const Search = () => {
  //hooks
  const dispatch = useDispatch();
  //local state
  const [searchQuery, setSearchQuery] = useState('');

  //Methods
  const handleClear = () => {
    setSearchQuery('');
    dispatch(clearFiltered());
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
    dispatch(filterCountries(searchQuery));
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="form search__form">
      <FiSearch className="icon" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={handleChange}
      />
      {searchQuery !== '' ? <FaTimes onClick={handleClear} /> : ''}
    </form>
  );
};
