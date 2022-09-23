import React from 'react';
import { StyledDetails } from './StyledDetails';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { SelectCountry } from '../../components/countries/selectCountry/SelectCountry';

export const Details = () => {
  return (
    <StyledDetails>
      <div className="container details__container">
        <button>
          <FaArrowAltCircleLeft />
          Back
        </button>
        <SelectCountry />
      </div>
    </StyledDetails>
  );
};
