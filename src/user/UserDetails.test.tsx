import * as React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';

import UserDetails  from './UserDetails';

describe('UserDetails', () => {
  let renderedComponent: any;

  beforeEach(() => {
    renderedComponent = render(<UserDetails name="Jim Smith"  />);
  })

  afterEach(cleanup);  
  
  test('should be defined', () => {
    const { container } = renderedComponent;
    expect(container).toBeDefined();
  });

  test('should render name prop', () => {
    const { getByText, rerender } = renderedComponent;

    expect(getByText('Jim Smith')).toBeDefined();
    rerender(<UserDetails name="Sally Smith"  />);
    expect(getByText('Sally Smith')).toBeDefined();
  });

  test('should open account menu when menu trigger clicked', async () => {
    const { getByTestId, getByText } = renderedComponent;

    fireEvent.click(getByTestId('account-menu'));
    expect(getByText('logout')).toBeDefined();
  });
});
