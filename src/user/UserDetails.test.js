import React from 'react';
import { shallow, mount } from 'enzyme';

import UserDetails from './UserDetails';
it('renders without crashing', () => {
  const wrapper = shallow(<UserDetails />);
  expect(wrapper).toMatchSnapshot();
});
