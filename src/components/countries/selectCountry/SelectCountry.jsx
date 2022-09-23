import React from 'react';
import { StyledSelectCountry } from './StyledSelectCountry';

export const SelectCountry = ({ country }) => {
  console.log(country);
  return (
    <StyledSelectCountry>
      <div className="selectCountry__container">
        <div className="image">
          <img src={country?.flags?.svg} alt="flag" />
        </div>
        <div className="details">
          <h3>{country?.name?.common}</h3>
          <div className="data">
            <div className="data__left">
              <span>Native Name:</span> {country?.nativeName}
              <span>Population:</span> {country?.population}
              <span>Region:</span> {country?.region}
              <span>Sub Region:</span> {country?.region}
              <span>Capital:</span> {country?.capital}
            </div>
            <div className="data__right">
              <span>Top level Domain:</span>
              {country?.tld}
              <span>Currencies:</span>
              {country?.pen?.name}
              <span>Languages:</span>
              {country?.languages?.spa}
            </div>
          </div>
          <div className="borders">
            <h4>Border countries</h4>
            {country?.borders?.map((bor) => (
              <span className="border-box">{bor}</span>
            ))}

            {/* <span>bor</span>
            <span>bor</span>
            <span>bor</span>
            <span>bor</span> */}
          </div>
        </div>
      </div>
    </StyledSelectCountry>
  );
};
