import React from 'react';
import { render } from '@testing-library/react';
import Feature from '../index'; // Update the import path accordingly

describe('Feature Component', () => {
  it('renders Feature component with Title and SubTitle', () => {
    const { getByText } = render(
      <Feature>
        <Feature.Title>Title Content</Feature.Title>
        <Feature.SubTitle>SubTitle Content</Feature.SubTitle>
      </Feature>
    );

    expect(getByText('Title Content')).toBeInTheDocument();
    expect(getByText('SubTitle Content')).toBeInTheDocument();
  });
});
