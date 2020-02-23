import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Header from '../Header/Header';

const MainLayout = ({children}) => {
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          <Header />
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <main>
        {children}
      </main>
    </Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
