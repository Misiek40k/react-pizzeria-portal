import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

const MainLayout = props => {
  return (
    <Fragment>
      <Header />
      <main>
        {props.children}
      </main>
    </Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
