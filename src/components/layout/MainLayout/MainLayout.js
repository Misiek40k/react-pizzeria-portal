import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';

const MainLayout = props => {
  return (
    <div>
      <Header />
      <main>
        {props.children}
      </main>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
