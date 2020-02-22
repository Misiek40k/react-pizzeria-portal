import React from 'react';
import PropTypes from 'prop-types';

import styles from './Dashboard.module.scss';

const Dashboard = props => {
  return (
    <div className={styles.component}>
      <h2>Dashboard view</h2>
    </div>
  );
};

Dashboard.propTypes = {

};

export default Dashboard;
