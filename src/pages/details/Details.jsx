import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { StyledDetails } from './StyledDetails';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { SelectCountry } from '../../components/countries/selectCountry/SelectCountry';
import { getCountry, selectCountries } from '../../redux/slices/countriesSlice';
import { SelectSkeleton } from '../../components/layout/skeleton/SelectSkeleton';
import { useGetCountryQuery } from '../../redux/slices/apiSlice';

export const Details = () => {
  const { country, status } = useSelector(selectCountries);
  const { param } = useParams();
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getCountry(param));
  //   }, [param]);

  const { data, error, isLoading } = useGetCountryQuery(param);

  return (
    <StyledDetails>
      <div className="container details__container">
        <Link to="/" className="btn">
          <FaArrowAltCircleLeft />
          Back
        </Link>
        {/* {status === 'loading' ? ( */}
        {isLoading ? <SelectSkeleton /> : <SelectCountry country={data} />}
      </div>
    </StyledDetails>
  );
};
