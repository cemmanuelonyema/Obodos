import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FaArrowAltCircleLeft } from 'react-icons/fa';

import { StyledDetails } from './StyledDetails';
import { SelectCountry } from '../../components/countries/selectCountry/SelectCountry';
import { SelectSkeleton } from '../../components/layout/skeleton/SelectSkeleton';
import { useGetCountryByCodeQuery } from '../../redux/slices/apiSlice';

export const Details = () => {
  //param slug
  const { param } = useParams();

  //hooks
  const { data, isLoading } = useGetCountryByCodeQuery(param);

  //jsx
  return (
    <StyledDetails>
      <div className="container details__container">
        <Link to="/" className="btn">
          <FaArrowAltCircleLeft />
          Back
        </Link>
        {isLoading ? <SelectSkeleton /> : <SelectCountry country={data} />}
      </div>
    </StyledDetails>
  );
};
