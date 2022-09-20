import React, { Fragment } from "react";
import "./App.css";
import { Countries } from "./components/countries/Countries";
import { Forms } from "./components/forms/Forms";
import { Header } from "./components/layout/header/Header";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Forms />
        <Countries />
      </main>
    </Fragment>
  );
};
