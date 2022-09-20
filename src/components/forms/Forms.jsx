import React from "react";
import "./forms.css";
import { Search } from "./search/Search";

export const Forms = () => {
  return (
    <section className="forms">
      <div className="container forms__container">
        <Search />
      </div>
    </section>
  );
};
