import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import this to use Jest DOM matchers
import Jumbotron from '../index'; // Replace with the correct path to your Jumbotron component file

describe('Jumbotron Component', () => {
  it('renders with default props', () => {
    const { container } = render(<Jumbotron />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders children components', () => {
    const { getByText } = render(
      <Jumbotron>
        <Jumbotron.Title>Title</Jumbotron.Title>
        <Jumbotron.SubTitle>Subtitle</Jumbotron.SubTitle>
      </Jumbotron>
    );

    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Subtitle')).toBeInTheDocument();
  });

  it('renders with custom styles from Container component', () => {
    const { container } = render(
      <Jumbotron.Container style={{ backgroundColor: 'blue' }}>
        Content
      </Jumbotron.Container>
    );

    expect(container.firstChild).toHaveStyle('background-color: blue');
  });

  it('renders with custom styles from Image component', () => {
    const { container } = render(<Jumbotron.Image src="image.jpg" style={{ width: '100%' }} />);
    const image = container.querySelector('img');

    expect(image).toHaveAttribute('src', 'image.jpg');
    expect(image).toHaveStyle('width: 100%');
  });

  // Add more test cases based on your component features and requirements
});
