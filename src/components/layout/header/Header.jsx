import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSun, FaMoon } from 'react-icons/fa';
import { setMode, selectCountries } from '../../../redux/slices/countriesSlice';
import { StyledHeader } from './StyledHeader';

export const Header = () => {
  const { darkMode } = useSelector(selectCountries);
  const dispatch = useDispatch();

  return (
    <StyledHeader>
      <div className="container header__container">
        <h1>Where in the world?</h1>
        <button className="btn header__btn" onClick={() => dispatch(setMode())}>
          {darkMode ? (
            <span>
              {' '}
              <FaSun className="icon" /> Light Mode
            </span>
          ) : (
            <span>
              {' '}
              <FaMoon className="icon" /> Dark Mode
            </span>
          )}
        </button>
      </div>
    </StyledHeader>
  );
};
