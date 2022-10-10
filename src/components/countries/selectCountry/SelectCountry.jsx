import React from 'react';
import { Link } from 'react-router-dom';
import { StyledSelectCountry } from './StyledSelectCountry';

export const SelectCountry = ({ country }) => {
  return (
    <StyledSelectCountry>
      <div className="selectCountry__container">
        <div className="image">
          <img src={country?.flags?.svg} alt="flag" />
        </div>

        <div className="details">
          <h2>{country?.name}</h2>
          <div className="data">
            <div className="data__left">
              <div className="data__row">
                <span className="data__name">Native Name:</span>
                <span className="data__item"> {country?.nativeName}</span>
              </div>
              <div className="data__row">
                <span className="data__name">Population:</span>
                <span className="data__item"> {country?.population}</span>
              </div>
              <div className="data__row">
                <span className="data__name">Region:</span>
                <span className="data__item"> {country?.region}</span>
              </div>
              <div className="data__row">
                <span className="data__name">Capital:</span>
                <span className="data__item"> {country?.capital}</span>
              </div>
            </div>
            <div className="data__right">
              <div className="data__row">
                <span className="data__name">Top Level Domain:</span>
                <span className="data__item">{country?.topLevelDomain}</span>
              </div>
              <div className="data__row">
                <span className="data__name">Currency:</span>
                <span className="data__item">
                  {' '}
                  {country?.currencies?.map((cur) => cur.name)}
                </span>
              </div>
              <div className="data__row">
                <span className="data__name">Language:</span>
                <span className="data__item">
                  {' '}
                  {country?.languages?.map((lang) => lang.name)}
                </span>
              </div>
            </div>
          </div>
          <div className="borders">
            <h4>Border countries</h4>
            <div className="border">
              {country?.borders?.map((bor) => (
                <Link key={bor} to={`/countries/${bor}`}>
                  {' '}
                  <span className="border-box">{bor}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledSelectCountry>
  );
};
