import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <h1>Where in the world?</h1>
        <div className="mode">
          <span>Icon</span>
          <span>Dark Mode</span>
        </div>
      </div>
    </header>
  );
};
