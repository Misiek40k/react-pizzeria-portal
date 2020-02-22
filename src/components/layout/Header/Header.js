import React from 'react';

import PageNav from '../PageNav/PageNav';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.component}>
      <PageNav />
    </header>
  );
};

export default Header;
