import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/layout/header/Header';

export const Layout = () => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  );
};
