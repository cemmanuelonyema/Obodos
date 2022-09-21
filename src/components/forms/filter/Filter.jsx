import React from "react";
import "./filter.css";

export const Filter = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="select">
      <select name="label" onChange={handleChange}>
        <option>Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
      <span>icon</span>
    </div>
  );
};

// https://restcountries.com/v3.1/all
