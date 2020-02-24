import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import styles from './PageNav.module.scss';
import {settings} from '../../../data/dataStore';

const PageNav = () => {
  const url = settings.url;

  return (
    <nav className={styles.component}>
      <Button className={styles.link} component={NavLink} exact to={`${url}/`} activeClassName='active'>Home</Button>
      <Button className={styles.link} component={NavLink} to={`${url}/tables`} activeClassName='active'>Tables</Button>
      <Button className={styles.link} component={NavLink} to={`${url}/waiter`} activeClassName='active'>Waiter</Button>
      <Button className={styles.link} component={NavLink} to={`${url}/kitchen`} activeClassName='active'>Kitchen</Button>
      <Button className={styles.link} component={NavLink} to={`${url}/login`} activeClassName='active'>Login</Button>
    </nav>
  );
};

export default PageNav;
