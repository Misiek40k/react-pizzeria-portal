import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

import Header from '../Header/Header';

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <AppBar>
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <Header />
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Container maxWidth='lg'>
          <Toolbar />
          {children}
        </Container>
      </main>
    </Fragment>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
