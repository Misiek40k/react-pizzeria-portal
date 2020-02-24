import React from 'react';
import { NavLink } from 'react-router-dom';
import {settings} from '../../../data/dataStore';

const PageNav = () => {
  const url = settings.url;

  return (
    <nav>
      <NavLink exact to={`${url}/`} activeClassName='active'>Home</NavLink>
      <NavLink to={`${url}/login`} activeClassName='active'>Login</NavLink>
      <NavLink to={`${url}/tables`} activeClassName='active'>Tables</NavLink>
      <NavLink to={`${url}/waiter`} activeClassName='active'>Waiter</NavLink>
      <NavLink to={`${url}/kitchen`} activeClassName='active'>Kitchen</NavLink>
    </nav>
  );
};

export default PageNav;
