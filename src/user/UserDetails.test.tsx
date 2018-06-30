import { shallow } from 'enzyme';
import * as React from 'react';

import { UserDetailsUnWrapped } from './UserDetails';

describe('UserDetails', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<UserDetailsUnWrapped name="Jim Smith" t={() => {}} />);
  })

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
  
  it('displays logged in users name', () => {
    expect(wrapper.find('.user-name').text()).toEqual('Jim Smith');
  });

})


