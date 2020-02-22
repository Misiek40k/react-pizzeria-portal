import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Waiter.module.scss';

const Waiter = ({ id }) => {
  return (
    <div className={styles.component}>
      <h2>Waiter view</h2>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`}>New order</Link>
      <Link to={`${process.env.PUBLIC_URL}/waiter/order/${id}`}>Order ID</Link>
    </div>
  );
};

Waiter.propTypes = {
  id: PropTypes.string,
};

export default Waiter;
