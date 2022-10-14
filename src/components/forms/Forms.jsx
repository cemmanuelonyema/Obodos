import React from 'react';
import { Filter } from './filter/Filter';
import { Search } from './search/Search';
import { StyledForms } from './StyledForms.jsx';

export const Forms = () => {
  return (
    <StyledForms>
      <div className="container forms__container">
        <Search />
        <Filter />
      </div>
    </StyledForms>
  );
};
