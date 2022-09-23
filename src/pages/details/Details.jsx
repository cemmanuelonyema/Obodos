import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { StyledDetails } from './StyledDetails';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { SelectCountry } from '../../components/countries/selectCountry/SelectCountry';
import { getCountry, selectCountries } from '../../redux/slices/countriesSlice';

export const Details = () => {
  const { country } = useSelector(selectCountries);
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountry(name));
  }, [name]);

  return (
    <StyledDetails>
      <div className="container details__container">
        <Link to="/">
          <FaArrowAltCircleLeft />
          Back
        </Link>
        <SelectCountry country={country} />
      </div>
    </StyledDetails>
  );
};
