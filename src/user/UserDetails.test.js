import React from 'react';
import { shallow } from 'enzyme';

import UserDetails from './UserDetails';
it('renders without crashing', () => {
  shallow(<UserDetails />);
});

