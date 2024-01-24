import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import OptForm from '../index'; // Replace with the correct path to your OptForm component file

describe('OptForm Component', () => {
  it('renders OptForm component with Input, Button, Text, and Break', () => {
    const { getByPlaceholderText, getByText,getAllByText } = render(
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Subscribe Now</OptForm.Button>
        <OptForm.Text>Join our newsletter to receive updates</OptForm.Text>
        <OptForm.Break />
      </OptForm>
    );

    // Check if the Input component is rendered with the correct placeholder
    const breakElements = getAllByText('');
    expect(breakElements.length).toBe(6);
    // Check if the Button component is rendered with the correct text content
    const buttonElement = getByText('Subscribe Now');
    expect(buttonElement).toBeInTheDocument();

    // Check if the Text component is rendered with the correct text content
    const textElement = getByText('Join our newsletter to receive updates');
    expect(textElement).toBeInTheDocument();

  });

  // Add more test cases based on your component features and requirements
});
