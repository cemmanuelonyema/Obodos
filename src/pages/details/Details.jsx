import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { StyledDetails } from './StyledDetails';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { SelectCountry } from '../../components/countries/selectCountry/SelectCountry';
import {
  getBorCountry,
  getCountry,
  selectCountries,
} from '../../redux/slices/countriesSlice';
import { SelectSkeleton } from '../../components/layout/skeleton/SelectSkeleton';

export const Details = () => {
  const { country, status } = useSelector(selectCountries);
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (name.length > 3) {
      dispatch(getCountry(name));
    } else {
      dispatch(getBorCountry(name));
    }
  }, [name]);

  return (
    <StyledDetails>
      <div className="container details__container">
        <Link to="/" className="btn">
          <FaArrowAltCircleLeft />
          Back
        </Link>
        {status === 'loading' ? (
          <SelectSkeleton />
        ) : (
          <SelectCountry country={country} />
        )}
      </div>
    </StyledDetails>
  );
};
