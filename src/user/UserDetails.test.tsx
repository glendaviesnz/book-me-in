import * as React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';

import { UserDetailsUnWrapped } from './UserDetails';

describe('UserDetails', () => {
  let renderedComponent: any;
  const translationMock = (value: string) => value;

  beforeEach(() => {
    renderedComponent = render(<UserDetailsUnWrapped name="Jim Smith" t={translationMock} />);
  })

  afterEach(cleanup);  
  
  test('should be defined', () => {
    const { container } = renderedComponent;
    expect(container).toBeDefined();
  });

  test('should render name prop', () => {
    const { getByText, rerender } = renderedComponent;

    expect(getByText('Jim Smith')).toBeDefined();
    rerender(<UserDetailsUnWrapped name="Sally Smith" t={translationMock} />);
    expect(getByText('Sally Smith')).toBeDefined();
  });

  test('should open account menu when menu trigger clicked', async () => {
    const { getByTestId, getByText } = renderedComponent;

    fireEvent.click(getByTestId('account-menu'));
    expect(getByText('logout')).toBeDefined();
  });
});
