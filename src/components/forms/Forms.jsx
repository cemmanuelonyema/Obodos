import React from "react";
import { Filter } from "./filter/Filter";
import "./forms.css";
import { Search } from "./search/Search";

export const Forms = () => {
  return (
    <section className="forms">
      <div className="container forms__container">
        <Search />
        <Filter />
      </div>
    </section>
  );
};
