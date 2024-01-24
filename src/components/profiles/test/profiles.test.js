import React from 'react';
import { render } from '@testing-library/react';
import Profiles from '../index';

test('renders Profiles component without crashing', () => {
  render(<Profiles />);
});

test('renders Profiles.Title component', () => {
  const { getByText } = render(<Profiles.Title>My Profiles</Profiles.Title>);
  expect(getByText('My Profiles')).toBeInTheDocument();
});

test('renders Profiles.List component', () => {
    const { container } = render(
      <Profiles.List>
        <Profiles.User>
          <Profiles.Picture src="1" />
          <Profiles.Name>User 1</Profiles.Name>
        </Profiles.User>
        {/* Add more user profiles as needed */}
      </Profiles.List>
    );
  
    // Ensure that there is at least one user profile rendered
    expect(container.querySelector('.profiles__Item-sc-a6vbyj-5')).toBeInTheDocument();
  });
  
  test('renders Profiles.User component with a picture and name', () => {
    const { getByText, getByAltText } = render(
      <Profiles.User>
        <Profiles.Picture src="1" alt="User 1" />
        <Profiles.Name>User 1</Profiles.Name>
      </Profiles.User>
    );
  
    // Ensure that the user's name and picture are rendered
    expect(getByText('User 1')).toBeInTheDocument();
    expect(getByAltText('User 1')).toBeInTheDocument();
  });
  
  
