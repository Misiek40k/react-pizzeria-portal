import React from 'react';
import PropTypes from 'prop-types';

import PageNav from '../PageNav/PageNav';

import styles from './Header.module.scss';

const Header = props => {
  return (
    <header className={styles.component}>
      <PageNav />
    </header>
  );
};

Header.propTypes = {

};

export default Header;
