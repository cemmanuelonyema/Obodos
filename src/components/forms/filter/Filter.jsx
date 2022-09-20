import React from "react";
import "./filter.css";

export const Filter = () => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <form className="form filter__form">
      {" "}
      <select name="label" onChange={handleChange}>
        <option>Family</option>
        <option>Professional</option>
        <option>Friend</option>
      </select>
    </form>
  );
};
