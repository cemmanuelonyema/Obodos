import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { StyledSearch } from './StyledSearch.js';

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <StyledSearch onSubmit={handleSubmit} className="form search__form">
      {' '}
      <FiSearch className="icon" />
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={handleChange}
      />
    </StyledSearch>
  );
};
