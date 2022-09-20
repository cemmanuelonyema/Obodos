import React, { Fragment } from "react";
import { Countries } from "./components/countries/Countries";
import { Header } from "./components/layout/header/Header";

export const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <Countries />
      </main>
    </Fragment>
  );
};
