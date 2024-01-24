import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../index'; // Replace with the correct path to your Loading component file

describe('Loading Component', () => {
  it('renders Loading component with a picture', () => {
    const { getByTestId, container } = render(<Loading src="user123" />);
    
    // Check if the Picture component is rendered with the correct data-testid and src
    const pictureElement = getByTestId('loading-picture');
    expect(pictureElement).toBeInTheDocument();
    expect(pictureElement).toHaveAttribute('src', '/images/users/user123.png');

    // Check if the Spinner component is rendered
    const spinnerElement = container.firstChild;
    expect(spinnerElement).toBeInTheDocument();
  });

  // Add more test cases based on your component features and requirements
});
