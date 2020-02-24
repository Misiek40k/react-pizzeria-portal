import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { settings } from '../../../data/dataStore';

import styles from './Waiter.module.scss';

const Waiter = ({ id }) => {
  const url = settings.url;

  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={`${url}/waiter/order/new`}>New order</Link>
      <Link to={`${url}/waiter/order/${id}`}>Order ID</Link>
    </div>
  );
};

Waiter.propTypes = {
  id: PropTypes.string,
};

export default Waiter;
