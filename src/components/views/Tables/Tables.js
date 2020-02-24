import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {settings} from '../../../data/dataStore';

import styles from './Tables.module.scss';

const Tables = ({id}) => {
  const url = settings.url;

  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      <Link to={`${url}/tables/booking/new`}>New booking</Link>
      <Link to={`${url}/tables/booking/${id}`}>Bookings info</Link>
      <Link to={`${url}/tables/events/new`}>New event</Link>
      <Link to={`${url}/tables/events/${id}`}>Events info</Link>
    </div>
  );
};

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;
