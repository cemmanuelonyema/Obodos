import React from 'react';
import { useSelector } from 'react-redux';
import { selectCountries } from '../../../redux/slices/countriesSlice';
import { StyledSelectCountry } from './StyledSelectCountry';

export const SelectCountry = () => {
  const { country } = useSelector(selectCountries);
  return (
    <StyledSelectCountry>
      <div className="selectCountry__container">
        <div>
          <img src="" alt="flag" />
        </div>
        <div className="details">
          <h3>Name</h3>
          <div className="data">
            <div className="data__left">
              <span>Native Name:</span>
              <span>Population:</span>
              <span>Region:</span>
              <span>Sub Region:</span>
              <span>Capital:</span>
            </div>
            <div className="data__right">
              <span>Top level Domain:</span>
              <span>Currencies:</span>
              <span>Languages:</span>
            </div>
          </div>
          <div className="borders">
            {country?.border?.map((bor) => {
              <span className="border-box">{bor}</span>;
            })}
            <h4>Border countries</h4>
            <span>bor</span>
            <span>bor</span>
            <span>bor</span>
            <span>bor</span>
          </div>
        </div>
      </div>
    </StyledSelectCountry>
  );
};
