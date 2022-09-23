import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import { StyledSearch } from './StyledSearch.js';
import { useDispatch } from 'react-redux';
import {
  filterCountries,
  clearFiltered,
  getCountry,
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

  //useEffect
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery) dispatch(getCountry(searchQuery));
    }, 1000);

    //clean up - runs on every rerender
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  return (
    <StyledSearch onSubmit={(e) => e.preventDefault()}>
      <FiSearch className="icon" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery !== '' ? <FaTimes onClick={handleClear} /> : ''}
    </StyledSearch>
  );
};
