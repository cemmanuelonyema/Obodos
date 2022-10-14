import React, { useEffect, useState } from 'react';
import { FaTimes, FaSearch } from 'react-icons/fa';
import { StyledSearch } from './StyledSearch.jsx';
import { useDispatch } from 'react-redux';
import {
  clearFiltered,
  filterCountries,
} from '../../../redux/slices/countriesSlice';
import './StyledSearch';

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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery) dispatch(filterCountries(searchQuery));
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  return (
    <StyledSearch onSubmit={(e) => e.preventDefault()}>
      <FaSearch className="icon" />
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
