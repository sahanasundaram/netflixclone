import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../index'; 

describe('Footer Component', () => {
  it('renders Footer component with children', () => {
    const { getByText } = render(<Footer>Footer Content</Footer>);
    expect(getByText('Footer Content')).toBeInTheDocument();
  });

  it('renders Footer.Row component with children', () => {
    const { getByText } = render(<Footer.Row>Row Content</Footer.Row>);
    expect(getByText('Row Content')).toBeInTheDocument();
  });

  it('renders Footer.Column component with children', () => {
    const { getByText } = render(<Footer.Column>Column Content</Footer.Column>);
    expect(getByText('Column Content')).toBeInTheDocument();
  });

  it('renders Footer.Link component with children', () => {
    const { getByText } = render(<Footer.Link href="#">Link Content</Footer.Link>);
    const linkElement = getByText('Link Content');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '#');
  });

  it('renders Footer.Title component with children', () => {
    const { getByText } = render(<Footer.Title>Title Content</Footer.Title>);
    expect(getByText('Title Content')).toBeInTheDocument();
  });

  it('renders Footer.Text component with children', () => {
    const { getByText } = render(<Footer.Text>Text Content</Footer.Text>);
    expect(getByText('Text Content')).toBeInTheDocument();
  });

  it('renders Footer.Break component with children', () => {
    const { getByText } = render(<Footer.Break>Break Content</Footer.Break>);
    expect(getByText('Break Content')).toBeInTheDocument();
  });
});
