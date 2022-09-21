import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiSun, FiMoon } from 'react-icons/fi';
import { setMode } from '../../../redux/country/countriesSlice';
import './header.css';

export const Header = () => {
  const { darkMode } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  return (
    <header className="header">
      <div className="container header__container">
        <h1>Where in the world?</h1>
        <button className="btn header__btn" onClick={() => dispatch(setMode())}>
          {darkMode ? (
            <span>
              {' '}
              <FiSun className="icon" /> Light Mode
            </span>
          ) : (
            <span>
              {' '}
              <FiMoon className="icon" /> Dark Mode
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
