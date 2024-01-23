import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Form from '../index'; 
describe('Form Component', () => {
  it('renders Form component with children', () => {
    const { getByText } = render(<Form>Form Content</Form>);
    expect(getByText('Form Content')).toBeInTheDocument();
  });

  it('renders Form.Base component with children', () => {
    const { getByText } = render(<Form.Base>Base Content</Form.Base>);
    expect(getByText('Base Content')).toBeInTheDocument();
  });

  it('renders Form.Error component with children', () => {
    const { getByText } = render(<Form.Error>Error Content</Form.Error>);
    expect(getByText('Error Content')).toBeInTheDocument();
  });

  it('renders Form.Title component with children', () => {
    const { getByText } = render(<Form.Title>Title Content</Form.Title>);
    expect(getByText('Title Content')).toBeInTheDocument();
  });

  it('renders Form.Text component with children', () => {
    const { getByText } = render(<Form.Text>Text Content</Form.Text>);
    expect(getByText('Text Content')).toBeInTheDocument();
  });

  it('renders Form.TextSmall component with children', () => {
    const { getByText } = render(<Form.TextSmall>TextSmall Content</Form.TextSmall>);
    expect(getByText('TextSmall Content')).toBeInTheDocument();
  });

  it('renders Form.Link component with children', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Form.Link href="">Link Content</Form.Link>
      </BrowserRouter>
    );

    const linkElement = getByText('Link Content');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '');
  });

  it('renders Form.Input component with children', () => {
    const { getByPlaceholderText } = render(<Form.Input placeholder="Enter value" />);
    const inputElement = getByPlaceholderText('Enter value');
    expect(inputElement).toBeInTheDocument();
  });

  
  it('fires onChange event for Form.Input component', () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <Form.Input placeholder="Enter value" onChange={onChangeMock} />
      </BrowserRouter>
    );
  
    const inputElement = getByPlaceholderText('Enter value');
  
    fireEvent.change(inputElement, { target: { value: 'Test Value' } });
  
    // The correct way to check if the mock function was called with the expected argument
    expect(onChangeMock).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: 'Test Value'
        })
      })
    );
  });

  it('renders Form.Submit component with children', () => {
    const { getByText } = render(<Form.Submit>Submit Content</Form.Submit>);
    expect(getByText('Submit Content')).toBeInTheDocument();
  });
});
