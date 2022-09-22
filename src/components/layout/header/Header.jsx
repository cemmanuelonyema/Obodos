import React, { useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './header.css';

export const Header = () => {
  const [dark, setDark] = useState(false);
  return (
    <header className="header">
      <div className="container header__container">
        <h1>Where in the world?</h1>
        <button className="btn header__btn" onClick={() => setDark(!dark)}>
          {dark ? <FiSun className="icon" /> : <FiMoon className="icon" />}
          <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
};
