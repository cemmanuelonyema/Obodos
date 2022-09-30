import React, { useEffect, useState } from 'react';
import { FaTimes, FaSearch } from 'react-icons/fa';
import { StyledSearch } from './StyledSearch.js';
import { useDispatch } from 'react-redux';
import {
  filterCountries,
  //   getCountry,
  clearFiltered,
  filterCountry,
  filtered,
} from '../../../redux/slices/countriesSlice';
import { useGetCountryByNameQuery } from '../../../redux/slices/apiSlice.js';
// import { useDebounce } from '../../../hooks/useDebounce.js';

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
      if (searchQuery) dispatch(filterCountry(searchQuery));
    }, 700);

    //clean up - runs on every rerender
    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery]);

  //   const debouncedQuery = useDebounce(searchQuery, 1000);

  //   const { data } = useGetCountryByNameQuery(searchQuery);
  //   dispatch(filtered(data));

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
