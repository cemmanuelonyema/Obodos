import React from 'react';
import { StyledCountry } from './StyledCountry.jsx';

export const Country = ({ country }) => {
  return (
    <StyledCountry to={`/countries/${country?.alpha3Code}`}>
      <article className="country">
        <div className="country__img">
          <img src={country?.flag} alt="country image" />
        </div>
        <div className="country__data">
          <h2 className="country__name">{country?.name}</h2>
          <div className="country__data_row">
            <span className="country__data_name">Population:</span>
            <span className="country__data_item"> {country?.population}</span>
          </div>
          <div className="country__data_row">
            <span className="country__data_name">Region:</span>{' '}
            <span className="country__data_item">{country?.region}</span>
          </div>
          <div className="country__data_row">
            <span className="country__data_name">Capital:</span>{' '}
            <span className="country__data_item">{country?.capital}</span>
          </div>
        </div>
      </article>
    </StyledCountry>
  );
};
