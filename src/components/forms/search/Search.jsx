import React, { useState } from "react";
import "./search.css";

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    console.log(searchQuery);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="form search__form">
      <span>icon</span>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={handleChange}
      />
    </form>
  );
};
