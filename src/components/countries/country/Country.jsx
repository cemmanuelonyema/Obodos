import React from 'react';
import { StyledCountry } from './StyledCountry.js';

export const Country = ({ country }) => {
  return (
    <StyledCountry to={`/${country?.name.common}`}>
      <article className="country">
        <div className="country__img">
          <img src={country?.flags?.svg} alt="country image" />
        </div>
        <div className="country__data">
          <h2 className="country__name">{country?.name?.common}</h2>
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

//  <article class="country">
//    <img class="country__img" src="" />
//    <div class="country__data">
//      <h3 class="country__name">COUNTRY</h3>
//      <h4 class="country__region">REGION</h4>
//      <p class="country__row">
//        <span>👫</span>POP people
//      </p>
//      <p class="country__row">
//        <span>🗣️</span>LANG
//      </p>
//      <p class="country__row">
//        <span>💰</span>CUR
//      </p>
//    </div>
//  </article>;

// "eslint-config-airbnb": "^19.0.4",
// "eslint-config-prettier": "^8.5.0",
// "eslint-plugin-import": "^2.26.0",
// "eslint-plugin-prettier": "^4.2.1",
// "eslint-plugin-react": "^7.30.1",
//  "eslint-plugin-jsx-a11y": "^6.6.1",
// "prettier": "^2.7.1"
