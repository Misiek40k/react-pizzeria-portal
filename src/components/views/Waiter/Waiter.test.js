import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';

it('renders without crashing', () => {
  shallow(<Waiter />);
});
